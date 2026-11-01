import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What exactly does AM Growth Partners do?',
      answer:
        'We are an education-specific growth consulting and execution partner. We audit, design, and run connected admissions systems—including enquiry capture, counselling frameworks, follow-up automations, campus tour experience optimization, and leadership analytics dashboards.',
    },
    {
      question: 'Do you only generate admissions/leads?',
      answer:
        'No. Unlike standard digital marketing agencies that hand over raw leads and walk away, we focus on the entire pipeline. Generating leads is only 20% of the game; our primary impact comes from converting those leads through counsellors, prompt response protocols, campus tours, and seat closures.',
    },
    {
      question: 'Which educational institutions do you work with?',
      answer:
        'We partner with K-12 CBSE/ICSE/IB schools, private colleges and state universities, national & regional coaching institutes (IIT-JEE/NEET/Civil Services), and growing EdTech / higher education brands.',
    },
    {
      question: 'Do you train telecallers and admissions counsellors?',
      answer:
        'Yes. Counsellor enablement is central to our process. We provide first-call phone scripts, objection handling frameworks for parent hesitation, qualification benchmarks, and daily performance KPIs.',
    },
    {
      question: 'Can you help with digital marketing and websites?',
      answer:
        'Absolutely. We redesign conversion landing pages, execute local catchment search campaigns, and set up Google & Meta ads optimized strictly for qualified parents rather than cheap clicks.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Simply submit the audit request form below or call us directly. We will schedule a 45-minute discovery consultation, evaluate your current enquiry-to-admission ratio, and present a custom Diagnostic Roadmap.',
    },
  ];

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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            COMMON QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Frequently Asked Questions.
          </h2>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
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
                {/* Kept in the DOM (just hidden) so search engines can index every answer */}
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
