import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const mustExist = [
  "app/dashboard/page.tsx",
  "app/dashboard/layout.tsx",
  "app/dashboard/dashboard.css",
  "app/onboarding/page.tsx",
  "app/intake/page.tsx",
  "app/impact/page.tsx",
  "app/alerts.css",
  "app/impact.css",
  "components/EvaluatorJourneys.tsx",
  "openapi/raj-agripay.yaml",
  "schemas/scheme-pack.example.json",
  "schemas/claim-truth-packet.example.json",
  "docs/SECURITY_GOVERNANCE.md",
  "docs/90_DAY_PILOT.md",
  "docs/DEMO_RUNBOOK.md",
  "docs/JUDGE_DEMO_4_MINUTES.md",
  "docs/EVALUATOR_OBJECTIONS.md",
  "docs/RUNTIME_VERIFICATION.md",
];

const assertions = [
  ["next.config.mjs", "destination: \"/dashboard\""],
  ["app/dashboard/page.tsx", "Dealer Payment Operations"],
  ["app/dashboard/page.tsx", "Evidence before expenditure"],
  ["app/dashboard/page.tsx", "Authoritative acknowledgement"],
  ["app/dashboard/page.tsx", "Raj eSign"],
  ["app/dashboard/page.tsx", "e-Sanchar 3.0"],
  ["app/dashboard/page.tsx", "SUTRA Dealer Edge"],
  ["app/dashboard/page.tsx", "no live RajKisan / IFMS / PFMS credentials are claimed"],
  ["app/onboarding/page.tsx", "Payment Identity Lock"],
  ["app/onboarding/page.tsx", "RajKisan licence"],
  ["app/intake/page.tsx", "Do not OCR what Government already made machine-readable"],
  ["app/intake/page.tsx", "DUPLICATE_INVOICE_REFERENCE"],
  ["app/intake/page.tsx", "12 deterministic"],
  ["app/impact/page.tsx", "EVALUATION SCENARIO"],
  ["app/impact/page.tsx", "Working-capital cycle released"],
  ["components/EvaluatorJourneys.tsx", "SMS / PORTAL ALERTS"],
  ["components/EvaluatorJourneys.tsx", "Evaluation messages only"],
  ["components/EvaluatorJourneys.tsx", "Impact lab"],
  ["README.md", "RAJ-AGRIPAY does not replace Rajasthan's finance infrastructure"],
];

let failures = 0;
for (const rel of mustExist) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) { console.error(`FAIL missing ${rel}`); failures++; }
  else console.log(`PASS exists ${rel}`);
}

for (const [rel, needle] of assertions) {
  const full = path.join(root, rel);
  const text = fs.existsSync(full) ? fs.readFileSync(full, "utf8") : "";
  if (!text.includes(needle)) { console.error(`FAIL ${rel} missing truth invariant: ${needle}`); failures++; }
  else console.log(`PASS invariant ${rel}: ${needle}`);
}

for (const rel of ["schemas/scheme-pack.example.json", "schemas/claim-truth-packet.example.json"]) {
  try { JSON.parse(fs.readFileSync(path.join(root, rel), "utf8")); console.log(`PASS JSON ${rel}`); }
  catch (err) { console.error(`FAIL JSON ${rel}: ${err.message}`); failures++; }
}

const openapi = fs.readFileSync(path.join(root, "openapi/raj-agripay.yaml"), "utf8");
if (!openapi.includes("openapi: 3.1") || !openapi.includes("/claims")) {
  console.error("FAIL OpenAPI contract missing 3.1 or /claims"); failures++;
} else console.log("PASS OpenAPI orchestration contract");

if (failures) {
  console.error(`\nRAJ-AGRIPAY release self-check FAILED (${failures})`);
  process.exit(1);
}
console.log("\nRAJ-AGRIPAY release self-check PASSED — officer dashboard, critical journeys, contracts, alerts, impact assumptions and authority invariants are present.");
