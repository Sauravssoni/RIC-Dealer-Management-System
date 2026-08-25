# RAJ-AGRIPAY Final Release Checklist

**Release target:** Rajasthan Innovation Challenge — Integrated Dealer Management System

## Product truth

- [x] Product is positioned as the Agriculture-specific claim-to-settlement control plane, not a duplicate IFMS vendor portal.
- [x] RajKisan, IFMS 3.0, PFMS/SNA-SPARSH, Treasury/RBI and Raj Sewa Dwaar remain authoritative where applicable.
- [x] No live Government credential or production integration is implied by the evaluator prototype.
- [x] Every external connector has a visible readiness state.
- [x] Evaluation data is visibly labelled and is not represented as departmental live data.
- [x] Payment success is not shown until an explicit authoritative-acknowledgement event; evaluator acknowledgement is clearly simulated.
- [x] AI never approves or rejects Government expenditure autonomously.

## Evaluator dashboard

- [x] Rajasthan Government blue/white operations visual system.
- [x] Government header, professional terminology and explicit evaluation-sandbox identity.
- [x] Launch splash and controlled loading transitions.
- [x] Eight evaluator views: Command Centre, Rajasthan Map, Claims, Dealers, Schemes, Reconciliation, Integrations, SUTRA Edge.
- [x] Guided seven-stage Judge Demo.
- [x] Responsive navigation and quick-navigation palette.
- [x] Toast receipts for state-changing evaluator actions.
- [x] Hindi/English interface affordance.
- [x] Grounded Dealer Saarthi examples.
- [x] Real Rajasthan base geography with selectable district-centroid operating overlays; evaluation values remain truth-labelled.
- [x] Map attribution and current-base-map provenance visible/documented.

## Functional claim journey

- [x] Clean claim displays 12/12 deterministic checks.
- [x] Duplicate structured invoice reference is blocked with an explainable reason.
- [x] Recent bank-profile change triggers Payment Identity Lock.
- [x] Bank hold can be cleared only through simulated re-verification.
- [x] Clean evidence packet can move to Finance only through a human approval action.
- [x] Authorised external acknowledgement is simulated only after finance handoff.
- [x] Demo UTR is generated only at acknowledgement.
- [x] Paid claim can be reconciled and closed.
- [x] Historical rule version is retained conceptually through effective-dated Scheme Packs.

## Dealer / scheme / finance capabilities

- [x] Dealer Passport references Agriculture and finance identity context without creating a competing generic vendor master.
- [x] Payment Identity Lock protects bank-profile changes.
- [x] IRN/QR structured evidence is preferred over OCR where available.
- [x] OCR remains a fallback for legacy/scanned evidence.
- [x] Scheme Rule Studio visibly demonstrates low-code/effective-dated configuration.
- [x] Claim-to-UTR lineage and reconciliation are visible.
- [x] State vs CSS/SNA-SPARSH/PFMS routing is represented without claiming direct production payment authority.

## SUTRA / BHASHINI

- [x] SUTRA remains an optional assisted/low-connectivity channel, not a statewide hardware dependency.
- [x] Offline evidence capture, local quality checking, human confirmation and sealed queue are demonstrated.
- [x] Approved later sync is demonstrated.
- [x] No offline payment approval exists.
- [x] BHASHINI is positioned as a language adapter over grounded transaction state.

## Contract & engineering artifacts

- [x] README reflects the current eight-view release.
- [x] Architecture, research, security, integration, pilot and demo documents exist.
- [x] Portal submission-answer pack exists.
- [x] Evaluator scorecard maps challenge outcomes to visible proof and production dependencies.
- [x] OpenAPI 3.1 orchestration contract exists.
- [x] Governed Scheme Pack example exists.
- [x] Reproducible Claim Truth Packet example exists.
- [x] Node.js and application dependencies are pinned to published current releases.
- [ ] GitHub Actions TypeScript/production build executes successfully — BLOCKED by GitHub synthetic `BuildFailed/startup_failure` before any job is created; no source/build step has run. Re-run after platform/account Actions recovers or verify on deployment runner/local environment.

## Submission documents

- [x] Winning Proposal includes challenge diagnosis, Rajasthan rails, solution, modules, finance boundary, responsible AI, SUTRA/BHASHINI, pilot, cost, defensibility and sources.
- [x] Winning Proposal includes a dedicated functional-prototype-evidence page.
- [x] Technical Annexure includes architecture, state machine, rules, adapters, threat controls, SUTRA boundary, observability, UAT and deployment.
- [x] Technical Annexure includes executable contract artifacts and authority invariants.
- [x] Latest 16-page Winning Proposal render visually inspected end to end.
- [x] Latest 14-page Technical Annexure render visually inspected end to end.
- [x] Accessibility audit: 0 high / 0 medium findings in both final DOCX files; remaining raw-URL source-ledger findings are low severity and intentional for traceability.

## Final evaluator thesis

> RAJ-AGRIPAY should be judged not as another dealer billing website, but as the missing Agriculture-specific evidence, policy and reconciliation layer that lets Rajasthan's existing digital and finance infrastructure operate as one transparent dealer claim-to-settlement journey.
