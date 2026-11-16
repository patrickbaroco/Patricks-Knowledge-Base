---
series: "Clinical Problem Solvers — Virtual Morning Report"
episode: "CPS 290"
source_url:
  - https://clinicalproblemsolving.com/2023/06/15/episode-290-neurology-vmr-vertigo/
guests:
  - Aaron Berkowitz
clinical_domains:
  - neurology
  - otolaryngology
  - emergency medicine
  - internal medicine
tags:
  - schema-based-reasoning
  - anatomical-approach
  - tempo-based-reasoning
  - test-interpretation
  - illness-script
  - base-rate
  - return-to-the-bedside
---

## Summary

> [!summary] Scan Summary
> A Neurology VMR that turns one word — **"[[Vertigo|vertigo]]"** — into a masterclass on the dizzy patient. Berkowitz first defines vertigo as an **illusory sense of motion** and walks the classic **[[Dizziness|four-type dizziness]]** framework (vertigo / lightheadedness / imbalance / nonspecific — Marty Samuels's "dizzy in your *head* or your *feet*?") only to **debunk** it: David Newman-Toker showed patients are *inconsistent* about symptom quality, so **timing and triggers**, not "is the room spinning?", drive the diagnosis. The flowchart: **acute vs chronic**; if chronic, **episodic vs continuous**; if episodic, **provoked vs unprovoked**. The patient — a **50-year-old woman with sudden, persistent vertigo, nausea/vomiting, and gait instability**, worse with head movement, following a viral URI two weeks earlier — is the **[[Acute Vestibular Syndrome|acute vestibular syndrome]]**, whose short but **high-stakes** differential is **[[Vestibular Neuritis|vestibular neuritis]]** (benign, peripheral CN VIII) vs **[[Posterior Circulation Stroke|posterior-circulation/cerebellar stroke]]** (the "[[Fatal Gastroenteritis|fatal gastroenteritis]]" that herniates). The key move is [[Anatomical Approach|localization]] — **peripheral** (inner ear + vestibular CN VIII) vs **central** (brainstem/cerebellum) — and the crux is that early **[[Diffusion-Weighted Imaging|DWI-MRI misses ~1 in 10]]** posterior-fossa strokes, so the **[[HINTS Exam|HINTS exam]]** (Head-Impulse, Nystagmus, Test-of-Skew) is *more sensitive than MRI*. The paradox: in this setting an **abnormal head-impulse test is reassuring** (peripheral vestibulopathy) while a **normal** one is frightening; **direction-fixed** nystagmus and a **negative skew** are peripheral, whereas **direction-changing** nystagmus or **present skew** are central (mnemonic **INFARCT** — Impulse Normal, Fast-phase Alternating, Refixation on Cover Test). Her exam is fully peripheral — abnormal left head impulse, direction-fixed right-beating suppressible nystagmus, negative skew, normal hearing — pointing to **[[Vestibular Neuritis|vestibular neuritis]]** ("a [[Bell's Palsy|Bell's palsy]] of the eighth nerve"). An MRI (ordered for an asymmetric smile) was normal; she improved on prednisone by day seven. Coda pearls: **[[HINTS Exam|HINTS-plus]]** (new hearing loss → central [[AICA|AICA]]/[[Labyrinthine Artery|labyrinthine]] infarct), and **[[Meclizine|meclizine]] must not be chronic** (it blocks the central compensation that *is* the healing).

## Pearls

- **[[Vertigo|Vertigo]] is an illusory sense of motion — but don't lead with "is the room spinning?"** The classic **[[Dizziness|four types]]** (vertigo / lightheadedness / imbalance / nonspecific) organize the history, yet Newman-Toker showed patients are *inconsistent* about symptom quality; **timing and triggers** correlate far better with pathophysiology. Ask instead: sudden or gradual, persistent or episodic, provoked or spontaneous.
- **The [[Acute Vestibular Syndrome|acute vestibular syndrome]] has a short, high-stakes differential.** Sudden, *persistent* vertigo with nausea and gait difficulty is **[[Vestibular Neuritis|vestibular neuritis]]** vs **[[Posterior Circulation Stroke|posterior-circulation/cerebellar stroke]]** (± intoxication/trauma) — a benign eighth-nerve problem vs a life-threatening one, and the *only* symptom may be vertigo (the "[[Fatal Gastroenteritis|fatal gastroenteritis]]" that goes home and herniates).
- **[[Anatomical Approach|Localize]] peripheral vs central — and remember the cranial nerves are *peripheral*.** Peripheral = inner ear + vestibular **CN VIII**; central = brainstem/cerebellum. (CN II is the exception — an outgrowth of brain, which is why MS causes optic neuritis but not other cranial neuropathies.) Midline (vermis) cerebellar lesions impair **gait/truncal** stability with normal heel-shin; lateral hemispheric lesions impair the **limbs**.
- **The [[HINTS Exam|HINTS exam]] is more sensitive than early MRI — and its logic is paradoxical.** **[[Diffusion-Weighted Imaging|DWI-MRI]] misses ~10–20% of posterior-fossa strokes in the first 24–48 h**, so **H**ead-**I**mpulse, **N**ystagmus, **T**est-of-**S**kew wins at the bedside. In acute vestibular syndrome an **abnormal head-impulse (catch-up saccade) is *reassuring*** (peripheral), a **normal** one is *frightening*; **direction-fixed** nystagmus + **negative skew** = peripheral, while **direction-changing** nystagmus or **present skew** = central. Mnemonic **INFARCT**: **I**mpulse **N**ormal, **F**ast-phase **A**lternating, **R**efixation on **C**over **T**est → any one worries you for stroke.
- **Know the [[HINTS Exam|HINTS-plus]] caveat and the exam's Achilles heel.** **New hearing loss** shifts toward *central* — an **[[AICA|AICA]]/[[Labyrinthine Artery|labyrinthine-artery]] infarct** — not peripheral; and a **vestibular-nucleus** infarct can mimic a peripheral pattern, so if the exam is ambiguous or you lack the skill (the validating studies used neuro-otologists), get the MRI. HINTS is for *selecting* who can safely skip it.
- **[[Vestibular Neuritis|Vestibular neuritis]] is a "[[Bell's Palsy|Bell's palsy]] of the eighth nerve" — and [[Meclizine|meclizine]] is not a chronic drug.** Presumed viral/post-viral, often treated with steroids (weak data), it is self-limited (70–80% better in 1–2 days, full recovery over weeks). **Chronic meclizine inhibits central compensation** — the very recalibration that heals — so it is for a few days only; a lingering unilateral vestibulopathy after unrecognized neuritis can even masquerade as **[[BPPV|BPPV]]**.

## Problem Representation

A 50-year-old woman with a history of migraine presents with the sudden onset, one day prior, of persistent vertigo (a spinning sensation) accompanied by nausea, vomiting, and gait instability, worse with head movement, following a self-limited viral upper-respiratory illness two weeks earlier and without other focal neurologic symptoms. This is an **acute vestibular syndrome** — a sudden, persistent vestibular problem whose high-stakes differential is peripheral **vestibular neuritis** versus a central **posterior-circulation (cerebellar/brainstem) stroke**. Because early DWI-MRI misses a meaningful fraction of small posterior-fossa strokes, localization rests on the **HINTS** examination, which here is fully peripheral — an **abnormal (catch-up) head-impulse test to the left**, **direction-fixed right-beating nystagmus suppressible by fixation**, a **negative test of skew**, and **normal hearing** — indicating a left peripheral vestibulopathy. The diagnosis is **vestibular neuritis**; an MRI obtained for an incidental asymmetric smile was normal, and she recovered on corticosteroids and antiemetics within a week.

---

## Case Narrative

Gabby presents a one-word chief concern — **"[[Vertigo|vertigo]]"** — and Berkowitz, who calls this a favorite topic, first anchors the trainees in the VMR framework: **localization × time course**. Promise reflexively reaches for **cranial nerve VIII**; Ravi defines vertigo as a **spinning sensation** worsened by head/body motion and offers **[[BPPV|BPPV]]**, inner-ear/otolith dysfunction, **[[Ménière Disease|Ménière]]**, **[[Vestibular Schwannoma|schwannoma]]**, and cerebellar disease. Berkowitz sharpens the definition — vertigo is an **illusory sense of motion** (the train-next-to-you illusion, the IMAX nausea) — and then does something deliberate: he teaches the **classic four-type [[Dizziness|dizziness]] framework** (from Drachman & Hart) precisely so he can **debunk** it.

The four types: **vertigo** (a true sense of motion → a problem along the vestibular pathway from inner ear → CN VIII → brainstem/cerebellum); **lightheadedness/presyncope** (→ cardiovascular, e.g. [[Orthostatic Hypotension|orthostasis]] or a new antihypertensive); **imbalance/disequilibrium** (Marty Samuels's "are you dizzy in your *head* or your *feet*?" → gait, orthopedic, proprioceptive); and **nonspecific** (meds, anxiety). Useful for structuring the history — but **David Newman-Toker** showed the classic teaching is unreliable: asked twice, patients are *inconsistent* about whether the room "spins," and the answer doesn't correlate with whether they have an arrhythmia, an inner-ear problem, or a **cerebellar stroke** ("keep asking and you lead the witness"). His reframe: **timing and triggers** correlate far better with pathophysiology than symptom *quality*. The flowchart Berkowitz draws: **acute vs chronic**; if chronic, **episodic vs continuous**; if episodic, **provoked vs unprovoked**; if provoked, *by what* (head-turn → BPPV; standing → orthostasis).

Gabby's **HPI** lands the patient squarely in one bucket: a **50-year-old woman** with **sudden, persistent vertigo** plus **nausea/vomiting and difficulty walking** that began while walking one day earlier, **worse with head movement**, preceded two weeks earlier by a **viral URI** (cough, congestion, negative COVID tests) that resolved; she has **migraine without aura**. Ravi reads it correctly as **acute and persistent**, with a viral prodrome favoring a **peripheral** cause — **[[Vestibular Neuritis|vestibular neuritis]]**. Berkowitz seizes the teaching: this is the **[[Acute Vestibular Syndrome|acute vestibular syndrome]]** (sudden, persistent vertigo still present at evaluation), whose differential is short and high-stakes — **[[Vestibular Neuritis|vestibular neuritis]] vs [[Posterior Circulation Stroke|posterior-circulation/cerebellar stroke]]** (± intoxication, trauma).

He clarifies the **[[Anatomical Approach|localization]]**: **peripheral** = the inner ear (utricle, saccule, semicircular canals) and the vestibular portion of **CN VIII**; **central** = brainstem and cerebellum. A crucial aside: **cranial nerves are part of the *peripheral* nervous system** (hence cranial neuropathies in Guillain-Barré) — *except* CN II, the optic nerve, which is an outgrowth of brain (why MS causes optic neuritis but spares the other cranial nerves). Ravi favors peripheral because there is no weakness or sensory deficit; Berkowitz presses the danger — **peripheral and central causes can look identical** (vertigo, nausea, vomiting, gait difficulty), and Newman-Toker, as a busy Mass General resident, recognized the **high misdiagnosis risk**. Promise notes the gait problem could be a **midline (vermian)** cerebellar lesion (truncal/gait ataxia, normal heel-shin) or a **lateral hemispheric** one (limb ataxia, abnormal heel-shin) — a distinction Berkowitz praises and refines.

The stakes are framed by the **[[Diffusion-Weighted Imaging|imaging pitfall]]**: one might say "just get an MRI," but **DWI — the gold standard for ischemia — misses ~10–20% of small posterior-fossa strokes in the first 24–48 hours** (Edlow's systematic review), the false negatives clustering exactly where these strokes live. Marty Samuels called this syndrome "**[[Fatal Gastroenteritis|fatal gastroenteritis]]**": the dizzy, vomiting, "can't walk" patient dismissed as gastroenteritis who is actually having a **cerebellar stroke** and herniates. So the bedside exam matters more than the scan.

Berkowitz teaches the **[[HINTS Exam|HINTS exam]]** (Kattah/Newman-Toker 2009) — **H**ead-**I**mpulse, **N**ystagmus, **T**est-of-**S**kew — which, done well, is **more sensitive *and* specific than MRI** for separating vestibular neuritis from stroke in the acute vestibular syndrome. Gabby gives one lucid explanation; Berkowitz gives a second, grounding it in the **[[Vestibulo-Ocular Reflex|vestibulo-ocular reflex]]**: both eighth nerves are **tonically active**; turning the head raises activity on that side, and the brainstem (via the vestibular nuclei → MLF → CN III/IV/VI) drives the eyes the *opposite* way (the same logic as cold calorics). From that model the three tests follow:
- **Head impulse**: with a one-sided vestibulopathy, turning the head *toward the bad side* produces no VOR, so the eyes lag and make a **catch-up saccade** — an **abnormal** test that, paradoxically, is **reassuring** (it localizes to the peripheral apparatus). A **normal** head impulse in acute vertigo is the *frightening* result (the peripheral pathway works — look centrally).
- **Nystagmus**: a peripheral asymmetry produces **direction-fixed** nystagmus (slow phase toward the weak side, fast phase toward the healthy side, obeying Alexander's law, **suppressible by fixation**); **direction-changing** nystagmus (left-beating on left gaze, right-beating on right gaze, from impaired central gaze-holding) or **vertical** nystagmus is **central**.
- **Test of skew**: a vertical ocular misalignment on cover-uncover is usually **central**.

The mnemonic is **INFARCT** — **I**mpulse **N**ormal, **F**ast-phase **A**lternating, **R**efixation on **C**over **T**est — any *one* of which worries you for stroke.

Gabby's **exam** is otherwise normal but for HINTS: an **abnormal head-impulse test when the head was turned to the left**, **horizontal-torsional nystagmus with the fast phase to the right, suppressible by fixation**, a **negative test of skew**, **gait instability without a specific ataxic pattern**, and **normal Rinne/Weber**. Working the eighth-nerve model, Berkowitz shows the internal consistency of a **left peripheral vestibulopathy**: with the left side out, the brain "sees" right > left, infers a rightward head turn, and drives the eyes left — producing a slow phase left, **fast phase right**, exactly as observed; the abnormal left head impulse and negative skew agree. Promise, meeting HINTS for the first time, is walked to the right interpretation — negative skew (reassuring), abnormal head impulse (reassuring here), unidirectional nystagmus (reassuring) → **peripheral**. Normal hearing keeps them out of **[[HINTS Exam|HINTS-plus]]** territory (new hearing loss would suggest an **[[AICA|AICA]]/[[Labyrinthine Artery|labyrinthine-artery]]** infarct — *central*, not peripheral).

Berkowitz adds the honest caveats: HINTS is **not 100% sensitive** (a **vestibular-nucleus** infarct can mimic a peripheral pattern); the validating studies used **neuro-otologists/neuro-ophthalmologists**, not typical ED clinicians; so the teaching is to **select the right patient** to safely defer imaging, and to image when the exam is ambiguous or one's skill is uncertain. Head-impulse pitfalls: patients **habituate** ("be like a boxer" — vary the direction), and it's easier to read starting from the side and returning to center. He notes vestibular-neuritis patients admitted "for stroke" are typically **70–80% better within 24–48 hours**, unlike stroke.

Gabby closes: she *did* order an MRI (for an **asymmetric smile** of uncertain age) and it was **normal**; the diagnosis is **[[Vestibular Neuritis|vestibular neuritis]]** — "a **[[Bell's Palsy|Bell's palsy]] of the eighth nerve**," viral/post-viral, treated (weak evidence) with **prednisone** plus antiemetics, better by day seven, usually a once-in-a-lifetime, self-limited event. Two final clinical pearls: **[[Meclizine|meclizine]]** is fine for a few days but **must not be chronic** — it *inhibits the central compensation that is the healing* — and a lingering unilateral vestibulopathy after an unrecognized neuritis can **mimic [[BPPV|BPPV]]** (head-turn dizziness), distinguished because BPPV's exam is normal except on **Dix-Hallpike** while these patients show a fixed vestibulopathy. The scribe's synthesis (Shema) recapitulates the flowchart and the left-vestibulopathy logic, and Berkowitz signs off on his thesis: *dizziness can make us dizzy, but a clear framework — timing, triggers, HINTS — tames it.*

## Reasoning Breakdown

### Bayesian Updates

| Data point | Hypothesis raised/adjusted | Direction of update |
|---|---|---|
| Chief complaint "vertigo" (illusory motion) | Problem along the vestibular pathway | Localize — peripheral vs central |
| Classic 4-type dizziness quality ("room spinning?") | Symptom-quality as the discriminator | Debunked (patients inconsistent) → use timing + triggers |
| 50F, **sudden + persistent** vertigo + N/V + gait instability, worse with head motion | Acute vestibular syndrome | Framed → vestibular neuritis vs posterior-circ stroke |
| Viral URI 2 weeks prior | Vestibular neuritis (post-viral) | Raised (doesn't exclude stroke) |
| No weakness/sensory/diplopia/other focal deficit | Obvious central signs | Absent — but subtle stroke can be vertigo-only (high miss risk) |
| Early DWI-MRI ~80–87% sensitive in posterior fossa | "Just MRI to be safe" | Insufficient alone → HINTS more sensitive |
| **Abnormal** (catch-up) head impulse to the left | Left peripheral vestibulopathy | **Reassuring** (paradox — normal would be frightening) |
| **Direction-fixed** right-beating nystagmus, suppressible by fixation | Peripheral (Alexander's law) | Reassuring |
| **Negative** test of skew | Central skew | Absent → reassuring |
| **Normal hearing** (Rinne/Weber) | HINTS-plus (AICA/labyrinthine infarct) | Not triggered → stays vestibular pathway |
| Full peripheral HINTS pattern | Vestibular neuritis | Confirmed clinically (MRI deferrable if exam confident) |
| MRI (ordered for asymmetric smile) normal | Posterior-circulation stroke | Excluded |
| Prednisone + antiemetics → better by day 7 | Vestibular neuritis (self-limited) | Confirmed |

### Illness Scripts and Bias

- **[[Schema-Based Reasoning|Schema]]: decode dizziness, then pivot to timing + triggers.** The **[[Dizziness|four-type]]** framework structures the history but is *debunked* as a discriminator; the operational schema is **acute vs chronic → episodic vs continuous → provoked vs unprovoked**, with the **[[Acute Vestibular Syndrome|acute vestibular syndrome]]** as the high-stakes bucket here.
- **[[Anatomical Approach|Localization]] — peripheral vs central.** Inner ear + vestibular **CN VIII** (peripheral) vs brainstem/cerebellum (central); the pearl that **cranial nerves are peripheral** (except CN II); and midline-vermian (gait/truncal) vs lateral-hemispheric (limb) cerebellar signs.
- **[[Illness Tempo|Tempo]] as the primary axis.** Newman-Toker's insight that **timing** (sudden-persistent vs episodic vs chronic) beats symptom-quality is the episode's spine — the same localization × time-course engine used across these VMRs.
- **[[Test Interpretation|Test interpretation]] and the HINTS paradox.** **[[HINTS Exam|HINTS]]** out-performs early **[[Diffusion-Weighted Imaging|DWI-MRI]]**; the counter-intuitive readings (**abnormal head impulse = reassuring**, normal = frightening; direction-changing nystagmus/skew = central) and the **INFARCT** mnemonic; plus **HINTS-plus** (hearing loss → central AICA/labyrinthine) and the vestibular-nucleus false-peripheral caveat.
- **[[Base Rate|Base rate]] vs worst-case.** Benign vestibular neuritis is common and a lethal cerebellar stroke rare, but morbidity ("[[Fatal Gastroenteritis|fatal gastroenteritis]]") justifies the disciplined exam rather than reflexive reassurance — the do-not-miss discipline.
- **[[Return to the Bedside|Return to the bedside]].** A nuanced eye-movement exam is *more sensitive than the gold-standard scan*; the practical teaching is **patient selection** for MRI and honesty about exam skill (the studies used sub-specialists).
- **[[Illness Script|Illness scripts]].** [[Vestibular Neuritis|Vestibular neuritis]] ("[[Bell's Palsy|Bell's palsy]] of CN VIII," post-viral, steroid-treated, self-limited), [[BPPV|BPPV]] (provoked, Dix-Hallpike-positive), and the *residual-vestibulopathy-mimicking-BPPV* trap; plus the management pearl that **[[Meclizine|meclizine]] blocks central compensation** and must not be chronic.

## Teaching Discussion

- Define vertigo as an illusory sense of motion and use the four-type dizziness framework to structure the history, but do not rely on symptom quality ("is the room spinning?") to discriminate — patients are inconsistent, so lead with timing and triggers, which track pathophysiology.
- Recognize the acute vestibular syndrome (sudden, persistent vertigo with nausea and gait difficulty) as a short, high-stakes differential — vestibular neuritis versus posterior-circulation/cerebellar stroke — where the only symptom may be vertigo and the miss is lethal.
- Localize peripheral versus central: inner ear and vestibular CN VIII are peripheral (cranial nerves generally are, except CN II), brainstem and cerebellum are central; use heel-shin and gait to separate midline-vermian from lateral-hemispheric cerebellar lesions.
- Trust HINTS over early MRI in the acute vestibular syndrome: DWI misses a meaningful fraction of small posterior-fossa strokes in the first 24–48 hours, while head-impulse, nystagmus, and test-of-skew together are more sensitive — remembering that an abnormal (catch-up) head impulse is reassuring, and INFARCT (Impulse Normal, Fast-phase Alternating, Refixation on Cover Test) flags central disease.
- Add HINTS-plus and its caveats: new hearing loss suggests a central AICA/labyrinthine-artery infarct rather than a peripheral lesion, a vestibular-nucleus stroke can mimic a peripheral pattern, and the exam was validated by sub-specialists — so image when the exam is ambiguous or your skill is uncertain, and use HINTS to select who can safely defer the scan.
- Diagnose and manage vestibular neuritis as a "Bell's palsy of the eighth nerve": presumed viral/post-viral, often treated with a short steroid course (weak data) plus antiemetics, self-limited with 70–80% improvement in 1–2 days and full recovery over weeks.
- Avoid chronic meclizine: it suppresses the central vestibular compensation that drives recovery; reserve it for a few days, and consider a residual unilateral vestibulopathy from unrecognized neuritis when a "BPPV" patient has an abnormal head impulse rather than a purely Dix-Hallpike-positive exam.

## Evergreen Note Updates

- [ ] Create **[[Vertigo]]** (hub) and **[[Dizziness]]** — illusory-motion definition, the four-type framework, and the Newman-Toker **timing + triggers** flowchart (acute/chronic → episodic/continuous → provoked/unprovoked).
- [ ] Create **[[Acute Vestibular Syndrome]]** — sudden persistent vertigo; the vestibular-neuritis-vs-posterior-circulation-stroke differential; "[[Fatal Gastroenteritis]]."
- [ ] Create **[[HINTS Exam]]** — head-impulse/nystagmus/test-of-skew, the abnormal-is-reassuring paradox, INFARCT mnemonic, HINTS-plus (hearing loss → central), the vestibular-nucleus caveat, and HINTS > early DWI-MRI; link **[[Head Impulse Test]]**, **[[Vestibulo-Ocular Reflex]]**, **[[Test of Skew]]**, **[[Nystagmus]]** (direction-fixed vs direction-changing, Alexander's law).
- [ ] Create **[[Vestibular Neuritis]]** ("Bell's palsy of CN VIII," post-viral, steroids, self-limited) and update **[[Meclizine]]** (inhibits central compensation — not chronic).
- [ ] Create the peripheral-vs-central vertigo differential nodes: **[[BPPV]]**, **[[Ménière Disease]]**, **[[Vestibular Schwannoma]]**, **[[Posterior Circulation Stroke]]** / **[[Cerebellar Stroke]]**, **[[AICA]]** / **[[Labyrinthine Artery]]**.
- [ ] Create supporting nodes: **[[Diffusion-Weighted Imaging]]** (posterior-fossa false negatives), **[[Cranial Nerves]]** (peripheral vs central; CN II exception), **[[Cerebellum]]** (vermis vs hemisphere — shared with CPS 299), **[[Orthostatic Hypotension]]**, **[[Bell's Palsy]]**.
- [ ] Update **[[Localization × Time Course]]** with the vertigo/acute-vestibular-syndrome worked example, **[[Return to the Bedside]]** (HINTS > MRI), and **[[Test Interpretation]]** (test-sensitivity paradoxes).

## Handbook Opportunities

- A **dizziness/vertigo** card — the four types, the timing-and-triggers flowchart, and acute vs chronic branching.
- An **acute vestibular syndrome** card — vestibular neuritis vs posterior-circulation stroke and why the exam beats the scan.
- A **HINTS / HINTS-plus** card — the three tests, INFARCT, the abnormal-is-reassuring paradox, hearing loss as a red flag, and patient selection for MRI.
- A **vestibular neuritis** card — post-viral course, steroids, self-limited recovery, and the meclizine caveat.
- A **BPPV vs residual vestibulopathy** card — Dix-Hallpike vs a fixed head-impulse abnormality.

## References

- Kattah JC, Talkad AV, Wang DZ, Hsieh YH, Newman-Toker DE. *HINTS to diagnose stroke in the acute vestibular syndrome: three-step bedside oculomotor examination more sensitive than early MRI-DWI.* Stroke, 2009. https://pubmed.ncbi.nlm.nih.gov/19762709/
- Newman-Toker DE, Edlow JA. *TiTrATE: a novel, evidence-based approach to diagnosing acute dizziness and vertigo.* Neurol Clin, 2015. https://pubmed.ncbi.nlm.nih.gov/26231273/ — timing-and-triggers framework.
- Edlow JA, et al. *Diagnostic accuracy of MRI-DWI in acute posterior-circulation stroke / dizziness.* systematic review. https://pubmed.ncbi.nlm.nih.gov/28791981/ — early DWI false-negative rate in the posterior fossa.
- Drachman DA, Hart CW. *An approach to the dizzy patient.* Neurology, 1972. https://pubmed.ncbi.nlm.nih.gov/4402585/ — the classic four-type framework.
- Strupp M, Brandt T. *Vestibular neuritis.* Semin Neurol / NEJM reviews. https://pubmed.ncbi.nlm.nih.gov/19412854/ — course, corticosteroids, and vestibular compensation (meclizine caveat).

## Related Notes

[[Clinical Reasoning MOC]] · [[Vertigo]] · [[Dizziness]] · [[Acute Vestibular Syndrome]] · [[Vestibular Neuritis]] · [[HINTS Exam]] · [[Head Impulse Test]] · [[Vestibulo-Ocular Reflex]] · [[Test of Skew]] · [[Nystagmus]] · [[BPPV]] · [[Ménière Disease]] · [[Vestibular Schwannoma]] · [[Posterior Circulation Stroke]] · [[Cerebellar Stroke]] · [[AICA]] · [[Labyrinthine Artery]] · [[Fatal Gastroenteritis]] · [[Diffusion-Weighted Imaging]] · [[Cranial Nerves]] · [[Cerebellum]] · [[Bell's Palsy]] · [[Meclizine]] · [[Orthostatic Hypotension]] · [[Migraine]] · [[Schema-Based Reasoning]] · [[Anatomical Approach]] · [[Illness Tempo]] · [[Illness Script]] · [[Base Rate]] · [[Test Interpretation]] · [[Return to the Bedside]] · [[Localization × Time Course]] · [[CPS 299 - Clumsiness and Spinocerebellar Ataxia Type 7]] · [[RLR 027 - Dizziness and Peripheral Vertigo]] · [[RLR 044 - Recurrent Falls and Gluten Ataxia]] · [[RLR 037 - Episodic Lightheadedness and Functional Neurological Disorder]] · [[CPS 255 - Frequent Falls and CIDP]]
