import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavClick: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer className="bg-darknavy text-slate-400 border-t border-slate-800" data-purpose="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-mark.webp"
                alt="AM Growth Partners logo"
                width={200}
                height={119}
                loading="lazy"
                className="h-7 w-auto invert"
              />
              <div className="flex flex-col">
                <span className="font-bold text-white tracking-tight text-base">AM GROWTH PARTNERS</span>
                <span className="text-[9px] uppercase tracking-widest text-brand-400 font-bold">Education Growth</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-6">
              Focused to help educational institutions build structured admissions systems, stronger parent trust, and scalable growth.
            </p>
            <div className="flex items-center space-x-3 text-slate-400">
              <a
                className="w-8 h-8 rounded-lg bg-carddark border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition-colors"
                href="https://www.linkedin.com/in/amal-philip-johnson/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                className="w-8 h-8 rounded-lg bg-carddark border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition-colors"
                href="https://wa.me/918328248816?text=Hi%20AM%20Growth%20Partners%2C%20I%20would%20like%20to%20request%20an%20Admissions%20Growth%20Audit."
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.505 2 2.012 6.484 2.012 12.008c0 1.93.551 3.73 1.503 5.258L2.006 22l4.887-1.464a9.92 9.92 0 005.138 1.472h.004c5.525 0 10.016-4.486 10.016-10.01 0-5.525-4.491-10.01-10.02-10.01zm5.836 14.204c-.244.685-1.418 1.309-1.961 1.353-.518.042-1.196.06-3.479-.884-2.738-1.134-4.512-3.896-4.65-4.077-.137-.18-1.1-1.465-1.1-2.793 0-1.328.694-1.981.94-2.247.246-.266.538-.332.718-.332.18 0 .36.002.518.01.168.008.393-.064.615.47.228.547.776 1.895.845 2.034.068.139.114.301.023.483-.092.181-.137.294-.273.456-.136.162-.288.36-.41.483-.138.138-.282.289-.121.566.16.277.713 1.173 1.53 1.9 1.05 1.026 1.934 1.343 2.21 1.48.277.137.439.115.6-.07.162-.185.69-.803.874-1.079.184-.276.368-.23.614-.139.246.092 1.564.737 1.832.87.268.133.447.199.513.31.066.111.066.643-.178 1.328z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h2 className="text-xs font-bold text-white uppercase tracking-wider mb-4">SERVICES</h2>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavClick('#services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Admissions Audit
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('#services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Counselling Systems
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('#services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Brand &amp; Digital Growth
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('#services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Performance Dashboards
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h2 className="text-xs font-bold text-white uppercase tracking-wider mb-4">COMPANY</h2>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors cursor-pointer text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('#journey')} className="hover:text-white transition-colors cursor-pointer text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('#results')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('#faq')} className="hover:text-white transition-colors cursor-pointer text-left">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h2 className="text-xs font-bold text-white uppercase tracking-wider mb-4">CONTACT</h2>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a className="hover:text-white transition-colors" href="tel:+918328248816">
                  +91 8328248816
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a className="hover:text-white transition-colors" href="mailto:info@amgrowthp.com">
                  info@amgrowthp.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>Madhapur, Hyderabad, Telangana, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <p>© 2025 AM Growth Partners. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a className="hover:text-white transition-colors" href="#audit-form">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-colors" href="#audit-form">
              Terms &amp; Conditions
            </a>
            <a className="hover:text-white transition-colors" href="#audit-form">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
