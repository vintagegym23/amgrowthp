import type { LeadFormData } from '../types';

export const WHATSAPP_NUMBER = '918328248010';

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const DIVIDER = '━━━━━━━━━━━━━━━━━━';

// Formats a form submission as a WhatsApp message (*bold* / _italic_ are WhatsApp markup).
export const buildLeadMessage = (lead: LeadFormData): string => {
  const rows: [string, string, string | undefined][] = [
    ['👤', 'Name', lead.fullName],
    ['📱', 'Mobile', lead.phone],
    ['📧', 'Email', lead.email],
    ['🏫', 'Institution Type', lead.institutionType],
    ['🏢', 'Institution & City', lead.institutionName],
    ['🎯', 'Target Enrolments', lead.targetEnrolments],
  ];

  const lines = ['🎓 *New Admissions Audit Request*'];
  if (lead.formSource) lines.push(`_${lead.formSource}_`);
  lines.push(DIVIDER, '');

  for (const [icon, label, value] of rows) {
    if (value?.trim()) lines.push(`${icon} *${label}:* ${value.trim()}`);
  }

  if (lead.keyChallenge?.trim()) {
    lines.push('', '📝 *Key Challenge / Objective:*', lead.keyChallenge.trim());
  }

  lines.push('', DIVIDER, '_Sent from amgrowthp.com_');

  return lines.join('\n');
};

// Opens WhatsApp with the lead pre-filled. Must run inside the submit handler (a user
// gesture) or browsers will block the new tab; falls back to same-tab navigation.
export const sendLeadToWhatsApp = (lead: LeadFormData) => {
  const url = whatsappLink(buildLeadMessage(lead));
  const win = window.open(url, '_blank');
  if (win) {
    win.opener = null;
  } else {
    window.location.href = url;
  }
};
