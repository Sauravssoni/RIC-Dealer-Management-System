# Brownfield Migration & Cutover Plan

## Why this exists
The challenge explicitly identifies fragmented scheme-wise ledgers and delayed reconciliation. RAJ-AGRIPAY therefore cannot assume a greenfield launch. The pilot must absorb existing dealer references, open bills and reconciliation states without destroying source-system history or forcing an unsafe big-bang migration.

## Migration doctrine
1. **Source systems remain authoritative.** RAJ-AGRIPAY creates crosswalks and orchestration references; it does not silently rewrite RajKisan, IFMS or scheme ledgers.
2. **Open obligations first.** Migrate/open-link active dealer records, unpaid bills, in-process approvals and unreconciled payments before historical archives.
3. **No destructive deduplication.** Suspected duplicate dealers/invoices become review cases with lineage, not deleted records.
4. **Every migrated field has provenance.** Source system, source key, extraction timestamp and transformation rule are retained.
5. **Parallel run before cutover.** New processing is compared with existing scheme process before any authoritative switch.

## Phase 1 — Inventory and source contract
For each pilot scheme capture:
- source ledger/application name;
- business owner and technical owner;
- dealer identifier(s);
- invoice/bill identifier(s);
- sanction and scheme identifiers;
- payment references/UTR fields;
- status taxonomy;
- open/closed definition;
- data quality issues;
- export/API mechanism;
- legal retention requirements.

## Phase 2 — Canonical crosswalk
Create deterministic mappings:

`source_dealer_key -> RAJ-AGRIPAY Dealer Passport ref -> RajKisan licence ref -> IFMS vendor/payee ref`

`source_bill_key -> Claim ID -> invoice reference -> scheme pack version -> finance route -> payment acknowledgement -> UTR`

Crosswalk entries are versioned and reversible.

## Phase 3 — Data-quality gates
Before a record enters the pilot ledger:
- required identifiers present;
- GSTIN/legal-name syntax validated where applicable;
- invoice identifier normalised;
- scheme code mapped;
- amount numeric and currency-valid;
- open/closed state interpretable;
- payment references validated for format;
- source row/document hash generated;
- duplicate candidates flagged.

Records that fail do not disappear. They enter a reason-coded migration exception queue.

## Phase 4 — Open-obligation migration
Prioritise:
1. approved but unpaid claims;
2. in-finance claims;
3. claims awaiting dealer action;
4. claims awaiting Agriculture review;
5. paid but unreconciled claims;
6. active dealer/renewal records.

Historical settled records may be linked or imported after pilot success if the Department needs searchable legacy audit.

## Phase 5 — Parallel run
For an agreed period:
- existing scheme workflow remains authoritative;
- RAJ-AGRIPAY computes its Claim Truth result in parallel;
- mismatches are reviewed by scheme/finance SMEs;
- rule packs are corrected through versioned changes;
- no silent back-editing of prior results.

Recommended exit gate: no unresolved critical mismatch on a representative UAT sample and 100% agreement on finance-route classification for approved cases.

## Phase 6 — Cutover
Use a controlled window:
1. declare migration cut-off timestamp;
2. snapshot source extracts and hashes;
3. import/link remaining open obligations;
4. reconcile counts and values by scheme/status;
5. sign off dealer crosswalk exceptions;
6. enable new claim intake;
7. retain old systems read-only where policy permits;
8. monitor first settlement batch with war-room support.

## Reconciliation controls
At cutover, prove totals for every pilot scheme:
- number of dealers;
- number/value of open claims;
- number/value approved;
- number/value in finance;
- number/value paid but unreconciled;
- duplicate candidates;
- migration exceptions.

The sum of RAJ-AGRIPAY state buckets must reconcile to the agreed source extract; differences require signed exception records.

## Rollback
If critical finance-route, identity or value defects are detected:
- stop new handoffs;
- preserve all RAJ-AGRIPAY events;
- continue/restore the authoritative legacy process;
- export claims created during the window;
- correct mappings/rules;
- repeat parallel validation before re-cutover.

No rollback deletes the audit trail.

## Success evidence
The migration gate is complete only when the Department receives:
- signed source inventory;
- field/source mapping workbook;
- migration exception report;
- dealer/payee crosswalk report;
- scheme/status count-and-value reconciliation;
- duplicate candidate report;
- cutover receipt with source hashes and timestamp;
- rollback/runbook approval.
