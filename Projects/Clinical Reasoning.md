---
project: Clinical Reasoning
status: active
domain: professional
started: 2026-07-24
next_action: "Re-run the wikilink-audit script over the full RLR + CPS set (MOC counts/indices now current, but the resolve-% is still 001–037-only); then start the highest-value 168–188 hubs (catastrophe schema, atrial kick, arterial-vs-venous pressure, scurvy/Factor XIII) and the newer CPS neuromuscular hubs"
todoist_label: prj-reasoning
stakeholders: []
related: []
last_touched: 2026-07-25
---

## Context
Ongoing off-hours scholarship project: producing clinical-reasoning episode notes and building out the reasoning-skill hubs and clinical clusters that connect them. Two episode series live in `Clinical Reasoning/Episodes` — the **RLR** series and the **CP Solvers Neurology VMR / CPS** set. The RLR series spans the early sequential set (**RLR 001–046**) plus a **main-feed-numbered block (RLR 168–188)** added 2026-07-24/25; some RLR cases air on the main CP Solvers feed with a 3-digit main-feed number rather than a sequential RLR number — the convention and full vault map (001–046, gap 047–167, 168–188) live in the session memory note [[rlr-main-feed-numbering]]. **On disk now: 67 RLR-format notes (46 sequential + 21 main-feed) + 22 CPS = 89 episode notes.** The hub tying it all together is [[Clinical Reasoning MOC]], which tracks each reasoning concept (Anchoring Bias, Schema-Based Reasoning, Illness Tempo, etc.), how many episodes invoke it, and which evergreen hub notes are worth building next. See also [[Neurology VMR Index]].

This is the project formerly stubbed as "RLR" — renamed to Clinical Reasoning to match the folder and its actual scope. Like the handbook, it gets attention on weekends/off-hours, so its progress is tracked here rather than in daily logbook entries.

## Decisions
- Track Clinical Reasoning progress in this running project log (any day I touch it), not in daily logbook entries
- Build the ~30 highest-value reasoning hubs the most episodes point at, rather than creating stubs for all ~577 red links — let the long tail stay red until a 2nd/3rd episode makes a note worth writing
- Episode notes + reasoning-skill hubs + clinical clusters all connect through the MOC
- RLR main-feed episodes are filed as `RLR NNN - Title.md` with `series: "RLR / Clinical Problem Solvers"` and a 3-digit `episode`, identified by content (Reza + Rabih) regardless of how the number is pasted

## Open questions
- **MOC refreshed 2026-07-25** — counts, episode indices, clusters, schema rows and the 168–188 reasoning mapping are now current (67 RLR-format + 22 CPS). The one piece still outstanding: the **wikilink resolve-% audit is script-accurate only through RLR 001–037 + 12 CPS**; re-run the audit over the full `RLR + CPS *.md` set to fold in 038–046, 168–188, and the 10 newer CPS notes.
- Which hubs to build next: the 168–188 block seeds a strong multi-episode set (catastrophe schema / look-at-your-own-imaging, atrial kick + arterial-vs-venous pressure, normotensive cardiogenic shock, scurvy + Factor XIII / bleeding-with-clean-labs, post-influenza superinfection, Staph aureus bacteremia/endocarditis, substance-vs-structure). The newer CPS set adds a neuromuscular/gait cluster (CIDP, SCA7, HTLV-1 myelopathy, Kennedy, Hirayama, AIP, Wilson).
- Whether to pitch a town-hall segment showcasing clinical reasoning (carried #someday from the logbook)

## Log
- 2026-07-24: Project note created as the running Clinical Reasoning log (renamed from the earlier "RLR" stub). MOC last audited 2026-07-17/18 at 37 RLR + 12 CPS, so it trailed the actual episode count.
- 2026-07-24: Built the upper half of the new main-feed block — RLR **172–188** filed into `Clinical Reasoning/Episodes` as full episode notes (summary callout, 4–6 pearls, problem representation, case narrative, Bayesian-updates table, illness scripts/bias, teaching discussion, evergreen-update checkboxes, handbook opportunities, real references, related-notes footer). Guests: 176 Zaven Sargsyan, 177 Dan Kelmanson, 181 Andrew Sanchez + Michael Arcieri. 184 left intentionally **UNRESOLVED**. Created memory note [[rlr-main-feed-numbering]].
- 2026-07-25: Extended the block downward — built and filed **RLR 168, 169, 170, 171** (plus finalized 172). Main-feed block now runs **RLR 168–188 = 21 episodes**, all delivered and verified on disk. New guests: 168 **Paul Kunit** (SLU), 171 **Madellena Conte**. Diagnoses this stretch: 168 multiple vitamin deficiencies / scurvy (alcohol + activated charcoal); 169 anemia → atrial flutter with variable block → lost atrial kick / normotensive cardiogenic decompensation; 170 perforated duodenal ulcer (free air missed on CTA); 171 post-influenza MRSA → native-valve endocarditis; 172 hypercalcemia of malignancy in CRPC. Updated [[rlr-main-feed-numbering]] with the **full vault map** (001–046, gap 047–167, 168–188).
- 2026-07-25: **Refreshed [[Clinical Reasoning MOC]].** Corrected the headline counts to reality — **67 RLR-format (46 + 21) + 22 CPS** (the earlier "18 CPS" was carried from a stale note; disk actually holds 22, incl. the newer neuromuscular set 255/290/299/312/344/372/410/435/438/447). Rewrote the vault-state callout; added a content-based **168–188 reasoning-mapping** table; completed both episode indices (added RLR 038–046 + 168–188, and the 10 missing CPS); added new cross-episode clusters (hypercalcemia now +172/182; hypotension/shock 169/175/180; endocarditis 046/171/188; nutritional 168/186; chest-pain catastrophe 170; AKI/GN 178/018) and new Tier-2b clinical-hub build targets; extended the schema-library table. **Left honest:** the wikilink resolve-% audit is still script-accurate only through 001–037 + 12 CPS — a full-set re-run is the top housekeeping to-do (noted in the MOC callout and here).
