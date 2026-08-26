# 90-Day Pilot & Statewide Scale Plan

## Pilot objective

Prove that Rajasthan Agriculture can reduce **Department-controlled** claim-processing delay, manual verification effort and reconciliation friction **without replacing IFMS/PFMS/Treasury**, while safely absorbing open obligations from fragmented scheme-wise processes.

## Pilot selection

Choose three contrasting payment journeys:

1. high-volume relatively clean State scheme;
2. document/evidence-heavy dealer reimbursement flow;
3. one applicable CSS/SNA-SPARSH-routed flow.

Use 2-3 districts with different dealer volumes and connectivity conditions. Include a representative dealer cohort and a controlled sample of existing open/unreconciled bills so migration is tested, not deferred.

## Day 0-10 - Inception, baseline and brownfield inventory

- map AS-IS dealer/payment journeys;
- enumerate schemes, finance routes and authoritative systems;
- establish baseline median/P95 Agriculture-side TAT, manual touches, exception rates, dealer status-query contacts and reconciliation effort;
- inventory dealer IDs, open claims, approved/unpaid bills and paid/unreconciled records in pilot schemes;
- confirm RajKisan/IFMS/PFMS/Raj Sewa Dwaar/Raj eSign/e-Sanchar owners;
- define security/data-protection plan;
- establish synthetic/sandbox test corpus;
- agree migration crosswalk and rollback principles.

**Gate:** signed inception report + source/interface register + KPI baseline + open-obligation inventory + migration plan.

## Day 10-25 - Dealer and invoice foundations

Dealer Passport, onboarding/renewal, licence reference adapter, IFMS vendor/payee reference adapter, Payment Identity Lock, GST structured-invoice sandbox, OCR fallback, evidence hashing and normalized Claim Truth schema.

**Gate:** dealer renewal/new-onboarding UAT plus claim packet generated from both structured and scanned invoice paths; low-confidence OCR cannot silently advance.

## Day 25-45 - Scheme intelligence and parallel validation

Scheme Rule Studio, effective-dated versioning, Claim Truth Graph, duplicate/rate/quantity/period checks, officer exception workbench and maker-checker rule publication. Replay a representative sample of existing scheme claims in parallel with the legacy process.

**Gate:** deterministic replay against the correct rule version + no unresolved critical mismatch in agreed UAT sample + 100% correct finance-route classification on approved cases.

## Day 45-60 - Finance orchestration, signing and notifications

State/CSS route resolver, IFMS/PFMS contract adapters, Raj Sewa Dwaar onboarding plan, authorised-acknowledgement state machine, Raj eSign approval-signing contract, e-Sanchar dealer notification contract, claim-to-payment lineage.

**Gate:** sandbox/contract test from approved packet to external acknowledgement; payment cannot be shown successful before authoritative source response; notification content is derived from the same claim state.

## Day 60-72 - Reconciliation, MIS and last mile

Auto-reconciliation, operational MIS, SLA/ageing views, Impact Lab connected to measured pilot events, BHASHINI Dealer Saarthi and optional SUTRA Dealer Edge workflow.

**Gate:** UAT includes intentional duplicate, bank-change, low-confidence OCR, payment-return/rejection and offline-sync/idempotency scenarios.

## Day 72-82 - Controlled migration and cutover rehearsal

- create source-to-Dealer-Passport and source-bill-to-Claim crosswalks;
- load/link approved open obligations;
- reason-code migration exceptions rather than dropping records;
- reconcile source vs RAJ-AGRIPAY counts and values by scheme/status;
- execute parallel run and cutover rehearsal;
- demonstrate rollback without deleting audit events.

**Gate:** signed count-and-value reconciliation + migration exception report + cutover/rollback approval.

## Day 82-90 - Security hardening, productionisation and Government handover

Performance/security/accessibility testing, approved hosting, monitoring/backup/DR configuration, role training, SOPs/runbooks, source/configuration handover, statewide rollout sequence and final responsibility matrix.

**Gate:** critical security findings closed/risk-accepted; restore test passed; administrator/official can publish a governed Scheme Pack and execute documented operational procedures using delivered artifacts.

## Pilot KPI targets

These are proposal targets, not fabricated achieved results:

- clean-claim departmental validation: **<4h median**;
- clean claim to departmental approval: **<=T+2 working days**;
- structured invoice extraction: **>=98% field accuracy on supported test set**;
- low-confidence OCR review compliance: **100%**;
- exact-key duplicate detection: **100%**;
- claim/payment lineage coverage: **100%**;
- bank-profile change maker-checker compliance: **100%**;
- external payment-status truthfulness: **100%**;
- eligible auto-reconciliation: **>=90% where authoritative references are available**;
- audit packet retrieval: **<30 seconds**;
- migration count/value reconciliation: **100% or signed reason-coded exception**;
- zero synthetic external status presented as authoritative.

External IFMS/PFMS/Treasury/RBI/bank settlement time is reported separately because it is outside RAJ-AGRIPAY's unilateral control.

## Measured impact, not marketing ROI

The pilot captures event timestamps so `/impact` can replace scenario assumptions with measured values. Report baseline, pilot result, delta and sample size for:

- Department-controlled days released;
- manual touches/minutes saved per clean claim;
- dealer status-query contacts avoided;
- exception/manual-review rate;
- reconciliation effort;
- indicative receivables/financing-cost effect using an explicitly agreed cost-of-capital assumption.

No scenario output is presented as realised Government or dealer saving until verified during the pilot.

## Statewide rollout decision

Statewide rollout begins only after the three pilot journeys pass functional, security, migration and finance-authority gates. Scale-out should be **scheme-pack and district waves**, not a big-bang replacement of RajKisan/IFMS or existing payment rails.

### Wave 1 - Pilot proof

Three payment journeys, 2-3 districts, controlled brownfield obligations and full migration/reconciliation evidence.

### Wave 2 - Priority scheme + district expansion

Onboard additional schemes as governed Scheme Packs and expand through districts using measured exception/TAT/service-load evidence.

### Wave 3 - Agriculture Payment Evidence Fabric

Standardise Dealer Passport, Claim Truth Packet, exception taxonomy, Finance handoff and claim-to-UTR lineage across authorised Agriculture/Horticulture/Agriculture Marketing payment journeys.

### Wave 4 - Planning intelligence

Only after authorised data-sharing and governance approval, connect consent-bound payment/input signals with broader FarmGraph AI inputs for demand forecasting, dealer-access gaps, scheme-utilisation intelligence and extension/procurement planning.

Future FarmGraph, satellite, IoT, drone and farm-registry integrations are roadmap items and are **not** represented as live in the evaluator release.

## Detailed operating artifacts

- [`MIGRATION_CUTOVER.md`](MIGRATION_CUTOVER.md)
- [`GOVERNMENT_HANDOVER.md`](GOVERNMENT_HANDOVER.md)
- [`RACI.md`](RACI.md)
- [`SECURITY_GOVERNANCE.md`](SECURITY_GOVERNANCE.md)
- [`VISION_ROADMAP.md`](VISION_ROADMAP.md)
- [`EVALUATOR_OBJECTIONS.md`](EVALUATOR_OBJECTIONS.md)
- [`JUDGE_DEMO_4_MINUTES.md`](JUDGE_DEMO_4_MINUTES.md)
- [`SYNTHETIC_DATA_MANIFEST.md`](SYNTHETIC_DATA_MANIFEST.md)
