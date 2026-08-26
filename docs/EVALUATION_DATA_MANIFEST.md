# Evaluation Data Manifest

## Purpose
RAJ-AGRIPAY intentionally uses deterministic evaluation fixtures so an evaluator can exercise the complete workflow without implying access to protected Government systems. This manifest separates **prototype evidence** from **authoritative production data**.

## Dataset classes

### A. Claim fixtures — synthetic
Located in `lib/data.ts`.
Examples include `AGR-26-10482`, `AGR-26-10481` and `AGR-26-10479`.

These IDs, dealer names, GSTIN-like values, invoice references, claim amounts, statuses, UTRs, ages and evidence references are **evaluation fixtures**. They are constructed to demonstrate clean, exception, duplicate, finance and reconciliation states.

They must not be represented as actual Agriculture Department claims or dealer records.

### B. District operations — synthetic operating telemetry
Located in `lib/data.ts`.

District names/centroid coordinates provide geographic orientation. Dealer counts, claim counts, values, exception counts and median processing times are deterministic evaluation values.

They must not be represented as current Rajasthan Agriculture statistics.

### C. Rajasthan basemap — public geographic reference
The current evaluator map uses a public Rajasthan basemap for visual orientation and overlays the synthetic district-centroid data.

It is not cadastral, authoritative administrative-boundary or land-record data. Production must use Department/DoIT&C-approved GIS/master data.

### D. Integration statuses — architecture truth labels
`SANDBOX`, `CONTRACT-READY`, `ADAPTER-READY` and `PROTOTYPE-PROVEN` describe integration readiness, **not production connection status**.

No current evaluator fixture implies live access to RajKisan, SSO, Raj Sewa Dwaar, Raj eSign, e-Sanchar, IFMS, PFMS/SNA-SPARSH, GSTN, UIDAI or BHASHINI.

### E. Impact Lab — scenario assumptions
Values under `/impact` are editable examples only. They are not Rajasthan Government actual volumes, realised savings or measured dealer financing rates.

Production/pilot mode must populate the model from measured event timestamps, confirmed claim values and explicitly agreed assumptions.

### F. SUTRA flow — prototype demonstration
SUTRA-ID Edge is labelled `PROTOTYPE-PROVEN` as a Syntheon edge capability. The RAJ-AGRIPAY SUTRA screen is an evaluator integration demonstration. It does not claim that Rajasthan Agriculture has deployed SUTRA devices or granted production credentials.

## Production replacement matrix

| Evaluation fixture | Production replacement |
|---|---|
| dealer identity/passport fields | authorised RajKisan/SSO/IFMS references |
| GST structured fields | authorised GST/IRP evidence |
| invoice OCR fixture | approved OCR runtime + uploaded evidence |
| scheme rules | Department-approved Scheme Packs |
| payment acknowledgement | IFMS/PFMS/Treasury-authoritative response |
| UTR | authoritative payment/bank reference |
| district metrics | live authorised claim/operational telemetry |
| map geometry | approved Rajasthan GIS/master data |
| SMS examples | e-Sanchar/approved messaging dispatch + receipt |
| approval receipt | authorised officer + Raj eSign/approved signing path |
| Impact Lab assumptions | measured pilot KPI events and agreed economic assumptions |

## Demo truth sentence
If an evaluator asks whether the displayed numbers are live, answer:

> No. The evaluator dataset is deliberately synthetic and deterministic so every workflow can be reproduced safely. The integration matrix shows exactly which production sources replace each fixture after Government onboarding.
