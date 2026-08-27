#!/usr/bin/env bash
set -euo pipefail

PORT="${PORT:-3107}"
LOG_FILE="${TMPDIR:-/tmp}/raj-agripay-release-${PORT}.log"
PID=""

cleanup() {
  if [[ -n "${PID}" ]] && kill -0 "${PID}" 2>/dev/null; then
    kill "${PID}" 2>/dev/null || true
    wait "${PID}" 2>/dev/null || true
  fi
}
trap cleanup EXIT

echo "== RAJ-AGRIPAY release verification =="
echo "Node: $(node --version)"
echo "npm:  $(npm --version)"

echo "[1/6] Installing dependencies"
npm install --no-audit --no-fund

echo "[2/6] Static evaluator invariants"
npm run verify:static

echo "[3/6] TypeScript"
npm run typecheck

echo "[4/6] Production build"
npm run build

echo "[5/6] Starting production server on port ${PORT}"
PORT="${PORT}" npm start >"${LOG_FILE}" 2>&1 &
PID=$!

for _ in $(seq 1 30); do
  if curl -fsS "http://127.0.0.1:${PORT}/api/health" >/dev/null 2>&1; then
    break
  fi
  if ! kill -0 "${PID}" 2>/dev/null; then
    echo "Production server exited before becoming healthy."
    cat "${LOG_FILE}"
    exit 1
  fi
  sleep 1
done

curl -fsS "http://127.0.0.1:${PORT}/api/health" >/dev/null

echo "[6/6] Evaluator-route smoke test"
for route in /dashboard /onboarding /intake /impact /vision; do
  code=$(curl -sS -o /dev/null -w "%{http_code}" "http://127.0.0.1:${PORT}${route}")
  if [[ "${code}" != "200" ]]; then
    echo "FAIL ${route}: HTTP ${code}"
    cat "${LOG_FILE}"
    exit 1
  fi
  echo "PASS ${route}: HTTP ${code}"
done

echo
printf '%s\n' "RELEASE_GATE=PASS" "PORT=${PORT}" "LOG=${LOG_FILE}"
echo "RAJ-AGRIPAY production build + health + evaluator routes passed."
