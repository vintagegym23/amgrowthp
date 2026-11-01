import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { ServicePillar } from '../types';

interface ServiceDetailModalProps {
  pillar: ServicePillar | null;
  onClose: () => void;
  onBookAudit: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ pillar, onClose, onBookAudit }) => {
  if (!pillar) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-2 rounded-xl hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-brand-700">
            {pillar.tag}
          </span>
        </div>

        <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight mb-2">
          {pillar.title} Architecture
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {pillar.description}
        </p>

        <div className="mb-6">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
            Core Implementation Deliverables
          </h4>
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-2.5">
            {pillar.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                <div className="w-4 h-4 rounded-full bg-blue-100 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
            Expected Strategic Outcomes
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {pillar.keyOutcomes.map((outcome, idx) => (
              <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-800">
                ✨ {outcome}
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onBookAudit();
            }}
            className="flex-1 py-3 px-5 text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-md shadow-brand-600/25 transition-all flex items-center justify-center gap-2"
          >
            <span>Request Audit for {pillar.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="py-3 px-4 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
