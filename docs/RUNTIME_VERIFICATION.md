# RAJ-AGRIPAY — Runtime Verification Gate

This document separates **source integrity**, **framework build**, **browser behaviour** and **deployment health**. Do not mark a later gate green merely because an earlier gate passed.

## Gate A — Zero-dependency source integrity
Runs without installing Next.js dependencies:

```bash
npm run verify:static
```

This verifies that critical evaluator routes, machine-readable contracts and Government-authority invariants are present and that JSON example contracts parse.

## Gate B — Framework compile/build
Use Node.js 22+:

```bash
npm install
npm run typecheck
npm run build
```

Pass criteria:
- dependency install completes;
- TypeScript exits 0;
- `next build` exits 0;
- no missing route/import errors;
- no build-time network dependency is required for the evaluator routes.

## Gate C — Local browser smoke

```bash
npm run dev
```

Verify:
- `/` loads Command Centre after splash;
- `/onboarding` completes both renewal and new-onboarding modes;
- `/intake` completes structured and OCR paths;
- OCR path blocks progression until low-confidence amount is confirmed;
- duplicate red-team scenario produces `DUPLICATE_INVOICE_REFERENCE` and `BLOCK`;
- clean `AGR-26-10482` progresses Approval → In finance → acknowledgement → UTR → reconciliation;
- recent-bank-change exception can be re-verified before finance;
- Rajasthan map selection updates district drill-down;
- Scheme Pack v3.5 publishes as sandbox state;
- Dealer alerts drawer opens and all messages are truth-labelled evaluation examples;
- SUTRA capture seals offline evidence and only syncs when connectivity is simulated;
- SUTRA never exposes an offline expenditure-approval action;
- no console errors during the complete journey.

## Gate D — Responsive/accessibility smoke
Test at minimum:
- 1440 × 900 desktop;
- 1024 × 768 tablet;
- 390 × 844 mobile.

Check keyboard focus, readable contrast, table overflow, evaluator dock, alert drawer, wizard controls, upload control, mobile map labels and reduced-motion preference.

## Gate E — Production deployment
After connecting the repository to the approved hosting environment:
- deploy `main` only;
- verify `/api/health` returns healthy;
- repeat Gate C against the production URL;
- inspect browser console/network panel;
- confirm no external map/asset dependency can break the demo;
- record the deployed commit SHA and deployment URL in `docs/FINAL_RELEASE_CHECKLIST.md`.

## Current GitHub Actions note
At the time this file was authored, GitHub Actions was generating `startup_failure` runs with zero jobs before checkout for this private repository. That platform-side pre-job state is **not evidence that TypeScript or Next.js failed**, but it also cannot be counted as a successful build. A green Gate B/C/E from a working runner remains required for a fully verified release.

## Release rule
**Never describe a connector as live, a payment as settled, or a deployment/build as verified unless the corresponding authoritative/runtime evidence exists.**
