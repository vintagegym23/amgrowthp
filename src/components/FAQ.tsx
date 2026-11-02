import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FaqCategory = 'General' | 'Brand' | 'Marketing' | 'Admissions' | 'Retention';

const categories: ('All' | FaqCategory)[] = ['All', 'General', 'Brand', 'Marketing', 'Admissions', 'Retention'];

// General questions are AMGP's own; the rest come from the client SEO pack's per-service FAQs.
const faqs: { category: FaqCategory; question: string; answer: string }[] = [
  {
    category: 'General',
    question: 'What exactly does AM Growth Partners do?',
    answer:
      'We are an education-specific growth consulting and execution partner working across four connected areas: positioning and brand strategy, demand generation, admission conversion, and student retention and parent experience. We help institutions attract the right enquiries, convert more admissions, retain existing students and build sustainable growth systems.',
  },
  {
    category: 'General',
    question: 'Which educational institutions do you work with?',
    answer:
      'We partner with K-12 CBSE/ICSE/IB schools, private colleges and state universities, national & regional coaching institutes (IIT-JEE/NEET/Civil Services), and growing EdTech / higher education brands.',
  },
  {
    category: 'General',
    question: 'How do we get started?',
    answer:
      'Submit the audit request form below or message us on WhatsApp. We will schedule a 45-minute discovery consultation, evaluate your current enquiry-to-admission ratio, and present a custom Diagnostic Roadmap.',
  },
  {
    category: 'Brand',
    question: 'Why is brand positioning important for schools?',
    answer:
      "Clear positioning helps parents understand an institution's educational approach, distinctive strengths and suitability for their child. It also gives the school's marketing and admissions teams a consistent foundation for communication.",
  },
  {
    category: 'Brand',
    question: 'How is school brand positioning different from digital marketing?',
    answer:
      'Brand positioning establishes what your institution stands for and why families should choose it. Digital marketing helps communicate that message to relevant audiences.',
  },
  {
    category: 'Marketing',
    question: 'Which digital marketing channels work best for school admissions?',
    answer:
      "The appropriate channel depends on the school's location, target parent segments, positioning, competition and admission objectives. Meta Ads, Google Search, local SEO and strong parent-focused content can each play different roles.",
  },
  {
    category: 'Marketing',
    question: 'Does AM Growth Partners guarantee admissions from digital campaigns?',
    answer:
      'Admissions depend on factors beyond advertising, including school suitability, fees, parent expectations, admissions response quality and available capacity. We focus on measurable improvements and transparent reporting rather than unsupported guarantees.',
  },
  {
    category: 'Marketing',
    question: 'How do you measure school marketing performance?',
    answer:
      'We assess indicators such as cost per qualified enquiry, lead quality, contact rates, campus visits, enrolment conversion and cost per admission wherever reliable tracking data is available.',
  },
  {
    category: 'Admissions',
    question: 'Why do schools receive many enquiries but fewer admissions?',
    answer:
      'Potential causes include unsuitable enquiries, slow responses, inconsistent counselling, fees, location preferences, competition, poor visit attendance and weak follow-up. A funnel audit helps identify which factors are most relevant.',
  },
  {
    category: 'Admissions',
    question: 'Does AMGP help implement admissions CRM software?',
    answer:
      "Yes. CRM process design, configuration support, workflow setup and team enablement can be included in an agreed consulting engagement. The appropriate platform depends on the institution's needs.",
  },
  {
    category: 'Admissions',
    question: 'Can AMGP train existing admissions counsellors and telecallers?',
    answer:
      'Yes. Training can focus on professional communication, parent needs assessment, enquiry management, visit coordination, objection handling and CRM discipline.',
  },
  {
    category: 'Admissions',
    question: 'Does admissions consulting require replacing our existing team?',
    answer:
      "Not necessarily. Our approach focuses on improving systems, clarity, accountability and staff capabilities using the institution's existing team wherever practical.",
  },
  {
    category: 'Retention',
    question: 'Why is student retention important for school growth?',
    answer:
      'A school can gain many new admissions while experiencing limited net growth if large numbers of existing students leave. Understanding both admissions and withdrawals provides a more complete view of institutional performance.',
  },
  {
    category: 'Retention',
    question: 'What are common reasons parents change schools?',
    answer:
      'Reasons can include academic expectations, fees, relocation, transport, communication, student well-being, school environment and family circumstances. Institutions should examine their own data rather than assume one explanation applies to every withdrawal.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<'All' | FaqCategory>('All');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80" data-purpose="faq-accordion" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {'@type': 'Answer', text: faq.answer},
            })),
          }),
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            COMMON QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Frequently Asked Questions.
          </h2>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8" role="group" aria-label="Filter questions by topic">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(null);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-brand-600 text-white border-brand-600'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordions: filtered-out items stay in the DOM (hidden) so every answer is indexable */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const isVisible = activeCategory === 'All' || faq.category === activeCategory;
            return (
              <div
                key={faq.question}
                hidden={!isVisible}
                className="bg-white border border-slate-200 rounded-xl transition-all duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center p-5 cursor-pointer font-bold text-sm sm:text-base text-slate-900 text-left select-none hover:text-brand-600 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-brand-600' : ''
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  hidden={!isOpen}
                  className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100"
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
