import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Diagnose',
      desc: 'Understand your current admissions funnel & leakages in granular detail with empirical audits.',
    },
    {
      num: '02',
      title: 'Design',
      desc: 'Create customized strategies, parent scripts, qualification criteria, and automated workflows.',
    },
    {
      num: '03',
      title: 'Implement',
      desc: 'Put the operating system directly in the hands of your teams with practical rollouts.',
    },
    {
      num: '04',
      title: 'Measure',
      desc: 'Track clear conversion performance across every touchpoint daily with transparent dashboards.',
    },
    {
      num: '05',
      title: 'Optimise',
      desc: 'Continuously improve yield based on real admissions data, parent feedback, and counselor metrics.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80" data-purpose="process-steps" id="framework">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            HOW WE WORK
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            From Diagnosis to Growth.
          </h2>
        </div>

        {/* 5 Numerical Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-extrabold text-brand-600 mb-2">{step.num}</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
