# Future Extension: Multi-Page Service Pages

**Status:** Planned, not started. The site currently ships as a **single-page landing page**.
**Source:** Client document `AM_Growth_Partners_SEO_Service_Pages.pdf` (in the project root). All page copy, FAQs and SEO metadata come from that document.

This file describes how to grow the landing page into a multi-page site with one dedicated page per service, so that each service can rank for its own search keyword.

---

## 1. Why multi-page

On the single page, all four services share one `<title>`, one meta description and one URL. Search engines rank **pages**, so one page can't strongly target "school branding strategy", "school admissions marketing", "school admissions consulting" and "student retention strategies" at once. Dedicated pages give each service:

- its own title, meta description, H1 and canonical URL
- a focused primary keyword plus secondary keywords
- its own FAQ structured data, which is eligible for FAQ rich results per page
- internal links between related services, which builds topical authority

---

## 2. Site architecture

| Page | URL | Primary keyword | Publish priority |
|---|---|---|---|
| Home (existing landing page) | `/` | Education admissions consulting | — |
| Services overview | `/services` | Education consulting services | 5 |
| Positioning & Brand Strategy | `/services/school-brand-strategy` | School branding strategy | 3 |
| Demand Generation | `/services/education-lead-generation` | School admissions marketing | 2 |
| Admission Conversion | `/services/admission-conversion-consulting` | School admissions consulting | 1 |
| Retention & Parent Experience | `/services/student-retention-consulting` | Student retention strategies for schools | 4 |

Publishing priority comes from the client document (page 18). The client document has **no copy for `/services`**: build it from the homepage services section (four cards, each linking to its page) plus the shared closing call to action.

---

## 3. SEO metadata per page (from the client document)

### Positioning & Brand Strategy: `/services/school-brand-strategy`
- **Title:** School Branding & Positioning Strategy | AM Growth Partners
- **Meta description:** Help your school stand out with strategic branding, parent insights, competitor analysis and clear positioning. Explore AM Growth Partners' approach.
- **H1:** Positioning & Brand Strategy for Educational Institutions
- **Primary keyword:** School branding strategy
- **Secondary keywords:** school brand positioning; education branding agency; school marketing strategy; school competitor analysis; educational institution branding
- **Page CTA:** Request a Brand & Growth Assessment

### Demand Generation: `/services/education-lead-generation`
- **Title:** School Admissions Marketing & Lead Generation | AMGP
- **Meta description:** Build stronger school admissions marketing with Meta Ads, Google Ads, local SEO, parent-focused content and measurable lead generation campaigns.
- **H1:** School Admissions Marketing & Demand Generation
- **Primary keyword:** School admissions marketing
- **Secondary keywords:** school lead generation; school digital marketing services; education marketing agency; Meta Ads for schools; Google Ads for school admissions; education marketing consultant
- **Page CTA:** Discuss Your Admissions Marketing Strategy

### Admission Conversion: `/services/admission-conversion-consulting`
- **Title:** School Admissions Consulting & Conversion | AM Growth Partners
- **Meta description:** Improve school admissions through CRM implementation, counsellor training, enquiry follow-ups, campus visit processes and admission conversion tracking.
- **H1:** School Admissions Consulting & Conversion Optimisation
- **Primary keyword:** School admissions consulting
- **Secondary keywords:** school admission conversion; admissions CRM for schools; admission counsellor training; school admission management; enquiry conversion; school admissions process improvement
- **Page CTA:** Request an Admissions Conversion Assessment

### Retention & Parent Experience: `/services/student-retention-consulting`
- **Title:** Student Retention & Parent Experience Consulting | AMGP
- **Meta description:** Strengthen student retention, parent satisfaction and school growth through feedback systems, withdrawal analysis, parent communication and retention tracking.
- **H1:** Student Retention & Parent Experience Consulting
- **Primary keyword:** Student retention strategies for schools
- **Secondary keywords:** school student retention; parent satisfaction survey; school withdrawal analysis; parent engagement strategies; student retention consulting; school net enrolment growth
- **Page CTA:** Discuss Your School's Retention Strategy

### Services overview: `/services`
- **Title (proposed):** Education Consulting Services for Schools & Colleges | AM Growth Partners
- **Meta description (proposed):** Brand positioning, admissions marketing, admission conversion and student retention consulting for schools, colleges and coaching institutes in India.
- **H1 (proposed):** Four Connected Solutions. One Growth Partner.

---

## 4. Service page template

Every service page uses the same structure. Build it once as a shared component, `ServicePage`, that takes a data object, and keep each page's copy in a data file such as `src/data/services/admission-conversion.ts`.

1. **Breadcrumb:** Home › Services › {Service}
2. **Hero:** H1, tagline (e.g. "Every Enquiry Is an Opportunity…"), intro paragraphs, CTA button
3. **Problem section (H2):** e.g. "Where Are You Losing Potential Admissions?", with the challenges bullet list
4. **Services (H2):** the numbered services, each an **H3** with its paragraph (6–7 per page)
5. **What Your Institution Can Expect (H2):** deliverables checklist
6. **Our Approach (H2):** the framework steps (e.g. Audit → Structure → Train → Track → Optimise)
7. **Closing statement (H2):** e.g. "Build an Admissions Team That Operates With Clarity and Accountability."
8. **Page CTA block:** CTA heading, sentence and button, opening the enquiry form with this service preselected
9. **FAQ (H2):** 4–5 questions in an accordion, with answers kept in the HTML for indexing
10. **Related service link:** see the internal linking chain in section 6
11. **Shared closing CTA:** "Your Institution's Next Stage of Growth Starts With the Right Strategy." with the button **Request a Growth Consultation**

Exact copy for steps 2–9 is in the client PDF: Positioning (pp. 5–7), Demand Generation (pp. 8–10), Admission Conversion (pp. 11–13), Retention (pp. 14–16).

---

## 5. Technical implementation

The current build pre-renders a single `index.html` (`scripts/prerender.js` + `src/entry-server.tsx`). To extend it:

1. **Routing:** add client-side routing (`react-router` v7 in library mode, or a small hand-rolled router since there are only six routes). The landing page becomes the `/` route.
2. **Pre-render every route:** change `entry-server.tsx` so `render(url)` renders the matching route, and loop over the route list in `prerender.js`, writing `dist/index.html`, `dist/services/index.html`, `dist/services/<slug>/index.html`. This works on any static host with no rewrite rules.
3. **Per-page `<head>`:** title, meta description, canonical, Open Graph and Twitter tags, injected per route at pre-render time. React 19 hoists `<title>`/`<meta>`/`<link>` rendered inside components into `<head>`, or a placeholder can be substituted in `prerender.js`.
4. **Per-page structured data:**
   - `Service` (name, description, provider → `#organization`, areaServed India, URL)
   - `FAQPage` from the page's FAQ data (same pattern as `src/components/FAQ.tsx`)
   - `BreadcrumbList`
   - Keep the site-wide `Organization`/`WebSite` graph in `index.html`.
5. **Shared layout:** Navbar, Footer, MobileBottomBar and SuccessModal wrap every route.
6. **Hash links from inner pages:** navbar items like `#faq` must become `/#faq` on inner pages, with scroll-after-navigate handling.
7. **Scroll restoration:** scroll to top on route change.
8. **404 page:** pre-render `dist/404.html`.
9. **Sitemap and llms.txt:** add all six URLs to `public/sitemap.xml`, and list the service pages in `public/llms.txt`.
10. **Forms and WhatsApp:** the shared lead form sets `formSource` to the page (e.g. "Service page: Admission Conversion") so enquiries in WhatsApp show where they came from (`src/lib/whatsapp.ts`).

---

## 6. Navigation and internal linking

- **Navbar:** "Services" becomes a dropdown (desktop) and an expandable group (mobile) linking `/services` and the four pages.
- **Footer Services column:** link the four service pages.
- **Homepage services cards:** "Learn more" links to the corresponding page.
- **Contextual links between services,** with descriptive anchor text, following the chain from the client document (page 17):
  - Demand Generation → Admission Conversion: "improve your school's enquiry-to-admission conversion"
  - Admission Conversion → Retention: sustainable growth also depends on student continuation and parent experience
  - Retention → Positioning: genuine parent experience and strengths inform credible positioning
  - Positioning → Demand Generation: clear differentiation enables consistent marketing communication
- **Build → Grow → Scale:** keep it as the engagement philosophy. The four pillars describe *what* AMGP solves; Build → Grow → Scale describes *how* an engagement progresses.

---

## 7. Client document checklist (must hold for every page)

- [ ] Unique title, meta description and canonical URL per page
- [ ] One H1 per page; H2 sections; H3 per individual service
- [ ] Accurate `Organization` and `Service` schema; **no fabricated reviews, ratings or results**
- [ ] Hyderabad info only where accurate; **no artificial city pages**
- [ ] All four services linked from navigation, homepage and related pages
- [ ] Original photos, approved client examples, real dashboards (client to supply)
- [ ] Conversion tracking: service-page visits, consultation requests, form submissions (GA4 events)
- [ ] Mobile: readable copy, visible CTAs, simple forms
- [ ] Every claim, credential, client reference and deliverable confirmed by the client
- [ ] Consent and privacy notice on enquiry forms; real Privacy Policy page

---

## 8. Before starting, confirm with the client

1. Final hosting provider (for clean URLs, headers and redirects).
2. Copy for the `/services` overview page, or approval to use the proposed version above.
3. Approved client examples, photos and metrics for the "Evidence" checklist item.
4. Google Analytics 4 property for conversion tracking.
5. Privacy Policy text.

---

## 9. Reusing single-page work

The single-page version already condenses the same document into four service tabs on the homepage. When migrating:

- Move each tab's data into the per-service data files (section 4) and expand it back to the full copy from the PDF.
- Keep the homepage tabs as short summaries that link to the full pages, or replace them with the four cards.
- Point the homepage tab anchors (`#admission-conversion` etc.) to the new URLs, so old shared links still land on the right service.
