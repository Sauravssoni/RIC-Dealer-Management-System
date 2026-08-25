# RAJ-AGRIPAY Evaluator Scorecard

This internal submission gate maps the official challenge outcomes to visible proof in the prototype, architecture and 90-day pilot. It is intentionally stricter than a feature checklist.

| Challenge / evaluation question | RAJ-AGRIPAY answer | Visible proof | Production dependency |
|---|---|---|---|
| Can dealer onboarding and renewals be unified? | Dealer Passport federates Agriculture licence/lifecycle and finance/payee references without duplicating IFMS vendor master. | Dealers view; Payment Identity Lock. | Approved RajKisan/SSO/IFMS contracts. |
| Can manual invoice verification be reduced? | GST IRN/QR structured evidence first; OCR only when structured evidence is unavailable. | Claims evidence packet; Claim Truth Graph. | GST taxpayer authorisation/IRP credentials for production. |
| Can scheme rules be onboarded rapidly? | Effective-dated low-code Scheme Packs with maker-checker governance and historical replay. | Scheme Rule Studio; scheme-pack JSON example. | Department-approved scheme rule catalogue. |
| Can settlement delays be reduced? | Straight-through clean-claim preparation removes controllable Agriculture verification delay before Finance handoff. | Clean claim -> approval -> finance demo; SLA metrics. | External IFMS/PFMS/Treasury SLA remains outside RAJ-AGRIPAY control. |
| Can the Department avoid a new payment silo? | Yes. State/CSS route resolver hands off to IFMS 3.0 / SNA-SPARSH / PFMS; RAJ-AGRIPAY never holds public money. | Integrations view; sovereign rail diagram. | Raj Sewa Dwaar and Finance integration approvals. |
| Can dealers see payment status? | One claim timeline explains exact current state, owner and required action. | Dealer Saarthi; claims status; reconciliation view. | Authoritative external acknowledgement feeds in production. |
| Can reconciliation be automated? | Claim, approval, finance acknowledgement, paid amount and UTR close as one lineage; mismatches remain owned exceptions. | Reconciliation view; claim-to-UTR demo. | Source acknowledgement/UTR integration. |
| Can fraud and duplicate risk be reduced? | Deterministic duplicate IRN/reference checks, licence/rate/quantity/bank-profile controls, plus explainable anomaly layer. | Duplicate claim block; Payment Identity Lock. | Approved production data sources. |
| Is AI appropriately governed? | AI explains and assists; deterministic rules and authorised humans control Government expenditure. | Dealer Saarthi, Claims and SUTRA boundary conditions. | Model/API approval and monitoring policy. |
| Does it work for Hindi/assisted users? | BHASHINI-ready Dealer Saarthi plus optional SUTRA-ID Edge assisted capture. | Hindi prompt, bilingual UI affordance, SUTRA demo. | BHASHINI/approved language adapters in production. |
| Does it support low-connectivity settings? | SUTRA captures and seals non-financial evidence offline, then syncs through an authorised channel. | SUTRA ready -> scan -> sealed -> synced demo. | Approved device/network/security deployment. |
| Is statewide operations visibility possible? | District operations view links dealer/claim/SLA/exception signals to drill-down. | Rajasthan operations map. | Production district master and live departmental data. |
| Is the solution low cost? | Reuses RajKisan, SSO, Raj Sewa Dwaar, IFMS, PFMS/SNA-SPARSH and GST rails instead of rebuilding them. | Proposal cost model + integration architecture. | Final interface, hosting and support scope. |
| Is the proposal implementable in 90 days? | Milestone-gated pilot isolates interface contracts, claim intelligence, handoff, UAT and handover. | 90_DAY_PILOT.md. | Timely credentials, pilot schemes and nodal officers. |

## Red-team gates before submission

1. No screenshot, label or sentence may imply live RajKisan/IFMS/PFMS/GST/UIDAI access unless actually connected.
2. No payment may move to `Paid` without an explicitly labelled authoritative-acknowledgement event (simulated in evaluation mode).
3. No AI output may approve, reject or alter public expenditure by itself.
4. Every scheme decision must identify a versioned rule pack and source/evidence references.
5. District map values must remain visibly labelled evaluation data until production data is authorised.
6. The pitch must lead with the challenge problem and Rajasthan's existing rails, not with AI, blockchain or SUTRA.
7. SUTRA must remain an optional access channel; it must never become a statewide hardware procurement dependency.
8. Carbon-credit functionality stays outside the core challenge submission.

## Evaluator thesis

> RAJ-AGRIPAY wins if the evaluator concludes that it is not another dealer portal but the missing Agriculture-specific evidence and orchestration layer that makes Rajasthan's existing digital and finance infrastructure work as one claim-to-settlement journey.
