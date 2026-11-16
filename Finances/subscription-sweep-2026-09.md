Subscription sweep — 6 September 2026

Apple-billed subscriptions were reviewed and cancelled separately. **This covers everything billed directly to the cards, which Apple's subscription screen does not show.** Era's `list_recurring_charges` found 13 items and missed most of these; the list below was built from actual transactions.

**FINAL: $1,170.15/yr — $97.51/month.** Full tally at the end of this note. Original confirmed list was $1,675/yr; see the corrections and second pass below, and note the Baltimore Sun's $467 **was already cancelled before this sweep began — confirmed 11 Sep** (see below).

---

## Start here

- [x] **The Baltimore Sun — $35.96 every 28 days, $467.48/yr. RESOLVED 11 Sep 2026: the cancellation took.** No charge landed in the 7–10 Sep window, so the subscription had already been cancelled on or after 10 Aug — before this sweep began. Nothing further to do. *(Original entry follows, kept for the reasoning.)* Charges run 5/18, 6/15, 7/13, 8/10 on the Sapphire Reserve — exactly 28 days apart, so **the next one is not due until about 7 September**. Patrick believes he may have cancelled on or after 10 August. Nothing in the data can distinguish "cancelled" from "not yet due," and an earlier note here wrongly claimed it was still billing — that was reading the last charge date as evidence of an active subscription, which it is not. No cancellation confirmation email exists, but phone and chat cancellations often don't send one; the e-Edition still delivers daily, but that continues for lapsed subscribers too. **Check around 7–10 September: a charge means it didn't take; silence past ~10 Sep means it did.** Largest single item on the list either way.
- [ ] **New York Times — was $9.50, now $16.00, $208/yr.** Rose 68% in June with no change in service. Even keeping it, this is worth a retention call — the discount rate almost certainly still exists.

## Confirmed recurring

| | Each | Per year | Cadence |
|---|---|---|---|
| The Baltimore Sun | $35.96 | **$467.48** | every 28 days — *cancelled; confirmed 11 Sep, no charge landed* |
| New York Times | $16.00 | **$208.00** | every 28 days |
| Disney+ | $189.99 | **$189.99** | annual, 8/8 |
| Spotify | $12.99 | $155.88 | monthly, 24th |
| Kindle Unlimited | $11.99 | $143.88 | monthly, 18th |
| Hatch Magazine | $10.00 | $120.00 | monthly, 2nd |
| OnlyFans | $9.50 | $114.00 | monthly, 13th |
| Kitchen Lab Newsletter | $8.00 | $96.00 | monthly, 3rd — **CANCELLED 6 Sep**, verify after ~3 Oct |
| Messagebox (Dan Pfeiffer) | $7.00 | $84.00 | monthly, 25th — **CANCELLED 6 Sep**, verify after ~25 Sep |
| Lexicon Valley | $5.00 | $60.00 | monthly, 28th |
| Common Sense Plus | $3.00 | $36.00 | monthly, 16th |
| | | **$1,675.23** | |

## Unconfirmed cadence — one charge seen

Era's usable history runs back only to about mid-May, and the Apple Card is imported for July–August only. Each of these appeared once, so they are annual, irregular, or monthly with too little history to tell. **The July group did not repeat in August**, which points to annual rather than monthly.

| | Amount | Seen |
|---|---|---|
| Stoic | $80.00 | 8/27 |
| Scientific American | $62.13 | 8/21 |
| Alison Roman | $50.00 | 7/4 |
| Fable Home | $40.00 | 8/18 — a rule already flags this as a subscription |
| Down Dog app | $39.99 | 7/19 |
| Google One | $9.99 | 8/21 — if monthly, $119.88/yr |
| crooked.com | $9.99 | 7/22 |
| WTFJHT Newsletter | $7.00 | 7/27 |
| Vox Membership | $5.00 | 7/21 |
| Remarkable Ops | $3.99 | 7/19 |
| | **$308.09** | if all annual |

## Not on the list, and why

- **Obsidian — $271.94 across four charges Jun–Aug.** Tagged Business expense, so it is deductible against the 1099 income and is the tool this whole system runs in. Three charges in June is odd and worth a glance, but this is not a cancel candidate.
- **Apple Services — ~$304/mo, ~$3,650/yr.** Handled separately. **Check the September and October Apple totals against $304** to see how much the cancellations actually removed — that is the only way to confirm they took, and it is the same failure mode as the Baltimore Sun.
- **Charitable giving** (~$10,900/yr) — intentional and deductible. Not a subscription.
- **Kindle, two further August charges** — $4.99 on 8/13 and $9.99 on 8/7, separate from Kindle Unlimited. Likely book purchases rather than subscriptions; worth confirming.

## Method note

Do not trust `list_recurring_charges` for this. It reported 13 items, missed the Baltimore Sun's true cadence, called Spotify quarterly when it bills monthly, and filed Disney+ under Utilities. Everything above came from `search_transactions` on individual merchants plus the `Recurring` tag.


---

## Spotify — why it kept charging (traced 6 Sep)

The account is **pbaroco2@gmail.com**; every Spotify email goes there, including a *"You've canceled your Spotify subscription"* notice on **18 Jan 2026** effective 24 Jan. Charges continued anyway on the 24th of each month.

A second attempt went through **Rocket Money on 18 July**. It stalled: "cancellation is blocked, we need more info" on 31 Jul, 1 Aug, and a **final notice on 6 Aug**. All three are still unread, and they went to **pbaroco2@icloud.com** rather than Gmail — which is why they were missed. The request expired; the 24 Aug charge landed as usual.

Next step is spotify.com/account/subscription logged in as pbaroco2@gmail.com (login code by email, no password). If it shows Premium, cancel there. If it shows Free, a second account exists and Spotify support can locate it from the card's last four plus the charge dates.

## Standing lesson

Two subscriptions, two indirect cancellation attempts, neither verified afterward. **A cancellation isn't done until a billing cycle passes with no charge.** Every cancellation from this sweep gets checked one cycle later — that is what the November re-sweep is for, and why each row above records its cadence.


---

## Cancelled 6 September — all Substack

Prices below are from **actual payment receipts**, not list prices.

| Publication | Price | Cadence | Last receipt |
|---|---|---|---|
| Silver Bulletin (Nate Silver) | $10/mo — **$120/yr** | monthly, 28th | 8/28/26 |
| Kitchen Lab | $8/mo — **$96/yr** | monthly, 3rd | 9/3/26 |
| The Message Box (Dan Pfeiffer) | $7/mo — **$84/yr** | monthly, 25th | 8/25/26 |
| Fallow — *"Recipes like a chef"* | **$70/yr** | annual, renews 12 Apr 2027 | 4/12/26 |
| David Lebovitz Newsletter | **$50/yr** | annual, renews 2 May 2027 | 5/2/26 |
| Slow Boring (Matt Yglesias) | **$80/yr** | annual | receipts stop 2022; Patrick confirms $80/yr and active |

**Confirmed saved: $500/yr.** (Receipts for Slow Boring stop in 2022 at $89/yr — Patrick confirms the current rate is $80/yr and the subscription was live, so its renewal receipts were going somewhere not captured here. Another instance of the receipt-visibility problem below.)

**Watch The Message Box.** A Substack email arrived 6 Sep at 23:33, minutes after cancelling: *"Your subscription has been extended by 31 days."* That is a retention extension, so it likely runs to about 25 Oct rather than stopping now. Verify no charge after that date.

## Still active — surfaced from receipts, not from memory

| Publication | Price | Renews | Decision |
|---|---|---|---|
| The Bulwark | $100/yr | 29 Apr 2027 | **Keeping** — deliberate |
| Family Friend by Lukas Volger | $60/yr | 2 May 2027 | **Undecided** |

Neither came up when listing subscriptions from memory. Both are annual, both renewed late April / early May 2026 — exactly the Jan–May window Era cannot see. The predicted blind spot, confirmed with names.

**No deadline on the Volger decision.** Substack annual subscriptions run to the end of the paid term when cancelled, so cancelling now still gives access through 2 May 2027 — identical money either way. The only argument for deciding now rather than in April is that April decisions get forgotten.

Free (no action): The Psychiatry Letter, Smallmouth Army, Lapham's Quarterly.

## Root cause — the reason none of this was visible

**Every Substack receipt goes to `pbaroco2@icloud.com`, and almost all of them are unread.**

That is the same address where the Rocket Money Spotify cancellation emails — "blocked, need more info", then a final notice — sat unread until they expired. It is an address receiving all subscription and billing mail that is not being monitored.

Fixing that is worth more than any single cancellation on this list. Options: forward it into the Gmail inbox that is actually read, or set a filter that labels anything containing "receipt", "renew" or "subscription" and surfaces it at the weekly review.

Also found: **a card decline on 27 Apr 2026** — "Your payment for The Message Box was unsuccessful", MasterCard ending 6462 — resolved the following day. Worth knowing which card that is, since a decline on one subscription usually means the same card is stored on others.

## PayPal — resolved 6 Sep from the app

**PayPal is a payment rail: Era records only `PAYPAL PURCHASE` with no merchant, so nothing billed through it appears in any Era-based sweep.** That is why the Substacks never surfaced. Identified from the PayPal activity screen:

| Charge | What it is | Per year | Status |
|---|---|---|---|
| $26.99, ~13th | **Netflix** | $323.88 | **moved to Sapphire Reserve 6 Sep** ✓ — and downgraded to Standard, $239.88/yr |
| $26.99, ~20th | **YouTube Premium** | $323.88 | **moved to Amex Platinum 6 Sep** ✓ |
| $9.47, ~1st | **Patreon** | $113.64 | live |
| $3.00, ~1st | **Patreon**, second pledge | $36.00 | live |
| $9.99, ~23rd | unknown | — | **stopped after 7/23 on its own** |
| $100, ~15th | GiveDirectly | $1,200 | intentional charity |
| $50, 8/18 | Project Healing Waters | ~$50 | intentional charity |

**Correction to an earlier flag in this note.** Three $26.99 monthly charges existed and I raised the possibility of a duplicated YouTube subscription. There was none — the charges were Netflix, YouTube, and nothing else. Netflix and YouTube Premium simply cost the same. Recorded so the November review does not re-open it.

**Netflix — KEEPING, decided 6 Sep.** The boys use it heavily. Not a leak; a real subscription that had simply never been reviewed because PayPal concealed the merchant name.

**Tier: DOWNGRADED to Standard 6 Sep — $84/yr saved.** Was **Premium, $26.99/mo**. US tiers as of Sep 2026:

| | Price | Streams | Quality |
|---|---|---|---|
| Standard with ads | $8.99 | 2 | 1080p |
| Standard | $19.99 | 2 | 1080p |
| Premium *(current)* | $26.99 | 4 | 4K + HDR |

**Standard saves $84/yr.** The ads tier saves $216/yr but is ruled out — Patrick has stated ads are a dealbreaker (established during the Pocket Casts decision).

Moved to **Standard, $19.99/mo** — 2 streams, 1080p, no ads. The ads tier was ruled out on principle.

**Verify ~13 Sep:** Netflix bills through PayPal around the 13th. The next charge should read **$19.99, not $26.99**. If it still reads $26.99 the change did not take effect this cycle.

**The two Patreon pledges may be business expenses, not cancel candidates.** Gmail shows a Curbsiders Internal Medicine Podcast Patreon. If either pledge is Curbsiders or similar professional education, it carries the same argument that already has Obsidian tagged `Business expense` and deductible against the 1099 income. **Raise with the CPA rather than cancelling.**

**Moving YouTube to the Amex should now capture the $300 Digital Entertainment Credit.** The 8/18 Amex charge is the first to verify — existing Todoist task, due 20 Sep. Until confirmed, the handoff's assumption that the Platinum is net positive rests partly on a credit that was not actually being captured.

**Method correction:** the confirmed total at the top of this note is a **floor, not a ceiling.** It covers only what Era can attribute to a merchant. Excluded from it are (a) everything behind PayPal, ~$917/yr, (b) anything billed Jan–Jun on the Apple Card, which is imported for July–August only, and (c) anything annual that last billed before Era's history begins in mid-May.


---

# Second pass — Gmail renewal notices (6 Sep)

Searching Gmail for renewal and receipt notices found **eleven subscriptions that appear in no Era sweep**. Renewal notices are the single most productive source found so far: they name the service, the price and the renewal date, and they arrive regardless of which card or rail the charge runs on.

## New — price confirmed

| | Each | Per year | Renews |
|---|---|---|---|
| The Daily Stoic Premium | $80.00 | **$80.00** | annual — renewed 27 Aug |
| Scientific American | $62.13 | **$62.13** | annual — mid Aug |
| Fly Fusion Streaming | C$59.95 | **~$44** | annual — **22 Sep** |
| Pocket Casts Plus | $39.99 | **$39.99** | annual — **CANCELLED 6 Sep**, downgrading to free tier |
| | | **$226.12** | of which $39.99 now cancelled |

**fiome — already cancelled, do not re-flag.** Initially listed here at $383/yr. It is not live. Renewal notices ran monthly (16 Mar, 15 Apr, 15 May, 14 Jun) and then stop — no July, August or September notice. On **15 Jun at 13:41** a Recharge subscription-management login code was sent, one day after the 14 Jun notice warning of a 17 Jun charge. That login is the cancellation. Last possible charge 17 Jun 2026. Era cannot see fiome at all, so the email trail is the only record.

**The Daily Stoic identifies the mystery $80 "Stoic- Backyard Ventur" charge** from 27 Aug, which was sitting in the unconfirmed-cadence table. It is annual, not one-off.

**Two renew within the month — decide before they bill:** Fly Fusion on 22 Sep, Pocket Casts on 30 Sep.

## New — price still to establish

ChefSteps Studio Pass · OYLA magazine · Mountain Gazette annual print

**LARQ and Kia Connect — both CANCELLED, see below.**

### LARQ — cancelled 6 Sep
$31.54 charged **5 Sep**, one day before cancelling, so that charge stands. **Not monthly**: LARQ appears exactly once in the 68 days of the Jul 1 – Sep 6 Apple Card export. Filter refills are typically quarterly, which would put it near **$126/yr**, but a single observed charge cannot confirm cadence.

### Kia Connect — cancelled ~23 Aug
*Remote Smart Parking Assist*, monthly, on the EV9. Last renewal confirmation **28 May 2026**. **Kia never states the price in any renewal email**, so the saving cannot be valued from mail alone — it would appear on a card statement around the 28th.

## Not cancel candidates

- **ACP membership** — auto-renewed, $605 charge on the Sapphire Reserve. Professional body, near-certainly deductible against the 1099 income. **Raise with the CPA**, alongside Obsidian and the Patreon pledges.
- **ACLS / PALS / BLS / NRP recertification** — mail is marketing, not active subscriptions. Professional requirement regardless.
- **AGS membership** — already expired 18 Jun 2026. No cost. Worth knowing if it was meant to lapse.

## Method correction — renewal notices prove existence, not currency

Two items on this sweep were flagged as live when they had already been handled: the Baltimore Sun (called "still billing" when the next charge was simply not yet due) and fiome (listed at $383/yr when it had been cancelled in June).

Both errors share a cause: **reading the presence of billing signals as evidence of an active subscription.** The informative signal is the opposite — a regular series that *stops*. fiome's monthly notices ending after 14 June is what proves cancellation; the Baltimore Sun's 28-day cadence is what shows no charge was yet due.

**Rule for the next sweep: for every candidate, establish the cadence first, then check whether the series continues to the present.** A subscription is live only if a charge or notice has landed within one full cycle of today. Anything else is unresolved, not active.

## Method note — add to the review

`list_recurring_charges` found 13 items. The Era transaction sweep found ~20. **Gmail renewal notices found 11 more that all of them missed.** Any future sweep should search Gmail for `subject:(renew OR renewal)` and `subject:receipt` over the prior year, because that catches subscriptions billed through rails Era cannot attribute — PayPal, Apple, foreign currency, and anything paid from a card not linked.


## Pocket Casts Plus — researched 6 Sep

**Requirements stated: a queue, and no ads. The free tier meets both.**

Pocket Casts' free tier includes the **Up Next queue with cross-device sync**, and Pocket Casts monetises through Plus rather than advertising — the free tier is not ad-supported. Downgrading keeps the library, subscriptions and listening history intact. **No migration, both requirements met, $39.99/yr saved.**

What Plus actually adds: folders, bookmarks, extra themes and app icons, cloud file uploads. **Folders are the only one worth checking** — if Curbsiders and RLR are organised into folders, that is the real cost of downgrading. The rest is cosmetic.

Pocket Casts also made its **web player and desktop apps free in 2025**, so a former Plus draw is already gone from the paid tier.

**Overcast was considered and rejected**: its free tier carries visual ads, so it fails the no-ads requirement, and removing them requires a paid subscription. Apple Podcasts is a viable free alternative (queue, no ads, transcripts) but carries migration cost for no gain.

**Legacy pricing note:** subscribers from before April 2023 pay $14.99/yr. Patrick is on the current $39.99 rate, so no legacy discount applies.

**CANCELLED 6 Sep.** Plus access runs to 30 Sep, then reverts to the free tier — queue and ad-free listening both retained. **Verify no charge after 30 Sep.**


## Three ways subscription mail goes unseen

Every blind spot found on 6 Sep traces to one of these. Together they explain why six Substacks, Netflix, and eleven renewal-notice finds escaped every sweep until now.

1. **Receipts go to `pbaroco2@icloud.com` and sit unread.** Every Substack receipt, and the Rocket Money Spotify cancellation notices that expired unanswered.
2. **PayPal hides the merchant.** Era records only `PAYPAL PURCHASE`; Netflix, both Patreon pledges and ~$917/yr of charges were unattributable until read from the PayPal app directly.
3. **A Clean Email screener holds sender mail.** LARQ has no renewal history in the inbox because their mail was held pending review through late May and June — the "review new screened senders" digests are themselves unread.

**Fixing these is worth more than any individual cancellation**, because they are why the sweep had to be reconstructed from six different sources. Minimum viable fix: forward the iCloud address into the inbox actually read, and clear or disable the screener for billing senders.


## LMNT and SodaStream — resolved 6 Sep

### LMNT — paused 27 Jul, **fully CANCELLED 6 Sep**
Renewal reminder 26 Jul 21:00 for a 29 Jul charge; **"Your LMNT subscription has been paused"** arrived 27 Jul at 00:14, three hours later and two days before the charge. Nothing since but marketing. Last order #8347867, placed 29 May.

**Paused was not cancelled** — the pause email offered a "Re-activate" path, so the billing agreement persisted. Converted to a full cancellation on 6 Sep. Price never appears in any LMNT email, so the annual value is unestablished.

### SodaStream — no active subscription exists
Every SodaStream email is win-back marketing — *"Subscribe now and get back to bubbly"*, *"Your SodaStream is missing you"*, *"Remember why you subscribed in the first place?"* There are **no receipts, renewal confirmations or order confirmations** in the mailbox. Patrick is being marketed to as a lapsed customer. **Nothing to cancel, $0 saved.** Remove from the candidate list.

### Security note — two spoofed SodaStream emails
`sodastream@sparklingprotect.shop` (10 Aug) and `ytshortsacount002@261808359.mailchimpapp.com` (11 Aug), both offering "$30 for you". Genuine SodaStream mail comes from `shop.sodastream.com`. These are brand-impersonation phishing. Do not action the offers. Their arrival alongside real marketing is a further argument for cleaning up the iCloud inbox.


## PayPal blind spot — CLOSED 6 Sep

Everything behind the rail is now accounted for, and the two large opaque charges have been moved off it.

| | Status |
|---|---|
| GiveDirectly $100/mo | Stays on PayPal — required. Already rule-tagged as charity in Era, so opacity costs nothing |
| Project Healing Waters ~$50 | Intentional charity |
| Patreon $9.47/mo | **Curbsiders** — professional education. Rule `Curbsiders Patreon is a business expense` created 6 Sep, tagged `Business expense`, categorised Education, 12 transactions retagged. **$113.64/yr for the CPA list** |
| Patreon $3.00/mo | **Smarter Every Day** — personal. Rule created, renamed and categorised, 11 transactions. $36/yr, keep or cancel as preferred |
| YouTube Premium $26.99/mo | **Moved to Amex Platinum** — captures the $25/mo digital entertainment credit |
| Netflix | **Moved to Sapphire Reserve** — now reads as `NETFLIX` in every future sweep instead of `PAYPAL PURCHASE` |
| $9.99/mo, ~23rd | Lapsed on its own after 23 Jul; never identified |

**Netflix was moved for visibility, not rewards.** Neither card carries a streaming multiplier and Netflix is not eligible for the Amex digital entertainment credit — its eligible list is Disney+, ESPN+, Hulu, Paramount+, Peacock, NYT, WSJ and YouTube Premium/TV/Music. The gain is that it now appears by name in any sweep, which is exactly the failure that hid it for months.

**The Amex credit is already fully optimised — do not restructure it.** It is $25/month, use-it-or-lose-it. YouTube Premium at $26.99/mo exceeds the cap by itself, so one charge maxes $300/yr. Disney+ ($190/yr) and the NYT ($208/yr) are both on the eligible list and both sit on the Sapphire Reserve, but moving them to the Amex would capture nothing extra. This was set up correctly before this sweep began.


---

# Final tally — 6 September 2026

| | | Per year |
|---|---|---|
| LMNT | $60 quarterly | **$240.00** |
| Kia Connect — Remote Smart Parking | $15/mo | **$180.00** |
| LARQ filter refills | $31.54 quarterly | **$126.16** |
| Silver Bulletin | $10/mo | $120.00 |
| Kitchen Lab | $8/mo | $96.00 |
| The Message Box | $7/mo | $84.00 |
| Slow Boring | annual | $80.00 |
| Fallow | annual | $70.00 |
| David Lebovitz | annual | $50.00 |
| Pocket Casts Plus | annual | $39.99 |
| **Cancelled** | | **$1,086.15** |
| Netflix Premium → Standard | $26.99 → $19.99/mo | $84.00 |
| **TOTAL** | | **$1,170.15** |

$97.51/month; **0.45% of the ~$21,600/mo operating baseline.**

**The three largest were the three that could not be priced from email** — LMNT, Kia Connect and LARQ, $546 between them, more than all six Substacks combined. None of them states a price in any renewal notice. Where a merchant does not put the amount in writing, the amount has to come from the card statement or the account page; do not assume small.

**Not counted, deliberately:**
- **SodaStream** — no active subscription existed. All mail was win-back marketing.
- **fiome** ($383/yr) — cancelled June 2026, before this sweep.
- **The Baltimore Sun** ($467/yr) — **confirmed cancelled 11 Sep**: no charge landed in the 7–10 Sep window. The largest single item of all, but the cancellation predates this session, so it stays out of the $1,170.15 figure. Real-world recurring spend is $467.48/yr lower than that number implies.

**Kept deliberately, recorded so they are not re-flagged:** Netflix (family use, downgraded not cancelled) · The Bulwark $100/yr · Curbsiders Patreon $113.64/yr (business expense, tagged) · ACP membership $605 (professional, likely deductible) · Obsidian (business expense) · charitable giving.

**Undecided:** Family Friend by Lukas Volger $60/yr, renews 2 May 2027 — no deadline pressure, Substack annuals run to term.


---

# Weekly check — 12 September 2026

**Proven gone:** Baltimore Sun. 28-day cadence put the next charge at 9/7; nothing posted through 9/11.

**Not yet due:** Netflix ($19.99 on the Sapphire Reserve expected ~9/13–14; a PayPal $26.99 instead means the move failed), YouTube on Amex ~9/18–20, Fly Fusion 9/22, Spotify 9/24, Message Box 9/25, Kia Connect and Silver Bulletin 9/28, Pocket Casts 9/30, Kitchen Lab ~10/3.

**Recurring charges that were not in the 6 Sep inventory:**

| | Amount | Cadence | Resolution |
|---|---|---|---|
| Alexa Skills | $19.99, 9/8, Amazon Visa | first seen | Was filed as a card payment (merchant parsed as "Chase"). Rule `Alexa Skills is a subscription` created 9/12 — Entertainment, tagged Recurring. **Still unidentified — which skill?** |
| Amazon Prime add-on | $4.99, 7th of month | Jun–Sep, monthly, ~$60/yr | Prime Video channel, untagged. Identify and decide. |
| Mimestream (via Paddle) | $49.99, 9/6, Sapphire | annual | **Personal, not business** — Patrick 9/12. Keep off the CPA list. |
| Tease Inc | $45–$152, roughly monthly, $684 since Jan | | **Haircuts** — Patrick 9/12. Rule `Tease Inc is haircuts` created; 8 transactions renamed and recategorized. Not a subscription. |

NYT still at $16 on 9/8 — retention call still open.

**Spotify, 13 Sep:** the second-account question closed without an owner — nobody in the house claimed the $12.99 Individual on the Sapphire Reserve. Going to Chase's dispute department Mon 9/14 (800-845-3574). Substack settings pass also closed 9/13.
