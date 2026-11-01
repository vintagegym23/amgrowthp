import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AdmissionsJourney } from './components/AdmissionsJourney';
import { RealProblem } from './components/RealProblem';
import { SolutionDark } from './components/SolutionDark';
import { WhatWeDo } from './components/WhatWeDo';
import { WhoWeHelp } from './components/WhoWeHelp';
import { BuildGrowScale } from './components/BuildGrowScale';
import { Process } from './components/Process';
import { Results } from './components/Results';
import { WhyUs } from './components/WhyUs';
import { Founder } from './components/Founder';
import { FAQ } from './components/FAQ';
import { FinalConversion } from './components/FinalConversion';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { SuccessModal } from './components/SuccessModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { LeadFormData, ServicePillar } from './types';

export default function App() {
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<LeadFormData | null>(null);
  const [selectedPillar, setSelectedPillar] = useState<ServicePillar | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAuditClick = () => {
    scrollToSection('#audit-form');
    // Set focus on first input of audit form after scroll
    setTimeout(() => {
      const firstInput = document.querySelector<HTMLInputElement>('#audit-form input[type="text"]');
      if (firstInput) {
        firstInput.focus();
      }
    }, 600);
  };

  const handleJourneyClick = () => {
    scrollToSection('#journey');
  };

  const handleFormSubmit = (data: LeadFormData) => {
    setSubmittedLead(data);
    setSuccessModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFCFF] text-slate-800 selection:bg-brand-600 selection:text-white pb-14 lg:pb-0">
      {/* Top Navigation */}
      <Navbar onAuditClick={handleAuditClick} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Value Proposition and Quick Audit Form */}
        <Hero
          onAuditClick={handleAuditClick}
          onJourneyClick={handleJourneyClick}
          onFormSubmit={handleFormSubmit}
        />

        {/* 2. Admissions Journey (From Enquiry to Enrolment) */}
        <AdmissionsJourney onAuditClick={handleAuditClick} />

        {/* 3. The Real Problem (Funnel Leakage Breakdown) */}
        <RealProblem />

        {/* 4. The Solution (Connected System Pipeline in Dark Navy) */}
        <SolutionDark />

        {/* 5. What We Do (4 Pillars with Deep-dive Modal trigger) */}
        <WhatWeDo
          onSelectPillar={(pillar) => setSelectedPillar(pillar)}
          onAuditClick={handleAuditClick}
        />

        {/* 6. Who We Help (Schools, Colleges, Coaching, Brands) */}
        <WhoWeHelp />

        {/* 7. Build • Grow • Scale (3 Transformation Phases) */}
        <BuildGrowScale />

        {/* 8. How We Work (01 Diagnose to 05 Optimise) */}
        <Process />

        {/* 9. Real Results (Verified Metrics & Proof Points) */}
        <Results onAuditClick={handleAuditClick} />

        {/* 10. Why Us (Education Specialist vs Generic Agency) */}
        <WhyUs />

        {/* 11. Founder Section (Amal Philip Johnson Bio & Quote) */}
        <Founder />

        {/* 12. Frequently Asked Questions (Interactive Accordion) */}
        <FAQ />

        {/* 13. Final Comprehensive Conversion Section & Audit Booking Form */}
        <FinalConversion onFormSubmit={handleFormSubmit} />
      </main>

      {/* Site Footer */}
      <Footer onNavClick={scrollToSection} />

      {/* Mobile Bottom Quick-Action Bar */}
      <MobileBottomBar onAuditClick={handleAuditClick} />

      {/* Success Confirmation Modal */}
      <SuccessModal
        isOpen={successModalOpen}
        onClose={() => setSuccessModalOpen(false)}
        leadData={submittedLead}
      />

      {/* Service Pillar Deep-Dive Modal */}
      <ServiceDetailModal
        pillar={selectedPillar}
        onClose={() => setSelectedPillar(null)}
        onBookAudit={handleAuditClick}
      />
    </div>
  );
}
