import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const mustExist = [
  "app/page.tsx",
  "app/layout.tsx",
  "app/dashboard/page.tsx",
  "app/dashboard/layout.tsx",
  "app/dashboard/dashboard.css",
  "app/dashboard/DashboardBoot.tsx",
  "app/dashboard/EvaluatorConsole.tsx",
  "app/dashboard/boot.css",
  "app/dashboard/evaluator-console.css",
  "app/dashboard/map-pro.css",
  "app/dashboard/submission-polish.css",
  "public/rajasthan-operations-map.svg",
  "app/onboarding/page.tsx",
  "app/intake/page.tsx",
  "app/impact/page.tsx",
  "app/vision/page.tsx",
  "app/vision/vision.module.css",
  "app/journeys.css",
  "app/impact.css",
  "openapi/raj-agripay.yaml",
  "schemas/scheme-pack.example.json",
  "schemas/claim-truth-packet.example.json",
  "docs/SECURITY_GOVERNANCE.md",
  "docs/90_DAY_PILOT.md",
  "docs/VISION_ROADMAP.md",
  "docs/SUBMISSION_MASTER.md",
  "docs/FORM_ANSWERS_FINAL.md",
  "docs/MIGRATION_CUTOVER.md",
  "docs/GOVERNMENT_HANDOVER.md",
  "docs/RACI.md",
  "docs/SYNTHETIC_DATA_MANIFEST.md",
  "docs/JUDGE_DEMO_4_MINUTES.md",
  "docs/EVALUATOR_OBJECTIONS.md",
  "docs/RUNTIME_VERIFICATION.md",
];

const assertions = [
  ["app/page.tsx", "redirect(\"/dashboard\")"],
  ["app/layout.tsx", "Functional evaluator prototype"],
  ["app/dashboard/page.tsx", "Dealer Payment Operations"],
  ["app/dashboard/page.tsx", "Evidence before expenditure"],
  ["app/dashboard/page.tsx", "Simulate authoritative acknowledgement"],
  ["app/dashboard/page.tsx", "Raj eSign"],
  ["app/dashboard/page.tsx", "e-Sanchar 3.0"],
  ["app/dashboard/page.tsx", "SUTRA Dealer Edge"],
  ["app/dashboard/page.tsx", "no live RajKisan / IFMS / PFMS credentials are claimed"],
  ["app/dashboard/DashboardBoot.tsx", "EVALUATION SANDBOX"],
  ["app/dashboard/DashboardBoot.tsx", "Loading evaluation claim ledger"],
  ["app/dashboard/EvaluatorConsole.tsx", "FUNCTIONAL PROTOTYPE"],
  ["app/dashboard/EvaluatorConsole.tsx", "GREEN · CLEAN CLAIM"],
  ["app/dashboard/EvaluatorConsole.tsx", "AMBER · BANK CHANGE"],
  ["app/dashboard/EvaluatorConsole.tsx", "RED · DUPLICATE"],
  ["app/dashboard/EvaluatorConsole.tsx", "No autonomous expenditure"],
  ["app/dashboard/EvaluatorConsole.tsx", "FarmGraph AI interoperability"],
  ["app/dashboard/submission-polish.css", "FUNCTIONAL PROTOTYPE"],
  ["app/onboarding/page.tsx", "Payment Identity Lock"],
  ["app/onboarding/page.tsx", "RajKisan licence"],
  ["app/intake/page.tsx", "Do not OCR what Government already made machine-readable"],
  ["app/intake/page.tsx", "DUPLICATE_INVOICE_REFERENCE"],
  ["app/intake/page.tsx", "12 deterministic"],
  ["app/impact/page.tsx", "EVALUATION SCENARIO"],
  ["app/impact/page.tsx", "Working-capital cycle released"],
  ["app/vision/page.tsx", "Statewide"],
  ["docs/90_DAY_PILOT.md", "Wave 4 - Planning intelligence"],
  ["docs/VISION_ROADMAP.md", "FarmGraph AI interoperability"],
  ["README.md", "IFMS moves public money"],
  ["README.md", "operations product, not a pitch page"],
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
console.log("\nRAJ-AGRIPAY release self-check PASSED - root-to-operations UX, evaluator scenarios, prototype truth boundary, dealer lifecycle, claim truth, impact, statewide vision, contracts, migration, handover and authority invariants are present.");
