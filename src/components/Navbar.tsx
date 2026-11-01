import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onAuditClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onAuditClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Journey', href: '#journey' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#framework' },
    { label: 'Results', href: '#results' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand Unit */}
          <a 
            className="flex items-center gap-3 group" 
            data-purpose="brand-logo" 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src="/logo-mark.webp"
              alt="AM Growth Partners logo"
              width={200}
              height={119}
              className="h-8 w-auto group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 tracking-tight text-lg leading-none">AM GROWTH</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-600 font-bold mt-0.5">Partners</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600" data-purpose="desktop-nav">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                className="hover:text-brand-600 transition-colors" 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Direct Actions & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* WhatsApp Quick Access */}
            <a 
              className="hidden md:inline-flex items-center justify-center w-10 h-10 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-full border border-emerald-200/70 transition-colors" 
              href="https://wa.me/918328248816?text=Hi%20AM%20Growth%20Partners%2C%20I%20would%20like%20to%20request%20an%20Admissions%20Growth%20Audit." 
              rel="noopener noreferrer" 
              target="_blank" 
              title="Chat with an admissions consultant on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 2C6.505 2 2.012 6.484 2.012 12.008c0 1.93.551 3.73 1.503 5.258L2.006 22l4.887-1.464a9.92 9.92 0 005.138 1.472h.004c5.525 0 10.016-4.486 10.016-10.01 0-5.525-4.491-10.01-10.02-10.01zm5.836 14.204c-.244.685-1.418 1.309-1.961 1.353-.518.042-1.196.06-3.479-.884-2.738-1.134-4.512-3.896-4.65-4.077-.137-.18-1.1-1.465-1.1-2.793 0-1.328.694-1.981.94-2.247.246-.266.538-.332.718-.332.18 0 .36.002.518.01.168.008.393-.064.615.47.228.547.776 1.895.845 2.034.068.139.114.301.023.483-.092.181-.137.294-.273.456-.136.162-.288.36-.41.483-.138.138-.282.289-.121.566.16.277.713 1.173 1.53 1.9 1.05 1.026 1.934 1.343 2.21 1.48.277.137.439.115.6-.07.162-.185.69-.803.874-1.079.184-.276.368-.23.614-.139.246.092 1.564.737 1.832.87.268.133.447.199.513.31.066.111.066.643-.178 1.328z"></path>
              </svg>
            </a>

            {/* Direct Phone Call Action */}
            <a 
              className="hidden md:inline-flex items-center justify-center w-10 h-10 text-brand-600 bg-slate-50 hover:bg-brand-50 rounded-full border border-slate-200 transition-colors" 
              href="tel:+918328248816"
              title="Call +91 8328248816"
              aria-label="Call +91 8328248816"
            >
              <Phone className="w-[18px] h-[18px]" />
            </a>

            {/* Primary Audit Header CTA */}
            <button 
              onClick={onAuditClick}
              title="Request a Free Admissions Growth Audit"
              className="inline-flex items-center justify-center px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 rounded-xl shadow-md shadow-brand-600/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Get Free Audit
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-brand-600 hover:bg-slate-100 rounded-lg transition-colors ml-1"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-600 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="tel:+918328248816"
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100"
            >
              <Phone className="w-4 h-4 text-brand-600" />
              Call +91 8328248816
            </a>
            <a
              href="https://wa.me/918328248816?text=Hi%20AM%20Growth%20Partners%2C%20I%20would%20like%20to%20request%20an%20Admissions%20Growth%20Audit."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
