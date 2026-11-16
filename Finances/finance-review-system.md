# Finance Review System Reference

How the finance review cadence operates, so a new session can pick it up cold. Companion to `finance-project-handoff.md`, which holds the standing facts (household, tax situation, vehicles, cards, Era gotchas). **Read the handoff first — this file only describes the ritual.**

---

## The four reviews

| | Cadence | Length | Job |
|---|---|---|---|
| **Weekly** | Sunday | ~10 min | Catch leakage. Tasks, one number, one goal. |
| **Monthly** | First weekly review after the month closes | ~30 min | Recompute the baseline. Narrative rollup. |
| **Quarterly** | Feb / May / Aug / Nov, 20th | ~1 hr | **Set the next three-month block.** The real planning unit. |
| **Annual** | Early January | ~2 hr | Tax close-out and structural review. |

Escalation is deliberate: the weekly never does analysis the monthly should do, and the monthly never sets targets the quarterly should set. Patrick reviews spending **weekly in short passes, not deep dives** — a weekly review that runs long is a failed weekly review.

**Three-month blocks are the planning horizon, not the year.** The annual review closes out tax and structure; it does not produce a twelve-month projection. Quarterly sets targets. Everything else reports against them.

---

## File layout

```
Finances/
  finance-project-handoff.md      standing facts — read first
  finance-review-system.md        this file
  Templates/                      the four templates
  Weekly/2026-W36.md              Mon-Sun, ISO-style week number
  Monthly/2026-09.md
  Quarterly/2026-Q3.md
  Annual/2026.md
```

Naming matches `Logbook/`. Weeks run **Monday–Sunday** and the number matches the Logbook's weekly notes, so `Finances/Weekly/2026-W36.md` and `Logbook/Weekly/2026-W36.md` cover the same seven days. Keep them aligned — a mismatch makes cross-referencing useless.

**A weekly note is named for the week it covers, and the Sunday review therefore writes two files** *(decided 21 Sep 2026)*. The retrospective closes out the note for the week just ending; the forward half — position, spending flexibility, the light, and the daily-check log — opens the note for the week about to start. The review on Sunday 27 September closes `2026-W39.md` and opens `2026-W40.md`.

Until 21 Sep both halves went into the ending week's note, so the plan for 21–27 September and that week's daily-check stub sat in `2026-W38.md`. The daily check looks for the current ISO week's note and found nothing, which would have stopped it silently every day of the week. Two templates exist accordingly: `Weekly Finance Review.md` for the retrospective, `Weekly Finance Review — Week Ahead.md` for the forward half.

No top-level `#` date header. Open with a plain line: `Week of August 31 – September 6, 2026`.

Narrative sections are **first person**, matching the Logbook. Checklists and flagged-item tables are neutral.

---

## Where the numbers come from

Era Context (MCP) is the source for everything. Rocket Money is retired and no longer read — savings is still **one account, the Ally Savings balance (`uagr_4Cja3jSvcyo`)**, with no buckets and nothing to reconcile by hand. **The single $75,000 target is retired as of 26 Sep 2026**, replaced by two figures derived from that one balance: a sinking fund and a surplus fund. See step 1 below and handoff §15.

Standard weekly pull:

1. `knowledge__get_financial_context_and_overview` — balances, net worth, warnings. One call gets most of it.
2. `insights__analyze_spending` with `group_by: category`, `period: custom`, the week's Mon–Sun dates.
3. `transactions__search_transactions`, same window, `direction: debit` — this is the leakage hunt.
4. `transactions__search_transactions` with `include_pending: true` — pending charges for the cash-flow section.
5. Todoist project **Personal** (`6V99GpCcvP5f67Cc`) for the task block.

### The income calendar

Four streams, three of them landing on a predictable rhythm. Established 20 Sep 2026 from June–September actuals.

| Stream | Lands in | Cadence | Reliability |
|---|---|---|---|
| **Eventus payroll** (Patrick, W-2) | Ally Spending 0919 | biweekly, Friday | amount swings hard — see below |
| **Dept of Health** (Allison) | Ally Spending 0919 | ~12th–14th and ~28th–29th | flat and dependable, ~$5,540 |
| **MES** (medical directorship) | USAA Checking 3694 | ~8th and ~22nd–24th | amount varies wide, trending up |
| **Hospice** | Ally Savings 0908 *(new)* | monthly | $2,500, reliable going forward |

**Patrick's paycheck carries a directorship bump on one check a month.** Landed 7/17, 8/14 and 9/11 at $11,386.80, $10,156.22 and $6,952.98 — 28 days apart, so expect the next around 10/9. The September figure looks small because the W-4 catch-up withholding started in late August and takes roughly $1,700–2,700 a period; adjusted, 9/11 is a bump check and 8/28's $4,189.35 is a base check. **Do not read a low check as a problem without checking whether it is a base check.**

**Early-month bump checks** *(rule set 10 Oct 2026, Patrick; simplified the same day to a savings float with no USAA buffer)*. The directorship pay rides on the first Eventus check of the month. When that check falls very early in the month, the pay may not be processed in time and moves to the second check, two weeks later.

| First check of the month falls on | Plan it as | Float from Ally Savings to Ally Spending 0919 |
|---|---|---|
| **Day 1–4** | **A base check.** The directorship pay is carried on the second check. | **~$6,500, the business day before the first check** |
| **Day 5–6** | A bump check, as normal | ~$6,500 on payday, **only if** the check arrives without the directorship pay |
| Day 7 or later | A bump check | None |

**The float goes back to Ally Savings the Monday after the directorship pay lands.** Ally-to-Ally transfers land the same day, so nothing is held in advance and USAA plays no part. USAA's surplus moves to Ally Spending on its ordinary schedule.

The payroll record agrees. The checks of 1/2/2026 and 7/2/2026 both came in as base checks ($3,703.61, $6,625.36), with the directorship pay landing on 1/16 ($13,913.62) and 7/17 ($11,386.80). The checks of 12/5/2025 ($15,929.15) and 6/5/2026 ($11,294.00) both carried it. No day-6 first check has been observed yet.

**The float is a fixed amount: the directorship pay's contribution to net pay.** On the 10/9/2026 stub, $9,585.00 of directorship pay added about $6,400 to the net: the same check without it would have netted ~$5,245 against the $11,644.88 received. Carry ~$6,500 and re-base it from each bump stub. A fixed figure keeps the rule mechanical; floating more than a given month needs costs only about two weeks of interest.

**Savings can carry it at the trough.** June and July 2027 are both day 1–4 months, at the sinking fund's low point, but the surplus fund is projected near ~$18,100 then (after the Spain travel and the organizing project).

**Report it as a float.** While it is out, the weekly reads the Ally Savings balance with one added line, e.g. "Float: $6,500 to Ally Spending, returns 12/21", so the surplus fund does not read as a miss.

**The Q4 extra $3,000 moves the Monday after the check that actually carries the directorship pay.** In a day 1–4 month that is the second check, the same day the float returns.

| Check | Day | Treatment |
|---|---|---|
| Fri 11/6/2026 | 6 | Bump. If the pay is missing, float $6,500 that day, return 11/23. Q4 extra on 11/9 if the pay is on it, otherwise 11/23. |
| Fri 12/4/2026 | 4 | **Base.** Float $6,500 on **Thu 12/3**, ahead of the same-day Reserve draw. Directorship pay on 12/18; float returns and Q4 extra moves on **Mon 12/21**. |
| ~1/1/2027 (may pay 12/31) | 1 | Base. Float the business day before the check. Directorship pay on 1/15; float returns 1/18. |
| 6/4/2027, 7/2/2027 | 4, 2 | Base. Float on 6/3 and 7/1. Directorship pay on 6/18 and 7/16; float returns 6/21 and 7/19. |
| 11/5/2027 | 5 | Bump. Float on payday only if the pay is missing. |
| 12/3/2027 | 3 | Base. Float on 12/2. Directorship pay on 12/17; float returns 12/20. |

A slipped month moves the directorship pay within the month, so the monthly allowance is unchanged. What changes is cash timing in the first half of the month.

**December 2026 under the rule** (conservative figures, as of 10 Oct). Ally Spending projects to ~$8,150 after the 12/1 stack. The $6,500 float on 12/3 takes it to ~$14,650. The 12/4 base check (~$5,100) against the 12/4 Reserve bill (carried at $10,000) leaves ~$9,750. The month's low is ~$8,800–9,000, around 12/9 and again on 12/21 after the float and the Q4 extra go back to savings. Without the float it would have bottomed near ~$2,500 around 12/9–12/12, or about −$1,850 on 12/4 if Chase drew before payroll posted.

**Allison's is the only line to plan against.** $5,389.47 → $5,410.44 → $5,367.25 → $5,388.21, then a step up to $5,539.76 → $5,561.51 → $5,539.75 in August. Twice monthly, no surprises.

**Hospice is new to Ally and must not be read as savings progress.** Until Sept 2026 the $2,500 landed in an account outside Era and was moved to Ally sporadically. Going forward it goes straight to Ally Savings. That means the Ally balance will grow by **$3,600 sweep + $2,500 hospice + interest and boosters** — and the weekly must keep those apart, or the goal will look like it is being met by saving when part of it is income arriving. At $6,100/month the $47,755 gap closes in about 8 months rather than 13.

### The decomposition that makes the weekly number honest

Raw weekly spending is meaningless on its own — it bundles housing, savings and discrete purchases with actual operating spend. Always break it out:

```
Total spending (Era)
  − Mortgage + HELOC          fixed, known, not a signal
  − 529 contributions          savings, not consumption
  − Discrete major purchases   deliberate decisions, per the handoff
  = Operating spend            the only number worth watching weekly
```

**Do not fold major purchases or travel into a spending trend, and never use them to argue the baseline is too high.** This is the single most repeated correction in the handoff. Discrete purchases get named in the flagged list and excluded from the trend.

### Era gotchas that will waste your time

Full list in the handoff, section 8. The ones that bite during reviews:

- **Use `description_match`, not `merchant_match`.** Merchant names format inconsistently.
- **`list_recurring_charges` is not a complete inventory.** It has missed Disney+, Apple Card charges and YouTube Premium, and mislabelled monthly Spotify as quarterly.
- **Duplicate detection produces false positives.** Two housekeeping checks in one week, or GiveWell and Give Lively on consecutive days, are not duplicates. Verify before reporting a count.
- **Both properties are hidden from analytics by design.** Their absence from spending views is correct.
- **A transfer-linked row does not appear in a `direction: credit` search on the receiving account.** The 8/31 $21,246.05 Sapphire Reserve payment is visible as a debit on the Spending Account but returns nothing from a credit search on the card, and the same held for the $3,000 sweep landing in Ally Savings. **Never conclude a payment or deposit did not happen from a one-sided search** — check the paying account, or search unfiltered by direction.
- **`min_amount` does not reliably filter to large charges.** Passing `min_amount: -1000` returned $25 transactions. Use `sort_by: amount` and read the tail, or query by merchant.
- **Apple Card updates monthly and has been in a `reconnect` state.** Its spending shows up as the *payment* out of the Spending Account, not as itemized charges. The payment total is the best available read on Apple Card monthly spend.

---

## Apple Card — CSV import (tested 6 Sep 2026)

The Apple Card connection will not stay linked, so its data comes in by CSV instead. Screenshots are not necessary and should not be used.

**Accounts (set up 6 Sep 2026):**

| | |
|---|---|
| Import target | **`Apple Card (CSV import)`** — manual, credit card, key `uagr_EI1xSsH75VK` |
| Old linked account | `Patrick` / "Apple Card (Updated Monthly)" — **hidden** (`user_excluded`) 9/6, keeps its stale partial data out of analytics |

Import into the manual account only. Do not un-hide the linked one — if it ever reconnects, both would count and Apple Card spend would double.

**Balance caveat:** the manual account was created at **$0** and the hidden one carried $853.10 (stale, as of 8/14), so net worth is currently overstated by roughly that much. Set a real balance with `accounts__manage_account` / `set_balance` from the first statement imported. A card balance owed is a liability — pass it as **negative** minor units.

**Export path:** Wallet app → Apple Card → Card Balance → tap a monthly statement → **Export Transactions**.

**Two things established by testing, not assumption:**

1. **Era's native format detection rejects Apple Card's header.** `import_csv_transactions` errors with "Could not detect CSV format." Remap the rows to the **`mint`** format and pass `format: "mint"` explicitly — that imports cleanly.
2. **Era deduplicates on re-import, but only on exact row matches.** Re-importing an identical row is skipped. Changing anything about the row defeats it — a test row whose description changed from "ALPHA" to "ALPHA STORE LLC" (same date, same amount) imported as a duplicate, as did one whose amount moved from $22.22 to $22.23.

**Therefore: export by CALENDAR MONTH, and only months that have fully ended.**

Use the date-range export set to the 1st through the last day of the month — not the monthly-statement button. Everything else in this system is calendar-month (Era's analysis, the monthly review, the operating-spend decomposition), so a statement period that straddled a boundary would have to be split by hand. Apple Card probably does close at month end, but that is not confirmed in Apple's documentation, so set the dates rather than assume.

A month that has ended is fully settled and exports identically every time, so re-exporting one already imported is harmless. A charge exported while still pending can post later with a different merchant string or amount and would land twice.

**Import protocol:**
- Query the target account for the CSV's date range first and drop overlapping rows before submitting — a second layer that does not depend on Era's dedup.
- Run `preview_only: true` to validate before writing anything.
- Set the Category column to text matching the user's actual categories (`transactions__list_spending_categories`) so the import doesn't need a cleanup pass afterward.

---

## Weekly review — what it actually does

Five things, in order. If it takes more than ten minutes, something belongs in the monthly.

1. **The numbers — two, not one** *(revised 26 Sep 2026 at Patrick's direction; supersedes the $75,000 target)*. Report the Ally Savings balance split into its two jobs, plus operating spend for the week and sweep status. Still one line.

   **Patrick's goal, in his words:** "A shrinking fund that doesn't go all the way to zero (but can come very close), while maintaining growth (even if slow) in surplus fund."

   | | What to report | Test |
   |---|---|---|
   | **Sinking fund** | The committed lumpy calendar still ahead of the next trough | Positive at the trough and close to zero. **Near-zero is good** — it means the fund was right-sized. Negative means over-committed; a large remainder means over-funded and cash sat idle. |
   | **Surplus fund** | Ally Savings balance **minus** the sinking fund figure | Higher than the same point last year. Growth, even slow. The only real accumulation number. |

   **This is not a return to buckets.** Both figures derive from one balance plus the written lumpy calendar below, so they are *read*, not reconstructed — which is the test handoff §15 set. The Rocket Money buckets failed it because the split was recorded nowhere.

   **The known lumpy calendar** — carried at the conservative (high) end per the standing rule:

   **Travel is one annual budget of $43,000** *(Patrick, 12 Oct 2026)*: one ski trip, one big fishing trip and one smaller long weekend each year, all-in (packages, flights, hotels, meals, gratuities). The split among the three is decided trip by trip; a cheaper ski year leaves more for fishing, or for surplus. The travel rows below are the 2026–27 commitments inside it. That cycle runs ~$45,900 (Spain all-in ~$35,900 plus the ski trip carried at $10,000), ~$2,900 over the budget, and the surplus absorbs it. No long weekend falls in it, because the fall 2026 trip was passed up for Spain. A Steamboat ski trip in April 2027 (four flights to Colorado, Ikon passes already owned, mid-range lodging) is expected to come in under $10,000; the difference closes part of that gap.

   | Item | When | Amount |
   |---|---|---|
   | Trident Fly Fishing, payment 1 | August | $12,780 |
   | Snowtracks (Marc's ski program) | September | $2,051 |
   | Christmas + Nov/Dec birthdays (Allison, Marcus) | Nov–Dec | ~$4,900 in 2026; **~$7,000 from 2027** |
   | Snowshoe property tax | August, annual, amount varies (2026's paid 2 Oct: $2,662.14, USAA check #1552; repaid from Ally Savings 2 Nov, netted against October's hospice) | ~$2,700 |
   | Summer camps: Nature Camp (Vincent, Marc) + Camp Horizons 2 weeks (Marc) | Oct–May installments; Jan deposits; balances by June 1 | ~$6,650 |
   | Trident Fly Fishing, payment 2 | March 1 (2027 balance due 1 Mar) | $12,780 |
   | Trident trip travel, outside the package: flights, hotel after the program, meals there, gratuities | Flights booked ~March; the rest May–June | ~$10,300 |
   | Ski passes | April | ~$8,500 |
   | Ski trip | April | $5,000–10,000, carry $10,000 |
   | Long weekend trip | From fall 2027; none in 2026–27 | Inside the travel budget |
   | **Snowshoe remodel cash** | **June 2027** | **$10,000** |
   | **Robot mower** (Segway Navimow X430) | **Before spring 2027**, by March | **~$2,800** |
   | **Organizing help** (project, on top of regular housekeeping) | **Oct 2026–Mar 2027**, ~$700/mo | **~$4,200** |
   | Progressive annual premium (USAA checking) | October, annual (2026: $215 on 10/30, up from $188) | ~$230 |

   Recurring annual total **~$67,800** (non-travel items ~$24,800 plus the $43,000 travel budget), funded at ~$5,650 a month of the $6,100 inflow, which leaves ~$5,400 a year of surplus growth; the remodel and the robot mower are one-time. **From 2027 the Christmas line is $7,000** *(Patrick, 18 Oct 2026: fund the full gift budget from the sinking fund, no surplus draw)*, which lifts the recurring total to **~$69,900**, funded at ~$5,825 a month, and leaves **~$3,300 a year** of surplus growth. *Trident trip travel added 12 Oct 2026 at Patrick's direction. The 2027 trip is the Salvelinus Spain Family Program, four people, May 30–June 5, 2027, with three nights in Barcelona after the program. The $25,560 package covers the lodge, meals there and Barcelona transfers; it excludes international airfare, gratuities and nights outside the program dates. Carried at ~$6,000 for four economy round trips (Patrick may use points, which would beat it), ~$2,100 for three Barcelona nights for four, ~$1,200 for meals and getting around Barcelona, and ~$1,000 for guide and lodge gratuities. It lowers the June 2027 surplus projection from ~$33,200 to ~$22,900. Patrick expects to draw on the surplus fund for it (12 Oct 2026). From July 2027, big trips continue every year inside the $43,000 travel budget.* *Organizing project added 12 Oct 2026 at Patrick's direction. Housekeeping has run well above the ~$1,000 a month the fixed $2,800 line assumes, because extra organizing help is being paid on top of regular cleaning. Patrick and Allison mean to make it a time-limited project rather than a permanent cost; carried at ~$700 a month for six months (Oct 2026–Mar 2027), ~$4,200, which may change. Regular housekeeping stays in the $2,800 line at ~$1,000 a month. At each monthly review, housekeeping above $1,000 for the month is the organizing project and is repaid from Ally Savings with the other sinking-fund charges. It is one-time and comes from surplus, lowering the June 2027 projection from ~$22,900 to ~$18,700. If it is still running in April, it moves into the fixed line and comes off the allowance.* *Robot mower added 3 Oct 2026 at Patrick's direction: needed before the 2027 growing season. Navimow X430 lists at $2,499 with free network RTK; carried at ~$2,800 for Virginia sales tax and an optional garage. It has been discounted ~$500 at sale events (Prime Day June 2026), so Black Friday or an early-spring sale may bring it in under. It lowers the June 2027 surplus projection from ~$36,000 to ~$33,200.* *Property tax added 27 Sep 2026 at Patrick's direction. West Virginia bills it once a year; plan on August. The 2026 bill is being paid late, in October, so it falls inside this year's trough calendar and next August's does not.* *Revised 5 Oct 2026 at the W40 review: the 2026 bill came in at $2,662.14, paid 2 Oct from USAA. Patrick, 3 Oct: annual, amount varies, next due in the August range. Carried at ~$2,700 per the conservative-estimate rule, which lifts the recurring total from ~$60,200 to ~$60,400.*

   **On the horizon, not yet in the calendar** *(added 3 Oct 2026 at Patrick's direction)*. Two large items sit beyond the current block. Neither enters the sinking-fund test until a decision is made, but both need money set aside well before they land, and they draw on the same surplus, so size them together.

   | Item | When | Amount | Status |
   |---|---|---|---|
   | Snowshoe remodel (2031) | 2031, plan on June | ~$90,000, Patrick's rough estimate; ~$108,000 if construction costs rise 4%/yr | Under consideration |
   | Lease maturities: EV9 8/15/2029, EV6 9/24/2029 | Aug–Sep 2029 | Down payments for two financed cars: carry **~$25,000** (20% down; ~$12,500 if the buyouts are financed at residual) | Will probably finance (Patrick, 3 Oct 2026); save the down payments |

   - **Remodel.** The current structure leaves ~$5,400/yr of surplus (~$73,200 into Ally against the ~$67,800 calendar with the $43,000 travel budget, set 12 Oct 2026), which projects the surplus fund at ~$18,100 at the June 2027 trough (after the organizing project and the $2,100 gift draw) and ~$40,300 by June 2031 before interest if left alone. **From 2027, with the Christmas line at $7,000, surplus growth falls to ~$3,300/yr and the June 2031 figure to ~$31,300.** The remodel cannot come from surplus on this structure. Funding $90,000 from July 2027 takes ~$1,800/mo, about $1,525/mo beyond what the surplus produces (was ~$1,350 before the Christmas line rose), and holds the surplus flat at ~$18,100 rather than growing it. The likeliest source is the January 2027 W-4 reset; MES above its conservative floor does not count. Decide at the annual review once 2027 withholding is set.
   - **Leases.** Patrick expects to finance both cars and to save only the down payments *(3 Oct 2026)*. Carried at 20% down and the conservative end: ~$25,000, which covers new replacements in the EV9/EV6 class; financing the two buyouts at their residuals ($38,867.55 + $23,526.30 = $62,394) would need only ~$12,500. Saving from March 2027 to August 2029, ~$25,000 is **~$830/mo**. Watch the payment as well: financing $50,000–100,000 over 60 months at ~6% runs ~$970–1,930/mo against the $1,232.61 the leases cost now, so the fixed-outflow line can rise in late 2029. Firm up the car choice and the down-payment figure at the Feb 20, 2027 quarterly so saving starts with the Mar–May block.

   **Summer camps, 2027** *(added 26 Sep 2026; Patrick confirmed who goes and that Horizons is 2 weeks, same as 2026)*. Camp Horizons 2-week Base Camp is $3,950 plus ~$170 of June extras (camp store, trips), carried without the $275 early-bird discount for enrolling before Jan 1, 2027; $375 registration fee at enrollment, then monthly installments through May 28. Nature Camp 2027 tuition is announced end of November 2026; carried at ~$1,250 per camper (2026 was ~$1,110: $150 deposit with the application, $960 balance paid 26 May). Registration opens 21 Jan 2027. Replace both estimates with actual rates once published.

   **Horizons installments post monthly as Childcare and are sinking-fund draws, not operating spend.** Take them out in the weekly decomposition the same way as other discrete items, or the operating number will read ~$450/month high from enrollment through May.

   **2026 Horizons cost is only partly visible.** Era shows $1,557.50 (Dec 2025–Jun 2026). The Reserve has no data before Dec 2025, so the earlier installments of a 2-week session are missing. Do not use $1,557.50 as last year's cost.

   **2026 gifts run $7,000** ([[Gift Budget 2026]], including skis for Marc). The $4,900 line covers all but **$2,100, which is a one-time draw on the surplus fund** *(Patrick, 26 Sep 2026 at $1,500; raised 18 Oct 2026 when the budget rose from $6,400 to $7,000)*. Expect the surplus figure to drop by that amount in Nov–Dec; it is decided, not a miss. The line rose from ~$3,500 on 26 Sep. The extra $600 lowers the June 2027 surplus projection from ~$18,700 to ~$18,100. **From 2027 there is no draw:** the line is $7,000.

   **The real trough is JUNE, not April** — the fund dips in April but must still hold the $10,000 the remodel needs, then draws to near-zero in June. Do not read an April balance near zero as correctly sized; it is over-drawn.

   Season passes are **April, not Q4** *(Patrick, 25 Sep)*, and Vincent has no equivalent to Marc's Snowtracks cost. Ski season itself is cheap by structure — own the Snowshoe house, passes bought ahead, eat in, EV so no fuel. **Ski-season running costs are up to ~$300 a month** *(Patrick, 22 Oct 2026)*: a few meals out and higher energy bills at the Snowshoe house. Not a sinking-fund item. The meals out count against the weekly number; the Snowshoe energy rides the utilities line.

   **A sinking fund heading negative is structural red**, distinct from the cash-position bands in step 2: more lumpy spending has been committed than the fund holds. Catch it months early, not in April.

   **A sinking-fund item is paid from the sinking fund, never by flexing the sweep.** Christmas is a line in the table above, so cutting the sweep to pay for it robs the fund to pay the fund. This error was made and caught on 26 Sep 2026.

   Checking balances (Ally Spending 0919, USAA 3694) remain a position line, not a goal — they swing thousands on paycheck timing and would otherwise move the number by most of a month without a dollar being saved.
2. **Cash flow, then spending flexibility for the coming week.** Two halves.

   **Position:** Ally Spending against posted card balances and pending charges. The question is not "is there cash" but "is the *right account* covered *in time*." Pull pending with `search_transactions` and `include_pending: true`; Chase balances generally already include pending authorizations, so report pending as a line to read, not a second subtraction.

   **Flexibility:** what is uncommitted between now and the next big draw.

   ```
   Ally Spending now
     + income landing before the draw
     − Sapphire Reserve (balance + the week's charges)
     − mortgage, HELOC, 529s, Apple Card if inside the window
     − Amazon Prime Visa, P. Baroco Jr and Amex Platinum autopays if inside the window
     − sweep, leases, other committed
     = position in Ally Spending
   then + USAA available (balance + MES arriving − ~$2,700 of USAA's own bills)
     = flexibility, and the transfer it requires
   ```

   **Every card that autopays from Ally Spending belongs in that list, not just the Reserve and Apple Card.** Three were missing until 21 Sep 2026:

   | Card | Autopay lands | Observed |
   |---|---|---|
   | Amazon Prime Visa 8838 | ~19th–21st | 7/20 $1,897.44 · 8/19 $381.67 · 9/21 $1,103.76 |
   | P. Baroco Jr 9176 (business) | ~17th | 7/17 $708.34 · 8/17 $510.18 · 9/17 $599.97 |
   | Amex Platinum 2001 | ~9th–10th | 7/9 $621.52 · 8/10 $875.65 · 9/9 $505.67 |

   **Apple Card, both cards, paid ~1st from Ally Spending.** The payment covers the prior calendar month's statement, so only charges made before month end reach it. Carry the larger of last month's combined payment and the three-month average. As of September 2026: 9/1 $1,238.45 (two payments, $666.68 + $571.77), 8/3 $1,945.68, 7/1 $2,045.27 (including $1,300 paid from USAA on 6/30). Average ~$1,743, carried as **~$1,750**.

   Amounts swing with the month's charges, so estimate from the current balance rather than the last payment. Check all three every week even when none falls inside the window — the window moves with the Reserve draw, and a window opening on a different day of the month will contain them.

   **Commit the Sapphire Reserve at its STATEMENT balance, never its current balance.** The autopay pays the statement balance, which is fixed once the statement closes. Committing the current balance double-counts every charge made since the close — those belong to next month's bill. On 21 Sep 2026 that error overstated the committed figure by **$8,118** and made an ~$11,000 week read as ~$2,900. The statement balance is not in Era; read it from Chase.

   **Two dates govern the card and they do different jobs:**

   | | | Decides |
   |---|---|---|
   | **Statement closes** | on or around the **7th** — verify each month | which bill a charge lands on |
   | **Payment draws** | on or around the **4th**, the due date | when the cash leaves Ally Spending |

   Observed draws: 7/6 $10,661.57, 8/6 $9,363.89, 8/31 $21,246.05 (the September cycle a few days early). The month-start stack (mortgage ~$4,259, HELOC $2,250, 529s ~$2,365, Apple Card ~$1,750) lands just before the draw, so the window runs to the *following* due date, not to month end. Getting this wrong makes a tight fortnight look like a comfortable week — and getting the statement balance wrong does the reverse, which is worse, because it invents a constraint that is not there.

   **The 529 stack is $2,365 from Ally Spending, drawn on the 2nd–4th:** two Prepaid529 contract payments ($973 and $767) plus seven Invest529 contributions ($200, $175, $75, $50 ×3, $25). A further $25 Invest529 goes from USAA. **Vincent's Prepaid529 payments end when he starts college, fall 2027** *(Patrick, 26 Sep 2026)*: a contract has to be paid in full before benefits can be drawn. **Vincent's is the $973 contract** *(Patrick, 26 Sep 2026)*; the $767 continues. Expected last payment by summer 2027; confirm the date in the Virginia529 account. After that the stack drops to ~$1,392. Prepaid529 covers tuition and mandatory fees only. **Room, board and books are paid from Vincent's Invest529** *(Patrick, 26 Sep 2026)*, so they are not a sinking-fund item. **Carry $500/month for Vincent on top of the Invest529 draws, from fall 2027** *(Patrick, 26 Sep 2026)*. Net change to monthly outflow: −$973 + $500 = **−$473**.

   **Two accounts, two jobs.** Ally Spending 0919 pays the Chase cards, mortgage, HELOC, leases, 529s and the sweep. USAA 3694 receives MES and pays insurance (twice monthly, ~$222.65), Shenandoah Valley Utility, FirstEnergy, Augusta County water, housekeeping checks (~$250, near-weekly), Invest529 and Venmo — about **$2,700/month**. **No standing transfer from USAA to Ally Spending** *(Patrick, 22 Oct 2026; MES is too variable)*. With MES carried at $3,500, each account roughly funds itself: Allison's and Eventus pay cover Ally Spending's commitments and the allowance, and the $3,500 covers USAA's own bills. MES above $3,500 refills the $2,000 MES buffer first, and anything beyond that moves to Ally Savings at the monthly review. A one-off USAA-to-Ally transfer happens only when the weekly cash guardrail shows Ally Spending short. (Before this, USAA's surplus was moved ad hoc, e.g. $6,500 on 9/8.)

   **Charges on the Reserve reduce flexibility dollar-for-dollar only when the window sits BEFORE the statement close.** Then the card is not a deferral, and saying so is the job. After the close — which is most of the month, roughly the 8th through the 4th — a new charge lands on the following month's bill and does not touch this window at all. State which side of the close the window is on before repeating either line. This governs cash timing only.

   **Spending is read as one total, never by card** *(Patrick, 1 Oct 2026)*. The weekly spending number counts every card and checking alike, so it is the only spending limit. Do not set per-card targets (an $8,500 target for the Reserve's ~10/7 close was retired on 1 Oct) and do not suggest moving charges from one card to another: that changes when the cash leaves, not what is spent.

   *From 27 Sep 2026 the week's headline and light come from the weekly spending number (section below). The flexibility arithmetic here remains the cash guardrail: it runs every week and overrides the light only when it goes red.*

   **Before 27 Sep, the week's light came from this table.** The flexibility table is the working, not the output. The output is one word with an action attached, measured against ordinary card spending for the window (~$1,000–1,500/week, so $2,500–3,500 over a typical sixteen-day cycle):

   | | Test | What it means |
   |---|---|---|
   | 🟢 **Green** | Above ~$10,000, and Ally Spending clears its own commitments with no transfer | Ordinary spending plus discretionary. The week to capture an expiring credit, book a trip, make a planned purchase. |
   | 🟡 **Yellow** | Positive but under ~$10,000, or a USAA transfer is needed to clear Ally Spending | Groceries, gas, bills as normal. No additions. Defer planned purchases to the next green week. |
   | 🔴 **Red** | At or below zero after all available cash is moved | Ordinary spending only, and something structural gives — name which: defer a purchase, delay the sweep, or draw on Ally Savings. |

   The ~$10,000 green threshold is about three times a window's ordinary spending, so one surprise does not flip the light.

   **Name the sensitivity before moving on.** Which single assumption, if wrong, moves the light. Usually it is whether the coming Eventus check is a base or a bump — the spread between them is larger than a typical week's flexibility.

   **Then test the light against what the coming week wants to spend on.** Expiring credits, prepaid bookings, planned purchases. A credit needing a net outlay to capture is a green-week item; a roughly break-even one is fine in yellow. A prepaid booking landing inside a tight window is usually the week's real decision, and saying so is the job.
3. **Tasks.** Finance tasks due, overdue, completed. Straight from Todoist.
4. **Flagged.** Filter to transactions *without* the `Recurring` tag. For each: recognize it? New subscription creeping in? Miscategorized? What's being hunted is **slow leakage**, not deliberate one-off purchases.
5. **One goal.** A single thing for the coming week. Not a list.

## The weekly spending number *(decided 27 Sep 2026)*

The week's headline is one figure: **what the household can spend this week, conservatively.** It covers everything bought on any card or from checking except the items listed below as outside it. Ordinary spending comes out of it first, and what remains is room for extras. The cash arithmetic in step 2 stays as a guardrail on timing and overrides the number only when it goes red.

**Conservative by design** *(Patrick, 27 Sep 2026)*. "My intention is to be conservative so I don't have to be anxious about something bad happening; then, if there is extra income (or lower expenses) we can decide what to do about it." The plan assumes a bad month: income at the floor, expenses at the top. It projects slow growth and expects to beat it, because most months nothing bad happens. **A month that beats the plan is not spent automatically.** The difference is measured at the monthly review and decided there (see Monthly). A tight number here means the design is working.

**Monthly allowance, October 2026: $10,500. November and December 2026: $10,100**, after the $400 home-maintenance set-aside starts. *(Revised 12 Oct 2026: home-maintenance set-aside from November takes Nov–Dec to $10,100. Revised 12 Oct 2026: MES carried at $3,500 with a $2,000 buffer, which took it from $9,200, effective October. Revised 27 Sep 2026: MES re-based, which took it from $12,600; then the Snowshoe property tax moved into the sinking fund, which removed October's $2,500 deduction.)*

| Conservative monthly income | |
|---|---|
| Allison, two checks at $5,539 | $11,078 |
| Eventus, bump ~$10,500 + base ~$6,400 (Q4, after the W-4 trim and the deferral stopping) | $16,900 |
| MES, carried at $3,500, backed by a $2,000 MES buffer in USAA | $3,500 |
| **Income** | **$31,478** |

| Monthly outflows outside the allowance | |
|---|---|
| Mortgage, HELOC, 529s | $8,874.34 |
| Kia leases | $1,232.61 |
| USAA insurance | $1,295.29 |
| Utilities (both houses), phones, housekeeping | $2,800 |
| Greenlight, Patreons | $62.47 |
| Sweep to Ally Savings | $3,600 |
| Home-maintenance set-aside, from November 2026 (moved with the sweep) | $400 |
| Q4 extra transfer to Ally Savings | $3,000 |
| Boosters | $100 |
| **Total** | **$20,964.71** (October); **$21,364.71** from November |

The allowance is $31,478 − $20,965 = $10,513, carried as $10,500, or about **$2,400 a week**, for October; from November $31,478 − $21,365 = $10,113, carried as $10,100, about **$2,330 a week**. Over the 31 days to 27 Sep a typical week ran about **$2,100** on the same basis, with an estimate for both Apple Cards included, which leaves roughly $300 a week for extras. July–September averaged higher, about $2,530 a week, so the margin is thin.

**MES is carried at $3,500 a month, backed by a $2,000 MES buffer kept in USAA** *(Patrick, 12 Oct 2026; replaces the two-lowest-months floor of $2,207 set 27 Sep)*. The floor guaranteed no bad month could break the plan, but it set the allowance far below how the household actually lives, and MES above it was being spent anyway. In the trailing twelve months only March, April and June came in under $3,500. The worst single shortfall was $1,431 (June) and the worst run $1,763 (March–April), both inside the buffer. Over the year MES paid ~$16,000 more than $3,500 a month would.

- **A month below $3,500** draws the shortfall from the buffer.
- **A month above $3,500** tops the buffer back up to $2,000 first; anything beyond that is surplus, moved to Ally Savings at the monthly review.
- **If the buffer is empty** and MES comes in short, the shortfall comes off that month's allowance.
- **Report the buffer** as one line in the weekly. It starts empty: October's $3,582.19 (10/8) put $82 in it, and the ~10/22 payment fills it.
- This buffer is for MES only. The early-bump-check float still runs from Ally Savings with no USAA buffer.
- Re-check the $3,500 against the trailing twelve at each quarterly.

Trailing twelve months to September 2026, by month received:

| | MES | | MES |
|---|---|---|---|
| Oct 2025 | $3,707.66 | Apr 2026 | **$2,345.86** |
| Nov 2025 | $4,194.38 | May 2026 | $4,967.36 |
| Dec 2025 | $6,262.54 | Jun 2026 | **$2,068.67** |
| Jan 2026 | $3,589.03 | Jul 2026 | $5,573.39 |
| Feb 2026 | $4,214.18 | Aug 2026 | $10,654.10 |
| Mar 2026 | $2,890.76 | Sep 2026 | $7,702.78 |

Trailing-twelve total **$58,170.71**, average $4,847.56 a month. Anything MES pays above $3,500, once the buffer is full, is surplus and is not spent by the allowance.

**The Q4 extra pay is split in half** *(Patrick, 27 Sep 2026)*. The W-4 trim and the stopped Eventus deferral lift take-home by about $6,000 a month from October to December, ~$17,900 in all. Half, **$3,000, moves to Ally Savings the Monday after each bump check** (12 Oct; 9 Nov, or 23 Nov if the directorship pay slips off the 11/6 check; 21 Dec, because the 12/4 check is planned as a base check under the early-month rule) and counts toward the surplus fund. The other half is inside the allowance. Releasing the whole of it would raise the allowance by $3,000 to ~$12,200 (~$2,800 a week). The deferral restarts and the W-4 resets in January, so **the Nov 20 quarterly sets the January–March allowance.** Without the extra pay, and with MES at $3,500, the allowance would be about $7,500 a month, before correcting the housekeeping line (see below), well below a typical month.

**Outside the number:** the fixed outflows in the table; card payments and transfers; home maintenance at either house (from November, paid back from the home-maintenance fund); sinking-fund items (Christmas and the Nov/Dec birthdays, the Snowshoe property tax, camp installments, the organizing project, Trident, ski passes, the ski trip, the remodel), which are paid back from Ally Savings.

**Inside the number:** everything else. Groceries, dining, gas, Amazon, subscriptions, copays and one-off purchases all count. An unplanned discrete purchase counts too: if it is not in the sinking-fund calendar, the allowance is what pays for it. **Business expenses count** *(Patrick, 30 Oct 2026)*: they are household cash on a household card; tag them `Business expense` for the Schedule C review, but they stay inside the number. Allison's reimbursed work travel (Enterprise rentals) is the exception and comes out.

**Setting the weekly figure on Sunday:** (the month's allowance − counted spending month-to-date) × 7 ÷ days left in the month. A week that crosses a month end takes each month's share by days. Underspending carries forward within the month, and overspending shrinks the rest of it.

**The light now describes the room for extras:**

| | Test | What it means |
|---|---|---|
| 🟢 **Green** | $500 or more of room for extras | Extras are fine up to the room. |
| 🟡 **Yellow** | Room under $500, spending still within the number | Ordinary spending and small extras only. |
| 🔴 **Red** | Spending past the week's number, or cash flexibility at or below zero | Ordinary spending only. Name what gives. |

**Soft spots.** MES is carried at $3,500, below its ~$4,850 average, with the $2,000 buffer absorbing the three months a year that fall short; the conservatism now sits here. The $10,500 bump check is a judgement haircut until the 10/9 stub separates the directorship line from base pay.

## Home maintenance *(decided 12 Oct 2026, starts November 2026)*

One budget for both houses: **$400 a month, $4,800 a year**, set aside outside the weekly number. Home repairs never count against the week, so a $900 plumber does not turn a week red.

- **Funding.** The $400 moves to Ally Savings with the monthly sweep, which becomes $4,000 from 15 Nov. It is held as a third figure inside the Ally balance, the **home-maintenance fund**, beside the sinking fund and the surplus fund, and is not part of either.
- **Paying.** Repairs go on any card. At the monthly review on the 1st, the month's home-maintenance charges are recorded against the fund with the other sinking-fund charges, and the fund falls by that amount. Money moves to Ally Spending only if it needs the cash (see the payback rule under Christmas below).
- **What counts:** repairs, service calls, pest control (Orkin), pressure washing, plumbers and electricians, hardware-store supplies for upkeep, at either house. **What does not:** household supplies (toilet paper, cleaning products), the meadow conversion, the remodel, and housekeeping or organizing.
- **Unspent money** rolls into the remodel fund at the annual review each January, an earmark inside the surplus fund for the 2031 remodel. A year that overspends the $4,800 draws on surplus and is named at the annual review.
- **Baseline:** Era shows only ~$2,600 of real repairs and upkeep in the twelve months to Sep 2026 (~$220 a month), including a $1,248 repair, Orkin, pressure washing and a plumber. The rest of that category was meadow seed and household supplies, filed in the wrong place.
- **Weekly report:** one line, "Home fund: $X".

## Solo 401(k) fund *(decided 22 Oct 2026)*

Cash to fund both 2026 solo 401(k)s is held in Ally Savings as a fourth figure, the **401(k) fund**, beside the sinking fund, the surplus fund and the home-maintenance fund, and part of none of them. Patrick, 22 Oct 2026: track getting this cash on hand, "even if we need to trim some things."

- **What it needs.** ~$39,500 for full funding: Allison's $24,500 deferral, her ~$9,000 employer share and Patrick's ~$6,000 employer share, more once the 2026 1099s are in because MES ran above plan. **Floor ~$7,500**: the contribution that keeps the trimmed W-4 inside the 90% safe harbor.
- **Why it is short.** `solo-401k-plan.md` funded the contributions from the W-4 trim and the stopped Eventus deferral, first ~$25,000 and now ~$18,800 (handoff §19). On 27 Sep half of that was released to the weekly allowance, so only the Q4 extra transfers are being saved.
- **Sources, in order.**
  1. The three Q4 extra transfers, $3,000 each: 10/10 (done), 11/9 or 11/23, 12/21. **Reassigned from the surplus fund on 22 Oct**, so the surplus figure drops by $3,000 now and $9,000 by 12/21. That is a relabel, not a miss.
  2. Each month's beat (see Monthly), by default, until the fund is full. Patrick confirms at each monthly review.
  3. MES above $3,500 once the MES buffer is full. This is already part of the beat; listed so it is not also sent to surplus.
  4. Trims to counted spending. Every $100 a week cut adds ~$430 a month.
- **Dates.** Allison's deferral election is **sized at the Nov 20 quarterly** against this fund and its projection, and signed by **Dec 31**: elect only what will be funded. Employer shares need no election and are sized at funding. Funding target Feb 15, 2027; hard deadline the 2026 filing date, Apr 15, 2027, or Oct 15, 2027 if the return is extended.
- **Projection, 22 Oct.** ~$9,000 from the Q4 extras plus October–December beats of ~$1,000–2,000 a month: **~$12,000–15,000 by year-end.** Full funding is not reachable on this structure without a surplus draw or deeper trims; that gap is the Nov 20 decision.
- **Weekly report:** one line, "401(k) fund: $X of ~$39,500 (floor $7,500)".

## Christmas and other sinking-fund charges *(decided 27 Sep 2026)*

Gifts are bought whenever convenient, on any card, and **never count against the weekly number.** The $7,000 [[Gift Budget 2026]] is funded by the sinking fund's $4,900 line plus a one-time $2,100 from surplus *(raised from $6,400 / $1,500 on 18 Oct 2026)*. From 2027 the line is $7,000 and there is no surplus draw.

- Tag every gift charge **`Christmas 2026`** in Era (`ftag_J8Hq6CR345v`). The tag covers Allison's and Marcus's birthdays too.
- On the 1st, at the monthly review, total the previous month's tagged sinking-fund charges and record them against the sinking fund. Camp installments and any other sinking-fund item follow the same rule. Recurring Todoist task, first run 1 Nov.
- **Move the money from Ally Savings to Ally Spending only when Ally Spending needs it to cover bills** *(Patrick, 2 Nov 2026)*. Run the cash guardrail without the payback first; if Ally Spending clears its commitments to the next Reserve draw, nothing moves and the amount stays in Ally Savings, carried by the surplus figure. The same holds for home-maintenance charges. The 1 Nov 2026 payback ($1,819.52 net of October's hospice) was recorded, not moved.
- **The sweep stays at $3,600.** Lowering it would move the same dollars but bury gifts inside ordinary cash flow, where their total cannot be seen.
- Each weekly review reports one line: **Christmas: $X of $7,000.** If it heads past $7,000, the Gift Budget's levers come first; moving Vincent's college gifts to his August birthday saves ~$1,510.

## Monthly — what it adds

**Confirm the Sapphire Reserve statement close date and due date against the actual statement.** They are recorded as ~the 7th and ~the 4th; both can shift with the calendar and neither is in Era. Everything in the weekly flexibility read hangs off them.

**Beat the plan.** For the closed month, measure how far reality beat the conservative plan:

```
  (MES received − $3,500 carry − buffer top-up)
+ (Eventus received − conservative Eventus)
+ (Allison received − $11,078)
+ (allowance − counted spending)
= beat (or shortfall)
```

A positive figure is money the plan did not count on. It stays where it landed until Patrick decides, at the monthly review, what it does: surplus fund, a sinking-fund item paid early, next month's allowance, or a checking buffer. **Until the 401(k) fund is full, the default is the 401(k) fund** *(22 Oct 2026)*; Patrick confirms or redirects it. A negative figure means the cushion absorbed a bad month, which is its job. Report it in one line either way, and never fold a beat into the next month's allowance without that decision.

Recompute the baseline against the closed month. Narrative rollup in the Logbook's shape. Category movement vs. prior month. Credit card position and unclaimed credits. Set next month's one or two goals. **Do not set targets here** — that is the quarterly's job.

## Quarterly — the block

The only review that sets numbers. Did the last block's targets hold; what is the position now; what are the next three months' sweep targets; what lumpy items are known to be landing (ski deposits, lodge trips, annual fees, tax dates); what structural decisions come due. Existing checkpoint cadence: **Nov 20, 2026** sets the Dec–Feb block.

## Annual — close-out

Tax close-out first (W-4 reset, safe harbor confirmation, CPA items, deduction position), then structural review (cards, leases, insurance, subscriptions), then the year's narrative. Sketches the coming year's four blocks at a high level only — targets still get set quarterly.

**2027 goal** *(Patrick, 12 Oct 2026)*: reduce other wasteful spending so the household can save better for experiences like the Spain trip. Every $100 a week cut from counted spending adds ~$5,200 a year to the surplus.

---

## Standing rules

- **Lead with the number, then the reasoning.** No hedging on anything checkable — pull the data.
- **When Patrick pushes back, re-check the source data before defending a prior answer.**
- Major purchases and travel are deliberate, discrete decisions. Categorize them accurately; do not moralize about them. He is not looking for permission or encouragement on spending.
- Prefer a rule or automation over a recurring decision. If the same judgement call appears in two consecutive reviews, it should become an Era automation rule or a Todoist task instead.
- Carry unresolved flagged items forward explicitly. Do not let them vanish between weeks.
- **Carry every estimate at its conservative end** *(Patrick, 25 Sep 2026)*. For money going out, use the higher figure: for a recurring payment, the larger of the last actual and the three-month average. For money coming in, use the low end of the observed range. A windfall beats a shortfall. This applies only to *estimates*. A known figure, such as the Reserve statement balance, is carried as known. Padding a known number invents a constraint, which is the $8,118 error above.

---

## Todoist

Finance tasks live in the **Personal** project (`6V99GpCcvP5f67Cc`) alongside meal prep and household items. The review cadence itself is driven by four recurring tasks:

| Task | Recurrence |
|---|---|
| Weekly finance review | Every Sunday |
| Monthly finance review | Every month on the 1st |
| Quarterly finance review — set the next 3-month block | Feb 20, May 20, Aug 20, Nov 20 |
| Annual finance review | Every January 5 |

**The weekly review runs itself from 22 Nov 2026** *(Patrick, 16 Nov)*. A scheduled task, "Sunday finance review", fires Sundays ~3:40pm ET: it writes both weekly notes and the app state as provisional, marks assumption-dependent lines *(pending)*, and messages Patrick up to six questions. His replies in that session finalize the notes, the app and Todoist; unanswered items stay as assumed.

The pre-existing **"Weekly spending review"** task was folded into the weekly review rather than duplicated — its leakage-hunt instructions are step 3 above.

---

## Spend Check app *(added 26 Sep 2026; rebuilt 27 Sep 2026)*

A Home Screen web app for Patrick and Allison: https://claude.ai/artifact/EZRD5Ck47WJaXCW7gjEeip. It shows what is left to spend this week and the room for extras, answers "can we buy it?", records unavoidable payments, and tracks Christmas against the $7,000 budget. It reads a small database that Claude maintains with the `ArtifactData` tool.

**Three kinds of entry:**

- **Can we buy it?** Yes if the amount fits inside the room for extras: the week's number minus the larger of counted spending so far and the $2,200 ordinary hold-back, minus unreconciled entries. Asking records nothing; "We bought it" records it.
- **We have to pay** (school fee, repair). Recorded at once and taken off the week. If it takes spending past the week's number, the week turns red.
- **Christmas gift.** Recorded against the $7,000 gift budget, never against the week.

**Database:** `state/current` is written only by Claude: week, weekLabel, light, lightReason, weekBudget, spentThisWeek, holdbackPerWeek (2200), monthLabel, monthAllowance, monthSpent, christmasBudget (7000; was 6400 until 18 Oct 2026, the next Sunday review sets it), christmasSpent, flexibility, windowEnd, note, asOf, updatedBy. `entries/*` are written by the family: `{week, kind: "discretionary"|"mandatory"|"christmas", amount, note, at, reconciled}`. Claude only ever sets `reconciled`/`matchedTo` on an entry: a weekly entry once its charge is inside `spentThisWeek`, a Christmas entry once its charge carries the `Christmas 2026` tag and is inside `christmasSpent`.

**Who updates it:** the daily cash check (Mon–Sat) refreshes spentThisWeek, monthSpent, christmasSpent, flexibility and the light each morning. **The Sunday review sets the new week** as its last step: week, weekLabel, weekBudget, light and reason, monthLabel/monthAllowance/monthSpent, spentThisWeek 0, and the cash flexibility and windowEnd from the forward half.

The app flags its numbers as stale after 48 hours.
