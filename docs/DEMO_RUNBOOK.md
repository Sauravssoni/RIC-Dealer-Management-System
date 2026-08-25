# RAJ-AGRIPAY Evaluator Demo Runbook

## Goal

Demonstrate in 3–4 minutes that RAJ-AGRIPAY solves the actual Agriculture payment-control problem rather than presenting another upload portal.

## 0. Opening (10 seconds)

Let the launch splash establish **Government of Rajasthan · Department of Agriculture** context, then land on the blue/white Command Centre.

Say: **“Rajasthan already has RajKisan and IFMS. We add the missing Agriculture-specific evidence, policy and reconciliation layer between a dealer claim and sovereign payment rails.”**

## 1. Command Centre — understand the gap (25 seconds)

- Show claim value, exception value and controllable clean-claim validation metric.
- Point out the Claim Truth Graph: Dealer → Invoice → Scheme → Delivery → Finance.
- Open the claim queue.
- Ask Dealer Saarthi: `AGR-26-10479 क्यों रुका है?`
- Show that the response comes from actual evaluation state, not a generic FAQ.

## 2. Rajasthan Map — operate statewide (25 seconds)

- Open **Rajasthan Map**.
- Point out that the UI uses a real Rajasthan geographic base and that all operating values remain visibly labelled evaluation data.
- Select Jaipur, Jodhpur and Udaipur to show district dealer/claim/exception/SLA drill-down.
- Explain production replacement with authorised Rajasthan GIS/master data and live departmental telemetry.

## 3. Claims — prove claim truth (70 seconds)

### Clean claim
Open `AGR-26-10482`.

- Show 12/12 deterministic checks.
- Show evidence references and finance route.
- Click **Approve packet → Finance**.
- Explain: this is a human Government approval action; AI never exercises expenditure authority.
- Click **Simulate authorised acknowledgement** only after the claim is in Finance.
- Show generated evaluation UTR.
- Click **Auto-reconcile claim**.

### Payment Identity Lock
Open `AGR-26-10479`.

- Show recent bank-profile-change exception.
- Click **Complete demo re-verification**.
- Explain versioned bank profile + maker-checker protection.

### Duplicate control
Open `AGR-26-10481`.

- Show duplicate structured invoice reference.
- Point out that Finance release remains blocked and the original evidence is retained for audit.

## 4. Dealers — avoid another master (20 seconds)

- Show Unified Dealer Passport.
- Explain RajKisan Agriculture licence truth + IFMS vendor/payee references.
- Show Payment Identity Lock.
- State explicitly: **“We federate identity; we do not create another generic IFMS vendor master.”**

## 5. Scheme Rule Studio — low-code that matters (25 seconds)

- Open Schemes.
- Show effective date, finance route and maker-checker path.
- Click **Publish sandbox rule v3.5**.
- Explain that old claims retain the old rule version; a new subsidy rate never rewrites history.

## 6. Reconciliation — close the loop (20 seconds)

- Show claim → evidence → approval → acknowledgement → UTR → reconciliation.
- Contrast reconciled payment with the bank-rejection exception model.
- State: **“Book closure becomes exception management, not manual archaeology.”**

## 7. Integrations — prove implementation maturity (25 seconds)

- Show sovereign rail: RajKisan → RAJ-AGRIPAY → Raj Sewa Dwaar → IFMS/PFMS → UTR/reconciliation.
- Point out every truth label: `SANDBOX`, `CONTRACT-READY`, `ADAPTER-READY`, `PROTOTYPE-PROVEN`.
- Explain that production credentials/legal basis/allowlisting are explicit dependencies.

## 8. SUTRA Dealer Edge — last mile without overengineering (30 seconds)

- Open SUTRA Edge.
- Click **Scan demo evidence**.
- Show local evidence-quality state and sealed offline packet.
- Explain BHASHINI-ready Hindi voice guidance and camera capture.
- Click **Simulate connectivity + sync**.
- Emphasise the hard boundary: **no offline payment approval, no invented settlement status.**

## Close (10 seconds)

**“RAJ-AGRIPAY does not ask Rajasthan to replace the rails it already funded. It makes Agriculture dealer claims verifiable before Finance, transparent while they move, and reconcilable after money moves.”**

## Truth labels to preserve during recording

- `Evaluation Sandbox`
- `Prototype data · no live Government credentials`
- GST = `SANDBOX`
- RajKisan / SSO / Raj Sewa Dwaar / IFMS / PFMS = `CONTRACT-READY`
- BHASHINI = `ADAPTER-READY`
- SUTRA-ID Edge = `PROTOTYPE-PROVEN`

Never crop or hide these labels in the submission video.
