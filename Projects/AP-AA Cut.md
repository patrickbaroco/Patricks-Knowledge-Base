---
project: AP/AA Cut
status: active
domain: professional
started: 2026-09-21
next_action: "Collect the remaining RDCOE Y/N replies (Freeburne KY/OH, Hendress IN, rest of NC) into a final target list; Rucci's state × ALF/SNF breakout."
todoist_label: prj-ap
stakeholders: [Jacob Lindbert, Jennifer Rucci, Monica]
related:
  - "[[Clinical Quality Framework]]"
last_touched: 2026-09-28
---

## Context

Reducing antipsychotic and anxiolytic prescribing across the facilities, worked through a ranked list of buildings rather than a blanket target.

The methods question is settled. The filter is a diagnosis of dementia in patients over 65, and buildings rank on total AP minus 0.167 times census, which drops both tails rather than only the high one. Jacob Lindbert owns the list and promised it on 2026-09-17 for "next week," meaning the week of 9/21.

What is not settled is the denominator, and it is the kind of objection that invalidates a ranking rather than adjusting it.

## Rucci's denominator objection

In mental-health-only buildings where residents have an outside PCP, and in integrated buildings shared with another PCP, only referred patients appear in the denominator while every patient using an antipsychotic appears in the numerator. Those buildings will rank high for a reason that has nothing to do with prescribing.

Separating the MH-only buildings would also remove most of the low-census buildings, which is a second effect worth understanding before the split is made rather than after.

Monica raised the same low-census problem from the opposite direction in her PIMS 2.0 edits (W37).

## Decisions

- **2026-09-21: opened as a project.** Carried in the W37 and W38 Handoffs as both an Open item (Lindbert) and an Ongoing thread (the AP/AA cut), and it produces a ranked list with an agreed methodology rather than a single action.
- Filter is dementia over 65; ranking is total AP − (0.167 × census). Settled before this note existed.
- **2026-09-25:** 0.167 is the AP goal for total census only. In the scores it is a scoring constant for finding high-value intervention targets, not a goal for any subgroup.
- **2026-09-25:** Dementia-denominator score uses a constant of 0.10, the dementia AP rate implied by the organization reaching 16.7% with the reduction falling on patients with dementia (stricter version 0.066). Census score keeps 0.167.
- **2026-09-25:** Targets go to the four RDCOEs by state for a Y/N read on each building, in the email body rather than a link. Selection: each state's top 5 plus every building with dementia score ≥ 10, North Carolina capped at 20 for the first round, three alternates each. SC and WV left out (limited presence).
- **2026-09-28:** The AP initiative is to serve as the worked example of how the CQC will operate. Positive outliers are to be studied as well as negative ones, including the processes in low-use buildings; Patrick favors recognizing positive findings.
- Track under `prj-ap` per `_Todoist Link Convention.md`.
- **2026-09-24: denominator question parked.** Patrick is not working Rucci's objection now. Get the list, then identify better and worse targets manually from it; the MH-only and shared-PCP buildings can be judged by eye at that point rather than corrected in the method first.

## Open questions

- *(Parked 2026-09-24)* Does the denominator get corrected, or do MH-only and shared-PCP buildings come out of the ranking entirely?
- If the MH-only buildings are separated, what happens to the low-census buildings that leave with them?
- *(Rucci, 2026-09-28)* Does Lindbert pull diagnoses from billed codes or the PMH list? The PMH list is populated by CSS from the FL2 at intake and is not reliably cleaned. The answer bears on every denominator question, and the Athena migration will break the trend either way.
- What is the ranked list actually for once it exists — targeted education, individual feedback, or a quality measure? The answer changes how defensible the denominator has to be.

## Log

- 2026-09-13 (W37): Lindbert follow-up carried, due Tue 9/15 if no reply. Monica's PIMS 2.0 edits raise the low-census problem from the other side.
- 2026-09-17: Lindbert follow-up closed. He promises the ranked list for the following week.
- 2026-09-21 (W38): methods recorded as resolved; Rucci's denominator point recorded as standing. Project note created at the Monday task-to-project review.
- 2026-09-24: **List overdue; Patrick chased Jacob by email this morning.** Nothing from Jacob since 9/17. Denominator question parked by decision: targets will be picked by hand from the list once it arrives.
- 2026-09-24: Chase task completed in Todoist. Gated to 2026-09-30 while the list is outstanding. No follow-up task by decision; `prj-ap` has no open task until the list arrives.
- 2026-09-24: **List delivered at 12:31pm.** Top 201 AP-usage buildings, ranked on the goal formula, expandable to more. Review before Monday 9/28.
- 2026-09-25: Gate lifted; next action moved from waiting on Lindbert to reviewing the list. Todoist task added under `prj-ap`, due Mon 9/28. The report is the attachment on Lindbert's *RE: AP/AA data* email, 2026-09-24 12:31pm.
- 2026-09-25: List reviewed. It ranks on all AP use rather than the dementia 65+ cohort agreed on 9/17; Group 1 is 14% cohort, and 68% of the organization-wide cohort sits outside the 201 buildings. A rerun on the cohort across all buildings is needed before targets are picked. Review: [[AP use — Lindbert Top 201 report — 2026-09-25]]. Measure Register created with this item.
- 2026-09-25: Top 19 on the dementia 65+ score reconstructed from the 9/24 list and shown complete by bound; rest needs Lindbert's rerun. Rerun request drafted for Patrick to send.
- 2026-09-25: Rerun request sent to Lindbert (reply on *RE: AP/AA data*): rank on 65+ dementia AP − (0.167 × census) across all buildings, flag unmatched buildings, add dementia census column, spreadsheet only. Asked for before Monday.
- 2026-09-25: **Rerun delivered 9:37am** (*AP+65Plus+Dementia_Full-Org_Report.pdf*): all 1,202 buildings, scored and raw-count views, dementia census column, data-match flags. Reconciles to org totals. Group 1 = 59 buildings, 970 of 5,394 in the cohort. Review: [[AP use — Lindbert full-org dementia 65+ report — 2026-09-25]]. Jacob offered to meet early next week.
- 2026-09-25: Patrick asked whether the score can use dementia census instead of total census; recalculated from Lindbert's dementia column (see data review). Denominator question reopened by Patrick.
- 2026-09-25: Built workbook ranking all 1,202 buildings on both census and dementia-census scores (Measures/data).
- 2026-09-25: Workbook split into two constants (census 0.167, dementia 0.10).
- 2026-09-25: Statistical checks run on the dementia score (rank stability, significance); concerns logged in the data review.
- 2026-09-25: RDCOE emails drafted (Young NC 20, Freeburne KY 7 + OH 5, Colvin VA 5, Hendress IN 5, plus alternates): [[AP-AA Cut/rdcoe-emails]]. Outlook connector is read-only, so copy-ready HTML for pasting.
- 2026-09-25: Virginia list revised: Heritage Hall Big Stone Gap and Mulberry Creek removed (service ends after this month); Dogwood Crossing and Rocky Mount Health & Rehab moved up; alternates now Riverstone Bedford, Riverstone Danville, Seven Hills.
- 2026-09-25: RDCOE emails sent 1:28–1:55pm (Young NC, Freeburne KY/OH, Hendress IN, Colvin VA). Tiffany Suber, new ADCOE for Charlotte, replied with input. 4:36pm, *AP usage* to Rucci, Byrne, Patel and Lindbert with the two-score workbook for Monday's call; about half the RDCOE replies back. Rucci, on Lindbert's separate unapproved-AP report, asked for a state by ALF/SNF breakout.
- 2026-09-28: Stratified rates by dementia share and positive-outlier lists added to the data review. Open design question: how positive findings are recognized under the charter (rate targets are never attributed to individuals, § 4.4).
- 2026-09-28: Commendation disposition and public-recognition rules drafted as a proposal: [[cqc-commendation-proposal]] (not yet in the Charter).
- 2026-09-28: RDCOE replies in: Colvin (VA, complete: Y Runk & Pratt, Rocky Mount, Bedford, Danville; N Alleghany, Carriage Hill, Dogwood; Seven Hills N?), NC partial via Suber and Blouin-Hunter (memory care and outside MH provider given as reasons for N). Nothing from Freeburne or Hendress. Byrne (9/28) proposed the internal enterprise goal move to dementia 65+, CMS definition kept for external/MUO use.
- 2026-09-28: CGSC agenda and non-committal opening drafted: [[AP-AA Cut/cgsc-agenda-2026-09-28]].
- 2026-09-28: Charts published for the CGSC (Claude artifact *Antipsychotics in Dementia*): concentration curve, dementia share vs AP rate, funnel plot. Of the 3 buildings low after correction, 2 report no AP use at all (Sam Swope, Lakeside; likely incomplete data); Bridgewater is the only credible one.
- 2026-09-28: Commendation and recognition written into the CQC Charter (§§ 5.5(d), 7.6) with the two-committee revision; [[cqc-commendation-proposal]] marked incorporated.
- 2026-09-28: **CGSC held** ([[CGSC — Antipsychotic Use in Dementia, 2026-09-28]]). Framing accepted; discussion went to the denominator (Rucci: excluding psychotic disorders and restricting to dementia are different cuts) and the ALF/SNF gap (Dr. Williams asked why ALF is measured at all). Rucci: talk to Laura about the Ohio and Indiana GDR partnership. List screening, low-use buildings and Byrne's goal proposal not reached.
- 2026-09-28: **Rucci 1:1 after the CGSC** ([[Jen Rucci — Clinical Quality Planning, 2026-09-28]]). Durham Ridge is a mental health facility with dementia charted to avoid IMD status under North Carolina's Medicaid ALF rules; *"there might be two patients in that facility that have dementia."* Rucci predicts NC SNFs should run lower than other states' because SPMI is diverted to ALF; her breakout can test it. Ask Lindbert where diagnoses are pulled from. Candidate individual rule: document the date and specific outcome of the last GDR (run past Byrne). The AP and AA 2026 company goals both missed.
