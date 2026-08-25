# RAJ-AGRIPAY

## Rajasthan Integrated Dealer Lifecycle, Claim & Settlement Fabric

> **One Dealer. One Claim. One Ledger. One Settlement Journey.**

RAJ-AGRIPAY is an evaluation-grade, research-backed prototype for the Rajasthan Innovation Challenge problem statement on an **Integrated Dealer Management System** for fertilizer, seed and input dealers.

It is deliberately designed as an **Agriculture-specific claim-to-settlement control plane**, not another generic vendor portal and not a parallel payment gateway.

---

## Why this architecture is different

Rajasthan is not starting from zero. **IFMS 3.0 already includes generic vendor registration, vendor profiles, invoice upload/tracking, payment tracking and work-order functionality.** Rajasthan Finance has also moved FVC bill processing into IFMS 3.0 with vendor registration, e-invoice/non-e-invoice handling, IMS/SRN linkage where applicable, invoice-PDF upload and AI-assisted amount checking.

Therefore RAJ-AGRIPAY adds the missing Agriculture intelligence around those sovereign systems:

- **RajKisan** remains authoritative for Agriculture dealer licence/lifecycle context.
- **IFMS 3.0** remains authoritative for generic vendor/payee, Treasury and State financial processing.
- **PFMS / SNA-SPARSH / RBI e-Kuber** remain authoritative rails for applicable centrally sponsored scheme payments.
- **Raj Sewa Dwaar** remains Rajasthan's intended API/ESB integration path.
- **RAJ-AGRIPAY** compiles scheme-specific Agriculture evidence into a reproducible claim packet, manages exceptions, prepares finance handoff metadata and preserves claim-to-UTR reconciliation lineage.

### Product thesis

> **RAJ-AGRIPAY does not replace Rajasthan's finance infrastructure. It makes Agriculture claims understandable, verifiable, routable and reconcilable before and after they enter that infrastructure.**

---

## Functional evaluator release

The winning-release branch contains a blue/white Rajasthan Government operations experience with functional local-state workflows rather than a static pitch page.

### Eight evaluator views

1. **Command Centre** — operational overview, controllable-delay metrics, claim queue, Dealer Saarthi and Claim Truth Graph.
2. **Rajasthan Map** — real Rajasthan base geography with selectable district-centroid operating overlays for dealer volume, claims, exceptions and clean-claim validation SLA.
3. **Claims** — evidence packets, deterministic checks, exception ownership and governed state transitions.
4. **Dealers** — Unified Dealer Passport, lifecycle context and Payment Identity Lock.
5. **Schemes** — effective-dated, low-code Scheme Rule Studio with maker-checker governance.
6. **Reconciliation** — claim → acknowledgement → UTR → reconciliation lineage.
7. **Integrations** — explicit `SANDBOX`, `CONTRACT-READY`, `ADAPTER-READY` and `PROTOTYPE-PROVEN` boundaries.
8. **SUTRA Edge** — optional assisted/offline evidence capture with a hard authority boundary.

### Evaluator UX

- Rajasthan Government blue/white visual system.
- launch splash and controlled loading transitions.
- **Run Judge Demo** guided seven-step evaluator story.
- interactive navigation palette.
- claim-state actions with audit-style toast receipts.
- Hindi/English interface affordance.
- BHASHINI-ready grounded Dealer Saarthi examples.
- selectable Rajasthan operations map.
- responsive layouts for desktop/tablet/mobile.

---

## End-to-end demo state machine

The evaluation prototype can demonstrate a complete governed journey:

```text
Dealer / Agriculture evidence
          ↓
Dealer Passport
          ↓
Structured invoice / OCR fallback
          ↓
Claim Truth Graph
          ↓
PASS / EXCEPTION / BLOCK
          ↓
Human Government approval
          ↓
Finance handoff
          ↓
Authoritative acknowledgement (simulated and visibly labelled in prototype)
          ↓
UTR / payment reference
          ↓
Reconciliation
```

Implemented evaluator actions include:

- clear a recent-bank-profile-change hold through simulated re-verification;
- approve a clean evidence packet to Finance;
- block an exact duplicate structured invoice reference;
- simulate an **explicitly labelled** authorised-source acknowledgement only after finance handoff;
- generate a demo UTR;
- reconcile a paid claim;
- publish a new sandbox Scheme Pack version without rewriting historical decisions;
- capture and seal a SUTRA offline evidence packet, then sync it when connectivity is restored.

---

## Claim Truth Graph

Every bill is evaluated as five evidence domains rather than as “an OCR result”:

| Domain | Typical evidence |
|---|---|
| Dealer | licence validity, GSTIN, jurisdiction, bank-profile version |
| Invoice | IRN/QR when available, OCR fallback, amount/tax, duplicate keys |
| Scheme | eligible item, rate ceiling, quantity, period, sanction, rule version |
| Delivery | beneficiary/order/receipt/inspection evidence where applicable |
| Finance | approval, fund route, acknowledgement, deductions, UTR, reconciliation |

Decision outcomes are explainable `PASS`, `EXCEPTION` or `BLOCK` with reason codes and evidence provenance.

Contract-level examples are included in [`openapi/raj-agripay.yaml`](openapi/raj-agripay.yaml) and [`schemas/claim-truth-packet.example.json`](schemas/claim-truth-packet.example.json).

---

## Structured evidence before OCR

The architecture follows a simple rule:

> **Do not OCR what Government has already made machine-readable.**

Where authorised GST e-invoice/IRN/QR evidence exists, use that structured evidence first. OCR remains essential for legacy scans, vouchers and supporting documents, with confidence and human-review thresholds.

---

## Scheme Rule Studio

“Low-code” means Rajasthan can onboard or amend schemes as governed configuration rather than buying a proprietary workflow platform or commissioning another application.

Rule packs can express:

- dealer class / licence requirements;
- invoice evidence;
- rate and quantity ceilings;
- scheme period;
- delivery evidence;
- sanction/fund-route metadata;
- approval thresholds;
- reconciliation requirements.

Every published version is effective-dated and auditable so historical claims can replay against the exact rules that applied when they were submitted. A concrete governed configuration example is included at [`schemas/scheme-pack.example.json`](schemas/scheme-pack.example.json).

---

## Rajasthan operations map

The release uses a **real Rajasthan geographic base map** with district-boundary context, overlaid with deterministic evaluation district-centroid data. The base-map revision used by the UI is dated **27 August 2025** and is attributed in-product to Wikimedia Commons under CC BY-SA 3.0.

Operational values remain clearly marked **evaluation data**. The prototype **does not claim live RajKisan district statistics**. Production deployment would source authorised Rajasthan GIS/master data and live departmental telemetry through approved interfaces.

---

## BHASHINI + SUTRA-ID Edge

Dealers are businesses, so the primary channel remains web/PWA. SUTRA is intentionally **optional**, useful at district offices, camps and low-connectivity assisted-service contexts.

SUTRA Dealer Edge can demonstrate:

- camera evidence capture;
- Hindi voice guidance through a BHASHINI-ready adapter;
- local evidence-quality checks;
- human confirmation;
- encrypted/idempotent queueing;
- signed/hash-linked local receipt;
- approved later sync.

### Hard boundary

**SUTRA never approves Government expenditure offline and never fabricates payment success.** Government approval and financial settlement remain online, authorised and source-backed.

---

## Integration truth doctrine

The prototype never silently presents a fake Government API as live.

- `LIVE` — authoritative integration actually connected and verified.
- `SANDBOX` — real external sandbox/test environment.
- `CONTRACT-READY` — adapter/interface is designed; Government credentials/approvals are required.
- `ADAPTER-READY` — capability integration layer exists but approved runtime/configuration is required.
- `PROTOTYPE-PROVEN` — physical/prototype capability has been demonstrated independently.

The current evaluation release uses deterministic local data and **does not claim live access** to RajKisan, IFMS, PFMS, GSTN, UIDAI or Raj Sewa Dwaar.

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
- AI may assist evidence and explanation but does not exercise Government expenditure authority.

---

## 90-day pilot target

Indicative pilot budget: **INR 44.8 lakh**, subject to confirmed Government interfaces, hosting/security requirements and taxes.

Pilot gates cover:

`Inception → Foundations → Claim Intelligence → Finance Integration → Reconciliation + Last Mile → Hardening/Handover`

Representative pilot targets include <4h median clean-claim departmental validation, T+2 working-day departmental approval for clean claims, 100% exact-key duplicate detection, complete claim/payment lineage and ≥90% eligible auto-reconciliation where authoritative external references are available.

External bank/Treasury/PFMS settlement timing is explicitly separated from the SLA RAJ-AGRIPAY controls.

---

## Run locally

```bash
npm install
npm run dev
```

Release gate:

```bash
npm run typecheck
npm run build
```

Health endpoint:

```text
/api/health
```

Runtime target: **Node.js 22+**.

---

## Research, contract & submission pack

- [`docs/RESEARCH_EVIDENCE.md`](docs/RESEARCH_EVIDENCE.md) — current Rajasthan/national infrastructure findings and architecture consequences.
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — control-plane, evidence and state-machine design.
- [`docs/INTEGRATION_MATRIX.md`](docs/INTEGRATION_MATRIX.md) — explicit external-system readiness boundaries.
- [`docs/SECURITY_GOVERNANCE.md`](docs/SECURITY_GOVERNANCE.md) — finance-grade controls and responsible-AI boundaries.
- [`docs/90_DAY_PILOT.md`](docs/90_DAY_PILOT.md) — implementation gates, KPIs and rollout logic.
- [`docs/DEMO_RUNBOOK.md`](docs/DEMO_RUNBOOK.md) — evaluator demonstration sequence.
- [`docs/EVALUATOR_SCORECARD.md`](docs/EVALUATOR_SCORECARD.md) — challenge-to-proof matrix and red-team submission gates.
- [`docs/SUBMISSION_FORM_ANSWERS.md`](docs/SUBMISSION_FORM_ANSWERS.md) — concise portal-ready application responses.
- [`docs/FINAL_RELEASE_CHECKLIST.md`](docs/FINAL_RELEASE_CHECKLIST.md) — demo, engineering, truthfulness and submission gates.
- [`openapi/raj-agripay.yaml`](openapi/raj-agripay.yaml) — contract-first orchestration API.
- [`schemas/scheme-pack.example.json`](schemas/scheme-pack.example.json) — governed low-code rule-pack example.
- [`schemas/claim-truth-packet.example.json`](schemas/claim-truth-packet.example.json) — reproducible evidence packet example.

---

## Why this is defensible

Most submissions can build an upload form, call OCR and draw a PFMS status card. RAJ-AGRIPAY is designed around the harder Government problem: **what Agriculture evidence makes an invoice payable, what sovereign Finance rail must receive it, what exception owner can unblock it, and what evidence closes the loop after money moves.**

That is the layer the prototype is built to prove.
