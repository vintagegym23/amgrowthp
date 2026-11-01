import React from 'react';

export const SolutionDark: React.FC = () => {
  const steps = [
    { num: '1. MARKETING', label: 'Attract High-Intent Parents', isHighlight: false },
    { num: '2. ENQUIRY', label: 'Capture & Filter Quality Leads', isHighlight: false },
    { num: '3. FOLLOW-UP', label: 'Rapid Response Protocols', isHighlight: false },
    { num: '4. COUNSELLING', label: 'Structured Script Playbooks', isHighlight: false },
    { num: '5. WALK-IN', label: 'Campus Tour Conversion', isHighlight: false },
    { num: '6. ENROLMENT', label: 'Predictable Batch Fills', isHighlight: false },
    { num: '7. PERFORMANCE', label: 'Real-Time Cockpit Data', isHighlight: true },
  ];

  return (
    <section className="py-20 bg-darknavy text-white relative overflow-hidden" data-purpose="solution-section">
      {/* Subtle glow accents */}
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 border border-brand-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            THE SOLUTION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            The Problem Isn't One Broken Step. <br />
            <span className="text-brand-500">It's the Lack of a Connected System.</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            AM Growth Partners connects marketing, follow-up, counselling, walk-ins, and performance tracking into one structured admissions growth system.
          </p>
        </div>

        {/* Horizontal Pipeline Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-4 text-center transition-all ${
                step.isHighlight
                  ? 'bg-brand-900/60 border border-brand-500/40 col-span-2 md:col-span-4 lg:col-span-1 shadow-lg shadow-brand-500/10'
                  : 'bg-carddark border border-slate-800'
              }`}
            >
              <span
                className={`text-[10px] font-bold uppercase tracking-widest block mb-1 ${
                  step.isHighlight ? 'text-blue-300' : 'text-brand-400'
                }`}
              >
                {step.num}
              </span>
              <h3 className={`text-xs font-semibold ${step.isHighlight ? 'text-white' : 'text-slate-200'}`}>
                {step.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
