import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { services, serviceById, Service, ServiceId } from '../data/services';
import { ServiceIcon } from './ServiceIcon';

interface ServiceDetailsProps {
  activeId: ServiceId;
  onSelect: (id: ServiceId) => void;
  onRequest: (service: Service) => void;
}

export const ServiceDetails: React.FC<ServiceDetailsProps> = ({ activeId, onSelect, onRequest }) => {
  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = services[(index + (e.key === 'ArrowRight' ? 1 : services.length - 1)) % services.length];
    onSelect(next.id);
    document.getElementById(`tab-${next.id}`)?.focus();
  };

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/80" data-purpose="service-details" id="service-details">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-extrabold uppercase tracking-widest text-brand-600 mb-6">
          Explore Our Services in Detail
        </p>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="AM Growth Partners services"
          className="flex gap-2 overflow-x-auto pb-2 mb-10 sm:justify-center [scrollbar-width:none]"
        >
          {services.map((service, index) => {
            const isActive = service.id === activeId;
            return (
              <button
                key={service.id}
                id={`tab-${service.id}`}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={service.id}
                tabIndex={isActive ? 0 : -1}
                onClick={() => onSelect(service.id)}
                onKeyDown={(e) => handleTabKeyDown(e, index)}
                className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-bold transition-colors cursor-pointer ${
                  isActive ? service.theme.tabActive : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                <ServiceIcon id={service.id} className="w-4 h-4" />
                {service.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Panels: all rendered so search engines index every service; inactive ones are hidden */}
        {services.map((service) => {
          const related = serviceById(service.related.id);
          return (
            <div
              key={service.id}
              id={service.id}
              role="tabpanel"
              aria-labelledby={`tab-${service.id}`}
              hidden={service.id !== activeId}
              className="scroll-mt-24"
            >
              {/* Intro */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-xl ${service.theme.iconBg} flex items-center justify-center`}>
                    <ServiceIcon id={service.id} className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-extrabold uppercase tracking-widest ${service.theme.accent}`}>
                    {service.number} · {service.title}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight mb-3">
                  {service.heading}
                </h2>
                <p className={`text-base sm:text-lg font-bold ${service.theme.accent} mb-5`}>{service.tagline}</p>
                <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                  {service.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
                {/* Challenges */}
                <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-4">{service.challengesTitle}</h3>
                  <ul className="space-y-2.5">
                    {service.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" aria-hidden="true" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expectations */}
                <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-4">What Your Institution Can Expect</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {service.expectations.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${service.theme.accent}`} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Offerings */}
              <div className="mt-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8">
                <h3 className="text-lg font-extrabold text-slate-900 mb-6">Our {service.title} Services</h3>
                <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {service.offerings.map((offering, index) => (
                    <li key={offering.title} className="flex gap-4">
                      <span className={`text-sm font-black ${service.theme.accent} w-6 shrink-0`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1">{offering.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{offering.summary}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                {service.note && (
                  <p className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 leading-relaxed">{service.note}</p>
                )}
              </div>

              {/* Approach */}
              <div className="mt-6 bg-darknavy rounded-3xl p-6 sm:p-8 text-white">
                <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-1">Our Approach</p>
                <h3 className="text-xl sm:text-2xl font-extrabold mb-6">{service.approachTitle}</h3>
                <ol
                  className={`grid grid-cols-1 sm:grid-cols-2 ${
                    service.approach.length === 5 ? 'lg:grid-cols-5' : service.approach.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
                  } gap-4`}
                >
                  {service.approach.map((step, index) => (
                    <li key={step.name} className="bg-carddark border border-slate-800 rounded-2xl p-4">
                      <span className={`inline-flex w-7 h-7 rounded-full ${service.theme.step} text-white text-xs font-black items-center justify-center mb-3`}>
                        {index + 1}
                      </span>
                      <h4 className="text-sm font-bold text-white mb-1">{step.name}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* CTA + related service */}
              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => onRequest(service)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-md shadow-brand-600/25 transition-colors cursor-pointer"
                >
                  {service.ctaLabel}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <a
                  href={`#${related.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelect(related.id);
                  }}
                  className="text-sm font-semibold text-slate-700 hover:text-brand-700 inline-flex items-center gap-1.5"
                >
                  <span>
                    Related: {service.related.text} <span className={`font-bold ${related.theme.accent}`}>({related.title})</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
