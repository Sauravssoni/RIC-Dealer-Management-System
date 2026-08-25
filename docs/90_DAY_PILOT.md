# 90-Day Pilot & Statewide Scale Plan

## Pilot objective

Prove that Rajasthan Agriculture can reduce departmental claim-processing delay and reconciliation effort **without replacing IFMS/PFMS/Treasury**.

## Pilot selection

Choose three contrasting payment journeys:

1. high-volume relatively clean State scheme;
2. document/evidence-heavy dealer reimbursement flow;
3. one applicable CSS/SNA-SPARSH-routed flow.

Use 2–3 districts with different dealer volumes and connectivity conditions.

## Day 0–10 — Inception and baseline

- map AS-IS dealer/payment journeys;
- enumerate schemes, finance routes and authoritative systems;
- establish baseline TAT, exception rates and reconciliation effort;
- confirm RajKisan/IFMS/PFMS/Raj Sewa Dwaar owners;
- define security/data-protection plan;
- establish synthetic/sandbox test corpus.

**Gate:** signed inception report + interface register + KPI baseline.

## Day 10–25 — Dealer and invoice foundations

Dealer Passport, licence reference adapter, IFMS vendor/payee reference adapter, GST structured-invoice sandbox, OCR fallback, evidence hashing and normalized claim schema.

**Gate:** claim packet generated from structured and scanned invoice paths.

## Day 25–45 — Scheme intelligence

Scheme Rule Studio, effective-dated versioning, Claim Truth Graph, duplicate/rate/quantity/period checks, officer exception workbench and maker-checker rule publication.

**Gate:** deterministic replay against the correct rule version.

## Day 45–60 — Finance orchestration

State/CSS route resolver, IFMS/PFMS contract adapters, acknowledgement state machine, claim-to-payment lineage and dealer notifications.

**Gate:** sandbox/contract test from approved packet to external acknowledgement.

## Day 60–75 — Reconciliation + last mile

Auto-reconciliation, MIS, SLA/ageing views, BHASHINI Dealer Saarthi and optional SUTRA Dealer Edge workflow.

**Gate:** UAT includes intentional duplicate and bank-change exceptions.

## Day 75–90 — Hardening and handover

Performance/security/accessibility testing, approved hosting, monitoring/backup/DR configuration, role training, SOPs/runbooks, statewide rollout sequence and handover package.

## Pilot KPI targets

These are proposal targets, not fabricated achieved results:

- clean-claim departmental validation: **<4h median**;
- clean claim to departmental approval: **≤T+2 working days**;
- structured invoice extraction: **≥98% field accuracy on supported test set**;
- exact-key duplicate detection: **100%**;
- claim/payment lineage coverage: **100%**;
- auto-reconciliation: **≥90% of eligible pilot payments**;
- audit packet retrieval: **<30 seconds**;
- zero synthetic external status presented as authoritative.

External IFMS/PFMS/Treasury/bank settlement time is reported separately because it is outside RAJ-AGRIPAY's unilateral control.
