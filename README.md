# RAJ-AGRIPAY

**Rajasthan Integrated Dealer Lifecycle, Claim & Settlement Fabric**

RAJ-AGRIPAY is an evaluation-grade prototype for the Rajasthan Innovation Challenge problem statement on an **Integrated Dealer Management System** for fertilizer, seed and input dealers.

> **One Dealer. One Claim. One Ledger. One Settlement Journey.**

## The researched design decision

Rajasthan is not starting from zero. **IFMS 3.0 already includes generic vendor registration, vendor profiles, invoice upload/tracking, payment tracking and work-order functionality.** Rajasthan Finance has also moved FVC bill processing into IFMS 3.0 with vendor registration, e-invoice/non-e-invoice handling, IMS/SRN linkage where applicable, invoice-PDF upload and an AI-assisted amount-check path.

Therefore RAJ-AGRIPAY deliberately **does not build another generic vendor/payment portal**. It is the missing **Agriculture-specific control plane** between Agriculture truth and Finance settlement:

- **RajKisan** remains authoritative for Agriculture licence/lifecycle records.
- **IFMS 3.0** remains authoritative for generic vendor/payee, Treasury and State financial processing.
- **SNA-SPARSH / PFMS / RBI e-Kuber** remain the authoritative rail for applicable CSS payments.
- **Raj Sewa Dwaar** remains Rajasthan's central integration/API gateway.
- **RAJ-AGRIPAY** turns scheme-specific Agriculture claims into validated, explainable, audit-ready finance packets and maintains claim-to-UTR lineage.

## What the functional prototype demonstrates

- Unified **Dealer Passport** over Agriculture licence + finance/payee references.
- **Claim Truth Graph**: dealer, invoice, scheme, delivery and finance evidence assembled in one deterministic decision packet.
- **GST e-Invoice/IRN/QR first; OCR fallback** for legacy/scanned documents.
- Versioned **Scheme Rule Studio** for rapid scheme onboarding.
- Explainable duplicate/risk/exception checks rather than opaque AI rejection.
- **Payment Identity Lock** for sensitive bank-profile changes.
- Human-authority-first approval; no autonomous public expenditure.
- Fund-aware routing: State scheme vs CSS/SNA-SPARSH/PFMS path.
- **IFMS/FVC-ready evidence packet** concept, including IMS/SRN references where applicable.
- Claim → approval → external acknowledgement → payment reference/UTR → reconciliation lineage.
- Dealer-facing **Where is my money?** transparency.
- BHASHINI-ready Hindi transaction/query layer.
- Optional **SUTRA Dealer Edge** assisted/offline channel.
- Explicit integration labels: `LIVE`, `SANDBOX`, `CONTRACT-READY`, `ADAPTER-READY`, `PROTOTYPE-PROVEN`.

## Evaluation views

1. **Command Centre** – operational overview, claim queue, SLA attention and Dealer Saarthi.
2. **Claims** – evidence-backed claim packets, deterministic checks and officer approval handoff.
3. **Dealers** – Dealer Passport and Payment Identity Lock.
4. **Schemes** – low-code/effective-dated Scheme Rule Studio.
5. **Reconciliation** – claim-to-UTR lineage and exception closure.
6. **Integrations** – no-fake-API readiness matrix.
7. **SUTRA Edge** – optional assisted/offline field channel.

## Government alignment

```text
RajKisan licence / Agriculture scheme truth
                │
                ▼
        ┌─────────────────┐
        │   RAJ-AGRIPAY   │
        │ claim control   │
        │     plane       │
        └────────┬────────┘
                 │
          Raj Sewa Dwaar
                 │
        ┌────────┴─────────┐
        ▼                  ▼
     IFMS 3.0        PFMS/SNA-SPARSH
        │                  │
        └────────┬─────────┘
                 ▼
          RBI / Bank rail
                 │
                 ▼
         claim-to-UTR recon
```

## Prototype truthfulness

The current UI uses deterministic local evaluation data. It **does not claim live access** to RajKisan, IFMS, PFMS, GSTN, UIDAI or Raj Sewa Dwaar. Production integration requires the relevant Government approvals, credentials, allowlisting, legal basis and interface contracts.

## Why SUTRA-ID Edge is included

SUTRA is an **optional access channel**, not a statewide hardware dependency. It is useful for assisted dealer service at district offices/camps and low-connectivity contexts: camera evidence capture, Hindi voice guidance, local human confirmation, encrypted queueing and later approved sync. Financial approval and settlement still remain inside Government-authorised systems.

## Run the dashboard

```bash
npm install
npm run dev
```

Production gate:

```bash
npm run typecheck
npm run build
```

## Research & implementation pack

- [`docs/RESEARCH_EVIDENCE.md`](docs/RESEARCH_EVIDENCE.md) — authoritative infrastructure findings and architecture consequences.
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — control-plane, Claim Truth Graph and state-machine design.
- [`docs/INTEGRATION_MATRIX.md`](docs/INTEGRATION_MATRIX.md) — explicit live/sandbox/contract-ready boundaries.
- [`docs/SECURITY_GOVERNANCE.md`](docs/SECURITY_GOVERNANCE.md) — finance-grade controls and responsible AI.
- [`docs/90_DAY_PILOT.md`](docs/90_DAY_PILOT.md) — 90-day pilot, gates and measurable KPIs.
- [`docs/DEMO_RUNBOOK.md`](docs/DEMO_RUNBOOK.md) — evaluator demonstration sequence.

## Product thesis

> **RAJ-AGRIPAY does not replace Rajasthan's finance infrastructure. It makes Agriculture claims understandable, verifiable, routable and reconcilable before and after they enter that infrastructure.**
