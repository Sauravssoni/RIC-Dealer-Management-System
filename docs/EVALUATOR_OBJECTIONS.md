# RAJ-AGRIPAY — Evaluator Objection Kill-Sheet

Use these answers in Q&A. The goal is not to defend every feature; it is to show that the architecture has been designed around Rajasthan's real systems, Government authority and deployment constraints.

## 1. “Isn't IFMS 3.0 already doing vendor registration and invoice processing?”
**Answer:** Yes — and that is exactly why RAJ-AGRIPAY does not rebuild generic vendor/payee management. IFMS remains the Finance system of record. RAJ-AGRIPAY adds Agriculture-specific claim truth before finance handoff: dealer licence context, scheme eligibility, rate/quantity limits, delivery evidence, cross-scheme duplicate checks, exception ownership and the post-payment claim-to-UTR reconciliation view.

## 2. “Why not just add these fields into RajKisan?”
**Answer:** RajKisan remains authoritative for Agriculture services and licence/lifecycle context. The challenge exists because payment execution spans multiple schemes and Finance rails. RAJ-AGRIPAY is an API-first orchestration layer that can reuse RajKisan rather than coupling every scheme workflow directly to every Finance system. This also gives the Department one configurable operating model for State and centrally sponsored schemes.

## 3. “Can you really integrate with IFMS/PFMS/GSTN today?”
**Answer:** The prototype does not claim production credentials. Every integration is visibly labelled `SANDBOX`, `CONTRACT-READY`, `ADAPTER-READY` or `PROTOTYPE-PROVEN`. Production activation is an implementation milestone requiring Government approval, credentials, network access, allowlisting and scheme mapping through the approved Rajasthan integration path.

## 4. “The challenge asks for Aadhaar-linked e-KYC. How do you avoid privacy/compliance problems?”
**Answer:** We support the requirement only through an authorised Government identity/authentication route. RAJ-AGRIPAY does not invent its own Aadhaar authentication or retain unnecessary Aadhaar data. The Dealer Passport stores minimum verification references and source provenance. Production mode is selected with the Department based on the approved AUA/Sub-AUA/e-KYC arrangement or other legally authorised identity mechanism.

## 5. “Why is OCR not the centre of the product?”
**Answer:** Because OCR is an extraction technique, not payment truth. Where an authorised structured e-invoice/IRN/QR record exists, parsing it is cheaper and more reliable than re-reading it with OCR. OCR remains essential for legacy scans and supporting documents, with confidence and human-review thresholds. The hard problem starts after extraction: whether the dealer, item, rate, quantity, sanction, delivery and finance route make the claim payable.

## 6. “How do you prevent AI from wrongly rejecting a dealer?”
**Answer:** Core eligibility/payment controls are deterministic and reason-coded. AI may extract, explain, summarize or prioritize; it does not exercise public-expenditure authority. A blocked duplicate, for example, is tied to an exact reference collision — not an opaque risk score. Exceptions remain reviewable by authorised officers.

## 7. “What happens if a dealer changes bank details just before payment?”
**Answer:** Payment Identity Lock triggers re-verification, maker-checker control and a new bank-profile version. Claims preserve the exact bank-profile version frozen at approval, so a later profile change cannot silently redirect an already approved payment packet.

## 8. “What makes the system low-code?”
**Answer:** Scheme behavior is expressed as versioned, effective-dated Scheme Packs: eligible dealer classes, licence requirements, invoice evidence, ceilings, quantity rules, scheme period, approval thresholds, finance route and reconciliation requirements. New schemes reuse the same identity/evidence/workflow/payment primitives instead of requiring a new application.

## 9. “How do you handle State schemes and CSS differently?”
**Answer:** RAJ-AGRIPAY classifies the fund route at the claim layer. State-scheme packets are prepared for the applicable IFMS/Treasury route; CSS packets carry the scheme/fund metadata required for the State IFMIS/PFMS/SNA-SPARSH path. The Finance systems remain authoritative for sanction, release and accounting.

## 10. “Why should dealers care?”
**Answer:** Their single question is usually “Where is my money and what do I need to do?” RAJ-AGRIPAY provides one claim timeline, action-required reason, SMS/portal alert and grounded Dealer Saarthi explanation instead of forcing the dealer to navigate scheme terminology or call multiple offices.

## 11. “How does this help auditors?”
**Answer:** Search one Claim ID and replay dealer reference, invoice provenance, rule version, delivery evidence, approval, finance handoff, acknowledgement, deductions, UTR and reconciliation. Corrections create new events/versions rather than silently rewriting history.

## 12. “Why the SUTRA device? Isn't that scope creep?”
**Answer:** SUTRA is optional. Dealers with connectivity use web/PWA. SUTRA is an assisted channel for district offices, camps or low-connectivity contexts where camera capture, Hindi/BHASHINI-ready voice guidance and offline evidence queueing help. It never approves expenditure offline and is not required for statewide rollout.

## 13. “Is blockchain required?”
**Answer:** No. Default auditability is an efficient append-only/hash-linked event model. A distributed ledger would be considered only if multiple independent institutions genuinely need shared non-repudiation. The product is not dependent on blockchain.

## 14. “Can you really promise T+2 when PFMS/banks can take longer?”
**Answer:** We only target the delay we control: clean-claim Agriculture validation and departmental approval. External Treasury/PFMS/bank settlement is separately measured and never included in a fabricated end-to-end SLA. This separation is visible in the dashboard and pilot KPIs.

## 15. “What will the 90-day pilot prove?”
**Answer:** Three things: (1) one reusable Dealer Passport can support multiple Agriculture schemes; (2) clean claims can be converted into finance-ready evidence packets substantially faster while exceptions become explicitly owned; and (3) payment acknowledgements can close automatically into one claim-to-UTR audit trail. The pilot should include a high-volume clean scheme, a document-heavy scheme and a CSS-routed scheme.

## 16. “Why is this defensible after Government receives the code?”
**Answer:** The value is not a closed UI. It is the reusable Agriculture payment operating model: evidence ontology, Scheme Pack model, adapters, exception taxonomy, controls, reconciliation logic, rollout playbook and future scheme/domain modules. The Government gets maintainable infrastructure; Syntheon can earn through implementation, authorised integrations, O&M, new modules and replication — not by owning dealer data or taking a cut from public payments.

## 17. “What is the one sentence we should remember?”
> **IFMS moves public money; RAJ-AGRIPAY proves why an Agriculture dealer claim is ready to move, routes it correctly, and closes the evidence loop after it moves.**
