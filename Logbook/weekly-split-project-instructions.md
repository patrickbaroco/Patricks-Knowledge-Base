# Project instruction changes — weekly split + provisional Week Ahead

Paste-ready text for the two claude.ai Projects. Nothing here is live until you paste it.
Decision and rationale: `Home MOC.md`, Decisions log, 2026-09-21.

Companion piece already in place: Cowork scheduled task `week-ahead-handoff-reconcile`, daily 6am.

## Add or replace?

**Replace, targeted — do not append.** The old instruction in each project says to treat the weekly as one deliverable, and Week Ahead's says something about what to do when the Handoff is missing. Leaving that in place beside the new text gives the project two contradictory rules and no way to choose; a stale contradicting instruction is worse than either version on its own.

But **scope the replacement tightly.** These are edits to one or two instructions inside each project, not a rewrite of the project. What to find:

- **Command Center** — the instruction added 2026-08-10 that hands it "generating the weekly rollup + Handoff note (`Logbook/Weekly/YYYY-Www.md`)". Replace the part that treats rollup and Handoff as a single unit. Leave the monthly/quarterly/annual rollup instructions, the Todoist connector access, and the file-access scope exactly as they are.
- **Week Ahead** — the numbered input list, specifically **Input 3**, plus whatever currently handles an absent Handoff. Edit Input 3 in place; keep the list structure and the other inputs untouched.

**Leave alone in Week Ahead:** the calendar-photo intake, and the statement that the two projects are not merged. Both are still correct and the 2026-08-08 decision was not reopened.

---

## 1 — Command Center (owns weekly generation)

**Replace the weekly-rollup instruction with this:**

> **The weekly note has two halves with different obligations.**
>
> `Logbook/Weekly/YYYY-Www.md` contains `## Weekly Rollup` and `## Handoff Note — paste into next week's session`. These are no longer one deliverable.
>
> **The Handoff is required, and it is due before the Week Ahead fires Sunday evening.** It is the load-bearing half — the only part any downstream process reads. Write it first, always, even when there is no time for anything else. Target fifteen minutes. It carries only:
> - Open items (unresolved / in progress)
> - Closed at this review — do not resurface
> - Shelved or untracked — not stale, do not flag
> - `#someday` items to review
> - Ongoing threads to track
>
> **The Rollup is optional and deferrable.** If it is not written by Sunday, put `> [!todo] Rollup pending` under the heading and move on. It may be filled midweek, filled during the monthly, or never filled. A pending rollup is not a debt, is not stale, and must never be flagged as missing. Do not let an unwritten rollup delay or block the Handoff — that inversion is what produced three consecutive misses.
>
> When the week was thin, say so in two sentences and ship the Handoff. A short Handoff beats an absent one by a wide margin.

**Also add — this one is an addition, not a replacement:**

> **The monthly Daily-folder archive sweep hangs off the Handoff, not the Rollup.** `logbook-system-reference.md` triggers the sweep at "the first weekly review after a calendar month has closed." Now that the weekly has two halves, that means the **Handoff**. Writing a Handoff when a month has closed since the last one is what fires the sweep. A pending Rollup must never hold it up — tying the sweep to the deferrable half is how `Daily/` grows unbounded, which is the exact trap the 2026-07-30 decision was written to avoid.

**Also add:**

> If you are writing a Handoff for a week whose Week Ahead note already fired provisionally (`Projects/Week Ahead/<Monday>.md` with frontmatter `handoff_source: provisional`), do not reconcile it yourself — the `week-ahead-handoff-reconcile` watcher picks it up at 6am and re-points the note. Just write the Handoff.

---

## 2 — Week Ahead

**Replace the Input 3 / missing-handoff instruction with this:**

> **Input 3 is `Logbook/Weekly/YYYY-Www.md` for the week just ending — specifically its `## Handoff Note` section.** Read that section. Ignore `## Weekly Rollup` entirely; it is optional, frequently pending, and carries nothing you need. A rollup marked pending is normal and is not worth a remark.
>
> **Never block on a missing Handoff, and never delay firing to wait for one.** If the Handoff is absent or empty, build the note from Outlook, Todoist and that week's dailies exactly as you would otherwise, and:
>
> 1. Open the file with YAML frontmatter:
>    ```
>    ---
>    handoff_source: provisional
>    handoff_needed: YYYY-Www
>    built_provisional: YYYY-MM-DD
>    reconciled_at:
>    ---
>    ```
> 2. Follow it with a callout naming which Handoff is missing, what the note was built from instead, and the precedence rule in force (connectors win where they disagree with an older Handoff).
> 3. Where a priority or flag rests on something only an older Handoff speaks to, say so in the line itself rather than presenting it as settled.
>
> **A provisional note is a designed outcome, not a failure.** Do not editorialise about the missing review, do not count consecutive misses, and do not add a task to write it. The watcher reconciles the note when the Handoff lands; from Wednesday on it nudges. Say what is missing once, in the callout, and then get on with the week.
>
> When the Handoff **is** present, open with `handoff_source: reconciled` and `reconciled_at: <today>` and skip the callout.

---

## What did not change

- Week Ahead stays a standalone Project. The 2026-08-08 decision against merging holds — different triggers, inputs and time direction.
- Calendar-photo intake stays in Week Ahead.
- Daily entry writing stays in Logbook.
- `## Proposed Todoist changes` stays approve/decline. Nothing automated writes to Todoist, including the watcher.
