import React from 'react';

const expertise = [
  'Admissions Strategy',
  'Performance Systems',
  'Business Analytics',
  'Counsellor Workflows',
  'Institutional Growth Planning',
];

export const Founder: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 overflow-hidden" data-purpose="founder-leadership" id="founder">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="lg:col-span-5 lg:order-2">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <div className="absolute -top-4 -right-4 w-full h-full rounded-[2rem] bg-gradient-to-bl from-brand-600 to-blue-400" aria-hidden="true" />
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-100 shadow-2xl shadow-brand-900/15">
                <img
                  src="/amal-philip-johnson.jpeg"
                  alt="Amal Philip Johnson, Founder of AM Growth Partners"
                  className="w-full h-full object-cover object-top"
                  width={800}
                  height={800}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Name Card */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-2xl border border-slate-200 shadow-xl px-5 py-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-base font-extrabold text-slate-900 leading-tight">Amal Philip Johnson</p>
                  <p className="text-xs font-semibold text-brand-600 mt-0.5">Founder &amp; Education Growth Strategist</p>
                </div>
                <a
                  className="w-10 h-10 shrink-0 rounded-full bg-brand-50 text-brand-600 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors"
                  href="https://www.linkedin.com/in/amal-philip-johnson/"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Amal Philip Johnson on LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="lg:col-span-7 lg:order-1 pt-6 lg:pt-0">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-600 block mb-3">FOUNDER</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight mb-5">
              Built by People Who Understand the Admissions Operation.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Focused on admissions strategy, performance systems, business analytics, counsellor workflows, and institutional growth planning across school chains and universities.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {expertise.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

            <blockquote className="relative border-l-4 border-brand-600 bg-brand-50/60 rounded-r-2xl pl-6 pr-6 py-5 mb-8">
              <svg className="absolute top-4 right-5 w-8 h-8 text-brand-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-sm sm:text-base text-slate-800 italic leading-relaxed pr-8">
                "Our goal is simple — help educational institutions build structured admissions systems, stronger parent trust, and scalable growth without relying on guesswork."
              </p>
              <footer className="text-xs font-bold text-slate-900 mt-3">— Amal Philip Johnson</footer>
            </blockquote>

            <a
              className="inline-flex items-center gap-2 px-5 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-sm font-bold transition-colors shadow-md shadow-brand-600/25"
              href="https://www.linkedin.com/in/amal-philip-johnson/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
