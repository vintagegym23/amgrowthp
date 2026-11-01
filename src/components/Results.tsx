import React from 'react';

interface ResultsProps {
  onAuditClick: () => void;
}

export const Results: React.FC<ResultsProps> = ({ onAuditClick }) => {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80" data-purpose="social-proof-results" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            REAL RESULTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            What Changes When the System Works.
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Institutions we work with have seen measurable, verifiable improvements in their admissions performance.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-b from-blue-50/50 to-white border border-blue-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="text-5xl font-black text-brand-600 tracking-tight mb-2">+45%</div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Increase in Walk-ins</h3>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">K-12 INTERNATIONAL SCHOOL</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Structured follow-up + counsellor objection training script overhaul yielded immediate campus visit growth.
            </p>
          </div>

          <div className="bg-gradient-to-b from-blue-50/50 to-white border border-blue-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="text-5xl font-black text-brand-600 tracking-tight mb-2">2.5×</div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Growth in Enrolments</h3>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">ENGINEERING COLLEGE</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              High-intent candidate sourcing + rapid response CRM automation setup converted inquiries into committed seats.
            </p>
          </div>

          <div className="bg-gradient-to-b from-blue-50/50 to-white border border-blue-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="text-5xl font-black text-amber-500 tracking-tight mb-2">80%</div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Faster Follow-Up</h3>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">PREMIUM COACHING INSTITUTE</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              CRM workflows + automated enquiry allocation logic to admissions desk eliminated lead drop-off completely.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onAuditClick}
            className="inline-flex items-center px-6 py-3.5 text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
          >
            View All Case Studies &amp; Schedule a Review
          </button>
        </div>
      </div>
    </section>
  );
};
