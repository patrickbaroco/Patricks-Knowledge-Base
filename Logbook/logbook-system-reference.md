# Logbook System Reference

This file documents the full operating system for Patrick's daily logbook, so a new Claude session (Cowork or otherwise) can pick up the workflow without prior chat history.

---

## Purpose & Context

Patrick works in a state CMO role at Eventus, managing clinical operations across multiple facilities. He also holds a **part-time role as team physician for Legacy Hospice**. As of 2026-07-26, the logbook also covers his personal-domain productive work (gardening, fishing, home projects, etc.) — see "Domains & Project Logs" below. This logbook is his daily operational record, built and maintained through Obsidian with the Periodic Notes plugin.

**Key colleagues and entities** (for reference when they appear in daily narratives):
- **Sandeep** — colleague
- **Dr. Rucci** — physician staffing discussions
- **Lindsey** — team member
- **Cary** — marketing document recipient
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

## Core Workflow Rules

1. **One calendar week per chat conversation.** Each new week starts a fresh chat/session.
2. **Before finalizing any new day's entry**, check whether the prior day's Inbox items have been addressed. If they haven't been clearly resolved, prompt Patrick for discussion before finalizing the new entry — don't just carry them forward silently.
3. **At the end of each week**, produce two things:
   - A **weekly rollup summary** — draws from both daily entries *and* any project-log activity that week, across **both work and personal domains**, so the week's full picture is captured (not just clinical/strategic/facilities).
   - A separate **"Handoff" note** — containing unresolved Inbox items, still-open `#someday` items, and any ongoing threads (either domain) — formatted so Patrick can paste it directly into the next week's new chat/session to carry context forward.
4. **Weekly**, surface all accumulated `#someday` items from the Inbox sections that week, so Patrick can mark them complete or explicitly carry them forward.
5. **On request**, produce monthly, quarterly, or annual rollup summaries.
6. **At the first weekly review after a calendar month has closed**, sweep that month's daily notes into the archive (see "Daily Archive" below) — this is what keeps `Daily/` from growing unbounded, since standalone monthly rollups are only produced on request and can't be relied on as the trigger.

---

## Daily Archive

Decided 2026-07-30, to keep the `Daily/` folder from growing unbounded:

- **Location**: `Logbook/Daily/Archive/YYYY-MM/` — nested under `Daily/` so the Periodic Notes plugin (which only looks at the top-level `Daily/` folder when creating new notes) is unaffected.
- **Trigger**: swept during the **weekly review** (not the monthly-rollup ritual — monthly rollups are on-request and weren't actually happening, so tying the sweep to them risked the folder growing indefinitely). At the first weekly review whose week falls after a calendar month has fully closed, check whether that month's daily files are still in `Daily/`.
- **Process**: if a closed month's files are still present, (1) generate `Logbook/Monthly/YYYY-MM.md` if it doesn't exist yet — a narrative rollup + highlights, modeled on the weekly note's Rollup/highlights shape, so the substance survives before the raw dailies are tucked away — then (2) move that month's daily files into `Daily/Archive/YYYY-MM/`.
- **First run**: June 2026 (2026-06-27 through 2026-06-30 — the only entries, since the logbook system itself started mid-month) was archived to `Daily/Archive/2026-06/` with `Monthly/2026-06.md` generated, on 2026-07-30 (done ad hoc rather than at a weekly review, since June was already fully closed out).

---

## Key Definitions & Conventions

- **`#someday` tag**: Used only in the Inbox section, to distinguish aspirational/long-range ideas from actionable near-term follow-up items. Don't tag routine open items this way — only genuinely long-range/aspirational ones.
- **"Today's focus"**: Section name (not "Live wires" — that label is retired).
- **First person voice**: All entries written as if Patrick is writing them himself.
- **HQ default**: Always the default "Where" entry unless Patrick explicitly describes physically rounding at a specific facility.
- **Domains**: Every day gets an entry; Work and Personal are each optional per-day but the template always has room for both. See "Domains & Project Logs" above.

---

## How Claude Should Operate in This Project

- Patrick will narrate his day in raw, unstructured notes.
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
