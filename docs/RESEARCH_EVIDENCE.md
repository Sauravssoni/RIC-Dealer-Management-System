# Research Evidence & Design Consequences

**Research freeze:** 25 August 2026

This note records the public-system facts that materially changed the RAJ-AGRIPAY architecture. Production implementation must reconfirm interface availability, department ownership, legal basis, credentials and current operating circulars during inception.

## IFMS 3.0 already has vendor management

The Government of Rajasthan IFMS 3.0 public portal describes Vendor/Beneficiary functionality including Vendor Registration, Vendor Profile Management, Invoice Upload & Tracking, Payment Tracking and Work Order View. Its current Vendor Management user manual also states vendors can self-register or be registered by a department.

**Design consequence:** RAJ-AGRIPAY must not duplicate IFMS as Rajasthan's generic vendor/payee platform. Its differentiator is Agriculture-specific licence, scheme, claim, evidence, exception, risk and reconciliation orchestration.

Sources:
- https://ifms.rajasthan.gov.in/
- https://ifms.rajasthan.gov.in/assets/files/Vendor_Management_user_manual_V1.pdf

## IFMS 3.0 is the State finance backbone

Rajasthan's Economic Review describes IFMS 3.0 capabilities including budget management, Centrally Sponsored Scheme integration through SNA-SPARSH, e-payments, Bank Disbursement Engine, Treasury controls and banking transactions. A Finance circular dated 28 May 2025 states that transactional integration had been developed on IFMS 3.0 for bank-account transaction sharing and requires relevant accounts to be mapped at the Bank Disbursement Engine. The attached process uses Maker, Checker and Approver roles.

**Design consequence:** RAJ-AGRIPAY should prepare and orchestrate Agriculture payment packets while keeping Treasury/payment authority inside IFMS and authorised Government rails.

Sources:
- https://finance.rajasthan.gov.in/docs/budget/statebudget/2025-2026/EconomicReviewE.pdf
- https://finance.rajasthan.gov.in/PDFDOCS/WM/14473.pdf

## SNA-SPARSH is a State IFMIS → PFMS → RBI e-Kuber architecture

Department of Expenditure guidance describes State IFMIS-generated vendor/beneficiary payment files, State treasury scrutiny, PFMS/SNA-SPARSH onboarding and RBI e-Kuber integration.

**Design consequence:** for applicable CSS claims, RAJ-AGRIPAY classifies and prepares the claim for the SNA-SPARSH route; it does not create a parallel payment wallet.

Source:
- https://doe.gov.in/files/public-finance-state-cna-sna-document/OM_dated_13_07_2023_Just_in_Time_release_of_CSS_funds_through_e_kuber_platform_of_RBI.pdf

## PFMS supports external-system / State IFMIS integration

PFMS guidance documents MIS-only, MIS + Payment and State IFMIS integration models, along with system/API documentation, SSID and whitelisting requirements.

**Design consequence:** PFMS is shown as CONTRACT-READY; credentials, SSID, scheme mapping and network approvals are explicit dependencies.

Source:
- https://pfms.nic.in/SitePages/doc/PFMS_DBT_FAQ.pdf

## RajKisan already manages Agriculture dealer licensing

RajKisan exposes Seed/Fertilizer/Pesticide licence applications, status checking, department login through Digital Identity/SSO, and related Agriculture operating manuals. Public dealer licence artefacts demonstrate digitally signed licence/renewal workflows.

**Design consequence:** Dealer Passport references RajKisan's authoritative Agriculture identity instead of creating a duplicate dealer identity.

Sources:
- https://rajkisan.rajasthan.gov.in/
- https://rajkisan.rajasthan.gov.in/ManualNew/Pdf/8C282D09D4F44E0A852662AB74E508A6.pdf

## Raj Sewa Dwaar is the correct Rajasthan API pattern

DoIT&C defines Raj Sewa Dwaar as Rajasthan's central API repository / middleware ESB and reports 1000+ integrated services, 40+ applications/projects and very high transaction volumes. A Government office order requires new inter-application connectivity to use Raj Sewa Dwaar rather than uncontrolled point-to-point services. DoIT&C is actively procuring API Management Middleware support for Raj Sewa Dwaar in 2026.

**Design consequence:** State/central adapters are designed for Raj Sewa Dwaar onboarding and centralized monitoring.

Sources:
- https://doitc.rajasthan.gov.in/ProjectDetails.aspx?ID=1031
- https://doitc.rajasthan.gov.in/TenderDetails.aspx?id=1253
- https://doitc.rajasthan.gov.in/Files/DOITCWEB/WriteReadData/EmpCUGOrders/202109290344310481213RajSewaDwaar_11122015489.pdf

## GST e-invoice should beat OCR where structured evidence exists

GST Invoice Registration Portal documentation provides API integration and sandbox pathways for authorised users. E-invoices carry structured invoice references and QR/IRN evidence.

**Design consequence:** structured QR/IRN extraction and authorised validation are primary; OCR is the fallback for legacy/scanned evidence.

Source:
- https://einvoice6.gst.gov.in/content/api-integration/

## Fertilizer retail already generates digital transaction evidence

Department of Fertilizers' DBT architecture captures retail fertilizer sales through PoS and the Integrated Fertilizer Management System (iFMS), with subsidy logic linked to actual retail sales.

**Design consequence:** where a Rajasthan scheme can lawfully consume such evidence, RAJ-AGRIPAY should ingest references rather than re-keying the same transaction. This remains an optional/discovery adapter.

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
Agriculture truth (RajKisan + scheme rules + evidence)
                     ↓
               RAJ-AGRIPAY
      validate / explain / route / trace
                     ↓
              Raj Sewa Dwaar
                     ↓
     IFMS 3.0 / PFMS / SNA-SPARSH
                     ↓
             RBI / bank settlement
                     ↓
               reconciliation
```
