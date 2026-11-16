---
type: data-review
item: AP use, dementia 65+ (AP/AA cut)
source: "AP+65Plus+Dementia_Full-Org_Report.pdf, attachment to Jacob Lindbert, RE: AP/AA data, 2026-09-25 9:37am (Outlook)"
data: August 2026 PIMS
reviewed: 2026-09-25
supersedes: "[[AP use — Lindbert Top 201 report — 2026-09-25]]"
---

# AP use: Lindbert full-organization dementia 65+ report, reviewed 2026-09-25

The raw PDF stays on the email. Section 1 ranks the top 200 buildings on (65+ with dementia on AP) − (0.167 × census). Section 2 lists all 1,202 buildings by the raw cohort count. Both carry total dementia diagnoses and all AP users with dementia. Highlighted cells flag three data checks.

## Findings

1. **It is the report requested.** All 1,202 buildings reconcile to the organization-wide August figures: 13,444 on AP, census 57,072, 22,333 with dementia, 6,027 with dementia on AP, 5,394 in the cohort. Every row is internally consistent. The top 19 match the reconstruction in the earlier review exactly.
2. **Group 1 (score ≥ 5) is 59 buildings holding 970 of the 5,394 in the cohort (18%).** 46 are in North Carolina, 9 in Kentucky. 236 buildings score above zero and hold 2,323 (43%).
3. **The score favors memory care by construction.** Group 1 buildings have a median dementia share of census of 84%, against 39% system-wide. In the leaders, 55–80% of residents with dementia are on AP, against 24% system-wide, so the excess is real. But SNFs with a large census and a dementia minority score negative however many cohort patients they carry: Mulberry Creek (19 in the cohort, score −13.1), Heritage Hall Big Stone Gap (16, −11.4), Arbors at Stow (16 of 117 with dementia, −6.4). Section 2 is where those buildings appear. The dementia census column now makes a cohort ÷ dementia census rate computable; the denominator question remains parked.
4. **The data flags do not threaten the top of the list, with one exception.** The 53 buildings with no dementia diagnoses are largely the Kentucky personal care homes and MH/IDD homes (Davco, Highland Homes, Better Senior Living, Christian County Manor, Madisonville Manor, Indiana Mentor); true zeros are plausible. The 101 buildings where dementia and AP exist without overlap total 388 AP users, again mostly MH homes. The exception is North Roanoke ALF: census 150, 39 on AP, zero dementia diagnoses. Implausible for an ALF of that size; if its AP users were in the cohort it could score up to about 14 and enter the top 10. Worth one check.
5. **Low performers for contrast** (40+ residents with dementia, lowest share on AP): Bridgewater Home SNF (1 of 47), South Roanoke Nursing Home (2 of 44), Elkhart Meadows (2 of 42), Glendale Place (3 of 48), Mountain Manor of Paintsville (3 of 47), Autumn Care of Raeford (6 of 74). Sam Swope and Lakeside show zero but also near-zero AP overall, which may be incomplete medication data.

## Recalculation on dementia census (2026-09-25)

Score recomputed as cohort − (0.167 × total dementia diagnoses), using Lindbert's dementia column. The dementia count is all ages while the numerator is 65+, so buildings with younger patients with dementia are slightly understated.

- The top barely moves: in memory care, dementia census ≈ census. 48 of the top 59 are the same.
- Larger mixed buildings rise: Briar Creek Health Center AL (76 → 16), Carrolton of Williamston (86 → 20), Scioto Pointe (72 → 22), Eno Pointe (71 → 54), Homeview Health (249 → 50s), Sunrise at North Hills (189 → 50s), PruittHealth Durham (379 → 50s).
- 697 buildings score above zero (236 on census); 146 score ≥ 5. Across the system the cohort exceeds 16.7% of dementia census by 1,664.
- 0.167 is the organization goal for total census only. In both scores it is a scoring constant for ranking intervention targets, not a goal for patients with dementia (Patrick, 2026-09-25).
- Workbook with both rankings, each carrying the other score and rank: ![[AP dementia 65+ scores - census vs dementia denominator - 2026-09-25.xlsx]]

## Dementia constant (2026-09-25)

The dementia score uses 0.10, the AP rate among patients with dementia implied by the organization reaching 16.7%: at goal 9,531 on AP (3,913 fewer than August); holding residents without dementia at 7,417, patients with dementia fall from 6,027 to 2,114 on AP, 9.5% of 22,333. The stricter version (whole reduction from the 65+ cohort) is 6.6%. At 0.10, 52 of the top 59 match the 0.167 dementia ranking; Durham Ridge moves to first. The census score keeps 0.167.

## Statistical checks (2026-09-25)

- Rank stability, dementia score at 0.10, 2,000 binomial resamples: each of the top 20 stays in the top 59 in ≥88% of runs. Of the full 59, 25 stay in ≥80% of runs and 9 in fewer than half.
- 51 of the top 59 are above the system rate (24.2%) at p < 0.05; 13 survive correction for 1,202 comparisons.
- Concerns recorded for the spec: regression to the mean when buildings are chosen for being extreme; single-month point prevalence; dementia coding varies by building; removing a dementia diagnosis from a patient on AP lowers both scores (the census score more, since its denominator does not move), while adding schizophrenia has no effect because the numerator counts all AP use regardless of indication; case mix (psych-start buildings, memory care admissions from psychiatric units); prescriber attribution.
- Patrick's read (2026-09-25): regression to the mean and month-to-month noise are small because these are chronic medications; local leadership will screen noisy buildings, case mix and memory care context; prescriber attribution must be sorted out; denominator age mismatch is a small effect.

## Stratification and positive outliers (2026-09-28)

Rate of 65+ with dementia on AP ÷ residents with dementia, buildings with ≥ 10 residents with dementia, by dementia share of census:

| Dementia share of census | Buildings | Pooled rate | Median | 10th pct | 90th pct |
|---|---|---|---|---|---|
| < 30% | 134 | 20.0% | 18% | 6% | 36% |
| 30–60% | 515 | 22.1% | 20% | 6% | 42% |
| 60–85% | 109 | 27.8% | 28% | 9% | 50% |
| ≥ 85% (memory care proxy) | 56 | 36.9% | 38% | 20% | 62% |

Positive outliers, general (≥ 30 residents with dementia, ≥ 5 on AP overall): Bridgewater Home SNF (1/47), Forest Health and Rehab (1/33), Village Care of King SNF (1/33), Bell Tower (1/32), South Roanoke Nursing Home (2/44), Scarlet Oaks SNF (2/35), Ossian Healthcare SNF (2/35), East Lake (2/35), Nicholasville (2/34), Mountain Manor of Paintsville (3/47).

Positive outliers, memory care proxy (≥ 85% dementia, ≥ 20 with dementia): Glendale Place (3/48, 6%), Arbors at Stow (16/117, 14%), Embassy of Valley View (7/38, 18%), Fairway Village (9/46, 20%), Harrison Terrace (15/76, 20%), Heritage Greens Arboretum (8/38, 21%).

## Concentration and gradient at the 0.10 constant (2026-09-28)

- Gap to 10%: 3,161 (5,394 − 0.10 × 22,333). Top 50 buildings by dementia score (4% of 1,202) hold 752 of it (24%) and 940 of the cohort (17%). 40 buildings reach 20% of the gap, 54 reach 25%, 151 reach 50%.
- NC: 494 buildings, 42% of residents with dementia, 29.2% rate, 56% of the positive excess, 37 of the top 50. State rates: NC 29.2%, SC 23.9%, KY 23.1%, VA 23.0%, IN 18.5%, OH 17.4%.
- Buildings with ≥ 10 residents with dementia (814), by fifths of dementia share: pooled rate 18.9%, 19.6%, 22.1%, 24.8%, 31.3%; 10th–90th percentile 5–35% in the lowest fifth, 11–55% in the highest. Spearman 0.30.
- Against the system rate (24.2%), binomial: 104 above and 97 below at p < 0.05; 13 above and 3 below after Bonferroni.
- Elkhart Meadows (2 of 42, 2 on AP in the building) added to the likely-incomplete-data list with Lakeside and Sam Swope.
