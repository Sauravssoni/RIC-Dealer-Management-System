# RAJ-AGRIPAY Integration Matrix

**Principle:** production integrations must follow Government-approved legal, credential, network and gateway controls. The evaluator prototype never silently promotes a mock or local fixture to `LIVE`.

| System / rail | Agriculture use | Prototype state | Production gate | Authority remains with |
|---|---|---|---|---|
| RajKisan | dealer licence/lifecycle, Agriculture scheme references | CONTRACT-READY | Department-approved service contract via Raj Sewa Dwaar | Department of Agriculture |
| Rajasthan SSO | dealer/officer authentication and role handoff | CONTRACT-READY | app registration, approved role mapping | DoIT&C / authorised identity service |
| Raj Sewa Dwaar | State API/ESB path, policy, monitoring | CONTRACT-READY | service onboarding, subscription, network/security approvals | DoIT&C / RISL |
| IFMS 3.0 | vendor/payee references, bill/payment handoff, status/reconciliation references | CONTRACT-READY | Finance-approved API/service and network access | Finance / Treasury |
| PFMS / SNA-SPARSH | applicable CSS scheme/payment acknowledgement route | CONTRACT-READY | SSID, scheme mapping, whitelisting, State IFMIS integration | Government of India / State Finance |
| GST e-Invoice / IRP | structured IRN/QR invoice evidence | SANDBOX | taxpayer/GSP authorisation and production credentials | GSTN / authorised IRP |
| UIDAI / approved KYC route | e-KYC where legally required by the onboarding flow | CONTRACT-READY | appropriate Government AUA/Sub-AUA/OVSE/legal basis | UIDAI / authorised entity |
| BHASHINI | Hindi/regional ASR, translation and TTS for Dealer Saarthi / assisted channel | ADAPTER-READY | approved credentials/runtime and language-model selection | Digital India BHASHINI / configured service |
| SUTRA-ID Edge | optional assisted/offline evidence capture, voice, local confirmation and sync | PROTOTYPE-PROVEN | approved device/security/network profile | Department/server-side authorised workflow |
| Rajasthan GIS/master data | authoritative district/admin geometry in production | CONTRACT-READY | Department/DoIT&C-approved GIS/master-data source | Authoritative Rajasthan GIS/master-data owner |

## Readiness labels

- **LIVE** — authoritative production connector is actually connected, verified and monitored.
- **SANDBOX** — real external test/sandbox interface; no production authority implied.
- **CONTRACT-READY** — interface, data and authority boundary are defined; credentials/legal/network onboarding required.
- **ADAPTER-READY** — capability adapter exists conceptually/technically but approved runtime/model credentials are required.
- **PROTOTYPE-PROVEN** — capability has been demonstrated in a real prototype but remains subject to production onboarding.
- **SIMULATED** — deterministic evaluator behavior only; never shown as external truth.

## Map provenance

The evaluator dashboard uses a real Rajasthan geographic base for orientation, sourced from Wikimedia Commons `India Rajasthan location map.svg` (CC BY-SA 3.0, current revision dated 27 Aug 2025) with district-centroid overlays. Operating values are deterministic evaluation data. Production district geometry and telemetry must be replaced with Department-approved Rajasthan GIS/master data and live authorised sources.

## Non-negotiable finance boundary

RAJ-AGRIPAY may validate, assemble, explain, route and reconcile Agriculture claim evidence. It does **not** hold Government funds, replace Treasury/IFMS/PFMS, manufacture an acknowledgement, or allow an AI/SUTRA device to exercise expenditure authority.
