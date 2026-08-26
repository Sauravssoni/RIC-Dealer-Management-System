# RAJ-AGRIPAY — 4-Minute Evaluator Demo

## Objective
Prove that RAJ-AGRIPAY is not a dashboard mock-up. In four minutes, demonstrate the complete official challenge lifecycle — dealer onboarding/renewal, invoice capture/OCR, rule-based claim truth, human approval, sovereign finance handoff, tracking/alerts, reconciliation, statewide MIS and SUTRA-assisted last-mile access — while keeping every external Government dependency truth-labelled.

## 0:00–0:20 — Open with the problem, not the feature list
Open `/` and let the Government splash resolve into Command Centre.

Say:
> Rajasthan already has RajKisan and IFMS. The missing layer is Agriculture-specific claim truth: what makes this dealer invoice payable, what rule applies, who owns the exception, where the claim routes, and what closes the loop after payment.

Show the claim-to-settlement rail and the `EVALUATION SANDBOX` label.

**Evaluator takeaway:** we understand the current-state architecture and are not proposing another silo.

## 0:20–0:55 — Dealer onboarding / renewal
Open `/onboarding`.

Run the existing-dealer renewal path quickly:
1. identity verification reference;
2. RajKisan licence context;
3. GST/legal-name match;
4. IFMS payee reference + Payment Identity Lock;
5. scheme access;
6. issue Dealer Passport receipt.

Pause on the receipt `DP-RJ-JAI-002814-v8`.

Say:
> One Dealer Passport is reused across schemes. We federate source-owned Government records rather than create another vendor master.

**Evaluator takeaway:** onboarding and renewals are functional, governed and low-duplication.

## 0:55–1:35 — Invoice intelligence: structured-first, OCR fallback
Continue to `/intake`.

First show **Structured e-Invoice**:
- parse IRN/QR evidence;
- point to per-field provenance;
- run the Claim Truth Graph.

Then switch briefly to **Legacy scan / OCR**:
- show lower confidence on amount;
- show that the workflow refuses to advance until human confirmation.

Say:
> We do not OCR what Government already made machine-readable. OCR is reserved for legacy and supporting documents, with confidence and human review.

**Evaluator takeaway:** lower cost, lower error surface, and better auditability than OCR-everything.

## 1:35–1:55 — Red-team the system
Click **Load duplicate-invoice red-team scenario**.
Run Claim Truth.

Show `DUPLICATE_INVOICE_REFERENCE` and deterministic `BLOCK`.

Say:
> This is not a black-box fraud score. The exact structured invoice reference already exists against a settled claim, so finance release is blocked with a reproducible reason code.

**Evaluator takeaway:** prevention happens before money moves.

## 1:55–2:35 — Clean claim to finance to UTR
Return to `/`, open `AGR-26-10482`.

Demonstrate:
1. 12/12 checks;
2. **Approve packet → Finance**;
3. **Simulate authorised acknowledgement**;
4. generated UTR;
5. **Auto-reconcile claim**.

Say explicitly:
> The acknowledgement is simulated and visibly labelled. In production, IFMS/PFMS/Treasury remains authoritative. RAJ-AGRIPAY never claims success before the sovereign rail does.

**Evaluator takeaway:** full claim-to-UTR state machine with proper authority boundaries.

## 2:35–2:55 — Dealer transparency and alerts
Open **Dealer alerts** from the global critical-journeys dock.

Show:
- portal approval status;
- SMS action-required bank re-verification;
- payment acknowledgement + UTR message.

Then ask Dealer Saarthi:
`AGR-26-10479 क्यों रुका है?`

**Evaluator takeaway:** dealers no longer need to phone offices to discover where money is stuck.

## 2:55–3:15 — State operations map
Open Rajasthan Map.
Select Jaipur, Jodhpur and a stable district.

Show:
- represented dealer volume;
- claims;
- exceptions;
- median clean-validation time;
- operational priority.

Say:
> Evaluation values are labelled synthetic. Production uses authorised district master/GIS and live claim telemetry.

**Evaluator takeaway:** MIS is operational, not decorative.

## 3:15–3:30 — Rapid scheme onboarding
Open Schemes.
Publish sandbox Rule Pack v3.5.

Show effective-dated configuration and historical-replay principle.

Say:
> A new scheme is configuration over reusable identity, evidence, workflow, finance and reconciliation primitives — not another software project.

**Evaluator takeaway:** directly answers low-code, low-cost and rapid scheme onboarding.

## 3:30–3:45 — Sovereign integration truth
Open Integrations.

Point to:
`RajKisan → RAJ-AGRIPAY → Raj Sewa Dwaar → IFMS/PFMS → UTR/Reconciliation`.

Show status labels: `SANDBOX`, `CONTRACT-READY`, `ADAPTER-READY`, `PROTOTYPE-PROVEN`.

**Evaluator takeaway:** the team understands deployment dependencies and does not fake APIs.

## 3:45–4:00 — SUTRA last-mile close
Open SUTRA Edge.
Run evidence scan → sealed offline packet → simulate connectivity → sync.

Say:
> SUTRA is optional, not a statewide hardware dependency. It brings camera evidence, Hindi/BHASHINI-ready assistance and resilient capture to offices or field contexts — but never approves Government expenditure offline.

Close with:
> RAJ-AGRIPAY reduces the controllable Agriculture-side delay around public payment rails: one dealer identity, one evidence packet, one owned exception path and one claim-to-UTR audit trail.

## Never say during the demo
- “We are live with IFMS/PFMS/RajKisan” unless credentials have actually been granted and verified.
- “AI approves the payment.”
- “Blockchain guarantees every payment.”
- “All claims settle instantly.”
- “The map is live Rajasthan Government data.”

## Demo recovery shortcuts
If time is running short, prioritize: `/onboarding` receipt → `/intake` structured path + duplicate BLOCK → main clean claim approval/UTR/reconciliation → Integration truth → SUTRA boundary. The map and Scheme Studio can be shown as 5-second proof points.
