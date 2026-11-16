---
title: Medical Peer Review — Foundations, Legal Architecture, and Design
type: reference
domain: clinical-excellence
created: 2026-08-18
status: active
tags: [peer-review, governance, quality, LTC, HCQIA, NPDB, health-law]
---

# Medical Peer Review

A working reference for the Chair of a peer review program, written for a physician with no prior legal training. Parts I and II build the legal vocabulary from nothing. Parts III through VII apply it. Parts VIII through XI are program design. Part XII is a glossary you can use as a lookup.

---

# PART I — ORIENTATION

## 1. What peer review is, and what it is not

**Clinical peer review** is the evaluation of an individual practitioner's clinical performance by other practitioners, for the purpose of assessing and improving the quality of care.

That is the whole definition. Everything else is structure built around it.

It is worth separating peer review from the several adjacent activities it gets confused with, because they carry different legal protections and different purposes:

| Activity                   | Question it asks                                                           | Unit of analysis                                 |
| -------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------ |
| **Clinical peer review**   | Was this practitioner's care appropriate?                                  | The individual                                   |
| **Credentialing**          | Does this person have the training, license, and history to practice here? | The paperwork                                    |
| **Privileging**            | What specifically may this person do here?                                 | The scope                                        |
| **Quality assurance / QI** | Is our system producing good outcomes?                                     | The process                                      |
| **Utilization review**     | Was this care necessary and appropriately resourced?                       | The resource                                     |
| **Root cause analysis**    | Why did this specific event happen?                                        | The event                                        |
| **M&M conference**         | What can we all learn from this?                                           | The group                                        |
| **External peer review**   | What does an outside expert think?                                         | The individual, at arm's length                  |
| **Research peer review**   | Is this manuscript sound?                                                  | Unrelated. Different meaning of the same phrase. |

These blur in practice, which is fine operationally and dangerous legally. Legal protections attach to *activities*, not to *committees*. A committee that reviews an individual clinician's care on Tuesday and reviews vendor contracts on Wednesday may find that Tuesday is protected and Wednesday is not, and that mixing the two in one set of minutes forfeits protection for both. **Keep the activities separable on paper.**

## 2. A short history, and why it explains the law

The legal architecture makes very little sense until you know how it accumulated.

**Before roughly 1950**, physicians policed each other informally or not at all. Hospital medical staffs were self-governing clubs. The prevailing legal rule was that a hospital was not responsible for the negligence of a physician on its staff, because physicians were independent contractors who merely used the hospital's facilities.

**1952** — the Joint Commission on Accreditation of Hospitals begins accrediting hospitals and requiring some form of medical staff review.

**1965** — two things happen in the same year. Medicare is enacted, tying federal payment to accreditation and thereby making Joint Commission requirements effectively mandatory. And the Illinois Supreme Court decides *Darling v. Charleston Community Memorial Hospital*.

*Darling* is worth knowing in detail because it is the reason peer review is not optional. An eighteen-year-old broke his leg playing football. The emergency physician applied a cast that was too tight. Over the following days the toes went dark and cold, the leg developed necrotic tissue, and the smell in the room became notorious. Nurses observed the deterioration and did not effectively escalate. The leg was amputated below the knee.

The hospital argued the old rule: the physician was independent, so the hospital was not liable. The court rejected it and held that a hospital owes its own, direct duty to patients to monitor the quality of care delivered within its walls, including care by physicians it does not employ. This is the **corporate negligence doctrine**.

The consequence: an organization that fails to review its practitioners can be sued for that failure. Peer review became legally compulsory not because a statute commanded it but because not doing it is itself negligence. This is called **negligent credentialing** when it attaches to appointment decisions.

**1970s–1980s** — physicians who lost privileges began suing their reviewers, and they had a devastating weapon: federal antitrust law. Their theory was that a hospital medical staff excluding a competitor is a group of competitors agreeing to boycott another competitor, which is illegal under the Sherman Act, and antitrust damages are automatically tripled.

**1986–1988** — *Patrick v. Burget*. An Oregon surgeon alleged his colleagues used the peer review process to drive him out of the local market. A jury agreed and awarded damages that were trebled to roughly $2.2 million. The defendants argued they were immune under the "state action" doctrine, which shields conduct that a state actively supervises. The Supreme Court held in 1988 that Oregon did not supervise peer review closely enough for the doctrine to apply. Peer reviewers across the country were exposed.

**1986** — Congress, watching this unfold, enacts the **Health Care Quality Improvement Act (HCQIA)**. It has two purposes: (a) protect good-faith peer reviewers from damages, so that the *Patrick* problem stops chilling review, and (b) stop incompetent physicians from moving quietly from state to state, by creating the **National Practitioner Data Bank (NPDB)**.

**2000** — the Institute of Medicine publishes *To Err Is Human*, reframing error from individual failing to system failure. This is the intellectual origin of just culture and of the modern insistence that peer review identify system causes, not just assign blame.

**2005** — the **Patient Safety and Quality Improvement Act (PSQIA)** creates a federal confidentiality structure for safety analysis, attempting to fill the gap HCQIA left. HCQIA protected *people* from damages. It never protected *documents* from discovery.

**What this history tells you:** peer review in the United States is a structure built by litigation, for litigation. Its quality-improvement function and its legal-defense function have been fused since the beginning, and they pull against each other constantly. Every design tension you will encounter as Chair is a version of that.

---

# PART II — LEGAL FOUNDATIONS

This part assumes nothing. If you already know a section, skip it.

## 3. How to read a legal citation

You will see four kinds of citation constantly.

**Statutes — laws passed by a legislature.**
`42 U.S.C. § 11112(a)`
- `42` = Title 42 of the United States Code (the title covering public health and welfare)
- `U.S.C.` = United States Code, the organized compilation of federal statutes
- `§ 11112` = section number
- `(a)` = subsection

State statutes look similar: `Va. Code § 8.01-581.17`.

**Regulations — rules written by an agency to implement a statute.**
`45 C.F.R. Part 60`
- `C.F.R.` = Code of Federal Regulations
- Regulations carry the force of law but are written by agencies (here, HHS), not Congress.

Statutes are the skeleton. Regulations are the flesh. A statute might say "entities shall report adverse actions"; the regulation defines what counts as an action, what form to use, and by when.

**Cases — decisions by courts.**
`Poliner v. Texas Health Systems, 537 F.3d 368 (5th Cir. 2008)`
- `537` = volume 537 of the reporter
- `F.3d` = Federal Reporter, Third Series (federal appellate decisions)
- `368` = starting page
- `(5th Cir. 2008)` = Fifth Circuit Court of Appeals, decided 2008

`486 U.S. 94 (1988)` means volume 486 of United States Reports, page 94 — a Supreme Court decision.

**"Cert. denied"** means a party asked the Supreme Court to hear the case and the Court declined. It is *not* an endorsement of the lower court's reasoning. It just means the issue remains unsettled nationally.

## 4. The two court systems, and why this matters more than anything else

The United States has two parallel court systems, and the difference between them determines whether your peer review files are protected.

**State courts** apply state law. Most medical malpractice cases are here.

**Federal courts** can hear a case in two situations:
- **Federal question jurisdiction** — the claim arises under federal law. Examples relevant to you: False Claims Act (billing fraud), EMTALA, Title VII (employment discrimination), ADA, ERISA, antitrust.
- **Diversity jurisdiction** — the parties are from different states and the amount at stake exceeds $75,000. State-law claims can end up in federal court this way.

**Here is the critical asymmetry.** Peer review confidentiality comes almost entirely from *state* statutes. In a federal question case, federal courts apply *federal* privilege law — and there is no federal peer review privilege. Federal appellate courts have uniformly declined to create one.

So: a malpractice case in state court, your peer review file is probably protected. The same underlying facts brought as a False Claims Act case in federal court, and it is probably not.

For a national provider group billing Medicare, federal question exposure is not hypothetical. This is why the privilege analysis in Part V matters so much.

**Circuits.** The federal appellate courts are divided into thirteen circuits by geography. A Fourth Circuit decision binds federal courts in Virginia, Maryland, and the Carolinas. A Fifth Circuit decision does not bind them; it is merely *persuasive authority* — a court may find it convincing but need not follow it. Only the Supreme Court binds everyone. This is why the law can genuinely differ by geography, which is a live problem for a multi-state group.

## 5. How a civil lawsuit works, and where peer review gets caught

Five phases:

1. **Pleadings** — the plaintiff files a complaint; the defendant answers.
2. **Discovery** — each side compels the other to hand over information.
3. **Motions** — either side asks the court to decide issues without trial (e.g., summary judgment).
4. **Trial**
5. **Appeal**

**Peer review lives or dies in discovery.** Almost nothing else matters.

Discovery tools:
- **Interrogatories** — written questions that must be answered under oath.
- **Requests for production** — demands to hand over documents. This is what reaches your committee files.
- **Depositions** — sworn out-of-court questioning, transcribed, with counsel present. If your process is challenged, you will be deposed. Everything the committee wrote will be in front of you.
- **Subpoena** — a court order compelling production or testimony from anyone, including non-parties.

**Discoverable vs. admissible are different things.** Discoverable means the other side can obtain it. Admissible means a jury can see it. Something can be discoverable but inadmissible — which is cold comfort, because once opposing counsel has your committee's assessment that "care was substandard," they will use it to shape their entire theory of the case even if the jury never sees the document.

**Privilege log.** When you withhold documents claiming privilege, you generally must produce a list describing each withheld document without revealing its contents. Courts increasingly demand detail. A vague log ("Peer Review Committee materials, various dates") invites the judge to order production or to review the documents privately.

**In camera review.** The judge reads the disputed documents privately to decide whether they are privileged. Judges do this often, and the outcome is unpredictable.

## 6. Confidentiality, privilege, and immunity are three different things

This is the single most important distinction in this document. They are routinely conflated, including by clinicians who believe peer review is "protected" without knowing which of the three they mean.

**Confidentiality** is a *duty not to disclose*. It comes from your own policies, employment agreements, and confidentiality agreements. It binds your people. It does not bind a court. A subpoena defeats confidentiality entirely. Confidentiality is what stops a committee member from gossiping. It is not legal protection.

**Privilege** is *protection from compelled disclosure*. It is what lets you refuse a subpoena. Privileges are narrow and disfavored in law, because they hide truth from courts. Familiar examples: attorney-client, spousal, clergy-penitent, physician-patient.

Two things to understand about privilege:

- **It must be created by statute or by long-standing common law.** You cannot create one by writing "PRIVILEGED" on a document. Stamping matters only as evidence that you treated the material consistently with a privilege that actually exists.
- **It can be waived.** Disclosing privileged material to someone outside the protected circle generally destroys the privilege — sometimes for that document, sometimes for the entire subject matter. Forwarding a committee summary to a regional director who is not on the committee can waive protection for everything.

**Immunity** is *protection from liability*. It does not keep anything secret. It means that even if everything comes out, you cannot be made to pay damages.

- **Absolute immunity** — protection regardless of conduct. Judges have it. You do not.
- **Qualified immunity** — protection if conditions are met. This is what HCQIA gives you.
- **Immunity from damages vs. immunity from suit** — HCQIA gives the former. You can still be sued, still be deposed, still spend two years and substantial money defending. You simply cannot be made to pay money damages at the end.

**Applied to peer review:**

| | Source | What it does | What defeats it |
|---|---|---|---|
| Confidentiality | Your policies | Stops voluntary disclosure | A subpoena |
| Privilege | State statute (mostly) | Stops compelled disclosure | Federal question jurisdiction; waiver; statutory exceptions |
| Immunity | HCQIA + state law | Stops damages | Failing the four standards; claims outside its scope |

You need all three. They fail independently.

## 7. Burdens, presumptions, and standards

**Burden of proof** — who has to prove what. Ordinarily the plaintiff must prove their case.

**Standards of proof:**
- *Preponderance of the evidence* — more likely than not, above 50%. The civil standard.
- *Clear and convincing evidence* — substantially more likely. An intermediate standard.
- *Beyond a reasonable doubt* — criminal only. Irrelevant here.

**Rebuttable presumption** — the law assumes something is true unless the other side proves otherwise. This shifts the burden.

HCQIA contains a rebuttable presumption, and it is the heart of the statute's protection: a professional review action is *presumed* to have met the standards for immunity unless the physician rebuts that presumption by a preponderance of the evidence. The reviewed physician must prove your process was deficient. You do not have to prove it was sound.

**Objective vs. subjective standards.** A subjective standard asks what you actually believed or intended. An objective standard asks what a reasonable person would have believed given the same facts. HCQIA uses an **objective** standard, which courts have repeatedly emphasized. This has a striking consequence: **the reviewers' actual motives are legally irrelevant.** If the committee members personally despised the reviewed physician, but the facts available to them would have led a reasonable committee to the same action, immunity holds.

This is the practical core of the whole regime. Your defense is not good faith. Your defense is documented process and a factual record that a reasonable committee could have acted on.

## 8. Preemption

**Preemption** is federal law overriding state law, grounded in the Supremacy Clause of the Constitution.

- **Express preemption** — the statute says so explicitly.
- **Implied preemption** — the court infers it, either because federal law occupies the entire field (*field preemption*) or because complying with both is impossible (*conflict preemption*).

Relevant to you: the PSQIA expressly preempts state law with respect to patient safety work product, stating that such material is privileged notwithstanding any other federal, state, or local law. That is why a PSO arrangement can protect material in a federal case where state privilege cannot. The preemption is narrow — it reaches only material that genuinely qualifies as patient safety work product.

## 9. The four bodies of law that reach peer review

### 9.1 Antitrust

The Sherman Act prohibits agreements that restrain trade. A hospital medical staff is, formally, a group of competing practitioners. When they collectively exclude one of their number, that structurally resembles a **group boycott**. Antitrust damages are automatically **trebled**, and the prevailing plaintiff recovers attorney's fees. This is why peer review defendants faced catastrophic exposure before HCQIA, and why HCQIA's immunity was written to cover antitrust claims specifically.

Practical implication: **any hint that a review was economically motivated is radioactive.** If the reviewed clinician competes with committee members for referrals, patients, or facility contracts, document the recusal and consider external review.

### 9.2 Corporate negligence and negligent credentialing

The *Darling* doctrine, above. Your organization owes patients a direct duty to know whether its clinicians are competent. Failing to review, or reviewing and then failing to act, is itself actionable.

This produces the central bind of the job: **not reviewing creates liability, and reviewing creates a discoverable record.** There is no position with zero exposure. The only stable answer is to review well and document defensibly.

### 9.3 Defamation

Defamation is a false statement of fact, published to a third party, that damages reputation. A committee concluding that a clinician provided substandard care is exactly the kind of statement that can support a defamation claim if it escapes the protected circle.

Two defenses. First, truth is an absolute defense. Second, most states recognize a **qualified privilege** for statements made in good faith within a peer review process — which is lost if the statement is made with malice or circulated beyond those with a legitimate need to know.

The *Poliner* case is instructive here: the jury awarded over $90 million in defamation damages, nearly all of it for mental anguish and career injury, against roughly $10,000 in demonstrated lost income. Defamation is where peer review verdicts get large.

**Operational rules:** write conclusions about care, not characterizations of people. "Documentation did not support the antibiotic indication" is a finding. "Dr. X is careless" is a defamation exhibit.

### 9.4 Due process and employment law

**Constitutional due process** applies only to government action. A private employer owes you none of it. This surprises clinicians constantly.

What you actually owe comes from three other places:
- **Contract** — your bylaws, policies, and employment agreements. If your policy promises a hearing, failing to provide one is breach of contract.
- **HCQIA's safe harbor** — not a constitutional requirement, but the price of immunity. Follow it and you are presumed immune. Skip it and you must argue your alternative was "fair under the circumstances," which is a much harder position.
- **Common law fair procedure** — a doctrine in some states requiring basic fairness in decisions that affect a professional's livelihood.

**Employment law overlay.** Your reviewees are employees, which activates a body of law hospitals reviewing independent physicians largely avoid:
- **At-will employment** — most employment can be terminated for any reason or none, but not for an *illegal* reason.
- **Title VII, ADA, ADEA** — prohibit discrimination by race, sex, religion, national origin, disability, age. All federal question claims, which means federal court, which means no state peer review privilege.
- **Retaliation** — adverse action against someone who complained about discrimination or reported a legal violation. Peer review initiated shortly after a clinician raises a safety or billing concern will be characterized as retaliation, and the timeline will be the plaintiff's central exhibit.
- **Whistleblower protection** — including under the False Claims Act, which is potent for a Medicare-billing organization.

**The rule that follows:** peer review recommends, management acts. The committee produces a clinical conclusion. A separate body, on a separate record, decides the employment consequence. When those two collapse into one process, the peer review file becomes the evidentiary centerpiece of an employment lawsuit.

---

# PART III — HCQIA IN DETAIL

**Citation:** 42 U.S.C. §§ 11101–11152.

## 10. What it does and does not do

**Does:** grants qualified immunity from *money damages* to the professional review body, its members and staff, and anyone who provides information to it in good faith. Covers federal and most state claims, including antitrust.

**Does not:**
- Create any privilege. Your documents remain discoverable as far as HCQIA is concerned.
- Protect against injunctive relief (a court order to reinstate privileges).
- Protect against civil rights claims.
- Protect against claims brought by the United States or a state attorney general.
- Extend fully to non-physicians. The statute is built around "physician," defined as doctors of medicine, osteopathy, and dentistry. For nurse practitioners, your protection comes from state law and from how carefully your policies are drafted. **In an NP-heavy group this is a structural gap, not a technicality.**

## 11. The four standards — § 11112(a)

A professional review action must be taken:

1. **In the reasonable belief that the action was in furtherance of quality health care.** Interpreted broadly and rarely a barrier.
2. **After a reasonable effort to obtain the facts of the matter.** This is where sloppy programs fail. It means an actual investigation: charts pulled, the clinician interviewed, relevant records reviewed, findings written down.
3. **After adequate notice and hearing procedures, or such other procedures as are fair under the circumstances.** The safe harbor is in § 11112(b), below.
4. **In the reasonable belief that the action was warranted by the facts known.**

Plus the presumption: presumed satisfied unless rebutted by a preponderance of the evidence, judged objectively.

## 12. The safe harbor — § 11112(b)

Meet these and you are *deemed* to have satisfied standard 3:

**Notice of proposed action**, in writing, stating that an action has been proposed, the reasons for it, that the physician may request a hearing, the deadline for requesting one (at least 30 days), and a summary of hearing rights.

**Notice of hearing**, stating the date, time, and place (at least 30 days out), and listing the witnesses expected to testify.

**Conduct of the hearing** before a mutually acceptable arbitrator, a hearing officer who is not in economic competition with the physician, or a panel of individuals not in economic competition with the physician.

**Rights at the hearing:** representation by an attorney or other representative; a record of the proceeding; to call, examine, and cross-examine witnesses; to present evidence; to submit a written statement at the close.

**After the hearing:** a written recommendation with reasons, and a written decision by the entity with reasons.

Note the recurring phrase: **not in economic competition**. Antitrust is the ghost in this machine, and structural independence from the reviewee's economic interests is what the statute keeps demanding.

## 13. Exceptions — § 11112(c)

- **Immediate action** is permitted where failure to act may result in imminent danger to any individual. Notice and hearing follow rather than precede.
- **Short restrictions** of 14 days or fewer, imposed while an investigation determines whether action is warranted, do not require the § 11112(b) procedures.

## 14. The lesson of *Poliner*

*Poliner v. Texas Health Systems* is the case to know, because its shape is counterintuitive.

A Dallas cardiologist had privileges restricted after concerns about his care, including a missed occlusion. The peer review committee reviewed 44 of his cases and found substandard care in more than half. He sued. In 2004 a jury awarded **$366 million**, later reduced on remittitur, and the case became a national alarm. In 2008 the Fifth Circuit reversed entirely, held that HCQIA immunity applied, and rendered judgment for the defendants. The Supreme Court declined to hear it.

**The instructive detail:** the five-month formal suspension was found immune on summary judgment without difficulty, because it followed process. What went to trial — and produced the $366 million verdict — was a **29-day informal "abeyance"**: the hospital had asked Poliner to agree not to exercise privileges, telling him the alternative was summary suspension, and gave him almost no time to decide. That improvised, pressured, undocumented interim step was the vulnerability.

**The rule to take from this:** the formal action is not your risk. Your risk is the informal one. The quiet conversation where a clinician is asked to stop seeing patients "voluntarily while we look into this," with no notice, no record, and no defined duration, is the single most dangerous thing your program can do. If you would not do it on the record, do not do it.

Note also that this same informal arrangement, if it lasts more than 30 days or if it constitutes surrender of privileges while under investigation, is likely **NPDB-reportable**. The informal path is worse on both axes.

---

# PART IV — THE NATIONAL PRACTITIONER DATA BANK

**Citation:** 45 C.F.R. Part 60. Primary source: the NPDB Guidebook, free at npdb.hrsa.gov.

## 15. What it is

A confidential federal database, created by HCQIA, recording adverse actions against practitioners. It is not public. Authorized entities query it; practitioners can self-query.

## 16. Why it applies to Eventus

HCQIA § 11151(4) defines a "health care entity" to include an entity that provides health care services and follows a formal peer review process for the purpose of furthering quality health care. NPDB guidance is explicit that group medical practices meeting this description are authorized to query and **required to report**.

**The bargain is unified.** You do not get to accept the immunity and decline the reporting. Formalizing peer review does both at once.

## 17. What must be reported

Professional review actions based on professional competence or conduct that:
- **Adversely affect clinical privileges for more than 30 days**, including reduction, restriction, suspension, revocation, or denial; **or**
- Constitute **surrender or restriction of privileges while under investigation** for possible incompetence or improper conduct, or in return for not conducting an investigation.

**Two definitions that trap people:**

**"Clinical privileges"** is defined expansively. It includes medical staff membership, network participation, and panel membership. In an employed group, restricting a physician's scope of practice, removing them from a facility, or limiting their panel can be reportable even though your organization never uses the word "privileges." Do not rely on your internal vocabulary.

**"Under investigation"** has caused enormous litigation. A resignation during an active investigation is reportable; a resignation before an investigation begins is not. The line is when a focused inquiry into a specific practitioner's competence or conduct commenced — not when a committee formally voted. **Define in your policy exactly what starts an investigation and record the date.** Without that, you will be arguing about it retrospectively, under oath.

## 18. Timing, scope, and consequences

- **30 days** from the action to report.
- **Biennial attestation** that all reportable actions have been submitted.
- **Physicians and dentists: mandatory.** Other practitioners including NPs and PAs: permitted and encouraged. Choose a policy, write it down, apply it uniformly. Inconsistent NP reporting is worse than either consistent choice.
- **Failure to report substantially**: publication in the Federal Register and **loss of HCQIA immunity for three years**. This is the enforcement mechanism, and it is severe.

## 19. Malpractice payment reports

Reported by the *payer*, not by you, within 30 days. Payments made solely for the benefit of a corporation are not reportable, and a payment resolving a claim that names no individual practitioner is not reportable.

This creates a well-known incentive to structure settlements so no practitioner is named. Know that it exists; do not let it influence your committee's clinical conclusions, which should be reached independently of the settlement posture.

## 20. Querying

Group practices with formal peer review are authorized to query. Consider **Continuous Query** enrollment, which converts credentialing from a point-in-time check into ongoing monitoring and notifies you when a report is filed on one of your clinicians anywhere in the country. For a national group this is the difference between finding out and not finding out.

**Immediate action item:** determine whether Eventus is registered with the NPDB as a reporting entity and whether any past actions should have been reported and were not. Do this with general counsel. A historical gap is fixable; discovering it during litigation is not.

---

# PART V — PRIVILEGE IN PRACTICE

## 21. There is no federal peer review privilege

Federal courts apply federal privilege law in federal question cases, and no federal common-law peer review privilege exists. Federal appellate courts have consistently declined to create one. Some district courts have applied state privileges as a matter of comity — respect for state policy — but this is discretionary and unreliable.

**Consequence:** in a False Claims Act case, an EMTALA case, a Title VII case, or an ADA case, assume your committee minutes are discoverable.

## 22. State privileges vary enormously, and many were written for hospitals

Every state has some peer review statute. They differ on:

- **Which entities qualify.** Some cover only hospitals and licensed facilities. Some extend to group practices, HMOs, and skilled nursing facilities. Some were amended specifically to add group practices; others were not.
- **What is protected.** Committee proceedings? Records? Documents "generated by" the committee, or also documents "presented to" it? The last distinction matters enormously — under a narrow reading, an underlying chart or incident report does not become privileged merely by being handed to your committee.
- **What the exceptions are.** Many statutes carve out actions brought *by* a practitioner against the entity, which is precisely the sham peer review lawsuit you most need protection in.
- **Procedural prerequisites.** Some statutes protect only committees formally constituted under specific requirements. Failing a formality can forfeit everything.

**The cautionary case is *Reginelli v. Boggs* (Pa. 2018).** A contracted emergency physician staffing group maintained performance files on its physicians. When a plaintiff sought them, the group claimed Pennsylvania's peer review privilege. The court held the group was not a "health care provider" under the statute because the entity itself — as distinct from its individual licensed physicians — was not licensed or regulated by the Commonwealth. No privilege.

**A multi-state provider group delivering care inside facilities it does not own is exactly the structure that fell through that gap.** This is not an edge case for you. It is your organizational form.

## 23. What to do about it

A fifty-state analysis is expensive. A footprint analysis is not optional. For each state where Eventus operates, you need answers to:

1. Does the statute cover a provider group of your type?
2. What must the committee do procedurally to qualify?
3. What categories of document are protected, and what falls outside?
4. What are the exceptions, particularly for practitioner-initiated suits?
5. Has case law narrowed the statute?

Then design to the **most restrictive** state in your footprint. A national program cannot maintain fifty variants of committee practice.

## 24. Operational discipline that survives a narrow privilege

Assume some of what you write will be read by opposing counsel. Then:

- **Minutes record the question, the materials reviewed, the conclusion, and the action.** They do not transcribe deliberation. Never attribute individual opinions by name.
- **Write findings about care, not characterizations of people.**
- **Header every document** with a confidentiality legend citing the applicable state statute and 42 U.S.C. § 11101 et seq. This does not create privilege. Its *absence* is used to argue you did not treat the material as privileged, which supports a waiver argument.
- **Control distribution absolutely.** Peer review content in ordinary email is the most common privilege breach in practice. No forwarding, no summaries to regional leadership, no "quick question" threads. Use a controlled system with defined access.
- **Separate custody.** Peer review file, credentialing file, and HR file are three files, with three custodians, three retention schedules, and three access lists. When they commingle, a plaintiff who obtains one obtains all three.
- **Distinguish source documents from committee work product.** A chart is not privileged because your committee looked at it. Do not assume otherwise, and do not write analysis into source documents.

---

# PART VI — PSQIA AND PATIENT SAFETY ORGANIZATIONS

**Citation:** 42 U.S.C. §§ 299b-21 to 299b-26; 42 C.F.R. Part 3.

## 25. The structure

Congress created a category called **patient safety work product (PSWP)** and gave it a genuine **federal** privilege. Because it is federal, it works in federal court, which is exactly where state privilege fails. It expressly preempts weaker state law.

The mechanism: a provider establishes a **Patient Safety Evaluation System (PSES)** — a defined internal space where safety information is collected and analyzed for the purpose of reporting to a federally listed **Patient Safety Organization (PSO)**. Material within that system, created for that purpose and actually reported, is PSWP.

## 26. Why it disappoints people

Courts have read it narrowly and consistently. To claim the privilege you must prove the document was **created for the purpose of** reporting to a PSO **and was so reported**. Two categories fall outside:

- **Records required by other law.** If state regulation or CMS requires you to maintain it, it is not PSWP no matter where you file it.
- **Dual-purpose documents.** Material maintained for ordinary business or quality purposes is not converted into PSWP by also sending it to a PSO.

*Tibbs v. Bunnell* (Ky. 2014, cert. denied) and *Ungurian v. Beyzman* (Pa. Super. 2020) are the cases where hospitals with functioning PSO arrangements nonetheless lost. In *Ungurian*, an event report, a root cause analysis, committee minutes, and credentialing files were all held unprotected.

## 27. Whether it is worth it for you

The argument in favor is specific: your federal question exposure is real (False Claims Act risk attaches to any large Medicare-billing organization), and PSQIA is the only tool that works in federal court.

The argument against is that half-measures produce all the cost and none of the protection. If you do this, it requires a documented PSES with hard boundaries, disciplined marking of work product, an actual reporting pipeline, and staff training. A PSO contract with sloppy internal practice is money spent on a defense that will fail.

Make the decision deliberately with counsel, either way. Drifting into it is the worst outcome.

---

# PART VII — THE EMPLOYMENT OVERLAY

Restating the central rule because it governs so much:

**Peer review recommends. Management acts.**

The committee's output is a clinical conclusion and a recommendation. The employment consequence is decided separately, by a different body, on a different record.

Why this matters concretely: when a terminated clinician sues for discrimination or retaliation, the plaintiff's theory will be that the stated reason was pretext. Their best evidence is a peer review file showing the clinical concern arose after the protected activity, or showing that similarly situated clinicians were reviewed differently. If your peer review process *is* the termination process, the entire file becomes the battleground and the privilege question becomes existential.

Practical requirements:
- Separate documents, separate custodians, separate access.
- Peer review findings communicated to management as a recommendation, not as a personnel decision.
- Consistency across clinicians. Disparate treatment is the core of every discrimination claim. If you review two clinicians for the same trigger and handle them differently, you need a documented clinical reason.
- Timeline discipline. Record when concerns arose. Retaliation claims live on chronology.

---

# PART VIII — DESIGNING THE PROCESS

## 28. The framing problem for Eventus

Nearly all peer review literature assumes a hospital medical staff: bylaws, privileges, a Medical Executive Committee, Joint Commission standards (MS.08.01.01 for FPPE, MS.08.01.03 for OPPE) as the binding constraint.

Eventus is a multi-state employed-and-contracted provider group delivering care inside facilities it does not own, with a workforce roughly half nurse practitioners, across LTC and ALF settings with different regulatory structures and different standards of care.

Four consequences:

1. **No "privileges" in the classic sense**, but federal law reads the term broadly enough that employment and panel decisions can still trigger reporting.
2. **Weaker and more variable privilege**, possibly none in some states.
3. **Direct collision with employment law**, because reviewees are employees.
4. **Attribution is genuinely hard**, because the facility owns nursing, medication administration, monitoring, and much of the documentation.

## 29. Committee structure

Four models, ascending in quality:

| Model | Bias risk | Reliability | Efficiency |
|---|---|---|---|
| Individual reviewer / regional medical director | Highest (personal bias) | Lowest | Highest |
| Specialty or department committee | High (specialty bias) | Low | Lowest |
| Multispecialty committee | Lower | Moderate | High |
| Multispecialty + structured criteria + calibration | Lowest | Highest | Moderate |

Contemporary practice has moved toward a **single multispecialty committee** reviewing all cases, pulling in specialty expertise on request. The reasoning: except where technical quality genuinely hinges on specialty-specific knowledge, same-specialty review magnifies bias rather than reducing it, and it produces the "too big to fail" and "self-preservation" failures where a committee dominated by one specialty declines to find fault with its own.

**For Eventus the relevant axes of diversity are not specialty.** They are setting (LTC vs. ALF), discipline (physician vs. NP), and region. Build the council to span all three. Include at least one NP as a voting member if NPs are reviewed. Include a nonvoting nursing or pharmacy voice to counter professional bias.

**Non-negotiables:** written charter; defined terms and quorum; a real conflict-of-interest and recusal policy; signed confidentiality agreements; and an explicit rule that no member reviews a case involving their own region, their own direct reports, or anyone they supervise. The economic-competition language in § 11112(b) is not decorative — build the recusal rule around it.

## 30. Case identification

Random sampling is wasteful. Use explicit, published triggers. The trigger list is itself a teaching document.

Candidates for your setting:

- Unplanned transfer to ED or hospital
- 30-day readmission
- Death within 30 days of an acute change, in a patient not on hospice
- Fall with major injury
- New pressure injury, stage 3 or greater, or unstageable
- Antipsychotic initiation without a documented qualifying indication
- Antibiotic initiation not meeting explicit criteria (your UTI spectrum work is a natural source)
- Opioid or benzodiazepine initiation outside protocol
- Missed or late required visits
- Anticoagulation-related bleeding
- F-tag citation naming a practitioner
- Family or facility complaint
- Malpractice claim, board complaint, or licensure action
- **Self-referral by a clinician who wants a case reviewed**

That last item is the culture test. If nobody ever self-refers, the process is punitive and everyone knows it.

## 31. Screening before committee

Most triggered cases do not need committee time. Build a screening layer — quality staff or a designated reviewer applying explicit criteria — that closes clear cases and escalates only genuine ambiguity. Track the ratio. A committee reviewing everything collapses under volume within a year.

## 32. Scoring

Standardized rubric, with three separate judgments rather than one.

**Axis A — care assessment**
1. Care met expectations
2. Care met expectations; opportunity for improvement identified (system-level)
3. Care did not meet expectations; opportunity for improvement identified (practitioner-level)
4. Care did not meet expectations; significant deviation

**Axis B — contributing factors**
System / process / documentation / knowledge / judgment / behavior / patient or family factors / not determinable

**Axis C — preventability**
Not the same as appropriateness. In LTC a great deal of care that met expectations still preceded a bad outcome, and a great deal of imperfect care made no difference.

Separating the axes prevents the most common failure: a committee that finds "care did not meet expectations," stops, and has implicitly assigned blame without identifying anything actionable.

## 33. Reliability — the uncomfortable evidence

Most peer review programs never confront this. The literature on implicit case review is bleak.

Goldman's 1992 JAMA systematic review found chance-corrected agreement among physician reviewers assessing quality of care to be, across most studies, in the range regarded as poor — barely better than chance. Hayward and Hofer showed that preventability judgments about hospital deaths varied so much across reviewers that the resulting estimate of deaths due to error was largely a function of who did the reviewing. Hofer and colleagues found that letting reviewers discuss cases did not improve reliability. Later work has confirmed the pattern repeatedly.

**Design consequences:**

- **A single reviewer's judgment is not evidence.** Never take formal action on one. This is also a § 11112(a)(2) argument: one reviewer's impression is not a reasonable effort to obtain the facts.
- **Explicit criteria outperform implicit judgment.** Wherever a question can be converted into a rule ("was a urinalysis ordered before the antibiotic," "was goals-of-care documentation reviewed"), convert it.
- **Calibrate annually.** Circulate 5–10 seeded cases with known committee consensus, measure agreement, feed results back. This is the highest-yield thing you can do and almost nobody does it.
- **Report your own inter-rater agreement to the Quality Council.** A program that will not measure itself has no standing to measure anyone else.

## 34. The two biases you can only manage

**Hindsight bias.** Reviewers who know the outcome systematically rate the antecedent care worse. Mitigation: stage the case presentation where feasible, withholding the outcome until the reviewer has committed to an assessment of the decision as it stood at the time.

**Outcome bias, acute in LTC.** Your patients die, fall, and deteriorate at high rates regardless of care quality. A committee that reviews only bad outcomes concludes that care is worse than it is. Mitigation: review a small random sample of *good*-outcome cases against the same rubric. The calibration effect is substantial and it changes how the committee reads the trigger cases.

## 35. Escalation and response

The Vanderbilt tiered intervention model (Hickson and colleagues) is the best-validated framework and maps cleanly onto a group practice:

1. **Informal conversation** — single event, no pattern. A peer, a cup of coffee. Not documented as peer review.
2. **Awareness intervention** — data showing the clinician where they sit relative to peers. Nonjudgmental, delivered by a peer.
3. **Authority intervention** — leadership-directed improvement plan with defined measures and a defined review period.
4. **Disciplinary intervention** — formal action, HCQIA procedures engaged, NPDB reporting analysis performed.

Most cases should terminate at level 1 or 2. A bottom-heavy distribution means your triggers are wrong or your culture is punitive.

Pair this with a just culture algorithm (Marx, Dekker, Reason), distinguishing **human error** (console, redesign), **at-risk behavior** (coach, and fix the incentive that made the shortcut rational), and **reckless behavior** (discipline). The distinction is between the *behavioral choice* and the *outcome*. Two clinicians can make the identical choice and one kills a patient; the just culture response is the same for both.

## 36. Measuring the program itself

- Cases triggered, screened, committee-reviewed
- Median days from event to closure
- Proportion closed at collegial level
- Inter-rater agreement on calibration cases
- Recurrence rate for identified opportunities
- System-level actions generated per quarter (near zero means you have a disciplinary process, not a quality process)
- Anonymous clinician survey: is the process fair, is it educational, would you self-refer

---

# PART IX — LONG-TERM CARE SPECIFICS

## 37. Standard of care is genuinely contested

Most guidelines are extrapolated from populations that exclude your patients. A reviewer applying an ambulatory internal medicine standard to an 89-year-old with advanced dementia will systematically over-call.

Your committee needs an explicit written statement of the standard it applies, and that standard should be geriatrics-informed. AMDA clinical practice guidelines, the Beers Criteria, STOPP/START, and the Loeb minimum criteria are the natural anchors. Write down which ones you use.

## 38. Goals of care must be visible to the reviewer

A decision not to transfer, not to treat, not to work up is frequently correct and frequently unrecognizable as correct without the advance care planning documentation in front of the reviewer.

**Build ACP documentation into the standard case packet.** Without it, your committee will reliably mistake good palliative practice for negligence.

This runs the other direction too, and that finding is more common in practice: care that proceeded aggressively with no documented goals conversation, where the reviewable failure is the absent conversation rather than the intervention.

## 39. Attribution

The practitioner sees the patient episodically. Facility nursing executes, monitors, escalates, and documents. When an outcome goes wrong, the causal chain usually runs through people your committee has no authority over.

Two implications. First, the rubric must be able to conclude "facility system factor, no practitioner opportunity," and that conclusion must be common enough to be credible. Second, those findings are strategically valuable: they are your evidence base for facility partnership conversations, and they are what distinguishes clinical excellence work from internal policing.

## 40. Small numbers

Individual practitioner rates in LTC are usually statistically meaningless. A clinician with 40 patients and two deaths does not have a mortality rate.

Do not build a dashboard that implies otherwise. Either aggregate to a level where the denominator supports inference, use shrinkage estimation or funnel plots with control limits, or restrict to rule-based measures where n=1 is interpretable.

## 41. LTC and ALF are different review environments

Different regulatory structure (CMS-certified vs. state-licensed), different nursing capacity, no MDS in assisted living, different documentation systems, different acuity. A single review standard applied across both will be wrong in one of them. Consider parallel criteria sets sharing a common rubric.

## 42. NP practice and collaboration

Scope of practice varies by state across your footprint, which means the same clinical decision can be within scope in one state and outside it in another. The adequacy of physician collaboration or supervision is itself a reviewable domain, and the failure is usually structural — caseload, geography, unclear expectations — rather than individual. **Review it as a system measure before you review it as a practitioner measure.**

---

# PART X — FAILURE MODES

**Sham peer review.** Peer review weaponized for economic or personal reasons. The critical literature is uneven in quality but the phenomenon is real, and you will eventually be asked to run a process where someone wants a predetermined outcome. Your defenses are the conflict-of-interest policy, the recusal rule, multispecialty composition, and the written record. Recognize also that HCQIA's objective standard means a well-run process survives even genuine hostility — which cuts both ways, and is why the procedural discipline has to be real rather than performative.

**The informal action.** *Poliner's* lesson. The quiet request to stop seeing patients "voluntarily while we look into this," with no notice, no record, no defined duration, is your single greatest exposure. It also risks triggering NPDB reporting as a restriction while under investigation. If you would not do it on the record, do not do it.

**Minutes that become exhibits.** Every characterization written in a minute is a future deposition exhibit and may be discoverable regardless of your state privilege. Train the committee explicitly on what goes in minutes and what does not.

**Waiver by distribution.** Peer review content forwarded outside the committee is the most common privilege breach in practice, and it can waive protection for an entire subject matter, not just the forwarded document.

**Silence as the default.** Freidson's finding, still the best description of the underlying problem: physicians in groups develop norms of mutual non-criticism, prefer the informal "talking-to" over formal process, and tolerate a wide band of deviance rather than confront a colleague. Every peer review program is fighting this. The programs that fail do so because they were never actually running.

---

# PART XI — FIRST NINETY DAYS

1. **NPDB registration status and historical reporting gap analysis**, with general counsel. Highest priority.
2. **Multi-state peer review privilege analysis** for your operating footprint. Design to the most restrictive state.
3. **Written charter**: scope, membership, quorum, conflicts, recusal, confidentiality, document control, relationship to credentialing and to HR.
4. **Fair hearing plan** meeting § 11112(b), even though you are not a hospital.
5. **Written definition of when an "investigation" begins**, with a date-recording requirement.
6. **Trigger list and screening criteria**, published to clinicians before use.
7. **Scoring rubric** with the three axes.
8. **Case packet standard**, including ACP documentation.
9. **PSO decision**, made deliberately either way.
10. **Baseline calibration exercise** before the first real case.

---

# PART XII — GLOSSARY

**Admissible** — able to be presented to a jury. Distinct from discoverable.

**At-will employment** — employment terminable for any reason or none, but not for an illegal reason.

**Cert. denied** — the Supreme Court declined to hear the case. Not an endorsement of the result.

**C.F.R.** — Code of Federal Regulations. Agency rules with the force of law.

**Circuit** — one of thirteen federal appellate regions. Decisions bind only within the circuit.

**Common law** — law developed through judicial decisions rather than statutes.

**Comity** — a court's discretionary respect for another sovereign's law. Sometimes why a federal court honors a state privilege; never something to rely on.

**Confidentiality** — a duty not to disclose. Defeated by a subpoena.

**Corporate negligence** — an organization's direct liability for failing to monitor the quality of care delivered within it. *Darling*.

**Deposition** — sworn out-of-court testimony, transcribed, taken during discovery.

**Discoverable** — obtainable by the opposing party during litigation.

**Discovery** — the pretrial phase in which parties compel information from each other.

**Diversity jurisdiction** — federal jurisdiction based on parties from different states and over $75,000 at stake.

**Federal question jurisdiction** — federal jurisdiction based on a claim arising under federal law.

**FPPE** — Focused Professional Practice Evaluation. Joint Commission term for time-limited, targeted evaluation, triggered by new privileges or by a concern.

**Group boycott** — an antitrust theory in which competitors collectively exclude another competitor. The reason peer review attracts antitrust claims.

**HCQIA** — Health Care Quality Improvement Act of 1986. Grants qualified immunity; created the NPDB.

**Immunity** — protection from liability. Qualified immunity depends on conditions being met.

**In camera review** — a judge privately examining disputed documents to rule on privilege.

**Interrogatories** — written questions answered under oath during discovery.

**NPDB** — National Practitioner Data Bank. Confidential federal repository of adverse actions.

**Objective standard** — judged by what a reasonable person would have concluded, not by actual intent. HCQIA uses this.

**OPPE** — Ongoing Professional Practice Evaluation. Joint Commission term for continuous performance monitoring, reviewed at intervals not exceeding 12 months.

**Preemption** — federal law overriding state law.

**Preponderance of the evidence** — more likely than not. The civil burden of proof.

**Privilege** — protection from compelled disclosure. Created by statute or common law; can be waived.

**Privilege log** — a list of withheld documents, described without revealing contents.

**Professional review action** — under HCQIA, an action based on a practitioner's competence or conduct that affects clinical privileges. Actions taken for economic or administrative reasons are not professional review actions.

**PSES** — Patient Safety Evaluation System. The defined internal space where PSWP is created.

**PSO** — Patient Safety Organization. Federally listed entity receiving PSWP.

**PSQIA** — Patient Safety and Quality Improvement Act of 2005. Created the federal PSWP privilege.

**PSWP** — Patient Safety Work Product. Material created for reporting to a PSO and so reported.

**Qualified privilege** — in defamation, a defense protecting good-faith statements made to those with a legitimate need to know. Lost through malice or overbroad circulation.

**Rebuttable presumption** — the law assumes something true unless the other side disproves it. HCQIA contains one, in your favor.

**Remittitur** — a court's reduction of an excessive jury award.

**Sham peer review** — peer review conducted for economic or retaliatory rather than quality purposes.

**Stare decisis** — the principle that courts follow prior decisions.

**Subpoena** — a court order compelling testimony or production of documents.

**Treble damages** — automatic tripling of an award. Applies to antitrust.

**U.S.C.** — United States Code. Federal statutes.

**Waiver** — loss of a privilege through disclosure outside the protected circle.

---

# PART XIII — REFERENCES

## Statutes and regulations
- Health Care Quality Improvement Act, 42 U.S.C. §§ 11101–11152 (esp. § 11111 immunity, § 11112 standards, § 11133 reporting, § 11151 definitions)
- 45 C.F.R. Part 60 — National Practitioner Data Bank
- Patient Safety and Quality Improvement Act, 42 U.S.C. §§ 299b-21 to 299b-26; 42 C.F.R. Part 3
- 42 C.F.R. § 483.75 — SNF Quality Assurance and Performance Improvement
- Va. Code §§ 8.01-581.16 (immunity), 8.01-581.17 (privilege)

## Primary practical sources
- **NPDB Guidebook** — https://www.npdb.hrsa.gov/guidebook/ — free and authoritative. Chapters D (Queries) and E (Reports) are the operative ones. Read them in full.
- NPDB, *Group Medical Practices and Ambulatory Surgical Centers* — https://npdb.hrsa.gov/orgs/groupMedicalPracticesAndAmbulatorySurgicalCenters.jsp
- NPDB reporting infographics — https://npdb.hrsa.gov/hcorg/reportingClinicalPrivileges.jsp
- Joint Commission standards FAQs, OPPE and FPPE (MS.08.01.03, MS.08.01.01) — not binding on you, but the best available design template
- NCQA credentialing standards (CR 1–8) — relevant if you contract with Medicare Advantage plans
- AHRQ PSO Program — https://pso.ahrq.gov/

## Case law
- *Darling v. Charleston Cmty. Mem'l Hosp.*, 33 Ill. 2d 326, 211 N.E.2d 253 (1965) — corporate negligence
- *Patrick v. Burget*, 486 U.S. 94 (1988) — antitrust exposure; the reason HCQIA exists
- *Austin v. McNamara*, 979 F.2d 728 (9th Cir. 1992) — objective standard
- *Bryan v. James E. Holmes Reg'l Med. Ctr.*, 33 F.3d 1318 (11th Cir. 1994) — leading HCQIA immunity analysis
- *Poliner v. Tex. Health Sys.*, 537 F.3d 368 (5th Cir. 2008), cert. denied (2009) — the informal action is the dangerous one
- *Adkins v. Christie*, 488 F.3d 1324 (11th Cir. 2007) — no federal peer review privilege
- *Reginelli v. Boggs*, 181 A.3d 293 (Pa. 2018) — contracted physician group outside state privilege
- *Tibbs v. Bunnell*, 448 S.W.3d 796 (Ky. 2014), cert. denied (2016) — narrow PSQIA reading
- *Ungurian v. Beyzman*, 232 A.3d 786 (Pa. Super. 2020) — PSQIA and state privilege both fail

## Reliability and methodology
- Goldman RL. The reliability of peer assessments of quality of care. *JAMA*. 1992;267(7):958-960.
- Hayward RA, Hofer TP. Estimating hospital deaths due to medical errors: preventability is in the eye of the reviewer. *JAMA*. 2001;286(4):415-420.
- Hofer TP, Bernstein SJ, DeMonner S, Hayward RA. Discussion between reviewers does not improve reliability of peer review of hospital quality. *Med Care*. 2000;38(2):152-161.
- Localio AR, Weaver SL, Landis JR, et al. Identifying adverse events caused by medical care: degree of physician agreement in a retrospective chart review. *Ann Intern Med*. 1996;125(6):457-464.
- Forster AJ, Bennett C, van Walraven C, Worthington J. Reliability of the peer-review process for adverse event rating. *PLoS One*. 2012;7(7):e41239.
- Weingart SN, Davis RB, Palmer RH, et al. Discrepancies between explicit and implicit review: physician and nurse assessments of complications and quality. *Health Serv Res*. 2002;37(2):483-498.

## Program design and effectiveness
- Marder RJ, Smith MK. *Effective Peer Review: A Practical Guide to Contemporary Design*. HCPro. — the standard operational text; buy the current edition
- Edwards MT. The objective impact of clinical peer review on hospital quality and safety. *Am J Med Qual*. 2011;26(2):110-119.
- Edwards MT. In pursuit of quality and safety: an 8-year study of clinical peer review best practices in US hospitals. *Int J Qual Health Care*. 2018;30(10):737-744.
- Vyas D, Hozain AE. Clinical peer review in the United States: history, legal development and subsequent abuse. *World J Gastroenterol*. 2014;20(21):6357-6363.
- Greeley/Chartis, *Peer Review Structures* — https://www.greeley.com/insights/peer-review-structures
- Credentialing Resource Center (HCPro) — ongoing practical coverage

## Professionalism, culture, intervention
- Hickson GB, Pichert JW, Webb LE, Gabbe SG. A complementary approach to promoting professionalism: identifying, measuring, and addressing unprofessional behaviors. *Acad Med*. 2007;82(11):1040-1048.
- Hickson GB, Federspiel CF, Pichert JW, et al. Patient complaints and malpractice risk. *JAMA*. 2002;287(22):2951-2957.
- Marx D. *Patient Safety and the "Just Culture": A Primer for Health Care Executives*. 2001.
- Dekker S. *Just Culture: Balancing Safety and Accountability*. 3rd ed.
- Reason J. Human error: models and management. *BMJ*. 2000;320(7237):768-770.
- Boothman RC, Blackwell AC, Campbell DA, et al. A better approach to medical malpractice claims? The University of Michigan experience. *J Health Life Sci Law*. 2009;2(2):125-159.

## Sociology of professional self-regulation
- Freidson E. *Doctoring Together: A Study of Professional Social Control*. 1975. — the foundational account of why physicians in groups do not sanction each other; the "rule of tolerated deviance" and the informal talking-to. Still the sharpest description of the problem you have been handed.
- Bosk CL. *Forgive and Remember: Managing Medical Failure*. 2nd ed. 2003. — ethnography of surgical training; the distinction between technical error (forgiven) and normative error (not) is directly usable in rubric design.
- Rosenthal MM. *The Incompetent Doctor: Behind Closed Doors*. 1995.

## Long-term care
- AMDA — The Society for Post-Acute and Long-Term Care Medicine: clinical practice guidelines and medical director competencies
- Loeb M, Bentley DW, Bradley S, et al. Development of minimum criteria for the initiation of antibiotics in residents of long-term-care facilities. *Infect Control Hosp Epidemiol*. 2001;22(2):120-124.
- Ouslander JG, Lamb G, Tappen R, et al. Interventions to reduce hospitalizations from nursing homes: evaluation of the INTERACT II collaborative quality improvement project. *J Am Geriatr Soc*. 2011;59(4):745-753.
- Katz PR, Karuza J, Intrator O, et al. Nursing home medical staff organization and 30-day rehospitalizations. *J Am Med Dir Assoc*. 2011;12(9):652-657.
- 2023 AGS Beers Criteria; STOPP/START v3

## General patient safety
- Kohn LT, Corrigan JM, Donaldson MS, eds. *To Err Is Human: Building a Safer Health System*. IOM, 2000.
- Wachter RM, Gupta K. *Understanding Patient Safety*. 3rd ed.

## If you want one legal reference on the shelf
- American Health Lawyers Association, *Peer Review Guidebook* — written for counsel but readable, and the standard desk reference in this area.
