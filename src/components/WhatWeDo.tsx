import React from 'react';
import { Layers, MessageSquare, PenTool, BarChart3, ArrowRight } from 'lucide-react';
import { ServicePillar } from '../types';

interface WhatWeDoProps {
  onSelectPillar: (pillar: ServicePillar) => void;
  onAuditClick: () => void;
}

export const servicePillarsData: ServicePillar[] = [
  {
    id: 'admissions',
    title: 'Admissions',
    tag: 'Admissions Funnel Strategy',
    color: 'text-brand-600',
    lightBg: 'bg-blue-100',
    iconBg: 'bg-blue-100 text-brand-600',
    textColor: 'text-brand-700 hover:text-brand-900',
    bulletColor: 'bg-brand-500',
    description: 'We diagnose and rebuild the complete admissions architecture from lead capture to final enrollment, eliminating leakage across every transition touchpoint.',
    deliverables: [
      'Funnel audits & leak mapping',
      'Lead qualification architecture',
      'Follow-up workflows & SLAs',
      'Walk-in processes optimization',
      'Lost-lead reactivation drives',
      'Conversion optimization tracking',
    ],
    keyOutcomes: [
      'Zero lead leakage guarantee',
      '4x faster first-response time',
      '+35% higher walk-in conversion',
      'Clear unit economics per seat',
    ],
  },
  {
    id: 'counselling',
    title: 'Counselling',
    tag: 'Counsellor Enablement & SOPs',
    color: 'text-purple-600',
    lightBg: 'bg-purple-100',
    iconBg: 'bg-purple-100 text-purple-600',
    textColor: 'text-purple-700 hover:text-purple-900',
    bulletColor: 'bg-purple-500',
    description: 'Transform counsellors from basic information-givers into high-converting educational advisors with battle-tested scripts and psychological trust frameworks.',
    deliverables: [
      'First-call frameworks & scripts',
      'Follow-up cadence templates',
      'Parent communication matrix',
      'Objection handling battlecards',
      'Counselor SOP playbooks',
      'Team enablement coaching',
    ],
    keyOutcomes: [
      'High-conviction parent conversations',
      'Overcoming fee resistance smoothly',
      'Standardized counseling quality',
      'Reduced counselor ramp-up time',
    ],
  },
  {
    id: 'brand-digital',
    title: 'Brand & Digital Growth',
    tag: 'Digital Campaigns & Positioning',
    color: 'text-rose-600',
    lightBg: 'bg-rose-100',
    iconBg: 'bg-rose-100 text-rose-600',
    textColor: 'text-rose-700 hover:text-rose-900',
    bulletColor: 'bg-rose-500',
    description: 'Establish undisputed catchment dominance through parent-aligned storytelling, ultra-targeted digital ads, and high-converting landing pages.',
    deliverables: [
      'Institutional positioning audit',
      'High-yield digital campaigns',
      'Parent-focused content strategy',
      'Local SEO catchment dominance',
      'Website conversion UX setup',
      'Reputation systems & reviews',
    ],
    keyOutcomes: [
      'High-intent parent enquiries',
      'Substantially lower lead CPA',
      'Google Maps 3-pack catchment rank',
      '5-star parent social proof',
    ],
  },
  {
    id: 'performance-expansion',
    title: 'Performance & Expansion',
    tag: 'Analytics & Campus Scalability',
    color: 'text-emerald-600',
    lightBg: 'bg-emerald-100',
    iconBg: 'bg-emerald-100 text-emerald-600',
    textColor: 'text-emerald-700 hover:text-emerald-900',
    bulletColor: 'bg-emerald-500',
    description: 'Gain unified visibility across every channel, counselor, and campus with live executive telemetry and data-backed expansion viability studies.',
    deliverables: [
      'Lead source tracking & attribution',
      'Counsellor KPIs & scorecards',
      'Source-wise conversion telemetry',
      'Executive leadership dashboards',
      'New branch expansion assessment',
      'Catchment competitor mapping',
    ],
    keyOutcomes: [
      'Source-to-seat attribution clarity',
      'Daily counselor accountability',
      'Predictable batch filling models',
      'De-risked campus expansions',
    ],
  },
];

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onSelectPillar }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'admissions':
        return <Layers className="w-6 h-6" />;
      case 'counselling':
        return <MessageSquare className="w-6 h-6" />;
      case 'brand-digital':
        return <PenTool className="w-6 h-6" />;
      case 'performance-expansion':
      default:
        return <BarChart3 className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200/80" data-purpose="services-grid" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            WHAT WE DO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            One Growth Partner. <br />
            <span className="text-brand-600">One Connected Admissions System.</span>
          </h2>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicePillarsData.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-slate-50/70 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between card-hover-effect"
            >
              <div>
                <div className={`w-11 h-11 rounded-xl ${pillar.iconBg} flex items-center justify-center font-bold mb-5`}>
                  {getIcon(pillar.id)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{pillar.title}</h3>
                <ul className="space-y-2 text-xs text-slate-600 font-medium">
                  {pillar.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${pillar.bulletColor}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <button
                  onClick={() => onSelectPillar(pillar)}
                  className={`w-full text-xs font-bold ${pillar.textColor} flex items-center justify-between transition-colors cursor-pointer text-left`}
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
