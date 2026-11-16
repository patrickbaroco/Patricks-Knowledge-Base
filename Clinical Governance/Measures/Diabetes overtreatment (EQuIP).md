---
type: measure-spec
kind: standard
status: design
status_log:
  - idea: 2026-10-02
  - design: 2026-10-02
project: "[[EQuIP]]"
data: [medication orders, A1c results]
---

# Diabetes overtreatment (EQuIP)

Second component of the EQuIP diabetes measure, alongside [[equip-corrective-insulin-measure|corrective insulin]]. Register: [[_Measure Register]].

## Question

When a resident on insulin or a sulfonylurea has an A1c below 7.0%, has the clinician acknowledged it and said what they intend to do about the regimen?

## Population

Residents on the clinician's panel with an active order for any insulin or any sulfonylurea whose most recent A1c is below 7.0%.

Exclusions to align with the corrective insulin measure (to confirm): more than 30 days since admission or a qualifying readmission, and at least 30 days on the clinician's panel. Both are population exclusions rather than defenses.

## What counts as met

A note within the cycle that acknowledges the low A1c and documents either a medication change or a reason for continuing the current regimen. Patrick's example of a passing reason: "patient is 68 years old with good functional status and has had no hypoglycemia or near-hypoglycemia on current regimen and would benefit from ongoing excellent control on current regimen."

The reviewer does not evaluate the reason. A note stating that the A1c is unreliable (transfusion, erythropoiesis-stimulating agent, hemolysis, advanced CKD) is a reason and passes. Discontinuing the insulin or sulfonylurea removes the resident from the measure.

## Data

Built from medication orders and A1c results only. Treatment orders and the glucose log cannot be pulled, so hypoglycemia without a low A1c is outside this measure. Who produces the list: to confirm (Barb Pereira was asked about available data on 2026-10-02).

## Cadence

Quarterly, on the EQuIP cycle.

## Minimum expectation and aspirational target

Minimum expectation: the same chart-count and allowance rule as corrective insulin, which is itself unsettled (five charts with one allowance, or six of six; see [[EQuIP]]). A clinician with no eligible residents meets the measure.

Aspirational target: fewer residents on insulin or a sulfonylurea with an A1c below 7.0% across the group. This is tracked by place, never by named clinician.

## Referral rule

None. The EQuIP program produces a score and no referrals.

## Ties

EQuIP: second diabetes component from the first scoring cycle; accepted by Rucci 2026-10-05, applying to every clinician, sampled at about two charts a quarter ([[Jen Rucci — Final Pass Before Ben, 2026-10-05]]). ACO: the usual diabetes quality measure penalizes poor control (A1c above 9%); this measure works at the opposite end and does not conflict with it.

## To confirm

- Lookback for "most recent A1c" (six months proposed). If only residents with a recent A1c are eligible, a clinician avoids the measure by not checking one. Option: a resident on insulin or a sulfonylurea with no A1c in the lookback is also eligible and passes on the same terms.
- Whether the 30-day admission and panel exclusions carry over unchanged from corrective insulin.
- How the two diabetes components combine into the EQuIP score.
- Who generates the eligible list.

## Known objections

None recorded yet.

## Decisions

- 2026-10-02: Selected by Patrick as the second EQuIP diabetes component with corrective insulin. Insulin monotherapy was considered and not chosen; fingerstick frequency was declined because treatment orders cannot be pulled.
- 2026-10-02: Threshold A1c below 7.0%; population is any insulin or sulfonylurea order; met by acknowledgment plus a change or a reason for continuing (Patrick, email to Barb Pereira).

## Log

- 2026-10-02: Patrick emails Barb Pereira ("Diabetes measures") proposing overtreatment and insulin monotherapy as additions to corrective insulin. Same day: available data confirmed as medication orders and A1c results; overtreatment chosen. Spec opened at `design`.
