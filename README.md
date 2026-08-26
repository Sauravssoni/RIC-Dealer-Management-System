# RAJ-AGRIPAY

## Rajasthan Integrated Dealer Lifecycle, Claim & Settlement Fabric

> **One Dealer. One Claim. One Ledger. One Settlement Journey.**

RAJ-AGRIPAY is an evaluation-grade, research-backed prototype for Rajasthan's **Integrated Dealer Management System** challenge for fertilizer, seed and input dealers.

It is deliberately designed as an **Agriculture-specific claim-to-settlement control plane**, not another generic vendor portal and not a parallel payment gateway.

## Open the product

The default route redirects to the officer-grade operations console:

```text
/ → /dashboard
```

Critical functional journeys:

- `/dashboard` — Agriculture Finance Operations console.
- `/onboarding` — dealer onboarding and renewal → Dealer Passport.
- `/intake` — structured e-Invoice / OCR fallback → Claim Truth Packet.
- `/impact` — editable TAT, working-capital and administrative-value model.
- `/api/health` — evaluation-service health endpoint.

The dashboard is intentionally **not a pitch page**. It opens directly into work queues, SLAs, exceptions, district MIS, claims, scheme controls, authoritative-system readiness and assisted-service operations.

---

## Why this architecture is different

Rajasthan is not starting from zero. **IFMS 3.0 already includes generic vendor registration, vendor profiles, invoice upload/tracking, payment tracking and work-order functionality.** Rajasthan Finance has also moved FVC bill processing into IFMS 3.0 with vendor registration, e-invoice/non-e-invoice handling, IMS/SRN linkage where applicable, invoice-PDF upload and AI-assisted amount checking.

Therefore RAJ-AGRIPAY adds the missing Agriculture intelligence around those sovereign systems:

- **RajKisan** remains authoritative for Agriculture dealer licence/lifecycle context.
- **IFMS 3.0** remains authoritative for generic vendor/payee, Treasury and State financial processing.
- **PFMS / SNA-SPARSH / RBI e-Kuber** remain authoritative rails for applicable centrally sponsored scheme payments.
- **Raj Sewa Dwaar** remains Rajasthan's intended API/ESB integration path.
- **Raj eSign** is the contract-ready Rajasthan-native officer signing rail.
- **e-Sanchar 3.0 / Push SMS** is the contract-ready Rajasthan-native dealer-notification rail.
- **RAJ-AGRIPAY** compiles scheme-specific Agriculture evidence into a reproducible claim packet, manages exceptions, prepares finance handoff metadata and preserves claim-to-UTR reconciliation lineage.

### Product thesis

> **IFMS moves public money. RAJ-AGRIPAY proves why an Agriculture dealer claim is ready to move, routes it correctly, and closes the evidence loop after it moves.**

---

## Officer operations console

`/dashboard` is a dense Government operations UI with seven working areas:

1. **Operations** — five operational KPIs, departmental claim queue, SLA health, exception control, district MIS and finance-rail readiness.
2. **Claims & Payments** — searchable ledger, evidence packet inspector, reason-coded exceptions and governed transitions from approval → finance → acknowledgement → UTR → reconciliation.
3. **District MIS** — self-contained Rajasthan operational silhouette with selectable district-centroid overlays for dealer load, claims, exceptions and clean-validation latency. It is explicitly labelled as evaluation orientation, not cadastral/live Government GIS.
4. **Dealer Registry** — federated Dealer Passport view, licence/payment-profile context and Payment Identity Lock signals.
5. **Scheme Controls** — effective-dated low-code Scheme Packs with maker-checker publication and historical replay.
6. **Integrations** — explicit `SANDBOX`, `CONTRACT-READY`, `ADAPTER-READY` and `PROTOTYPE-PROVEN` boundaries across Rajasthan/national rails.
7. **SUTRA Edge** — optional assisted/offline evidence capture with a hard Government-authority boundary.

### Dashboard interaction proof

The console is stateful rather than decorative:

- open any claim and inspect its evidence packet;
- resolve a recent bank-profile change through the demo maker-checker path;
- approve a clean packet to Finance;
- simulate a visibly labelled authoritative acknowledgement;
- generate a demo UTR and reconcile the claim;
- filter/search the ledger;
- select district workload on the map;
- publish a sandbox Scheme Pack version;
- run a short guided claim → Finance → reconciliation → MIS → integration → SUTRA walkthrough;
- reset to a deterministic release baseline.

---

## Full official-challenge lifecycle

```text
Dealer onboarding / renewal
          ↓
Unified Dealer Passport
          ↓
Structured invoice / OCR fallback
          ↓
Claim Truth Graph
          ↓
PASS / EXCEPTION / BLOCK
          ↓
Human Government approval
          ↓
Raj eSign-ready approval receipt
          ↓
Finance handoff
          ↓
IFMS / PFMS / SNA-SPARSH as applicable
          ↓
Authoritative acknowledgement
          ↓
UTR / payment reference
          ↓
Automatic reconciliation
          ↓
e-Sanchar / portal status to dealer
```

No AI model, SUTRA device or RAJ-AGRIPAY service exercises Government expenditure authority.

---

## Dealer onboarding / renewal

`/onboarding` demonstrates:

- SSO / authorised e-KYC boundary;
- RajKisan licence-context resolution;
- GST / legal-firm matching;
- IFMS payee-reference mapping;
- Payment Identity Lock for bank changes;
- scheme-access evaluation;
- versioned Dealer Passport receipt;
- audit-event replay.

The system federates source-owned records instead of creating another vendor master.

---

## Invoice intelligence

`/intake` follows a simple rule:

> **Do not OCR what Government has already made machine-readable.**

Structured GST e-Invoice / IRN / QR evidence is preferred when authorised. OCR is the fallback for legacy scans and supporting documents, with field-level provenance, confidence and human-review thresholds.

The red-team fixture deliberately triggers `DUPLICATE_INVOICE_REFERENCE` and returns a deterministic `BLOCK` rather than an unexplained AI fraud score.

---

## Claim Truth Graph

Every bill is evaluated across evidence domains:

| Domain | Typical evidence |
|---|---|
| Dealer | licence validity, GSTIN, jurisdiction, bank-profile version |
| Invoice | IRN/QR where available, OCR fallback, amount/tax, duplicate keys |
| Scheme | eligible item, rate ceiling, quantity, period, sanction, rule version |
| Delivery | beneficiary/order/receipt/inspection evidence where applicable |
| Finance | approval, fund route, acknowledgement, deductions, UTR, reconciliation |

Decision outcomes are explainable `PASS`, `EXCEPTION` or `BLOCK` with reason codes and provenance.

Contract examples:

- [`openapi/raj-agripay.yaml`](openapi/raj-agripay.yaml)
- [`schemas/claim-truth-packet.example.json`](schemas/claim-truth-packet.example.json)
- [`schemas/scheme-pack.example.json`](schemas/scheme-pack.example.json)

---

## Low-code Scheme Packs

“Low-code” means Rajasthan can onboard or amend schemes as governed configuration rather than commissioning another application.

Rule packs express dealer class/licence requirements, invoice evidence, rate/quantity ceilings, scheme periods, delivery evidence, sanction/fund-route metadata, approval controls and reconciliation rules. Every version is effective-dated and auditable so historical claims replay against the rules that actually applied.

---

## Impact & Payback Lab

`/impact` converts the challenge's T+15–T+30 problem into transparent, editable scenario mathematics:

- monthly dealer claim value;
- monthly claim count;
- current vs target departmental TAT;
- dealer cost of capital;
- minutes of administrative handling avoided;
- baseline vs target manual-review rate.

Outputs are **scenario values, not Rajasthan actuals**. During a pilot, the same model is intended to use measured event timestamps and Finance-approved baselines.

---

## BHASHINI + SUTRA-ID Edge

Dealers are businesses, so the primary channel remains web/PWA. SUTRA is intentionally optional for district offices, camps and low-connectivity assisted-service contexts.

SUTRA Dealer Edge can demonstrate camera evidence capture, Hindi/BHASHINI-ready assistance, local evidence-quality checks, human confirmation, encrypted/idempotent queueing, signed/hash-linked receipts and approved later sync.

### Hard boundary

**SUTRA never approves Government expenditure offline and never fabricates payment success.** Government approval and financial settlement remain online, authorised and source-backed.

---

## Integration truth doctrine

- `LIVE` — authoritative production integration actually connected and verified.
- `SANDBOX` — real external sandbox/test environment.
- `CONTRACT-READY` — adapter/interface defined; Government credentials, legal basis and network onboarding required.
- `ADAPTER-READY` — capability layer exists; approved runtime/model configuration required.
- `PROTOTYPE-PROVEN` — capability demonstrated independently, still subject to production onboarding.
- `SIMULATED` — deterministic evaluator behavior only; never shown as external truth.

The evaluation release does **not** claim live access to RajKisan, IFMS, PFMS, GSTN, UIDAI or Raj Sewa Dwaar.

---

## Security and Government authority

- no parallel payment wallet;
- no duplicate generic vendor master;
- RBAC + scheme/district/value-aware ABAC design;
- maker-checker for sensitive changes;
- Payment Identity Lock for bank-profile changes;
- append-only state/audit events;
- reason-coded duplicate/risk controls;
- authoritative external status required before settlement is shown as real;
- AI may assist evidence and explanation but does not exercise expenditure authority.

See [`docs/SECURITY_GOVERNANCE.md`](docs/SECURITY_GOVERNANCE.md).

---

## Brownfield migration and Government handover

The pilot is not treated as greenfield. Existing fragmented scheme ledgers are handled through a staged process:

`Inventory → crosswalk → shadow Claim Truth replay → count/value reconciliation → controlled cutover → rollback-capable operations`.

Questionable historical records become explicit exceptions rather than destructive “deduplication.” Government handover includes source, schemas, API contracts, Scheme Pack catalogue, migration crosswalks, SOPs, test evidence, security artefacts, monitoring, backup/DR runbooks, training and transition support.

See:

- [`docs/MIGRATION_CUTOVER.md`](docs/MIGRATION_CUTOVER.md)
- [`docs/GOVERNMENT_HANDOVER.md`](docs/GOVERNMENT_HANDOVER.md)
- [`docs/RACI.md`](docs/RACI.md)

---

## 90-day pilot target

Indicative pilot budget: **INR 44.8 lakh**, subject to confirmed Government interfaces, hosting/security requirements and taxes.

Pilot gates:

`Inception → Foundations → Claim Intelligence → Finance Integration → Reconciliation + Last Mile → Hardening/Handover`

Representative targets include <4h median clean-claim departmental validation, ≤T+2 working-day departmental approval for clean claims, 100% exact-key duplicate detection, complete claim/payment lineage and ≥90% eligible auto-reconciliation where authoritative external references are available.

External bank/Treasury/PFMS settlement timing is explicitly separated from the SLA RAJ-AGRIPAY controls.

---

## Run locally

```bash
npm install
npm run verify:static
npm run typecheck
npm run build
npm run dev
```

Runtime target: **Node.js 22+**.

---

## Research, engineering & submission pack

- [`docs/RESEARCH_EVIDENCE.md`](docs/RESEARCH_EVIDENCE.md) — Rajasthan/national infrastructure findings.
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — control-plane and state-machine design.
- [`docs/INTEGRATION_MATRIX.md`](docs/INTEGRATION_MATRIX.md) — external-system readiness boundaries.
- [`docs/SECURITY_GOVERNANCE.md`](docs/SECURITY_GOVERNANCE.md) — finance-grade controls.
- [`docs/90_DAY_PILOT.md`](docs/90_DAY_PILOT.md) — implementation gates and KPIs.
- [`docs/MIGRATION_CUTOVER.md`](docs/MIGRATION_CUTOVER.md) — brownfield transition plan.
- [`docs/GOVERNMENT_HANDOVER.md`](docs/GOVERNMENT_HANDOVER.md) — departmental ownership package.
- [`docs/RACI.md`](docs/RACI.md) — Agriculture / Finance / DoIT&C / Syntheon ownership.
- [`docs/JUDGE_DEMO_4_MINUTES.md`](docs/JUDGE_DEMO_4_MINUTES.md) — evaluator choreography.
- [`docs/EVALUATOR_OBJECTIONS.md`](docs/EVALUATOR_OBJECTIONS.md) — red-team Q&A.
- [`docs/RUNTIME_VERIFICATION.md`](docs/RUNTIME_VERIFICATION.md) — release gates.
- [`docs/SUBMISSION_FORM_ANSWERS.md`](docs/SUBMISSION_FORM_ANSWERS.md) — portal-ready answers.

---

## Why this is defensible

Most submissions can build an upload form, call OCR and draw a PFMS status card. RAJ-AGRIPAY is designed around the harder Government problem: **what Agriculture evidence makes an invoice payable, what sovereign Finance rail must receive it, what exception owner can unblock it, and what evidence closes the loop after money moves.**

That is the layer the prototype is built to prove.