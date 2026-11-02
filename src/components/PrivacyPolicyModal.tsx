import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// DRAFT for client review (requested 2026-11-02). Not legal advice; the client should have it checked
// before relying on it, and update it when analytics or other tracking is added.
const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: 'Who we are',
    body: (
      <p>
        AM Growth Partners ("AMGP", "we", "us") is an education growth consulting firm based in Madhapur, Hyderabad,
        Telangana, India. This policy explains how we handle personal information shared with us through this website.
      </p>
    ),
  },
  {
    heading: 'Information we collect',
    body: (
      <>
        <p>When you submit an enquiry or audit request form, we collect the details you choose to provide:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Your name, mobile / WhatsApp number and email address</li>
          <li>Your institution's name, city and category</li>
          <li>Annual target enrolments, the service you are interested in, and any challenge or objective you describe</li>
        </ul>
        <p>We do not ask for sensitive personal data, and we do not collect information about students through this website.</p>
      </>
    ),
  },
  {
    heading: 'How your enquiry reaches us',
    body: (
      <p>
        When you submit a form, WhatsApp opens with your details pre-filled as a message to our business number. Your
        details are only shared with us when you choose to send that message. WhatsApp is operated by Meta and handles
        messages under its own privacy policy.
      </p>
    ),
  },
  {
    heading: 'How we use your information',
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>To respond to your enquiry and schedule a consultation</li>
        <li>To understand your institution's needs and prepare relevant recommendations</li>
        <li>To follow up about the services you asked about</li>
      </ul>
    ),
  },
  {
    heading: 'Sharing',
    body: (
      <p>
        We do not sell or rent your personal information. We share it only with team members who need it to respond to
        you, or where required by law.
      </p>
    ),
  },
  {
    heading: 'Cookies and tracking',
    body: (
      <p>
        This website does not currently use analytics or advertising cookies. If we add analytics in future, we will
        update this policy.
      </p>
    ),
  },
  {
    heading: 'Retention',
    body: (
      <p>
        We keep enquiry information only for as long as needed to respond to you and manage any resulting engagement,
        unless a longer period is required by law.
      </p>
    ),
  },
  {
    heading: 'Your rights',
    body: (
      <p>
        In line with India's Digital Personal Data Protection Act, 2023, you may ask us to access, correct or delete the
        personal information you have shared, or withdraw your consent to further contact. Email{' '}
        <a className="text-brand-700 underline" href="mailto:info@amgrowthp.com">
          info@amgrowthp.com
        </a>{' '}
        and we will respond within a reasonable time.
      </p>
    ),
  },
  {
    heading: 'Changes to this policy',
    body: <p>We may update this policy from time to time. The latest version will always be available on this website.</p>,
  },
];

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-policy-title"
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 p-6 border-b border-slate-100">
          <div>
            <h2 id="privacy-policy-title" className="text-xl font-extrabold text-slate-900">
              Privacy Policy
            </h2>
            <p className="text-xs text-slate-500 mt-1">Last updated: 2 November 2026</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close privacy policy"
            autoFocus
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="overflow-y-auto p-6 space-y-5 text-sm text-slate-600 leading-relaxed">
          {sections.map((section) => (
            <div key={section.heading} className="space-y-2">
              <h3 className="text-sm font-bold text-slate-900">{section.heading}</h3>
              {section.body}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
