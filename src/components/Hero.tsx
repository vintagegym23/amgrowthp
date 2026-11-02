import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Check, CheckCircle2 } from 'lucide-react';
import { LeadFormData } from '../types';
import { sendLeadToWhatsApp } from '../lib/whatsapp';

interface HeroProps {
  onAuditClick: () => void;
  onJourneyClick: () => void;
  onFormSubmit: (data: LeadFormData) => void;
  onPrivacyClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onAuditClick, onJourneyClick, onFormSubmit, onPrivacyClick }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    institutionType: '',
    institutionName: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.institutionType) {
      return;
    }
    const lead: LeadFormData = { ...formData, formSource: 'Quick Audit Form (top of page)' };
    sendLeadToWhatsApp(lead);

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onFormSubmit(lead);
      setFormData({
        fullName: '',
        phone: '',
        institutionType: '',
        institutionName: '',
      });
    }, 400);
  };

  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden grid-bg-pattern border-b border-slate-200/60" data-purpose="hero-section">
      {/* Ambient Blur Background Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-300/30 to-indigo-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Pill Label */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs sm:text-sm font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
            EDUCATION GROWTH CONSULTING &amp; EXECUTION
          </div>
        </div>

        {/* Main Central Headline Area */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] mb-6">
            More Admissions Do Not Start With More Leads. <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-blue-700">
              They Start With a Better System.
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
            We help educational institutions attract the right enquiries, convert more admissions, retain existing students, and build sustainable growth systems.
          </p>
        </div>

        {/* Interactive Grid: Left Value Proposition & Right Quick Audit Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4">
          {/* Left Column: Key Highlights & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Key Differentiator Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-4 shadow-sm hover:border-brand-200 transition-all">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-600 flex items-center justify-center font-bold mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">Education Focused</p>
                <p className="text-xs text-slate-500 mt-1">Schools • Colleges • Coaching</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-4 shadow-sm hover:border-brand-200 transition-all">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">End-to-End Support</p>
                <p className="text-xs text-slate-500 mt-1">Strategy • Execution • Tracking</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-4 shadow-sm hover:border-brand-200 transition-all">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">Measurable Growth</p>
                <p className="text-xs text-slate-500 mt-1">Not just leads. Real admissions.</p>
              </div>
            </div>

            {/* CTA Button Pair */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button 
                onClick={onAuditClick}
                className="inline-flex items-center justify-center px-6 py-4 text-sm sm:text-base font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-lg shadow-brand-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request a Free Admissions Growth Audit</span>
                <ArrowRight className="w-4 h-4 ml-2 stroke-[2.5]" />
              </button>
              <button 
                onClick={onJourneyClick}
                className="inline-flex items-center justify-center px-6 py-4 text-sm sm:text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-sm transition-colors cursor-pointer"
              >
                <span>See How We Build the System</span>
                <ChevronDown className="w-4 h-4 ml-2 text-slate-400" />
              </button>
            </div>

            {/* Trust Subtext */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-1">
              <span className="flex items-center text-emerald-600 font-semibold">
                <Check className="w-4 h-4 mr-1 text-emerald-600 stroke-[2.5]" />
                No spam guarantee
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span>Direct consultation with Admissions Strategist</span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span>Zero obligation report</span>
            </div>
          </div>

          {/* Right Column: Interactive Quick Audit Form */}
          <div className="lg:col-span-5" data-purpose="hero-lead-form" id="hero-quick-form">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-200/90 p-6 sm:p-8 relative">
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-brand-600 to-indigo-600 text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-sm">
                Free 45-Min Strategy Audit
              </div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Audit Your Admissions Leakage</h2>
              <p className="text-xs text-slate-500 mt-1 mb-5">Get a customized bottleneck analysis for your institution within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="hero-name" className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                  <input id="hero-name" autoComplete="name" 
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-slate-800 placeholder-slate-400 transition-colors"
                    placeholder="e.g. Dr. Rajesh Sharma"
                  />
                </div>

                <div>
                  <label htmlFor="hero-phone" className="block text-xs font-semibold text-slate-700 mb-1">Official Mobile / WhatsApp *</label>
                  <input id="hero-phone" autoComplete="tel" 
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-slate-800 placeholder-slate-400 transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="hero-type" className="block text-xs font-semibold text-slate-700 mb-1">Institution Type *</label>
                  <select id="hero-type" 
                    required
                    value={formData.institutionType}
                    onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-slate-800 transition-colors bg-white"
                  >
                    <option value="" disabled>Select category...</option>
                    <option value="K-12 School / Chain">K-12 School / Chain</option>
                    <option value="College / University Campus">College / University Campus</option>
                    <option value="Test Prep / Coaching Institute">Test Prep / Coaching Institute</option>
                    <option value="Education Brand / EdTech">Education Brand / EdTech</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="hero-institution" className="block text-xs font-semibold text-slate-700 mb-1">Institution Name &amp; City</label>
                  <input id="hero-institution" autoComplete="organization" 
                    type="text"
                    value={formData.institutionName}
                    onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-slate-800 placeholder-slate-400 transition-colors"
                    placeholder="e.g. Apex Global Academy, Hyderabad"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 text-sm font-bold text-white bg-slate-900 hover:bg-brand-600 active:bg-brand-700 rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? 'Processing Audit...' : 'Request Free Audit & Callback'}
                </button>

                <p className="text-[11px] text-center text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Guaranteed callback within 4 business hours
                </p>
                <p className="text-[11px] text-center text-slate-500 leading-relaxed">
                  By submitting, you agree to be contacted by AM Growth Partners on WhatsApp about your enquiry. See our{' '}
                  <button type="button" onClick={onPrivacyClick} className="underline hover:text-brand-700 cursor-pointer">
                    Privacy Policy
                  </button>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
