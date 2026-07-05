# DESIGN_CONSTITUTION.md

> The highest authority for every visual and experiential decision on the Stravex Technologies website.
> This document defines _why_, not _what_. Where it conflicts with any other project document, this document wins.

**Provenance note:** This Constitution is synthesized from ARCHITECTURE.md, DESIGN_SYSTEM.md, PROJECT_RULES.md, and DEVELOPMENT_ROADMAP.md (all confirmed present and read in full), and from the brand strategy, messaging framework, and homepage experience strategy developed earlier in this project's process. `CONTENT_STRATEGY.md`, `STRAVEX TECHNOLOGIES - info.md`, and `STRAVEX MASTER DOCUMENT.pdf` were referenced as canonical but were not available at the time of writing. Where this Constitution makes a ruling that may be covered in one of those documents (most notably the maturity-status rubric in Section 9), that ruling should be checked against the original source and reconciled, not assumed correct by default.

---

## PREAMBLE — WHAT THIS DOCUMENT IS FOR

Every other document in this project describes a _system_: tokens, folder structures, phased deliverables. This document describes the _reasoning_ those systems exist to serve. A token value can be changed in an afternoon. A principle in this document should survive a full redesign, a rebrand of secondary visual elements, a new framework, even a new design team — because it isn't about how Stravex looks. It's about what Stravex is _for_, and what kind of looking-at produces the right response in the person doing the looking.

This document does not contain hex codes, pixel values, or component specifications. If you are looking for those, they belong in `DESIGN_SYSTEM.md`. This document exists to answer the question that comes before any of those: _why that value, and not another?_ When a future contributor — human or AI — is unsure whether a new decision belongs, the test is not "does this match the existing tokens." The test is "does this serve the reasoning below." Matching tokens is necessary but not sufficient.

---

## 1. WHY STRAVEX LOOKS THE WAY IT DOES

Stravex is a tactical defence engineering company. Its entire commercial and strategic viability depends on a narrow, specific kind of trust: the trust a procurement officer, a defence organization, or a technical evaluator extends to a vendor whose systems might one day matter in a real operational failure. That trust is not won through persuasion. It is won through the _absence_ of anything that looks like persuasion.

This is the single generative fact behind every visual decision in this project. A SaaS company's homepage is trying to convert attention into a trial signup within seconds, so it uses urgency, social proof, and emotional color. A consumer brand is trying to be liked. Stravex is trying to be _believed_, by an audience whose professional training has taught them to distrust exactly the visual techniques that work on everyone else. Every gradient, every bounce animation, every stock photo of a soldier, every inflated statistic is not merely off-brand — it is actively counter-productive, because it signals to the one audience that matters most that this company either doesn't understand its own category or is compensating for something it can't actually deliver.

Restraint, then, is not an aesthetic preference. It is the mechanism of the entire trust-building strategy. A visitor should leave this website with more certainty about what Stravex does and less certainty about how impressed they're supposed to be — because the second kind of certainty is what marketing produces, and the first kind is what engineering produces.

---

## 2. THE VISITOR'S EXPERIENCE ACROSS TIME

### At 5 seconds — the procurement officer

They have seen dozens of defence-adjacent websites that overpromised. Their default posture is skepticism, not curiosity. In five seconds, they should feel _nothing dramatic_ — and that absence of drama is itself the signal. No hero video, no bold claim demanding a reaction, no visual device asking to be admired. They should feel the specific, quiet recognition of walking into a room that takes itself seriously — the same feeling of correctly-calibrated formality you get walking into a well-run engineering firm's lobby, not a startup's open-plan office. If they feel _impressed_, the page has failed. If they feel _nothing extreme, but oriented_, it has succeeded.

### At 30 seconds — the procurement officer, continued

They now know, without having to work for it, which specific domains Stravex operates in (detection, interception, autonomy, electronics, applied AI) and that these domains are presented as one coherent system rather than a scattered capability list. They should feel the beginning of a working hypothesis: _this might be a real vendor, not a concept._ This is not yet trust — it is the suspension of the default skepticism long enough to keep reading.

### At 2 minutes — the procurement officer, continued

They have seen one piece of real technical specificity (not a vague AI claim), one clearly-reasoned strategic argument (why indigenous engineering matters now), and one honest signal of present-tense activity. They should feel ready to either self-select into a formal engagement path or leave with a specific, accurate mental model of the company — never confused about what happens next, and never pressured toward it.

### What an engineer notices first

Not the color palette. The _absence of overclaiming_. An engineer evaluating Stravex — as a potential employer, technical peer, or research contact — reads defensively: they are looking for the sentence that doesn't hold up, the AI claim with no specificity behind it, the diagram that's decoration rather than explanation. What they should notice first is that no such sentence exists to find. The second thing they notice should be that the technical diagrams look like something an engineer actually drew, not something a designer imagined an engineer might draw.

### What an investor notices first

Not the design polish. The _coherence between what's claimed and what's shown_. An investor evaluating a defence-tech company at this stage is pattern-matching against dozens of similar pitches; the failure mode they've learned to detect is vision-heavy, proof-light narrative. What should register first is that the vision statements are restrained relative to what most competitors claim, and that this restraint reads as evidence of judgment rather than lack of ambition.

---

## 3. WHAT STRAVEX IS NOT — AND WHY THE DIFFERENCE MATTERS

**Not a SaaS company.** SaaS design optimizes for a stranger's five-second attention span and a self-serve conversion funnel. Stravex has no self-serve product — every real engagement is a formal, considered relationship. A page built like a SaaS landing page (feature grids, pricing-adjacent CTAs, "Get Started" buttons) tells a procurement officer this company doesn't understand its own sales motion, before they've evaluated a single technical claim.

**Not an AI startup.** AI-startup visual language — glowing neural motifs, "powered by AI" badges, generic futurism — has become a marker of _thin_ technical substance dressed as sophistication, precisely because so many companies without real ML depth have used it to compensate. Stravex's AI work, wherever real, must be described with specificity or not described at all. The visual language must never borrow the genre's shorthand for competence, because that shorthand now reads as its opposite to anyone technical.

**Not a drone startup.** Drone-industry visual language (product-hero shots, spec-sheet bravado, consumer-adjacent excitement about flight) belongs to a category Stravex has explicitly positioned itself against — Stravex builds detect-and-intercept systems, not aircraft, and looking like a drone company undermines that positioning at the most basic visual level, independent of any copy.

**Not a defence marketing website.** Legacy defence contractor marketing (stock footage of jets, dramatic music, "protecting the nation" sentimentality) is exactly the register that reads as compensating for lack of specificity to a technically literate audience. Stravex's differentiation depends on being the company that _doesn't_ need this register — the moment the site reaches for sentiment or spectacle, it has joined the category it is trying to distinguish itself from.

**Not a corporate manufacturing company.** Industrial-manufacturing sites (heavy use of stock facility photography, generic "our process" diagrams, corporate-brochure tone) read as mature but undifferentiated — competent, forgettable, interchangeable with any B2B industrial supplier. Stravex needs a sharper, more editorial voice than this register allows; manufacturing-brochure tone would undersell the intellectual/engineering sophistication that is the actual differentiator.

**The single sentence that separates Stravex from all five:** every one of those categories reaches for _some_ form of persuasion technique appropriate to its own audience. Stravex's entire differentiation is that it reaches for none of them, in any category, ever — replacing persuasion with specificity everywhere a competitor would reach for a technique.

---

## 4. GOVERNING PRINCIPLES

Each principle states _why_ before _what_. Where a "what" already exists in `DESIGN_SYSTEM.md` or `PROJECT_RULES.md`, it is referenced rather than repeated.

### 4.1 Brand Expression

**Why:** A brand expressed loudly is a brand asking to be noticed for its branding. A brand expressed through consistency of judgment — the same restraint applied to a hundred small decisions a visitor never consciously registers — is a brand noticed for its substance instead. Stravex's brand is not a color or a wordmark; it is the cumulative effect of never once reaching for the easier, more decorated choice.

**Governing rule:** If a visual decision's primary justification is "this will make the brand feel more premium/exciting/modern," reject it. If its justification is "this is the clearest, most honest way to show this specific thing," keep it. Brand expression is a byproduct of correct decisions, never a goal pursued directly.

### 4.2 Visual Language

**Why:** A visual language that could belong to any well-funded dark-mode B2B company in 2026 is not a visual language — it's a default. Stravex's differentiation cannot rest on its color palette alone (near-black-plus-restrained-accent is currently one of the most common "serious tech" defaults, including in AI-assisted design output). It must rest on the _specific, recurring devices_ that are actually hard to copy without copying the underlying discipline: the monospace-label convention used exclusively for data and metadata; technical diagrams that function as real engineering artifacts rather than decoration; a layout rhythm that alternates deliberately rather than repeating a template section after section.

**Governing rule:** Before shipping any new page, ask whether it would still feel identifiably "Stravex" if the accent color were changed. If the answer is no, the differentiation was resting on color alone, which is not differentiation — it's coincidence.

### 4.3 Editorial Composition & Reading Rhythm

**Why:** A page that reads at one uniform density from top to bottom is mechanically consistent but not _composed_ — it has spacing rules but no rhythm. Human reading attention is not uniform; a page that respects this (quiet sections after dense ones, a single moment of emphasis rather than nine equal moments) is legible in a way that uniform density never achieves, no matter how correct its individual spacing values are.

**Governing rule:** Every page must contain at least one deliberately quiet section and at most one deliberately emphasized section. A page where every section carries equal visual weight has not been composed — it has been assembled.

### 4.4 Page Rhythm & Information Density

**Why:** Density communicates confidence in inverse proportion to its volume, for this specific audience. A page dense with unearned claims reads as insecure (trying to cover every angle because no single angle is strong enough). A page with a small number of specific, well-chosen facts reads as confident (this company knows exactly what its strongest evidence is and isn't padding around it).

**Governing rule:** For every section, ask: "if we could only keep one sentence from this section, which one, and does everything else earn its place around that sentence?" If nothing earns its place, cut it rather than keeping it for the sake of appearing thorough.

### 4.5 Layout Grammar & Grid Philosophy

**Why:** A grid is a promise of order that the audience feels even when they don't consciously see it — a procurement officer will not notice correct grid alignment, but they will feel _something is slightly off_ if it's wrong, and that feeling erodes trust exactly the way a typo in a legal document would, disproportionate to the size of the actual error.

**Governing rule:** Grid discipline is non-negotiable and never sacrificed for a "creative" layout moment. If a design idea requires breaking the grid, the idea is wrong, not the grid.

### 4.6 Whitespace Philosophy

**Why:** Whitespace on this site is not empty — it is the visual equivalent of the restraint expressed in the copy. A page with generous whitespace around a small number of precise claims performs the same argument twice: once in what it says, once in how it's laid out. Cramped whitespace around the same claims would contradict them visually even if the words stayed identical.

**Governing rule:** When in doubt between two spacing options, choose the more generous one, unless doing so pushes essential content below a reasonable fold on the primary target device for that page.

### 4.7 Typography Philosophy

**Why:** Typography is the site's primary trust-signaling instrument, because it is the thing a technical reader interacts with most and notices least consciously — inconsistent type hierarchy reads as inconsistent thinking, even to a reader who couldn't name what felt wrong.

**Governing rule:** Every headline is a statement, never a question, never an exclamation. The monospace face is reserved exclusively for labels and data — the moment it appears in a headline or body paragraph, its signal value as "this is instrumentation, not narrative" begins to erode for every future use.

### 4.8 Colour Philosophy — _including resolution of an existing contradiction_

**Why:** Color on this site must always mean something specific, because a visitor's trust in the _rest_ of the site's restraint depends on color never being used decoratively. The moment a visitor notices color being used just because it looks good, they will (correctly) start to wonder what else on the site is decorative rather than functional.

**Ruling — maturity status color:** `DESIGN_SYSTEM.md` currently maps "In Development" to the warning/amber token. This Constitution overrules that mapping. Warning colors carry an inherited connotation of risk or caution that actively contradicts the intent of an honest lifecycle-status signal — an "in development" product is not a problem, it is a normal, healthy stage, and labeling it with the same visual language as a form-validation error teaches visitors to distrust a signal that was supposed to build trust. **Going forward: maturity status must be expressed through a value/saturation progression within a single neutral-to-signal hue family (not the success/warning/error semantic triad), so lifecycle stage reads as progression, not severity.** This should be reconciled with `CONTENT_STRATEGY.md`'s maturity rubric directly, since that document may define the stages themselves even if it doesn't define their color mapping.

**Ruling — accent scarcity:** `DESIGN_SYSTEM.md` describes the gold accent as "rare" while simultaneously assigning it three systematic roles (CTAs, key highlights, navigation accents). This Constitution overrules the three-role assignment. **An accent that appears in every CTA and every nav state is a second primary color, not a rare one. Reserve the gold accent for exactly one class of use — the single visual "signature moment" per page — and use the interactive signal color for ordinary CTAs and navigation states.** Scarcity is not a stylistic nicety here; it is the entire mechanism by which the accent retains meaning.

**Governing rule going forward:** No color token may be assigned more than one semantic meaning, and no color intended to be "rare" may be assigned to a component type that appears more than once per page by default.

### 4.9 Motion & Interaction Philosophy

**Why:** Motion is the fastest way to accidentally signal "startup" even on an otherwise disciplined page, because motion conventions (bounce, spring, parallax, auto-rotating carousels) are so heavily associated with consumer software that even correct restraint everywhere else can be undone by one playful transition.

**Governing rule:** Every animation must be able to answer "what does this communicate?" in one sentence. If the honest answer is "it makes the interaction feel nice," remove it — "feeling nice" is a consumer-software goal, not an engineering-credibility goal. Animate once per page-load per element; do not replay scroll-reveal animations on re-scroll, since repeated replay reads as a glitch rather than a considered reveal. Reserve any animation duration beyond ~500ms — a genuine "signature moment," such as a diagram build sequence — for at most one instance per page.

### 4.10 Photography Direction

**Why:** A photograph that doesn't depict something real about Stravex is a lie told in a medium the audience is primed to trust more than text — a procurement officer reads copy skeptically but often reads photography as simply "what things look like," which makes a stock photo a more dangerous credibility risk than an overstated sentence.

**Governing rule:** No photograph appears on the site unless it depicts something real and specific to Stravex. The absence of a photograph is always an acceptable outcome; a stock substitute never is. When real photography exists, it should read as documentary evidence, not composed marketing imagery — if a photo looks like it was art-directed to be beautiful rather than simply true, it has drifted out of register.

### 4.11 Product Rendering Direction

**Why:** A polished product render implies a level of productization maturity that must be earned, not simulated. Rendering a concept as if it were a finished product overclaims in exactly the way this entire strategy is built to avoid — and a technical evaluator can often tell the difference between a render of something real and a speculative visualization, which makes a premature render a specific, discoverable credibility risk rather than a harmless placeholder.

**Governing rule:** Product renders are used only for products that exist in a form honest enough to render. Where no honest render exists, use the technical diagram instead — a diagram makes no claim about physical productization maturity, which is exactly why it's the safer default earlier in a product's lifecycle.

### 4.12 Technical Diagram Philosophy

**Why:** Diagrams are the single visual asset class this brand can use aggressively without risk, because a genuinely accurate technical diagram is proof, not decoration — it is the one visual format a skeptical technical reader will actually study rather than skim.

**Governing rule:** No diagram may be published without engineering review for factual accuracy, separate from design review for visual-system compliance. A beautiful diagram that misrepresents the actual system is worse than no diagram at all, because it converts the brand's strongest trust mechanism into its biggest liability the moment a technical reader spots the inaccuracy.

### 4.13 Iconography Philosophy

**Why:** Icons are the component most likely to accumulate silent inconsistency, because each individual addition feels too small to warrant scrutiny — and inconsistent stroke weights or mixed filled/outline icons are one of the fastest tells that a site was assembled rather than designed.

**Governing rule:** An icon never stands alone without a text label except for a short, named list of universally-understood exceptions (search, close, menu). No icon is decorative — every icon exists because it aids scanning, never because a section "felt like it needed one."

### 4.14 Illustration Policy

**Why:** Illustration implies a register — approachability, simplification, friendliness — that actively works against an engineering-credibility strategy. The moment the site uses illustration for anything other than a genuine technical diagram, it borrows a tone from children's editorial design or consumer onboarding flows, neither of which this brand can afford to sound like.

**Governing rule:** No illustration, ever, except technical diagrams treated as engineering artifacts under 4.12. This is not an omission to revisit later — it is a permanent, deliberate boundary.

### 4.15 Component Philosophy

**Why:** A component library is only as trustworthy as its consistency; a card that behaves differently on two different pages teaches a subconscious lesson that this site's own systems aren't fully under control, which is a strange but real thing to accidentally communicate to an audience whose core question is "can this company's systems be trusted."

**Governing rule:** One canonical version of every component per context, always. A page-specific need is a reason to extend a component's defined variants, never a reason to create a parallel one-off.

### 4.16 Accessibility Philosophy

**Why:** For this specific audience, accessibility is not a compliance checkbox — it is a trust signal in its own right. A government or institutional buyer's procurement process frequently requires accessibility compliance as a formal criterion; a site that fails here fails a literal, sometimes contractual, test of seriousness before any aesthetic judgment even applies.

**Governing rule:** Accessibility is a completion criterion on every phase of work, never a separate pass done at the end. This is already correctly implemented in the current Roadmap — the Constitution's role is to state plainly that this must never be relaxed under deadline pressure, because the moment it is treated as optional, it will be the first thing cut when time is short.

### 4.17 Performance Philosophy

**Why:** A slow site undermines "engineering excellence" claims more directly than almost any other single failure — a company claiming precision engineering whose own website stutters is making a visible, undeniable contradiction between what it says and what it demonstrably does.

**Governing rule:** Performance budgets are treated with the same rigor as accessibility — a hard ceiling, checked continuously, not audited only at the end. Any dependency whose cost threatens the budget must be justified against what it specifically enables, not assumed acceptable because it's popular or convenient.

### 4.18 Trust Building & Procurement Psychology

**Why:** Procurement audiences are trained skeptics whose professional risk is asymmetric — approving a vendor that fails costs them far more than missing a vendor that would have succeeded. Every visual and content decision on this site is implicitly being evaluated against the question "if I recommend this company and I'm wrong, how bad does that look for me," whether or not the visitor consciously frames it that way.

**Governing rule:** Every claim on the site should be able to survive the question "would this hold up if a colleague fact-checked it in front of the person who approved this vendor?" If a claim would embarrass someone for having trusted it, it does not belong on the site, regardless of how much better it would make a section read.

### 4.19 Engineering Psychology

**Why:** Engineers evaluating this site — as potential hires, technical partners, or peers — are pattern-matching against every other technical site they've read critically, and they are disproportionately alert to the exact failure mode marketing teams don't notice: confident language with no technical specificity behind it.

**Governing rule:** Anywhere the site makes a technical claim, it should be specific enough that a knowledgeable reader could imagine how they'd verify it, even if they can't actually verify it from the page alone. Vague technical confidence ("advanced AI-powered detection") is worse for this audience than an honest, narrower claim ("classification models tuned for X threat profile").

### 4.20 Storytelling

**Why:** This company's narrative is an argument (why does this problem exist, why now, why does engineering rigor matter), not a story (once upon a time, we founded a company). Narrative techniques borrowed from consumer brand storytelling — founder-journey emotional arcs, "our mission" sentimentality — undercut the intellectual register this specific audience responds to.

**Governing rule:** Every narrative section should be evaluated as an argument first: does it have a clear claim, and is that claim supported? If a section only works as an emotional appeal and falls apart when read as a logical claim, it doesn't belong on this site, however good it feels to write.

### 4.21 Navigation Philosophy

**Why:** Navigation is the site's implicit statement about its own information architecture's maturity — a confusing or overloaded navigation structure communicates organizational disorganization before a visitor reads a single word of content.

**Governing rule:** Navigation stays flat, predictable, and complete — every major content category reachable in one click, no deep nesting, no navigation items that exist for the sake of filling space. If a navigation item doesn't answer a real visitor need, remove it rather than justify it after the fact.

### 4.22 CTA Philosophy

**Why:** A generic CTA ("Learn More," "Get Started") signals that the company hasn't thought carefully about what it's actually asking the visitor to do — for an audience evaluating whether this company thinks carefully about anything, this is a disproportionately costly signal for such a small piece of copy.

**Governing rule:** Every CTA names the specific action being requested, matched to the visitor's actual readiness at that point in the page. No CTA repeats verbatim more than once per page. No page has more than one CTA competing for primary visual weight at any given scroll position.

### 4.23 Product / Technology / News / Careers / Contact Presentation Philosophy

**Why (Product):** A product's presentation must never claim more maturity than it has — the maturity-status signal (see 4.8) exists specifically because this audience will discount an entire vendor's credibility if they catch one inflated claim about one product's readiness.

**Why (Technology):** Technology pages exist to prove depth to a peer-level technical reader, not to persuade a lay reader — content here should be allowed to be genuinely difficult, because simplifying it for accessibility to a general reader would undersell it to the reader who actually matters for this page.

**Why (News):** News exists to prove the company is _active_, and its entire credibility depends on never publishing filler — a newsroom with three substantive posts is more convincing than one with fifteen padded ones, because volume without substance reads as trying too hard to look busy.

**Why (Careers):** A careers page competing for engineering talent in this category should sound like an argument about the work being genuinely hard and interesting, not like a generic "great culture" pitch — the audience being recruited is the same audience skeptical of hype everywhere else on the site, and treating them differently on this one page is inconsistent and will be noticed.

**Why (Contact):** Contact is the moment of highest-stakes trust transfer — a visitor is about to commit real information and real intent. A generic, low-friction contact form undersells the formality this audience expects; a segmented, clearly-labeled path system signals that the company has thought about who actually contacts it and why.

**Governing rule across all five:** Each content type earns its own register within the shared visual system — Technology content can be denser and more difficult than Product content; News must be sparser and more factual than Insights (if built); Careers can be marginally warmer than everything else without ever becoming casual. The shared system (grid, type, color, motion) stays constant; the _register_ of the writing and the density of the content are allowed to vary by content type, deliberately.

---

## 5. THINGS WE WILL NEVER DO

- Use a gradient for decorative purposes (the one narrow, tested exception defined in prior design work — a near-imperceptible vignette behind a hero graphic — remains the only allowable exception, and only if it demonstrably earns its place).
- Use a drop shadow to create depth. Depth comes from surface-color contrast and borders, never shadows.
- Use stock photography of any kind, for any reason, under any deadline pressure.
- Publish a technical claim that hasn't been reviewed by someone who could actually be wrong about it.
- Use an auto-rotating carousel anywhere on the site.
- Publish a product render for a product that doesn't yet exist in a form honest enough to render.
- Use illustration for anything other than a genuine technical diagram.
- Animate a layout property (`width`, `height`, `top`, `left`, `margin`, `padding`).
- Ship any page without a reduced-motion fallback.
- Use more than one color to convey the same semantic meaning, or one color to convey more than one semantic meaning.
- Write a headline as a question or an exclamation.
- Use "Get Started," "Learn More," or "Contact Us" as a CTA label.
- Compare directly and disparagingly to a named competitor.
- Publish a statistic that cannot be defended if directly questioned.

---

## 6. COMMON DESIGN TRAPS

**The "just this once" exception.** Every visual inconsistency on a mature site started as a justified one-off. The trap is believing a single exception is contained; it never is, because the next contributor will point to it as precedent. Resist every exception at the moment it's proposed, not after it's shipped.

**Mistaking activity for progress.** Adding a new animation, a new card variant, or a new color token feels like forward motion, but if it doesn't serve a principle in this document, it's motion without progress — and it makes the next inconsistency easier to justify.

**Treating restraint as a starting point to build up from.** The trap is designing a page, then "stripping it back" to match the brand. This produces a decorated page with the decoration removed — which still carries the ghost of decorated thinking (unnecessary containers, over-specified hierarchy). Restrained pages should be designed restrained from the first sketch, not decorated then edited down.

**Confusing polish with credibility.** A beautifully executed page that overclaims is still a page that overclaims — polish makes an untrue or unearned statement more persuasive, not more true. Polish should never be the goal; accuracy should be, with polish as its natural byproduct.

---

## 7. COMMON AI-GENERATED PATTERNS TO REJECT

This is a specific, named risk for a project built with heavy AI collaboration, and it deserves explicit vigilance:

- **The near-black-background-plus-single-desaturated-accent default.** This is currently one of the most common patterns AI design tools produce when asked for "premium" or "technical." It is not wrong for this brand, but it must never be the _only_ source of differentiation — see 4.2.
- **Generic glowing/particle "AI" visual motifs.** Reject unconditionally, regardless of how the request is framed.
- **Overuse of centered, symmetrical hero layouts.** Symmetry reads as template-generated; deliberate, content-justified asymmetry reads as designed.
- **Uniform card grids with identical icon-title-description structure repeated without variation.** A visual pattern repeated without any structural variation across a page is a strong tell of unreviewed AI-generated layout, even when each individual card is well-executed.
- **Headline patterns that overuse em-dashes and rhetorical parallelism** ("Not X. Just Y." structures) to manufacture a sense of confidence. Used sparingly this is a legitimate device; used as a default sentence structure across every headline on the site, it becomes a tell rather than a voice.
- **Icon-and-stat "trust bar" rows with inflated or vague numbers.** If a statistics section wouldn't exist without at least one number that's aspirational rather than actual, don't build the section.

---

## 8. SIGNS THE WEBSITE IS BECOMING TOO CORPORATE

- Language shifts from specific engineering claims to vague institutional language ("delivering excellence across the defence landscape").
- Photography (if introduced) starts to look composed and art-directed rather than documentary.
- Sections start repeating the same structure regardless of content (every section becomes headline + three-column feature grid) — corporate design flattens content variation into a single repeated template because it's easier to produce at scale.
- The tone starts sounding like it was written to satisfy an internal stakeholder rather than to inform an external technical reader.

## 9. SIGNS THE WEBSITE IS BECOMING TOO MARKETING-DRIVEN

- Superlatives creep back in ("industry-leading," "world-class," "next-generation") without a specific claim attached.
- CTAs start using urgency language or scarcity framing.
- The maturity-status system starts being described in a way that makes "in development" sound closer to "operational" than it actually is.
- A claim appears that the person writing it wouldn't want fact-checked by a specific named technical evaluator.

## 10. SIGNS THE WEBSITE IS BECOMING TOO CONSUMER-FOCUSED

- Motion starts including bounce, spring, or playful easing anywhere.
- Copy starts addressing the reader informally ("you'll love how...") rather than treating them as a professional evaluator.
- Icons start appearing filled, rounded, or illustrated rather than strict thin-line outline.
- A live chat widget, countdown timer, or "X people viewing this" social-proof device gets proposed for any page.

---

## 11. HOW TO EVALUATE EVERY NEW PAGE

Ask, in order:

1. What is the one question this page's primary visitor is actually asking, and does the page answer it before asking anything of the visitor in return?
2. Does the page contain at least one deliberately quiet section and no more than one deliberately emphasized section?
3. Would every claim on this page survive being fact-checked in front of the person who approved trusting it?
4. If every color, gradient, and decorative element were stripped out, would the page's information hierarchy still make sense from typography and spacing alone? If not, the hierarchy was resting on decoration, not structure.
5. Does this page's navigation and CTA structure route each real visitor type toward a specific, correctly-matched next action?

## 12. HOW TO EVALUATE EVERY NEW COMPONENT

Ask, in order:

1. Does an existing component already do this job in a slightly different context? If yes, extend it — don't create a parallel version.
2. Can this component's visual weight be explained by what it needs to communicate, or only by "this needs to stand out"? The latter is not a valid justification.
3. Does this component behave identically wherever it appears, or does it have silent, undocumented variants?
4. Is every piece of color, icon, or motion in this component doing semantic work, or is any of it there because the component "felt empty" without it?

## 13. HOW TO DECIDE IF A NEW PATTERN BELONGS

A new pattern belongs only if it can answer all of the following honestly:

- It solves a problem the existing system genuinely cannot solve, not one it solves slightly less conveniently.
- It has been used, or would need to be used, in more than one place — a pattern invented for a single instance is not a pattern, it's a one-off (see Section 6).
- It can be explained by a principle already in this document, or it comes with a proposed _new_ principle, argued for at the same level of rigor as Section 4, not just described as a visual choice.
- It survives being shown next to the most restrained page on the current site without looking like it belongs to a different, less disciplined project.

## 14. WHEN TO BREAK EXISTING RULES

Rules in this document may be broken only when all of the following are true:

1. Following the rule would require the site to make a claim it cannot honestly make, or to omit a claim it needs to make honestly — accuracy always outranks consistency.
2. The exception is documented here, in this Constitution, with its reasoning, before implementation — not discovered by a future reviewer after the fact.
3. The exception does not quietly become precedent for a different, less-justified case (see Section 6 — "just this once").
4. A rule may never be broken purely for visual novelty, competitive comparison ("competitor X does this"), or internal stakeholder preference. Those are not valid reasons under any circumstance.

---

## 15. RESOLVED CONTRADICTIONS AND OPEN ITEMS FOR RECONCILIATION

This Constitution has made the following rulings, which override the documents named:

1. **Maturity-status color mapping** (`DESIGN_SYSTEM.md` §Maturity Status Colours) — overruled. See 4.8. Must be reconciled against `CONTENT_STRATEGY.md`'s maturity rubric once that document is available.
2. **Gold accent's three-role assignment** (`DESIGN_SYSTEM.md` §2 Rules) — overruled. See 4.8.
3. **`next-themes` dependency** (`ARCHITECTURE.md` §9) — this Constitution finds no principled justification for a theme-switching library on a site whose Section 4.8 and prior design-system documentation both commit to dark-mode-only with no toggle planned. Remove the dependency, or make an explicit, documented decision to build a light mode — silence between two contradicting documents is not an acceptable resting state.
4. **Missing Insights build phase** (`DEVELOPMENT_ROADMAP.md`) — this Constitution does not have the authority to add engineering phases, but it notes for the record that Section 4.23's presentation principles for News assume a distinct Insights register exists elsewhere on the site; if Insights is never built, the News section's presentation philosophy should be re-evaluated to determine whether it now needs to absorb some of Insights' original technical-credibility function.

---

## 16. AUTHORITY AND AMENDMENT

This document is the highest design authority for this project. Where it conflicts with `DESIGN_SYSTEM.md`, `ARCHITECTURE.md`, `PROJECT_RULES.md`, or `DEVELOPMENT_ROADMAP.md`, this document governs, and the conflicting document should be updated to match — not the reverse. Where this document is silent, those documents govern as usual.

This document may be amended only by adding a new, explicitly reasoned principle in the same register as Section 4 — never by quietly editing an existing principle to accommodate a single implementation convenience. If a principle in this document is discovered to be wrong, the correct response is to argue for its replacement with the same rigor used to establish it here, not to route around it silently in one page and hope no one notices.

_This Constitution should be legible, and largely correct, to a designer who has never seen the current implementation and never will. If a future version of this site looks nothing like today's, but still passes every test in this document, the Constitution has done its job._
