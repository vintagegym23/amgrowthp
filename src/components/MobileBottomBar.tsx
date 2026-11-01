import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';

interface MobileBottomBarProps {
  onAuditClick: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onAuditClick }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl">
      <div className="max-w-md mx-auto flex items-center gap-2">
        {/* Direct Call Button */}
        <a
          href="tel:+918328248816"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-slate-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-xl text-center transition-colors font-bold text-[11px]"
        >
          <Phone className="w-4 h-4 text-brand-600 mb-0.5" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918328248816?text=Hi%20AM%20Growth%20Partners%2C%20I%20would%20like%20to%20request%20an%20Admissions%20Growth%20Audit."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 active:bg-emerald-200 border border-emerald-200 rounded-xl text-center transition-colors font-bold text-[11px]"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Primary Audit CTA Button */}
        <button
          onClick={onAuditClick}
          className="flex-[1.6] flex items-center justify-center gap-1.5 py-2.5 px-3 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white rounded-xl text-center font-bold text-xs shadow-md shadow-brand-600/30 transition-transform active:scale-95 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Free Audit</span>
        </button>
      </div>
    </div>
  );
};
