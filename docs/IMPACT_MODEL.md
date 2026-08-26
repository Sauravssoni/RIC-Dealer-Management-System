# RAJ-AGRIPAY Impact Measurement Model

## Purpose
The official challenge identifies dealer settlement delays of roughly T+15 to T+30 and the resulting cash-flow strain. RAJ-AGRIPAY therefore measures value from timestamped workflow events rather than claiming a generic percentage improvement.

## Truth boundary
The `/impact` evaluator route is a **scenario calculator**. Its values are editable assumptions, not Rajasthan actuals. In pilot mode, the same formulas should be populated from measured claim-state events and confirmed scheme volumes.

## Core formulas

### 1. Department-controlled days released
`baseline_departmental_TAT - target_departmental_TAT`

The clock starts when a complete claim enters the Agriculture-controlled workflow and stops when the claim is handed to the authoritative Finance rail. External Treasury/PFMS/RBI/bank settlement time must be reported separately.

### 2. Indicative receivables released
`monthly_approved_claim_value × days_released / 30`

This estimates the dealer receivable balance no longer locked in Agriculture-side processing when the cycle shortens.

### 3. Indicative annual financing-cost relief
`receivables_released × annual_cost_of_capital`

Cost of capital remains an explicit assumption until the pilot agrees a benchmark or measures a representative dealer cohort.

### 4. Administrative hours released
`monthly_clean_claims × minutes_saved_per_clean_claim × 12 / 60`

This should be measured through a baseline time-and-motion sample and repeated during UAT/pilot. It is **not** automatically converted into headcount reduction.

### 5. Manual-review reduction
`monthly_claims × (baseline_exception_rate - pilot_exception_rate)`

A lower exception rate is only positive if false-clears, downstream reversals and audit defects do not increase. Quality metrics must be reviewed alongside exception reduction.

## Pilot baseline design
Before production pilot traffic, measure at least:
- median and P95 Agriculture-side validation time;
- median and P95 Agriculture-side approval time;
- manual touches per clean claim;
- average minutes per manual touch;
- reasons for invoice/claim return;
- bank-profile exception rate;
- exact/near duplicate review rate;
- percentage of invoices with usable structured evidence;
- percentage requiring OCR;
- OCR fields requiring human correction;
- reconciliation time per successfully paid claim;
- dealer status-query contacts per 100 claims.

## Pilot success dashboard
Report **baseline, pilot result, delta and confidence/sample size** for every KPI. Recommended operational gates:
- clean-claim departmental validation: median < 4 hours;
- clean claim to departmental approval: <= T+2 working days;
- exact-key duplicate detection: 100%;
- claim decision lineage coverage: 100%;
- external payment-status truthfulness: 100% (no success before authoritative acknowledgement);
- eligible automatic reconciliation: >= 90% where authoritative external references are available;
- low-confidence OCR human-review compliance: 100%;
- scheme-rule historical replay: 100%;
- bank-profile change maker-checker compliance: 100%.

## Evaluation example only
For an illustrative scenario of ₹20 Cr monthly claim value, 22 days current departmental processing, 2 days target processing and 14% annual cost of capital:
- days released = 20;
- indicative receivables released = ₹13.33 Cr;
- indicative annual financing-cost relief = ~₹1.87 Cr.

These figures are deliberately reproducible and visibly labelled as scenario outputs.

## Anti-overclaim rules
Never state that RAJ-AGRIPAY:
- guarantees Treasury/PFMS/bank settlement time;
- generates realised financing savings without measurement;
- eliminates all exceptions;
- reduces staffing by the calculated administrative hours;
- represents scenario values as Rajasthan Government actuals.
