export type ClaimStatus = "Ready for approval" | "Exception" | "Paid" | "In finance";

export type Claim = {
  id: string;
  dealer: string;
  gstin: string;
  district: string;
  scheme: string;
  amount: number;
  status: ClaimStatus;
  age: string;
  checks: number;
  totalChecks: number;
  risk: "Low" | "Medium" | "High";
  route: string;
  exception?: string;
  invoice: string;
};

export const claims: Claim[] = [
  { id:"AGR-26-10482", dealer:"Shree Balaji Agro Centre", gstin:"08AACFS4821K1ZQ", district:"Jaipur", scheme:"Certified Seed Support", amount:184260, status:"Ready for approval", age:"2h 14m", checks:12, totalChecks:12, risk:"Low", route:"IFMS 3.0 → State Scheme", invoice:"INV-SB-26814" },
  { id:"AGR-26-10481", dealer:"Kisan Fertilizers & Seeds", gstin:"08AAGFK1092R1ZD", district:"Tonk", scheme:"Micronutrient Assistance", amount:96240, status:"In finance", age:"11h 08m", checks:12, totalChecks:12, risk:"Low", route:"IFMS 3.0 → SNA-SPARSH/PFMS", invoice:"KF-260811" },
  { id:"AGR-26-10479", dealer:"Marudhara Agri Inputs", gstin:"08AAMFM6621H1ZX", district:"Nagaur", scheme:"Farm Input Demonstration", amount:238800, status:"Exception", age:"1d 4h", checks:10, totalChecks:12, risk:"Medium", route:"IFMS 3.0 → State Scheme", exception:"Bank account changed 3 days before payment. Re-verification required.", invoice:"MAI-4451" },
  { id:"AGR-26-10477", dealer:"Aravali Seed House", gstin:"08AAHFA2091Q1ZY", district:"Udaipur", scheme:"Certified Seed Support", amount:128500, status:"Paid", age:"18h total", checks:12, totalChecks:12, risk:"Low", route:"IFMS 3.0 → State Scheme", invoice:"ASH/2026/781" },
  { id:"AGR-26-10473", dealer:"Dharti Agro Services", gstin:"08AADFD7762B1Z2", district:"Kota", scheme:"Input Demonstration CSS", amount:311420, status:"Exception", age:"2d 3h", checks:9, totalChecks:12, risk:"High", route:"IFMS 3.0 → SNA-SPARSH/PFMS", exception:"Duplicate IRN detected against claim AGR-26-10391.", invoice:"DAS-26-991" }
];

export const integrationStatus = [
  { name:"RajKisan Dealer Licence", status:"CONTRACT-READY", note:"Licence, category, validity, jurisdiction" },
  { name:"Raj SSO", status:"CONTRACT-READY", note:"Government identity and role handoff" },
  { name:"IFMS 3.0 Vendor Management", status:"CONTRACT-READY", note:"Authoritative vendor/payee and invoice/payment rail" },
  { name:"PFMS / SNA-SPARSH", status:"CONTRACT-READY", note:"CSS payment and acknowledgement rail" },
  { name:"GST e-Invoice / IRP", status:"SANDBOX", note:"Structured invoice evidence; authorised API flow" },
  { name:"BHASHINI", status:"ADAPTER-READY", note:"Hindi voice query and TTS response" },
  { name:"SUTRA-ID Edge", status:"PROTOTYPE-PROVEN", note:"Assisted offline/edge workflow channel" },
  { name:"Raj Sewa Dwaar", status:"CONTRACT-READY", note:"Central API gateway / ESB integration path" }
];
