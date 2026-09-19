export type PlatformSource = 'StepStone' | 'BA' | 'Make it in Germany' | 'LinkedIn' | 'Indeed';

export type MarketRegion = 'Germany' | 'Netherlands' | 'Belgium' | 'Luxembourg';

export interface RecruiterContext {
  name: string;
  title: string;
  email?: string;
  phone?: string;
  department: string;
  postalAddress: string;
  hiringTone: 'Technical & Concise' | 'Corporate DIN 5008' | 'Modern Agile';
  directContactNotes: string;
}

export interface JobPosting {
  id: string;
  title: string;
  company: string;
  companyLogoText: string;
  companyLogoBg: string;
  city: string;
  country: string;
  flag: string;
  region: MarketRegion;
  source: PlatformSource;
  sourceUrl: string;
  matchScore: number;
  salaryRange: string;
  workMode: 'On-site' | 'Hybrid' | 'Remote (DE/EU)';
  postedTimeAgo: string;
  isNew?: boolean;
  statusRecommendation: 'APPLY NOW' | 'SKIP';
  statusReason: string;
  techStack: string[];
  visaSupport: string;
  recruiter: RecruiterContext;
  jobDescriptionSnippet: string;
  coverLetterTemplateDE: string;
  coverLetterTemplateEN: string;
}

export interface ScanningSource {
  id: string;
  name: string;
  sourceType: PlatformSource;
  active: boolean;
  ratePerHr: number;
  lastScraped: string;
  region: 'Germany' | 'Benelux' | 'All';
}

export interface MarketFocus {
  germanyPercent: number;
  beneluxPercent: number;
}

export interface UserProfile {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  referenceId: string; // ZAB_DAB2026_3493
  credentialTitle: string; // Zentralstelle für ausländisches Bildungswesen (ZAB)
  blueCardEligible: boolean;
  germanLevel: string; // B2/C1
  englishLevel: string; // C2 Native/Bilingual
  activeMemoryDocs: number;
  memoryDocNames: string[];
}
