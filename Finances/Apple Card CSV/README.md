Apple Card CSV — drop folder

Save exported Apple Card transactions here and tell Claude they've landed. Claude reads this folder directly; nothing needs uploading.

## Export by CALENDAR MONTH, not by statement

Use the **date-range** export and set it to the **1st through the last day of the month**. Everything else in this system is calendar-month — Era's spending analysis, the monthly review, the operating-spend decomposition — so a statement that straddled a boundary would have to be split by hand and would blur the month-to-month comparison.

Apple Card probably does close at month end, which would make the two identical, but that isn't confirmed in Apple's documentation. Don't rely on it; set the dates.

**Export only months that have fully ended.** A charge exported while still pending can post later with a different merchant string or a different amount (tips, adjustments), and Era would import it a second time — its dedup is exact-match on the row. A month that is over is fully settled, so re-exporting one you've already sent is harmless.

## How

- **Web, easiest:** sign in at card.apple.com → **Statements** → **Export Transactions** → set start/end dates → choose **CSV** → **Export**.
- **iPhone:** Wallet → Apple Card → **Card Balance** → under Statements tap **Export Transactions** → set start/end dates → choose **CSV** → save to Files, or AirDrop to the Mac.

If only OFX/QFX/QBO are offered, send that instead — Claude converts it.

Naming helps but isn't required: `apple-card-2026-08.csv`.

## Where it goes

Import target is the manual Era account **Apple Card (CSV import)** (`uagr_EI1xSsH75VK`). The old linked account is hidden and stays hidden — if both were visible, Apple Card spend would count twice.

Era rejects Apple Card's native CSV header, so Claude remaps the rows to `mint` format before importing. Nothing for you to do.

## Priority

**July 2026 and August 2026 first.** Those are the two closed months carrying the baseline finding (operating spend of ~$19,274 and ~$21,000 against a $27,000 working figure), and Apple Card is the one estimated number in both — currently a ~$1,238/mo placeholder used for each. Replacing it with real data is what lets the Nov 20 quarterly settle whether the baseline is overstated.

September goes in after Sept 30.
