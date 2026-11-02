import React from 'react';
import { Sparkles } from 'lucide-react';

interface MobileBottomBarProps {
  onAuditClick: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onAuditClick }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl">
      <div className="max-w-md mx-auto flex items-center gap-2">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918328248010?text=Hi%20AM%20Growth%20Partners%2C%20I%20would%20like%20to%20request%20an%20Admissions%20Growth%20Audit."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 active:bg-emerald-200 border border-emerald-200 rounded-xl text-center transition-colors font-bold text-[11px]"
        >
          <svg className="w-5 h-5 text-[#25D366] mb-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.031 2C6.505 2 2.012 6.484 2.012 12.008c0 1.93.551 3.73 1.503 5.258L2.006 22l4.887-1.464a9.92 9.92 0 005.138 1.472h.004c5.525 0 10.016-4.486 10.016-10.01 0-5.525-4.491-10.01-10.02-10.01zm5.836 14.204c-.244.685-1.418 1.309-1.961 1.353-.518.042-1.196.06-3.479-.884-2.738-1.134-4.512-3.896-4.65-4.077-.137-.18-1.1-1.465-1.1-2.793 0-1.328.694-1.981.94-2.247.246-.266.538-.332.718-.332.18 0 .36.002.518.01.168.008.393-.064.615.47.228.547.776 1.895.845 2.034.068.139.114.301.023.483-.092.181-.137.294-.273.456-.136.162-.288.36-.41.483-.138.138-.282.289-.121.566.16.277.713 1.173 1.53 1.9 1.05 1.026 1.934 1.343 2.21 1.48.277.137.439.115.6-.07.162-.185.69-.803.874-1.079.184-.276.368-.23.614-.139.246.092 1.564.737 1.832.87.268.133.447.199.513.31.066.111.066.643-.178 1.328z" />
          </svg>
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
