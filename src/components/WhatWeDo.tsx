import React from 'react';
import { ArrowRight } from 'lucide-react';
import { services, ServiceId } from '../data/services';
import { ServiceIcon } from './ServiceIcon';

interface WhatWeDoProps {
  onExploreService: (id: ServiceId) => void;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onExploreService }) => {
  return (
    <section className="py-20 bg-white" data-purpose="services-grid" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            WHAT WE DO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Four Connected Solutions. <br />
            <span className="text-brand-600">One Growth Partner.</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
            From creating a compelling institutional identity to improving admissions and retaining students, AM Growth
            Partners brings strategy, implementation and measurable performance together.
          </p>
        </div>

        {/* 4 Service Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50/70 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between card-hover-effect"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl ${service.theme.iconBg} flex items-center justify-center`}>
                    <ServiceIcon id={service.id} className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-slate-500">{service.number}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{service.cardSummary}</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">Key areas</p>
                <ul className="flex flex-wrap gap-1.5">
                  {service.keyAreas.map((area) => (
                    <li key={area} className={`px-2 py-1 text-[11px] font-semibold rounded-md border ${service.theme.chip}`}>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <a
                  href={`#${service.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onExploreService(service.id);
                  }}
                  className={`w-full text-xs font-bold ${service.theme.accent} flex items-center justify-between hover:underline`}
                >
                  <span>Explore {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
