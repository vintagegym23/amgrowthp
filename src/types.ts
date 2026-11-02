export interface LeadFormData {
  fullName: string;
  phone: string;
  institutionType: string;
  institutionName?: string;
  email?: string;
  targetEnrolments?: string;
  keyChallenge?: string;
  formSource?: string;
}

export interface ServicePillar {
  id: string;
  title: string;
  color: string;
  lightBg: string;
  iconBg: string;
  textColor: string;
  bulletColor: string;
  tag: string;
  deliverables: string[];
  description: string;
  keyOutcomes: string[];
}
