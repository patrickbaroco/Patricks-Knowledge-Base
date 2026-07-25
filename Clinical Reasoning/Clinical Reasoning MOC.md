---
type: moc
series: "RLR / Clinical Problem Solvers"
tags:
  - clinical-reasoning
  - map-of-content
---

# Clinical Reasoning — Map of Content

The hub for the RLR / Clinical Problem Solvers vault. It connects the [[#Episode index|78 RLR episode notes]] (57 sequential **RLR 001–057** + the main-feed-numbered block **RLR 168–188**) and the [[#CP Solvers — Virtual Morning Report|22 CP Solvers Virtual Morning Report notes]] (CPS 153 plus the Aaron Berkowitz Neurology VMR set) via their shared [[#Reasoning-skills index|reasoning skills]] and [[#Cross-episode clusters|clinical clusters]], tracks which evergreen notes are [[#Notes to build|worth building]], and maps each episode to its [[#Diagnostic schema library|CP Solvers schema]]. Main-feed numbering convention (why some RLR cases carry a 3-digit number) lives in the session memory note [[rlr-main-feed-numbering]].

> [!info] Vault state (as of 2026-07-25)
> **On disk: 78 RLR-format notes + 22 CPS notes = 100 episode notes.**
> - **RLR sequential 001–056** (56) — the original run through RLR 046 plus **RLR 047** (ATAK), **RLR 048** (ATTR cardiac amyloidosis), **RLR 049** (gallstone pancreatitis / splenic vein thrombosis), **RLR 050** (POEMS — a **guest episode with Aaron Berkowitz**, Reza away — bridging RLR to the CPS VMR neuro set), **RLR 051** (intractable hiccups → CLL with splenic infarct), **RLR 052** (chronic hip pain → osteoporotic fragility fracture; "the alternate diagnosis"), **RLR 053** (hemorrhagic brain lesions → CNS tuberculosis — a **second guest episode with Aaron Berkowitz** *presenting*; a fatal framing case), **RLR 054** (unsteady gait + confusion → hemorrhagic brain metastases from small cell lung cancer — a two-patient ER sign-out role-play, ending on a post-op cliffhanger), **RLR 055** ("A Day with Reza" — three same-day cases: venous stasis dermatitis, an MSSA cavitary lung abscess with hypomagnesemic hypokalemia, and functional syncope), **RLR 056** (a **tribute episode for Rafa Medina** that resolves RLR 054's Case 2 → **propofol-induced neuroexcitatory syndrome**; "management over diagnosis" and "pursue what doesn't fit"), and **RLR 057** (a rapid-fire chest-pain case: negative troponins and spontaneous resolution that nearly hid an **ascending Type A aortic dissection** — the acute-aortic-syndrome and test-threshold teaching), built 2026-07-25.
> - **GAP: RLR 058–167 not built.** ✅ RLR 054's Case-2 cliffhanger was RESOLVED in RLR 056.
> - **RLR main-feed 168–188** (21) — cases that aired on the main CP Solvers feed with a 3-digit number; built 2026-07-24/25. Identify by content (Reza + Rabih ± guest), not the pasted number.
> - **CPS Neurology VMR** (22) — Berkowitz "#EndNeurophobia" set, 153 → 447.
>
> **Link-audit status — STALE / partial.** The reasoning-skills table below was last script-audited at **RLR 001–037 + 12 CPS (2026-07-17/18)**: 658 distinct wikilink targets across the 37 RLR notes, ~81 resolving (~12%), the rest red by design (build the ~30 highest-yield hubs, let single-use disease specifics stay red). **Not yet folded into that audit:** RLR 038–046, the entire 168–188 block, and 10 newer CPS notes (255, 290, 299, 312, 344, 372, 410, 435, 438, 447). Those are indexed below and, for 168–188, mapped to reasoning concepts by **content** (see the [[#Main-feed block 168–188 — reasoning mapping|168–188 mapping]]) — but the precise resolve-percentage needs a re-run of the wikilink-audit script over the full `RLR + CPS *.md` set against the whole vault. That re-run is the top housekeeping to-do.

---

## Reasoning-skills index

The cognitive spine of the vault. Each row is a reasoning concept, how many episodes invoke it (by wikilink), whether a note exists, and the episodes to link from that note's "Related Notes." Building these first gives the most connective value per note, because each one threads together many episodes at once.

> [!note] Scope of this table
> Counts and episode lists below are the **001–037 audit** (2-digit episode numbers). The main-feed **168–188** additions are tracked separately in [[#Main-feed block 168–188 — reasoning mapping]] (3-digit numbers) until the next full script audit merges them. RLR 038–046 await audit.

| Concept | Eps | Status | Episodes |
|---|---|---|---|
| [[Anchoring Bias]] | 25 | ✅ exists | 01,02,03,04,06,07,08,09,10,12,13,16,17,18,19,20,23,27,29,30,31,34,35,36,37 |
| [[Schema-Based Reasoning]] | 19 | ✅ built | 12,14,15,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,37 |
| [[Cognitive Autopsy]] | 17 | ✅ built | 02,06,08,09,10,12,13,16,18,21,24,31,32,33,34,35,37 |
| [[Diagnostic Humility]] | 17 | ✅ built | 17,18,24,25,26,27,28,29,30,31,32,33,34,35,36,37 |
| [[Framing Effect]] | 15 | ✅ exists | 01,02,03,06,07,08,10,11,12,13,16,17,19,20,32 |
| [[Premature Closure]] | 15 | ✅ exists | 01,02,03,04,05,07,08,09,12,15,19,22,26,28,37 |
| [[Base Rate]] | 14 | ✅ built | 14,15,16,17,18,21,22,23,25,30,31,32,34,36 — absorbs "Base Rate Reasoning" |
| [[Anatomical Approach]] | 11 | ✅ built | 12,13,16,17,18,20,31,33,34,35,37 |
| [[Illness Tempo]] | 11 | ✅ built | 22,24,25,26,27,31,32,34,35,36,37 |
| [[Center of Gravity]] | 10 | ✅ built | 11,12,13,14,22,30,31,32,33,34 |
| [[Diagnostic Momentum]] | 9 | ✅ built | 05,09,13,14,18,21,32,33,35 |
| [[Test Interpretation]] | 8 | ✅ built | 27,28,29,30,32,33,34,37 |
| [[Availability Heuristic]] | 7 | ✅ built | 04,06,10,12,16,19,20 |
| [[Treatment as a Diagnostic Test]] | 7 | ✅ built | 13,16,17,18,24,26,35 — absorbs "Diagnosis Ex Juvantibus" |
| [[Analogical Reasoning]] | 7 | ✅ built | 21,24,26,31,33,34,35 |
| [[Illness Script]] | 5 | ✅ built | 07,09,12,30,31 + Command (14,15,16) + Flexibility (11,17,37) |
| [[Return to the Bedside]] | 3 | ✅ built | 33,35,36 |
| [[Worst-Case Reasoning]] | 2 | build | 36,37 — anchor worst-case (morbidity>probability; central: vascular/compressive/inflammatory) |
| [[MIST Mnemonic]] | 4 | ✅ built | 33,34,37,C153 — Metabolic/Infectious/Structural/Toxin (AMS, DI, myoclonus, epilepsy) |
| [[Bayesian Reasoning]] | 3🔗/22🏷 | ✅ built | linked in 03,09,25; tagged in 22 episodes — the master frame |
| [[Base-Rate Neglect]] | 3 | build | 07,08,11 |
| [[Search Satisficing]] | 3 | build | 03,09,12 |
| [[Signal versus Noise]] | 3 | build | 17,22,33 |
| [[Background–Foreground Framing]] | 3 | build | 08,10,23 |
| [[Law of Proportionality]] | 2 | ✅ built | 30,34 |
| [[Representativeness Heuristic]] | 2 | build | 14,24 |
| [[Unifying Diagnosis]] + [[Hickam's Dictum]] | 1+4 | build (pair) | Occam 14 / anti-Occam (Hickam) 28,30,33,34 |
| [[Diseases Travel Together]] | 2 | build | 08,11 |
| [[Parallel Reasoning]] | 2 | ✅ exists | 20,24 + tagged |
| [[Diagnostic Error]] | 2 | note optional | 20,26 |

Legend: ✅ = already written · build = worth writing, not yet done · 🔗 links / 🏷 tag.

Newly coined / single-episode reasoning frames worth watching (write when a 2nd episode reuses them): [[Contextual Reasoning]] (36), [[Solid Liquid Gas Framework]] (36), [[VIPO Framework]] (32), [[Test of Time]] (34), [[Physiologic Reserve]] (35), [[Trust the Triage]] (37), [[Destination Diagnosis]] (37). ([[Worst-Case Reasoning]] and [[MIST Mnemonic]] have now recurred and moved into the table above.)

### Main-feed block 168–188 — reasoning mapping

Content-based (not yet script-audited). These are the reasoning concepts each main-feed episode most strongly invokes — several **recur enough to promote existing "build" rows** once the audit merges. 3-digit numbers throughout.

| Concept | Main-feed episodes | Note |
|---|---|---|
| [[Illness Tempo]] | 168, 171, 174, 181, 183 | 168 = acute-vs-subacute mis-framing (explicit); 171 = tempo triages the microbe; 183 = temporal signature > location |
| [[Worst-Case Reasoning]] / catastrophe | 169, 170, 180, 184, 188 | **now clearly recurs** — promote. 170 catastrophe schema (vascular/perforation/electrical); 169 normotensive cardiogenic shock "in pencil"; 184 HSV no-miss |
| [[Diagnostic Humility]] / [[Knowing What You Don't Know]] | 168, 169, 170 | 169 texted cardiology; 170 missed free air, "systems catch what individuals miss"; 168 both experts stuck |
| [[Cognitive Autopsy]] | 168, 169, 183 | 168 explicit cognitive autopsy (tempo error); 183 outcome ≠ reasoning |
| [[Anchoring Bias]] / [[Premature Closure]] | 169, 170, 171, 174 | 169 Mobitz-I misread + baseline anchor; 170/171 "park the bus" resisted; 174 first-abnormality trap |
| [[Base Rate]] | 170, 171, 188 | 170 classic presentation of a rare disease is still rare; 171 ~25% of SAB has endocarditis |
| [[Test Interpretation]] | 168, 169, 172, 177, 182 | 169 troponin as NPV; 177 "is the number real" (sat gap, leukocyte larceny); 168 haptoglobin + indirect bili + INR/vit K; 172 ionized Ca over albumin math; 182 chase the discordant value |
| [[Schema-Based Reasoning]] | 169, 170, 173, 175, 178 | 175 three realms of hypotension; 169 arterial-vs-venous pressure; 173 blood/pus/water + inside-out/outside-in; 178 BP localizes |
| [[Unifying Diagnosis]] vs [[Hickam's Dictum]] | 168, 177, 178, 188 | 177 double artifact = Hickam; 168 multiple contributors (multi-vitamin); 178 two separate AKI cases |
| [[Treatment as a Diagnostic Test]] | 168, 176, 181 | 168 empiric IV vitamin C; 176 assume inhalational exposure and treat |
| [[Return to the Bedside]] / [[Physiologic Reserve]] | 169, 170, 171 | 169 eat-walk-talk + cardiovascular reserve; 170 patient looks sicker than the data |
| [[Analogical Reasoning]] | 169, 170, 173 | 169/170 "necklace you stop feeling" habituation; 170 normal-lipase-in-pancreatitis analogy; 173 face = precious territory like the hand |
| [[Illness Script]] flexibility | 168, 172, 187 | 187 oligomyalgia coinage; 172 CRPC as the exception to prostate's osteoblastic rule; 168 stretch the scurvy script |
| [[Substance vs Structure]] | 171, 172, 175, 176, 181 | recurring two-S's frame (171 structure; 172 substance; 175 don't-blame-substance) |

---

## Notes to build

Curated, not exhaustive — most red links should stay red. Priorities below.

### Tier 1 — reasoning hubs ✅ BUILT
All built and cited per episode: [[Cognitive Autopsy]], [[Schema-Based Reasoning]], [[Diagnostic Humility]], [[Availability Heuristic]], [[Diagnostic Momentum]], [[Anatomical Approach]], [[Base Rate]], [[Illness Tempo]], [[Center of Gravity]], [[Treatment as a Diagnostic Test]], [[Illness Script]] (hub), [[Test Interpretation]], [[Analogical Reasoning]], [[Return to the Bedside]], [[Bayesian Reasoning]], [[Base-Rate Neglect]], [[Search Satisficing]], [[Representativeness Heuristic]]. These are the notes that make the graph cohere.

### Tier 1b — small reasoning stubs still to write (each now spans 2–3+ episodes)
[[Unifying Diagnosis]] + [[Hickam's Dictum]] (as a pair — Occam vs anti-Occam; now 28,30,33,34 + **177,178,188**), [[Worst-Case Reasoning]] (36,37 + **169,170,180,184,188** — has clearly recurred, promote), [[Signal versus Noise]] (17,22,33), [[Diseases Travel Together]] (08,11), [[Background–Foreground Framing]] (08,10,23), [[Solve the Why]] (**168** — risk-factor/pre-illness reasoning), [[Substance vs Structure]] (**171,172,175,176,181** — high-frequency two-S's frame, worth a hub).

### Tier 2 — clinical hubs ✅ mostly BUILT (pre-168)
Calcium/PTH, hyponatremia/ADH, hemolysis, biliary/cholestasis, spine, and monocytosis clusters all have their anchor notes: [[Hemolysis]], [[Immune-Mediated Hemolysis]], [[Anemia and Thrombocytopenia]], [[Delayed Hemolytic Transfusion Reaction]], [[Hyponatremia]], [[SIADH]], [[Adrenal Insufficiency]], [[Milk-Alkali Syndrome]], [[PTHrP]], [[Hypercalcemia of Immobilization]], [[Granulomatous Disease]], [[Multiple Myeloma]], [[Vitamin D Toxicity]], [[Vitamin D Metabolism]], [[Hepatocellular vs Cholestatic Pattern]], [[MRCP]], [[Myelopathy]], [[Spinal Epidural Abscess]], [[Batson Venous Plexus]], [[Monocytosis]], [[Chronic Myelomonocytic Leukemia]], [[Leukemia Cutis]], [[Skin Nodule]], [[Lytic Bone Lesion]], [[Gorham-Stout Disease]], [[Urinary Retention]], [[Polyuria]], [[Diabetes Insipidus]], [[Post-Obstructive Uropathy]], [[Catheter-Associated UTI]], [[Copeptin]]. ([[Hypercalcemia]] + [[Parathyroid Hormone]] pre-existed.)

### Tier 2b — clinical hubs from the 168–188 block (highest-value, multi-episode first)
- **Cardiac / shock:** [[Arterial vs Venous Pressure in Hypotension]] (169+175), [[Normotensive Cardiogenic Shock]] (169+175), [[Atrial Kick]] (169), [[Atrial Flutter]] / physiologic-AV-block (169), [[Cardiogenic Shock]] + [[GDMT]] (175+169), [[Troponin]] as a negative-predictive test (169), [[Jugular Venous Pressure]] (169).
- **Hypercalcemia extension:** [[Hypercalcemia of Malignancy]] (172; ties to 007/014/028), [[PTHrP]] (already built — add 172), [[Ionized Calcium]] (172+182), [[Osteomalacia]] (182).
- **ID / endocarditis:** [[Infective Endocarditis]] + [[Staphylococcus aureus Bacteremia]] (171+046), [[Culture-Negative Endocarditis]] (188+046), [[Post-Influenza Bacterial Superinfection]] (171), [[Brucellosis]] (176+188), [[Outside-in vs Inside-out Infection]] (171+173).
- **Heme / nutrition:** [[Scurvy]] / [[Vitamin C Deficiency]] (168), [[Factor XIII Deficiency]] + [[Bleeding with Normal Platelets]] (168), [[Haptoglobin]] / [[Hemolysis Workup]] (168+015), [[Indirect Hyperbilirubinemia]] hematoma-resorption mimic (168), [[Sideroblastic Anemia]] (168), [[Nutritional Deficiency in Alcohol Use]] (168+186), [[Pellagra]] (186).
- **Acute-care schemas:** [[Vascular Catastrophe]] / [[Catastrophe Schema]] (170), [[Look at Your Own Imaging]] (170), [[Perforated Peptic Ulcer]] / [[Pneumoperitoneum]] (170), [[Aortic Dissection]] (170), [[Referred Pain]] (170), [[Quantity vs Quality of Blood]] (180+184), [[Diagnostic Restraint]] (184+171), [[HSV Encephalitis]] (184), [[CFTR-Related Disorder]] (181), [[Methemoglobinemia]] (177), [[MGRS]] / [[Hematuria and AKI]] (178+018).

### Tier 3 — populate existing stubs
[[Dyspnea]] (still image-only; linked by 08/29 + now 181). [[Urinary Retention]] populated but should absorb the 036 teaching. [[Terminal Lucidity]] remains an orphan.

### CPS neuro candidates (from the 22-note VMR set; multi-episode first)
[[Autoimmune Encephalitis]] (153/220/247/359), [[Seizure]] / [[Non-Convulsive Seizure]] (153/323/395), [[Intracranial Pressure]] + [[Monro-Kellie Doctrine]] + [[Papilledema]] (269/366/395), [[Cerebral Venous Sinus Thrombosis]] (366), [[Cancer and the Nervous System]] (269/276/386), [[Rapidly Progressive Dementia]] (386/395), [[Movement Disorder Approach]] + [[Myoclonus]] (247/276), [[Anti-NMDA Receptor Encephalitis]] (247/359), [[Round to the Nearest Schema]] (323/395), [[Cerebellar Ataxia]] / gait (255/299/312/344/410/435/438 — the newer neuromuscular/gait set), [[Peripheral Neuropathy]] / [[CIDP]] (255/435/438), [[Wilson Disease]] (447 + RLR 037-adjacent), [[Hickam's Dictum]] (211/276/323). ✅ built so far: [[Tremor]] (from 247). Full per-episode candidate lists live in project memory ([[clinical-reasoning-moc]]).

### Probably leave as red links (for now)
Single-episode disease specifics ([[Crowned Dens Syndrome]], [[Cannabinoid Hyperemesis Syndrome]], [[Pulmonary Langerhans Cell Histiocytosis]], [[Ertapenem-Induced Encephalopathy]], [[Gorham-Stout Disease]], [[Pyogenic Granuloma]], [[Scabies]], etc.) and generic terms — write them only if a later episode reuses them.

---

## Naming & synonym fixes

Concrete consolidations so links don't fragment across near-duplicate targets. Pick the **bold** canonical form and update the others (or add `aliases:` in the target note so both resolve).

- **[[Base Rate]]** ← merge `Base Rate Reasoning`; keep [[Base-Rate Neglect]] as the *bias* (distinct from the principle). Tags: keep `base-rate-reasoning` and `base-rate-neglect` separate.
- **[[Illness Script]]** as a hub ← folds `Illness Script Command` and `Illness Script Flexibility` in as sections / child notes that link up.
- **[[Treatment as a Diagnostic Test]]** ← merge `Diagnosis Ex Juvantibus` (alias); reconcile tags `treatment-as-diagnostic-test` / `therapeutic-trial` / `ex-juvantibus-reasoning` to one slug.
- **Tempo:** standardize tag `tempo-based-reasoning`. Concept note is [[Illness Tempo]]. (034/035/036 + 168/171/183 already lean on it.)
- **Analogical:** standardize `analogical-reasoning` (never `analogic-reasoning`).
- **Base-rate tag:** 030/031/034/036 use `base-rate-reasoning` — matches the canonical slug; keep.
- **[[Diagnostic Error]]:** appears as a link (20, 26) and a one-off tag (`diagnostic-error`, 20). Decide note-vs-tag and apply consistently.
- **Main-feed guests (keep ON frontmatter):** 168 Paul Kunit, 171 Madellena Conte, 176 Zaven Sargsyan, 177 Dan Kelmanson, 181 Andrew Sanchez + Michael Arcieri. **Keep OFF:** patients, pets (Nar = Rabih's dog; Gino/Sydney), Gurpreet/Kirtan/Berkowitz (mentors, referenced), Matt/Matt Waddle (editors), spouses/babies.
- Already-canonical (per project memory, keep as-is): `availability-heuristic` (never *availability-bias*), [[Constipation–Retention Cycle]], LIED mnemonic ("Lytes" not "Lights"). "Aaron" (036) is a referenced colleague — keep off frontmatter.

---

## Cross-episode clusters

Thematic groupings — natural "see also" links, and candidates for small cluster-MOCs later. (Main-feed 168–188 members shown with 3-digit numbers.)

- **Calcium / PTH / hypercalcemia** — [[RLR 007 - Hypercalcemia|007]], [[RLR 014 - Hypercalcemia and Immobilization|014]], [[RLR 028 - Hypercalcemia and Vitamin D Toxicity|028]], + **[[RLR 172 - Hypercalcemia in Castrate-Resistant Prostate Cancer|172]]** (hypercalcemia of malignancy / CRPC exception), **[[RLR 182 - Hypercalcemia in ESRD and Hypophosphatemic Osteomalacia|182]]** (ESRD, suppressed PTH → osteomalacia). Shared: [[Parathyroid Hormone]], [[PTHrP]], [[Hypercalcemia of Malignancy]], [[Ionized Calcium]], [[Milk-Alkali Syndrome]], [[Osteomalacia]]. (Bone sibling: 031 via [[Lytic Bone Lesion]].)
- **Hypotension / shock / heart failure** — **[[RLR 169 - Chronic Hypotension, Anemia, and Atrial Flutter with Variable Block|169]]**, **[[RLR 175 - Alcohol-Related Cardiogenic Shock and the Three Realms of Hypotension|175]]**, **[[RLR 180 - Exertional Lightheadedness and a Submassive Pulmonary Embolism|180]]**, + [[RLR 013 - Right Upper Quadrant Pain and Heart Failure|013]]. Shared: [[Arterial vs Venous Pressure in Hypotension]], [[Normotensive Cardiogenic Shock]], [[Atrial Kick]], [[Cardiogenic Shock]], [[GDMT]], [[Troponin]].
- **Infective endocarditis / bacteremia** — [[RLR 046 - Aphasia and a Mycotic Aneurysm from Bartonella Endocarditis|046]], **[[RLR 171 - Post-Influenza MRSA Superinfection and Native Valve Endocarditis|171]]**, **[[RLR 188 - Intracranial Hemorrhage, Splenomegaly, and Bartonella Endocarditis|188]]**. Shared: [[Infective Endocarditis]], [[Staphylococcus aureus Bacteremia]], [[Culture-Negative Endocarditis]], [[Brucellosis]] (176/188).
- **Chest pain / catastrophe / perforation** — **[[RLR 170 - Abrupt Chest and Neck Pain and a Perforated Duodenal Ulcer|170]]**, **[[RLR 057 - Chest Pain, Spontaneous Resolution, and an Ascending Aortic Dissection|057]]** (aortic dissection / acute aortic syndrome; the can't-miss chest-pain killers), [[RLR 020 - Chest Pain and Ascending Cholangitis|020]], [[RLR 012 - Dysuria and Esophageal Perforation|012]], [[RLR 023 - Pleuritic Chest Pain and Pulmonary Langerhans Cell Histiocytosis|023]], [[RLR 026 - Syncope and Occult Gastrointestinal Bleeding|026]]. Shared: [[Vascular Catastrophe]], [[Catastrophe Schema]], [[Aortic Dissection]], [[Perforated Peptic Ulcer]], [[Look at Your Own Imaging]], [[Referred Pain]].
- **Can't-miss chest pain / acute aortic syndrome / the three killers** — **[[RLR 057 - Chest Pain, Spontaneous Resolution, and an Ascending Aortic Dissection|057]]** (ACS vs PE vs aortic dissection; spontaneous resolution logic; test-threshold / worry-gestalt), [[RLR 047 - Peri-Intubation PEA Arrest and Coronary Vasospasm (ATAK Syndrome)|047]] (ACS/cath-negative), [[RLR 180 - Exertional Lightheadedness and a Submassive Pulmonary Embolism|180]] (PE), [[RLR 170 - Abrupt Chest and Neck Pain and a Perforated Duodenal Ulcer|170]] (catastrophe schema), [[RLR 049 - Hyperacute Epigastric Pain, Splenic Vein Thrombosis, and Gallstone Pancreatitis|049]] (abrupt vascular pain). Shared: [[Acute Aortic Syndrome]], [[Aortic Dissection]], [[Penetrating Aortic Ulcer]], [[Intramural Hematoma]], [[Chest Pain Approach]], [[Vulnerable Plaque]], [[Unstable Angina]], [[Anti-Impulse Therapy]], [[Test Threshold]], [[Pulmonary Embolism]].
- **Cardiac arrest / vasospasm / cath-negative ACS** — **[[RLR 047 - Peri-Intubation PEA Arrest and Coronary Vasospasm (ATAK Syndrome)|047]]**, [[RLR 020 - Chest Pain and Ascending Cholangitis|020]], [[RLR 180 - Exertional Lightheadedness and a Submassive Pulmonary Embolism|180]], [[RLR 026 - Syncope and Occult Gastrointestinal Bleeding|026]], [[RLR 006 - Bradycardia and Urinary Retention|006]], [[RLR 169 - Chronic Hypotension, Anemia, and Atrial Flutter with Variable Block|169]], [[RLR 175 - Alcohol-Related Cardiogenic Shock and the Three Realms of Hypotension|175]], [[RLR 019 - Abdominal Pain and Cannabinoid Hyperemesis Syndrome|019]]. Shared: [[Coronary Vasospasm]], [[Takotsubo Cardiomyopathy]], [[Cath-Negative ACS]], [[Pulseless Electrical Activity]], [[Code Blue]], [[Shock]], [[Interepisodic Reasoning]], [[ATAK Complex]], [[Kounis Syndrome]].
- **Cardiac amyloidosis / infiltrative HF / edema masquerade** — **[[RLR 048 - Bilateral Leg Pain, Pseudo-Claudication, and ATTR Cardiac Amyloidosis|048]]**, [[RLR 009 - Progressive Sensorimotor Polyneuropathy|009]], [[RLR 013 - Right Upper Quadrant Pain and Heart Failure|013]], [[RLR 041 - Unilateral Leg Edema and Metastatic Prostate Cancer|041]], [[RLR 043 - Cold Thumb and Dialysis Access Steal Syndrome|043]], [[RLR 169 - Chronic Hypotension, Anemia, and Atrial Flutter with Variable Block|169]], [[RLR 175 - Alcohol-Related Cardiogenic Shock and the Three Realms of Hypotension|175]]. Shared: [[Cardiac Amyloidosis]], [[ATTR Amyloidosis]], [[Lower-Extremity Edema]], [[Claudication]], [[Pseudo-Claudication]], [[Troponin Pyramid]], [[Low-Voltage EKG]], [[Inattentional Blindness]].
- **Acute abdominal pain / biliary / pancreatitis** — **[[RLR 049 - Hyperacute Epigastric Pain, Splenic Vein Thrombosis, and Gallstone Pancreatitis|049]]**, [[RLR 020 - Chest Pain and Ascending Cholangitis|020]], [[RLR 183 - Transient Abdominal Pain and Gallstone Cholangitis|183]], [[RLR 013 - Right Upper Quadrant Pain and Heart Failure|013]], [[RLR 010 - Postprandial Pain|010]], [[RLR 019 - Abdominal Pain and Cannabinoid Hyperemesis Syndrome|019]], [[RLR 039 - Nausea, Vomiting, Constipation, and a Metastatic Ampullary Mass|039]]. Shared: [[VIPO Framework]], [[Gallstone Pancreatitis]], [[Cholangitis]], [[Splenic Vein Thrombosis]], [[Mesenteric Vein Thrombosis]], [[Present Too Soon]], [[Interval Testing]], [[Expert Opinion Fallibility]].
- **Lymphoproliferative / lymphocytosis / spleen** — **[[RLR 051 - Intractable Hiccups and Chronic Lymphocytic Leukemia|051]]** (hiccups → CLL w/ massive spleen + splenic infarct), [[RLR 032 - Fever and Chronic Myelomonocytic Leukemia|032]], [[RLR 040 - Pharyngitis and EBV Infectious Mononucleosis|040]], [[RLR 185 - Retroperitoneal Lymphadenopathy and Indolent Lymphoma|185]], [[RLR 049 - Hyperacute Epigastric Pain, Splenic Vein Thrombosis, and Gallstone Pancreatitis|049]] (spleen), [[RLR 188 - Intracranial Hemorrhage, Splenomegaly, and Bartonella Endocarditis|188]] (splenomegaly). Shared: [[Lymphocytosis]], [[Chronic Lymphocytic Leukemia]], [[Splenomegaly]], [[Splenic Infarct]], [[Blood Before Tissue]], [[Analogical Reasoning]].
- **Symptom-as-final-common-pathway (reflex-arc reasoning)** — **[[RLR 051 - Intractable Hiccups and Chronic Lymphocytic Leukemia|051]]** (hiccups = reflex arc → central/structural/toxic-metabolic split), [[RLR 026 - Syncope and Occult Gastrointestinal Bleeding|026]] (syncope), [[RLR 037 - Episodic Lightheadedness and Functional Neurological Disorder|037]]. Shared: [[Analogical Reasoning]], [[Hiccups]], [[Cough]], [[Altered Mental Status]], [[Tempo Triage]].
- **Bone lesion / pathologic fracture / metabolic bone** — **[[RLR 052 - Chronic Hip Pain and a Fragility Fracture Mimicking a Pathologic Lesion|052]]** (fragility fracture mimicking a pathologic lesion; the five P's), [[RLR 041 - Unilateral Leg Edema and Metastatic Prostate Cancer|041]] (osteoblastic mets / PSA / pathologic fracture), [[RLR 031 - Headache and Gorham-Stout Disease|031]] (lytic bone lesion), [[RLR 007 - Hypercalcemia|007]], [[RLR 172 - Hypercalcemia in Castrate-Resistant Prostate Cancer|172]], [[RLR 182 - Hypercalcemia in ESRD and Hypophosphatemic Osteomalacia|182]] (osteomalacia). Shared: [[Pathologic Fracture]], [[Five Ps of Bone Lesions]], [[Solitary Plasmacytoma]], [[Osteoporosis]], [[Fragility Fracture]], [[Osteomalacia]], [[Teriparatide]].
- **Pseudo-radiology / signal-vs-noise / framing by imaging** — **[[RLR 053 - Multiple Small Hemorrhagic Brain Lesions and CNS Tuberculosis|053]]** (ultrasensitive CT "noise" — incl a 10 cm fibroid — frames a whole team toward metastatic cancer; the disease was TB), **[[RLR 052 - Chronic Hip Pain and a Fragility Fracture Mimicking a Pathologic Lesion|052]]** (weight-bearing osteolysis mimics malignancy; call the MSK radiologist), [[RLR 170 - Abrupt Chest and Neck Pain and a Perforated Duodenal Ulcer|170]] (look at your own imaging), [[RLR 048 - Bilateral Leg Pain, Pseudo-Claudication, and ATTR Cardiac Amyloidosis|048]] (pseudo-PAD from contrast timing), [[RLR 049 - Hyperacute Epigastric Pain, Splenic Vein Thrombosis, and Gallstone Pancreatitis|049]] (expert-opinion fallibility). Shared: [[Pseudo-Radiology]], [[Signal versus Noise]], [[Framing Bias]], [[Look at Your Own Imaging]], [[Check Your Assumptions]], [[Base Rate]], [[Expert Opinion Fallibility]].
- **Brain mass / CNS lesion / neuro-infection** — **[[RLR 053 - Multiple Small Hemorrhagic Brain Lesions and CNS Tuberculosis|053]]** (hemorrhagic gray-white lesions + basilar leptomeningitis + hydrocephalus → CNS TB; NCSE as delirium mimic), **[[RLR 054 - Unsteady Gait, Confusion, and Hemorrhagic Brain Metastases from Small Cell Lung Cancer|054]]** (hemorrhagic gray-white masses → SCLC brain mets; the "spaced-repetition" twin of 053), [[RLR 046 - Aphasia and a Mycotic Aneurysm from Bartonella Endocarditis|046]] (embolic/mycotic CNS), [[RLR 033 - Persistent Altered Mental Status and Spinal Epidural Abscess|033]], [[RLR 017 - Back Pain and Disseminated Nocardiosis|017]], [[RLR 184 - New-Onset Seizure and an Unresolved Multifocal Pelvic Process|184]] (seizure/HSV no-miss), [[CPS 269 - Headache and Leptomeningeal Lymphomatosis|CPS 269]] (leptomeningeal disease). Shared: [[Brain Mass Differential]], [[Hemorrhagic Brain Metastases]], [[MRCT Mnemonic]], [[CNS Tuberculosis]], [[Ring-Enhancing Lesions]], [[Raised Intracranial Pressure]], [[CSF Lymphocytic Pleocytosis]], [[Non-Convulsive Status Epilepticus]], [[Leptomeningeal Metastases]], [[Localization × Time Course]].
- **Management & communication as clinical-reasoning skills** — **[[RLR 054 - Unsteady Gait, Confusion, and Hemorrhagic Brain Metastases from Small Cell Lung Cancer|054]]** (ER sign-out role-play: breaking bad news / SPIKES, raised-ICP ladder, aspiration rapid response, NMS vs serotonin syndrome, don't-block-admissions), **[[RLR 055 - A Day with Reza — Venous Stasis Dermatitis, a Cavitary Lung Abscess, and Functional Syncope|055]]** ("a day with Reza" — three bread-and-butter cases; NPV of markers; intellectual honesty about made-up mechanisms; welcoming the isolated patient), **[[RLR 056 - One Life, So Many Dreams — Post-Operative Rigidity and Propofol-Induced Neuroexcitatory Syndrome|056]]** (treat the hyperactive-muscle syndrome without a firm label; "pursue what doesn't fit"), [[RLR 049 - Hyperacute Epigastric Pain, Splenic Vein Thrombosis, and Gallstone Pancreatitis|049]] (management reasoning at the bedside), [[RLR 047 - Peri-Intubation PEA Arrest and Coronary Vasospasm (ATAK Syndrome)|047]] (code-blue leadership). Shared: [[Management Reasoning]], [[Management Over Diagnosis]], [[Pursue What Doesn't Fit]], [[Breaking Bad News]], [[SPIKES Protocol]], [[Raised Intracranial Pressure]], [[Aspiration Pneumonitis]], [[ED–Medicine Handoff]], [[Tempo Triage]], [[Code Blue]].
- **Hyperthermia + rigidity / drug-induced neuromuscular syndromes** — **[[RLR 056 - One Life, So Many Dreams — Post-Operative Rigidity and Propofol-Induced Neuroexcitatory Syndrome|056]]** (NMS vs serotonin syndrome vs malignant hyperthermia vs malignant catatonia → propofol-induced neuroexcitatory syndrome; the RLR 054 Case-2 resolution), [[RLR 054 - Unsteady Gait, Confusion, and Hemorrhagic Brain Metastases from Small Cell Lung Cancer|054]] (where the case began), [[RLR 024 - Confusion and Ertapenem-Induced Encephalopathy|024]] (drug-induced neuro syndrome), [[RLR 035 - Airway Obstruction and ACE-Inhibitor Angioedema|035]] (drug-induced; bradykinin-vs-histamine analogy). Shared: [[Rigidity and Hyperthermia]], [[Neuroleptic Malignant Syndrome]], [[Serotonin Syndrome]], [[Malignant Hyperthermia]], [[Propofol-Induced Neuroexcitatory Syndrome]], [[Rhabdomyolysis]], [[Stiff Person Syndrome]], [[Sequence of Events]].
- **Red leg / cellulitis mimics / lower-extremity** — **[[RLR 055 - A Day with Reza — Venous Stasis Dermatitis, a Cavitary Lung Abscess, and Functional Syncope|055]]** (bilateral "cellulitis" = mimic → venous stasis dermatitis; the elevation test), [[RLR 041 - Unilateral Leg Edema and Metastatic Prostate Cancer|041]], [[RLR 048 - Bilateral Leg Pain, Pseudo-Claudication, and ATTR Cardiac Amyloidosis|048]] (pseudo-PAD), [[RLR 043 - Cold Thumb and Dialysis Access Steal Syndrome|043]]. Shared: [[Cellulitis Mimics]], [[Venous Stasis Dermatitis]], [[Lower-Extremity Edema]], [[Base Rate]].
- **Cavitary lung / infection-vs-cancer / weight loss** — **[[RLR 055 - A Day with Reza — Venous Stasis Dermatitis, a Cavitary Lung Abscess, and Functional Syncope|055]]** (cavity = necrosis → MSSA lung abscess in a cachectic host; "too sick, too local for cancer"), [[RLR 011 - Fever and Chronic Consolidation|011]], [[RLR 017 - Back Pain and Disseminated Nocardiosis|017]], [[RLR 023 - Pleuritic Chest Pain and Pulmonary Langerhans Cell Histiocytosis|023]], [[RLR 039 - Nausea, Vomiting, Constipation, and a Metastatic Ampullary Mass|039]] (weight loss). Shared: [[Cavitary Lung Lesion]], [[Lung Abscess]], [[Cachexia and Unintentional Weight Loss]], [[Base Rate]].
- **Functional / psychogenic / transient loss of consciousness** — **[[RLR 055 - A Day with Reza — Venous Stasis Dermatitis, a Cavitary Lung Abscess, and Functional Syncope|055]]** (functional syncope / pseudo-pheochromocytoma / PTSD; the "S's"; cough syncope; narrow-complex tachycardia + adenosine), [[RLR 037 - Episodic Lightheadedness and Functional Neurological Disorder|037]] (FND), [[RLR 026 - Syncope and Occult Gastrointestinal Bleeding|026]] (syncope). Shared: [[Functional Neurological Disorder]], [[Cough Syncope]], [[Narrow Complex Tachycardia]], [[Tachycardia and Hypertension]], [[Pseudo-Pheochromocytoma]].
- **Nutritional deficiency** — **[[RLR 168 - Fatigue, Bruising, and Multiple Vitamin Deficiencies (Scurvy)|168]]** (scurvy + B1/B6), **[[RLR 186 - Blistering Hand Rash and Pellagra|186]]** (pellagra). Shared: [[Nutritional Deficiency in Alcohol Use]], [[Scurvy]], [[Pellagra]], [[Activated Charcoal]].
- **Hemolysis / indirect hyperbilirubinemia** — [[RLR 015 - Hemolysis and Heinz Body Hemolytic Anemia|015]], [[RLR 020 - Chest Pain and Ascending Cholangitis|020]], [[RLR 021 - Chronic Pruritus and Primary Biliary Cholangitis|021]], [[RLR 030 - Dark Urine and Delayed Hemolytic Transfusion Reaction|030]], + **[[RLR 168 - Fatigue, Bruising, and Multiple Vitamin Deficiencies (Scurvy)|168]]** (indirect bili from hematoma resorption; haptoglobin excludes hemolysis). Shared: [[Hemolysis]], [[Haptoglobin]], [[Direct Coombs Test]], [[Indirect Hyperbilirubinemia]], [[Reticulocyte]].
- **Face / soft-tissue swelling & infection** — **[[RLR 173 - Unilateral Facial Swelling — Nasal Vestibulitis, Facial Cellulitis, and ACE-Inhibitor Angioedema|173]]**, [[RLR 035 - Airway Obstruction and ACE-Inhibitor Angioedema|035]]. Shared: [[Blood Pus Water]], [[ACE Inhibitor Angioedema]], [[Outside-in vs Inside-out Infection]], [[Angioedema]].
- **AKI / glomerular / hematuria** — **[[RLR 178 - Two Cases of Acute Kidney Injury — Interstitial Nephritis and MGRS|178]]**, [[RLR 018 - Gross Hematuria in End-Stage Renal Disease|018]], + 188 (GN mimic). Shared: [[Hematuria and AKI]], [[Glomerulonephritis]], [[ANCA-Associated Vasculitis]], [[MGRS]].
- *(Pre-168 clusters retained below.)*
- **Hyponatremia / ADH / water balance** — [[RLR 002 - Nausea, Vomiting, and Hyponatremia|002]], [[RLR 003 - Hypertension and Severe Hyponatremia|003]], [[RLR 029 - Dyspnea and Disseminated Varicella-Zoster|029]], [[RLR 034 - Polyuria and Post-Obstructive Nephrogenic Diabetes Insipidus|034]], + 174 (low-solute). Shared: [[Hyponatremia]], [[SIADH]], [[Adrenal Insufficiency]], [[Diabetes Insipidus]], [[Copeptin]].
- **Retention / obstruction / geriatric abdomen** — [[RLR 005 - Abdominal Distention, Constipation, and Urinary Retention|005]], [[RLR 006 - Bradycardia and Urinary Retention|006]], [[RLR 034 - Polyuria and Post-Obstructive Nephrogenic Diabetes Insipidus|034]], [[RLR 036 - Abdominal Distention, Urinary Retention, and Cecal Adenocarcinoma|036]]. Shared: [[Urinary Retention]], [[Constipation–Retention Cycle]], [[Post-Obstructive Uropathy]], [[Bowel Obstruction]].
- **Biliary / cholestasis / liver chemistry** — [[RLR 013 - Right Upper Quadrant Pain and Heart Failure|013]], [[RLR 020 - Chest Pain and Ascending Cholangitis|020]], [[RLR 021 - Chronic Pruritus and Primary Biliary Cholangitis|021]], [[RLR 025 - Liver Chemistry Abnormalities and Intrahepatic Cholestasis of Pregnancy|025]], + 183 (gallstone cholangitis). Shared: [[Hepatocellular vs Cholestatic Pattern]], [[MRCP]], [[Choledocholithiasis]].
- **Spine / cord / vertebral seeding** — [[RLR 009 - Progressive Sensorimotor Polyneuropathy|009]], [[RLR 016 - Neck Pain and Crowned Dens Syndrome|016]], [[RLR 017 - Back Pain and Disseminated Nocardiosis|017]], [[RLR 033 - Persistent Altered Mental Status and Spinal Epidural Abscess|033]]. Shared: [[Myelopathy]], [[Spinal Epidural Abscess]], [[Batson Venous Plexus]], [[Anatomical Approach]].
- **Encephalopathy / AMS / occult driver** — [[RLR 024 - Confusion and Ertapenem-Induced Encephalopathy|024]], [[RLR 026 - Syncope and Occult Gastrointestinal Bleeding|026]], [[RLR 033 - Persistent Altered Mental Status and Spinal Epidural Abscess|033]], + 174 (subdurals), [[CPS 153 - Intermittent Altered Mental Status and Non-Lesional Autoimmune Epilepsy|CPS 153]]. Shared: [[Altered Mental Status]], [[MIST Mnemonic]], [[Correlate Clinically]].
- **Heme malignancy / marrow / skin** — [[RLR 015 - Hemolysis and Heinz Body Hemolytic Anemia|015]], [[RLR 030 - Dark Urine and Delayed Hemolytic Transfusion Reaction|030]], [[RLR 032 - Fever and Chronic Myelomonocytic Leukemia|032]]. Shared: [[Monocytosis]], [[Chronic Myelomonocytic Leukemia]], [[Microangiopathic Hemolytic Anemia]].
- **Chest pain / pleuritic / PE** — [[RLR 020 - Chest Pain and Ascending Cholangitis|020]], [[RLR 023 - Pleuritic Chest Pain and Pulmonary Langerhans Cell Histiocytosis|023]], [[RLR 026 - Syncope and Occult Gastrointestinal Bleeding|026]], [[RLR 029 - Dyspnea and Disseminated Varicella-Zoster|029]], + 180 (submassive PE). Shared: [[Pulmonary Embolism]], [[Troponin]], [[Acute Coronary Syndrome]].
- **Dizziness / cerebellar / movement disorder** — [[RLR 027 - Dizziness and Peripheral Vertigo|027]], [[RLR 037 - Episodic Lightheadedness and Functional Neurological Disorder|037]]. Shared: [[Dizziness]], [[Ataxia]], [[Myoclonus]], [[Anatomical Approach]].

### CP Solvers Neurology VMR (Berkowitz) sub-clusters

All 22 CPS notes run on Berkowitz's [[Localization × Time Course|localization × time course]] engine. Kept separate from the RLR tallies; they form their own thematic groups.

- **AMS / encephalitis** — [[CPS 153 - Intermittent Altered Mental Status and Non-Lesional Autoimmune Epilepsy|153]], [[CPS 220 - Drowsiness and Bickerstaff Brainstem Encephalitis|220]], [[CPS 359 - Altered Mental Status and Anti-NMDA Receptor Encephalitis|359]], [[CPS 402 - Altered Mental Status and Disseminated Varicella-Zoster|402]]. Shared: [[Altered Mental Status]], [[Autoimmune Encephalitis]], [[Anti-NMDA Receptor Encephalitis]], [[Seizure]].
- **Rapidly progressive dementia / behavior change** — [[CPS 386 - Rapidly Progressive Dementia and Intravascular Large B-Cell Lymphoma|386]], [[CPS 395 - Behavior Change and Neurocysticercosis|395]]. Shared: [[Rapidly Progressive Dementia]], [[Round to the Nearest Schema]].
- **Headache / raised ICP / Monro-Kellie** — [[CPS 269 - Headache and Leptomeningeal Lymphomatosis|269]], [[CPS 366 - Headache, Seizure, and Cerebral Venous Sinus Thrombosis|366]], [[CPS 395 - Behavior Change and Neurocysticercosis|395]]. Shared: [[Intracranial Pressure]], [[Monro-Kellie Doctrine]], [[Cerebral Venous Sinus Thrombosis]].
- **Cancer & the nervous system** — [[CPS 269 - Headache and Leptomeningeal Lymphomatosis|269]], [[CPS 276 - Lethargy, Myoclonus, and Posterior Reversible Encephalopathy Syndrome|276]], [[CPS 386 - Rapidly Progressive Dementia and Intravascular Large B-Cell Lymphoma|386]]. Shared: [[Cancer and the Nervous System]], [[Paraneoplastic Syndrome]].
- **Movement disorder / tremor / myoclonus** — [[CPS 211 - Episodic Transient Loss of Consciousness and Multiple System Atrophy|211]], [[CPS 247 - Tremors, Myoclonus, and Steroid-Responsive Autoimmune Encephalopathy|247]], [[CPS 276 - Lethargy, Myoclonus, and Posterior Reversible Encephalopathy Syndrome|276]], [[CPS 447 - Psychiatric Disturbance, Tremor, and Wilson Disease|447]], + [[RLR 037 - Episodic Lightheadedness and Functional Neurological Disorder|037]]. Shared: [[Movement Disorder Approach]], [[Tremor]], [[Parkinsonism]], [[Wilson Disease]].
- **Episodic events → "could this be seizure?"** — [[CPS 323 - Visual Hallucinations and Occipital Seizures|323]], [[CPS 395 - Behavior Change and Neurocysticercosis|395]], [[CPS 211 - Episodic Transient Loss of Consciousness and Multiple System Atrophy|211]]. Shared: [[Seizure]], [[Non-Convulsive Seizure]].
- **Gait / weakness / neuromuscular (Berkowitz VMR + RLR neuropathy)** — **[[RLR 050 - Subacute Ascending Neuropathy and POEMS Syndrome|050]]** (POEMS; RLR guest ep w/ Berkowitz), [[RLR 009 - Progressive Sensorimotor Polyneuropathy|009]], [[RLR 044 - Recurrent Falls and Gluten Ataxia|044]], [[CPS 255 - Frequent Falls and CIDP|255]], [[CPS 299 - Clumsiness and Spinocerebellar Ataxia Type 7|299]], [[CPS 312 - Frequent Stumbling and HTLV-1-Associated Myelopathy|312]], [[CPS 344 - Bilateral Lower Limb Weakness and Kennedy Disease|344]], [[CPS 372 - Generalized Weakness and Acute Intermittent Porphyria|372]], [[CPS 410 - Right Hand Weakness and Hirayama Disease|410]], [[CPS 435 - Weakness and Numbness and an Alcohol-Related Axonal Polyneuropathy|435]], [[CPS 438 - Bilateral Leg Weakness and an Unresolved Immune-Mediated Neuropathy|438]]. Shared: [[Peripheral Neuropathy]], [[Axonal vs Demyelinating Neuropathy]], [[POEMS Syndrome]], [[CIDP]], [[EMG]], [[Motor Neuron Disease]], [[Cerebellar Ataxia]], [[Localization × Time Course]], [[Anatomical Approach]].
- **Vertigo / cerebellum** — [[CPS 290 - Vertigo and Vestibular Neuritis|290]], [[CPS 299 - Clumsiness and Spinocerebellar Ataxia Type 7|299]], + [[RLR 027 - Dizziness and Peripheral Vertigo|027]]. Shared: [[Dizziness]], [[Vestibular Neuritis]], [[Cerebellar Ataxia]].

---

## Diagnostic schema library

CP Solvers schemas mapped to episodes. **Embed by URL** (matches [[Hypercalcemia]] and [[Parathyroid Hormone]], which already hotlink CP Solvers images) so they render inline in Obsidian and stay current — I can pull the exact raw image URL for any one you want inlined into its note. My web access can't save binary copies, so these are links/embeds, not downloaded files.

> [!tip] Best single download for you
> The CP Solvers **master schema compilation (PDF)** — every schema in one file:
> `https://clinicalproblemsolving.com/wp-content/uploads/2022/02/Diagnostic-Schema.pdf`
> Schema index: https://clinicalproblemsolving.com/diagnostic-schema/

| Episode(s) | Presenting problem | Schema | Link |
|---|---|---|---|
| 001, 031 | Headache | Headache | [Neurology schemas](https://www.rlrcpsolvers.com/schemas-scripts-and-videos/neurology/) |
| 002, 003, 029, 174 | Hyponatremia | Hyponatremia | [dx-schema-hyponatremia](https://clinicalproblemsolving.com/dx-schema-hyponatremia/) |
| 005, 029, 034 | Polyuria / DI | Polyuria | [dx-schema-polyuria](https://clinicalproblemsolving.com/dx-schema-polyuria/) |
| 005, 036 | Constipation / distension | Constipation · Bowel obstruction | [GI schemas](https://www.rlrcpsolvers.com/schemas-scripts-and-videos/gi/) |
| 005, 006, 034, 036 | Urinary retention | Urinary retention | [Kidney schemas](https://www.rlrcpsolvers.com/schemas-scripts-and-videos/kidneys/) |
| 006, 169 | Bradycardia / heart block | Bradycardia / Cardiac | [dx-schema-cardiac](https://clinicalproblemsolving.com/dx-schema-cardiac/) |
| 007, 014, 028, 172, 182 | Hypercalcemia | Hypercalcemia | already embedded in [[Hypercalcemia]] |
| 008, 029, 035, 171, 181 | Dyspnea / hypoxemia / airway | Dyspnea · Hypoxemia · Upper airway | [dx-schema-dyspnea](https://clinicalproblemsolving.com/dx-schema-dyspnea/) |
| 009, 017, 033 | Weakness / myelopathy / cord | Peripheral neuropathy · Myelopathy | [Neurology schemas](https://www.rlrcpsolvers.com/schemas-scripts-and-videos/neurology/) |
| 011, 171 | Consolidation / pneumonia | Consolidation / cavitary lung | [Lung schemas](https://www.rlrcpsolvers.com/schemas-scripts-and-videos/lungs/) |
| 013, 020, 021, 025, 183 | Jaundice / cholestasis / biliary | Jaundice · Cholestasis | [dx-schema-jaundice](https://clinicalproblemsolving.com/dx-schema-jaundice/) |
| 015, 030, 168 | Anemia / hemolysis / indirect bili | Anemia · Hemolysis | [Blood & Cancer schemas](https://www.rlrcpsolvers.com/schemas-scripts-and-videos/blood-and-cancer-diagnostic-schemas/) |
| 018, 030, 178 | Hematuria / AKI / GN | Hematuria · AKI | [dx-schema-hematuria](https://clinicalproblemsolving.com/dx-schema-hematuria/) |
| 023, 029 | Pleuritic chest pain | Pleuritic chest pain | [Lung schemas](https://www.rlrcpsolvers.com/schemas-scripts-and-videos/lungs/) |
| 024, 033, 184 | Confusion / AMS / seizure | Altered mental status | [Neurology schemas](https://www.rlrcpsolvers.com/schemas-scripts-and-videos/neurology/) |
| 026, 180 | Syncope / lightheadedness | Syncope | [dx-schema-syncope](https://clinicalproblemsolving.com/dx-schema-syncope/) |
| 026, 174 | GI bleed / coffee-ground emesis | GI bleeding | [GI schemas](https://www.rlrcpsolvers.com/schemas-scripts-and-videos/gi/) |
| 027, 037 | Dizziness / vertigo | Dizziness | [Neurology schemas](https://www.rlrcpsolvers.com/schemas-scripts-and-videos/neurology/) |
| 029, 173, 179, 186 | Rash / vesicular / skin | Rash | [Rheum & derm](https://www.rlrcpsolvers.com/schemas-scripts-and-videos/rheum/) |
| 031 | Lytic bone lesion | Lytic bone lesion | [Blood & Cancer schemas](https://www.rlrcpsolvers.com/schemas-scripts-and-videos/blood-and-cancer-diagnostic-schemas/) |
| 032, 171 | Fever + cytopenias / sepsis | Fever · Sepsis | [ID schemas](https://www.rlrcpsolvers.com/schemas-scripts-and-videos/infectious-disease/) |
| 022, 176 | Arthritis (migratory/oligo) | Arthritis | [Rheum schemas](https://www.rlrcpsolvers.com/schemas-scripts-and-videos/rheum/) |
| 170, 057 | Chest pain (catastrophe) | Chest pain · Vascular catastrophe · Acute aortic syndrome | [dx-schema-chest-pain](https://clinicalproblemsolving.com/diagnostic-schema/) |
| 169, 175 | Hypotension / shock | Shock · Hypotension | [dx-schema-shock](https://clinicalproblemsolving.com/diagnostic-schema/) |
| 187 | Myalgia / proximal | Myalgia / PMR | [Rheum schemas](https://www.rlrcpsolvers.com/schemas-scripts-and-videos/rheum/) |
| 052, 041, 031 | Bone lesion / pathologic fracture | Lytic bone lesion · Bone lesion (five P's) | [Blood & Cancer schemas](https://www.rlrcpsolvers.com/schemas-scripts-and-videos/blood-and-cancer-diagnostic-schemas/) |
| 053, 054 | Brain mass / ring-enhancing lesion | Brain mass · Ring-enhancing lesion | [Neurology schemas](https://www.rlrcpsolvers.com/schemas-scripts-and-videos/neurology/) |
| 054, 056 | Post-op hyperthermia / rigidity | Hyperthermia (NMS/SS/MH/propofol) | [Neurology schemas](https://www.rlrcpsolvers.com/schemas-scripts-and-videos/neurology/) |
| 055 | Red leg / cellulitis mimics | Cellulitis vs mimics | [Rheum & derm](https://www.rlrcpsolvers.com/schemas-scripts-and-videos/rheum/) |
| 055 | Cavitary lung lesion | Cavitary lung lesion | [Lung schemas](https://www.rlrcpsolvers.com/schemas-scripts-and-videos/lungs/) |
| 055, 026, 037 | Syncope / transient LOC | Syncope · The "S's" | [dx-schema-syncope](https://clinicalproblemsolving.com/dx-schema-syncope/) |

**How to embed one** (Obsidian renders it inline, exactly like your calcium notes):

```
![Syncope Schema](https://i0.wp.com/clinicalproblemsolving.com/wp-content/uploads/2017/05/Syncope.png)
```

---

## Episode index

### RLR — sequential (001–046)
001 [[RLR 001 - New Onset Headache]] · 002 [[RLR 002 - Nausea, Vomiting, and Hyponatremia]] · 003 [[RLR 003 - Hypertension and Severe Hyponatremia]] · 004 [[RLR 004 - Rectal Pain and Proctitis]] · 005 [[RLR 005 - Abdominal Distention, Constipation, and Urinary Retention]] · 006 [[RLR 006 - Bradycardia and Urinary Retention]] · 007 [[RLR 007 - Hypercalcemia]] · 008 [[RLR 008 - Dyspnea]] · 009 [[RLR 009 - Progressive Sensorimotor Polyneuropathy]] · 010 [[RLR 010 - Postprandial Pain]] · 011 [[RLR 011 - Fever and Chronic Consolidation]] · 012 [[RLR 012 - Dysuria and Esophageal Perforation]] · 013 [[RLR 013 - Right Upper Quadrant Pain and Heart Failure]] · 014 [[RLR 014 - Hypercalcemia and Immobilization]] · 015 [[RLR 015 - Hemolysis and Heinz Body Hemolytic Anemia]] · 016 [[RLR 016 - Neck Pain and Crowned Dens Syndrome]] · 017 [[RLR 017 - Back Pain and Disseminated Nocardiosis]] · 018 [[RLR 018 - Gross Hematuria in End-Stage Renal Disease]] · 019 [[RLR 019 - Abdominal Pain and Cannabinoid Hyperemesis Syndrome]] · 020 [[RLR 020 - Chest Pain and Ascending Cholangitis]] · 021 [[RLR 021 - Chronic Pruritus and Primary Biliary Cholangitis]] · 022 [[RLR 022 - Vulvar Pain and Behçet Disease]] · 023 [[RLR 023 - Pleuritic Chest Pain and Pulmonary Langerhans Cell Histiocytosis]] · 024 [[RLR 024 - Confusion and Ertapenem-Induced Encephalopathy]] · 025 [[RLR 025 - Liver Chemistry Abnormalities and Intrahepatic Cholestasis of Pregnancy]] · 026 [[RLR 026 - Syncope and Occult Gastrointestinal Bleeding]] · 027 [[RLR 027 - Dizziness and Peripheral Vertigo]] · 028 [[RLR 028 - Hypercalcemia and Vitamin D Toxicity]] · 029 [[RLR 029 - Dyspnea and Disseminated Varicella-Zoster]] · 030 [[RLR 030 - Dark Urine and Delayed Hemolytic Transfusion Reaction]] · 031 [[RLR 031 - Headache and Gorham-Stout Disease]] · 032 [[RLR 032 - Fever and Chronic Myelomonocytic Leukemia]] · 033 [[RLR 033 - Persistent Altered Mental Status and Spinal Epidural Abscess]] · 034 [[RLR 034 - Polyuria and Post-Obstructive Nephrogenic Diabetes Insipidus]] · 035 [[RLR 035 - Airway Obstruction and ACE-Inhibitor Angioedema]] · 036 [[RLR 036 - Abdominal Distention, Urinary Retention, and Cecal Adenocarcinoma]] · 037 [[RLR 037 - Episodic Lightheadedness and Functional Neurological Disorder]] · 038 [[RLR 038 - Leukocytosis and Staphylococcus aureus Bacteriuria]] · 039 [[RLR 039 - Nausea, Vomiting, Constipation, and a Metastatic Ampullary Mass]] · 040 [[RLR 040 - Pharyngitis and EBV Infectious Mononucleosis]] · 041 [[RLR 041 - Unilateral Leg Edema and Metastatic Prostate Cancer]] · 042 [[RLR 042 - Hyperglycemia and Uncontrolled Type 2 Diabetes]] · 043 [[RLR 043 - Cold Thumb and Dialysis Access Steal Syndrome]] · 044 [[RLR 044 - Recurrent Falls and Gluten Ataxia]] · 045 [[RLR 045 - Recurrent Monoarticular Arthritis and Post-Rituximab Hypogammaglobulinemia]] · 046 [[RLR 046 - Aphasia and a Mycotic Aneurysm from Bartonella Endocarditis]] · 047 [[RLR 047 - Peri-Intubation PEA Arrest and Coronary Vasospasm (ATAK Syndrome)]] · 048 [[RLR 048 - Bilateral Leg Pain, Pseudo-Claudication, and ATTR Cardiac Amyloidosis]] · 049 [[RLR 049 - Hyperacute Epigastric Pain, Splenic Vein Thrombosis, and Gallstone Pancreatitis]] · 050 [[RLR 050 - Subacute Ascending Neuropathy and POEMS Syndrome]] · 051 [[RLR 051 - Intractable Hiccups and Chronic Lymphocytic Leukemia]] · 052 [[RLR 052 - Chronic Hip Pain and a Fragility Fracture Mimicking a Pathologic Lesion]] · 053 [[RLR 053 - Multiple Small Hemorrhagic Brain Lesions and CNS Tuberculosis]] · 054 [[RLR 054 - Unsteady Gait, Confusion, and Hemorrhagic Brain Metastases from Small Cell Lung Cancer]] · 055 [[RLR 055 - A Day with Reza — Venous Stasis Dermatitis, a Cavitary Lung Abscess, and Functional Syncope]] · 056 [[RLR 056 - One Life, So Many Dreams — Post-Operative Rigidity and Propofol-Induced Neuroexcitatory Syndrome]] · 057 [[RLR 057 - Chest Pain, Spontaneous Resolution, and an Ascending Aortic Dissection]]

*(GAP — RLR 058–167 not built.)*

### RLR — main-feed block (168–188)
Cases aired on the main CP Solvers feed with a 3-digit number; see [[rlr-main-feed-numbering]] for the convention and per-episode digests. Guests: 168 Paul Kunit, 171 Madellena Conte, 176 Zaven Sargsyan, 177 Dan Kelmanson, 181 Sanchez + Arcieri.

168 [[RLR 168 - Fatigue, Bruising, and Multiple Vitamin Deficiencies (Scurvy)]] · 169 [[RLR 169 - Chronic Hypotension, Anemia, and Atrial Flutter with Variable Block]] · 170 [[RLR 170 - Abrupt Chest and Neck Pain and a Perforated Duodenal Ulcer]] · 171 [[RLR 171 - Post-Influenza MRSA Superinfection and Native Valve Endocarditis]] · 172 [[RLR 172 - Hypercalcemia in Castrate-Resistant Prostate Cancer]] · 173 [[RLR 173 - Unilateral Facial Swelling — Nasal Vestibulitis, Facial Cellulitis, and ACE-Inhibitor Angioedema]] · 174 [[RLR 174 - Coffee-Ground Emesis, Hyponatremia, and Bilateral Subdural Hematomas]] · 175 [[RLR 175 - Alcohol-Related Cardiogenic Shock and the Three Realms of Hypotension]] · 176 [[RLR 176 - Migratory Oligoarthritis, Fever, and Brucellosis]] · 177 [[RLR 177 - Spurious Hypoxemia — Methemoglobinemia and Hyperleukocytosis]] · 178 [[RLR 178 - Two Cases of Acute Kidney Injury — Interstitial Nephritis and MGRS]] · 179 [[RLR 179 - Visual Diagnosis Rounds — PCT, Scabies, Nephrostomy Dislodgment, and Pyogenic Granuloma]] · 180 [[RLR 180 - Exertional Lightheadedness and a Submassive Pulmonary Embolism]] · 181 [[RLR 181 - Progressive Dyspnea, Exocrine Pancreatic Insufficiency, and a CFTR-Related Disorder]] · 182 [[RLR 182 - Hypercalcemia in ESRD and Hypophosphatemic Osteomalacia]] · 183 [[RLR 183 - Transient Abdominal Pain and Gallstone Cholangitis]] · 184 [[RLR 184 - New-Onset Seizure and an Unresolved Multifocal Pelvic Process]] · 185 [[RLR 185 - Retroperitoneal Lymphadenopathy and Indolent Lymphoma]] · 186 [[RLR 186 - Blistering Hand Rash and Pellagra]] · 187 [[RLR 187 - Oligomyalgia Non-Rheumatica]] · 188 [[RLR 188 - Intracranial Hemorrhage, Splenomegaly, and Bartonella Endocarditis]]

### CP Solvers — Virtual Morning Report

Separate series (kept in the same Episodes folder, prefixed `CPS`). All are **Neurology VMR** cases taught by **Aaron Berkowitz** (the "#EndNeurophobia" series); the worklist and mp3 links live in [[Neurology VMR Index]]. **22 built (through 2026-07-24):**

- CPS 153 [[CPS 153 - Intermittent Altered Mental Status and Non-Lesional Autoimmune Epilepsy]] — intermittent AMS → non-lesional autoimmune epilepsy; localization × time course.
- CPS 211 [[CPS 211 - Episodic Transient Loss of Consciousness and Multiple System Atrophy]] — transient LOC → multiple system atrophy; syncope-vs-seizure, Parkinson-plus.
- CPS 220 [[CPS 220 - Drowsiness and Bickerstaff Brainstem Encephalitis]] — drowsiness → Bickerstaff (anti-GQ1b); problem representation as the whole case.
- CPS 247 [[CPS 247 - Tremors, Myoclonus, and Steroid-Responsive Autoimmune Encephalopathy]] — tremors + myoclonus → steroid-responsive autoimmune encephalopathy; spawned the [[Tremor]] hub.
- CPS 255 [[CPS 255 - Frequent Falls and CIDP]] — frequent falls → CIDP; chronic acquired demyelinating neuropathy, gait/weakness localization. *(digest pending)*
- CPS 269 [[CPS 269 - Headache and Leptomeningeal Lymphomatosis]] — headache + AMS → leptomeningeal lymphomatosis; cancer-and-the-nervous-system, Monro-Kellie ICP.
- CPS 276 [[CPS 276 - Lethargy, Myoclonus, and Posterior Reversible Encephalopathy Syndrome]] — lethargy + myoclonus → PRES; the vital sign is the diagnosis.
- CPS 290 [[CPS 290 - Vertigo and Vestibular Neuritis]] — vertigo → vestibular neuritis; peripheral-vs-central vertigo, HINTS. *(digest pending)*
- CPS 299 [[CPS 299 - Clumsiness and Spinocerebellar Ataxia Type 7]] — clumsiness → SCA type 7; hereditary cerebellar ataxia + retinopathy. *(digest pending)*
- CPS 312 [[CPS 312 - Frequent Stumbling and HTLV-1-Associated Myelopathy]] — stumbling → HTLV-1-associated myelopathy; spastic paraparesis. *(digest pending)*
- CPS 323 [[CPS 323 - Visual Hallucinations and Occipital Seizures]] — visual hallucinations → occipital seizures (multifactorial); hallucination typology, Hickam's dictum.
- CPS 344 [[CPS 344 - Bilateral Lower Limb Weakness and Kennedy Disease]] — LL weakness → Kennedy disease (SBMA); lower motor neuron + bulbar, X-linked. *(digest pending)*
- CPS 359 [[CPS 359 - Altered Mental Status and Anti-NMDA Receptor Encephalitis]] — AMS → anti-NMDA receptor encephalitis; cell-surface vs intracellular antibodies.
- CPS 366 [[CPS 366 - Headache, Seizure, and Cerebral Venous Sinus Thrombosis]] — headache + seizure → CVST; "could this be venous?"
- CPS 372 [[CPS 372 - Generalized Weakness and Acute Intermittent Porphyria]] — generalized weakness → acute intermittent porphyria; neurovisceral, "when to think porphyria." *(digest pending)*
- CPS 386 [[CPS 386 - Rapidly Progressive Dementia and Intravascular Large B-Cell Lymphoma]] — RPD → intravascular large B-cell lymphoma; pump-pipes-plasma.
- CPS 395 [[CPS 395 - Behavior Change and Neurocysticercosis]] — behavior change → neurocysticercosis; round-to-nearest-schema.
- CPS 402 [[CPS 402 - Altered Mental Status and Disseminated Varicella-Zoster]] — AMS → disseminated VZV; zoster sine herpete, base-rate.
- CPS 410 [[CPS 410 - Right Hand Weakness and Hirayama Disease]] — hand weakness → Hirayama disease; juvenile monomelic amyotrophy. *(digest pending)*
- CPS 435 [[CPS 435 - Weakness and Numbness and an Alcohol-Related Axonal Polyneuropathy]] — weakness + numbness → alcohol-related axonal polyneuropathy; length-dependent, nutritional overlap. *(digest pending)*
- CPS 438 [[CPS 438 - Bilateral Leg Weakness and an Unresolved Immune-Mediated Neuropathy]] — leg weakness → unresolved immune-mediated neuropathy (open case). *(digest pending)*
- CPS 447 [[CPS 447 - Psychiatric Disturbance, Tremor, and Wilson Disease]] — psych disturbance + tremor → Wilson disease; neuropsychiatric + copper, ceruloplasmin interpretation. *(digest pending)*
