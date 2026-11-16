# Logbook System Reference

This file documents the full operating system for Patrick's daily logbook, so a new Claude session (Cowork or otherwise) can pick up the workflow without prior chat history.

---

## Purpose & Context

Patrick is **Chair of Clinical Excellence** at Eventus (the former Virginia regional CMO role was handed to **Dr. Surah Grumet** effective 2026-08-31). He is separately the **medical director at six facilities — ANR, King's Daughters (KD), Summit Square, Shenandoah, Bridgewater (BRC), and Virginia Mennonite Retirement Community (VMRC)** — a role he retains; it did **not** transfer with the CMO handoff, so facility-level asks from those six are his by role and should never be flagged as work to route to Surah. He also holds a **part-time role as team physician for Legacy Hospice**. As of 2026-07-26, the logbook also covers his personal-domain productive work (gardening, fishing, home projects, etc.) — see "Domains & Project Logs" below. This logbook is his daily operational record, built and maintained through Obsidian with the Periodic Notes plugin.

**Key colleagues and entities** (for reference when they appear in daily narratives):
- **Sandeep** — colleague
- **Dr. Rucci** — physician staffing discussions
- **Lindsey** — team member
- **Cary Trainor** — **COO of Eventus.** She/her. Earlier entries in this file described her only as "marketing document recipient" — that was wrong and undersold the relationship; she is an executive counterpart, not a document destination.
- **Wellness Concepts** — best pharmacy partner
- **Southern Pharmacy** — pharmacy partner
- **Universal Health** — competitor; marketing positioning is a recurring strategic concern
- **Crystal Redden** — contact helping advance a potential Eventus/Marquis partnership
- **Marquis** — organization in a potential new partnership with Eventus
- **Legacy Hospice** — where Patrick works part-time as team physician (do NOT confuse with **The Legacy**, an ALF)
- **Kristi Chittum** — program director for Legacy Hospice

Ongoing strategic threads to track across entries:
- Marquis partnership development
- Universal Health competitive/marketing concerns
- Any physician staffing developments (Dr. Rucci)
- Clinical handbook project (separate but related workstream — includes entries like polypharmacy/deprescribing, plus general cleanup of existing content)

---

## Tools & Environment

- **Obsidian** with the **Periodic Notes plugin** — this plugin auto-generates the daily note title/header. Because of this, **entries must never include a top-level date header** — Obsidian adds it automatically.
- Output is always delivered as a **Markdown file**.
- Logbook entries are always written in **first person** (Patrick's voice).

---

## Daily Entry Template

Entries follow this exact structure, in this order:

1. **Plain day-of-week line** at the very top (no markdown header, e.g., just "Saturday")
2. **Where** — defaults to `HQ` regardless of physical location (home, travel, etc.), *unless* Patrick is physically rounding at a facility, in which case name that facility/location instead. *(Optional — omit entirely on a day with no work component.)*
3. **Today's focus** — cross-domain framing of the day's main thread(s), whichever domain(s) applied that day
4. **Tasks** — frozen end-of-day Todoist snapshot (Completed / Left open); unchanged, spans both domains since Todoist already does
5. **Work** *(optional — omit if not applicable that day)* — single merged block covering everything work-related: clinical work, administrative work, and significant interactions. Do not further subdivide this section (Patrick's explicit call, 2026-07-26) — it replaced the old separate "Clinical work" / "Administrative work" / "Significant interactions" headers.
6. **Personal** *(optional — omit if not applicable that day)* — same shape as Work, covering home/garden/fishing/family/etc.
7. **Inbox** — open/unresolved items, either domain; long-range or aspirational items are tagged `#someday`
8. **Outcome** — single cross-domain narrative synthesizing the whole day
9. **Tomorrow's top 3** — the three tasks for the next day, set with Patrick at the end-of-day review *(added 2026-09-16)*. Numbered, one line each, with the reason it made the list. These are rescheduled in Todoist to that day at the same time, so the note and the board agree. The same three carry the Todoist label `@top3`, which `Today.md` shows as a checkable list; the label comes off the previous set when the new three get it *(2026-10-05)*.

This template applies to **every day**, weekday or weekend — see "Domains & Project Logs" below for what that changed.

---

## Domains & Project Logs

As of 2026-07-26, the logbook treats work and personal domains as equally first-class — every day gets an entry reflecting whatever productive work happened, in either domain. This replaced the earlier rule that weekends got no weekday-style entry at all.

Rules:
- **Every day gets an entry**, including weekends. A quiet day just produces a short entry — e.g. Personal-only, or even just Today's focus + Outcome — sections with nothing to say are omitted rather than filled with empty scaffolding. There's no obligation to force Work content that didn't happen.
- **The daily stays a pointer layer, not a duplicate of depth.** Anything with its own tracked note — a `Projects/` initiative (Meadow Conversion, Clinical Handbook, Clinical Reasoning) or a vault-root topic note (Cherry Tree, any Fishing note) — keeps its real detail in that note's own Log section. The daily just gets a one-line reference pointing at it (e.g. "Cherry tree leaf spot — raked and burned today, see [[Cherry Tree]]"), the same way work entries already point at "logged in the Clinical Reasoning project" instead of repeating it.
- **One-off productive work with no tracked note at all** (a single afternoon fixing something, one errand that mattered) just lives directly in the Work or Personal section's prose — it doesn't need a note created for it.
- **Where things get logged, by domain:**
  - Handbook work → `Projects/Clinical Handbook.md`
  - Clinical Reasoning work (RLR / CP Solvers episodes, reasoning hubs, MOC) → `Projects/Clinical Reasoning.md`
  - Meadow Conversion work → `Projects/Meadow Conversion.md`
  - Ongoing gardening (non-project plant/bed care) → the relevant vault-root `topic: gardening` note (e.g. `Cherry Tree.md`), indexed via `Gardening MOC.md`
  - Fishing → the relevant vault-root `topic: fishing` note, indexed via `Fishing MOC`
- See `Projects/_Todoist Link Convention.md` for how `Projects/`-folder notes link to Todoist (`prj-<slug>` labels). Ongoing topic-tagged domains (gardening, fishing) use a plain label instead (e.g. `garden`) — see the gardening filing convention for the reasoning.

---

## Calendar & Mail Inputs (Outlook)

Added 2026-08-30, when Patrick connected his Eventus Outlook account (`pbaroco@eventuswh.com`). Before this, the daily entry had only Patrick's narration and Todoist to work from, and the Week Ahead note depended on a photo of his calendar — which is why no Week Ahead note existed between 2026-08-10 and 2026-08-30.

Outlook is now a **standing input to the logbook**, in four places:

1. **Daily note scaffold.** Before asking Patrick to narrate, pull the day's calendar and sweep the day's mail — **inbox and Sent Items together** (see "Sweep Sent Items" below), and use them to pre-fill `Where`, `Today's focus`, and the skeleton of `Work`. Patrick then corrects a draft rather than writing from a blank note — which is the whole point, given the [[daily-note-floor]] finding that an empty template is what breaks the habit.
2. **Inbox candidates.** Mail that needs a reply, or that represents an open thread, is surfaced as a *candidate* `Inbox` item on the daily. Candidate, not automatic — Patrick decides what actually lands there.
3. **Week Ahead note.** `Projects/Week Ahead/YYYY-MM-DD.md` is built from the actual Outlook week. The calendar photo is retired as an input.
4. **Backfill.** Calendar and mail join the evidence sources for reconstructing missed days, ranking near the top — above vault file mtimes, because they carry meeting *content* and counterparties that no other source has.

**Sweep Sent Items, not just the inbox** *(added 2026-08-31)*. Read `folderName: "Sent Items"` in the same pass, over the same day window. On 8/31 an inbox-only sweep produced five Inbox items and four of them were already handled — Patrick had answered them himself — while missing two threads he *initiated*, which were the day's most substantive work. Sent Items is what tells you:

- **whether an apparent ask is still open** (the CGSC cadence question was answered at 3:56pm the same afternoon);
- **who started a thread** — "he asked Kristen Medlin" and "Kristen Medlin wrote to him" are different days;
- **what he actually said** — he sent the DHP license lookup, not a license copy; he sent Gavin's credentials to Barbara Middleton to ask what access they grant, rather than forwarding them on;
- **that something did *not* go out** — the only way to confirm an unsent item, like the counsel engagement memo;
- **accepted/declined meeting responses**, the cheapest confirmation a proposed meeting landed.

**Before writing any Inbox item, check Sent for a reply on that thread. An answered thread is a Work line, not an Inbox line.**

Also: names abbreviated in the Week Ahead are not verified names. Take spellings from how Patrick addresses people in his own sent mail — "S. Huneycutt" is **Shanda**, not Sarah.

**Rules:**

- **Never assert what happened in a meeting from the calendar alone.** The calendar establishes that a block existed, not that it happened or what was said. Write it as scaffold and let Patrick confirm — the pre-existing backfill rule, extended.
- **Sweep signal only.** Filter out Power BI subscriptions and other automated reports, all-hands training blasts (Weekly Clinical Seminar, Clinical Director Office Hours, SNF Leadership Essentials, Experienced Clinician Roundtable — these are calendar items, not mail worth surfacing), calendar accept/decline traffic, and vendor marketing. Surface real person-to-person mail and anything awaiting a response from Patrick.
- **Times come back in UTC.** `outlook_calendar_search` returns `dateTime` values in UTC; Patrick is America/New_York. Subtract 4h during EDT, 5h during EST. A 13:00 event is 9am his time. Getting this wrong shifts a whole day's shape — the same trap already documented for Todoist in [[log-backfill-sources]].
- **The recurring rounding blocks are scaffolding, not news.** Mon Summit Square + ANR admits, Tue ANR + BRC admits, Wed BRC — these repeat every week. Note them in `Where`, don't flag them as findings.
- **Standing sweep exclusions** (Patrick's call, 2026-08-30 — do not surface these as action items):
  - **VDH medical certification requests** (`VADeptOfHealth@vdh.virginia.gov`, "Medical Certification Requested for Case No. ..."). **Lindsey handles these.** They arrive marked high importance and look actionable; they are not his.
  - **Monday.com board notifications** (`notifications@monday.com` — "[Team mention] ...", Upcoming New Hires and other boards). **Patrick's call, 2026-08-31: ignore Monday board emails in general.** Board activity is not his queue; don't surface it and don't log it in the daily.
- **Work mailbox only.** Outlook covers the Eventus domain. Nothing in the Personal domain will appear there, and its absence from the sweep means nothing.

---

## Core Workflow Rules

1. **One calendar week per chat conversation.** Each new week starts a fresh chat/session.
2. **Every end-of-day review ends by setting Tomorrow's top 3** *(2026-09-16)* — review the day, what's left, complete the log, then agree the three for the next day and write them as the last section of the note. Propose them from the calendar and the open board; Patrick picks. In the same Todoist change, reschedule the three to that day, add `@top3` to them, and remove `@top3` from any task still carrying it from the previous set.
3. **Before finalizing any new day's entry**, check whether the prior day's Inbox items have been addressed. If they haven't been clearly resolved, prompt Patrick for discussion before finalizing the new entry — don't just carry them forward silently.
4. **At the end of each week**, produce two things:
   - A **weekly rollup summary** — draws from both daily entries *and* any project-log activity that week, across **both work and personal domains**, so the week's full picture is captured (not just clinical/strategic/facilities).
   - A separate **"Handoff" note** — containing unresolved Inbox items, still-open `#someday` items, and any ongoing threads (either domain) — formatted so Patrick can paste it directly into the next week's new chat/session to carry context forward.
5. **Weekly**, surface all accumulated `#someday` items from the Inbox sections that week, so Patrick can mark them complete or explicitly carry them forward.
6. **On request**, produce monthly, quarterly, or annual rollup summaries.
7. **At the first weekly review after a calendar month has closed**, sweep that month's daily notes into the archive (see "Daily Archive" below) — this is what keeps `Daily/` from growing unbounded, since standalone monthly rollups are only produced on request and can't be relied on as the trigger.

---

## Daily Archive

Decided 2026-07-30, to keep the `Daily/` folder from growing unbounded:

- **Location**: `Logbook/Daily/Archive/YYYY-MM/` — nested under `Daily/` so the Periodic Notes plugin (which only looks at the top-level `Daily/` folder when creating new notes) is unaffected.
- **Trigger**: swept during the **weekly review** (not the monthly-rollup ritual — monthly rollups are on-request and weren't actually happening, so tying the sweep to them risked the folder growing indefinitely). At the first weekly review whose week falls after a calendar month has fully closed, check whether that month's daily files are still in `Daily/`.
- **Which half of the weekly review** *(disambiguated 2026-09-21, when the weekly split in two — see `Home MOC.md` decisions log)*: the sweep hangs off writing the **`## Handoff Note`**, which is the required half. **It does not hang off `## Weekly Rollup`,** which is now optional and may sit pending indefinitely. This is the same trap as the original 2026-07-30 decision one level down — tying the sweep to the deferrable artifact is how `Daily/` grows unbounded. If you wrote the Handoff and a month has closed since the last one, sweep.
- **Process**: if a closed month's files are still present, (1) generate `Logbook/Monthly/YYYY-MM.md` if it doesn't exist yet — a narrative rollup + highlights, modeled on the weekly note's Rollup/highlights shape, so the substance survives before the raw dailies are tucked away — then (2) move that month's daily files into `Daily/Archive/YYYY-MM/`.
- **First run**: June 2026 (2026-06-27 through 2026-06-30 — the only entries, since the logbook system itself started mid-month) was archived to `Daily/Archive/2026-06/` with `Monthly/2026-06.md` generated, on 2026-07-30 (done ad hoc rather than at a weekly review, since June was already fully closed out).

---

## Key Definitions & Conventions

- **`#someday` tag**: Used only in the Inbox section, to distinguish aspirational/long-range ideas from actionable near-term follow-up items. Don't tag routine open items this way — only genuinely long-range/aspirational ones.
- **"Today's focus"**: Section name (not "Live wires" — that label is retired).
- **First person voice**: All entries written as if Patrick is writing them himself.
- **HQ default**: Always the default "Where" entry unless Patrick explicitly describes physically rounding at a specific facility.
- **Domains**: Every day gets an entry; Work and Personal are each optional per-day but the template always has room for both. See "Domains & Project Logs" above.
- **Fishing forecast in the Week Ahead**: A scheduled Claude task writes `Fishing/Forecasts/YYYY-MM-DD.md` (Monday's date) from the Mossy Creek Fly Fishing weekly post, Monday evening with a Tuesday 6am retry, and adds a `## Fishing forecast` section to that week's Week Ahead note, placed just before `## Flagged`, embedding the forecast's `#Week summary` and `#Weekend` sections. When building or reconciling a Week Ahead note, keep that section intact; if the forecast note already exists when the Week Ahead is built, add the section yourself in the same form. The Today dashboard reads the same note live for today, tomorrow and the weekend.

---

## How Claude Should Operate in This Project

- Claude opens the day by pulling Outlook — the day's calendar and a signal-only sweep of the day's mail — and drafts the scaffold from it. See "Calendar & Mail Inputs" above.
- Patrick will narrate his day in raw, unstructured notes, correcting and filling in that scaffold.
- Claude converts that narrative into a structured entry following the template above exactly, in order.
- Claude should not add a date header — Obsidian/Periodic Notes handles that automatically.
- Before finalizing a new day's entry, Claude checks the previous day's Inbox for unresolved items and raises them for discussion if still open.
- Claude writes an entry every day, weekday or weekend — a quiet day just means some sections are short or omitted, not that the entry is skipped.
- If Patrick narrates work on something with its own tracked note (a `Projects/` note or a vault-root topic note), Claude appends the real detail to that note's own Log and keeps the daily entry to a one-line pointer.
- At week's end, Claude proactively offers (or produces, if requested) the weekly rollup + Handoff note, and surfaces any `#someday` items for review.
- Deliverables are always Markdown files.

---

## Open Threads as of Last Update (July 11, 2026)

*(Note: this section is a snapshot — update or replace it with the most current Handoff note once one exists in the new project, rather than relying on this file indefinitely.)*

- **Universal Health marketing/white paper item** — flagged open since 7/8, still unresolved as of 7/11.
- Possible additional open inbox items from 7/10 (Thursday/Friday) not fully captured in prior chat context.
- **RLR Episode 5** — added as a Cowork project (separate workstream, not the logbook itself).
- Most recent entry drafted: **Saturday, July 11, 2026**.
