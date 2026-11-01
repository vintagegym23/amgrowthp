import React, { useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { LeadFormData } from '../types';

interface FinalConversionProps {
  onFormSubmit: (data: LeadFormData) => void;
}

export const FinalConversion: React.FC<FinalConversionProps> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    email: '',
    institutionType: '',
    institutionName: '',
    targetEnrolments: '',
    keyChallenge: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.fullName.trim() ||
      !formData.phone.trim() ||
      !formData.email?.trim() ||
      !formData.institutionType ||
      !formData.institutionName?.trim()
    ) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onFormSubmit(formData);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        institutionType: '',
        institutionName: '',
        targetEnrolments: '',
        keyChallenge: '',
      });
    }, 400);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden" data-purpose="final-cta-form" id="audit-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            GET STARTED
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Your Admissions System Is Already Producing Data. <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-blue-700">
              Let's Find Where It's Losing Growth.
            </span>
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Start with a complimentary Admissions Growth Audit and identify gaps across your enquiry journey, follow-up, counselling, parent communication, and performance tracking.
          </p>
        </div>

        {/* Conversion Container: Comprehensive Lead Capture */}
        <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="audit-name" className="block text-xs font-bold text-slate-700 mb-1.5">Full Name *</label>
                <input id="audit-name" autoComplete="name"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Dr. Rajesh Sharma"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-slate-800 bg-white transition-colors"
                />
              </div>
              <div>
                <label htmlFor="audit-phone" className="block text-xs font-bold text-slate-700 mb-1.5">Official Phone Number *</label>
                <input id="audit-phone" autoComplete="tel"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-slate-800 bg-white transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="audit-email" className="block text-xs font-bold text-slate-700 mb-1.5">Work Email ID *</label>
                <input id="audit-email" autoComplete="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="principal@institution.edu.in"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-slate-800 bg-white transition-colors"
                />
              </div>
              <div>
                <label htmlFor="audit-type" className="block text-xs font-bold text-slate-700 mb-1.5">Institution Category *</label>
                <select id="audit-type"
                  required
                  value={formData.institutionType}
                  onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-slate-800 bg-white transition-colors"
                >
                  <option value="" disabled>Select category...</option>
                  <option value="K-12 School">K-12 School</option>
                  <option value="Degree College / University">Degree College / University</option>
                  <option value="Test Prep / Coaching Institute">Test Prep / Coaching Institute</option>
                  <option value="EdTech / Education Brand">EdTech / Education Brand</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="audit-institution" className="block text-xs font-bold text-slate-700 mb-1.5">Institution Name &amp; City *</label>
                <input id="audit-institution" autoComplete="organization"
                  type="text"
                  required
                  value={formData.institutionName}
                  onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                  placeholder="Institution Name, City"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-slate-800 bg-white transition-colors"
                />
              </div>
              <div>
                <label htmlFor="audit-target" className="block text-xs font-bold text-slate-700 mb-1.5">Annual Target Enrolments</label>
                <input id="audit-target"
                  type="text"
                  value={formData.targetEnrolments}
                  onChange={(e) => setFormData({ ...formData, targetEnrolments: e.target.value })}
                  placeholder="e.g. 200 - 500 Seats"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-slate-800 bg-white transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="audit-challenge" className="block text-xs font-bold text-slate-700 mb-1.5">Key Challenge / Objective</label>
              <textarea id="audit-challenge"
                rows={3}
                value={formData.keyChallenge}
                onChange={(e) => setFormData({ ...formData, keyChallenge: e.target.value })}
                placeholder="Briefly describe what's holding back your admissions numbers (e.g. low walk-ins, poor counsellor conversions, high lead acquisition costs)..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-slate-800 bg-white transition-colors"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 text-base font-bold text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 rounded-xl shadow-lg shadow-brand-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 transform hover:-translate-y-0.5"
              >
                <span>{isSubmitting ? 'Submitting Request...' : 'Request a Free Admissions Growth Audit'}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3 text-xs">
              <a
                className="inline-flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-4 py-2.5 rounded-lg border border-emerald-200 transition-colors shadow-sm"
                href="https://wa.me/918328248816?text=Hi%20AM%20Growth%20Partners%2C%20I%20would%20like%20to%20request%20an%20Admissions%20Growth%20Audit."
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.505 2 2.012 6.484 2.012 12.008c0 1.93.551 3.73 1.503 5.258L2.006 22l4.887-1.464a9.92 9.92 0 005.138 1.472h.004c5.525 0 10.016-4.486 10.016-10.01 0-5.525-4.491-10.01-10.02-10.01zm5.836 14.204c-.244.685-1.418 1.309-1.961 1.353-.518.042-1.196.06-3.479-.884-2.738-1.134-4.512-3.896-4.65-4.077-.137-.18-1.1-1.465-1.1-2.793 0-1.328.694-1.981.94-2.247.246-.266.538-.332.718-.332.18 0 .36.002.518.01.168.008.393-.064.615.47.228.547.776 1.895.845 2.034.068.139.114.301.023.483-.092.181-.137.294-.273.456-.136.162-.288.36-.41.483-.138.138-.282.289-.121.566.16.277.713 1.173 1.53 1.9 1.05 1.026 1.934 1.343 2.21 1.48.277.137.439.115.6-.07.162-.185.69-.803.874-1.079.184-.276.368-.23.614-.139.246.092 1.564.737 1.832.87.268.133.447.199.513.31.066.111.066.643-.178 1.328z" />
                </svg>
                Chat on WhatsApp
              </a>

              <a
                className="inline-flex items-center gap-2 font-bold text-slate-700 hover:text-brand-600 bg-white px-4 py-2.5 rounded-lg border border-slate-200 transition-colors shadow-sm"
                href="tel:+918328248816"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                Call Strategist (+91 8328248816)
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
