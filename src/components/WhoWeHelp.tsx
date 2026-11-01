import React from 'react';
import { School, GraduationCap, Zap, Globe2 } from 'lucide-react';

export const WhoWeHelp: React.FC = () => {
  const archetypes = [
    {
      title: 'Schools (K-12)',
      icon: School,
      iconBg: 'bg-blue-100 text-brand-600',
      desc: 'Improve brand visibility, structured parent communications, campus tour follow-ups, and student retention.',
    },
    {
      title: 'Colleges & Universities',
      icon: GraduationCap,
      iconBg: 'bg-purple-100 text-purple-600',
      desc: 'Build structured multi-channel admission funnels and improve enrolment tracking across diverse academic departments.',
    },
    {
      title: 'Coaching Institutes',
      icon: Zap,
      iconBg: 'bg-amber-100 text-amber-600',
      desc: 'Increase qualified test-prep enquiries, optimize fee counselling conversations, and scale batches predictably year-round.',
    },
    {
      title: 'Education Brands',
      icon: Globe2,
      iconBg: 'bg-emerald-100 text-emerald-600',
      desc: 'Strengthen market positioning, digital marketing growth, and multi-branch enrolment predictability.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80" data-purpose="who-we-help">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            WHO WE HELP
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Built for Education Leaders
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Custom tailored operating systems engineered for the specific nuances of your academic institution.
          </p>
        </div>

        {/* 4 Target Archetypes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {archetypes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center font-bold mb-4`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
