import React from 'react';
import { BookOpen, Users, CheckCircle } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const pillars = [
    {
      title: 'Education Specialist',
      icon: BookOpen,
      iconBg: 'bg-blue-100 text-brand-600',
      desc: 'Built specifically for education admissions and parent behavior dynamics, not adapted from generic SaaS or retail marketing agencies.',
    },
    {
      title: 'Strategy + Implementation',
      icon: Users,
      iconBg: 'bg-amber-100 text-amber-600',
      desc: "We don't just give slide recommendations. We work inside the trenches to implement them alongside your counsellors and marketing staff.",
    },
    {
      title: 'Measurable Performance',
      icon: CheckCircle,
      iconBg: 'bg-emerald-100 text-emerald-600',
      desc: "Get complete visibility into what's converting and where counsellors need hands-on enablement in real time.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80" data-purpose="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            WHY AM GROWTH PARTNERS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Not Just Strategy. Not Just Execution.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-10 h-10 rounded-xl ${pillar.iconBg} flex items-center justify-center font-bold mb-4`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
