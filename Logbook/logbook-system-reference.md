# Logbook System Reference

This file documents the full operating system for Patrick's daily logbook, so a new Claude session (Cowork or otherwise) can pick up the workflow without prior chat history.

---

## Purpose & Context

Patrick works in a state CMO role at Eventus, managing clinical operations across multiple facilities. He also holds a **part-time role as team physician for Legacy Hospice**. This logbook is his daily operational record, built and maintained through Obsidian with the Periodic Notes plugin.

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
2. **Where** — defaults to `HQ` regardless of physical location (home, travel, etc.), *unless* Patrick is physically rounding at a facility, in which case name that facility/location instead
3. **Today's focus** — (this section was previously called "Live wires"; renamed because the original label was unclear)
4. **Clinical work** *(optional — omit if not applicable that day)*
5. **Administrative work**
6. **Significant interactions**
7. **Inbox** — open/unresolved items; long-range or aspirational items are tagged `#someday`
8. **Outcome**

*(This template is for **weekdays** — Patrick's working days. Weekends are handled differently; see "Weekends & Project Logs" below.)*

---

## Weekends & Project Logs

Patrick does not work his CMO/clinical job on weekends, so **weekends do not get a weekday-style daily entry**. The full template (Where / Tasks / Clinical / Inbox / Outcome) is a record of the *job*; forcing it onto a Saturday just produces empty scaffolding.

Rules:
- **No obligation to write a daily entry on Saturday or Sunday.** If the Periodic Notes plugin auto-creates a blank weekend daily note, leaving it empty is fine and expected — it just means nothing job-related happened.
- **Project work is captured in the project's own note, not in daily entries.** Ongoing workstreams (the Clinical Handbook, Clinical Reasoning, the Native Meadow Conversion, etc.) each have a note under `Projects/` with a **Log** section. Whenever Patrick works on one — weekend or weekday — append a dated line to that project's Log (`- YYYY-MM-DD: what happened / where it stands / next`) and refresh the note's `last_touched` (and `next_action` if it changed). Progress compounds in one place instead of scattering across dailies.
  - Handbook work → `Projects/Clinical Handbook.md`
  - Clinical Reasoning work (RLR / CP Solvers episodes, reasoning hubs, MOC) → `Projects/Clinical Reasoning.md`
  - See `Projects/_Todoist Link Convention.md` for how project notes link to Todoist tasks (`prj-<slug>` labels).
- **Optional lightweight weekend note.** If something non-project is worth remembering on a weekend (an idea, a personal errand, a trip), a minimal note is fine: just the plain day-of-week line plus a couple of freeform bullets under a "Notes" heading — **no** Where / Tasks / Clinical / Inbox / Outcome scaffolding. Create it only when there's something to capture.

---

## Core Workflow Rules

1. **One calendar week per chat conversation.** Each new week starts a fresh chat/session.
2. **Before finalizing any new day's entry**, check whether the prior day's Inbox items have been addressed. If they haven't been clearly resolved, prompt Patrick for discussion before finalizing the new entry — don't just carry them forward silently.
3. **At the end of each week**, produce two things:
   - A **weekly rollup summary** — draws from both the weekday operational entries *and* any project-log activity that week (including weekend work), so the week's full picture is captured.
   - A separate **"Handoff" note** — containing unresolved Inbox items, still-open `#someday` items, and any ongoing threads — formatted so Patrick can paste it directly into the next week's new chat/session to carry context forward.
4. **Weekly**, surface all accumulated `#someday` items from the Inbox sections that week, so Patrick can mark them complete or explicitly carry them forward.
5. **On request**, produce monthly, quarterly, or annual rollup summaries.

---

## Key Definitions & Conventions

- **`#someday` tag**: Used only in the Inbox section, to distinguish aspirational/long-range ideas from actionable near-term follow-up items. Don't tag routine open items this way — only genuinely long-range/aspirational ones.
- **"Today's focus"**: Section name (not "Live wires" — that label is retired).
- **First person voice**: All entries written as if Patrick is writing them himself.
- **HQ default**: Always the default "Where" entry unless Patrick explicitly describes physically rounding at a specific facility.
- **Weekends**: No weekday-style daily entry; project work goes to `Projects/` logs; optional lightweight notes only (see "Weekends & Project Logs").

---

## How Claude Should Operate in This Project

- Patrick will narrate his day in raw, unstructured notes.
- Claude converts that narrative into a structured entry following the template above exactly, in order.
- Claude should not add a date header — Obsidian/Periodic Notes handles that automatically.
- Before finalizing a new day's entry, Claude checks the previous day's Inbox for unresolved items and raises them for discussion if still open.
- On weekends, Claude does not push for a daily entry; if Patrick narrates project work, Claude appends it to the relevant `Projects/` note's Log rather than creating a daily entry.
- At week's end, Claude proactively offers (or produces, if requested) the weekly rollup + Handoff note, and surfaces any `#someday` items for review.
- Deliverables are always Markdown files.

---

## Open Threads as of Last Update (July 11, 2026)

*(Note: this section is a snapshot — update or replace it with the most current Handoff note once one exists in the new project, rather than relying on this file indefinitely.)*

- **Universal Health marketing/white paper item** — flagged open since 7/8, still unresolved as of 7/11.
- Possible additional open inbox items from 7/10 (Thursday/Friday) not fully captured in prior chat context.
- **RLR Episode 5** — added as a Cowork project (separate workstream, not the logbook itself).
- Most recent entry drafted: **Saturday, July 11, 2026**.
