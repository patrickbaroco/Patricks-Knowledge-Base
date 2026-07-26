---
series: "RLR / Clinical Problem Solvers"
episode: "060"
source_url:
  - https://episodes.castos.com/633300b1184ec2-51084684/74cdd4bc-165e-4b5a-a10f-fb93145c1a3b-rlr-60-transient-loss-of-consciousness.mp3
guests:
  - Reza Manesh
  - Rabih Geha
clinical_domains:
  - cardiology
  - rheumatology
  - infectious disease
tags:
  - schema-based-reasoning
  - tempo-based-reasoning
  - base-rate-reasoning
  - test-interpretation
  - diagnostic-humility
---

## Summary

> [!summary] Scan Summary
> A 76-year-old generalist visiting from India has **three years of recurrent syncope**. Rabih refuses the word "syncope" and reframes it as [[Transient Loss of Consciousness|transient loss of consciousness]] — one of the **four S's** (syncope, seizure, stroke/TIA, sugar) — split by whether the sensorium returns *clean* (syncope) or with neuro sequelae. The [[Illness Tempo|master clue is duration]]: three years of recurrent events *without* devastation could only be syncope, because repeated seizures, strokes, or hypoglycemia would have left a wake. Then the exam disrupts it — he's **febrile (101.2) with a heart rate of 68** off any beta-blocker: [[Relative Bradycardia|relative bradycardia]] / [[Faget Sign|pulse-temperature dissociation]], which is either conduction disease unmasked by the fever "stress test" or an intracellular infection. The EKG confirms **complete heart block**, and the troponin is mildly, persistently elevated. Rabih runs the [[AV Block|AV-block]] schema from the [[Base Rate|base rate]] out — ischemia (RCA), meds, vitals (hypothermia), electrolytes (hyperkalemia), then age-related conduction disease and tachy-brady — and lets the troponin-with-preserved-function pattern raise **[[Arrhythmogenic Cardiomyopathy|arrhythmogenic cardiomyopathy]]** (sarcoid, amyloid, genetic/HCM), while the fever adds [[Lyme Carditis|Lyme]], rheumatic fever, Chagas, and — the not-to-miss — [[Endocarditis|endocarditis with a perivalvular abscess]]. Cultures are negative, echo/MRI show biventricular thickening with **patchy delayed gadolinium enhancement** plus mediastinal lymphadenopathy — pointing hard at **cardiac sarcoidosis**. A node biopsy shows non-caseating granulomas with negative cultures, and the case is left a deliberate cliffhanger — **sarcoid vs lymphoma** — anchored on [[Sarcoid-Lymphoma Syndrome|sarcoid-lymphoma syndrome]] and the rule *never lock in sarcoid at time zero*.

## Pearls

- **"Syncope" is a conclusion; the presentation is [[Transient Loss of Consciousness|transient loss of consciousness]] — work the four S's.** TLOC is syncope, seizure, stroke/TIA, or sugar (hypoglycemia); split them by whether recovery is to a *completely clear sensorium* (syncope) versus lingering confusion, drowsiness, or focal deficits (the other three). The **pre-event and post-event** story does most of the work. ([[Schema-Based Reasoning|schema]])
- **[[Illness Tempo|Duration is a discriminator]] — years of recurrent TLOC without sequelae must be syncope.** You cannot seize, stroke, or go hypoglycemic repeatedly for years without accumulating damage; recurrent, non-devastating TLOC over years is a transient loss of perfusion that self-corrects. Chronicity narrows the schema before any HPI detail arrives.
- **Fever with a heart rate that "should be" faster is [[Relative Bradycardia|relative bradycardia]] / [[Faget Sign|pulse-temperature dissociation]].** Off nodal blockers, it is either (1) conduction-system disease that the fever is *stress-testing* into view, or (2) a [[Faget Sign|Faget-sign]] infection (classically intracellular organisms — typhoid, and others). Here it was the herald of complete heart block.
- **Run the [[AV Block|AV-block]] schema from the [[Base Rate|base rate]] out, then let outliers push you further.** First exclude the common and reversible: **ischemia (RCA), medications, vital-sign abnormalities (never miss hypothermia), and electrolytes (hyperkalemia)**; then age-related conduction disease and tachy-brady. "Rare manifestations of common diseases beat rare diseases" — don't let one odd feature (a positive troponin) stampede you past the base rate.
- **Troponin + advanced conduction disease with *preserved* ventricular function = [[Arrhythmogenic Cardiomyopathy|arrhythmogenic cardiomyopathy]].** Any cardiomyopathy can eventually wreck the conduction system, but a few destroy it *disproportionately* early: **sarcoid, amyloid, and genetics (HCM)**. Conduction disease out of proportion to pump failure should call sarcoid to mind — and **patchy delayed gadolinium enhancement** on cardiac MRI cinches the suspicion.
- **AV block + fever + troponin is a distinct trifecta — endocarditis with a perivalvular abscess is the not-to-miss.** Alongside **[[Lyme Carditis|Lyme]]** (the U.S. "world champion" of infectious conduction disease), rheumatic fever (PR prolongation is a minor criterion), and Chagas, the most dangerous hypothesis is aortic-valve **[[Endocarditis|endocarditis with a mural/perivalvular abscess]]** eating the conduction system.
- **[[Sarcoid-Lymphoma Syndrome|Never lock in sarcoid at time zero]].** Up to ~10–15% of sarcoid patients harbor lymphoma at or within two years of diagnosis (a low-grade lymphoma driving a sarcoid-like paraneoplastic granulomatous reaction). Treat the granulomatous disease, but keep hunting the trigger — as with lymphoma-driven hypercalcemia or HLH, you treat the second process *and* the underlying cause.

## Problem Representation

A 76-year-old man visiting from India, a generalist by training, with hypertension and hyperlipidemia, presents with three years of recurrent syncope — abrupt, sometimes defecation-associated, with fully clear post-ictal sensorium and no head trauma despite repeated events. He is febrile to 101.2 °F with a heart rate of 68 off any nodal blocker (relative bradycardia / pulse-temperature dissociation), normotensive, with a normal cardiac and volume exam and no localizing infectious findings. EKG shows AV dissociation with complete (third-degree) heart block; troponin is mildly but persistently elevated; potassium is normal. Echocardiography shows biventricular thickening, and cardiac MRI shows patchy delayed gadolinium enhancement throughout the ventricles, with mediastinal lymphadenopathy on cross-sectional imaging and negative blood cultures with no valvular vegetation. A lymph-node biopsy reveals non-caseating granulomas with negative cultures, leaving a working diagnosis of cardiac sarcoidosis with an unresolved sarcoid-versus-lymphoma question (sarcoid-lymphoma syndrome).

---

## Case Narrative

Reza presents from a wedding in Nashville while Rabih solves. The chief concern is **syncope** in a 76-year-old visiting from India with three years of recurrent events. Rabih immediately reframes: patients don't experience "syncope," they experience **[[Transient Loss of Consciousness|transient loss of consciousness]]**, one of the *four S's* — syncope, seizure, stroke/TIA, and sugar (hypoglycemia). He splits them by the recovery state: seizure, stroke, and sugar tend to leave neurologic sequelae (confusion, drowsiness, shakiness, focal deficit), whereas true syncope returns the patient to a completely clear sensorium. He stresses that the **pre-event** (aura, unilateral numbness suggesting a partial seizure, post-prandial timing suggesting hypoglycemia, exertion suggesting cardiac) and **post-event** stories carry most of the diagnostic weight. Then he applies [[Illness Tempo|tempo]] as a second discriminator with only one data point: three years of recurrent events *without* devastation can essentially only be syncope, because recurrent seizures, strokes, or hypoglycemic episodes over years would have accumulated damage. He commits to a transient loss of perfusion that self-corrects.

The HPI adds that events are often out of the blue, some linked to bowel movements (a vasovagal flavor), with clear recovery and no trauma. Past history is only hypertension and hyperlipidemia; no substance use. The **exam breaks the vasovagal frame**: he is **febrile to 101.2** with a heart rate of **68**, normotensive, with a normal cardiac, JVP, lung, and volume exam and no scalp abrasions. Rabih first analyzes the fever independently — common sources (respiratory, urinary, skin, intra-abdominal) are absent, prompting a move to unique exposures given India — but the vital signs stop him: off any beta-blocker, a heart rate of 68 with a temperature of 101 is **[[Relative Bradycardia|relative bradycardia]]** / **[[Faget Sign|pulse-temperature dissociation]]**. He frames two possibilities: long-standing sinus/AV-node disease that the fever is now *stress-testing* into failure, or a [[Faget Sign|Faget-sign]] infection (classically intracellular organisms). He asks for the EKG.

The EKG shows **AV dissociation and complete heart block**, and the troponin is mildly but persistently elevated (≈0.1–0.2; high-sensitivity ≈100–200). Rabih notes the momentum: the syncope is now clearly **advanced AV-node disease / third-degree block**, and warns that the *unusual* combination (heart block + fever + troponin) tempts a jump to rare diagnoses — but **"rare manifestations of common diseases are more common than rare diseases."** He works the [[AV Block|AV-block]] schema from the [[Base Rate|base rate]] out: exclude **ischemia** (RCA territory — reassuringly no ischemic EKG changes despite the troponin), **medications** (none), **vital-sign abnormalities** (never miss **hypothermia**), and **electrolytes** (**hyperkalemia** — the one value still pending). Past those, the common causes are **age-related conduction disease** and **tachy-brady syndrome** (needing old EKGs / a fib-flutter history). The troponin then raises the pattern of **[[Arrhythmogenic Cardiomyopathy|arrhythmogenic cardiomyopathy]]**: cardiomyopathies that destroy conduction *disproportionately* early relative to pump function — **sarcoid, amyloid, and genetics (HCM)** — which fits a patient with advanced block but no heart failure. Because he is also *febrile*, Rabih layers the infectious causes of disproportionate conduction disease: **[[Lyme Carditis|Lyme]]** (the U.S. champion), rheumatic fever (PR prolongation is a minor criterion), Chagas (no epidemiologic risk), and the **not-to-miss [[Endocarditis|aortic-valve endocarditis with a perivalvular/mural abscess]]**. His next moves: manage the block (cardiology, transvenous pacing question), confirm normal potassium, blood cultures, a careful skin exam for erythema migrans, tick-exposure history, and a bedside echo for endocarditis.

Potassium is normal; cardiology performs a bedside **echo** showing biventricular thickening, followed by **cardiac MRI** showing ventricular thickening with **patchy delayed gadolinium enhancement** throughout the myocardium; blood cultures are negative with no vegetation, and cross-sectional imaging shows **mediastinal lymphadenopathy**. Rabih updates the representation to an older man with a prolonged febrile syndrome, advanced AV block, and patchy delayed enhancement, and draws two lessons. First, a **prolonged fever without an infectious source** shifts toward autoimmune disease — and the short list of autoimmune causes of *true* fever centers on two more S's, **SLE and sarcoid** (Reza tallies "six S's"). Second, patchy delayed enhancement is **highly concerning for cardiac sarcoidosis**, augmented by disseminated lymphadenopathy. He reinforces the point with duration: a process devastating this patient for years narrows an inflammatory differential to a short list — **sarcoid, IgG4 disease, Whipple's, Brucella, adrenal insufficiency** — and, centered on the heart and AV node with lymphadenopathy and patchy enhancement, cardiac sarcoid dominates. He would even discuss with cardiology whether to **trial steroids to recover conduction before committing to a permanent pacemaker**, and whether the MRI suffices or a PET-CT/biopsy is needed. He flags the appropriate **humility of diagnosing sarcoid in a TB-endemic patient**, noting cardiac TB is usually pericardial rather than AV-nodal, so there's no real momentum for TB beyond immunosuppression angst.

The radiologist's differential matched Rabih's and added **lymphoma**; a node biopsy showed **non-caseating granulomas with negative cultures**, leaving the case a deliberate cliffhanger between **sarcoid and lymphoma**. Rabih delivers the key teaching: **you can never diagnose sarcoid at time zero with certainty** — the question is only whether you are confident enough to immunosuppress — because of **[[Sarcoid-Lymphoma Syndrome|sarcoid-lymphoma syndrome]]**, where up to ~10–15% of sarcoid patients have a lymphoma at diagnosis or within two years, the theory being a low-grade lymphoma inducing a sarcoid-like paraneoplastic granulomatous reaction (Jack Penner's patient, treated for both). As with lymphoma causing hypercalcemia or HLH, you treat the second process separately but always treat the underlying trigger. Finally, Reza asks how Rabih avoids being swayed by epidemiologic buzzwords (India here; HIV in a prior SGIM case). Rabih's answer: **you never over- or under-weight a datum once you truly understand its value** — being from India with AV block is worth ~zero, but with mitral stenosis it would be paramount — so **de-biasing is just continual learning**, and the main barrier to learning is **ego**.

## Reasoning Breakdown

### Bayesian Updates

| Data point | Hypothesis raised/adjusted | Direction of update |
|---|---|---|
| "Syncope" as chief concern | Transient loss of consciousness (four S's) | Reframed to TLOC |
| 3 years recurrent, no devastation between events | Seizure / stroke / hypoglycemia | Lowered → syncope (chronicity) |
| Clear sensorium after events, some BM-associated | Vasovagal syncope | Raised |
| Fever 101.2 with HR 68 off nodal blockers | Relative bradycardia (conduction disease vs Faget-sign infection) | Both raised |
| EKG: AV dissociation, complete heart block | Advanced AV-node disease as syncope cause | Confirmed |
| Troponin mildly, persistently elevated; no ischemic EKG | RCA ischemia | Lowered; arrhythmogenic cardiomyopathy raised |
| Normal potassium | Hyperkalemia | Excluded |
| No meds, normal temp-for-block, no hypothermia | Reversible causes (meds/vitals/lytes) | Excluded |
| Advanced block with preserved pump function | Sarcoid / amyloid / genetic (HCM) | Raised |
| Fever + block + troponin trifecta | Endocarditis + abscess, Lyme, rheumatic fever, Chagas | Raised (endocarditis = not-to-miss) |
| Negative cultures, no vegetation | Endocarditis | Lowered |
| Patchy delayed gadolinium enhancement + mediastinal nodes | Cardiac sarcoidosis | Strongly raised |
| Prolonged fever without source | Autoimmune (SLE, sarcoid) | Raised |
| Node biopsy: non-caseating granulomas, cultures negative | Sarcoid (vs lymphoma) | Confirmed granulomatous; lymphoma kept open |
| Radiologist adds lymphoma; expert concern | Sarcoid-lymphoma syndrome | Raised (never lock in sarcoid) |

### Illness Scripts and Bias

- **[[Schema-Based Reasoning|Schema on schema]].** The episode stacks schemas: the four-S TLOC schema, the AV-block schema (ischemia/meds/vitals/lytes → age/tachy-brady → arrhythmogenic cardiomyopathy → infectious), and the prolonged-fever-without-source schema (autoimmune SLE/sarcoid; the chronic-inflammation short list). Each converts a scary, unusual picture into a few ordered moves.
- **[[Illness Tempo|Tempo as a first-pass discriminator]].** Duration alone — three years without sequelae — collapses the TLOC differential to syncope before any HPI, and later a "years of inflammation" frame narrows the autoimmune differential to a five-item list. Time is used as data, twice.
- **[[Base Rate|Base rate discipline against an outlier]].** Rabih explicitly guards against letting the unusual troponin stampede him past the common, reversible AV-block causes — "rare manifestations of common diseases beat rare diseases" — a live [[Representativeness Heuristic|anti-representativeness]] move.
- **[[Test Interpretation|Reading the vital signs and the MRI]].** The fever-with-relative-bradycardia is interpreted (conduction disease vs Faget sign), the troponin-with-preserved-function points to arrhythmogenic cardiomyopathy, and **patchy delayed gadolinium enhancement** is treated as a specific [[Granulomatous Disease|granulomatous]] signature — each finding read for meaning rather than tallied.
- **[[Diagnostic Humility|Humility and never-lock-in]].** Sarcoid can't be diagnosed with certainty at time zero; [[Sarcoid-Lymphoma Syndrome|sarcoid-lymphoma syndrome]] mandates ongoing vigilance for the trigger; TB caution is voiced for a TB-endemic patient before immunosuppression. The management even considers steroids-before-pacemaker to recover conduction.
- **De-biasing as calibrated weighting.** The closing lesson reframes bias not as "ignore buzzwords" but as *knowing each datum's true value* — India is worth ~0 for AV block but paramount for mitral stenosis — so de-biasing is continual learning, gated mainly by ego.

## Teaching Discussion

- Treat "syncope" as one endpoint of transient loss of consciousness and run the four S's (syncope, seizure, stroke/TIA, sugar), separating them by whether recovery is to a completely clear sensorium; mine the pre-event and post-event history, which carry most of the signal.
- Use chronicity as a discriminator: recurrent transient loss of consciousness over years without accumulating deficits is almost certainly syncope, because recurrent seizures, strokes, or hypoglycemia would leave a wake.
- Recognize relative bradycardia / pulse-temperature dissociation (fever without the expected tachycardia, off nodal blockers) as either conduction disease unmasked by the febrile stress test or a Faget-sign infection.
- Work AV block from the base rate outward — exclude ischemia (RCA), medications, vital-sign abnormalities (never miss hypothermia), and electrolytes (hyperkalemia) first, then age-related conduction disease and tachy-brady — and resist letting one unusual feature push you prematurely toward rare diagnoses.
- Read advanced conduction disease with preserved ventricular function as a clue to arrhythmogenic cardiomyopathy (sarcoid, amyloid, genetic/HCM); patchy delayed gadolinium enhancement on cardiac MRI, especially with lymphadenopathy, strongly suggests cardiac sarcoidosis.
- Hold the AV-block-plus-fever-plus-troponin trifecta as its own differential — endocarditis with a perivalvular abscess is the not-to-miss, with Lyme, rheumatic fever, and Chagas alongside.
- Shift a prolonged fever without an infectious source toward autoimmune disease, remembering that few autoimmune conditions cause true fever (SLE and sarcoid foremost), and that a years-long inflammatory illness narrows to a short list (sarcoid, IgG4 disease, Whipple's, Brucella, adrenal insufficiency).
- Never lock in sarcoid at time zero: sarcoid-lymphoma syndrome means a lymphoma may coexist at or within two years of diagnosis, so treat the granulomatous disease while continuing to search for a trigger, and consider steroids to recover conduction before a permanent pacemaker.
- De-bias by calibrating each datum's true value rather than reflexively amplifying or discounting epidemiologic buzzwords; the value of "from India" depends entirely on the syndrome it modifies.

## Handbook Opportunities

- A **transient loss of consciousness** card — the four S's, the clear-vs-impaired-recovery split, and pre/post-event history.
- A **recurrent syncope** card — chronicity as a discriminator and the vasovagal-vs-structural fork.
- An **AV block** card — the base-rate schema (ischemia/meds/vitals/lytes → age/tachy-brady → arrhythmogenic cardiomyopathy → infectious) and the fever-plus-troponin trifecta.
- A **relative bradycardia / Faget sign** card — conduction disease vs intracellular infection.
- A **cardiac sarcoidosis** card — conduction disease out of proportion to pump function, patchy delayed enhancement, steroids-before-pacemaker, and sarcoid-lymphoma syndrome.
- A **prolonged fever without source** card — SLE and sarcoid, plus the chronic-inflammation short list.

## References

- Birnie DH et al. *HRS expert consensus on cardiac sarcoidosis.* Heart Rhythm — conduction disease, delayed enhancement, steroids, and device decisions. https://pubmed.ncbi.nlm.nih.gov
- Brignole M et al. *ESC Guidelines for the diagnosis and management of syncope.* European Heart Journal. https://pubmed.ncbi.nlm.nih.gov
- Reviews on **Faget sign / pulse-temperature dissociation** and its infectious associations. https://pubmed.ncbi.nlm.nih.gov
- Brincker H. *The sarcoidosis-lymphoma syndrome.* — coexisting lymphoma in sarcoid patients. https://pubmed.ncbi.nlm.nih.gov
- **Lyme carditis** and high-grade AV block reviews. https://pubmed.ncbi.nlm.nih.gov

## Evergreen Note Updates

- [ ] Create **[[Transient Loss of Consciousness]]** — the four-S schema (syncope/seizure/stroke/sugar), the clean-recovery split, and pre/post-event history; link **[[Syncope]]** and chronicity-as-discriminator.
- [ ] Create **[[AV Block]]** — the base-rate schema (ischemia/meds/vitals-hypothermia/hyperkalemia → age/tachy-brady → arrhythmogenic cardiomyopathy → infectious) and the fever+troponin trifecta.
- [ ] Create **[[Cardiac Sarcoidosis]]** — conduction disease out of proportion to pump function, patchy delayed gadolinium enhancement, PET/biopsy, and steroids-before-pacemaker; cross-link **[[Granulomatous Disease]]**.
- [ ] Create **[[Arrhythmogenic Cardiomyopathy]]**, **[[Relative Bradycardia]]** / **[[Faget Sign]]**, **[[Sarcoid-Lymphoma Syndrome]]**, **[[Lyme Carditis]]**, and **[[Endocarditis]]** (perivalvular abscess as a conduction-disease cause).
- [ ] Create a **prolonged-fever-without-source** note (SLE + sarcoid; the chronic-inflammation short list: sarcoid, IgG4, Whipple's, Brucella, adrenal insufficiency).
- [ ] Update **[[Base Rate]]** — add "rare manifestations of common diseases beat rare diseases" with the AV-block example; update **[[Granulomatous Disease]]** — add cardiac sarcoid and the non-caseating-granuloma/lymphoma caveat.
- [ ] Update **[[Diagnostic Humility]]** — add never-lock-in-sarcoid and the calibrated-weighting model of de-biasing (a datum's value depends on the syndrome it modifies).

## Related Notes

[[Transient Loss of Consciousness]] · [[Syncope]] · [[AV Block]] · [[Cardiac Sarcoidosis]] · [[Arrhythmogenic Cardiomyopathy]] · [[Relative Bradycardia]] · [[Faget Sign]] · [[Sarcoid-Lymphoma Syndrome]] · [[Lyme Carditis]] · [[Endocarditis]] · [[Granulomatous Disease]] · [[Schema-Based Reasoning]] · [[Illness Tempo]] · [[Base Rate]] · [[Representativeness Heuristic]] · [[Test Interpretation]] · [[Diagnostic Humility]] · [[Center of Gravity]] · [[Cognitive Autopsy]] · [[RLR 006 - Bradycardia and Urinary Retention]] · [[RLR 032 - Fever and Chronic Myelomonocytic Leukemia]]
