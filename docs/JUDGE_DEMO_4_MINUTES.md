# RAJ-AGRIPAY — 4-Minute Evaluator Demo

## Objective
Prove that RAJ-AGRIPAY is a **functional Government operations prototype**, not an HTML pitch and not a falsely finished Government deployment. The evaluator should understand in seconds what works today, what is simulated, which Rajasthan/sovereign systems remain authoritative, and what the 90-day pilot turns into a production-refined departmental release.

## Demo doctrine
Open the deployed base URL. It must redirect directly to `/dashboard`.

Use the single **Evaluator Console** at the bottom-right. Do not use an auto-playing demo. The evaluator controls each proof step and can stop, inspect or reset at any time.

The prototype truth boundary must remain visible:
- deterministic/synthetic evaluator fixtures;
- no live RajKisan / IFMS / PFMS credentials claimed;
- Government human authority controls expenditure;
- source acknowledgement precedes payment-success state;
- production UX, localisation, authorised GIS/master data and final connectors are refined with the Department during pilot inception.

---

## 0:00–0:20 — Open directly into Agriculture Finance Operations
Open `/` and let the server redirect to `/dashboard`.

Do **not** narrate a feature list. Let the evaluator see the officer console: claim queue, five operating KPIs, SLA controls, exception ownership, district MIS and authoritative-rail readiness.

Say:
> Rajasthan already has RajKisan and IFMS. RAJ-AGRIPAY is the Agriculture control plane between dealer evidence and sovereign Finance rails: it proves what is payable, owns the exception, routes the packet and closes the claim-to-UTR evidence loop.

Point to `EVALUATION SANDBOX` and the integration-truth strip.

Open the **Evaluator Console** and show the three deterministic scenarios:
- GREEN · clean claim;
- AMBER · recent bank-profile change;
- RED · duplicate invoice.

---

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

---

## 0:50–1:20 — Invoice intelligence
Continue to `/intake`.

First show **Structured e-Invoice**: IRN/QR evidence → field provenance → Claim Truth.

Then show **Legacy scan / OCR**: lower-confidence amount → mandatory human confirmation.

Say:
> We do not OCR what Government already made machine-readable. OCR is the controlled fallback for legacy and supporting evidence.

---

## 1:20–1:40 — Red-team the system
Return to `/dashboard`, open the **Evaluator Console**, choose **RED · DUPLICATE**, and execute the first two proof steps.

Show `AGR-26-10481` and `DUPLICATE_INVOICE_REFERENCE` → deterministic Finance block.

Say:
> This is not a black-box fraud score. The exact structured invoice reference already exists against another claim, so finance release is blocked with a reproducible policy reason.

---

## 1:40–2:15 — Clean claim to UTR
In the Evaluator Console choose **GREEN · CLEAN CLAIM** and use its step-by-step controls:
1. open `AGR-26-10482`;
2. approve evidence packet → Finance;
3. simulate authoritative acknowledgement;
4. auto-reconcile.

Say:
> The acknowledgement is explicitly simulated in this prototype. In production IFMS/PFMS/Treasury remains authoritative; RAJ-AGRIPAY never declares payment success before the source rail does.

Pause on the reconciled UTR state.

---

## 2:15–2:35 — Payment Identity Lock
Reset the evaluator dataset. Choose **AMBER · BANK CHANGE**.

Execute:
1. open `AGR-26-10479`;
2. complete demo re-verification;
3. return the claim to the clean lane.

Say:
> A bank-account change is not a normal profile edit. It becomes a high-consequence payment-identity event with maker-checker re-verification and version history before Finance release.

---

## 2:35–2:50 — Quantify value
Open `/impact`.

Change current TAT and target departmental TAT. Point out immediate recomputation of days released, indicative receivables released, financing-cost relief and administrative effort.

Say:
> These are editable scenario assumptions, not Rajasthan actuals. During the pilot the same model is driven by measured event timestamps and an approved baseline.

---

## 2:50–3:05 — State MIS
Return to `/dashboard` → **District MIS**. Select Jodhpur, Jaipur and a stable district.

Say:
> This is an operational workload layer over deterministic evaluator data. Production replaces the fixture with authorised Rajasthan GIS/master data and live claim telemetry.

The map must answer a management question, not merely show geography:
> Where is money getting stuck, why, who owns the exception and what action clears it?

---

## 3:05–3:20 — Rapid scheme onboarding
Open **Scheme Controls** and publish sandbox Rule Pack v3.5.

Say:
> New schemes reuse identity, evidence, workflow, finance and reconciliation primitives. Policy becomes effective-dated governed configuration, not another software project.

---

## 3:20–3:35 — Rajasthan-native integration truth
Open **Integrations**.

Point to the intended production chain:
`RajKisan → RAJ-AGRIPAY → Raj Sewa Dwaar → IFMS/PFMS → acknowledgement → UTR/Reconciliation`.

Also point out:
- **Raj eSign** for authorised approval signing;
- **e-Sanchar 3.0** for dealer notifications;
- GST e-Invoice sandbox;
- BHASHINI adapter;
- SUTRA prototype.

Show the readiness labels: `SANDBOX`, `CONTRACT-READY`, `ADAPTER-READY`, `PROTOTYPE-PROVEN`.

---

## 3:35–3:50 — SUTRA last mile
Open **SUTRA Edge**. Run evidence capture → sealed local packet → connectivity → sync.

Say:
> SUTRA is optional, not a statewide hardware dependency. It brings camera evidence and Hindi/BHASHINI-ready assistance to assisted-service contexts, but it never approves Government expenditure offline.

---

## 3:50–4:00 — Vision without scope inflation
Open the Evaluator Console → **Programme** tab or `/vision`.

Show:
`90-day dealer settlement → Agriculture Payment Evidence Fabric → future FarmGraph AI interoperability`.

Say:
> We solve the dealer-payment challenge first. Once Rajasthan has clean, governed Agriculture payment evidence, authorised future signals can support input-demand forecasting, access-gap detection and scheme/extension planning. Those future integrations are not claimed live today.

Close:
> One dealer identity, one evidence packet, one owned exception path and one claim-to-UTR audit trail — built around Rajasthan's existing systems rather than another silo.

---

## Demo safety rules
Never say:
- “We are live with IFMS/PFMS/RajKisan” unless production credentials are actually granted and verified.
- “AI approves the payment.”
- “Blockchain guarantees every payment.”
- “All claims settle instantly.”
- “The map is live Rajasthan Government data.”
- “The Impact Lab figures are Rajasthan actuals.”
- “This prototype UI is the final production UX.”

Instead say:
> This is the functional evaluator prototype. The 90-day pilot hardens the same operating model into the Department-configured production release with authorised connectors, final role journeys, accessibility/localisation, security controls and measured SLAs.

## Recovery shortcut
If time is running short: Evaluator Console RED duplicate proof → GREEN clean claim approval/UTR/reconciliation → Integrations → SUTRA → Programme/FarmGraph vision. Onboarding and Impact can be 5-second route proofs.