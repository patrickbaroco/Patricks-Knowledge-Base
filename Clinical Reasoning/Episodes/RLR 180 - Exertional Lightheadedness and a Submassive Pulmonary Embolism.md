---
series: "RLR / Clinical Problem Solvers"
episode: "180"
source_url:
  - https://episodes.castos.com/633300b1184ec2-51084684/2475985/c1e-o8jr1fjpgowc8n0x7-v6v5qppxfkrd-ixgvhp.mp3
guests:
  - Reza Manesh
  - Rabih Geha
clinical_domains:
  - emergency medicine
  - cardiology
  - pulmonology
  - internal medicine
tags:
  - schema-based-reasoning
  - test-interpretation
  - anchoring-bias
  - base-rate
  - premature-closure
  - diagnostic-humility
  - ekg-interpretation
  - pulmonary-embolism
  - syncope
---

## Summary

> [!summary] Scan Summary
> Reza presents a near-miss: a 65-year-old man with **exertional [[Lightheadedness|lightheadedness]]** while biking around the VA, no chest pain/dyspnea/palpitations, normal vitals, mild anemia (MCV 84), and a creatinine bumped to 1.5. Rabih refuses to over-interpret the *word* the patient uses ("lightheaded" vs "unsteady") and instead asks the discriminating question — **[[Exertional vs Non-Exertional|exertional or not]]** — which, being purely exertional, marks a **[[Perfusion Problem|perfusion problem]]**: brain-versus-blood, then **[[Quantity vs Quality of Blood|quantity versus quality]]** (too little blood — shock/presyncope/orthostasis — versus bad content — anemia, carbon monoxide). The EKG is the tell: **anterior T-wave inversions V1–V3** with **inferior (III/aVF) T-wave inversions** and **sinus tachycardia** — a **[[Wellens Syndrome|Wellens-like]]** pattern whose three causes are **[[Acute Coronary Syndrome|ACS]]** (post-spontaneous-thrombolysis), **[[Pulmonary Embolism|PE]]**, and **[[Takotsubo Cardiomyopathy|Takotsubo]]** — and Rabih reads it as **[[EKG in Pulmonary Embolism|PE until proven otherwise]]** (Wellens from ACS rarely reaches V1; simultaneous inferior TWI and **[[Troponin Interpretation|an underwhelming troponin]]** clinch it). He is nonetheless discharged as presyncope/dehydration — then **[[Syncope|syncopizes]]** under a bridge minutes later, returns with a troponin of 79, a proBNP of 6,000, and a **[[Widened Mediastinum|widened mediastinum]]** on chest x-ray that triggers a dissection-protocol CTA — which instead shows a **[[Saddle Pulmonary Embolism|saddle PE]]** with **[[RV Strain|RV strain]]** (RV>LV, septal deviation). He is managed by the **[[PE Response Team|PE response team]]** with heparin then **[[Catheter-Directed Thrombolysis|catheter-directed thrombolysis]]** and walks out; severe **[[Iron Deficiency Anemia|iron-deficiency anemia]]** (needing **[[RLR 026 - Syncope and Occult Gastrointestinal Bleeding|colonoscopy]]**) is the likely provoker, thrombophilia workup negative. The teaching capstone: PE causes syncope through the **[[Bezold-Jarisch Reflex|Bezold-Jarisch reflex]]** (a vagal response), not spontaneous thrombolysis — and the EKG pattern, once seen, is never missed.

## Pearls

- **Don't interrogate the word — "lightheaded" and "unsteady" are different by the book, but patients (and even seasoned presenters) can't reliably choose between them.** Rather than pin down the exact term, ask **[[Exertional vs Non-Exertional|exertional versus non-exertional]]**: purely exertional symptoms point to a **[[Perfusion Problem|perfusion problem]]** (a brain-versus-blood question), whereas symptoms present at rest and with a brisk walk open a neurologic/gait differential entirely.
- **Frame a perfusion problem as quantity versus quality of blood to the brain.** **[[Quantity vs Quality of Blood|Quantitative]]** deficits are too *little* blood (overt shock down to presyncope, syncope, and orthostasis); **qualitative** deficits are a normal *amount* of blood with bad *content* — most commonly **[[Iron Deficiency Anemia|anemia]]**, or a poisoned hemoglobin such as **carbon monoxide** — a clean split that organizes the "why is the brain underperfused" differential.
- **"Abrupt onset" is usually abrupt *recognition*.** Most lightheadedness is a subacute **vessel** problem (diarrhea, diuretics, an ACE inhibitor/ARNI) noticed suddenly, whereas a truly abrupt **cardiac** cause is rarer; the **[[Base Rate|base-rate]]** instinct is that the EKG will be normal and the culprit is volume/meds — so a genuinely *diagnostic* EKG is what licenses you to believe the abrupt story the patient is telling.
- **A Wellens-like anterior T-wave-inversion pattern has three causes — ACS, PE, and Takotsubo — and PE announces itself with specific features.** **[[Wellens Syndrome|Wellens]]** from **[[Acute Coronary Syndrome|ACS]]** rarely extends to **V1**, so V1 involvement plus **simultaneous inferior (III/aVF) T-wave inversions** and **sinus tachycardia** point to **[[Pulmonary Embolism|PE]]** (right-heart strain); negative T waves in *both* lead III and V1 are highly specific for PE over ACS. (**[[Takotsubo Cardiomyopathy|Takotsubo]]** reflects sympathetic excess — the same reason a dissection can mimic these changes — and **[[Cerebral T Waves|cerebral T waves]]** keep the brain on the list.)
- **An underwhelming troponin doesn't mean worry less — it means worry about something different.** **[[Troponin Interpretation|ACS troponin is proportionally high]]**, so a value barely twice the upper limit with those EKG changes and normal vitals argues *against* a large ACS and *toward* PE with right-ventricular strain; likewise **[[Acute Coronary Syndrome|ACS rarely causes sinus tachycardia]]**, so the tachycardia is another vote for PE.
- **PE causes syncope through the Bezold-Jarisch reflex, not spontaneous thrombolysis — and roughly 1 in 6–10 syncope hospitalizations harbors a PE.** The counterintuitive question "how does a patient whose pressure dropped from a clot ever wake up?" is answered by a **[[Bezold-Jarisch Reflex|pathological vagal (Bezold-Jarisch) response]]**, not by the clot dissolving; and beware letting a **[[Widened Mediastinum|widened-mediastinum]]** chest x-ray **[[Anchoring Bias|anchor]]** you onto **[[Aortic Dissection|dissection]]** when the EKG already said PE.

## Problem Representation

A 65-year-old man with hypertension (uncertain adherence), hyperlipidemia, and a remote traumatic brain injury presents with recurrent exertional lightheadedness — occurring only while biking or walking, relieved by rest, without loss of consciousness, chest pain, dyspnea, or palpitations — with normal vital signs, a mild normocytic anemia, and a creatinine mildly elevated above baseline in the setting of poor intake. His ECG shows new anterior T-wave inversions (V1–V3) with inferior (III/aVF) T-wave inversions and sinus tachycardia, and his high-sensitivity troponin is only mildly elevated (46→41, upper limit 20). After discharge as presumed presyncope/dehydration, he has a witnessed syncopal episode within minutes and returns with a rising troponin (79), a markedly elevated proBNP (6,000), and a widened mediastinum on chest radiograph; a CT angiogram (protocolled for aortic dissection) instead reveals a saddle pulmonary embolism with right-ventricular strain. The unifying diagnosis is a submassive (intermediate-risk) pulmonary embolism presenting as exertional lightheadedness and syncope with a PE-pattern ECG, likely provoked by occult blood loss (severe iron-deficiency anemia requiring colonoscopy), with a negative thrombophilia workup, treated by the PE response team with anticoagulation and catheter-directed thrombolysis.

---

## Case Narrative

*The episode opens with a personal reflection from Reza on the loss of his cat, Gino — offered as part of the RLR "library" of life moments — before turning to the case.*

Reza presents a case he wants Rabih to dissect with his emergency-department instincts. A **65-year-old** man who loves to bike around the VA campus feels **lightheaded** enough while riding that he dismounts and walks; he naps, feels better, then walks later and again feels **unsteady/lightheaded**, without loss of consciousness. He comes to the ED with **no chest pain, dyspnea, or palpitations**; BP 125/80, normal heart rate. Labs show a **mild anemia (MCV 84)** and a **creatinine of 1.5** (baseline 1.2) in a man who drinks little and "eats ramen occasionally." History: **hypertension, hyperlipidemia, remote TBI**.

Rabih opens with a language caution: **[[Lightheadedness|"lightheadedness" and "unsteadiness"]]** are different by the book — the former suggests orthostasis/perfusion, the latter a gait/neurologic problem — but even a seasoned presenter oscillates between them, so a patient's word choice is unreliable. All we truly know is "he feels weird," and the real question is **brain problem or blood problem**. The high-yield discriminator is not the precise word but **[[Exertional vs Non-Exertional|exertional versus non-exertional]]**: when told that *every* episode occurred with exertion, he commits to a **[[Perfusion Problem|perfusion problem]]** and splits it into **[[Quantity vs Quality of Blood|quantity versus quality]]** — too *little* blood (shock → presyncope → orthostasis) versus a normal amount with bad *content* (**[[Iron Deficiency Anemia|anemia]]**, or a poisoned hemoglobin like **carbon monoxide**). Going into the EKG, he says its diagnostic value would be a **pathological bradycardia, sinus pauses, or advanced AV block** (causal), with structural findings (Q waves, long QTc, LVH) as *proxies* for an unhealthy heart.

The EKG changes everything. Compared with an old normal tracing, the new one shows **anterior T-wave inversions in V1–V3** (with V1 depression) and **T-wave inversions inferiorly in III and aVF**, plus **sinus tachycardia**. Rabih recognizes a **[[Wellens Syndrome|Wellens-like]]** pattern and runs its differential: **[[Acute Coronary Syndrome|ACS]]** with spontaneous thrombolysis; **[[Pulmonary Embolism|PE]]** (Wellens-like anteriorly *plus* inferior changes); and **[[Takotsubo Cardiomyopathy|Takotsubo]]** — while keeping **[[Cerebral T Waves|cerebral T waves]]** in mind (a good neuro exam, confirm no anticoagulation). He "parks the bus at Wellens," will **not discharge**, and frames the ED decision as whether to protocol the CT for **PE versus ACS**, with the **[[Troponin Interpretation|troponin as the tiebreaker]]**: a markedly high troponin would favor ACS, but a modest one fits PE. He also names the reality that "abrupt onset" is usually **[[Abrupt Onset vs Abrupt Recognition|abrupt recognition]]** — most lightheadedness is a slow **vessel** problem (diarrhea/diuretics/ACE-inhibitor) noticed suddenly — so normally he'd expect a normal EKG and a medication story; but *this* EKG makes him believe the patient's abrupt narrative and demand to disprove it.

Instead, the real ED course unfolds: troponins **46 then 41** (mildly elevated), the patient feels well, meets the "eating, walking, talking" bar, and is **discharged** as presyncope/dehydration with a small AKI. Minutes later, walking home under a bridge, he has a **witnessed [[Syncope|syncopal]] episode**, vomits in the ambulance, and returns with **BP 160/90, troponin 79, proBNP 6,000**, and a **chest x-ray read as a [[Widened Mediastinum|widened mediastinum]]**. Rabih argues the recurrence in the setting of exertional lightheadedness is the wiser problem representation; the emesis and post-event hypertension are nonspecific autonomic phenomena. Weighing his two front-runners, **syncope favors PE over ACS** (ACS causes syncope only through a second-order mechanism such as ACS-induced VT, whereas PE has direct mechanisms). The widened mediastinum newly raises **[[Aortic Dissection|aortic dissection]]** — which he reconciles with the EKG only via the Takotsubo/sympathetic-excess route (dissection → sudden catecholamine surge; or dissection into cervical vessels → focal cerebral hypoperfusion; or high vagal tone at rupture) — and he pivots the scan to a **dissection protocol**, noting it still captures main and segmental (if not subsegmental) PEs.

The imaging resolves it. The **CT head is negative**; the dissection-protocol **CTA** — ordered off the *chest x-ray*, not the EKG or the clinical story — shows a **high-burden [[Saddle Pulmonary Embolism|saddle pulmonary embolism]]** bridging both main pulmonary trunks, with **[[RV Strain|RV > LV and septal deviation to the left]]** (later confirmed on POCUS and by the radiologist). This is an **intermediate-risk (submassive) PE**. In the ED, Rabih's job is to **diagnose and activate**, not to fine-tune reperfusion: a **[[PE Response Team|PE response team]]** (IR, pulmonary, hematology/anticoagulation) is called, while he screens for bleeding, confirms a head strike given the syncope, and gets a weight for weight-based heparin. He is started on a **heparin drip**, then next day receives **[[Catheter-Directed Thrombolysis|catheter-directed thrombolysis]]**, tolerates it, and **walks out** without further lightheadedness. Workup reveals **severe [[Iron Deficiency Anemia|iron-deficiency anemia]]** (no prior colonoscopy → GI referral for age-appropriate cancer screening; see **[[RLR 026 - Syncope and Occult Gastrointestinal Bleeding|RLR 026]]**) as the likely provoker, with a **negative thrombophilia workup** (factor V Leiden, protein C/S, beta-2-glycoprotein antibody).

Rabih closes on the two EKG capstones and one physiology gem. The **[[EKG in Pulmonary Embolism|PE ECG clues]]**: Wellens from ACS rarely reaches **V1** (its involvement is a red flag), the **inferior (III/aVF) T-wave inversions** are highly suggestive (negative T in both III and V1 is specific for PE), the **sinus tachycardia** fits PE (ACS rarely tachycardic), and the **underwhelming troponin** should make you "worry about something different," not worry less. And the "mega-nerd" question — how does a patient whose pressure dropped from a clot ever wake up? — resolves not through spontaneous thrombolysis but through the **[[Bezold-Jarisch Reflex|Bezold-Jarisch reflex]]**, a pathological vagal response. The meta-lesson (with Reza's "slide-three Robbie" affection): no one on the case named PE, the CTA was ordered for the wrong reason, and the patient could have died undiagnosed — yet the EKG pattern, once learned through repetition, is never missed again.

## Reasoning Breakdown

### Bayesian Updates

| Data point | Hypothesis raised/adjusted | Direction of update |
|---|---|---|
| Recurrent "lightheaded/unsteady," no LOC | Brain problem vs blood problem | Framed — don't over-read the word |
| **Every episode exertional** | Perfusion problem | Raised (vs neurologic/gait) |
| Perfusion split | Quantity (too little) vs quality (anemia/CO) | Organized |
| Mild anemia (MCV 84); Cr 1.5, poor intake | Qualitative (anemia) / volume | Kept, modest |
| Normal BP/HR, no palpitations | Overt arrhythmia/shock now | Lowered |
| ECG: anterior **V1–V3** + inferior **III/aVF** TWI, sinus tach | Wellens pattern → ACS vs PE vs Takotsubo | Raised — **PE favored** (V1, inferior, tachy) |
| Troponin 46→41 (ULN 20), mild | Large ACS | Lowered → PE with RV strain |
| Discharged as presyncope/dehydration | Benign volume-mediated lightheadedness | Premature closure |
| Witnessed **syncope** minutes later; vomiting | ACS vs PE | PE favored (syncope mechanism) |
| Troponin **79**, proBNP **6,000** | Right-heart strain | Raised |
| Chest x-ray **widened mediastinum** | Aortic dissection | Raised (anchor) — pivots CT protocol |
| CT head negative | Cerebral/structural brain cause | Lowered |
| CTA (dissection protocol): **saddle PE**, RV>LV, septal shift | Submassive/intermediate-risk PE | **Confirmed** |
| Severe iron-deficiency anemia, no colonoscopy | Occult GI blood loss as provoker | Raised — needs colonoscopy |
| Thrombophilia workup negative | Inherited hypercoagulable state | Lowered |
| Wakes after syncope despite clot | Spontaneous thrombolysis | **Rejected** — Bezold-Jarisch vagal reflex |

### Illness Scripts and Bias

- **Define the problem before the test ([[Schema-Based Reasoning|schema-based reasoning]]).** Not the patient's exact word but **[[Exertional vs Non-Exertional|exertional vs non-exertional]]** localizes to a **[[Perfusion Problem|perfusion problem]]**, then **[[Quantity vs Quality of Blood|quantity vs quality]]** organizes it — and only *then* is the EKG interpreted against a hypothesis.
- **[[Base Rate|Base rate]] and "[[Abrupt Onset vs Abrupt Recognition|abrupt onset is abrupt recognition]]."** Most exertional lightheadedness is a slow vessel/volume problem recognized suddenly; the discipline is to expect that *and* to let a genuinely diagnostic EKG overturn it.
- **[[EKG in Pulmonary Embolism|ECG pattern recognition]] with a differential.** A **[[Wellens Syndrome|Wellens-like]]** anterior TWI has three causes (**[[Acute Coronary Syndrome|ACS]]**, **[[Pulmonary Embolism|PE]]**, **[[Takotsubo Cardiomyopathy|Takotsubo]]**); PE is distinguished by **V1 involvement, inferior (III/aVF) TWI, sinus tachycardia**, and a **[[Troponin Interpretation|low troponin]]** — "negative T in both III and V1" being the specific sign.
- **[[Test Interpretation|Interpreting the underwhelming test]].** A modest troponin does not reassure — it *redirects*: proportionally low for ACS, exactly what PE with RV strain produces; sinus tachycardia points the same way.
- **[[Premature Closure|Premature closure]] and the discharge trap.** Meeting "eating/walking/talking" criteria and a "presyncope/dehydration" story closed the case prematurely, overriding a diagnostic EKG — the near-fatal miss.
- **[[Anchoring Bias|Anchoring]] on the chest x-ray.** The **[[Widened Mediastinum|widened mediastinum]]** (likely artifact) drove a **[[Aortic Dissection|dissection]]** protocol; the right answer (PE) was reached almost *despite* the reasoning, because the CTA still captured the clot.
- **Physiology as the capstone ([[Bezold-Jarisch Reflex|Bezold-Jarisch]]).** PE syncope is a **vagal reflex**, not spontaneous thrombolysis — the kind of mechanism whose understanding turns a memorized fact ("~10% of PE present with syncope") into durable reasoning.
- **[[Diagnostic Humility|Humility]] and repetition.** The pattern was learnable only through many prior tracings; the reflection ("too hungry to feel pride, too much left to learn") models the lifelong-learning stance.

## Teaching Discussion

- Resist over-reading a patient's choice of "lightheaded" versus "unsteady," since the words are unreliable even for clinicians; instead ask whether symptoms are exertional, which localizes an exertional complaint to a perfusion problem and separates it from a resting neurologic or gait disorder.
- Organize a perfusion problem as quantity versus quality of blood to the brain — too little blood (shock, presyncope, syncope, orthostasis) versus normal volume with abnormal content (anemia or a poisoned hemoglobin such as carbon monoxide).
- Expect that most "abrupt" lightheadedness is abrupt recognition of a slow vessel or volume process (diarrhea, diuretics, ACE inhibitor/ARNI), and let a truly diagnostic ECG be what shifts you to believing an abrupt cardiac or pulmonary-vascular story.
- Read a Wellens-like anterior T-wave-inversion pattern with its full differential — ACS after spontaneous thrombolysis, pulmonary embolism, and Takotsubo — and recognize pulmonary embolism by extension to V1, simultaneous inferior (III/aVF) T-wave inversions, sinus tachycardia, and negative T waves in both lead III and V1.
- Treat an underwhelming troponin as a redirection rather than reassurance: because ACS troponin is proportionally high and ACS rarely causes sinus tachycardia, a mildly elevated troponin with these ECG changes and normal vitals argues for pulmonary embolism with right-ventricular strain.
- Favor pulmonary embolism over acute coronary syndrome when syncope accompanies the presentation, since ACS causes syncope only through a second-order mechanism (such as ventricular tachycardia), and remember that a meaningful minority of syncope hospitalizations harbor a PE.
- Understand that pulmonary embolism produces syncope via the Bezold-Jarisch reflex — a pathological vagal response — rather than spontaneous clot lysis, and do not let a widened-mediastinum chest radiograph anchor you onto aortic dissection when the ECG and clinical story already indicate PE.
- In the emergency department, own the diagnosis and activation of a submassive/intermediate-risk PE (PE response team, bleeding review, head-strike assessment, weight-based anticoagulation) rather than the reperfusion decision, and pursue the provoker — here severe iron-deficiency anemia mandating colonoscopy — while sending a thrombophilia workup.

## Evergreen Note Updates

- [ ] Create **[[Pulmonary Embolism]]** hub — presentations (dyspnea, pleuritic pain, **[[Syncope|syncope]]**, exertional lightheadedness), risk stratification (low/intermediate/high, **[[RV Strain|RV strain]]**, proBNP/troponin), and reperfusion (**[[Catheter-Directed Thrombolysis]]**, **[[PE Response Team]]**); link **[[Saddle Pulmonary Embolism]]**, **[[Submassive PE]]**.
- [ ] Create **[[EKG in Pulmonary Embolism]]** — S1Q3T3, precordial (V1–V3/V4) **and** inferior (III/aVF) T-wave inversions, sinus tachycardia, RBBB; the **[[Wellens Syndrome|Wellens]]** differential (ACS/PE/**[[Takotsubo Cardiomyopathy|Takotsubo]]**), "V1 involvement," and negative T in both III and V1; link **[[Cerebral T Waves]]**.
- [ ] Create **[[Bezold-Jarisch Reflex]]** — vagal cardio-inhibitory reflex; PE syncope, inferior MI, vasovagal syncope; and **[[Troponin Interpretation]]** (proportionality; the underwhelming-troponin redirect).
- [ ] Create reasoning nodes: **[[Perfusion Problem]]** (brain vs blood; quantity vs quality), **[[Exertional vs Non-Exertional]]** (the discriminator for lightheadedness/fatigue), and **[[Abrupt Onset vs Abrupt Recognition]]**; reuse **[[Quantity vs Quality of Blood]]** (from RLR 184).
- [ ] Create **[[Lightheadedness]]** / **[[Presyncope]]** and **[[Syncope]]** hub — vessel (volume/meds) vs cardiac causes, PE and dissection as can't-miss, and discharge pitfalls; cross-link **[[RLR 026 - Syncope and Occult Gastrointestinal Bleeding]]**, **[[RLR 027 - Dizziness and Peripheral Vertigo]]**.
- [ ] Create supporting nodes: **[[Aortic Dissection]]** / **[[Widened Mediastinum]]** (the CXR red herring), **[[Iron Deficiency Anemia]]** (occult GI loss → colonoscopy; VTE provoker), **[[Thrombophilia]]** workup and when it changes management; update reasoning notes **[[Anchoring Bias]]**, **[[Premature Closure]]**, **[[Base Rate]]**, **[[Test Interpretation]]**, and **[[Diagnostic Humility]]**.

## Handbook Opportunities

- A **PE-pattern ECG** card — Wellens differential (ACS/PE/Takotsubo), V1 involvement, inferior T-wave inversions, sinus tachycardia, low troponin; the "negative T in III and V1" rule.
- A **lightheadedness / presyncope** card — exertional vs non-exertional, perfusion quantity-vs-quality, "abrupt onset = abrupt recognition," and can't-miss causes (PE, dissection).
- A **syncope with a can't-miss** card — PE (Bezold-Jarisch), dissection, and the PESIT lesson that a meaningful minority of syncope admissions harbor PE.
- A **submassive/intermediate-risk PE** card — RV strain markers, PE response team, anticoagulation vs catheter-directed thrombolysis, and provoker workup.
- An **underwhelming troponin** card — proportionality in ACS, and when a low troponin should redirect (PE, demand ischemia) rather than reassure.

## References

- Kosuge M, Kimura K, Ishikawa T, et al. *Electrocardiographic Differentiation Between Acute Pulmonary Embolism and Acute Coronary Syndromes on the Basis of Negative T Waves.* Am J Cardiol. 2007;99(6):817–821. https://www.ajconline.org/article/S0002-9149(06)02374-5/abstract — negative T waves in both lead III and V1 are highly specific for PE.
- Prandoni P, Lensing AWA, Prins MH, et al. *Prevalence of Pulmonary Embolism among Patients Hospitalized for Syncope (PESIT).* N Engl J Med. 2016;375(16):1524–1531. https://www.nejm.org/doi/full/10.1056/NEJMoa1602172 — PE identified in a meaningful fraction of first-time syncope admissions.
- Konstantinides SV, Meyer G, Becattini C, et al. *2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism.* Eur Heart J. 2020;41(4):543–603. https://pubmed.ncbi.nlm.nih.gov/31504429/ — risk stratification (RV strain, biomarkers) and reperfusion/PERT.
- *ECG Changes in Pulmonary Embolism.* LITFL ECG Library. https://litfl.com/ecg-changes-in-pulmonary-embolism/ — S1Q3T3, precordial/inferior T-wave inversions, sinus tachycardia, RBBB.
- Mark AL. *The Bezold-Jarisch reflex revisited: clinical implications of inhibitory reflexes originating in the heart.* J Am Coll Cardiol. 1983;1(1):90–102. — the vagal cardio-inhibitory reflex underlying PE-associated and vasovagal syncope.

## Related Notes

[[Clinical Reasoning MOC]] · [[Pulmonary Embolism]] · [[Saddle Pulmonary Embolism]] · [[Submassive PE]] · [[RV Strain]] · [[EKG in Pulmonary Embolism]] · [[Wellens Syndrome]] · [[Cerebral T Waves]] · [[Takotsubo Cardiomyopathy]] · [[Acute Coronary Syndrome]] · [[Troponin Interpretation]] · [[Bezold-Jarisch Reflex]] · [[Syncope]] · [[Presyncope]] · [[Lightheadedness]] · [[Perfusion Problem]] · [[Quantity vs Quality of Blood]] · [[Exertional vs Non-Exertional]] · [[Abrupt Onset vs Abrupt Recognition]] · [[Aortic Dissection]] · [[Widened Mediastinum]] · [[Iron Deficiency Anemia]] · [[Thrombophilia]] · [[PE Response Team]] · [[Catheter-Directed Thrombolysis]] · [[Schema-Based Reasoning]] · [[Test Interpretation]] · [[Anchoring Bias]] · [[Base Rate]] · [[Premature Closure]] · [[Diagnostic Humility]] · [[Cognitive Autopsy]] · [[RLR 026 - Syncope and Occult Gastrointestinal Bleeding]] · [[RLR 027 - Dizziness and Peripheral Vertigo]] · [[RLR 012 - Dysuria and Esophageal Perforation]] · [[RLR 020 - Chest Pain and Ascending Cholangitis]] · [[RLR 023 - Pleuritic Chest Pain and Pulmonary Langerhans Cell Histiocytosis]] · [[RLR 170 - Abrupt Chest and Neck Pain and a Perforated Duodenal Ulcer]] · [[RLR 013 - Right Upper Quadrant Pain and Heart Failure]] · [[RLR 169 - Chronic Hypotension, Anemia, and Atrial Flutter with Variable Block]] · [[RLR 175 - Alcohol-Related Cardiogenic Shock and the Three Realms of Hypotension]] · [[RLR 047 - Peri-Intubation PEA Arrest and Coronary Vasospasm (ATAK Syndrome)]]
 · [[RLR 057 - Chest Pain, Spontaneous Resolution, and an Ascending Aortic Dissection]]