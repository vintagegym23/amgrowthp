import React from 'react';
import { AlertTriangle, Clock, Ban, ShieldAlert, TrendingDown, BarChart2 } from 'lucide-react';

export const RealProblem: React.FC = () => {
  const problems = [
    {
      title: 'Poor Lead Quality',
      icon: AlertTriangle,
      desc: 'Too many irrelevant or low-intent enquiries wasting precious counselling team bandwidth and inflating customer acquisition cost.',
    },
    {
      title: 'Slow Follow-Up',
      icon: Clock,
      desc: 'Good enquiries disappear quickly without systematic same-day nurturing workflows, instant response SLAs, and automated cadence tracking.',
    },
    {
      title: 'Weak Counselling',
      icon: Ban,
      desc: 'Counselors struggle with tough parent questions, lack structured value frameworks, and lack objection battlecards to build conviction.',
    },
    {
      title: 'Low Parent Trust',
      icon: ShieldAlert,
      desc: "Generic, uninspiring communication doesn't address actual parent priorities, security fears, or institutional differentiation points.",
    },
    {
      title: 'Walk-In Drop-Off',
      icon: TrendingDown,
      desc: "Campus visits aren't structured into high-impact experiences that leave an unforgettable, high-converting impression on visiting families.",
    },
    {
      title: 'No Performance Visibility',
      icon: BarChart2,
      desc: 'Leadership cannot clearly see which marketing channels actually convert or where counsellors require immediate enablement.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80" data-purpose="problem-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
            THE REAL PROBLEM
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Your Admissions Funnel May Be Losing Students Before Enrolment.
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            A lead can be generated successfully and still never become an admission. The real losses happen between enquiry, follow-up, counselling, walk-ins, and final decision-making.
          </p>
        </div>

        {/* 6 Problem Leak Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 text-rose-600 flex items-center justify-center font-bold mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{prob.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
