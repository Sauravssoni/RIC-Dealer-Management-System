# RAJ-AGRIPAY

**Rajasthan Integrated Dealer Lifecycle, Claim & Settlement Fabric**

RAJ-AGRIPAY is an evaluation-grade prototype for the Rajasthan Innovation Challenge problem statement on an **Integrated Dealer Management System** for fertilizer, seed and input dealers.

> **One Dealer. One Claim. One Ledger. One Settlement Journey.**

## The key design decision

Rajasthan already operates major pieces of the requested stack:

- **RajKisan** supports seed/fertilizer/pesticide licence workflows and Agriculture Department digital processes.
- **IFMS 3.0** already includes vendor registration, vendor profiles, invoice upload/tracking, payment tracking, work orders, Treasury, Bank Disbursement Engine and reconciliation capabilities.
- **SNA-SPARSH / PFMS / RBI e-Kuber** provide the authoritative rail for applicable Centrally Sponsored Scheme payments.
- **Raj Sewa Dwaar** is Rajasthan's central API gateway/enterprise service bus for inter-application connectivity.

So RAJ-AGRIPAY deliberately **does not create another vendor registry or hold public money**. It is the Agriculture-specific orchestration/control plane that turns a dealer claim into a verified, scheme-aware, audit-ready payment packet and keeps the complete lineage through settlement and reconciliation.

## What the prototype demonstrates

- Unified **Dealer Passport** over Agriculture licence + finance/payee references.
- **Claim Truth Graph**: dealer, invoice, scheme, delivery and finance evidence assembled in one deterministic decision packet.
- **GST e-Invoice first / OCR fallback** design.
- Versioned **Scheme Rule Studio** for rapid scheme onboarding.
- Explainable duplicate/risk/exception checks.
- Human-authority-first approval; no autonomous public expenditure.
- Fund-aware routing: State scheme vs CSS/SNA-SPARSH/PFMS path.
- Claim → approval → payment acknowledgement → **UTR reconciliation** lineage.
- Dealer-facing status transparency.
- BHASHINI-ready Hindi query layer.
- Optional **SUTRA Dealer Edge** assisted/offline channel.
- Explicit integration labels: `LIVE`, `SANDBOX`, `CONTRACT-READY`, `ADAPTER-READY`, `PROTOTYPE-PROVEN`.

## Evaluation views

1. **Command Centre** – operational overview, claim queue, SLA attention and Dealer Saarthi.
2. **Claims** – evidence-backed claim packets, deterministic checks, approval handoff.
3. **Dealers** – Dealer Passport and payment identity lock.
4. **Schemes** – low-code/effective-dated Scheme Rule Studio.
5. **Reconciliation** – claim-to-UTR lineage and exception closure.
6. **Integrations** – no-fake-API readiness matrix.
7. **SUTRA Edge** – optional assisted/offline field channel.

## Government alignment

```text
RajKisan licence / Agriculture data
                │
                ▼
        ┌─────────────────┐
        │   RAJ-AGRIPAY   │
        │ Agriculture     │
        │ control plane   │
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
```

## Prototype truthfulness

The UI uses deterministic local demo data. It **does not claim live access** to RajKisan, IFMS, PFMS, GSTN or Raj Sewa Dwaar. Production integration requires the relevant Government approvals, credentials, allowlisting and interface contracts.

## Why SUTRA-ID Edge is included

SUTRA is an **optional access channel**, not a statewide hardware dependency. It is useful for assisted dealer service at district offices/camps and low-connectivity contexts: camera evidence capture, voice guidance, local human confirmation, encrypted queueing and later approved sync.

## Product thesis

> **RAJ-AGRIPAY does not replace Rajasthan's finance infrastructure. It makes Agriculture claims understandable, verifiable, routable and reconcilable before and after they enter that infrastructure.**
