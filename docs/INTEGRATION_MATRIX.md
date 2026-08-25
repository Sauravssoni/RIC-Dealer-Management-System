# Integration Matrix

| System | Authority | RAJ-AGRIPAY use | Prototype status | Production dependency |
|---|---|---|---|---|
| RajKisan | Agriculture Department, Rajasthan | Dealer licence/category/validity/jurisdiction | CONTRACT-READY | API/service approval via State architecture |
| Raj SSO | DoIT&C Rajasthan | Identity/role handoff | CONTRACT-READY | App onboarding / credentials |
| IFMS 3.0 Vendor Management | Finance Department Rajasthan | Vendor/payee reference, invoice/payment handoff, status | CONTRACT-READY | Approved service contract/API/network access |
| IFMS 3.0 / Treasury / BDE | Finance Department Rajasthan | Bill processing acknowledgement, payment status, reconciliation refs | CONTRACT-READY | Finance-approved integration |
| PFMS | CGA / GoI | CSS MIS/payment integration | CONTRACT-READY | SSID, API/SFTP whitelisting, scheme mapping |
| SNA-SPARSH | DoE/PFMS/State IFMIS | CSS just-in-time route | CONTRACT-READY | Scheme onboarding + IFMS configuration |
| GST e-Invoice / IRP | GST ecosystem | Structured invoice evidence, QR/IRN | SANDBOX | Taxpayer/GSP authorisation and credentials |
| UIDAI | UIDAI | e-KYC/offline verification pathway | CONTRACT-READY | Correct legal/Requesting Entity route |
| BHASHINI | MeitY | Hindi voice/translation/TTS | ADAPTER-READY | Approved service credentials/runtime |
| e-Sanchar / SMS | DoIT&C Rajasthan | Dealer alerts | CONTRACT-READY | Raj Sewa Dwaar/service onboarding |
| Raj Sewa Dwaar | DoIT&C Rajasthan | Central API/ESB path | CONTRACT-READY | Project onboarding |
| Fertilizer iFMS/PoS | Department of Fertilizers | Optional transaction evidence for relevant fertilizer use cases | DISCOVERY | Authorised sharing/service availability |
| SUTRA-ID Edge | Syntheon | Assisted/offline capture channel | PROTOTYPE-PROVEN | Department-approved deployment profile |

## Integration rule

**No adapter may present a synthetic acknowledgement as if it came from a Government source.**

The product must visibly distinguish live, sandbox, adapter-ready and contract-ready integrations.
