---
type: meeting
date: 2026-09-04
with: [Cary Trainor]
topic: [clinical-model, scheduling, acuity, css, athena, staffing, muo-relationships]
related:
  - "[[Acuity-Based SNF Scheduling]]"
  - "[[Clinical Quality Framework]]"
  - "[[Cary Trainor Connect — Clinical Governance, 2026-09-03]]"
  - "[[Role Transition]]"
  - "[[Hospice Utilization]]"
---

# Cary Trainor Connect — Operating to the Clinical Model & CSS, 2026-09-04

10–11:20am, Teams. Cary Trainor (COO), before she leaves for Florida. The carryover agenda from [[Cary Trainor Connect — Clinical Governance, 2026-09-03]], which ran entirely to committees. Source: meeting transcript, ~85 minutes.

**Bottom line: the acuity-based scheduling model Patrick shelved in August has been built by someone else.** FP&A has a facility-level model that applies the clinical model's own short-stay/long-stay rules against each building's actual mix, and a live dashboard behind it. Patrick's contribution today was the two corrections that make it usable — physician days aren't counted, and the physician isn't interchangeable with the APC where short stay is high. Cary took both and restructured her next steps around them. Second half went to the CSS model, where Patrick's answer was: split the role in two.

---

## Part 1 — Operating to the clinical model

### What the model actually says

Scheduling today runs on **rules of thumb** — once a month for long stay, and so on — with **no attention to a building's short-stay / long-stay mix.** The accident of the current system is that those rules of thumb *average out* to the clinical model as designed. But the model itself is far more sensitive to short-stay mix than the rules are.

Cary's first exhibit made it concrete. For an **80-consent SNF**, applying the clinical model as designed:

- **10% short stay → 3 presence days a week**
- **30% short stay → 5 presence days a week**

Same building, same census. The rule of thumb cannot see the difference.

### The new model, and the gap it exposes

FP&A has built a model that takes each building's **actual** short-stay mix and derives modeled presence days and modeled visits from it. Plotted by SNF size against scheduled and actual:

- **Small SNFs:** actual presence ≈ modeled. The rules of thumb hold.
- **Larger SNFs:** modeled > scheduled > actual, and the gap widens with size.
- **Everywhere:** actual falls short of scheduled — *"largely a Friday issue. People are working four days a week."*

The headline number is the reason this meeting happened. The **old "Managing to the Clinical Model" dashboard** — total visits against the rules of thumb — reports primary care APCs at **103% of model**. The **new bottoms-up "Operating to the Clinical Model" view** reports **75%**, because it asks two questions the old one couldn't: *are we there enough days*, and *are we doing the visits, on the patients, that the model implies.*

Both dimensions are tracked per building: **presence days per week** (scheduled / actual / modeled) and **visit fidelity** (actual visits ÷ modeled visits).

### The buildings walked

| Building | Consents | Sched | Actual | Modeled | Visit fidelity |
|---|---|---|---|---|---|
| South Roanoke Nursing Home | 95 | 2.0 | 1.75 | 2.43 | 69% (29 of 42) |
| Augusta Nursing & Rehab | 87 | 4.0 | 3.75 | 5.5 | ~96% (81 of 84) |
| Our Lady of the Valley | 66 | 4.0 | 3.5 | 5+ | 59% (49 of 83) |
| Grayson Health & Rehab | — | — | 3.25 | above | — |
| Bridgewater (SNF) | 120 | 5.0 | ~4.8 | 3.2 | 142% |

**Augusta Nursing & Rehab is where the first correction came from.** The dashboard shows 3.75 actual days against 5.5 modeled. **ANR is covered five days** — there is one day Crystal isn't there and Patrick is. The model is counting **APC days only**. Cary, twice: *"That's important. I don't think that has been factored in, but it's important."*

The same building is also the best evidence the model points the right way. Visit fidelity there is ~96%, and Crystal is *"a productive NP, but not one who generates fake work — she sees everybody she needs to see, she does all the required visits."* If a provider like that came out badly against the model, the model would be suspect. She doesn't, so it isn't.

**Bridgewater is where the model gets soft.** 142% fidelity, because low short-stay mix pushes modeled presence down to 3.2 days against five scheduled. Patrick's read: like most models, fidelity degrades at the extremes — very low short stay, possibly very high. And 120 beds means keeping up with chronic care visits alone would be hard without somebody there daily. The fractional actual days are almost certainly PTO; the data is **days on which a visit was billed over a trailing four weeks**, so *"you have to be very careful about what it means to show up."*

**Aviva is a counting artifact.** ALF and memory care are broken out as separate units of one building. Beth rounds both in a single day, so it reads as *scheduled two days a week* and shows as over-scheduled. The practical minimum unit of scheduling is **one day** — primary care APCs are not expected to cover multiple buildings in a day — so a building split into two units will always look inflated.

Which is the ground for Patrick's objection to how the view is presented: red below 100, green above, and the word *"over-scheduled."* **"This should not be used or seen by anyone."** Cary agreed on the label — *"I really don't like that word."* It is a data-team default, not a decision.

**The targets are the buildings that are under-scheduled *and* low fidelity.** Our Lady of the Valley is the archetype: four scheduled against five-plus modeled, three and a half actual, and 49 visits against 83. Patrick's independent corroboration — he has seen a run of emails about tightening scheduling at that building specifically.

### The second correction: the physician is not a spare APC

Grayson is Avardis, high acuity, *"a beast of a building"* — the kind where you would expect and want high visit fidelity, and where 3.25 actual days probably conceals a physician day the dashboard can't see. Why no second APC? Almost certainly **APC turnover**: one of the Avardis buildings in the middle of nowhere, historically hard to staff. And *"we're always going to be at risk with Avardis. Whoever is working with Avardis will always be at risk with Avardis — so you really can't afford a whole lot of slack in the system."*

But adding a physician day only fixes the problem in some buildings, and this is the distinction Cary took away:

- **Low short-stay building** (Heritage Hall type): the doc is doing exactly what the NP does — regulatory visits, clearing the book, acutes. **Interchangeable.** It doesn't matter who is there that day.
- **High short-stay building** (Grayson, ANR at 20–30 short stay out of ~100 when not under an admissions hold): the physician brings something the regulatory requirement doesn't capture. **"You wouldn't want to be backfilling an NP with a physician. You should think of the doc as being the add-on."**

The exception proves it: Emily Johnson is good enough that *"it doesn't matter whether I'm there. We're interchangeable, even when it comes to the really high acuity people."* That is not the norm and can't be the staffing assumption.

Which opens a **separate physician staffing model**, not just a physician column on the APC model. ANR runs ~15 admissions a week; Patrick started going **twice** a week because 15 admissions plus regulatory visits doesn't fit in one, and he takes the acutes on Crystal's off day. On its own terms ANR is a one-and-a-half to two day a week *physician* building. **The two models may be separable in a way that matters.**

### Medical necessity — Cary's question, and the real answer

Cary's worry, looking at the under-visited buildings: *"Are we going to run into a medical necessity issue?"*

Patrick doesn't worry much about it **in SNFs**. *"By definition, they're not well."* If anything the exposure runs the other way — admissions that ought to be seen **daily for the first week or two** because *"they're basically still hospital patients, and when I was a hospitalist we rounded every day."* The routine knee replacement that used to justify a light touch is gone; those patients spend a day in a joint center and go home.

**The medical necessity risk lives in assisted living**, because in-facility acuity varies enormously:

- Most Brookdale facilities here are effectively SNFs — *"you stay there till you die"* — high acuity, easy to defend.
- CCRCs are the opposite: as soon as you can't walk to the dining room you're out of AL. The live example — one Bridgewater AL patient Patrick still owes an ACO visit and **cannot catch, because the man drives to his hunting lodge every day to go hunting.** Defending a monthly visit on that patient is a real question.

The structural answer is the one he gave Cary yesterday: **individual-level risk stratification** — a conversation he and Steve have been having for a long time, and the thing that would make both the scheduling and the defensibility real.

### Short stay is the finding

Patrick's balance-of-evidence read: **Eventus under-serves the higher-acuity SNF and long-term care patients, and especially the short stay.** Cary confirmed it from the memo behind the exhibit — **short-stay quality measures are not good, and the more under-scheduled and lower-fidelity the building, the worse they are.** Correlation, not causation, but it runs the direction you'd expect. Grayson's own QM history since 2020 shows the same shape: strong long-stay, short-stay below it. (Vanessa Fant carried that building for a long time — *"a good doc, thorn in my side, nightmare colleague, but a really good doc"* — and Saval is there now and is strong on quality measures.)

**The company is more attuned to supporting long-stay patients, and that runs all the way into training.** Long-term care is *"part hospital medicine, part primary care, and part urgent care"* — three skill sets — and **we train to the long stay.** The reason heart failure gets said over and over is that people aren't comfortable managing it, and that gap bites hardest in short stay, because **they go back to the hospital if you don't do it well.** Which is the same argument as the education thread in [[Clinical Quality Framework]], arriving from the staffing side.

### Cary's next steps out of this

1. **Get with Dan (and the analytics lead) on the combined APC + physician view.** Her words: *"honestly it'd be good for compliance for us to have that too."* The absence of physician days doesn't stop the data being used, but it does stop it being shown to anyone.
2. **Get the model parameters themselves on paper** — the short-stay/long-stay visit rules the model is built from.
3. **Walk the output with the senior physicians** — particularly the under-scheduled, low-fidelity buildings.
4. **Bring in Stephanie and the scheduling/hiring side.** *"They're not thinking, oh, this is a really busy SNF, I need two people. They just don't think that way."* The question to put to that group: **do we need to add staff here** — especially where there are a lot of ACO patients.
5. **Add short-stay mix as a displayed dimension** alongside under-scheduled, so the physician-as-add-on versus physician-as-substitute call is visible on the page.

---

## Part 2 — CSS

### Athena is the forcing function

Athena removes most of what a CSS does today. It is a living record rather than a new record built at each visit — prior information carries forward on a click. So the question isn't *how do we make CSSs more efficient*, it's **what is the job now.**

### Cary's reframe: start from what every patient is owed

Not *what does a productive provider earn*. **What administrative support does any patient require, regardless of who is treating them or how productive that person is:**

- Every patient **consented**
- **Face sheets** on every patient
- A **complete and accurate patient record with up-to-date medications** — including where the facility is on paper, or requires us to be physically present to touch their EHR

None of that should depend on the provider being productive, or new, or anything else.

**From which the coverage rules fall out:**

- A CSS in every facility that **doesn't do consenting on our behalf** (many do)
- A CSS in every building where we **lack remote chart access**
- CSS support for record completeness generally — **which does not have to be on site**
- **On-site presence at busy SNFs** — the four- and five-day buildings, maybe three — for someone who can review the acute book, know what's going on, talk to facility staff, and catch the day's issues

**The structural conclusion: assign CSSs to facilities, not to providers.** Today some facilities have **four CSSs** coming into the same building. It works for each provider and is indefensible as a system. Sequence it: start with the buildings where on-site is mandatory (no consenting help, no Matrix/PCC integration) **and** that are busy SNFs; the one-day-a-week building with full remote access gets supported remotely.

Patrick's agreement was unqualified — **"I've not come up with anything other than assigning them to the facility."** With precedent: **Valley Family and Elder Care**, the group here that Eventus bought, did exactly this. Support staff were assigned to facilities, not providers, and in practice worked for the primary care person in that building while making things go smoothly for every provider in it. **That is where Steve's Care Navigator idea came from.**

### Why the current model is incoherent

Patrick's critique, which Cary didn't contest:

- **CSS as a productivity reward implies the work is optional.** *"It's a reward to the provider if they're productive — but that by definition implies that what they're doing is nice but not necessary. We all like to have nice things, but that's not an ideal way to go about building models."*
- **CCM funds the nice thing and then prevents it.** More CCM means more CSSs to do the CCM; it doesn't scale, and it drifts toward make-work.

On billing, Cary's model assumes **APCM on all eligible patients**, with some CCM still falling out of Athena's background tracking. It requires things Eventus should be doing anyway — real transitional care support, a care plan (which exists). Patrick strongly prefers it: he had to go to **Sunnyside** when they got upset about CCM/APCM billing and ended up recording a video for them explaining APCM. **APCM is easy to defend** — *"CMS is paying us for things we do out of our own pocket that are valuable to you as a patient."* CCM is harder. And any **time-based service is a regulatory problem waiting to happen** — CMS doesn't like them and they go away.

### What CSSs should be doing instead

Patrick's positive case, which is the part that keeps the role rather than shrinking it:

- **A resource to the facility.** They make it easier for the facility to get what it needs out of Eventus, which Eventus is otherwise not great at. **"Let the CSS suffer getting it done, not the facility."**
- **Transitions of care tracking that the scheduling team structurally cannot do.** **Return to hospital is one of Patrick's own projects** — *"has been for a bit, just as a hobby"* — and the data has to come from inside the building. You cannot otherwise know who went to the hospital and came back.
- **Local execution of risk-based scheduling.** If individual-level risk stratification is where scheduling goes, it is probably better done locally; doing it centrally would take a lot of infrastructure building.

**The unsolved case:** an APC who mostly does AL work and covers a dozen assisted livings. She still needs chart prep support; it just isn't in a building. Patrick's ranking — real, uncommon, and not the big need. *"If we figure out the big problem we can fill in the small ones."*

### The physician role is a different job

This is the half of the conversation Patrick pushed, and it produced the cleanest structural claim of the meeting: **combining facility support and physician support into one role called "CSS" has diluted what the person is actually supposed to do. They are distinct functions and should be defined as distinct jobs.**

What Lindsey actually does, as the working example:

- **Pre-rounds and firefights.** She's at the facility before him, pulls the book, and if a family is fired up she goes and talks to them — either buying time or making the problem go away before he arrives.
- **Rounds with him and absorbs the interruptions.** *"I'm in the room. The nurses bother her. They don't bother me."*
- **Order transcription.** Every facility has given her scribe access to PCC; she queues orders for him to sign at the end of the day. **CMS is explicit that this is fine — what matters is who signs, not who enters.** She is the equivalent of a hospital unit secretary. *"That said, that's something you want somebody who's not an idiot doing."*
- **Meeting filtration.** She attends UR meetings where 15 minutes of 60 matter to him, extracts the 15, and hands it over.
- **Non-rounding days:** notes, and turning broad strokes into finished product — *"here's what I want made into a PowerPoint."*
- **Travels with him.** Own car, lives 10–15 minutes away in Waynesboro, goes to Roanoke and Lexington when he does.

And the part that isn't in any job description: **she is a service to the facility.** At ANR during survey week, with Patrick standing right in front of her, the regional VPO asked **"Where's Lindsey?... We're in survey. What's she doing at the beach?"** They would rather text someone who isn't the physician, and they're more likely to get what they want.

**Why physicians specifically need this.** Docs are used to signing paperwork; they are not used to *organizing* it. In skilled nursing **the papers you need to sign are literally scattered around the building.** Somebody coming from an office or a hospital has never been their own secretary, and some hate it enough that it makes the whole job feel like a bad job. Meanwhile CMS insists on a physician signature for things no physician has any special knowledge of — *"I don't know why I'm the only person who can sign for diabetic shoes. I don't really know anything about shoes."* The retention and continuity benefit is real, and largest for the newer doc who has never seen how any of this works.

### How to pay for it — the agreed mechanism

**Tie physician support to productivity.** Not the facility CSS — that one is owed to the patient regardless. The physician support role is the one that has to earn itself.

- **Hire the support person at the same time as the physician.** Make it part of the offer and the interview process rather than something that materializes two months after a start date nobody prepared for.
- **Allow a ramp**, then hold a productivity threshold to retain the person. Patrick: **"I think it's absolutely should be tied to productivity."**
- **Facility-based CSSs cushion the downside.** A doc who loses the dedicated person still has the facility's CSS to corral things on rounding days. Not the same as Lindsey at the doorway, but not nothing.
- **It only has to cover its cost, not make money.** Cary: otherwise *"we end up constantly staring at the red number on the page and wondering how to get rid of it."*

Patrick's own honest calibration, from the week Lindsey was out: *"I'd be fine. I'd find a workflow. I'd make it work... But it wouldn't be the same number of people as I'm able to see with help."* He can hit a reasonable number and a good work-life balance unsupported. He cannot hit a materially higher one. **That is exactly the threshold logic the model needs.**

### The conceptual split, in Cary's closing formulation

> **Facility CSSs are not tied to productivity.** They serve the facility / Eventus / the patient — a mission that exists independent of whether the APC in that building happens to be highly productive or not. Working for the APC is the secondary mission.
> **Physician support is tied to productivity.** It is a different job, and it pays for itself.

Cary on the road ahead: *"a lot of change management."* Patrick: **"What we're doing now doesn't make sense, and it's going to fall apart. So let's fix it before it falls apart."**

---

## Part 3 — What Eventus is bad at, in two examples

Patrick offered these deliberately, and framed both the same way: *"I'm not offering this as a personal problem to solve."* The point is that small things don't get done, and **facilities see it too.**

### The email signature

Eventus pushed out standardized signatures that cannot be edited or removed. Three problems, ascending:

1. Aesthetic — a two-word reply carrying a block signature.
2. **No credentials.** Patrick's and other docs' signatures don't carry **MD**, and don't carry **CMD**. *"We've got docs for CMD, and we want to advertise that."*
3. **His cell phone number is gone** for the first time ever, replaced by an 800 number **and a fax number.**

IT's answer was that it can't be changed and can't be removed — *"so we have an IT department that is unable to change the email signature that they created."* Jeff Trudeau has sent it to **Greg** twice; two to three weeks in, it is sitting on the head of IT's desk. *"It's a freaking email signature."*

Same pattern, higher stakes: **IT inadvertently cancelled the Kissito connection** (the thread Cary was on). The mistake is forgivable; the response was that the vendor needed to do the work, and it took a week and two or three follow-ups to get any answer at all. *"I'm not picking on IT. I'm picking on the process."*

**Cary's reaction was the interesting part.** She was asked about a signature rollout a couple of months ago and **said no** — *"we only get so many things to piss people off about. I don't want signatures to be the thing. Why are we going to die on that hill?"* It rolled out anyway, probably slipped in with the Premier rebranding. She sent a note to **Charles and Kristen** during the meeting asking whether a change was rolled out.

She is *not* bothered that it escalated to the head of IT — IT is outsourced to **Elastic IT** with a bounded scope, and system-level settings belong to the head of IT at a company this size. What bothers her is **that it shipped after she said no, and that her feedback didn't register.** Patrick's addition: if there's no mechanism to fix a typo or a wrong phone number without the head of IT, *"that was not thought through."*

**"The little stuff is the big stuff when it bothers you."**

### Avardis has nobody to call

Patrick met **Ashley Winkle (Avardis COO)** at ANR this week — he sees her often because her facilities get beaten up on survey. On Pheasant Ridge, she had an issue and it didn't get resolved fast enough. She is *"kind of a lot"* — which is the point: she is not the easy customer we let down, and she still says this:

> **"All I know is I just have to call Ganem and he'll take care of stuff, wherever it is, whatever's going on."** For Eventus — *"I don't even know who to talk to. You've got somebody here, somebody there, somebody there. I wouldn't even know who to call."*

She wants **one person and a map.** Patrick told her to call him and he'd route it — and said plainly that this isn't the answer. *"The random local medical director being the point person for a corporation"* is not a model, and he is running out of Avardis facilities anyway.

The red-coat equivalent used to be **Steve in Virginia** and one or two people in North Carolina. Those are gone. The contrast case is **Saber — Nancy Estenez knows exactly who to call, corporate level to corporate level.** That isn't true of most partners.

### Cary's answer: this is the December board deck, and help is hired

*"You do not have to tell me this. This is the drum I've been beating since I started."* She pulled up her **December board presentation** on loss of business:

- Eventus patients are **highly concentrated in a small number of parent companies / multi-unit operators. The top 50 are 60% of patients and 70% of revenue.**
- Root causes of facility losses are **both** MUO relationship management **and** facility-level operational execution.
- The two actions: **proactive relationship management across the top 50 — not the top 10** — and mitigating losses to localized competitors through effective HOT model execution.
- The Pareto by parent company: revenue and patient views are nearly identical; red bars are lost facilities; **the bulk of losses sit in the mid-tier MUOs, not the marquee accounts** (Saber, Istana tier).
- The annotated version answers where they went, and the answer was not what she expected: **not consolidating into one big competitor like Curana.** Mostly **smaller regional competitors**, with some genuine insourcing (Communicare), which is a different problem.

**The build is underway.** An **account management team** aimed at the mid-tier MUO level: **Bethany Gomez** and **Jonathan Thomas** (North Carolina) have started, Fletcher is here, and Cary went from this meeting to an interview for another. **Alicia Sims (CNO, ASC)** asked her the same question Ashley did — *"What's your org chart? Who are you guys? I'm confused."* Interim fix: publish a simple **who-to-call-for-what**, and layer account managers onto it as they're hired.

Cary on where this sits: **"This is the worst period. It's the period where you know the problem and you're fixing it, but it's not yet apparent to anybody else. Trust the process."**

---

## Follow-ups

- [ ] **Separate short stay from long stay** — the next step for [[Acuity-Based SNF Scheduling]]. One blended presence-days figure per building hides the finding; the two populations need different visit cadences, different staffing, and different measures, and short stay is where the shortfall and the poor QMs both sit.
- [ ] **Send Cary the physician-day correction in writing** so it survives the handoff to Dan — the model counts APC days only, and ANR is the worked example (3.75 shown, 5 actual).
- [ ] **Get the model parameters on paper** when Cary produces them, and check them against what [[Acuity-Based SNF Scheduling]] was going to build from scratch.
- [ ] **Short-stay mix as a displayed dimension** — the physician-as-add-on versus physician-as-substitute call depends on it.
- [ ] **Ask Shalyn why Grayson has no second APC** — Patrick's bet is APC turnover, and the building's short-stay QMs make it the archetype of the problem to fix.
- [ ] **Bring individual-level risk stratification to Steve** — it is now the answer to two separate Cary questions (medical necessity defensibility, and local versus central scheduling).
- [ ] **Return-to-hospital data** needs a facility-level reporter; that is a CSS function and an argument for the facility-assigned model.
- [ ] Carried from 9/3, unchanged and now four days out: **counsel engagement memo to Jeff Wells**, **charters to HR**, **committee structure visual** (committed for the weekend).
