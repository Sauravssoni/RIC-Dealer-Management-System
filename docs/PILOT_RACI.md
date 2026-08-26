# RAJ-AGRIPAY Pilot RACI

This RACI is indicative and must be confirmed by the Department during inception. It exists to make ownership explicit across Agriculture, Finance/Treasury, DoIT&C/RISL and Syntheon.

Legend: **A** Accountable · **R** Responsible · **C** Consulted · **I** Informed

| Activity | Agriculture Scheme Wing | Agriculture Finance/DDO | Finance/Treasury / IFMS | DoIT&C / RISL | Syntheon | Pilot Dealers |
|---|---|---|---|---|---|---|
| Pilot scheme selection | A/R | C | C | I | C | I |
| AS-IS process & KPI baseline | A | R | C | C | R | C |
| Dealer/lifecycle source mapping | A/R | C | C | C | R | C |
| Scheme Pack definition | A/R | C | C | I | R | I |
| Dealer onboarding/renewal UAT | A | C | I | C | R | R |
| GST/structured invoice adapter | C | C | I | C | R | C |
| Raj Sewa Dwaar onboarding | C | I | C | A/R | R | I |
| Raj eSign onboarding | C | A/R | C | C | R | I |
| e-Sanchar notification onboarding | A | C | I | R | R | C |
| IFMS vendor/payment integration | C | R | A/R | C | R | I |
| PFMS/SNA-SPARSH mapping | C | R | A/R | C | R | I |
| Bank-profile change policy | C | A/R | C | I | R | I |
| Claim Truth rules/UAT | A/R | C | C | I | R | C |
| Migration source extract | A | R | C | C | R | I |
| Migration count/value reconciliation | A | R | R | I | R | I |
| Security/VAPT closure | C | C | C | A/R | R | I |
| UAT sign-off | A | R | C | C | R | C |
| Production cutover approval | A | R | R | C | C | I |
| Officer/admin training | A | R | C | C | R | I |
| Dealer support/training | A/R | C | I | C | R | R |
| Handover acceptance | A | R | C | C | R | I |

## Decision rights

### Agriculture Department owns
- scheme policy and eligibility interpretation;
- dealer/licence business ownership;
- evidence requirements;
- officer roles and approval authority;
- pilot acceptance and statewide rollout decision.

### Finance/Treasury owns
- financial controls;
- IFMS/vendor/payment truth;
- applicable SNA-SPARSH/PFMS routing;
- accounting/reconciliation requirements;
- expenditure-authority boundaries.

### DoIT&C/RISL owns or governs
- State integration/gateway onboarding where applicable;
- SSO and State platform dependencies;
- RajeSign/e-Sanchar onboarding/support according to current ownership;
- approved hosting/security standards where assigned.

### Syntheon owns during delivery
- RAJ-AGRIPAY application engineering;
- adapter implementation against approved contracts;
- Claim Truth/rule engine implementation;
- test automation and release evidence;
- migration tooling and exception reporting;
- technical documentation, training and agreed support.

### Dealers participate in
- representative onboarding/renewal UAT;
- invoice/evidence usability testing;
- status/notification comprehension testing;
- feedback on cash-flow/status-query friction.

## Escalation principle
No software component silently resolves a policy or authority dispute. Ambiguous scheme interpretation escalates to Agriculture; payment/accounting ambiguity escalates to Finance/Treasury; identity/platform ambiguity escalates to the relevant State platform owner.
