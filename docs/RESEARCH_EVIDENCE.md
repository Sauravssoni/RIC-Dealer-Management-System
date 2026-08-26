# Research Evidence & Design Consequences

**Research freeze:** 26 August 2026

This note records public-system facts that materially changed the RAJ-AGRIPAY architecture. Production implementation must reconfirm interface availability, department ownership, legal basis, credentials and current operating circulars during inception.

## IFMS 3.0 already has vendor management

The Government of Rajasthan IFMS 3.0 public portal describes Vendor/Beneficiary functionality including Vendor Registration, Vendor Profile Management, Invoice Upload & Tracking, Payment Tracking and Work Order View. Its Vendor Management user manual also states vendors can self-register or be registered by a department.

**Design consequence:** RAJ-AGRIPAY must not duplicate IFMS as Rajasthan's generic vendor/payee platform. Its differentiator is Agriculture-specific licence, scheme, claim, evidence, exception, risk and reconciliation orchestration.

Sources:
- https://ifms.rajasthan.gov.in/
- https://ifms.rajasthan.gov.in/assets/files/Vendor_Management_user_manual_V1.pdf

## Rajasthan Finance is already moving FVC bills and invoice intelligence into IFMS 3.0

A Rajasthan Finance/Treasuries circular on FVC Bill processing states that payment requires IFMS 3.0 vendor registration; the new process distinguishes **With E-Invoice / Without E-Invoice**; requires IMS Portal SRN linkage for applicable goods procurement; allows vendors to upload invoice PDF copies; and describes an **AI-based check of the amount entered in the FVC bill** from the uploaded invoice. The circular also moved FVC processing away from PayManager and into IFMS 3.0.

**Design consequence:** 'OCR + vendor registration + payment status' alone is not a defensible innovation because Rajasthan Finance is already implementing major pieces. RAJ-AGRIPAY therefore produces an **Agriculture Claim Packet / IFMS-FVC-ready evidence packet**: scheme eligibility, licence state, structured invoice evidence, delivery/beneficiary proof, sanction/rate/quantity checks, exception reasons and fund-route metadata before Finance processing. IFMS remains the financial system of record.

Source:
- https://finance.rajasthan.gov.in/PDFDOCS/TA/14712.pdf

## IFMS 3.0 is the State finance backbone - and the 2026-27 budget makes its scale explicit

Rajasthan's Economic Review describes IFMS 3.0 capabilities including budget management, Centrally Sponsored Scheme integration through SNA-SPARSH, e-payments, Bank Disbursement Engine, Treasury controls and banking transactions. The **Rajasthan Output-Outcome Budget 2026-27** lists IFMS 3.0 under State financial-management modernisation with a target of **452 departments benefitted**.

**Design consequence:** Rajasthan is already investing in the horizontal finance backbone. RAJ-AGRIPAY should improve Agriculture evidence and orchestration around that backbone, not build a competing department-level payment stack.

Sources:
- https://finance.rajasthan.gov.in/docs/budget/statebudget/2025-2026/EconomicReviewE.pdf
- https://finance.rajasthan.gov.in/docs/budget/statebudget/2026-2027/OUTPUT-OUTCOME-BUDGET-2026-27.pdf
- https://finance.rajasthan.gov.in/PDFDOCS/WM/14473.pdf

## SNA-SPARSH is now a current operational constraint, not a future roadmap item

Rajasthan Finance's 2026 operational guidance requires Centrally Sponsored Schemes implemented in the State to operate with SNA-SPARSH processes, with departments responsible for transactions, reconciliation and required actions. Rajasthan Finance continued to publish SNA-SPARSH workflow enhancements in July/August 2026.

**Design consequence:** for applicable CSS claims, RAJ-AGRIPAY classifies and prepares the claim for IFMS/SNA-SPARSH; it does not create a parallel payment wallet or bypass Treasury/PFMS.

Sources:
- https://finance.rajasthan.gov.in/PDFDOCS/WM/14939.pdf
- https://doe.gov.in/files/public-finance-state-cna-sna-document/OM_dated_13_07_2023_Just_in_Time_release_of_CSS_funds_through_e_kuber_platform_of_RBI.pdf

## PFMS supports external-system / State IFMIS integration

PFMS guidance documents MIS-only, MIS + Payment and State IFMIS integration models, along with system/API documentation, SSID and whitelisting requirements.

**Design consequence:** PFMS is shown as CONTRACT-READY; credentials, SSID, scheme mapping and network approvals are explicit dependencies.

Source:
- https://pfms.nic.in/SitePages/doc/PFMS_DBT_FAQ.pdf

## RajKisan already manages Agriculture dealer licensing and detailed operational states

RajKisan exposes Seed/Fertilizer/Pesticide licence applications, status checking, department login through Digital Identity/SSO, dealer/implement registration and scheme/process manuals. Its pages expose licence stages, physical verification, administrative/final sanction, work order, payment and next-pending-role concepts. It also publishes an SNA Bill Payment Process manual.

**Design consequence:** Dealer Passport references RajKisan's authoritative Agriculture identity and lifecycle. RAJ-AGRIPAY normalizes those Agriculture states into a cross-scheme claim/payment journey instead of building a competing licence registry.

Sources:
- https://rajkisan.rajasthan.gov.in/
- https://rajkisan.rajasthan.gov.in/Licence/Fertilizer
- https://rajkisan.rajasthan.gov.in/citizen/ApplicationStatus
- https://rajkisan.rajasthan.gov.in/ManualNew/Pdf/358CA5DC16B244718611334C1530E887.pdf

## Raj Sewa Dwaar remains the correct Rajasthan API pattern

DoIT&C defines Raj Sewa Dwaar as Rajasthan's central API repository / middleware ESB. Its architecture provides API management, authentication/authorization, subscription policies, security gateway controls, transformation and centralized integration. DoIT&C continues active middleware procurement/support activity for the platform in 2026.

**Design consequence:** State/central adapters are designed for Raj Sewa Dwaar onboarding and centralized monitoring rather than uncontrolled point-to-point connections.

Sources:
- https://doitc.rajasthan.gov.in/ProjectDetails.aspx?ID=1031
- https://doitc.rajasthan.gov.in/TenderDetails.aspx?id=1253
- https://doitc.rajasthan.gov.in/Files/DOITCWEB/WriteReadData/EmpCUGOrders/202109290344310481213RajSewaDwaar_11122015489.pdf

## Rajasthan already has a native digital-signing rail: RajeSign

The RajCA/RISL service page publishes **RajeSign API 2.1** for Aadhaar-based eKYC/eSign and **RajeSign API 3.2** for CA-based high-frequency signing. ASP onboarding documents and API integration documents are publicly listed. Current API documentation shows production calls through `api.sewadwaar.rajasthan.gov.in` and states that Raj Sewa Dwaar URLs must be subscribed before use.

**Design consequence:** officer approval signatures in RAJ-AGRIPAY should target Raj eSign/RajeSign through approved onboarding rather than create a proprietary digital-signature silo. Prototype approvals remain human-confirmed local receipts until the Department provisions the authorised signing path.

Sources:
- https://rajca.rajasthan.gov.in/services/esign
- https://rajca.rajasthan.gov.in/download
- https://rajca.rajasthan.gov.in/APIs/RSD_API_Document_for_eSign_Vs_3_2_For_Prod.pdf

## Rajasthan also has a native citizen/dealer communications rail: e-Sanchar 3.0

DoIT&C/RISL has an official **e-Sanchar 3.0** programme for design, development and maintenance of the State messaging application. Public State documents also describe an SMS-services component / Push SMS procurement for e-Sanchar.

**Design consequence:** dealer SMS/action notifications should target e-Sanchar 3.0 or another Department-approved State messaging service, with notification templates, dispatch/delivery correlation and claim-state provenance. An SMS is never treated as proof that a payment succeeded.

Sources:
- https://doitc.rajasthan.gov.in/TenderDetails.aspx?id=1113
- https://doitc.rajasthan.gov.in/Files/DOITCWEB/WriteReadData/TendersOrders/202501241115357356081Draft_RFP_eSanchar_3point0_WithUBN_v3point0.pdf

## GST e-invoice should beat OCR where structured evidence exists

GST Invoice Registration Portal documentation provides API integration and sandbox pathways for authorised users. E-invoices carry structured invoice references and QR/IRN evidence.

**Design consequence:** structured QR/IRN extraction and authorised validation are primary; OCR is the fallback for legacy/scanned evidence. This is cheaper, more reliable and more auditable than forcing every document through OCR.

Source:
- https://einvoice6.gst.gov.in/content/api-integration/

## Fertilizer retail already generates digital transaction evidence

Department of Fertilizers' DBT architecture captures retail fertilizer sales through PoS and the Integrated Fertilizer Management System (iFMS), with subsidy logic linked to actual retail sales.

**Design consequence:** where a Rajasthan scheme can lawfully consume such evidence, RAJ-AGRIPAY should ingest references rather than re-keying the same transaction. This remains an optional/discovery adapter, not a claimed live integration.

Source:
- https://www.fert.nic.in/sites/default/files/What-is-new/website%20dbt_0.pdf

## Aadhaar: fulfil the brief without unnecessary Aadhaar storage

UIDAI distinguishes online authentication from digitally signed offline verification through Aadhaar QR/XML. Offline verification can function without live connectivity and with lower integration burden than online authentication.

**Design consequence:** use authorised online e-KYC only through the appropriate Government requesting-entity arrangement; otherwise support compliant signed offline verification where suitable and retain the minimum necessary reference.

Source:
- https://uidai.gov.in/images/FAQ_OVSE.pdf

## BHASHINI already supports farmer-facing payment/KYC assistance

MeitY reports a BHASHINI-powered PM-KISAN chatbot answering regional-language payment and KYC queries.

**Design consequence:** Dealer Saarthi answers actual claim/payment/exception state and uses BHASHINI as the language channel, rather than behaving like an ungrounded chatbot.

Source:
- https://www.meity.gov.in/writereaddata/files/MEITY-AR-2023-24.pdf

## Architecture conclusion

```text
Agriculture truth
RajKisan licence + scheme rule + delivery evidence + invoice
                     ↓
               RAJ-AGRIPAY
 validate / explain / exception / route / IFMS-ready packet
        ↓                 ↓
   Raj eSign          e-Sanchar
 authorised sign      status/action alerts
        \                 /
              Raj Sewa Dwaar
                     ↓
     IFMS 3.0 / PFMS / SNA-SPARSH
                     ↓
             RBI / bank settlement
                     ↓
          claim-to-UTR reconciliation
```

The moat is therefore **not another billing screen**. It is the cross-scheme Agriculture evidence and control layer that makes Rajasthan's existing financial and digital-public infrastructure faster to use, safer to operate and easier to audit.
