---
series: "RLR / Clinical Problem Solvers"
episode: "177"
source_url:
  - https://episodes.castos.com/633300b1184ec2-51084684/2457527/c1e-33m21bw2op9skq02r-8d88x7oofvq-8v8iem.mp3
guests:
  - Reza Manesh
  - Rabih Geha
  - Dan Kelmanson
clinical_domains:
  - pulmonology
  - critical care
  - hematology
  - internal medicine
tags:
  - schema-based-reasoning
  - test-interpretation
  - anatomical-approach
  - base-rate
  - hickams-dictum
  - diagnostic-humility
  - methemoglobinemia
  - hypoxemia
  - g6pd-deficiency
---

## Summary

> [!summary] Scan Summary
> A guest episode with **Dan Kelmanson** (pulmonary/critical care, UAB), presenting a 4 a.m. rapid response: a patient on **[[BiPAP|BiPAP]]** at 100% FiO₂ **[[Pulse Oximetry|saturating 80%]]** — yet **comfortable, not dyspneic, with clear lungs**. Reza and Rabih hammer the first principle that **[[Dyspnea vs Hypoxemia|hypoxemia is objective and dyspnea subjective]]**, and that a profound sat in a well patient demands asking whether the number is *real* — running **[[Pulse Oximetry|pulse-ox fake-outs]]** (**[[Methemoglobinemia|methemoglobinemia]]**, poor waveform, nail polish) and applying Berkowitz's **[[Cover the Data Point|cover-the-data-point]]** test (hide the sat → an asymptomatic patient with a normal exam). Kara's **[[Does the Lung Sing|"does the lung sing?"]]** rule and the absence of dyspnea argue strongly against an **[[Alveolar vs Vascular Hypoxemia|alveolar-filling]]** process, pushing toward a vascular/**[[Right-to-Left Shunt|shunt]]** cause or a measurement artifact — and Rabih flags that **[[BiPAP|BiPAP]] is not harmless** (positive pressure can worsen a right-to-left shunt; its real indication in hypoxemic failure is pulmonary edema). The **lab [[Arterial Blood Gas|ABG]]** reads PaO₂ **51**, but the **bedside iSTAT** (run immediately) reads PaO₂ **404** with the sat still 80% — the crux. Background: a 62-year-old man admitted a day earlier for **[[Acute Leukemia|acute leukemia]]** (WBC **152,000**), given **[[Rasburicase|rasburicase]]** for a high uric acid. Reza nails the **[[Saturation Gap|saturation gap]]** → **[[Methemoglobinemia|methemoglobinemia]]** (rasburicase in occult **[[G6PD Deficiency|G6PD deficiency]]**), and Rabih nails the **[[Pseudohypoxemia|leukocyte larceny]]** (hyperleukocytic cells consuming O₂ in the syringe → falsely low *lab* PaO₂). Co-oximetry confirms **methemoglobin 15%**. Two simultaneous measurement artifacts — a **[[Hickam's Dictum|"double trap"]]** — with treatment restraint (met <30%, asymptomatic; **[[Methylene Blue|methylene blue contraindicated in G6PD]]** → **[[Vitamin C|vitamin C]]** the alternative), and spontaneous recovery.

## Pearls

- **Hypoxemia is objective; dyspnea is subjective — so a profound "hypoxemia" in a comfortable patient with clear lungs should first make you ask whether the number is real.** **[[Pulse Oximetry|Pulse-ox fake-outs]]** include **[[Methemoglobinemia|methemoglobinemia]]** (dark blood; the reading trends toward ~85%), a poor waveform/vasoconstriction, and nail polish — so inspect the waveform, then confirm with an **[[Arterial Blood Gas|ABG]]** and **[[Co-oximetry|co-oximetry]]** rather than escalating support to a number.
- **Cover the suspicious data point.** Berkowitz's rule: if hiding one value **[[Cover the Data Point|collapses the entire argument]]**, scrutinize that value — cover the O₂ sat here and you are left with an asymptomatic patient and a normal lung exam, so the sat, not the patient, is what needs interrogating.
- **"Does the lung sing?" — and does the patient feel it?** Auscultation that reveals **[[Does the Lung Sing|sounds]]** points to parenchymal/pleural disease; silence points either to a missed finding (image it) or a truly exam- and radiograph-**silent** cause (**[[Alveolar vs Vascular Hypoxemia|vascular/shunt]]**). A comfortable patient with clear lungs and **no dyspnea** makes an alveolar-filling process very unlikely, because filled alveoli almost always "tickle the receptors."
- **The saturation gap: a low pulse-ox SpO₂ with a high measured PaO₂ is virtually diagnostic of a disordered hemoglobin.** When the **[[Pulse Oximetry|SpO₂]]** (80%) and the **[[Arterial Blood Gas|PaO₂]]** (404 at the bedside) diverge, suspect **[[Methemoglobinemia|methemoglobinemia]]** (or sulfhemoglobinemia) and send **[[Co-oximetry|co-oximetry]]**; **[[Rasburicase|rasburicase]]** is a classic trigger in occult **[[G6PD Deficiency|G6PD deficiency]]**, especially in men.
- **A falsely low PaO₂ on a *lab* ABG in a hyperleukocytic leukemia is leukocyte larceny.** In **[[Hyperleukocytosis|hyperleukocytosis]]**, the white cells keep **consuming O₂ in the syringe** en route to the lab, producing a spurious low PaO₂ (**[[Pseudohypoxemia|pseudohypoxemia]]**) with a *normal* calculated saturation — avoidable by running the sample **immediately** (bedside analyzer/on ice); here the delayed lab PaO₂ was 51 while the immediate bedside PaO₂ was 404.
- **Two simultaneous artifacts is Hickam's dictum — and treatment restraint matters.** Methemoglobinemia dropped the pulse ox while hyperleukocytosis dropped the lab PaO₂ (a **[[Hickam's Dictum|"double trap"]]**); treat **[[Methemoglobinemia|methemoglobinemia]]** only if symptomatic or >30% (his was 15%), and remember **[[Methylene Blue|methylene blue is contraindicated in G6PD deficiency]]** (ineffective and hemolytic) — **[[Vitamin C|ascorbic acid]]** is the alternative — while a **[[G6PD Deficiency|G6PD screen is falsely normal during acute hemolysis]]**, so retest or sequence later.

## Problem Representation

A 62-year-old man with hypertension and peripheral arterial disease, admitted one day earlier for evaluation of presumed acute leukemia (white-cell count 152,000, hemoglobin 10, platelets 108) and treated for a high uric acid with allopurinol and rasburicase (bone-marrow biopsy pending, CT chest showing only subsegmental atelectasis), is found at a 4 a.m. rapid response on BiPAP at 100% FiO₂ with a pulse-oximeter saturation of 80% (good waveform), yet is comfortable, not dyspneic, afebrile and hemodynamically normal, tachypneic to 28, with clear lungs and no distress. A laboratory arterial blood gas reports a PaO₂ of 51 (on 61% FiO₂), whereas an immediately analyzed bedside (iSTAT) gas reports a PaO₂ of 404 with the pulse-ox saturation persisting at 80%, and co-oximetry reveals a methemoglobin level of 15%. The unifying explanation is two coexisting artifacts of oxygenation measurement (Hickam's dictum): rasburicase-induced methemoglobinemia in a patient with (later gene-confirmed, screen-negative) G6PD deficiency, falsely lowering the pulse-oximeter saturation, and hyperleukocytosis causing leukocyte "larceny" of oxygen within the ABG syringe, falsely lowering the laboratory PaO₂ — with the patient never truly hypoxemic, managed supportively (methemoglobin 15% and asymptomatic; methylene blue withheld given G6PD deficiency) and recovering spontaneously.

---

## Case Narrative

*A guest episode with Dan Kelmanson (pulmonary/critical care, UAB); he presents a rapid-response case in real time. Reza and Rabih discuss.*

**The scene.** At **4 a.m.**, Dan is paged to a rapid response on the oncology ward: a patient on **[[BiPAP|BiPAP]]** at **100% FiO₂** with a **pulse-ox of 80%**. Reza opens on tempo (how was the patient before BiPAP?) and, crucially, on whether this is **real hypoxemia**: **[[Dyspnea vs Hypoxemia|hypoxemia is objective, dyspnea subjective]]**, and pulse oximetry can lie — recalling a **[[Methemoglobinemia|methemoglobinemia]]** case with chocolate-brown blood, plus vasoconstriction/poor waveform and nail polish as fake-outs — so he would first confirm a good waveform. He then invokes Kara's **[[Does the Lung Sing|"does the lung sing?"]]** framework: audible sounds → parenchymal/pleural disease; silence → either a missed finding (image it) or an exam-/radiograph-**silent** cause (**[[Alveolar vs Vascular Hypoxemia|vascular/shunt]]**).

**The paradox.** Dan fills in: BiPAP IPAP 20 / EPAP 8, sat 80% with a **good waveform**; the patient was **normally saturated on admission a day ago**, worsened overnight, is afebrile and hemodynamically normal, tachypneic to 28 — but in **no distress, lungs clear, feeling completely fine**. Rabih seizes the disconnect and applies **[[Cover the Data Point|Berkowitz's rule]]**: cover the O₂ sat and you are left with an **asymptomatic patient with a normal exam**, so *scrutinize the sat*. Because **[[Dyspnea vs Hypoxemia|filled alveoli almost always produce dyspnea]]**, the absence of breathlessness argues strongly against an alveolar process; he would **get an [[Arterial Blood Gas|ABG]]** (not a VBG — venous O₂ reflects tissue consumption, not alveolar-capillary transfer), check the hands (perfusion, nail bed, waveform) and the medication list, and lower the temperature of the room. He also flags that **[[BiPAP|BiPAP is not harmless]]**: positive intrathoracic pressure worsens **pressure-dependent right-sided conditions**, its main hypoxemic-failure indication is **pulmonary edema** (weak here), and if a **[[Right-to-Left Shunt|right-to-left shunt]]** is present, adding pressure can *worsen* it — so he would switch to **[[High-Flow Nasal Cannula|high-flow nasal cannula]]**, watch for **[[Platypnea-Orthodeoxia|position-dependent (platypnea-orthodeoxia)]]** shunting, and call for a high-quality echo.

**The gases.** The **laboratory ABG** (on 61% FiO₂) reads pH 7.43, PCO₂ 42, **PaO₂ 51**. Reza grounds the physiology: the **[[Pulse Oximetry|pulse ox]]** reports a *saturation* (a ratio of O₂-bound to total hemoglobin, distorted if the hemoglobin is altered), whereas the ABG measures a **partial pressure**; a PaO₂ of 51 is genuinely low, and by the alveolar-capillary model the problem lies in the **alveoli** (pus/atelectasis/effusion — but the exam/CT are silent) or in the **blood/vessels**. He raises the **[[Saturation Gap|oxygen saturation gap]]** — a divergence between the pulse-ox SpO₂ and the ABG-derived SaO₂ — as a clue to an abnormal hemoglobin. Rabih adds the **[[Pseudohypoxemia|leukocyte-larceny]]** fake-out he once saw: in leukemia, **hypercellular cells consume O₂ in the ABG syringe** on the way to the lab, falsely lowering the PaO₂ (while the SaO₂ stays normal) — but he initially discounts it because the hypoxemia here is *dynamic*.

**The reveal.** Dan supplies the history: a **62-year-old** man with HTN and PAD saw his PCP for **fatigue**; labs showed **WBC 152,000**, Hgb 10, platelets 108 → admitted for **[[Acute Leukemia|acute leukemia]]**, marrow pending, and treated for a high uric acid with **allopurinol and [[Rasburicase|rasburicase]]**; the CT chest (non-CTA) showed only **subsegmental atelectasis**. Both pings now fire: Reza on **[[Methemoglobinemia|methemoglobinemia]]** (rasburicase a notorious trigger in **[[G6PD Deficiency|G6PD deficiency]]**, an X-linked risk heightened in men — oxidizing hemoglobin and driving hemolysis), and Rabih on **[[Pseudohypoxemia|hyperleukocytosis]]**. The **bedside iSTAT** ABG, run immediately, reads pH 7.48, PCO₂ 33, **PaO₂ 404**, with the sat still 80%; co-oximetry returns **methemoglobin 15%**.

**The double trap.** Rabih lays out the "**[[Hickam's Dictum|double negative]]**": (1) the **bedside PaO₂ of 404 with a sat of 80%** is virtually diagnostic of a **disordered hemoglobin** (methemoglobinemia) from **[[Rasburicase|rasburicase]]**; and (2) the **difference between the bedside PaO₂ (404) and the delayed lab PaO₂ (51)** is **[[Pseudohypoxemia|leukocyte larceny]]** — the leukemic cells ate the oxygen in the syringe before it reached the lab. Two simultaneous artifacts, **[[Hickam's Dictum|Hickam's dictum]]** in action, with the patient never truly hypoxemic. On management, the methemoglobin is **15%** (below the ~30% symptomatic/treatment threshold) and the patient is asymptomatic, so **[[Methylene Blue|methylene blue]]** — the usual antidote — is not needed *and* is **contraindicated in G6PD deficiency** (NADPH-dependent, so ineffective, and hemolytic), leaving **[[Vitamin C|ascorbic acid (vitamin C)]]** as the reducing-agent alternative. Dan closes the loop: the **G6PD screen was falsely normal** before and after (acute hemolysis destroys the deficient cells), but **gene sequencing confirmed G6PD deficiency**; the patient received **neither** methylene blue nor vitamin C and **recovered over days**. Teaching points: rasburicase → methemoglobinemia in G6PD (pulse ox classically ~85%, oxidized hemoglobin can't carry O₂, left-shifted dissociation curve); treat if symptomatic or >30%; methylene blue contraindicated in G6PD; and **hyperleukocytosis → falsely low lab PaO₂** (a syringe artifact avoided by immediate analysis). The meta-lesson from all three: **focus on the patient, slow down, don't chase the number**, question discordant data (and use decision-support to fill knowledge gaps in real time).

## Reasoning Breakdown

### Bayesian Updates

| Data point | Hypothesis raised/adjusted | Direction of update |
|---|---|---|
| BiPAP 100% FiO₂, pulse-ox 80% | Refractory hypoxemic respiratory failure | Framed — but "is it real?" |
| Comfortable, no dyspnea, **lungs clear**, good waveform | Alveolar-filling process (pneumonia/edema) | Lowered (no dyspnea, silent exam) |
| Cover-the-data-point → asymptomatic + normal exam | The O₂ sat itself | Scrutinize the number |
| Dynamic (normal sat on admission → 80% overnight) | Static artifact only | Kept real-hypoxemia possible |
| **Lab ABG PaO₂ 51** (61% FiO₂) | True hypoxemia (alveolar vs vascular/shunt) | Raised — alveolar silent → vascular/shunt |
| BiPAP harms pressure-dependent right-sided disease | Right-to-left shunt worsened by BiPAP | Switch to HFNC; consider shunt/echo |
| History: acute leukemia, **WBC 152k**; rasburicase given | Two hematologic fake-outs | Both pings fire |
| **Saturation gap** (SpO₂ low, PaO₂ high) | Disordered hemoglobin (methemoglobinemia) | Strongly raised (rasburicase + G6PD) |
| **Bedside iSTAT PaO₂ 404** vs lab PaO₂ 51 | Leukocyte larceny (pseudohypoxemia) | Confirmed — syringe O₂ consumption |
| Co-oximetry **metHb 15%** | Methemoglobinemia | Confirmed |
| metHb 15%, asymptomatic; G6PD suspected | Methylene blue therapy | Withheld (contraindicated/unneeded) → vitamin C alternative |
| G6PD screen normal ×2; later **gene sequencing positive** | G6PD deficiency | Confirmed (screen falsely normal in hemolysis) |
| Two artifacts at once | Single unifying cause | **Hickam's dictum** (two coexisting) |

### Illness Scripts and Bias

- **[[Dyspnea vs Hypoxemia|Hypoxemia vs dyspnea]] and "is the number real?"** The objective/subjective split, the **[[Pulse Oximetry|pulse-ox fake-out]]** checklist, and the discipline to confirm with an **[[Arterial Blood Gas|ABG]]** + **[[Co-oximetry|co-oximetry]]** before escalating support.
- **[[Cover the Data Point|Cover the data point]] (Berkowitz).** Hiding the sat exposes a well patient with a normal exam — a clean way to decide *which* datum to distrust.
- **[[Does the Lung Sing|Does the lung sing?]] ([[Anatomical Approach|alveolar-capillary localization]]).** Silent lungs + no dyspnea move the cause off the **[[Alveolar vs Vascular Hypoxemia|alveoli]]** toward the vessels/shunt or an artifact — and the receptor physiology (filled alveoli almost always cause dyspnea) is the reasoning behind it.
- **[[Saturation Gap|Saturation gap]] → [[Methemoglobinemia|methemoglobinemia]] ([[Test Interpretation|test interpretation]]).** A low SpO₂ with a high PaO₂ is nearly pathognomonic of a disordered hemoglobin; **[[Rasburicase|rasburicase]]** in **[[G6PD Deficiency|G6PD deficiency]]** is the trigger, and the pulse ox trends toward ~85%.
- **[[Pseudohypoxemia|Leukocyte larceny]].** The bedside-vs-lab PaO₂ discrepancy localizes to *in-syringe* O₂ consumption by **[[Hyperleukocytosis|hyperleukocytic]]** cells — a preanalytic artifact, not patient hypoxemia.
- **[[Hickam's Dictum|Hickam's dictum]].** Two coexisting artifacts (methemoglobinemia + leukocyte larceny) resist a single unifying explanation — the case's punchline.
- **Treatment restraint and pitfalls.** Threshold-based therapy (metHb >30%/symptoms), **[[Methylene Blue|methylene blue contraindicated in G6PD]]** (→ **[[Vitamin C|vitamin C]]**), and the **[[G6PD Deficiency|false-normal G6PD screen during hemolysis]]** (retest/sequence).
- **[[Diagnostic Humility|Humility]] and process.** "Focus on the patient, slow down, don't go bonkers"; question discordant data rather than dismissing it; use decision-support to fill real-time knowledge gaps — and beware over-treating a number (BiPAP was not harmless).

## Teaching Discussion

- Separate hypoxemia (objective) from dyspnea (subjective), and when a profound oximeter reading conflicts with a comfortable patient and a clear exam, first ask whether the number is real, checking the waveform and confirming with an arterial blood gas and co-oximetry rather than escalating support.
- Apply the cover-the-data-point discipline: if concealing a single value dissolves the entire argument, that value deserves scrutiny — here, hiding the saturation leaves an asymptomatic patient with normal lungs.
- Localize hypoxemia along the alveolar-capillary axis with the "does the lung sing?" heuristic, recognizing that clear lungs and absent dyspnea argue against an alveolar-filling process and toward a vascular/shunt cause or a measurement artifact, and prefer an arterial over a venous gas because venous oxygen reflects tissue consumption.
- Read a saturation gap — a low pulse-oximeter saturation with a high measured PaO₂ — as near-diagnostic of a disordered hemoglobin such as methemoglobinemia, send co-oximetry, and suspect rasburicase in a patient with (possibly occult) G6PD deficiency, remembering the oximeter trends toward roughly 85%.
- Recognize leukocyte larceny in hyperleukocytic leukemia: white cells consume oxygen within the syringe and falsely lower the laboratory PaO₂ (a preanalytic artifact with a normal calculated saturation), preventable by analyzing the sample immediately or on ice.
- Hold Hickam's dictum when two findings resist one explanation — methemoglobinemia lowering the pulse ox and hyperleukocytosis lowering the lab PaO₂ can coexist in a leukemia patient given rasburicase.
- Treat methemoglobinemia only when symptomatic or above roughly 30%, avoid methylene blue in G6PD deficiency (ineffective and hemolytic) in favor of ascorbic acid, and recheck or gene-sequence G6PD because the screening test is falsely normal during acute hemolysis.
- Weigh the harms of BiPAP — positive intrathoracic pressure can worsen pressure-dependent right-sided conditions and right-to-left shunts, and its principal role in hypoxemic failure is pulmonary edema — and, above all, focus on the patient and avoid over-treating a number.

## Evergreen Note Updates

- [ ] Create **[[Hypoxemia]]** hub — objective vs **[[Dyspnea vs Hypoxemia|dyspnea]]**, "is it real?" (**[[Pulse Oximetry|pulse-ox fake-outs]]**), the **[[Alveolar vs Vascular Hypoxemia|alveolar-capillary localization]]** and **[[Does the Lung Sing|"does the lung sing?"]]**, shunt physiology, and the A–a gradient; link **[[Arterial Blood Gas]]**, **[[Co-oximetry]]**, **[[Saturation Gap]]**.
- [ ] Create **[[Methemoglobinemia]]** — oxidant triggers (**[[Rasburicase]]**, dapsone, topical anesthetics, nitrites), **[[G6PD Deficiency]]**, pulse-ox ~85% and saturation gap, oxygen-hemoglobin dissociation left shift, and treatment (**[[Methylene Blue]]** vs **[[Vitamin C]]**; methylene blue contraindicated in G6PD).
- [ ] Create **[[Pseudohypoxemia]]** / leukocyte larceny — **[[Hyperleukocytosis]]** (and thrombocytosis) consuming O₂ in the ABG syringe; falsely low PaO₂ with normal SaO₂; prevention by immediate/on-ice analysis; link **[[Acute Leukemia]]**, **[[Tumor Lysis Syndrome]]**.
- [ ] Create **[[G6PD Deficiency]]** — oxidant hemolysis and methemoglobinemia, X-linked, the **false-normal screen during acute hemolysis**, and drug avoidance (rasburicase, dapsone, nitrofurantoin, primaquine).
- [ ] Create reasoning nodes: **[[Cover the Data Point]]** (Berkowitz — distrust the datum whose removal collapses the argument), **[[Does the Lung Sing]]** (Kara — auscultatory localization of hypoxemia), and **[[Saturation Gap]]** (SpO₂ vs SaO₂/PaO₂); update **[[Hickam's Dictum]]** (two coexisting artifacts), **[[Test Interpretation]]**, **[[Anatomical Approach]]**, and **[[Diagnostic Humility]]**.
- [ ] Create supporting nodes: **[[BiPAP]]** / **[[High-Flow Nasal Cannula]]** (indications and harms; pressure-dependent right-sided disease), **[[Right-to-Left Shunt]]** / **[[Platypnea-Orthodeoxia]]**, **[[Rasburicase]]** / **[[Tumor Lysis Syndrome]]**; cross-link **[[RLR 008 - Dyspnea]]** and **[[RLR 180 - Exertional Lightheadedness and a Submassive Pulmonary Embolism]]**.

## Handbook Opportunities

- A **"is the hypoxemia real?"** card — pulse-ox fake-outs, cover-the-data-point, ABG + co-oximetry, and the saturation gap.
- A **methemoglobinemia** card — oxidant triggers, G6PD, ~85% sat/left shift, methylene blue vs ascorbic acid, and the G6PD contraindication.
- A **leukocyte larceny / pseudohypoxemia** card — hyperleukocytosis, syringe O₂ consumption, immediate/on-ice analysis.
- A **hypoxemia localization** card — does-the-lung-sing, alveolar vs vascular/shunt, A–a gradient, and platypnea-orthodeoxia.
- A **BiPAP harms** card — pressure-dependent right-sided disease and shunt, and the pulmonary-edema indication.

## References

- Fox MJ, Brody JS, Weintraub LR. *Pseudohypoxemia due to leukemia and thrombocytosis.* N Engl J Med. 1979;301(24):1329–1330. https://www.nejm.org/doi/abs/10.1056/NEJM198003063021017 — the original description of "leukocyte larceny."
- *Leukocytosis and Spurious Hypoxemia* (review of pseudohypoxemia mechanism and prevention). https://pmc.ncbi.nlm.nih.gov/articles/PMC8312990/ — in-syringe O₂ consumption and immediate/on-ice analysis.
- Sonbol MB, Yadav H, Vaidya R, et al. *Methemoglobinemia and hemolysis in a patient with G6PD deficiency treated with rasburicase.* Am J Hematol. 2013;88(2):152–154. https://onlinelibrary.wiley.com/doi/10.1002/ajh.23182 — rasburicase-induced methemoglobinemia and hemolysis in G6PD deficiency.
- *Rasburicase-Induced Methemoglobinemia in a Patient with G6PD Deficiency.* https://pubmed.ncbi.nlm.nih.gov/28078984/ — the mechanism and the methylene-blue caveat.
- Farkas J. *Methemoglobinemia.* EMCrit Internet Book of Critical Care. https://emcrit.org/ibcc/methemoglobinemia/ — pulse-ox behavior, saturation gap, treatment thresholds, and methylene blue vs ascorbic acid in G6PD.

## Related Notes

[[Hypoxemia]] · [[Dyspnea vs Hypoxemia]] · [[Pulse Oximetry]] · [[Arterial Blood Gas]] · [[Co-oximetry]] · [[Saturation Gap]] · [[Methemoglobinemia]] · [[Rasburicase]] · [[G6PD Deficiency]] · [[Oxygen-Hemoglobin Dissociation Curve]] · [[Methylene Blue]] · [[Vitamin C]] · [[Pseudohypoxemia]] · [[Hyperleukocytosis]] · [[Acute Leukemia]] · [[Tumor Lysis Syndrome]] · [[Alveolar vs Vascular Hypoxemia]] · [[Does the Lung Sing]] · [[Right-to-Left Shunt]] · [[Platypnea-Orthodeoxia]] · [[BiPAP]] · [[High-Flow Nasal Cannula]] · [[Cover the Data Point]] · [[Hickam's Dictum]] · [[Schema-Based Reasoning]] · [[Test Interpretation]] · [[Anatomical Approach]] · [[Base Rate]] · [[Diagnostic Humility]] · [[Cognitive Autopsy]] · [[RLR 008 - Dyspnea]] · [[RLR 180 - Exertional Lightheadedness and a Submassive Pulmonary Embolism]] · [[RLR 015 - Hemolysis and Heinz Body Hemolytic Anemia]] · [[RLR 030 - Dark Urine and Delayed Hemolytic Transfusion Reaction]] · [[RLR 168 - Fatigue, Bruising, and Multiple Vitamin Deficiencies (Scurvy)]]
