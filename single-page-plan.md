# Single-Page SEO Improvement Plan

**Scope:** improve the existing **single-page landing page** using the client document `AM_Growth_Partners_SEO_Service_Pages.pdf`. No new pages and no new URLs. Multi-page work is parked in [future-extension.md](future-extension.md).

**Goal:** bring the document's four service pillars, its copy, keywords and FAQs onto the landing page in a condensed, readable form, while keeping Lighthouse at 100 on all four scores.

**Status (2026-11-02):** Steps 1–7 implemented and verified. Lighthouse on the production build: 100 / 100 / 100 / 100 on desktop and mobile, with each of the four service tabs checked for accessibility.

**Open items:**
- **Google Analytics (Q4): open.** Waiting for the client's GA4 account.
- **Client photos, dashboards and examples (Q5): closed.** Current content approved as is; no changes needed.
- **Privacy Policy draft: closed.** Approved as drafted; no changes needed.
- **Hero line "Guaranteed callback within 4 business hours": closed.** Kept as is; no changes needed.

---

## 1. What the client document asks for, mapped to a single page

| Client document | Single-page equivalent |
|---|---|
| Four service pillars | New "What We Do" cards + a tabbed **Service Details** section |
| Separate service pages with their own H1 | One H2 per pillar inside the tabs (one H1 for the whole page) |
| Separate URLs | Link anchors: `#brand-strategy`, `#demand-generation`, `#admission-conversion`, `#student-retention` |
| Unique title and description per page | One combined title and description covering all four pillars |
| Per-page FAQs | One merged FAQ with filter buttons per pillar |
| `Service` schema per page | Four `Service` entries in the existing structured data |
| Internal links between pages | Links between tabs plus navbar and footer links to each pillar anchor |
| Shared CTA "Request a Growth Consultation" | New button wording site-wide (pending client confirmation) |
| Build → Grow → Scale retained | Keep the existing section; add one bridging line |

---

## 2. Proposed page order

Changes are marked **bold**. Everything else stays as it is.

1. Navbar: **Services dropdown with the four pillar anchors**
2. Hero: **new subheading (core positioning line)**
3. Admissions Journey
4. Real Problem
5. Solution
6. What We Do: **four new pillar cards**
7. **Service Details (new): four tabs, one per pillar**
8. Who We Help
9. Build → Grow → Scale: **one bridging line added**
10. Process
11. Results: **claims review (section 7)**
12. Why Us
13. Founder
14. FAQ: **merged and filterable**
15. **Shared closing CTA (new)**
16. Audit / Consultation form
17. Footer: **Services column links to the pillar anchors**

---

## 3. Section-by-section changes

### 3.1 Hero
- **Subheading** becomes the document's core positioning line: "We help educational institutions attract the right enquiries, convert more admissions, retain existing students, and build sustainable growth systems."
- The H1 stays ("More Admissions Don't Start With More Leads…").
- The quick form stays. The button wording follows decision Q1 in section 8.

### 3.2 What We Do: replace the four pillars
- Eyebrow: **WHAT WE DO**
- H2: **Four Connected Solutions. One Growth Partner.**
- Intro: "From creating a compelling institutional identity to improving admissions and retaining students, AM Growth Partners brings strategy, implementation and measurable performance together."
- The four cards, each with a short description, "Key areas" tags, and a **"Explore →"** link that opens its tab in the Service Details section:

| # | Card | Key areas |
|---|---|---|
| 01 | Positioning & Brand Strategy | Brand audits · Market research · Parent insights · Messaging strategy |
| 02 | Demand Generation | Meta Ads · Google Ads · Local SEO · Content strategy |
| 03 | Admission Conversion | Admissions audits · CRM · Counsellor training · Conversion tracking |
| 04 | Retention & Parent Experience | Parent feedback · Retention analysis · Communication · Net growth |

- **Remove** `ServiceDetailModal` and the `servicePillarsData` outcomes, including its unsupported claims: "Zero lead leakage guarantee", "4x", "+35%", "Google Maps 3-pack", "5-star parent social proof", "Substantially lower lead CPA".

### 3.3 Service Details: new tabbed section
- Four tabs: **Brand Strategy · Demand Generation · Admission Conversion · Retention**.
- All four panels are rendered in the HTML and hidden with `hidden` when inactive, so search engines index every panel (same technique as the FAQ).
- Each panel has an `id` anchor. Opening `/#admission-conversion` selects that tab and scrolls to it.
- Default tab: **Admission Conversion** (the client document's top publishing priority).
- Each panel, condensed from the PDF:
  1. **H2** with the pillar's primary keyword phrase (see section 4)
  2. Tagline and a 2–3 sentence intro
  3. "Common challenges" list (5–8 bullets from the PDF)
  4. "Our Services" as numbered **H3**s, each with a one-sentence summary (6–7 per pillar)
  5. "What Your Institution Can Expect" checklist
  6. Approach framework as a step row (e.g. Audit → Structure → Train → Track → Optimise)
  7. Pillar CTA button that scrolls to the form and tags the WhatsApp message with the pillar
  8. "Related:" link to the next pillar in the client's chain (section 3.7)

| Pillar | Anchor | H2 | Approach | CTA |
|---|---|---|---|---|
| Positioning & Brand | `#brand-strategy` | School Branding & Positioning Strategy | Discover. Differentiate. Communicate. | Request a Brand & Growth Assessment |
| Demand Generation | `#demand-generation` | School Admissions Marketing & Demand Generation | Target. Attract. Measure. Improve. | Discuss Your Admissions Marketing Strategy |
| Admission Conversion | `#admission-conversion` | School Admissions Consulting & Conversion Optimisation | Audit. Structure. Train. Track. Optimise. | Request an Admissions Conversion Assessment |
| Retention & Parent Experience | `#student-retention` | Student Retention & Parent Experience Consulting | Listen. Understand. Improve. Retain. | Discuss Your School's Retention Strategy |

- Demand Generation panel: include the document's note that advertising spend, media production and third-party software are charged separately.
- Retention panel: include the document's note that safeguarding and well-being matters stay with qualified school professionals.

### 3.4 Build → Grow → Scale
- Keep as is. Add one line under the heading: "Our four service pillars define *what* we solve. Build → Grow → Scale defines *how* we work with you over time."

### 3.5 FAQ: merge and filter
- Filter buttons: **All · General · Brand · Marketing · Admissions · Retention**.
- Keep all answers in the HTML (already the case) and add every new question to the FAQ structured data.
- Proposed list (14), from the current FAQ and the client document:

| Filter | Question | Source |
|---|---|---|
| General | What exactly does AM Growth Partners do? (update to the four pillars) | Current |
| General | Which educational institutions do you work with? | Current |
| General | How do we get started? | Current |
| Brand | Why is brand positioning important for schools? | PDF |
| Brand | How is school brand positioning different from digital marketing? | PDF |
| Marketing | Which digital marketing channels work best for school admissions? | PDF |
| Marketing | Does AM Growth Partners guarantee admissions from digital campaigns? | PDF |
| Marketing | How do you measure school marketing performance? | PDF |
| Admissions | Why do schools receive many enquiries but fewer admissions? | PDF |
| Admissions | Does AMGP help implement admissions CRM software? | PDF |
| Admissions | Can AMGP train existing admissions counsellors? (replaces the current telecaller question) | PDF |
| Admissions | Does admissions consulting require replacing our existing team? | PDF |
| Retention | Why is student retention important for school growth? | PDF |
| Retention | What are common reasons parents change schools? | PDF |

- **Remove:** "Do you only generate admissions/leads?" (its "leads are only 20% of the game" figure is unsupported) and "Can you help with digital marketing and websites?" (covered by the Marketing questions).

### 3.6 Shared closing CTA (new, above the form)
- H2: **Your Institution's Next Stage of Growth Starts With the Right Strategy.**
- Text: "Whether you're looking to strengthen your brand, generate admissions enquiries, improve conversions or retain more students, AM Growth Partners helps you identify priorities and build practical growth systems."
- Button: **Request a Growth Consultation**, scrolling to the form.

### 3.7 Navigation and internal links
- **Navbar "Services":** a small dropdown on desktop and an expandable group in the mobile menu, linking to the four pillar anchors.
- **Footer Services column:** replace "Admissions Audit", "Counselling Systems" etc. with the four pillars, each opening its tab.
- **Links between tabs** (the client's chain):
  - Demand Generation → Admission Conversion
  - Admission Conversion → Retention
  - Retention → Positioning
  - Positioning → Demand Generation
- **Footer "About Us" and "Case Studies":** re-point "About Us" to the Founder section; rename "Case Studies" to "Results".

### 3.8 Forms and WhatsApp
- Add an optional **"Service of interest"** dropdown to the full form (Brand Strategy / Demand Generation / Admission Conversion / Retention / Not sure yet), preselected when the visitor arrives from a pillar CTA.
- The WhatsApp message gains a **🧭 Service:** line (`src/lib/whatsapp.ts`).
- Add a **consent line** under both forms: "By submitting, you agree to be contacted by AM Growth Partners on WhatsApp about your enquiry. See our Privacy Policy."

---

## 4. Keyword mapping on the single page

| Primary keyword (client) | Where it appears |
|---|---|
| School admissions consulting | Page title, meta description, Admission Conversion H2 |
| School admissions marketing | Meta description, Demand Generation H2 |
| School branding strategy | Brand Strategy H2, keywords meta |
| Student retention strategies for schools | Retention H2, keywords meta |
| Education consulting services | What We Do intro, structured data |

Secondary keywords from the PDF appear naturally in the tab copy (H3 service names and the challenges lists). **No keyword stuffing**: the document explicitly warns against it.

---

## 5. SEO metadata and structured data (`index.html`)

- **Title (proposed):** School Admissions Consulting, Marketing & Retention | AM Growth Partners
- **Meta description (proposed):** AM Growth Partners helps schools, colleges and coaching institutes in India with brand positioning, admissions marketing, admission conversion and student retention. Request a growth consultation.
- **Keywords meta:** replace with the four primary keywords plus key secondaries.
- **Open Graph and Twitter** title and description: match the new title and description.
- **Structured data:**
  - Replace the old `OfferCatalog` (four old services) with four `Service` entries, each with `name`, `description`, `serviceType`, `provider` → `#organization`, `areaServed` India, and `url` → its pillar anchor.
  - Update `knowsAbout` to the four pillar topics.
  - The FAQ structured data is generated from the FAQ list automatically, so it updates with 3.5.
- **`llms.txt`:** rewrite the Services section to the four pillars with their anchors and one-line descriptions.
- **`sitemap.xml`:** unchanged (still one URL). Update `lastmod`.

---

## 6. Call-to-action wording

| Location | Current | Proposed |
|---|---|---|
| Navbar button | Get Free Audit | Get Consultation |
| Hero buttons | Request a Free Admissions Growth Audit / Request Free Audit & Callback | Request a Growth Consultation |
| Full form submit | Request a Free Admissions Growth Audit | Request a Growth Consultation |
| Mobile bar | Free Audit | Consultation |
| WhatsApp message title | New Admissions Audit Request | New Growth Consultation Request |
| Pillar tabs | — | Pillar-specific CTAs (table in 3.3) |

**Decision (Q1): new sections only.** The rows above for existing buttons stay unchanged; "Request a Growth Consultation" and the pillar CTAs are used only in the new Service Details tabs and the shared closing CTA.

---

## 7. Claims review (client decision needed)

| Where | Current text | Proposed action |
|---|---|---|
| Results section | +45% walk-ins (K-12 International School), growth in enrolments (Engineering College), 80% faster follow-up (Premium Coaching Institute), "measurable, verifiable improvements" | **Confirmed real by the client (Q2). Keep.** |
| Results button | View All Case Studies & Schedule a Review | "Schedule a Review" (no case studies exist) |
| Hero badge | "Zero obligation report" | Fine; keep |
| Services modal | Guarantee and percentage claims | Removed with the modal (3.2) |
| FAQ | "Leads are only 20% of the game" | Removed (3.5) |

---

## 8. Client decisions (confirmed 2026-11-02)

| # | Question | Decision |
|---|---|---|
| Q1 | "Request a Growth Consultation" everywhere? | **New sections only.** Existing buttons keep "Free Audit" wording. |
| Q2 | Are the Results numbers real? | **Yes, real and approved.** Keep the Results section; only fix the "View All Case Studies" button wording. |
| Q3 | Privacy Policy text | **Draft a new one** (pop-up, single page). Draft approved as is: **closed**. |
| Q4 | Google Analytics 4 | **On hold.** Client will provide the account later. |
| Q5 | Photos, dashboards, client examples | **Closed.** Current content approved; nothing to add. |

---

## 9. Implementation order

1. **Services overhaul:** new What We Do cards, Service Details tabs, remove the old modal and data.
2. **Hero subheading, Build → Grow → Scale line, shared closing CTA.**
3. **FAQ merge and filters.**
4. **Navigation:** navbar Services dropdown, footer Services column, About/Results links.
5. **Forms:** "Service of interest" field, WhatsApp service line, consent line.
6. **SEO:** title, meta, Open Graph, structured data, `llms.txt`, `sitemap.xml` `lastmod`.
7. **Privacy Policy pop-up** (Q3, drafted for client review). Analytics (Q4) and evidence (Q5) on hold.
8. **Verification** (section 10).

---

## 10. Definition of done

- [ ] `npm run lint` and `npm run build` pass; `dist/index.html` contains all four tab panels and all FAQ answers.
- [ ] Exactly one H1; pillar H2s and service H3s in order with no skipped levels.
- [ ] Every pillar anchor (`/#brand-strategy` etc.) opens the right tab when loaded directly.
- [ ] Structured data parses as valid JSON; Google Rich Results Test shows Organization and FAQ with no errors.
- [ ] No unsupported claims remain (section 7 resolved).
- [ ] Lighthouse on `npm run preview` (port 4173, Incognito): 100 / 100 / 100 / 100, desktop and mobile.
- [ ] Mobile check: tabs scroll horizontally or stack, CTAs visible, forms simple.
- [ ] WhatsApp message from each form and pillar CTA shows the correct service line.
