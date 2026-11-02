import React from 'react';
import { ArrowRight } from 'lucide-react';

interface GrowthCtaProps {
  onRequest: () => void;
}

export const GrowthCta: React.FC<GrowthCtaProps> = ({ onRequest }) => {
  return (
    <section className="py-16 bg-white" data-purpose="growth-cta">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-blue-500 px-6 py-12 sm:px-12 text-center text-white shadow-xl shadow-brand-900/15">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto">
            Your Institution's Next Stage of Growth Starts With the Right Strategy.
          </h2>
          <p className="mt-5 text-sm sm:text-base text-blue-50 leading-relaxed max-w-2xl mx-auto">
            Whether you're looking to strengthen your brand, generate admissions enquiries, improve conversions or retain
            more students, AM Growth Partners helps you identify priorities and build practical growth systems.
          </p>
          <button
            type="button"
            onClick={onRequest}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-brand-700 bg-white hover:bg-blue-50 rounded-xl shadow-md transition-colors cursor-pointer"
          >
            Request a Growth Consultation
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};
