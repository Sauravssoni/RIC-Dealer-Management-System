# RAJ-AGRIPAY Architecture

RAJ-AGRIPAY is the **Agriculture Dealer Control Plane**. It owns Agriculture-domain orchestration, not sovereign financial settlement.

## Systems of record remain authoritative

- RajKisan / Agriculture Department: licence and Agriculture-domain records.
- IFMS 3.0: generic vendor/payee, bills, Treasury and State financial processing.
- PFMS / SNA-SPARSH: applicable CSS financial rail.
- GSTN/IRP: authorised structured invoice evidence.
- Raj Sewa Dwaar: State integration gateway.

## Logical architecture

```text
Dealer Web/PWA ─┐
Officer Console ├─> Experience API
Audit Console ──┤
SUTRA Edge ─────┘
       │
       ▼
┌────────────────────────────────────────────────────┐
│                   RAJ-AGRIPAY                      │
│ Dealer Passport        Claim Intake                │
│ Licence Lifecycle      Invoice Evidence            │
│ Claim Truth Graph      Scheme Rule Studio          │
│ Risk/Exception Guard   Human Approval Workbench    │
│ Fund Route Resolver    Notification/Saarthi        │
│ Claim-to-UTR Ledger    Reconciliation Engine       │
│ Audit Event Store      Operational MIS             │
└──────────────────────────┬─────────────────────────┘
                           │
                    Raj Sewa Dwaar
                           │
      ┌─────────────┬──────┼────────────┬───────────┐
      ▼             ▼      ▼            ▼           ▼
   RajKisan      IFMS   PFMS/SNA      GST IRP    BHASHINI
                           │
                           ▼
                    RBI / Bank rail
```

## Claim Truth Graph

Each claim is evaluated as a graph of attributable facts:

1. **Dealer** – licence validity, dealer category, jurisdiction, finance/payee reference, bank-profile version.
2. **Invoice** – invoice identifier, GSTIN, IRN/QR where applicable, amount, line items, tax, document hash.
3. **Scheme** – eligible dealer/product, sanctioned ceiling, effective period, rule version, approval path, fund route.
4. **Delivery** – order/beneficiary/delivery/installation/field evidence where required.
5. **Finance** – approval, sanction/bill reference, external acknowledgement, payment reference/UTR, reconciliation.

Every automated result produces a human-readable reason code.

## State machine

```text
DRAFT
  ↓
EVIDENCE_CAPTURED
  ↓
VALIDATING
  ├──> EXCEPTION_NEEDS_DEALER
  ├──> EXCEPTION_NEEDS_OFFICER
  └──> READY_FOR_APPROVAL
             ↓
          APPROVED
             ↓
       FINANCE_HANDOFF
             ↓
  EXTERNAL_ACKNOWLEDGED
       ├──> PAYMENT_FAILED
       └──> PAID
             ↓
         RECONCILED
```

No transition marked `APPROVED` is made autonomously by an LLM.

## Scheme Rule Studio

Schemes are versioned configuration/decision tables covering dealer class, required licence, eligible items, rate/quantity ceiling, claim period, evidence, deductions, approval hierarchy, SLA, fund route and reconciliation rules. Published rule bundles are effective-dated and maker-checker approved so historic claims remain reproducible.

## SUTRA Dealer Edge

SUTRA is an optional assisted endpoint for QR/licence/invoice evidence capture, Hindi voice guidance, local quality checks, human-confirmed packet creation, encrypted offline queueing and later approved sync. Payment authority remains inside Government systems.
