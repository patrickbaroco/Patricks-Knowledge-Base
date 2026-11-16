Week of {{Month D}}–{{D, YYYY}}

> [!note] Forward half, written {{date}} at the {{prior week}} review
> A weekly note is named for the week it covers. This is the forward half for this week; the review of this week gets appended below it next Sunday. The retrospective for the week just ended is at [[{{prior week's note}}]].

## You can spend this week

**${{X}}**, conservatively. Ordinary spending first (~$2,200), then **${{Y}} of room for extras.** {{🟢 **GREEN WEEK** / 🟡 **YELLOW WEEK** / 🔴 **RED WEEK**}}

*Emit exactly one of the strings `GREEN WEEK`, `YELLOW WEEK` or `RED WEEK`, here and nowhere else. The daily check greps for it. Green: room ≥ $500. Yellow: room under $500. Red: past the week's number, or cash flexibility ≤ 0.*

| {{Month}} | |
|---|---|
| Allowance | ${{A}} |
| Counted spending to date | ${{S}} |
| Left for the month | ${{A−S}} |
| Days left in the month from Monday | {{D}} |
| **This week: left × 7 ÷ days** | **${{X}}** |

**Christmas: ${{C}} of $7,000** (Era tag `Christmas 2026`). Gifts are outside the weekly number and are paid back from Ally Savings on the 1st.

## Position

Spending Account against what is owed on the cards, as of the review.

| | |
|---|---|
| Ally Spending 0919 | |
| USAA Checking 3694 | |
| **Cash on hand** | |
| Sapphire Reserve — current | |
| Sapphire Reserve — **statement balance due ~the 4th** | |
| Amazon Prime Visa | |
| Amex Platinum | |
| P. Baroco Jr (business) | |
| Sapphire Preferred | |
| **Posted card balances** | |
| Pending, not yet posted (N charges) | |
| **Headroom** | |

> Is Ally Spending alone enough to cover the Sapphire Reserve **statement balance**? The Reserve is paid out of Spending. Its statement closes on or around the **7th** (verify each month) and the payment draws on or around the **4th** — the close decides which bill a charge lands on, the due date decides when the cash leaves. The statement balance is not in Era; read it from Chase.

Chase balances generally already include pending authorizations, so do not subtract pending twice. Note posted-only headroom as well.

| Income | When | Expected |
|---|---|---|
| Eventus payroll | biweekly Friday | base or bump — check which |
| Allison, Dept of Health | ~12th–14th and ~28th–29th | ~$5,540 |
| MES → USAA | ~8th and ~22nd–24th | |
| Hospice → Ally Savings | monthly | $2,500 |

## Spending flexibility, week of {{dates}}

**Cash guardrail:** flexibility ${{F}} through {{date}}. {{Clear / RED: name what gives}}. Only a red cash position overrides the light above.

*Do not repeat the light string here.*

### The arithmetic

Not what is in the account — what is uncommitted between now and the next big draw. The Sapphire Reserve draws on its due date, ~the 4th, and the month-start stack lands just before it, so the window runs to the following due date rather than to month end.

**Commit the Reserve at its statement balance.** Committing the current balance double-counts charges that belong to next month's bill — a $8,118 error on 21 Sep 2026, which turned an ~$11,000 week into an apparent ~$2,900 one.

| Through ~{{next draw}} | |
|---|---|
| Ally Spending now | |
| + income landing before the draw | |
| **Available** | |
| − **Sapphire Reserve statement balance** (fixed, not the current balance) | |
| − Mortgage, ~1st–3rd | |
| − HELOC, ~1st | |
| − 529 contributions, ~2nd | |
| − Apple Card payments, ~1st (both cards; larger of last payment and 3-mo avg) | |
| − Amazon Prime Visa autopay, ~19th–21st | |
| − P. Baroco Jr autopay, ~17th | |
| − Amex Platinum autopay, ~9th–10th | |
| − Kia EV9 ~16th, Kia EV6 ~25th | |
| − sweep, boosters, other committed | |
| **Committed** | |
| **Position in Ally Spending** | |

**Every card autopay in that list is a real draw on Ally Spending.** Include the line only when its date falls inside the window, but check all of them every week — the window moves, and the three card autopays were missing from this list until 9/21.

| USAA | |
|---|---|
| Balance | |
| + MES arriving | |
| − USAA's own bills (~$2,700/mo: insurance ×2, utilities, housekeeping, Venmo) | |
| **Available** | |

> **Flexibility = $X across both accounts**, requiring a transfer of $Y from USAA to Ally Spending.

**Charges on the Reserve reduce cash flexibility dollar-for-dollar only when the window sits before the statement close (~the 7th).** After the close a new charge lands on the following month's bill and does not touch this window's cash. Say which side of the close the window is on.

**Spending is read as one total, never by card.** The weekly number counts every card and checking alike, so it is the only spending limit. Do not set per-card targets or suggest moving charges from one card to another: that changes when the cash leaves, not what is spent.

**Name the sensitivity.** Which single assumption, if wrong, moves the light — usually whether the coming Eventus check is a base or a bump.

### The cash bands (guardrail; before 27 Sep these set the light)

| | Test | What it means |
|---|---|---|
| 🟢 **Green** | Flexibility above ~$10,000, and Ally Spending clears its own commitments with no transfer | Ordinary spending plus discretionary. The week to capture an expiring credit, book a trip, make a planned purchase. |
| 🟡 **Yellow** | Flexibility positive but under ~$10,000, or a USAA transfer is needed to clear Ally Spending | Groceries, gas, bills as normal. No additions. Defer planned purchases to the next green week. |
| 🔴 **Red** | Flexibility at or below zero after all available cash is moved | Ordinary spending only, and something structural gives — name which: defer a purchase, delay the sweep, or draw on Ally Savings. |

Then check the light against anything the coming week wants to spend on: expiring credits, prepaid bookings, planned purchases. A credit that needs a net outlay to capture is a green-week item; a roughly break-even one is fine in yellow.

### What {{colour}} means this week specifically

-

## Daily checks

Appended Mon–Sat on yellow and red weeks only. One line each: date, Ally Spending, Reserve balance, position against the next draw, and whether it is better, holding or worse than the weekly review. A line that changes the light says so.

Baseline set at the review: Ally Spending **$X**, Sapphire Reserve **$X**, position **$X**, flexibility **$X**.

-
