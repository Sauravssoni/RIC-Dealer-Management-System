# Rajasthan baseline → RAJ-AGRIPAY premium evolution

## Why this matters

RAJ-AGRIPAY is not designed as a greenfield SaaS replacement for Rajasthan Government systems. The evaluator UI and architecture intentionally inherit the operating model of the State's existing e-governance stack while adding the Agriculture-specific control plane missing from today's fragmented dealer-payment journey.

## Current Rajasthan baseline

### RajKisan
Current Agriculture portal capability includes dealer/licence application and renewal workflows, Agriculture-specific forms, citizen/departmental access and application dashboards.

**RAJ-AGRIPAY treatment:** RajKisan remains the Agriculture licence/source-of-truth boundary. Dealer Passport references authorised RajKisan state instead of duplicating the licence master.

### IFMS 3.0 Vendor Management
Current Finance capability includes vendor registration/profile management, invoice upload/tracking, payment tracking, work-order access and maker/checker/approver role patterns.

**RAJ-AGRIPAY treatment:** IFMS remains vendor/payment authority. RAJ-AGRIPAY does not rebuild generic payee, payment or Treasury functions.

### Rajasthan SSO
The State already uses a Government header, authenticated application workspace and role/application navigation model.

**RAJ-AGRIPAY treatment:** the prototype adopts a familiar departmental-officer workspace pattern and is designed for Rajasthan SSO integration after authorised onboarding.

### Raj Sewa Dwaar
RSD is Rajasthan's enterprise service bus / central API catalogue and provides service/application/transaction monitoring patterns.

**RAJ-AGRIPAY treatment:** State integrations are designed to be onboarded through Raj Sewa Dwaar rather than bespoke point-to-point credentials.

### e-Sanchar / RajDharaa / RajMaster
Current State e-governance guidance identifies e-Sanchar for messaging, RajDharaa for GIS dashboards and RajMaster for administrative master data where applicable.

**RAJ-AGRIPAY treatment:** dealer messages are e-Sanchar-ready; production geography/master data is RajDharaa/RajMaster-ready. The evaluator map is deliberately synthetic/orientation-only.

## What RAJ-AGRIPAY adds that the baseline does not solve end-to-end

1. **Federated Dealer Passport** across scheme journeys without another generic vendor master.
2. **Agriculture Claim Truth Packet** joining dealer/licence, invoice, scheme, delivery and finance evidence.
3. **Structured invoice first, OCR fallback** instead of treating OCR as the primary truth source.
4. **Versioned Scheme Packs** so new schemes become governed configuration rather than separate software projects.
5. **Payment Identity Lock** for high-consequence bank-profile changes.
6. **Owned PASS / EXCEPTION / BLOCK outcomes** with reason, owner and next action.
7. **District exception intelligence** focused on where money is stuck and why.
8. **Claim → acknowledgement → UTR → reconciliation lineage** across Agriculture and Finance boundaries.
9. **Truth-labelled integration states** so prototype/sandbox/contract-ready/prototype-proven are never confused with LIVE.
10. **Optional SUTRA/BHASHINI assisted channel** for camera/voice/low-connectivity evidence capture without offline expenditure authority.

## Product-design principle

> Make RAJ-AGRIPAY feel like Rajasthan commissioned a premium next-generation Agriculture operations module inside its existing digital ecosystem — not like an external startup dashboard bolted onto Government.

## Evaluator sentence

> RajKisan knows the dealer. IFMS knows the payment. RAJ-AGRIPAY knows whether this Agriculture claim is ready to become that payment — and why.
