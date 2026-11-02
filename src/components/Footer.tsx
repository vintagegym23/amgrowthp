import React from 'react';
import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { services, ServiceId } from '../data/services';
import { scrollToTop } from '../lib/scroll';

const WHATSAPP_HREF =
  'https://wa.me/918328248010?text=Hi%20AM%20Growth%20Partners%2C%20I%20would%20like%20to%20request%20an%20Admissions%20Growth%20Audit.';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/am-growth-partners',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/amgrowthpartners_/',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/amgrowthp/',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@amgrowthpartners',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: WHATSAPP_HREF,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.031 2C6.505 2 2.012 6.484 2.012 12.008c0 1.93.551 3.73 1.503 5.258L2.006 22l4.887-1.464a9.92 9.92 0 005.138 1.472h.004c5.525 0 10.016-4.486 10.016-10.01 0-5.525-4.491-10.01-10.02-10.01zm5.836 14.204c-.244.685-1.418 1.309-1.961 1.353-.518.042-1.196.06-3.479-.884-2.738-1.134-4.512-3.896-4.65-4.077-.137-.18-1.1-1.465-1.1-2.793 0-1.328.694-1.981.94-2.247.246-.266.538-.332.718-.332.18 0 .36.002.518.01.168.008.393-.064.615.47.228.547.776 1.895.845 2.034.068.139.114.301.023.483-.092.181-.137.294-.273.456-.136.162-.288.36-.41.483-.138.138-.282.289-.121.566.16.277.713 1.173 1.53 1.9 1.05 1.026 1.934 1.343 2.21 1.48.277.137.439.115.6-.07.162-.185.69-.803.874-1.079.184-.276.368-.23.614-.139.246.092 1.564.737 1.832.87.268.133.447.199.513.31.066.111.066.643-.178 1.328z" />
      </svg>
    ),
  },
];

interface FooterProps {
  onNavClick: (href: string) => void;
  onServiceClick: (id: ServiceId) => void;
  onPrivacyClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onServiceClick, onPrivacyClick }) => {
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
            <div className="flex items-center gap-3 text-slate-400">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  className="w-9 h-9 rounded-lg bg-carddark border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition-colors"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  aria-label={`AM Growth Partners on ${social.label}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h2 className="text-xs font-bold text-white uppercase tracking-wider mb-4">SERVICES</h2>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href={`#${service.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onServiceClick(service.id);
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h2 className="text-xs font-bold text-white uppercase tracking-wider mb-4">COMPANY</h2>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={scrollToTop} className="hover:text-white transition-colors cursor-pointer text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('#founder')} className="hover:text-white transition-colors cursor-pointer text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('#results')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Results
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
                <MessageCircle className="w-4 h-4 text-brand-400 shrink-0" />
                <a className="hover:text-white transition-colors" href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                  WhatsApp: +91 8328248010
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
            <button type="button" onClick={onPrivacyClick} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
