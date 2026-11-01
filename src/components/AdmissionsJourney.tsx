import React from 'react';
import { MousePointer, PhoneCall, MessageSquareText, School, CheckCheck, ArrowRight } from 'lucide-react';

interface AdmissionsJourneyProps {
  onAuditClick: () => void;
}

export const AdmissionsJourney: React.FC<AdmissionsJourneyProps> = ({ onAuditClick }) => {
  const stages = [
    {
      num: 'STAGE 01',
      title: 'ENQUIRY',
      icon: MousePointer,
      iconBg: 'bg-blue-100 text-brand-600',
      numColor: 'text-brand-600',
      desc: 'Capture interest from the right target student & parent audience with clear intent qualification.',
      footer: 'High intent sourcing →',
      footerColor: 'text-brand-700',
    },
    {
      num: 'STAGE 02',
      title: 'FOLLOW-UP',
      icon: PhoneCall,
      iconBg: 'bg-purple-100 text-purple-600',
      numColor: 'text-purple-700',
      desc: 'Respond quickly, eliminate turnaround lag, and rigorously qualify parental expectations without drop-offs.',
      footer: 'Instant SLA Cadence →',
      footerColor: 'text-purple-700',
    },
    {
      num: 'STAGE 03',
      title: 'COUNSELLING',
      icon: MessageSquareText,
      iconBg: 'bg-rose-100 text-rose-600',
      numColor: 'text-rose-700',
      desc: 'Guide parents with authentic value proposition, systematic trust-building, and proactive objection handling.',
      footer: 'Value frameworks →',
      footerColor: 'text-rose-700',
    },
    {
      num: 'STAGE 04',
      title: 'WALK-IN',
      icon: School,
      iconBg: 'bg-amber-100 text-amber-600',
      numColor: 'text-amber-700',
      desc: 'Convert campus visits into memorable enrolment opportunities through guided campus experience protocols.',
      footer: 'Campus conversion tours →',
      footerColor: 'text-amber-700',
    },
    {
      num: 'STAGE 05',
      title: 'ENROLMENT',
      icon: CheckCheck,
      iconBg: 'bg-emerald-100 text-emerald-600',
      numColor: 'text-emerald-700',
      desc: 'Turn interested parents into enrolled, committed students with streamlined documentation and on-boarding.',
      footer: 'Final seat closure →',
      footerColor: 'text-emerald-700',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/70" data-purpose="admissions-journey" id="journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            THE ADMISSIONS JOURNEY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            From Enquiry to Enrolment. <br className="hidden sm:inline" />
            <span className="text-brand-600">A connected system for higher conversions.</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Every stage in the admissions journey matters. We help you connect marketing, follow-up, counselling, walk-ins, and performance tracking into one structured system.
          </p>
        </div>

        {/* 5-Stage Step Flow Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 card-hover-effect relative flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl ${stage.iconBg} flex items-center justify-center font-bold mb-4`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-extrabold uppercase tracking-widest ${stage.numColor}`}>
                    {stage.num}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">{stage.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{stage.desc}</p>
                </div>
                <div className={`mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-semibold ${stage.footerColor}`}>
                  {stage.footer}
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Highlight Strip */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 via-slate-50 to-indigo-50 border border-blue-200/70 rounded-2xl p-6 text-center max-w-4xl mx-auto shadow-sm">
          <p className="text-slate-800 text-sm sm:text-base font-medium">
            You don't need to blindly chase more leads. <br className="hidden sm:inline" />
            <strong className="text-slate-950 font-bold">You need to improve what happens between enquiry and enrolment.</strong>
          </p>
          <div className="mt-3">
            <button
              onClick={onAuditClick}
              className="inline-flex items-center text-xs font-bold text-brand-600 hover:text-brand-800 transition-colors cursor-pointer"
            >
              <span>Audit Your Funnel Bottlenecks Now</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
