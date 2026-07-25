---
series: "RLR / Clinical Problem Solvers"
episode: "172"
source_url:
  - https://episodes.castos.com/633300b1184ec2-51084684/2403032/c1e-923k7s2n7z4c0k00o-1pr6w3zmh573-dm3cvz.mp3
guests:
  - Reza Manesh
  - Rabih Geha
clinical_domains:
  - endocrinology
  - oncology
  - nephrology
  - internal medicine
tags:
  - schema-based-reasoning
  - test-interpretation
  - base-rate
  - anatomical-approach
  - diagnostic-humility
  - hypercalcemia
  - prostate-cancer
  - hyperparathyroidism
  - substance-vs-structure
---

## Summary

> [!summary] Scan Summary
> Reza presents an elderly, cachectic man (95 lb) with 20 years of constipation now worse, a total **[[Hypercalcemia|calcium]] of 10.9** on an **albumin of 2.5**, and CKD (baseline eGFR ~35). Rabih first insists on *confirming the problem*: albumin-correction is fraught, so measure the **[[Ionized Calcium|ionized calcium]]** (here **1.37**, frankly high) and establish that it's **sustained** (his baseline runs 8–9), and note it is **fluid-refractory** (1.5–2 L without budging). He runs the hypercalcemia schema as pure **[[Substance vs Structure|substance vs structure]]**: an **exogenous substance** (thiazide, **[[Vitamin D Toxicity|vitamin D]]**, vitamin A, milk-alkali, thyroid hormone), a **structure secreting a substance** (**[[Parathyroid Hormone|PTH]]** from an adenoma, **[[PTHrP|PTHrP]]** from a tumor, 1,25-D from granuloma), or **pure structure** (widespread osteolytic mets) — with **[[Immobilization Hypercalcemia|immobilization]]** as the diagnosis-of-exclusion exception. The **[[Parathyroid Hormone|PTH is 13]]** (non-suppressed = *not* the answer but also not exonerating a healthy gland), vitamin D is normal (should be *suppressed* — **[[Inappropriately Normal|inappropriately normal]]**), and the key history lands: **metastatic castrate-resistant prostate cancer**. Rabih teaches the twist — prostate cancer is normally **[[Osteolytic vs Osteoblastic Metastases|osteoblastic]]** (high **[[Alkaline Phosphatase|ALP]]**, *normo*calcemic), so "prostate cancer + high calcium" seems impossible — *except* in **[[Castrate-Resistant Prostate Cancer|advanced castrate-resistant]]** disease (~1–5%), exactly this setting. **[[CKD and Calcium|CKD]]** amplifies it (loss of the **[[Hypercalciuria|hypercalciuric buffer]]**; a stimulus raises calcium faster and higher). The plan: treat for **symptoms** (constipation, polyuria, orthostasis) and hydration (hypercalcemia → **[[Nephrogenic Diabetes Insipidus|nephrogenic DI]]**) — **[[Zoledronic Acid|zoledronic acid]]** after a **[[Osteonecrosis of the Jaw|dental evaluation]]** and confirming eGFR >30 (vs the more potent, more hypocalcemia-prone **[[Denosumab|denosumab]]**), PTHrP pending. A second vignette (dialysis patient, **PTH 400, normal calcium**) teaches appropriate CKD **[[Secondary Hyperparathyroidism|secondary hyperparathyroidism]]** — not a parathyroid scan.

## Pearls

- **Confirm the calcium before you chase it — measure the ionized level and check that it's sustained.** **[[Calcium Correction for Albumin|Albumin-correction formulas are fraught]]**, so when hypoalbuminemia might be masking severity, get an **[[Ionized Calcium|ionized calcium]]** (his 1.37 is frankly high); review months of prior levels to separate **transient** from **sustained** hypercalcemia, and treat **fluid-refractoriness** as evidence of an ongoing stimulus rather than a one-off.
- **Work hypercalcemia as substance versus structure — with a crucial middle category.** Either an **exogenous [[Substance vs Structure|substance]]** (thiazide, **[[Vitamin D Toxicity|vitamin D]]**, vitamin A, milk-alkali, thyroid hormone), a **localized structure secreting a substance** (**[[Parathyroid Hormone|PTH]]** from a parathyroid adenoma, **[[PTHrP|PTHrP]]** from a tumor, 1,25-D from **[[Granulomatous Disease|granuloma]]**), or **pure structure** (widespread **[[Osteolytic vs Osteoblastic Metastases|osteolytic]]** mets destroying bone); start with the **medication list and a PTH**, and reserve **[[Immobilization Hypercalcemia|immobilization]]** as a diagnosis of exclusion.
- **A "normal" PTH during hypercalcemia is inappropriate.** A healthy parathyroid should be **fully suppressed** by a high calcium, so any PTH that is not clearly *low* implicates the gland (primary/tertiary hyperparathyroidism) — and the same logic flags an **[[Inappropriately Normal|inappropriately normal]]** vitamin D (which should be suppressed) or a "normal" calcium that is really *relatively high* for the context.
- **CKD reshapes calcium two ways — both make hypercalcemia more prominent.** CKD patients usually start **hypocalcemic** (retained phosphate chelates calcium), so a high calcium is "higher than it looks"; and CKD removes the **[[Hypercalciuria|hypercalciuric buffer]]** (normally you dump excess calcium in the urine until the kidney saturates), so any hypercalcemic stimulus raises calcium **faster and higher** — while also producing a **low-titer false-positive [[PTHrP|PTHrP]]** (accumulation) to interpret cautiously.
- **Prostate cancer is the great normocalcemic exception — until it isn't.** Prostate mets are usually **[[Osteolytic vs Osteoblastic Metastases|osteoblastic]]** (calcium consumed into bone, a very high **[[Alkaline Phosphatase|alkaline phosphatase]]**, *normal* calcium), so "prostate cancer + hypercalcemia" seems contradictory — but **[[Castrate-Resistant Prostate Cancer|advanced castrate-resistant/dedifferentiated]]** disease turns lytic and causes hypercalcemia in ~**1–5%**, which is *exactly* the setting to suspect it rather than dismiss it.
- **Treat hypercalcemia for symptoms and hydration, not the number.** The acute danger is **[[Nephrogenic Diabetes Insipidus|nephrogenic DI]] → dehydration** (maintain euvolemia with fluids); anti-resorptives address the bone stimulus and long-term skeletal risk, so **[[Zoledronic Acid|zoledronic acid]]** (confirm eGFR >30) or the more potent, more hypocalcemia-prone **[[Denosumab|denosumab]]** is reasonable in a **symptomatic** patient (constipation, polyuria, orthostasis) — after a **[[Osteonecrosis of the Jaw|dental evaluation]]**.

## Problem Representation

An elderly, markedly cachectic man (≈95 lb) with metastatic castrate-resistant prostate adenocarcinoma, chronic kidney disease (baseline eGFR ~35), 20 years of constipation now worsened, and recent immobility presents with hypercalcemia — a total calcium of 10.9 on an albumin of 2.5, with an ionized calcium of 1.37 (elevated) that is sustained above his baseline of 8–9 and refractory to 1.5–2 L of fluid. His PTH is 13 (non-suppressed but not elevated), his vitamin D is normal (66) despite daily D3 supplementation, and PTHrP is pending. The unifying diagnosis is hypercalcemia of malignancy from advanced castrate-resistant prostate cancer — the exception to prostate cancer's usual osteoblastic, normocalcemic behavior — amplified by CKD (loss of hypercalciuric buffering and phosphate-lowered baseline calcium), immobility, and exogenous vitamin D. Management is directed at his symptoms (constipation, polyuria/nephrogenic DI, orthostasis) with continued hydration, discontinuation of vitamin D, and a single dose of zoledronic acid after dental evaluation and confirmation of eGFR >30. A separate teaching vignette (a dialysis patient with a PTH of 400 and a normal calcium) illustrates appropriate CKD-related secondary hyperparathyroidism that warrants neither a parathyroid scan nor calcimimetic therapy.

---

## Case Narrative

*Reza presents a "still-cooking" case; Rabih discusses, deploying his substance-versus-structure framework for hypercalcemia. A brief second vignette on secondary hyperparathyroidism closes the episode.*

**Confirm the problem.** Reza opens with the numbers: an **elderly**, cachectic man (≈**95 lb**) with **20 years of constipation** now worse, **total calcium 10.9**, **albumin 2.5**, creatinine 0.9. Rabih's first move is to make sure they're **solving the right problem** at the right **magnitude**: rather than trust an **[[Calcium Correction for Albumin|albumin-correction]]** (fraught, per a *Things We Do for No Reason*), measure the **[[Ionized Calcium|ionized calcium]]** — which returns **1.37** (above the ~1.29 upper limit), a **sustained** rise above his usual **8–9**, and, crucially, **refractory to 1.5–2 L of fluid**. Fluid-refractoriness signals an **ongoing stimulus** making calcium faster than it can be flushed.

**The schema.** Rabih frames hypercalcemia as the paradigm of **[[Substance vs Structure|substance versus structure]]**: (1) an **exogenous substance** the patient ingests (thiazide, **[[Vitamin D Toxicity|vitamin D]]**, vitamin A, milk-alkali, thyroid hormone); (2) a **localized structure secreting a substance** — the elegant middle — such as a **[[Parathyroid Hormone|parathyroid adenoma]]** secreting PTH, a tumor secreting **[[PTHrP|PTHrP]]** (a squamous-cell lung cancer, say), or a **[[Granulomatous Disease|granuloma]]** making 1,25-D; and (3) **pure structure** — widespread **[[Osteolytic vs Osteoblastic Metastases|osteolytic]]** metastases destroying bone (the "most devastating"). The workup follows that order: **medication list**, then **PTH**, then hunt for a secreting structure, then diffuse bony disease — with **[[Immobilization Hypercalcemia|immobilization]]** the diagnosis of exclusion at the end (patients who don't move get hypercalcemic for poorly understood reasons).

**The data.** The only relevant med is **vitamin D3** (25 mcg daily); the **PTH is 13** (their lab's low threshold is 15). Rabih interprets carefully: a **[[Interpreting a Normal PTH in Hypercalcemia|non-suppressed PTH]]** is what you scrutinize — a healthy gland should be **fully suppressed** by hypercalcemia — but here it's genuinely low, so the **parathyroids are exonerated**. He notes therapeutic-dose vitamin D rarely causes toxicity but is a risk factor for over-repletion (get a level), and flags the pivotal clue: **fluid-refractoriness** points away from **[[Immobilization Hypercalcemia|immobility]]** (usually overcome by fluids) and toward a **secreting structure**.

**CKD reshapes calcium.** Asked how CKD colors this, Rabih teaches two universal features: CKD patients usually start **hypocalcemic** (retained phosphate **chelates** calcium), so this high calcium is **more prominent than it appears**; and the kidney is the **primary defense** against hypercalcemia (you become **[[Hypercalciuria|hypercalciuric]]** first, dumping calcium in the urine until the kidney **saturates**), a buffer **lost in CKD**, so any stimulus raises calcium **faster and higher**. He adds two testing caveats — CKD causes a **low-titer false-positive [[PTHrP|PTHrP]]** (accumulation), and **[[Multiple Myeloma|myeloma]]**/**[[Granulomatous Disease|granulomatous]]** disease also present this way. (Reza's analogy: like a cirrhotic who can't clear a lactate.)

**The cancer, and the exception.** Vitamin D is **66** (normal — though it *should* be **[[Inappropriately Normal|suppressed]]** when hypercalcemic, so it's not helping), and the history is **metastatic castrate-resistant prostate adenocarcinoma**. Rabih teaches the crux: cancer causes hypercalcemia either **paraneoplastically** (PTHrP, no bony mets) or through **[[Osteolytic vs Osteoblastic Metastases|lytic bony disease]]** — and **prostate cancer is the exception**, because its mets are predominantly **osteoblastic** (bone-*forming*), so patients are typically **normocalcemic with a very high [[Alkaline Phosphatase|alkaline phosphatase]]**. Therefore "prostate cancer + hypercalcemia" is initially contradictory — *but* in **advanced [[Castrate-Resistant Prostate Cancer|castrate-resistant]]** disease the tumor **dedifferentiates**, behavior changes, and **~1–5%** develop hypercalcemia. So the diagnostic friction is **overcome by the castrate-resistant stage**, and the next step is to characterize the cancer's **radiographic fingerprint**. Reza underlines the unifying physiology: calcium homeostasis is fundamentally the **[[Osteoclast vs Osteoblast|osteoclast–osteoblast]]** balance (>99% of calcium is in bone) — increased osteoclast activity → hypercalcemia; anti-resorptives shift it back.

**To treat or not.** With **PTHrP pending** and the team confident it's the cancer, the question is management. Rabih reasons from **purpose**: the two reasons to treat are the **long-term skeletal** consequence (ongoing bone resorption → osteoporosis) and the **acute** one — hypercalcemia causes **[[Nephrogenic Diabetes Insipidus|nephrogenic DI]] → dehydration**. Since fluids have maintained **euvolemia**, the decision hinges on symptoms and skeletal risk in a 90-year-old with metastatic cancer (no clean right answer — hence the split between Reza, the endocrine fellow, GPT, and OpenEvidence). Rabih's default is to **ask the patient's preference**. Reza makes the case *to treat*: refractory **constipation**, **polyuria** (he is "peeing in the bed"; and with CKD his hypercalcemia-induced polyuria may be blunted yet still symptomatic), and **fluid-responsive tachycardia/orthostasis** are all bothersome, and a **single dose of [[Zoledronic Acid|zoledronic acid]]** — after a **[[Osteonecrosis of the Jaw|dental evaluation]]** and confirming **eGFR >30** — is one controllable variable, favored over **[[Denosumab|denosumab]]** (a RANK-ligand inhibitor that is **more potent and more likely to cause hypocalcemia** without close monitoring). He notes the patient is in **hospice**, framing this as **symptom** control; there is no urgency given only mild-to-moderate hypercalcemia.

**Second vignette — secondary hyperparathyroidism.** Reza closes with a separate patient: **on dialysis (ESRD)**, **PTH 400**, **normal calcium**, **phosphorus 5.5**, and a nephrology fellow requesting a **parathyroid scan** for an adenoma. Rabih reframes: a **normal (not low) calcium in CKD is itself "relatively high,"** and a PTH of 400 is the **satisfactory explanation** — appropriate **[[Secondary Hyperparathyroidism|secondary hyperparathyroidism]]** (the gland working to keep phosphate down and calcium up). It is **not** an attention-grabbing PTH (that's north of ~**500–1000**, raising **[[Tertiary Hyperparathyroidism|tertiary]]** disease with an autonomous adenoma), so the sequence is to **maximize medical therapy** (vitamin D analogs, **[[Cinacalcet|calcimimetics]]**) first and reserve **adenoma hunting** for refractory/tertiary cases — and, since the calcium is normal and asymptomatic, none of this is urgent.

## Reasoning Breakdown

### Bayesian Updates

| Data point | Hypothesis raised/adjusted | Direction of update |
|---|---|---|
| Total Ca 10.9, albumin 2.5, cachectic | True hypercalcemia vs artifact of albumin | Confirm with **ionized Ca** (correction fraught) |
| Ionized Ca **1.37**, sustained (baseline 8–9) | Real, sustained hypercalcemia | Confirmed |
| **Fluid-refractory** (1.5–2 L) | Immobilization; transient | Lowered — ongoing stimulus present |
| Med list: only vitamin D3 (therapeutic dose) | Exogenous substance (D toxicity) | Low (therapeutic dose); level normal (66) |
| **PTH 13** (non-suppressed but low) | Primary/tertiary hyperparathyroidism | Excluded (gland appropriately suppressed) |
| Vitamin D 66 (normal) | Vitamin D–driven | Lowered — but "should be suppressed" (not helping) |
| CKD (eGFR ~35) | Modifier of calcium | Amplifies (lost hypercalciuric buffer; low baseline Ca) |
| **Metastatic castrate-resistant prostate cancer** | Malignancy | Raised — but prostate is normally osteoblastic/normocalcemic |
| Castrate-resistant/advanced stage | Prostate-cancer hypercalcemia | Raised — the 1–5% exception (dedifferentiation → lytic) |
| PTHrP pending; osteoclast-driven | Hypercalcemia of malignancy | Working diagnosis |
| Euvolemic on fluids; symptomatic (constipation, polyuria, orthostasis) | Treat vs observe | Treat for symptoms → zoledronic acid (dental eval, eGFR>30) |
| **Vignette:** ESRD, PTH 400, **normal Ca**, phos 5.5 | Parathyroid adenoma (scan) | Rejected — appropriate secondary HPT; no scan |

### Illness Scripts and Bias

- **Confirm the problem ([[Test Interpretation|test interpretation]]).** **[[Ionized Calcium|Ionized calcium]]** over **[[Calcium Correction for Albumin|albumin correction]]**, sustained-vs-transient, and fluid-refractoriness as a marker of an active stimulus.
- **[[Substance vs Structure|Substance vs structure]] ([[Schema-Based Reasoning|schema-based reasoning]]).** Exogenous substance → structure-secreting-substance (**[[Parathyroid Hormone|PTH]]**/**[[PTHrP|PTHrP]]**/1,25-D) → pure structure (**[[Osteolytic vs Osteoblastic Metastases|osteolytic mets]]**), with **[[Immobilization Hypercalcemia|immobilization]]** as the exclusion diagnosis; start with meds and PTH.
- **[[Inappropriately Normal|Inappropriately normal]] values ([[Interpreting a Normal PTH in Hypercalcemia|hormone interpretation]]).** A non-suppressed PTH, a non-suppressed vitamin D, and a "normal" calcium in CKD are each *inappropriate* for their context — the reasoning that flags a hidden driver.
- **[[CKD and Calcium|CKD as a modifier]] ([[Base Rate|base rate]]).** Low baseline calcium (phosphate chelation) makes a high value "more prominent," and lost **[[Hypercalciuria|hypercalciuric]]** buffering makes any stimulus overshoot — plus false-positive PTHrP.
- **The exception that proves the rule ([[Anatomical Approach|mechanistic reasoning]]).** Prostate cancer's **osteoblastic** default (high **[[Alkaline Phosphatase|ALP]]**, normocalcemia) makes hypercalcemia seem impossible, but **[[Castrate-Resistant Prostate Cancer|castrate-resistant dedifferentiation]]** is exactly the setting where it occurs — resisting premature exclusion.
- **Treat the patient, not the number ([[Diagnostic Humility|humility]]).** Purpose-driven therapy (hydration for **[[Nephrogenic Diabetes Insipidus|nephrogenic DI]]**; anti-resorptive for symptoms/skeleton), patient preference, and hospice context — with genuine equipoise acknowledged.
- **Appropriate vs pathologic hyperparathyroidism.** A PTH of 400 with a normal calcium in dialysis is *appropriate* **[[Secondary Hyperparathyroidism|secondary HPT]]**, not **[[Tertiary Hyperparathyroidism|tertiary]]** — no scan, maximize medical therapy first.

## Teaching Discussion

- Confirm hypercalcemia with an ionized calcium rather than an albumin-corrected value, especially with hypoalbuminemia, and establish whether it is sustained and fluid-refractory before building a differential.
- Work hypercalcemia as substance versus structure: an exogenous substance (thiazide, vitamin D, vitamin A, milk-alkali, thyroid hormone), a localized structure secreting a substance (PTH from an adenoma, PTHrP from a tumor, 1,25-vitamin D from granuloma), or pure structure (widespread osteolytic metastases), starting with the medication list and a PTH and reserving immobilization as a diagnosis of exclusion.
- Interpret a non-suppressed PTH during hypercalcemia as inappropriate, since a healthy gland should be fully suppressed, and apply the same "inappropriately normal" logic to vitamin D and to a normal calcium in the setting of CKD.
- Account for CKD's dual effect on calcium: a low baseline (phosphate chelation) makes any elevation more prominent, and the loss of hypercalciuric buffering allows a stimulus to raise calcium faster and higher, while remembering that CKD produces low-titer false-positive PTHrP.
- Recognize that prostate cancer is usually osteoblastic and normocalcemic with a high alkaline phosphatase, but that advanced castrate-resistant, dedifferentiated disease turns lytic and causes hypercalcemia in a small minority, so it should be suspected rather than dismissed in that stage.
- Direct hypercalcemia treatment at symptoms and hydration (hypercalcemia causes nephrogenic diabetes insipidus and dehydration), using anti-resorptive therapy — zoledronic acid with an eGFR above 30, or the more potent, more hypocalcemia-prone denosumab — after a dental evaluation for osteonecrosis, and incorporate patient preference and goals of care.
- Read a normal calcium with a PTH of 400 in a dialysis patient as appropriate secondary hyperparathyroidism rather than an adenoma, maximizing medical therapy (vitamin D analogs, calcimimetics) and reserving parathyroid imaging for markedly elevated PTH or tertiary disease.

## Evergreen Note Updates

- [ ] Expand the **[[Hypercalcemia]]** hub — the **[[Substance vs Structure]]** schema (exogenous / structure-secreting-substance / pure structure; **[[Immobilization Hypercalcemia|immobilization]]** exception), **[[Ionized Calcium]]** vs **[[Calcium Correction for Albumin]]**, and the PTH-first workup; cross-link **[[RLR 007 - Hypercalcemia]]**, **[[RLR 014 - Hypercalcemia and Immobilization]]**, **[[RLR 028 - Hypercalcemia and Vitamin D Toxicity]]**, **[[RLR 182 - Hypercalcemia in ESRD and Hypophosphatemic Osteomalacia]]**.
- [ ] Create **[[Hypercalcemia of Malignancy]]** — PTHrP (paraneoplastic), osteolytic mets, and 1,25-D lymphoma; and **[[Osteolytic vs Osteoblastic Metastases]]** (blastic = normocalcemia + high **[[Alkaline Phosphatase]]**); link **[[PTHrP]]**, **[[Multiple Myeloma]]**, **[[Granulomatous Disease]]**.
- [ ] Create **[[Castrate-Resistant Prostate Cancer]]** — dedifferentiation, lytic transformation, and the ~1–5% hypercalcemia; cross-link **[[Metastatic Prostate Cancer]]** and **[[RLR 041 - Unilateral Leg Edema and Metastatic Prostate Cancer]]**.
- [ ] Create **[[CKD and Calcium]]** — low baseline (phosphate chelation), lost **[[Hypercalciuria|hypercalciuric]]** buffering, false-positive PTHrP; and **[[Secondary Hyperparathyroidism]]** / **[[Tertiary Hyperparathyroidism]]** (appropriate PTH 400 vs autonomous adenoma; **[[Cinacalcet]]**); cross-link **[[RLR 178 - Two Cases of Acute Kidney Injury — Interstitial Nephritis and MGRS]]**.
- [ ] Create reasoning nodes: **[[Inappropriately Normal]]** (a "normal" value that should be abnormal implicates a driver) and **[[Interpreting a Normal PTH in Hypercalcemia]]**; and **[[Osteoclast vs Osteoblast]]** calcium homeostasis.
- [ ] Create treatment/complication nodes: **[[Zoledronic Acid]]** / **[[Bisphosphonate]]** (eGFR >30), **[[Denosumab]]** / **[[RANK Ligand]]** (potency/hypocalcemia), **[[Osteonecrosis of the Jaw]]** (dental eval), and **[[Nephrogenic Diabetes Insipidus]]** (hypercalcemia → DI); cross-link **[[RLR 034 - Polyuria and Post-Obstructive Nephrogenic Diabetes Insipidus]]**.

## Handbook Opportunities

- A **hypercalcemia workup** card — ionized calcium, sustained-vs-transient, substance-vs-structure, and the PTH-first order.
- A **hypercalcemia of malignancy** card — PTHrP vs osteolytic vs 1,25-D, blastic-vs-lytic mets, and ALP.
- A **prostate cancer and calcium** card — osteoblastic/normocalcemic default and the castrate-resistant hypercalcemic exception.
- A **CKD and calcium** card — low baseline, lost hypercalciuric buffer, false-positive PTHrP, and appropriate vs tertiary hyperparathyroidism.
- A **treating hypercalcemia** card — hydration/nephrogenic DI, zoledronic acid vs denosumab, dental evaluation, and treat-for-symptoms.

## References

- *Malignancy-Related Hypercalcemia.* StatPearls. https://www.ncbi.nlm.nih.gov/books/NBK482423/ — PTHrP, osteolytic, and 1,25-D mechanisms and workup.
- Minisola S, Pepe J, Piemonte S, Cipriani C. *The diagnosis and management of hypercalcaemia.* BMJ. 2015;350:h2723. https://pubmed.ncbi.nlm.nih.gov/26037642/ — ionized calcium, albumin-correction limits, and the PTH-driven vs non-PTH split.
- El-Amm J, Aragon-Ching JB, et al. *Hypercalcemia in prostate cancer / PTHrP from neuroendocrine-dedifferentiated castrate-resistant disease.* https://www.sciencedirect.com/science/article/pii/S2214442018303553 — the mechanism of hypercalcemia in advanced prostate cancer.
- *Systematic Review Supporting the Endocrine Society Clinical Practice Guideline on the Treatment of Hypercalcemia of Malignancy in Adults.* J Clin Endocrinol Metab. 2023;108(3):585. https://academic.oup.com/jcem/article/108/3/585/6916875 — bisphosphonate/denosumab/calcitonin therapy.
- Farkas J. *Hypercalcemia.* EMCrit Internet Book of Critical Care. https://emcrit.org/ibcc/hypercalcemia/ — practical workup (ionized Ca, PTH, PTHrP), immobilization, and treatment.

## Related Notes

[[Hypercalcemia]] · [[Substance vs Structure]] · [[Ionized Calcium]] · [[Calcium Correction for Albumin]] · [[Parathyroid Hormone]] · [[PTHrP]] · [[Hypercalcemia of Malignancy]] · [[Osteolytic vs Osteoblastic Metastases]] · [[Osteoclast vs Osteoblast]] · [[Castrate-Resistant Prostate Cancer]] · [[Metastatic Prostate Cancer]] · [[Alkaline Phosphatase]] · [[Vitamin D Toxicity]] · [[Milk-Alkali Syndrome]] · [[Granulomatous Disease]] · [[Multiple Myeloma]] · [[Immobilization Hypercalcemia]] · [[CKD and Calcium]] · [[Hypercalciuria]] · [[Secondary Hyperparathyroidism]] · [[Tertiary Hyperparathyroidism]] · [[Cinacalcet]] · [[Zoledronic Acid]] · [[Bisphosphonate]] · [[Denosumab]] · [[RANK Ligand]] · [[Osteonecrosis of the Jaw]] · [[Nephrogenic Diabetes Insipidus]] · [[Inappropriately Normal]] · [[Interpreting a Normal PTH in Hypercalcemia]] · [[Schema-Based Reasoning]] · [[Test Interpretation]] · [[Base Rate]] · [[Anatomical Approach]] · [[Diagnostic Humility]] · [[Cognitive Autopsy]] · [[RLR 007 - Hypercalcemia]] · [[RLR 014 - Hypercalcemia and Immobilization]] · [[RLR 028 - Hypercalcemia and Vitamin D Toxicity]] · [[RLR 182 - Hypercalcemia in ESRD and Hypophosphatemic Osteomalacia]] · [[RLR 041 - Unilateral Leg Edema and Metastatic Prostate Cancer]] · [[RLR 034 - Polyuria and Post-Obstructive Nephrogenic Diabetes Insipidus]] · [[RLR 184 - New-Onset Seizure and an Unresolved Multifocal Pelvic Process]]
