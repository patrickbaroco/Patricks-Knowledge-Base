---
series: "RLR / Clinical Problem Solvers"
episode: "071"
source_url:
  - https://episodes.castos.com/633300b1184ec2-51084684/6d212d15-e9ae-4851-9547-50f184fae38f-rlr-case-71-heart-failure.mp3
guests:
  - Reza Manesh
  - Rabih Geha
clinical_domains:
  - cardiology
tags:
  - schema-based-reasoning
  - test-interpretation
  - base-rate-reasoning
  - analogical-reasoning
  - tempo-based-reasoning
---

## Summary

> [!summary] Scan Summary
> A **98-year-old** man — healthy until a dual-chamber pacemaker was placed a year ago for fibrotic conduction disease/advanced AV block — presents with a week of leg swelling and orthopnea. In an expert-interview format, Reza lays out how to diagnose **[[Heart Failure|heart failure]]**: it is a **clinical diagnosis** on a **spectrum** (a pristine echo doesn't exclude it), split into **[[HFpEF|HFpEF]]** (a metabolic-syndrome marker) and **[[HFrEF|HFrEF]]** (ischemic until proven otherwise); the history (exertional dyspnea, PND > orthopnea, weight/volume), the **[[JVP|JVP]]** (the exam skill to hone; a third lack edema), and the **[[BNP|BNP]]** (sensitive but fooled by obesity) build the case. He starts **[[Lasix Dosing|IV furosemide at 20 × creatinine]]** (Topf's rule), targets ≥2 L off, and insists on an **EF** to guide therapy ([[GDMT|GDMT]] "ABCs") and etiology. The echo reveals the twist: EF has fallen from normal to **25%**, with a **loculated circumferential pericardial effusion** and dilated IVC. Reza refuses the coincidence — *well, then a pacemaker, then heart failure* — and reasons to **[[Pacemaker-Induced Cardiomyopathy|pacemaker-induced cardiomyopathy]]** (confirmed by **100% RV pacing** for a year), calling EP to interrogate and reduce pacing. For the **[[Pericardial Effusion|effusion]]** he runs the differential (idiopathic, uremic, thyroid, autoimmune, infectious/TB), uses **[[Analogical Reasoning|loculation-as-empyema]]** analogy but flags that a 98-year-old can't mount inflammation, and works it up with ESR/CRP and PET — all normal. Final answer: **[[Post-Cardiac-Injury Pericarditis|post-cardiac-injury (Dressler-like) pericarditis]]** from the pacemaker. One device, two hits — the myocardium **and** the pericardium.

## Pearls

- **Leg swelling is [[Venous Insufficiency|venous insufficiency]] by base rate — but an ED visit plus orthopnea reprioritizes the heart.** Most ambulatory leg edema (age >50) is venous valvular incompetence; presenting to the ED and having **orthopnea** shifts the prior toward cardiac, though [[Orthopnea|orthopnea has its own differential]] (COPD, ascites, diaphragm) and **PND is the more cardiac-specific** symptom. ([[RLR 071 - Heart Failure and Pacemaker-Induced Cardiomyopathy|RLR 071]])
- **[[Heart Failure|Heart failure]] is a clinical diagnosis on a spectrum.** A normal echo/EF/diastolic function does not exclude it; label it carefully (and document uncertainty). **[[HFpEF|HFpEF]]** is a marker of metabolic syndrome; **[[HFrEF|HFrEF]]** is ischemic until proven otherwise — and the EF steers both therapy and etiology. ([[RLR 071 - Heart Failure and Pacemaker-Induced Cardiomyopathy|RLR 071]])
- **Weight the history and exam by specificity — and hone the [[JVP|JVP]].** PND (panting at the edge of the bed) and volume/weight gain raise the antenna more than orthopnea; up to a **third** of HF patients lack peripheral edema and chronic HF can have clear lungs, so the **JVP** (and abdominojugular reflux — press *anywhere* on the abdomen) is the exam skill worth mastering. Interpret **[[BNP|BNP]]** knowing obesity lowers it (adipose metabolizes it). ([[RLR 071 - Heart Failure and Pacemaker-Induced Cardiomyopathy|RLR 071]])
- **Start loop diuretic at [[Lasix Dosing|20 × the creatinine]] (Topf's rule), IV, BID.** Target ≥2 L off in a patient with normal renal function, with strict I/Os, daily weights, and electrolyte repletion — and get an **EF** early, because a very low EF adds afterload reduction to the plan. ([[RLR 071 - Heart Failure and Pacemaker-Induced Cardiomyopathy|RLR 071]])
- **New cardiomyopathy after a pacemaker → [[Pacemaker-Induced Cardiomyopathy|pacemaker-induced cardiomyopathy]] (and interrogate the device).** Chronic **high-burden RV pacing** (here **100%** for a year) causes dyssynchrony and a dilated, reduced-EF cardiomyopathy; the fix is to **minimize RV pacing** (program the native conduction as primary, pacing as backup) or upgrade to [[CRT|CRT]]. Complications track with **time from implant** (acute perforation → chronic PICM), so always **call EP** to read capture/pacing burden. ([[RLR 071 - Heart Failure and Pacemaker-Induced Cardiomyopathy|RLR 071]])
- **A [[Pericardial Effusion|loculated pericardial effusion]] earns a full differential — and [[Analogical Reasoning|loculation borrows from the pleural space]].** Effusions are ~40–50% idiopathic, then uremic, thyroid, autoimmune (lupus/RA love the serosa), and infectious (TB in endemic settings); **loculation** suggests an exudative/infectious process (as it does in the pleura), but in a 98-year-old the marrow is largely fat, so a **muted inflammatory response** is expected — pursue ESR/CRP, counts, and even PET. ([[RLR 071 - Heart Failure and Pacemaker-Induced Cardiomyopathy|RLR 071]])
- **Any cardiac injury can trigger [[Post-Cardiac-Injury Pericarditis|post-cardiac-injury (Dressler-like) pericarditis]].** Classically post-MI, it also follows CABG, PCI, and — rarely (1–5%) — **pacemaker placement**; with a negative infectious/malignant/autoimmune workup, a loculated effusion after a device implant fits this diagnosis. ([[RLR 071 - Heart Failure and Pacemaker-Induced Cardiomyopathy|RLR 071]])

## Problem Representation

A 98-year-old man, previously healthy apart from hypertension (on amlodipine), who underwent dual-chamber (right atrial and right ventricular lead) pacemaker placement one year ago for fibrotic age-related conduction disease with advanced AV block and normal ejection fraction, presents with a week of bilateral leg swelling and orthopnea. Examination and studies show an elevated JVP, bibasilar crackles, peripheral edema, a BNP over 2000, a "wet" chest x-ray, and normal creatinine; he diureses well on IV furosemide, and echocardiography (previously normal) now shows an ejection fraction reduced to ~25%, a loculated circumferential pericardial effusion, and a dilated IVC. Device interrogation reveals 100% right-ventricular pacing for a year, and an infectious/malignant/autoimmune workup (ESR, CRP, PET) is negative — establishing new heart failure from pacemaker-induced cardiomyopathy together with a post-cardiac-injury (Dressler-like) pericarditis, both attributable to the pacemaker.

---

## Case Narrative

Rabih presents a man with a week of leg swelling and orthopnea, and runs the episode as an **expert interview** of Reza on diagnosing heart failure. Reza first sets the base rate: most ambulatory **leg swelling is [[Venous Insufficiency|venous insufficiency]]** (aging valves after 50), but two features here — an **ED presentation** and **orthopnea** — reprioritize the **heart** (with the caveat, from the Rezigh twins' [[Orthopnea|orthopnea schema]], that orthopnea also comes from COPD, ascites, and diaphragm weakness, and that **PND is more cardiac-specific**).

Asked how he actually diagnoses **[[Heart Failure|heart failure]]**, Reza gives a Gurpreet-Dhaliwal-taught framework: it is a **clinical diagnosis** (a pristine echo doesn't exclude it) on a **spectrum** (document uncertainty rather than mislabel). Two poles: **[[HFpEF|HFpEF]]** as a **metabolic-syndrome** marker (obesity, HTN, diabetes, NAFLD) and **[[HFrEF|HFrEF]]** as **ischemic until proven otherwise**. The **history** carries the most weight when specific — exertional dyspnea/angina, volume/weight gain, and especially **PND** (panting at the bed's edge), with orthopnea weaker. On **exam**, up to a **third of HF patients lack edema** and chronic HF may have clear lungs, so the **[[JVP|JVP]]** (and abdominojugular reflux — press *anywhere* on the abdomen) is the skill to hone; and like cirrhosis, much HF is **chronic and compensated**, diagnosed at decompensation. **Labs**: **[[BNP|BNP]]** is sensitive (ventricular stretch) but limited (obesity lowers it via adipose metabolism), plus creatinine, CXR, and echo.

Rabih supplies the data — **JVP at the jaw sitting up**, bibasilar crackles, edema, **BNP >2000**, a **wet** x-ray, **normal creatinine** — and asks two management questions. On diuresis, Reza cites **Joel Topf's rule** — **[[Lasix Dosing|20 × the creatinine]]** for the initial IV furosemide dose — given BID, targeting **≥2 L off**, with strict I/Os, daily weights, and electrolyte repletion. On workup, he insists on the **EF**: a low EF adds **afterload reduction**, and the EF steers etiology (HFpEF-metabolic vs HFrEF-ischemic) and therapy — the **[[GDMT|GDMT]] "ABCs"** (**A**ngiotensin inhibition, **B**eta-blocker, SGLT2 **C**-transporter inhibitor) for HFrEF; aldosterone antagonist + SGLT2 for HFpEF. He also invokes Rabih's **anatomic HF-etiology schema** (myocardium, valves, pericardium, rhythm).

The history reframes everything: **98 years old**, healthy, with **fibrotic age-related conduction disease** and **advanced AV block** treated a year ago with a **dual-chamber pacemaker** (RA + RV leads) — with a **normal EF at that time** — plus HTN on amlodipine. He diureses well, and the repeat **echo** shows the twist: **EF fallen to ~25%** (previously normal), a **loculated circumferential pericardial effusion**, and a **dilated IVC**. Reza refuses the coincidence — *fine, then a pacemaker, then heart failure* — and, recalling the [[RLR 068 - Episodic Dyspnea and Phrenic Nerve Stimulation|prior pacemaker case]], reasons that **pacemaker complications track with time from implant** (acute perforation → chronic **[[Pacemaker-Induced Cardiomyopathy|pacemaker-induced cardiomyopathy]]**). A dual-chamber device paces the **right** heart (easier access; coordinates atrium-then-ventricle), and **chronic high-burden RV pacing** causes dyssynchrony and a dilated, low-EF cardiomyopathy. He'd **call EP** to interrogate — and indeed the patient is **100% RV-paced** for a year, confirming PICM; the fix is to **minimize RV pacing** (native conduction primary, pacing backup) or upgrade to CRT. Ischemic cardiomyopathy in a 98-year-old is second-tier given the sequence.

The **loculated pericardial effusion** (echo-confirmed as significant) gets its own workup. Reza runs the [[Pericardial Effusion|effusion differential]] — ~40–50% **idiopathic**, then **uremic/dialysis**, **thyroid**, **autoimmune** (lupus, RA — serosa-lovers), and **infectious** (TB if endemic) — and applies **[[Analogical Reasoning|analogy]]**: **loculation**, as in the pleural space (empyema), suggests an exudative/infectious process. But he immediately checks it against physiology — a **98-year-old's marrow is largely fat**, so a **muted inflammatory response** is expected, and he'd send **ESR/CRP, WBC, platelets**, and even a **PET** to look for activity, while wondering whether the implant caused a small **perforation/effusion** that became a nidus. Autoimmune and widespread cancer are argued down by age and pattern. The workup — **PET-CT and ESR/CRP** — returns **normal**, lowering infection, malignancy, and autoimmune disease.

The diagnosis: **[[Post-Cardiac-Injury Pericarditis|post-cardiac-injury (Dressler-like) pericarditis]]** — classically post-MI, but seen after **any cardiac injury** (CABG, PCI, and rarely, 1–5%, **pacemaker placement**). So the pacemaker **irritated both the pericardium and the LV**: one device, two hits. Reza notes the effusion must be checked for **constriction/tamponade** (RV diastolic collapse, septal bowing) before attributing the HF solely to PICM. Management (deferred to the recap): **manage volume**, decide on the pacemaker (**upgrade to [[CRT|CRT]]** with an added LV lead vs. medical therapy if the LV recovers — the procedure being morbid in a 98-year-old), and **not** treat the pericarditis with NSAIDs given normal ESR/CRP (a resolving process). Both close on the unifying insight — the temporal sequence made the pacemaker the culprit for two problems — and Reza's habit of **analogical reasoning** (loculation, and chronic-compensated HF as cirrhosis-like).

## Reasoning Breakdown

### Bayesian Updates

| Data point | Hypothesis raised/adjusted | Direction of update |
|---|---|---|
| Bilateral leg swelling | Venous insufficiency (base rate) | Baseline |
| ED presentation + orthopnea | Cardiac cause | Raised |
| JVP elevated, crackles, edema, BNP >2000, wet CXR | Heart failure | Confirmed (clinical) |
| Normal creatinine | Renal contribution; diuretic dosing | Guides Lasix (20×Cr) |
| Prior normal EF; now EF 25% | New cardiomyopathy | Raised |
| Healthy until pacemaker 1 year ago | Coincidental HF | Lowered (sequence) |
| Dual-chamber pacemaker; 100% RV pacing | Pacemaker-induced cardiomyopathy | Strongly raised → confirmed |
| Age 98, sudden reduced EF | Ischemic cardiomyopathy | Second-tier |
| Loculated circumferential pericardial effusion | Infectious/exudative (loculation analogy) | Raised, then tempered (age/marrow) |
| Age 98 (fatty marrow) | Ability to mount inflammation | Lowered (muted response expected) |
| PET-CT and ESR/CRP normal | Infection, malignancy, autoimmune | Lowered |
| Effusion after device implant, workup negative | Post-cardiac-injury (Dressler-like) pericarditis | Confirmed |

### Illness Scripts and Bias

- **[[Schema-Based Reasoning|Layered cardiac schemas]].** The HF-diagnosis framework (clinical, spectrum, HFpEF vs HFrEF), the anatomic etiology schema (myocardium/valves/pericardium/rhythm), and the pericardial-effusion differential each turn a broad problem into ordered moves.
- **[[Tempo-based reasoning|The temporal sequence as the diagnosis]].** "Fine → pacemaker → heart failure" is the crux: complications keyed to *time from implant* point to PICM, and an effusion appearing after the device points to post-injury pericarditis. Refusing the coincidence unifies the case.
- **[[Base Rate|Base rate, then override]].** Leg swelling starts as venous insufficiency and pericardial effusion as idiopathic, but specific features (orthopnea/ED; loculation; the implant) justify moving up the differential.
- **[[Test Interpretation|Interpreting each datum]].** BNP's obesity caveat, the one-third-without-edema exam limitation, 100% RV-pacing burden as the PICM signature, and a negative PET/ESR reframing the effusion — all read for meaning, not tallied.
- **[[Analogical Reasoning|Analogy, checked against physiology]].** Loculation-as-empyema is imported from the pleura, but immediately tested against a 98-year-old's muted inflammatory capacity — analogy used, then disciplined by base physiology.
- **A unifying (Occam) diagnosis.** One device explains both the myocardial (PICM) and pericardial (post-injury pericarditis) findings — parsimony that the temporal association made findable.

## Teaching Discussion

- Treat leg swelling as venous insufficiency by default, but let an ED presentation and orthopnea (with PND being more specific) reprioritize the heart.
- Diagnose heart failure clinically and along a spectrum: a normal echo doesn't exclude it; classify HFpEF (metabolic) vs HFrEF (ischemic) and use the EF to guide therapy and etiology.
- Weight HF history and exam by specificity, hone the JVP (a third lack edema; chronic HF can have clear lungs), and interpret BNP knowing obesity lowers it.
- Dose initial IV loop diuretic at ~20 × the creatinine, twice daily, targeting ≥2 L off with strict I/Os and electrolyte repletion, and obtain an EF early.
- Suspect pacemaker-induced cardiomyopathy when EF falls after high-burden RV pacing; interrogate the device (pacing burden, capture), and minimize RV pacing or upgrade to CRT — remembering complications track with time from implant.
- Work up a loculated pericardial effusion fully (idiopathic, uremic, thyroid, autoimmune, infectious/TB), using the pleural loculation analogy but tempering it in an elderly patient with a muted inflammatory response.
- Recognize post-cardiac-injury (Dressler-like) pericarditis after any cardiac injury — including, rarely, pacemaker placement — when the infectious/malignant/autoimmune workup is negative.
- Refuse coincidence: a strong temporal sequence (well → device → new disease) is a clue to a unifying, iatrogenic cause.

## Handbook Opportunities

- A **heart failure diagnosis** card — clinical/spectrum, HFpEF vs HFrEF, history/exam/JVP/BNP, and GDMT ABCs.
- A **loop diuretic dosing** card — 20 × creatinine, targets, and monitoring.
- A **pacemaker-induced cardiomyopathy** card — RV pacing burden, interrogation, and pacing minimization/CRT.
- A **pericardial effusion** card — the differential, loculation, and tamponade/constriction assessment.
- A **post-cardiac-injury pericarditis** card — Dressler and its post-procedure variants.

## References

- Reviews on **pacemaker-induced cardiomyopathy** and RV pacing burden. https://pubmed.ncbi.nlm.nih.gov
- **Post-cardiac injury syndrome / Dressler syndrome** after procedures including device implantation. https://pubmed.ncbi.nlm.nih.gov
- Differential diagnosis and workup of **pericardial effusion**. https://pubmed.ncbi.nlm.nih.gov
- Heart failure guideline-directed medical therapy and diuretic dosing. https://pubmed.ncbi.nlm.nih.gov

## Evergreen Note Updates

- [ ] Create **[[Heart Failure]]** — clinical diagnosis/spectrum, HFpEF vs HFrEF, history/exam/JVP/BNP, and GDMT ABCs; and **[[HFpEF]]**, **[[HFrEF]]**, **[[GDMT]]**.
- [ ] Create **[[Pacemaker-Induced Cardiomyopathy]]** — RV pacing burden, dyssynchrony, interrogation, pacing minimization/CRT; and **[[CRT]]** cross-link (from RLR 068).
- [ ] Create **[[Post-Cardiac-Injury Pericarditis]]** (Dressler and post-procedure variants) and **[[Pericardial Effusion]]** (differential, loculation, tamponade/constriction).
- [ ] Create **[[JVP]]** (assessment, abdominojugular reflux), **[[BNP]]** (obesity/limitations), **[[Lasix Dosing]]** (20 × creatinine), and **[[Venous Insufficiency]]**.
- [ ] Update **[[AV Block]]** — pacemaker as the endpoint and its downstream PICM/pericardial complications; update **[[Orthopnea]]** — cardiac prioritization with the non-cardiac caveats.
- [ ] Update **[[Analogical Reasoning]]** — loculation (pleural → pericardial) and chronic-compensated HF as cirrhosis-like; update **[[Illness Tempo]]** — time-from-implant complication timing and the "refuse the coincidence" sequence.

## Related Notes

[[Heart Failure]] · [[HFpEF]] · [[HFrEF]] · [[Pacemaker-Induced Cardiomyopathy]] · [[Post-Cardiac-Injury Pericarditis]] · [[Pericardial Effusion]] · [[CRT]] · [[JVP]] · [[BNP]] · [[Lasix Dosing]] · [[GDMT]] · [[Venous Insufficiency]] · [[Orthopnea]] · [[AV Block]] · [[Arrhythmogenic Cardiomyopathy]] · [[Schema-Based Reasoning]] · [[Test Interpretation]] · [[Base Rate]] · [[Analogical Reasoning]] · [[Illness Tempo]] · [[Hickam's Dictum]] · [[Cognitive Autopsy]] · [[RLR 068 - Episodic Dyspnea and Phrenic Nerve Stimulation]] · [[RLR 060 - Transient Loss of Consciousness and Cardiac Sarcoidosis]] · [[RLR 065 - Orthopnea and Compressive Goiter]]
