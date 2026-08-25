# Security & Governance Blueprint

## Core principles

1. Government systems remain authoritative.
2. No autonomous AI expenditure approval.
3. Least data, least privilege, purpose-limited access.
4. No raw secrets in application code.
5. Every financial-state change is attributable and replayable.
6. Sensitive master-data changes require stronger controls than ordinary edits.

## Access control

Use Raj SSO / approved identity integration with RBAC and jurisdiction/scheme/value-based ABAC. Example: an officer may view a claim but cannot approve it outside their assigned scheme, district or financial authority.

## Maker-checker controls

Mandatory for scheme rule publication, dealer bank-account changes, vendor identity merges, high-value exception overrides, failed-payment reversal/resubmission and integration configuration changes.

## Payment Identity Lock

Bank profile changes create a new immutable version. A claim records the exact bank-profile version valid when approved. Last-minute changes can trigger a configurable re-verification hold.

## Invoice and evidence controls

- Prefer structured/signed GST e-invoice evidence where authorised.
- Hash submitted evidence.
- Preserve original and normalized representations.
- Retain OCR confidence; low-confidence/high-value fields require review.
- Exact duplicate keys block automatically.
- Probabilistic anomaly signals never silently reject a claim.

## Audit event model

Every event records actor, role, claim/dealer/scheme IDs, before/after state, reason code, rule version, evidence hashes, source-system reference, timestamp and correlation ID. Corrections create new events; financial history is not destructively overwritten.

## AI governance

Allowed: OCR assistance, document classification, anomaly prioritisation, natural-language explanation, query routing, translation and voice assistance.

Not allowed without human authority: final licence decision, final expenditure approval, override of deterministic statutory/scheme rules, fabrication of external payment status.

## Aadhaar approach

Online Aadhaar e-KYC must use a valid authorised Government/UIDAI requesting-entity arrangement. Where appropriate, digitally signed offline QR/XML verification can reduce connectivity and storage burden. Avoid retaining raw Aadhaar copies where a verified token/reference is sufficient.

## Deployment controls

Production should support State-approved hosting/RSDC as directed, TLS and gateway-controlled integrations, mTLS/signing where required, a secrets vault, allowlisting, encryption, centralized audit logs/SIEM export, SAST/dependency scanning, DAST/penetration testing, backup/restore tests and agreed DR/RPO/RTO.
