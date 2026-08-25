# RAJ-AGRIPAY Final Release Checklist

## Evaluator demo
- [ ] Splash identifies Government of Rajasthan / Department of Agriculture context.
- [ ] Run Judge Demo and confirm all seven views advance cleanly.
- [ ] Command Centre shows problem, controllable delay and claim-to-settlement thesis.
- [ ] Rajasthan Map opens and district selection changes the operational drill-down.
- [ ] Claims view demonstrates a clean claim, a recent-bank-change hold and a duplicate invoice block.
- [ ] Clean claim can be approved to Finance.
- [ ] Finance acknowledgement can be simulated only from an In finance state.
- [ ] Paid claim can be reconciled to UTR lineage.
- [ ] Scheme Rule Studio publishes a new sandbox version without rewriting historical rules.
- [ ] Integration matrix visibly distinguishes SANDBOX, CONTRACT-READY, ADAPTER-READY and PROTOTYPE-PROVEN.
- [ ] SUTRA flow captures and seals evidence offline but does not approve expenditure offline.
- [ ] Hindi/English interface toggle and Dealer Saarthi query examples remain usable.

## Truth and governance
- [ ] No live Government credential is claimed where none exists.
- [ ] RajKisan and IFMS remain authoritative systems of record.
- [ ] Raj Sewa Dwaar is the intended Government integration path.
- [ ] PFMS/SNA-SPARSH and Treasury remain sovereign finance rails.
- [ ] AI may explain and prioritise; authorised officers retain expenditure authority.
- [ ] External payment success appears only after an authoritative or clearly simulated acknowledgement.

## Engineering gate
- [ ] npm install succeeds on Node 22.
- [ ] npm run typecheck passes.
- [ ] npm run build passes.
- [ ] /api/health returns healthy state.
- [ ] Responsive review at desktop and mobile widths passes.
- [ ] No console errors during the seven-step Judge Demo.

## Submission package
- [ ] Winning Proposal DOCX/PDF visually inspected page by page.
- [ ] Technical Annexure DOCX/PDF visually inspected page by page.
- [ ] Architecture diagrams contain no missing glyphs.
- [ ] Form answers remain within the portal character limit.
- [ ] Cost shown consistently as INR 44.8 lakh indicative pilot.
- [ ] Repository URL and deployed demo URL, once deployed, are included consistently.

## Merge gate
Merge to main only after the build/typecheck PR checks are green or the same commands have been independently reproduced and recorded.
