# RAJ-AGRIPAY — 4-Minute Evaluator Demo

## Objective
Prove that RAJ-AGRIPAY is a working Government operations prototype, not an HTML pitch. In four minutes demonstrate dealer onboarding/renewal, invoice capture/OCR, deterministic Claim Truth, human approval, sovereign finance handoff, tracking, reconciliation, measurable value, statewide MIS, Rajasthan-native integration readiness and SUTRA-assisted last-mile access.

## 0:00–0:20 — Open directly into operations
Open `/dashboard` (the base URL redirects here).

Do **not** narrate a feature list. Let the evaluator see the officer console: claim queue, five operating KPIs, SLA controls, exception ownership, district MIS and authoritative-rail readiness.

Say:
> Rajasthan already has RajKisan and IFMS. RAJ-AGRIPAY is the Agriculture control plane between dealer evidence and sovereign Finance rails: it proves what is payable, owns the exception, routes the packet and closes the claim-to-UTR evidence loop.

Point to `EVALUATION SANDBOX` and the integration-truth strip.

## 0:20–0:50 — Dealer onboarding / renewal
Open `/onboarding` from the left rail.

Run the existing-dealer renewal path:
1. authorised identity reference;
2. RajKisan licence context;
3. GST/legal-name match;
4. IFMS payee reference + Payment Identity Lock;
5. scheme access;
6. Dealer Passport receipt.

Pause on `DP-RJ-JAI-002814-v8`.

Say:
> One Dealer Passport is reused across schemes. We federate source-owned records instead of creating another vendor master.

## 0:50–1:25 — Invoice intelligence
Continue to `/intake`.

First show **Structured e-Invoice**: IRN/QR evidence → field provenance → Claim Truth.

Then show **Legacy scan / OCR**: lower-confidence amount → mandatory human confirmation.

Say:
> We do not OCR what Government already made machine-readable. OCR is the controlled fallback for legacy and supporting evidence.

## 1:25–1:45 — Red-team the system
Load the duplicate-invoice scenario and run Claim Truth.

Show `DUPLICATE_INVOICE_REFERENCE` → deterministic `BLOCK`.

Say:
> This is not a black-box fraud score. The exact structured invoice reference already exists against a settled claim, so finance release is blocked with a reproducible reason code.

## 1:45–2:20 — Clean claim to UTR
Return to `/dashboard` → **Claims & Payments** → `AGR-26-10482`.

Demonstrate:
1. 12/12 evidence checks;
2. **Approve evidence packet → Finance**;
3. **Simulate authoritative acknowledgement**;
4. UTR generated;
5. **Auto-reconcile claim**.

Say:
> The acknowledgement is explicitly simulated in this prototype. In production IFMS/PFMS/Treasury remains authoritative; RAJ-AGRIPAY never declares payment success before the source rail does.

## 2:20–2:35 — Dealer transparency
Open the `AGR-26-10479` bank-change exception and resolve the demo re-verification. Mention that production dealer messaging is designed for **e-Sanchar 3.0 / approved Rajasthan messaging rails**.

Say:
> The dealer sees an owned action instead of calling multiple offices to discover why the money is stuck.

## 2:35–2:50 — Quantify value
Open `/impact`.

Change current TAT and target departmental TAT. Point out immediate recomputation of days released, indicative receivables released, financing-cost relief and administrative effort.

Say:
> These are editable scenario assumptions, not Rajasthan actuals. During the pilot the same model is driven by measured event timestamps and an approved baseline.

## 2:50–3:05 — State MIS
Return to `/dashboard` → **District MIS**. Select Jodhpur, Jaipur and a stable district.

Say:
> The map is an operational orientation layer over deterministic evaluation values. Production uses authorised Rajasthan GIS/master data and live claim telemetry.

## 3:05–3:20 — Rapid scheme onboarding
Open **Scheme Controls** and publish sandbox Rule Pack v3.5.

Say:
> New schemes reuse identity, evidence, workflow, finance and reconciliation primitives. Policy becomes effective-dated governed configuration, not another software project.

## 3:20–3:35 — Rajasthan-native integration truth
Open **Integrations**.

Point to:
`RajKisan → RAJ-AGRIPAY → Raj Sewa Dwaar → IFMS/PFMS → UTR/Reconciliation`.

Also point out:
- **Raj eSign** for approval signing;
- **e-Sanchar 3.0** for dealer notifications;
- GST e-Invoice sandbox;
- BHASHINI adapter;
- SUTRA prototype.

Show `SANDBOX`, `CONTRACT-READY`, `ADAPTER-READY`, `PROTOTYPE-PROVEN`.

## 3:35–4:00 — SUTRA close
Open **SUTRA Edge**. Run evidence capture → sealed offline packet → connectivity → sync.

Say:
> SUTRA is optional, not a statewide hardware dependency. It brings camera evidence, Hindi/BHASHINI-ready assistance and resilient capture to assisted-service contexts, but it never approves Government expenditure offline.

Close:
> One dealer identity, one evidence packet, one owned exception path and one claim-to-UTR audit trail — built around Rajasthan's existing systems rather than another silo.

## Demo safety rules
Never say:
- “We are live with IFMS/PFMS/RajKisan” unless production credentials are actually granted and verified.
- “AI approves the payment.”
- “Blockchain guarantees every payment.”
- “All claims settle instantly.”
- “The map is live Rajasthan Government data.”
- “The Impact Lab figures are Rajasthan actuals.”

## Recovery shortcut
If time is running short: `/onboarding` receipt → `/intake` structured path + duplicate BLOCK → `/dashboard` clean claim approval/UTR/reconciliation → Integrations → SUTRA. Impact and District MIS can be 5-second proof points.