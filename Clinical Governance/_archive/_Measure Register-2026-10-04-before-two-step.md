---
type: register
created: 2026-09-25
---

# Measure Register

| Item | Kind | Status | Source | Owner of data | Spec | Project |
|---|---|---|---|---|---|---|
| AP use, dementia 65+ (AP/AA cut) | rate | design | AP/AA Use reports, Jacob Lindbert, 2026-09 | Jacob Lindbert (PIMS) | none yet; method lives in the project note | [[AP-AA Cut]] |
| Corrective insulin documented (EQuIP) | standard | adopted | EQuIP bonus go-ahead, Rucci, 2026-09-23 | Chart audit | [[equip-corrective-insulin-measure]] | [[EQuIP]] |
| Supervisory chart review completion (supervising physicians reviewing their APCs' charts with the review guide) | rate | declined 2026-09-29: supervision is outside the CQC; sampling, completion tracking and any pay sit with operations and HR | Patrick, Clinical Chair session, 2026-09-29 | Operations (RDCOE log) | | |
| Note timeliness on visits that change the plan of care (late notes as a communication failure with the facility) | standard | idea 2026-10-01 | Patrick, Clinical Chair session, 2026-10-01 | EMR visit and signature timestamps | | |
| Insulin monotherapy: documented reason a non-insulin agent is not used (metformin, SGLT2 inhibitor, GLP-1 agonist; DPP-4 inhibitor suggested as an addition) | standard | idea 2026-10-02; considered and not chosen for EQuIP 2026-10-02 | Patrick, email to Barb Pereira and Clinical Chair session, 2026-10-02 | Medication orders; chart audit | | |
| Diabetes overtreatment (EQuIP): resident on insulin or a sulfonylurea with A1c below 7.0% has acknowledgment and a change or reason to continue | standard | design 2026-10-02 | Patrick, email to Barb Pereira, 2026-10-02 | Medication orders, A1c results (producer to confirm) | [[Diabetes overtreatment (EQuIP)]] | [[EQuIP]] |
| Fingerstick frequency matched to regimen: three or more daily checks without corrective or prandial insulin has a documented reason | standard | declined 2026-10-02: treatment orders cannot be pulled; only medication orders and A1c are available | Claude, suggested in Clinical Chair session, 2026-10-02 (companion to corrective insulin for EQuIP) | Orders | | |

## Design notes (to consider when an item is specified)
- 2026-10-02: **Diabetes companion measures, data limits.** Patrick: medication orders and A1c results can be pulled; treatment orders (fingerstick frequency) and, by implication, the glucose log cannot. Specs for the monotherapy and overtreatment items must be buildable from those two sources alone.
- 2026-09-29: **For the AP/AA specification (design note, not a decision).** A standard requiring the date and outcome of the last gradual dose reduction is met by a note reversing the reduction for a reason unrelated to the target behavior ("began sneezing"). When the spec is written, consider defining the outcome in terms of the documented target behavior: how it responded to the reduction, or another documented clinical reason for the decision that followed. Source: Patrick's stress test, 2026-09-29.
