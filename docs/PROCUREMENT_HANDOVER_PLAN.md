# Government Procurement & Handover Readiness Plan

## Objective
RAJ-AGRIPAY is designed so a 90-day pilot can end in a controlled Government handover rather than permanent dependency on an opaque vendor-operated SaaS product.

## Delivery principles
- Government data remains Government-owned.
- Authoritative finance and Agriculture systems remain sovereign systems of record.
- Production credentials are provisioned by the competent Government authority and are never embedded in source code.
- OpenAPI contracts, data dictionaries, rule-pack schemas and runbooks are delivered with the system.
- Scheme logic is governed configuration, not hidden vendor code.
- No proprietary low-code licence is required to keep schemes operational.

## Indicative work packages

### WP1 — Discovery & baseline
Deliverables:
- AS-IS process map;
- system/interface inventory;
- pilot scheme selection;
- source-data inventory;
- baseline TAT/manual-touch/reconciliation measurements;
- security/privacy/interface dependency register.

Acceptance evidence:
- signed process map;
- approved interface list;
- baseline KPI report.

### WP2 — Dealer lifecycle & identity federation
Deliverables:
- Dealer Passport service;
- onboarding/renewal journey;
- RajKisan/SSO/IFMS adapter contracts;
- Payment Identity Lock;
- dealer lifecycle audit model.

Acceptance evidence:
- UAT scripts passed for new dealer, renewal, bank-profile change and duplicate identity cases.

### WP3 — Invoice intelligence & claim truth
Deliverables:
- IRN/QR structured-evidence path;
- OCR fallback;
- confidence/human-review gate;
- 12-control Claim Truth engine;
- reason-coded exception queue;
- duplicate detection.

Acceptance evidence:
- supported structured invoices parsed correctly;
- low-confidence OCR cannot auto-advance;
- exact-key duplicate test passes 100%.

### WP4 — Scheme Rule Studio
Deliverables:
- effective-dated Scheme Pack model;
- maker-checker publication;
- historical replay;
- pilot scheme configurations.

Acceptance evidence:
- new rule version affects only eligible future-effective claims;
- historical claim replay reproduces original decision.

### WP5 — Finance orchestration & reconciliation
Deliverables:
- Raj Sewa Dwaar-compatible integration pattern;
- IFMS/PFMS/SNA-SPARSH contract adapters as applicable;
- fund-route resolver;
- acknowledgement/UTR ingestion;
- reconciliation engine;
- return/failure exception model.

Acceptance evidence:
- no payment is shown successful before authoritative acknowledgement;
- claim-to-UTR lineage is complete for test cases;
- eligible auto-reconciliation target >=90% once authoritative references are available.

### WP6 — MIS, alerts & dealer transparency
Deliverables:
- Command Centre;
- district operations view;
- dealer claim timeline;
- SMS/portal notification adapter;
- grounded Dealer Saarthi;
- SLA/exception analytics.

Acceptance evidence:
- notification event provenance is visible;
- status messages match authoritative claim state;
- synthetic/demo and measured/live data are visually distinguishable.

### WP7 — SUTRA assisted channel
Deliverables:
- optional evidence-capture workflow;
- Hindi/BHASHINI-ready voice adapter;
- encrypted offline queue;
- idempotent sync;
- local receipt.

Acceptance evidence:
- offline packet can be captured/sealed;
- sync can retry without duplicate claim mutation;
- Government expenditure cannot be approved offline.

### WP8 — Security, performance, migration & handover
Deliverables:
- threat model;
- RBAC/ABAC policy matrix;
- vulnerability remediation report;
- migration/cutover report;
- backup/recovery runbook;
- operational dashboards;
- source-code/configuration handover;
- administrator and officer training.

Acceptance evidence:
- critical security findings closed or formally risk-accepted;
- backup restore demonstrated;
- migration totals reconcile;
- Government-designated team can operate rule publication and core support procedures using delivered documentation.

## Handover package
At pilot close, deliver:
1. source code for agreed pilot scope;
2. dependency lockfiles and SBOM;
3. build/deployment instructions;
4. environment/configuration dictionary;
5. OpenAPI specification;
6. database/data dictionary;
7. Scheme Pack schema and configured pilot packs;
8. RBAC/ABAC matrix;
9. interface contracts and mock/sandbox stubs;
10. migration/cutover artifacts;
11. security test/remediation report;
12. backup/restore and DR runbook;
13. monitoring/alerting runbook;
14. UAT evidence and defect closure log;
15. administrator guide;
16. scheme officer guide;
17. dealer support guide;
18. architecture decision records;
19. known limitations/dependency register;
20. release/version manifest.

## Vendor-lock-in controls
RAJ-AGRIPAY should avoid:
- opaque workflow engines whose rules cannot be exported;
- mandatory per-user commercial runtime licences;
- proprietary document formats for scheme policy;
- storing Government secrets in vendor-controlled repositories;
- payment settlement through a private wallet;
- data egress to third-party AI endpoints without explicit approval.

Where an external managed service is approved, the interface, data retention, fallback and exit path must be documented.

## Indicative support model after pilot
- L1: Department-designated helpdesk / dealer support;
- L2: application/integration support;
- L3: product engineering and security defects;
- Scheme configuration: trained Department maker-checker users with controlled Syntheon support;
- Infrastructure: Government/RSDC/approved hosting operations according to agreed responsibility matrix.

## Intellectual property / reuse posture
The commercial model should distinguish:
- Government-owned project data, scheme configurations and deployment-specific artifacts;
- deliverable source/configuration rights agreed in the work order;
- Syntheon's reusable generic orchestration know-how, accelerators and non-Government-specific components.

The exact IP/licensing allocation remains subject to the Challenge/work-order terms and should not be overclaimed in the submission.
