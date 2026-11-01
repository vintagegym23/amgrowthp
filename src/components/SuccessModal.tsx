import React from 'react';
import { CheckCircle2, Phone, X, MessageSquare } from 'lucide-react';
import { LeadFormData } from '../types';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  leadData: LeadFormData | null;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, leadData }) => {
  if (!isOpen) return null;

  const phoneHref = "tel:+918328248816";
  const whatsappHref = `https://wa.me/918328248816?text=${encodeURIComponent(
    `Hi AM Growth Partners, I just submitted an admissions audit request for ${leadData?.fullName || 'my institution'} (${leadData?.institutionName || leadData?.institutionType || 'Education Institute'}). Please connect with me.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 sm:p-8 relative text-center"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wide uppercase mb-2 border border-emerald-200">
          Request Confirmed
        </span>

        <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
          Admissions Audit Booked!
        </h3>

        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          Thank you <strong className="text-slate-900">{leadData?.fullName || 'for reaching out'}</strong>. 
          Our Admissions Strategy team has received your information and is compiling your custom bottleneck breakdown. 
          We guarantee a direct callback within <strong>4 business hours</strong>.
        </p>

        {leadData?.institutionName && (
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs text-slate-600 mb-6 text-left">
            <div className="font-semibold text-slate-800">Institution Details:</div>
            <div>{leadData.institutionName} • {leadData.institutionType}</div>
            <div>Contact: {leadData.phone}</div>
          </div>
        )}

        <div className="space-y-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600 fill-emerald-600" />
            Connect Immediately on WhatsApp
          </a>

          <a
            href={phoneHref}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            <Phone className="w-4 h-4 text-slate-600" />
            Call Strategist Direct (+91 8328248816)
          </a>

          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            Back to Site
          </button>
        </div>
      </div>
    </div>
  );
};
