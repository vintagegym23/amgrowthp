import React from 'react';
import { Puzzle, TrendingUp, RefreshCw } from 'lucide-react';

export const BuildGrowScale: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80" data-purpose="maturity-stages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            BUILD • GROW • SCALE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Wherever You Are, We Build From There.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar: Build */}
          <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 relative">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-brand-600 flex items-center justify-center font-bold mb-4">
              <Puzzle className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-600">PHASE 1</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-1">Build</h3>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">FIND WHAT'S BROKEN</p>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                Admissions audit &amp; mystery shopping
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                Funnel leakage data analysis
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                Parent journey emotional mapping
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                30-day quick improvement roadmap
              </li>
            </ul>
          </div>

          {/* Pillar: Grow */}
          <div className="border-2 border-brand-500 bg-brand-50/20 rounded-2xl p-6 relative shadow-md">
            <div className="absolute -top-3 right-6 bg-brand-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm">
              Core Engine
            </div>
            <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold mb-4 shadow-sm">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-700">PHASE 2</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-1">Grow</h3>
            <p className="text-xs font-semibold text-brand-700 uppercase tracking-wide mb-4">BUILD THE OPERATING SYSTEM</p>
            <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                High-converting admissions funnel design
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                Structured follow-up cadences &amp; CRM flows
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                Counsellor pitch &amp; objection playbooks
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                Executive live performance dashboards
              </li>
            </ul>
          </div>

          {/* Pillar: Scale */}
          <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 relative">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-4">
              <RefreshCw className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-700">PHASE 3</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-1">Scale</h3>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">OPTIMISE AND EXPAND</p>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Continuous performance reviews &amp; audits
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                End-to-end conversion optimization (CRO)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                New branch planning &amp; multi-campus models
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Predictable growth governance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
