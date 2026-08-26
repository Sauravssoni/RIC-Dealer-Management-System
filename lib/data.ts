export type ClaimStatus = "Ready for approval" | "In finance" | "Exception" | "Paid";

export type Claim = {
  id: string;
  dealer: string;
  dealerId: string;
  district: string;
  amount: number;
  scheme: string;
  route: string;
  invoice: string;
  gstin: string;
  status: ClaimStatus;
  checks: number;
  totalChecks: number;
  risk: "Low" | "Medium" | "High";
  age: string;
  exception?: string;
  exceptionCode?: string;
  utr?: string;
  reconciled?: boolean;
  evidence: string[];
};

export const claims: Claim[] = [
  {
    id: "AGR-26-10482", dealer: "Shree Balaji Agro Centre", dealerId: "RAD-JAI-002814", district: "Jaipur",
    amount: 184260, scheme: "Certified Seed Support", route: "IFMS 3.0 · State Scheme", invoice: "INV-SB-8821",
    gstin: "08AACFS4821K1ZQ", status: "Ready for approval", checks: 12, totalChecks: 12, risk: "Low", age: "2h 14m",
    evidence: ["RajKisan licence reference", "GST e-invoice / IRN", "Scheme rate v3.4", "Delivery acknowledgement", "Bank profile v7"]
  },
  {
    id: "AGR-26-10481", dealer: "Marudhar Farm Inputs", dealerId: "RAD-JOD-001992", district: "Jodhpur",
    amount: 311400, scheme: "Input Assistance Pilot", route: "IFMS 3.0 · State Scheme", invoice: "MFI-44902",
    gstin: "08AAHFM4438D1Z8", status: "Exception", checks: 7, totalChecks: 12, risk: "High", age: "1d 3h",
    exception: "The same structured invoice reference is already linked to a settled claim. Cross-scheme duplicate review is required.",
    exceptionCode: "DUPLICATE_INVOICE_REFERENCE",
    evidence: ["RajKisan licence reference", "GST e-invoice / IRN", "Duplicate key match", "Scheme rule v2.1"]
  },
  {
    id: "AGR-26-10479", dealer: "Kisan Sewa Kendra", dealerId: "RAD-UDA-000711", district: "Udaipur",
    amount: 238800, scheme: "Micronutrient Support", route: "IFMS 3.0 · State Scheme", invoice: "KSK-2026-119",
    gstin: "08AAEFK7160M1ZX", status: "Exception", checks: 10, totalChecks: 12, risk: "Medium", age: "18h 21m",
    exception: "Dealer bank profile changed three days before finance handoff. Payment Identity Lock requires re-verification and maker-checker approval.",
    exceptionCode: "RECENT_BANK_PROFILE_CHANGE",
    evidence: ["Licence valid", "Legacy invoice OCR", "Scheme rule v1.8", "Bank profile v9 — recent change"]
  },
  {
    id: "AGR-26-10477", dealer: "Aravali Seeds & Inputs", dealerId: "RAD-AJM-001103", district: "Ajmer",
    amount: 128500, scheme: "Certified Seed Support", route: "IFMS 3.0 · State Scheme", invoice: "ASI-7714",
    gstin: "08AAHFA5219B1Z5", status: "Paid", checks: 12, totalChecks: 12, risk: "Low", age: "closed",
    utr: "RBIGOR26X98172", reconciled: true,
    evidence: ["Licence valid", "GST structured invoice", "Scheme rule v3.4", "UTR acknowledgement", "Auto-reconciliation receipt"]
  },
  {
    id: "AGR-26-10475", dealer: "Shekhawati Agri Solutions", dealerId: "RAD-SIK-000488", district: "Sikar",
    amount: 266950, scheme: "Fertilizer Demonstration Support", route: "IFMS 3.0 → SNA-SPARSH / PFMS", invoice: "SAS-55209",
    gstin: "08ABDFS7120R1ZH", status: "In finance", checks: 12, totalChecks: 12, risk: "Low", age: "5h 08m",
    evidence: ["Licence valid", "GST e-invoice / IRN", "CSS route resolved", "Approval receipt", "Finance packet sealed"]
  },
  {
    id: "AGR-26-10471", dealer: "Desert Krishi Bhandar", dealerId: "RAD-BIK-000312", district: "Bikaner",
    amount: 95400, scheme: "Certified Seed Support", route: "IFMS 3.0 · State Scheme", invoice: "DKB-09871",
    gstin: "08AAJFD2114Q1ZP", status: "Ready for approval", checks: 12, totalChecks: 12, risk: "Low", age: "41m",
    evidence: ["Licence valid", "GST e-invoice / IRN", "Scheme rule v3.4", "Delivery proof"]
  },
  {
    id: "AGR-26-10469", dealer: "Hadoti Agri Mart", dealerId: "RAD-KOT-000952", district: "Kota",
    amount: 149800, scheme: "Input Assistance Pilot", route: "IFMS 3.0 · State Scheme", invoice: "HAM-24081",
    gstin: "08AACFH9044T1ZS", status: "Paid", checks: 12, totalChecks: 12, risk: "Low", age: "closed",
    utr: "RBIGOR26X97631", reconciled: true,
    evidence: ["Licence valid", "Invoice evidence", "Rule v2.1", "Payment acknowledgement", "UTR matched"]
  },
  {
    id: "AGR-26-10465", dealer: "Mewar Crop Care", dealerId: "RAD-CHI-000604", district: "Chittorgarh",
    amount: 211650, scheme: "Micronutrient Support", route: "IFMS 3.0 · State Scheme", invoice: "MCC-18107",
    gstin: "08AARFM3370A1ZK", status: "Ready for approval", checks: 12, totalChecks: 12, risk: "Low", age: "3h 02m",
    evidence: ["Licence valid", "Legacy invoice OCR reviewed", "Rule v1.8", "Delivery reference"]
  }
];

export type DistrictOps = {
  name: string; lat: number; lon: number; dealers: number; claims: number; value: number; exceptions: number; medianHours: number;
};

export const districtOps: DistrictOps[] = [
  { name: "Sri Ganganagar", lat: 29.92, lon: 73.88, dealers: 318, claims: 142, value: 68.4, exceptions: 4, medianHours: 2.1 },
  { name: "Bikaner", lat: 28.02, lon: 73.31, dealers: 401, claims: 188, value: 81.7, exceptions: 7, medianHours: 2.7 },
  { name: "Jaisalmer", lat: 26.92, lon: 70.91, dealers: 164, claims: 71, value: 29.2, exceptions: 3, medianHours: 3.4 },
  { name: "Barmer", lat: 25.75, lon: 71.40, dealers: 287, claims: 129, value: 52.6, exceptions: 6, medianHours: 3.1 },
  { name: "Jodhpur", lat: 26.24, lon: 73.02, dealers: 512, claims: 244, value: 104.8, exceptions: 11, medianHours: 2.9 },
  { name: "Sikar", lat: 27.61, lon: 75.14, dealers: 476, claims: 221, value: 97.5, exceptions: 8, medianHours: 2.3 },
  { name: "Jaipur", lat: 26.91, lon: 75.79, dealers: 684, claims: 326, value: 148.1, exceptions: 12, medianHours: 1.8 },
  { name: "Alwar", lat: 27.55, lon: 76.63, dealers: 427, claims: 196, value: 84.9, exceptions: 9, medianHours: 2.4 },
  { name: "Bharatpur", lat: 27.22, lon: 77.49, dealers: 355, claims: 172, value: 72.2, exceptions: 6, medianHours: 2.5 },
  { name: "Ajmer", lat: 26.45, lon: 74.64, dealers: 368, claims: 165, value: 73.8, exceptions: 5, medianHours: 2.0 },
  { name: "Tonk", lat: 26.16, lon: 75.79, dealers: 241, claims: 103, value: 43.5, exceptions: 3, medianHours: 2.2 },
  { name: "Kota", lat: 25.18, lon: 75.83, dealers: 394, claims: 181, value: 79.4, exceptions: 7, medianHours: 2.6 },
  { name: "Udaipur", lat: 24.59, lon: 73.71, dealers: 433, claims: 203, value: 86.1, exceptions: 10, medianHours: 3.0 },
  { name: "Chittorgarh", lat: 24.88, lon: 74.63, dealers: 302, claims: 139, value: 59.7, exceptions: 4, medianHours: 2.5 },
  { name: "Banswara", lat: 23.55, lon: 74.44, dealers: 229, claims: 98, value: 38.9, exceptions: 5, medianHours: 3.3 }
];

export const integrationStatus = [
  { name: "RajKisan dealer licensing", status: "CONTRACT-READY", owner: "Agriculture", note: "Dealer Passport references authoritative licence/lifecycle data; no duplicate master." },
  { name: "Rajasthan SSO", status: "CONTRACT-READY", owner: "DoIT&C", note: "Officer/dealer authentication adapter; production requires approved application registration." },
  { name: "Raj Sewa Dwaar", status: "CONTRACT-READY", owner: "DoIT&C / RISL", note: "Target gateway for approved State/third-party APIs, including Rajasthan-native signing and messaging integrations." },
  { name: "Raj eSign", status: "CONTRACT-READY", owner: "RISL / RajCOMP", note: "Officer approval-signing adapter. Rajasthan publishes ASP onboarding and API integration paths; production requires approved onboarding and subscription through Raj Sewa Dwaar." },
  { name: "e-Sanchar 3.0 / Push SMS", status: "CONTRACT-READY", owner: "DoIT&C / RISL", note: "Dealer SMS/portal messaging adapter. Rajasthan's e-Sanchar stack is the preferred notification rail where provisioned; delivery receipts remain source-backed." },
  { name: "IFMS 3.0", status: "CONTRACT-READY", owner: "Finance", note: "Authoritative vendor/payee and payment rail; RAJ-AGRIPAY hands off Agriculture-ready claim packets." },
  { name: "PFMS / SNA-SPARSH", status: "CONTRACT-READY", owner: "GoI / Finance", note: "Applicable CSS route after scheme mapping, credentials, whitelisting and State IFMIS integration." },
  { name: "GST e-Invoice / IRP", status: "SANDBOX", owner: "GSTN / authorised IRP", note: "Structured IRN/QR path preferred; taxpayer authorisation and production credentials required." },
  { name: "BHASHINI", status: "ADAPTER-READY", owner: "Digital India BHASHINI", note: "Hindi/regional ASR, translation and TTS for Dealer Saarthi and SUTRA-assisted workflows." },
  { name: "SUTRA-ID Edge", status: "PROTOTYPE-PROVEN", owner: "Syntheon", note: "Optional assisted/offline edge channel; not a statewide hardware dependency." }
] as const;

export const schemeRules = [
  { key: "dealer_class", label: "Dealer class", value: "Seed / multi-input dealer", group: "Eligibility" },
  { key: "licence", label: "Licence requirement", value: "Valid seed licence required", group: "Eligibility" },
  { key: "rate", label: "Rate ceiling", value: "₹30,000 per eligible unit", group: "Financial" },
  { key: "invoice", label: "Invoice evidence", value: "IRN/QR preferred; OCR fallback", group: "Evidence" },
  { key: "approval", label: "Approval", value: "Maker → Checker → Approver", group: "Governance" },
  { key: "route", label: "Finance route", value: "IFMS 3.0 · State Scheme", group: "Finance" },
  { key: "recon", label: "Reconciliation", value: "Claim + acknowledgement + UTR", group: "Finance" }
];