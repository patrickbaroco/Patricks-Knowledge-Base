---
series: "RLR / Clinical Problem Solvers"
episode: "182"
source_url:
  - https://episodes.castos.com/633300b1184ec2-51084684/2488194/c1e-p8v0zfwn7gghmo9xk-ww428oqoagq0-kqfjxq.mp3
guests:
  - Reza Manesh
  - Rabih Geha
clinical_domains:
  - endocrinology
  - nephrology
  - gastroenterology
  - internal medicine
tags:
  - schema-based-reasoning
  - test-interpretation
  - base-rate
  - anchoring-bias
  - illness-script
  - diagnostic-humility
  - hypercalcemia
  - osteomalacia
  - hypophosphatemia
---

## Summary

> [!summary] Scan Summary
> Reza is asked by a friend to make sense of a chart: a 38-year-old woman on dialysis for **[[End-Stage Renal Disease|end-stage renal disease]]** with a *"borderline"* **[[Hypercalcemia|hypercalcemia]]** (calcium 12) — which Rabih immediately flags as **profoundly abnormal**, because ESRD should drive the calcium *down* (retained phosphate chelates calcium; impaired 1,25-vitamin-D activation). The organizing move is to work **[[Hypercalcemia|hypercalcemia]]** on its own base rate first (**hyperparathyroidism, malignancy, ingestions**), then layer the context. The **[[Parathyroid Hormone|PTH]] is suppressed** (excluding hyperparathyroidism), and the decisive discordant value is a **[[Hypophosphatemia|phosphorus of 1.5]]** — *low*, when ESRD should make it high. That single number **dissolves the ESRD explanation** and demands its own cause: phosphate is being lost, and the history supplies it — recurrent small-bowel obstruction with ischemia led to resection, an **[[High-Output Ostomy|ostomy]]**, and years of **high ostomy output**, i.e., relentless **[[Phosphate Wasting|GI phosphate wasting]]**. An **[[Alkaline Phosphatase|alkaline phosphatase]] of ~250** had been blamed on ESRD, but Rabih and Reza reason by **mechanism**: ESRD raises ALP through **PTH-driven** bone turnover, and the PTH is *low*, so that story can't hold — pointing to a **primary bone process**. The synthesis (aided by OpenEvidence and confirmed by endocrinology): **[[Hypophosphatemic Osteomalacia|hypophosphatemic osteomalacia]]** — bone needs three ingredients (**[[Bone Mineralization|calcium, phosphate, and alkaline phosphatase]]**), and with phosphate depleted, calcium cannot be mineralized into bone (while hypophosphatemia stimulates resorption and vitamin D), so serum **calcium rises** and **ALP climbs**. The clincher: **[[Osteomalacia|osteomalacia]] causes bone pain** (unlike painless osteoporosis), and the patient's **[[Fibromyalgia|"fibromyalgia"]]** was bone pain all along — "I've been telling my family for years, I feel it in my bones." The working plan is to **replete phosphorus** and watch the whole picture reverse.

## Pearls

- **In ESRD, expect low calcium and high phosphate — so hypercalcemia in a dialysis patient is a genuine red flag, and a *low* phosphorus is the discordant value that breaks the whole story.** Retained phosphate chelates calcium and impaired 1,25-vitamin-D activation both drive **[[Hypercalcemia|calcium]]** down, so an elevated calcium is "much higher than it should be"; when the **[[Hypophosphatemia|phosphorus]]** is also *low* (1.5 here), the usual ESRD mechanism is no longer operating, and the ESRD context stops being the explanation for the calcium.
- **Chase the discordant value; don't force the familiar problem.** It is tempting to "solve the **[[Hypercalcemia|hypercalcemia]]**" you're comfortable with and file the high **[[Alkaline Phosphatase|ALP]]** under "bony disease" — but the phosphorus of 1.5 refuses to fit, and pushing to *explain the low phosphorus* (GI/ostomy wasting) is exactly what cracks the case. Let the number you *can't* explain drive the workup.
- **"How surprised are you by the calcium?" is a useful branch point in hypercalcemia.** In widespread cancer or **[[Granulomatous Disease|granulomatous disease]]** the patient is visibly sick and the high calcium *explains* the illness — expected. When hypercalcemia is genuinely *surprising* ("I don't get it"), suspect the effect of a **specific substance or mechanism** — **[[Parathyroid Hormone|PTH]]**, ingestions, an occult gentle sarcoid — or, as here, a **bone-mineralization defect**.
- **Interpret lab abnormalities by their mechanism, not by pattern-matching to the diagnosis on the chart.** The admission note attributed the high **[[Alkaline Phosphatase|alkaline phosphatase]]** to ESRD — but ESRD raises ALP through **[[Secondary Hyperparathyroidism|PTH-driven]]** bone turnover, and this PTH is *suppressed*, so that mechanism cannot be operating. When the proposed cause of a lab is mechanistically impossible, you are forced to a **primary bone process**.
- **Bone requires three ingredients — calcium, phosphate, and alkaline phosphatase — and losing phosphate alone can raise the serum calcium.** In severe phosphate depletion the mineralization machinery stalls: calcium cannot be organized into bone (osteoblasts pour out **[[Alkaline Phosphatase|ALP]]** trying), and **[[Hypophosphatemia|hypophosphatemia]]** stimulates bone resorption and 1,25-vitamin-D — so serum **calcium rises with nowhere to go**, the picture of **[[Hypophosphatemic Osteomalacia|hypophosphatemic osteomalacia]]** (low phosphate, high ALP, and — unusually — high calcium, with a suppressed PTH).
- **Osteomalacia causes bone pain and is a classic fibromyalgia mimic — so screen "fibromyalgia" with CPK, phosphorus, vitamin D, calcium, and ALP.** Unlike **[[Osteoporosis vs Osteomalacia|osteoporosis]]** (painless until fracture), **[[Osteomalacia|osteomalacia]]** hurts; nonspecific aches attributed to **[[Fibromyalgia|fibromyalgia]]** may be specific muscle (rhabdo) or bone disease. Asked directly, the patient said, "I've been telling my family for years — I feel it in my bones."

## Problem Representation

A 38-year-old woman on hemodialysis for end-stage renal disease — following recurrent small-bowel obstructions, one complicated by ischemia requiring bowel resection and an ostomy roughly two years ago — presents with nonspecific symptoms and is found to have a mildly elevated calcium (12 mg/dL; albumin ~3.3–3.5), a suppressed parathyroid hormone, a low phosphorus (1.5 mg/dL, chronically low on review), and an elevated alkaline phosphatase (~250–270), with normal transaminases and pending vitamin D, 1,25-vitamin D, and PTHrP. The combination is paradoxical for ESRD, in which hyperphosphatemia and hypocalcemia are expected; the chronically low phosphorus points to ongoing gastrointestinal phosphate loss from a high-output ostomy, and the elevated alkaline phosphatase cannot be attributed to ESRD/secondary hyperparathyroidism given the suppressed PTH. The unifying working diagnosis — reached with decision-support tooling and endocrinology input — is hypophosphatemic osteomalacia: chronic phosphate depletion impairs bone mineralization, elevating alkaline phosphatase and raising serum calcium (because calcium cannot be deposited into bone and hypophosphatemia promotes resorption), while the "fibromyalgia" she carried represents unrecognized osteomalacic bone pain. Confirmation awaits phosphate repletion and the pending studies.

---

## Case Narrative

The case arrives as a curbside. Reza, on a light rapid-response shift, gets a message from a friend and colleague in Los Angeles: *"This is a bit odd — can you look at this chart? The patient has ESRD, is on dialysis, and is here with borderline hypercalcemia, and that doesn't seem normal."* The **[[Hypercalcemia|calcium]] is 12** (albumin ~3.3–3.5).

Rabih first frames **why the abnormality is so unusual**. In most patients with **[[End-Stage Renal Disease|ESRD]]**, impaired filtration causes **hyperphosphatemia**, the retained phosphate **chelates calcium**, and impaired conversion of vitamin D to its active form further lowers calcium — so the expected state is **hypocalcemia**. A high calcium here is therefore "much higher than it should be." He then names the organizing principle: when you have a **problem** (hypercalcemia) inside a **context** (ESRD), start with the **problem on its own base rate** — in everyone, think **[[Primary Hyperparathyroidism|hyperparathyroidism]]** and **[[Malignancy-Associated Hypercalcemia|malignancy]]**, then everything else, plus **[[Milk-Alkali Syndrome|ingestions]]** since they're easy to check — and only then ask how the unusual context modifies it. Concretely: get the **[[Parathyroid Hormone|PTH]]**, look for a cancer signal, and scrutinize the medication list.

Reza goes straight to the labs. The **PTH is suppressed** (~11, below the lower limit). Vitamin D and **1,25-vitamin D** are pending. And the **phosphorus is 1.5 — low.** Rabih seizes on the phosphorus: the two mechanisms that make ESRD patients hypocalcemic are the high phosphate and the vitamin D defect, and **a low phosphate removes the biggest reason the hypercalcemia was surprising** — the expected calcium-lowering effect of hyperphosphatemia is simply **not operating**. He wants to know whether the hypophosphatemia is **transient** (post-dialysis) or **sustained**; the chart shows it has been low for a long time.

The history now explains the phosphorus. The patient is **38**, with recurrent **[[Small Bowel Obstruction|small-bowel obstructions]]**, one of which caused **ischemia** and led — about two years ago — to **bowel resection, an [[High-Output Ostomy|ostomy]], and dialysis**; for many months she has had **high, poorly controlled ostomy output**. She also carries a diagnosis of **[[Fibromyalgia|fibromyalgia]]**, and presented feeling unwell with nonspecific symptoms. Rabih reasons that to be **hypophosphatemic despite impaired renal filtration**, the phosphate must be going somewhere — most often intracellular shifts, but here **relentless [[Phosphate Wasting|GI losses]]** from the ostomy. He also notes two elegant discordances: most hypercalcemic patients are **constipated** (hypercalcemia slows the gut), yet she has the *opposite* — diarrhea/high output — and a young woman with **high calcium and low phosphate** normally "screams **[[Parathyroid Hormone|PTH]]**," raising the possibility that the low PTH is a false result from a **[[Prozone Effect|prozone/hook effect]]** (worth diluting the assay) or that **[[PTHrP|PTHrP]]** is at play.

Then comes the finding that reframes the bone. The **[[Alkaline Phosphatase|alkaline phosphatase]] is ~250–270**, and a note had written it off as "elevated because of ESRD." Reza pushes on the **mechanism**: ESRD raises ALP via **[[Secondary Hyperparathyroidism|secondary hyperparathyroidism]]** — high PTH driving osteoblast/osteoclast turnover — so the ALP elevation is *PTH-dependent*. But **the PTH is low**, so ESRD cannot be the cause; there must be a **different, primary bone process**. He is now solving a high ALP and a high calcium and reaching for **bony disease** — until the **phosphorus of 1.5** blocks him, because he cannot reconcile a simple high-turnover bone story with the low phosphate.

Rabih, admitting this is "an awesome case in retrospect" rather than one he can solve linearly, works through a broad bone/GI differential: **[[Crohn Disease|Crohn's]] or GI [[Sarcoidosis|sarcoid]]** (granulomatous **[[Hypercalcemia|hypercalcemia]]** plus diarrheal phosphate loss), **[[Tertiary Hyperparathyroidism|tertiary hyperparathyroidism]]** with a **prozone**-masked PTH, and **[[Adynamic Bone Disease|adynamic bone disease]]** (which he flags but doesn't know well). He keeps returning to the bones and the **osteoclast activity** implied by the ALP.

Reza supplies the missing mechanistic piece — surfaced by putting the parameters into **OpenEvidence** (which returned a table of calcium/phosphate/PTH/ALP across the hypercalcemia differential, where *only* osteomalacia fit a **low phosphate**) and later confirmed by endocrinology: **[[Hypophosphatemic Osteomalacia|hypophosphatemic osteomalacia]]**. **Bone needs three ingredients — [[Bone Mineralization|calcium, phosphate, and alkaline phosphatase]].** With phosphate chronically depleted, osteoblasts pour out **ALP** trying to mineralize, but **calcium cannot be organized into bone** without phosphate, so it accumulates in the serum — and hypophosphatemia further **stimulates resorption and 1,25-vitamin D**. That single mechanism explains the **suppressed PTH** (both low phosphate and high calcium suppress it), the **low phosphorus**, the **mildly high calcium**, and the **elevated ALP**. The clincher is the pain: **[[Osteoporosis vs Osteomalacia|osteoporosis is painless]] until fracture, but osteomalacia hurts** — so Reza asked whether her **[[Fibromyalgia|fibromyalgia]]** was actually **bone pain**. The team returned to the bedside; the patient said, *"You don't understand — I've been telling my family for years, I feel it in my bones."* The fibromyalgia was, in Reza's words, "probably fake news."

The chain: **high ostomy output → chronic hypophosphatemia (in kidneys that can't even excrete phosphate) → hypophosphatemic osteomalacia → impaired mineralization raising serum calcium, with a compensatory high ALP and a suppressed PTH**, and bone pain misread as fibromyalgia. Both hosts hold this as a **working hypothesis** (Reza calls it "80–90%"), explicitly testable: **supplement phosphorus** — paradoxical in a dialysis patient — and watch the calcium, ALP, and pain reverse; **PTHrP** and vitamin D studies are pending, with endocrine follow-up. Rabih closes with a genuinely open question — why *this* patient wastes phosphate so severely when many high-output-diarrhea patients don't — and the shared teaching that a fibromyalgia label should never close the door on muscle or bone disease.

## Reasoning Breakdown

### Bayesian Updates

| Data point | Hypothesis raised/adjusted | Direction of update |
|---|---|---|
| ESRD on dialysis with calcium 12 | Expected hypocalcemia of ESRD | **Contradicted** — hypercalcemia is a red flag |
| Approach: problem before context | Hyperparathyroidism, malignancy, ingestions (base rate) | Framed |
| **PTH suppressed** | Primary/secondary/tertiary hyperparathyroidism | Lowered (unless prozone) |
| **Phosphorus 1.5 (low), chronic** | ESRD as the explanation for the calcium | **Removed** — expected high-phos mechanism not operating |
| Low phosphate despite impaired filtration | Phosphate loss elsewhere (GI vs intracellular shift) | Raised — GI wasting |
| Recurrent SBO → ischemia → resection + ostomy; high ostomy output ×years | GI phosphate wasting | Confirmed source of hypophosphatemia |
| Diarrhea/high output *with* hypercalcemia | Typical hypercalcemia (constipating) | Discordant — argues against simple hypercalcemia |
| Young woman, high Ca + low phos | PTH-driven process (screams PTH) | Consider **prozone**/PTHrP; dilute PTH |
| **ALP ~250** attributed to ESRD | ESRD (PTH-driven) causing high ALP | **Rejected** — PTH is low; primary bone process |
| High ALP + high Ca | High-turnover bony disease | Raised — but can't fit low phosphate |
| Broad differential (Crohn/GI sarcoid, tertiary HPT, adynamic bone dz) | Granulomatous/parathyroid/renal bone disease | Considered, held |
| Mechanism: bone needs Ca + phosphate + ALP; phosphate depleted | **Hypophosphatemic osteomalacia** | Strongly raised (only fit low phos) |
| Osteomalacia causes bone pain; "fibromyalgia" | Fibromyalgia as the pain diagnosis | **Reinterpreted** — bone pain ("I feel it in my bones") |
| Normal AST/ALT | Hepatic source of ALP | Excluded — bone source |
| Plan: phosphate repletion (confirmatory); PTHrP/vitamin D pending | Working diagnosis | ~80–90%, testable |

### Illness Scripts and Bias

- **Problem before context ([[Schema-Based Reasoning|schema-based reasoning]]).** Solve **[[Hypercalcemia|hypercalcemia]]** on its own base rate — hyperparathyroidism, malignancy, ingestions — *then* ask how ESRD modifies it, rather than letting the striking context hijack the differential from the start.
- **Chase the discordant value.** The **[[Hypophosphatemia|phosphorus of 1.5]]** is the number that refuses to fit; the diagnostic progress comes from insisting on *explaining the low phosphate* instead of forcing the comfortable hypercalcemia-plus-high-ALP into "bony disease."
- **Surprise as a diagnostic cue.** "How surprised are you by the calcium?" — expected in a visibly sick cancer/granulomatous patient (the calcium *explains* the illness), but **surprising** hypercalcemia points to a specific substance or mechanism ([[Parathyroid Hormone|PTH]], ingestions, occult sarcoid, or a mineralization defect).
- **[[Test Interpretation|Mechanistic]] lab interpretation over pattern-matching.** The high **[[Alkaline Phosphatase|ALP]]** "because ESRD" is mechanistically impossible with a **suppressed PTH** (ESRD raises ALP via **[[Secondary Hyperparathyroidism|PTH-driven]]** turnover) — a clean example of rejecting a lab explanation that the mechanism forbids ([[Anchoring Bias|resisting the charted anchor]]).
- **The three-ingredient bone model.** **[[Bone Mineralization|Calcium + phosphate + alkaline phosphatase]]**: remove phosphate and mineralization fails, ALP rises compensatorily, and calcium — unable to enter bone, with resorption and 1,25-D stimulated — spills into the serum. This is the mechanistic heart of **[[Hypophosphatemic Osteomalacia|hypophosphatemic osteomalacia]]**.
- **[[Osteoporosis vs Osteomalacia|Pain distinguishes the bone diseases]].** Osteoporosis is silent until fracture; **[[Osteomalacia|osteomalacia]] hurts** — so a **[[Fibromyalgia|fibromyalgia]]** label should trigger CPK, phosphate, vitamin D, calcium, and ALP, and a return to the bedside to ask about bone pain.
- **[[Diagnostic Humility|Humility]], tooling, and testability.** The hosts hold this as an ~80–90% working hypothesis, credit **decision-support (OpenEvidence)** for surfacing osteomalacia as the only differential fitting a low phosphate, keep **[[Prozone Effect|prozone]]**/**[[PTHrP|PTHrP]]** open, and define the confirmatory test — **phosphate repletion** with reversal of the whole picture.

## Teaching Discussion

- Read hypercalcemia in an ESRD/dialysis patient as a genuine paradox, because the expected derangements are hyperphosphatemia and hypocalcemia; when the phosphorus is instead low, the usual ESRD mechanism is not operating and can no longer explain the calcium.
- Solve the core problem on its own base rate first — hyperparathyroidism, malignancy, and ingestions for hypercalcemia — and only then analyze how an unusual context modifies it, so the context does not prematurely capture the differential.
- Let the discordant value drive the workup: rather than forcing a comfortable diagnosis, insist on explaining the number that does not fit (here the low phosphorus), which redirects attention from the kidney to gastrointestinal phosphate wasting.
- Use the degree of surprise as a branch point in hypercalcemia — expected in a sick patient with cancer or granulomatous disease, but suggestive of a specific substance or mechanism when genuinely unexpected.
- Interpret laboratory abnormalities by mechanism: an elevated alkaline phosphatase blamed on ESRD requires PTH-driven bone turnover, so a suppressed PTH refutes that explanation and forces a primary bone process, and normal transaminases localize the ALP to bone rather than liver.
- Understand hypophosphatemic osteomalacia mechanistically — bone mineralization needs calcium, phosphate, and alkaline phosphatase, and severe phosphate depletion stalls mineralization (raising ALP), promotes resorption and 1,25-vitamin D, and leaves calcium unable to enter bone, which can raise the serum calcium with a suppressed PTH.
- Recognize that osteomalacia causes bone pain whereas osteoporosis is painless until fracture, treat fibromyalgia as a label that must not obscure muscle or bone disease, and screen it with CPK, phosphorus, vitamin D, calcium, and alkaline phosphatase before accepting it.
- Keep the parathyroid assay honest in a young patient whose high-calcium/low-phosphate picture "screams PTH" by considering a prozone/hook effect and diluting the sample, and confirm a phosphate-depletion diagnosis by repleting phosphorus and watching the calcium, ALP, and pain resolve.

## Evergreen Note Updates

- [ ] Create **[[Osteomalacia]]** and **[[Hypophosphatemic Osteomalacia]]** — defective mineralization, causes (vitamin D deficiency, phosphate wasting/depletion, oncogenic/FGF23), bone pain, high ALP, and the (unusual) hypercalcemia-via-failed-mineralization mechanism; link **[[Bone Mineralization]]**, **[[Osteoporosis vs Osteomalacia]]**.
- [ ] Create **[[Hypophosphatemia]]** and **[[Phosphate Wasting]]** — GI losses (high-output ostomy/short bowel), renal wasting (FGF23, Fanconi), and intracellular shifts; the paradox of low phosphate in ESRD; link **[[High-Output Ostomy]]**, **[[Short Bowel Syndrome]]**.
- [ ] Create **[[Bone Mineralization]]** (the three ingredients — calcium, phosphate, alkaline phosphatase) and update **[[Alkaline Phosphatase]]** (bone vs liver; PTH-driven in ESRD; compensatory rise in osteomalacia).
- [ ] Expand the **[[Hypercalcemia]]** hub — add "how surprised are you by the calcium?" as a branch point and **osteomalacia/phosphate-depletion** as a rare cause with *low* phosphate; cross-link **[[RLR 007 - Hypercalcemia]]**, **[[RLR 014 - Hypercalcemia and Immobilization]]**, **[[RLR 028 - Hypercalcemia and Vitamin D Toxicity]]**, and the **[[PTHrP]]** / **[[Granulomatous Disease]]** notes.
- [ ] Create renal-bone nodes: **[[Secondary Hyperparathyroidism]]**, **[[Tertiary Hyperparathyroidism]]**, **[[Adynamic Bone Disease]]**, **[[Renal Osteodystrophy]]** / **[[CKD-Mineral Bone Disorder]]**; and **[[Prozone Effect]]** (hook effect; dilute the assay).
- [ ] Create reasoning nodes: **[[Explain the Discordant Lab]]** (chase the value that doesn't fit), **[[Surprise as a Diagnostic Cue]]** ("how surprised are you?"), **[[Mechanism-Based Reasoning]]** (reject lab explanations the mechanism forbids), and consider **[[AI-Augmented Reasoning]]** (decision-support surfacing a differential-fitting mechanism).
- [ ] Update **[[Fibromyalgia]]** — mandatory screen (CPK, phosphorus, vitamin D, calcium, ALP); osteomalacia and other bone/muscle mimics; and the return-to-the-bedside question about bone pain.

## Handbook Opportunities

- A **hypercalcemia in CKD/ESRD** card — why it's paradoxical, the phosphate clue, and the differential when phosphate is low (osteomalacia/phosphate depletion) vs high.
- A **hypophosphatemic osteomalacia** card — three-ingredient mineralization, ALP and calcium behavior, causes (GI wasting, FGF23), bone pain, and confirmation by phosphate repletion.
- A **high-output ostomy / short bowel electrolyte** card — phosphate, magnesium, and volume losses and their metabolic-bone consequences.
- A **"fibromyalgia" screen** card — CPK, phosphorus, vitamin D, calcium, ALP, and when to upgrade the diagnosis to a muscle or bone disease.
- A **reading labs by mechanism** card — rejecting an explanation the mechanism forbids (high ALP "from ESRD" with a suppressed PTH) and chasing the discordant value.

## References

- Bhan A, Qiu S, Rao SD. *Osteomalacia is Not a Single Disease.* Int J Mol Sci. 2022;23(23):14896. https://pmc.ncbi.nlm.nih.gov/articles/PMC9740398/ — types of osteomalacia (including phosphate-depletion), bone pain, and alkaline phosphatase.
- Uday S, Högler W. *Osteomalacia and Vitamin D Status: A Clinical Update 2020.* JBMR Plus / PMC. https://pmc.ncbi.nlm.nih.gov/articles/PMC7839817/ — musculoskeletal pain and fibromyalgia-like presentations of osteomalacia.
- Baylink D, Wergedal J, Stauffer M. *Formation, mineralization, and resorption of bone in hypophosphatemic (and phosphate-depleted) states* — hypophosphatemia acutely inhibits mineralization and stimulates bone resorption. https://pubmed.ncbi.nlm.nih.gov/1112257/ — mechanism linking phosphate depletion to defective mineralization and calcium release.
- *Hypophosphatemia in the setting of metabolic bone disease: case reports and a diagnostic algorithm.* J Med Case Rep / PMC. 2018. https://pmc.ncbi.nlm.nih.gov/articles/PMC6047245/ — the calcium/phosphate/PTH/ALP framework and phosphate-wasting workup.

## Related Notes

[[Clinical Reasoning MOC]] · [[Hypercalcemia]] · [[Hypophosphatemia]] · [[Phosphate Wasting]] · [[Osteomalacia]] · [[Hypophosphatemic Osteomalacia]] · [[Bone Mineralization]] · [[Osteoporosis vs Osteomalacia]] · [[Alkaline Phosphatase]] · [[Parathyroid Hormone]] · [[PTHrP]] · [[Secondary Hyperparathyroidism]] · [[Tertiary Hyperparathyroidism]] · [[Adynamic Bone Disease]] · [[Renal Osteodystrophy]] · [[End-Stage Renal Disease]] · [[Prozone Effect]] · [[High-Output Ostomy]] · [[Short Bowel Syndrome]] · [[Small Bowel Obstruction]] · [[Fibromyalgia]] · [[Granulomatous Disease]] · [[Sarcoidosis]] · [[Malignancy-Associated Hypercalcemia]] · [[Vitamin D]] · [[Schema-Based Reasoning]] · [[Test Interpretation]] · [[Base Rate]] · [[Anchoring Bias]] · [[Mechanism-Based Reasoning]] · [[Explain the Discordant Lab]] · [[Surprise as a Diagnostic Cue]] · [[Diagnostic Humility]] · [[Cognitive Autopsy]] · [[RLR 007 - Hypercalcemia]] · [[RLR 014 - Hypercalcemia and Immobilization]] · [[RLR 028 - Hypercalcemia and Vitamin D Toxicity]] · [[RLR 172 - Hypercalcemia in Castrate-Resistant Prostate Cancer]]
