import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { LeadFormData } from '../types';
import { buildLeadMessage, whatsappLink } from '../lib/whatsapp';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  leadData: LeadFormData | null;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, leadData }) => {
  if (!isOpen) return null;

  const whatsappHref = leadData ? whatsappLink(buildLeadMessage(leadData)) : whatsappLink('Hi AM Growth Partners');

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
          One Last Step
        </span>

        <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
          Send Your Details on WhatsApp
        </h3>

        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          Thank you <strong className="text-slate-900">{leadData?.fullName || 'for reaching out'}</strong>.
          WhatsApp has opened with your details already filled in — just tap <strong>Send</strong> to complete your
          audit request. Our Admissions Strategy team will respond within <strong>4 business hours</strong>.
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
            <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.031 2C6.505 2 2.012 6.484 2.012 12.008c0 1.93.551 3.73 1.503 5.258L2.006 22l4.887-1.464a9.92 9.92 0 005.138 1.472h.004c5.525 0 10.016-4.486 10.016-10.01 0-5.525-4.491-10.01-10.02-10.01zm5.836 14.204c-.244.685-1.418 1.309-1.961 1.353-.518.042-1.196.06-3.479-.884-2.738-1.134-4.512-3.896-4.65-4.077-.137-.18-1.1-1.465-1.1-2.793 0-1.328.694-1.981.94-2.247.246-.266.538-.332.718-.332.18 0 .36.002.518.01.168.008.393-.064.615.47.228.547.776 1.895.845 2.034.068.139.114.301.023.483-.092.181-.137.294-.273.456-.136.162-.288.36-.41.483-.138.138-.282.289-.121.566.16.277.713 1.173 1.53 1.9 1.05 1.026 1.934 1.343 2.21 1.48.277.137.439.115.6-.07.162-.185.69-.803.874-1.079.184-.276.368-.23.614-.139.246.092 1.564.737 1.832.87.268.133.447.199.513.31.066.111.066.643-.178 1.328z" />
            </svg>
            Didn't open? Send on WhatsApp
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
