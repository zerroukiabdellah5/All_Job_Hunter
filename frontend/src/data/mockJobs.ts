import { JobPosting, ScanningSource, UserProfile } from '../types';

export const currentUserProfile: UserProfile = {
  fullName: "Dr. Alexander Mercer",
  title: "Principal Cloud Architect & AI Systems Engineer",
  email: "a.mercer.architect@tech-lead.eu",
  phone: "+49 (0) 89 4529 8812",
  address: "Leopoldstraße 142, 80804 München, Germany",
  referenceId: "ZAB_DAB2026_3493",
  credentialTitle: "Zentralstelle für ausländisches Bildungswesen (ZAB) - Verified Equivalent M.Sc. Informatics",
  blueCardEligible: true,
  germanLevel: "B2 / C1 Berufsdeutsch",
  englishLevel: "C2 Bilingual / Native",
  activeMemoryDocs: 5,
  memoryDocNames: [
    "CV_Executive_Alexander_Mercer_2026.pdf",
    "ZAB_Equivalence_DAB2026_3493_KMK.pdf",
    "Arbeitszeugnis_Senior_Lead_Siemens.pdf",
    "EU_BlueCard_PreClearance_Bamf.pdf",
    "Master_Degree_Apostille_Notarized.pdf"
  ]
};

export const initialScanningSources: ScanningSource[] = [
  {
    id: 'src-stepstone',
    name: 'StepStone.de API',
    sourceType: 'StepStone',
    active: true,
    ratePerHr: 142,
    lastScraped: '2m ago',
    region: 'Germany'
  },
  {
    id: 'src-ba',
    name: 'Bundesagentur für Arbeit (BA API)',
    sourceType: 'BA',
    active: true,
    ratePerHr: 98,
    lastScraped: '4m ago',
    region: 'Germany'
  },
  {
    id: 'src-makeitin',
    name: 'Make it in Germany (Fast-Track)',
    sourceType: 'Make it in Germany',
    active: true,
    ratePerHr: 64,
    lastScraped: '1m ago',
    region: 'Germany'
  },
  {
    id: 'src-linkedin-benelux',
    name: 'LinkedIn Benelux & Randstad',
    sourceType: 'LinkedIn',
    active: true,
    ratePerHr: 185,
    lastScraped: '30s ago',
    region: 'Benelux'
  },
  {
    id: 'src-indeed-de',
    name: 'Indeed DACH Real-time Feed',
    sourceType: 'Indeed',
    active: false,
    ratePerHr: 110,
    lastScraped: '15m ago',
    region: 'Germany'
  }
];

export const mockJobPostings: JobPosting[] = [
  {
    id: 'job-de-001',
    title: 'Senior Cloud & Generative AI Infrastructure Architect',
    company: 'Siemens Healthineers AG',
    companyLogoText: 'SH',
    companyLogoBg: 'bg-emerald-600',
    city: 'Frankfurt am Main',
    country: 'Germany',
    flag: '🇩🇪',
    region: 'Germany',
    source: 'StepStone',
    sourceUrl: 'https://stepstone.de/jobs/siemens-healthineers-frankfurt',
    matchScore: 98,
    salaryRange: '€105,000 - €128,000 + Bonus',
    workMode: 'Hybrid',
    postedTimeAgo: '12m ago',
    isNew: true,
    statusRecommendation: 'APPLY NOW',
    statusReason: 'Perfect 98% profile alignment: Match on Kubernetes/GCP architecture, EU Blue Card pre-verified (Ref: ZAB_DAB2026_3493), and C1 English / B2 Technical German.',
    techStack: ['GCP', 'Kubernetes', 'Python', 'Terraform', 'LLMOps', 'Go'],
    visaSupport: 'Direct § 18g EU Blue Card fast-track via BAMF cooperation & full relocation package.',
    recruiter: {
      name: 'Dr. Florian Becker',
      title: 'Head of Talent Acquisition & Digital Engineering',
      email: 'florian.becker@siemens-healthineers.com',
      phone: '+49 69 797 2200',
      department: 'Enterprise AI & Medical Cloud Platforms',
      postalAddress: 'Siemens Healthineers AG, Speicherstraße 55, 60327 Frankfurt am Main',
      hiringTone: 'Corporate DIN 5008',
      directContactNotes: 'Prioritizes formal DIN 5008 letter format with specific reference to ZAB recognition degree and cloud scale accomplishments.'
    },
    jobDescriptionSnippet: 'Lead the next-generation sovereign medical cloud infrastructure. Architecting resilient multi-tenant orchestration, LLM inference endpoints, and automated CI/CD for hospital diagnostic pipelines.',
    coverLetterTemplateDE: `Alexander Mercer
Leopoldstraße 142
80804 München
E-Mail: a.mercer.architect@tech-lead.eu
Telefon: +49 (0) 89 4529 8812

Siemens Healthineers AG
Herrn Dr. Florian Becker
Head of Talent Acquisition & Digital Engineering
Speicherstraße 55
60327 Frankfurt am Main

München, 19. September 2026

Bewerbung als Senior Cloud & Generative AI Infrastructure Architect
Referenz: SH-FRA-2026-CLOUD | Profil-Akkreditierung: ZAB_DAB2026_3493

Sehr geehrter Herr Dr. Becker,

mit großem Interesse verfolge ich die Vorreiterrolle der Siemens Healthineers AG bei der Etablierung souveräner, hochverfügbarer Cloud- und KI-Infrastrukturen im europäischen Gesundheitssektor. Als Cloud Architect mit über 9 Jahren Erfahrung in der Orchestrierung verteilter Kubernetes-Cluster und skalierbarer LLMOps-Pipelines bewerbe ich mich mit Begeisterung auf die ausgeschriebene Position in Frankfurt am Main.

Mein beruflicher Hintergrund umfasst die Konzeption und den produktiven Betrieb von Multi-Tenant-GCP- und Hybrid-Umgebungen unter strengen Datenschutz- und Hochsicherheitsauflagen. Durch die offizielle Feststellung der Gleichwertigkeit meines Hochschulabschlusses durch die Zentralstelle für ausländisches Bildungswesen (ZAB Aktenzeichen: ZAB_DAB2026_3493) sowie die Erfüllung aller Voraussetzungen für die beschleunigte EU Blue Card (§ 18g AufenthG) ist ein unmittelbarer, rechtssicherer Eintritt ohne bürokratische Verzögerungen gewährleistet.

Besonders hervorzuheben aus meinen bisherigen Projekten:
• Automatisierung von Zero-Downtime Terraform-Infrastrukturen für Latenzkritische Inferenz-Workloads mit einer Einsparung von 38 % Infrastrukturkosten.
• Aufbau von Kubernetes-basierten API-Gateways für über 4,5 Millionen tägliche Transaktionen mit 99,99 % SLA.
• Sichere Verhandlungssicherheit in verhandlungssicherem Englisch (C2) sowie fundiertes berufsbezogenes Deutsch (B2/C1).

Ich freue mich darauf, meine Expertise in Ihr Frankfurter Team einzubringen und stehe Ihnen für ein persönliches oder virtuelles Gespräch jederzeit gerne zur Verfügung.

Mit freundlichen Grüßen

Alexander Mercer`,
    coverLetterTemplateEN: `Alexander Mercer
Leopoldstraße 142, 80804 Munich, Germany
Email: a.mercer.architect@tech-lead.eu | Phone: +49 (0) 89 4529 8812

Siemens Healthineers AG
Attn: Dr. Florian Becker, Head of Talent Acquisition
Speicherstraße 55, 60327 Frankfurt am Main, Germany

Subject: Application for Senior Cloud & Generative AI Infrastructure Architect (Ref: SH-FRA-2026)
Formal Credential Verification ID: ZAB_DAB2026_3493

Dear Dr. Becker,

I am writing to express my strong enthusiasm for the Senior Cloud & Generative AI Infrastructure Architect role at Siemens Healthineers in Frankfurt am Main. Having built enterprise-grade cloud ecosystems and scalable AI runtime backbones for regulated sectors, I have long admired Siemens Healthineers' mission to redefine medical intelligence.

With an officially verified M.Sc. degree assessed by the KMK Zentralstelle für ausländisches Bildungswesen (Reference: ZAB_DAB2026_3493) and full pre-approval for the German EU Blue Card fast-track (§ 18g AufenthG), I bring seamless onboarding readiness alongside deep technical leadership in Kubernetes, Terraform, and distributed LLMOps.

Key contributions I am eager to deliver:
• Proven architecture of resilient container infrastructure serving high-throughput healthcare inference workloads.
• Established governance ensuring GDPR compliance, zero-trust telemetry, and multi-cloud resilience.
• Bilingual communication bridging technical engineering teams and C-level stakeholders.

Thank you for your consideration. I look forward to discussing how my experience can accelerate your Frankfurt digital health initiatives.

Sincerely,

Alexander Mercer`
  },
  {
    id: 'job-nl-002',
    title: 'Lead Distributed Systems Engineer (High-Throughput EU Core)',
    company: 'ASML Holding N.V.',
    companyLogoText: 'ASML',
    companyLogoBg: 'bg-blue-600',
    city: 'Eindhoven / Amsterdam',
    country: 'Netherlands',
    flag: '🇳🇱',
    region: 'Netherlands',
    source: 'LinkedIn',
    sourceUrl: 'https://linkedin.com/jobs/asml-distributed-systems',
    matchScore: 95,
    salaryRange: '€112,000 - €135,000 + 30% Ruling Eligible',
    workMode: 'Hybrid',
    postedTimeAgo: '35m ago',
    isNew: true,
    statusRecommendation: 'APPLY NOW',
    statusReason: 'High priority match (95%): Exceptional fit for lithography computing cluster control systems, Rust/Go micro-services, and Dutch 30% Ruling eligibility with ZAB M.Sc. equivalency.',
    techStack: ['Distributed Systems', 'Go', 'Rust', 'Kafka', 'Kubernetes', 'Linux Kernel'],
    visaSupport: 'Highly Skilled Migrant (Kennismigrant) fast-track sponsor with 30% tax facility processing.',
    recruiter: {
      name: 'Wouter van Dijk',
      title: 'Lead Tech Recruiter - D&E Software',
      email: 'wouter.vandijk@asml.com',
      phone: '+31 40 268 3000',
      department: 'Development & Engineering (D&E) Compute Platforms',
      postalAddress: 'ASML Building 7, De Run 6501, 5504 DR Veldhoven, Netherlands',
      hiringTone: 'Technical & Concise',
      directContactNotes: 'Focus on deterministic systems, low-latency messaging, and clean system design principles.'
    },
    jobDescriptionSnippet: 'Architect the control computation fabric for extreme ultraviolet (EUV) lithography systems. Processing sub-millisecond telemetry feeds across massive node arrays.',
    coverLetterTemplateDE: `Alexander Mercer
Leopoldstraße 142, 80804 München, Deutschland
E-Mail: a.mercer.architect@tech-lead.eu

ASML Holding N.V.
Herrn Wouter van Dijk
De Run 6501, 5504 DR Veldhoven, Niederlande

Bewerbung als Lead Distributed Systems Engineer (D&E Compute Platforms)
ZAB-Referenz: ZAB_DAB2026_3493

Sehr geehrter Herr van Dijk,

als begeisterter Verfechter hochperformanter, fehlertoleranter Rechnersysteme verfolge ich die bahnbrechenden lithographischen Innovationen von ASML seit vielen Jahren. Mit profundem Fachwissen in verteilten Echtzeitsystemen, Go, Rust und extrem skalierten Datenströmen möchte ich Ihr Entwicklungsteam in Veldhoven/Eindhoven verstärken.

Meine akademischen Qualifikationen sind durch die deutsche Zentralstelle für ausländisches Bildungswesen (ZAB_DAB2026_3493) als vollwertiger Master of Science akkreditiert, was auch im niederländischen Kennismigranten-Verfahren sowie bei der Beantragung der 30%-Steuerregelung eine zügige administrative Anerkennung garantiert.

Gerne überzeuge ich Sie in einem persönlichen Fachgespräch von meiner Eignung.

Mit besten Grüßen

Alexander Mercer`,
    coverLetterTemplateEN: `Alexander Mercer
Leopoldstraße 142, 80804 Munich, Germany
Email: a.mercer.architect@tech-lead.eu | Phone: +49 89 4529 8812

ASML Holding N.V.
Attn: Wouter van Dijk, D&E Software Talent Lead
De Run 6501, 5504 DR Veldhoven, The Netherlands

Application for Lead Distributed Systems Engineer (Ref: ASML-D&E-2026)
Formal Qualification Reference: ZAB_DAB2026_3493 (M.Sc. Equivalence)

Dear Mr. van Dijk,

I am writing to express my eager interest in the Lead Distributed Systems Engineer position within ASML’s Development & Engineering division. Engineering software that operates at the physical limits of semiconductor fabrication requires unmatched rigor, and I have dedicated the past decade to architecting resilient, sub-millisecond distributed fabrics.

With an accredited Master’s degree verified under ZAB dossier ZAB_DAB2026_3493 and extensive experience designing high-throughput data backbones (Go, Rust, Kafka), I am well-positioned to contribute immediately to your EUV telemetry architecture. Furthermore, I qualify fully for the Dutch Highly Skilled Migrant scheme and 30% tax facility.

Key strengths I offer:
• Extensive track record in ultra-low latency streaming systems and zero-loss partition handling.
• Mastery of container orchestration, hardware telemetry integration, and Linux internals.
• Leadership driving engineering best practices across multinational, multidisciplinary teams.

I welcome the opportunity to discuss how my systems engineering background aligns with ASML’s strategic roadmap.

Best regards,

Alexander Mercer`
  },
  {
    id: 'job-de-003',
    title: 'Staff Platform Engineer & Sovereign Cloud Strategist',
    company: 'Deutsche Telekom AG',
    companyLogoText: 'DT',
    companyLogoBg: 'bg-pink-600',
    city: 'Bonn / Cologne',
    country: 'Germany',
    flag: '🇩🇪',
    region: 'Germany',
    source: 'BA',
    sourceUrl: 'https://jobboerse.arbeitsagentur.de/telekom-sovereign-cloud',
    matchScore: 92,
    salaryRange: '€98,000 - €118,000 + Tarif Plus',
    workMode: 'Remote (DE/EU)',
    postedTimeAgo: '1h ago',
    isNew: false,
    statusRecommendation: 'APPLY NOW',
    statusReason: '92% Strong Match: Listed on Bundesagentur für Arbeit (BA) Portal. Explicit demand for EU data sovereignty compliance and recognized degree equivalence (Ref: ZAB_DAB2026_3493).',
    techStack: ['OpenShift', 'Kubernetes', 'Python', 'BSI IT-Grundschutz', 'Ansible', 'Terraform'],
    visaSupport: 'Direct corporate support for EU Blue Card (§18g) with federal administration fast track.',
    recruiter: {
      name: 'Katrin Weiss',
      title: 'Senior Recruiter Platform & Cloud Innovation',
      email: 'k.weiss@telekom.de',
      phone: '+49 228 181 0',
      department: 'T-Systems Sovereign Cloud & Core Engineering',
      postalAddress: 'Deutsche Telekom AG, Friedrich-Ebert-Allee 140, 53113 Bonn',
      hiringTone: 'Corporate DIN 5008',
      directContactNotes: 'Values structured German DIN standard, IT-Grundschutz awareness, and proven OpenShift migrations.'
    },
    jobDescriptionSnippet: 'Help build Europe’s sovereign telecommunications cloud layer. Working closely with GAIA-X standards, resilient infrastructure as code, and automated security verification.',
    coverLetterTemplateDE: `Alexander Mercer
Leopoldstraße 142
80804 München
E-Mail: a.mercer.architect@tech-lead.eu

Deutsche Telekom AG
Frau Katrin Weiss
Friedrich-Ebert-Allee 140
53113 Bonn

München, 19. September 2026

Bewerbung als Staff Platform Engineer & Sovereign Cloud Strategist
Referenz: DT-BONN-SOV-2026 | ZAB-Akkreditierung: ZAB_DAB2026_3493

Sehr geehrte Frau Weiss,

die Etablierung europäischer Datensouveränität und widerstandsfähiger Telekommunikationsinfrastrukturen ist eine der zentralen Aufgaben unserer Zeit. Als Cloud Architect mit tiefem Verständnis für BSI IT-Grundschutz, OpenShift-Cluster und deklarative Infrastruktur bewerbe ich mich mit großem Engagement um die Position im Bereich Sovereign Cloud bei der Deutschen Telekom AG.

Mit der offiziellen Gleichwertigkeitsfeststellung der ZAB (Dossier: ZAB_DAB2026_3493) sowie bestehendem Blue-Card-Vorbescheid bringe ich neben fundierter technischer Seniorität die volle rechtliche Einsatzbereitschaft für deutsche Standorte mit.

Ich freue mich über die Einladung zu einem ersten Vorstellungsgespräch.

Mit freundlichen Grüßen

Alexander Mercer`,
    coverLetterTemplateEN: `Alexander Mercer
Leopoldstraße 142, 80804 Munich, Germany
Email: a.mercer.architect@tech-lead.eu

Deutsche Telekom AG
Attn: Katrin Weiss, Platform & Cloud Talent Team
Friedrich-Ebert-Allee 140, 53113 Bonn, Germany

Subject: Application for Staff Platform Engineer (Ref: DT-BONN-SOV-2026)
Reference ID: ZAB_DAB2026_3493

Dear Ms. Weiss,

I am writing to express my strong interest in the Staff Platform Engineer & Sovereign Cloud Strategist role at Deutsche Telekom. Creating resilient, sovereign cloud environments adhering to EU standards represents the most impactful frontier in European infrastructure.

Having directed enterprise cloud rollouts and hardened Kubernetes/OpenShift deployments, I offer the technical rigor needed for T-Systems' critical architectures. My credentials are fully evaluated by the KMK ZAB (Ref: ZAB_DAB2026_3493), satisfying all federal hiring benchmarks.

I welcome the opportunity to discuss my contributions in an interview.

Sincerely,

Alexander Mercer`
  },
  {
    id: 'job-de-004',
    title: 'Principal Machine Learning Engineer (Skilled Immigration Fast-Track)',
    company: 'SAP SE',
    companyLogoText: 'SAP',
    companyLogoBg: 'bg-sky-700',
    city: 'Walldorf / Munich',
    country: 'Germany',
    flag: '🇩🇪',
    region: 'Germany',
    source: 'Make it in Germany',
    sourceUrl: 'https://make-it-in-germany.com/jobs/sap-ml-engineer-walldorf',
    matchScore: 94,
    salaryRange: '€115,000 - €138,000 + LTI Equity',
    workMode: 'Hybrid',
    postedTimeAgo: '2h ago',
    isNew: false,
    statusRecommendation: 'APPLY NOW',
    statusReason: '94% Priority Match: Certified under official "Make it in Germany" portal with dedicated fast-track visa processing for recognized specialists (ZAB_DAB2026_3493 verified).',
    techStack: ['PyTorch', 'Python', 'SAP BTP', 'vLLM', 'Ray', 'CUDA'],
    visaSupport: 'Priority expedited processing through German Federal Foreign Office portal.',
    recruiter: {
      name: 'Markus Vogel',
      title: 'Lead Recruiter Enterprise AI & Global Talent',
      email: 'markus.vogel@sap.com',
      phone: '+49 6227 747474',
      department: 'SAP Business AI & Platform Foundations',
      postalAddress: 'SAP SE, Dietmar-Hopp-Allee 16, 69190 Walldorf',
      hiringTone: 'Modern Agile',
      directContactNotes: 'Directly manages Fast-Track visa integration. Loves direct candidate repos and measurable model deployment stats.'
    },
    jobDescriptionSnippet: 'Orchestrating enterprise foundation models across the SAP Business Technology Platform (BTP). Serving tens of thousands of global enterprise clients with strict latency and privacy guarantees.',
    coverLetterTemplateDE: `Alexander Mercer
Leopoldstraße 142
80804 München
E-Mail: a.mercer.architect@tech-lead.eu

SAP SE
Herrn Markus Vogel
Dietmar-Hopp-Allee 16
69190 Walldorf

Bewerbung als Principal Machine Learning Engineer (Business AI)
Portal: Make it in Germany | ZAB-Dossier: ZAB_DAB2026_3493

Sehr geehrter Herr Vogel,

die Einbindung generativer Unternehmens-KI in geschäftskritische SAP-Systeme markiert einen Quantensprung in der europäischen Softwareindustrie. Als Machine Learning Systems Engineer mit Fokus auf Distributed Training, vLLM-Optimierung und Enterprise-Schnittstellen möchte ich das Business-AI-Team von SAP maßgeblich verstärken.

Über das offizielle 'Make it in Germany'-Portal auf Ihre Vakanz aufmerksam geworden, bringe ich mit der Gleichwertigkeitsbescheinigung der ZAB (Dossier-ID: ZAB_DAB2026_3493) sowie meiner langjährigen Praxiserfahrung alle Voraussetzungen mit, um sofort produktiv zu starten.

Über ein Fachgespräch mit Ihnen freue ich mich sehr.

Mit freundlichen Grüßen

Alexander Mercer`,
    coverLetterTemplateEN: `Alexander Mercer
Leopoldstraße 142, 80804 Munich, Germany
Email: a.mercer.architect@tech-lead.eu

SAP SE
Attn: Markus Vogel, Enterprise AI Talent Lead
Dietmar-Hopp-Allee 16, 69190 Walldorf, Germany

Re: Principal Machine Learning Engineer - Fast-Track Channel
Verification Identifier: ZAB_DAB2026_3493

Dear Mr. Vogel,

I am writing to submit my application for the Principal Machine Learning Engineer role within SAP Business AI, identified via the official Make it in Germany initiative. 

Having engineered large-scale distributed inference infrastructure (vLLM, Ray, PyTorch) capable of satisfying stringent latency and zero-data-leakage mandates, I am thrilled by SAP's vision for enterprise-grounded foundation models. My academic equivalency is officially validated under ZAB file ZAB_DAB2026_3493, assuring seamless administrative onboarding.

I look forward to discussing how my experience can accelerate SAP's Business AI roadmap.

Sincerely,

Alexander Mercer`
  },
  {
    id: 'job-be-005',
    title: 'Senior Fintech Payments Architect & Core Engineer',
    company: 'Adyen N.V. (Belux Hub)',
    companyLogoText: 'ADY',
    companyLogoBg: 'bg-emerald-700',
    city: 'Brussels',
    country: 'Belgium',
    flag: '🇧🇪',
    region: 'Belgium',
    source: 'LinkedIn',
    sourceUrl: 'https://linkedin.com/jobs/adyen-brussels-fintech',
    matchScore: 89,
    salaryRange: '€95,000 - €120,000 + Stock Options',
    workMode: 'Hybrid',
    postedTimeAgo: '3h ago',
    isNew: false,
    statusRecommendation: 'APPLY NOW',
    statusReason: '89% High Alignment: Benelux financial hub expansion, single-platform architecture, high transaction throughput with strict uptime expectations.',
    techStack: ['Java', 'Go', 'PostgreSQL', 'Kafka', 'Docker', 'Distributed Consensus'],
    visaSupport: 'Belgian Single Permit (Arbeidskaart / Permis Unique) fast track supported.',
    recruiter: {
      name: 'Sophie De Smet',
      title: 'Talent Acquisition Partner Benelux',
      email: 'sophie.desmet@adyen.com',
      phone: '+32 2 894 4000',
      department: 'Global Processing & Benelux Commercial Architecture',
      postalAddress: 'Adyen Belux, Rue Royale 145, 1000 Brussels, Belgium',
      hiringTone: 'Modern Agile',
      directContactNotes: 'Appreciates pragmatic engineers who talk about real transaction anomalies, reliability, and code ownership.'
    },
    jobDescriptionSnippet: 'Scaling payment pipelines across Benelux and global acquirers. Maintaining sub-200ms authorization latency while continuously preventing fraudulent transactions.',
    coverLetterTemplateDE: `Alexander Mercer
Leopoldstraße 142, 80804 München, Deutschland
E-Mail: a.mercer.architect@tech-lead.eu

Adyen Belux
Frau Sophie De Smet
Rue Royale 145, 1000 Brüssel, Belgien

Bewerbung als Senior Fintech Payments Architect
Akkreditierung: ZAB_DAB2026_3493

Sehr geehrte Frau De Smet,

Adyens kompromissloser Ansatz einer einheitlichen, hochskalierten Zahlungsplattform setzt weltweit Maßstäbe. Mit langjähriger Erfahrung in der Realisierung fehlertoleranter Transaktionssysteme und verteilter Datenströme bewerbe ich mich für Ihren Standort in Brüssel.

Mit meiner durch die ZAB akkreditierten M.Sc.-Urkunde (Referenz: ZAB_DAB2026_3493) und mehrjähriger Führungserfahrung freue ich mich darauf, Ihre Expansion in den Benelux-Märkten aktiv mitzugestalten.

Mit freundlichen Grüßen

Alexander Mercer`,
    coverLetterTemplateEN: `Alexander Mercer
Leopoldstraße 142, 80804 Munich, Germany
Email: a.mercer.architect@tech-lead.eu | Phone: +49 89 4529 8812

Adyen Belux
Attn: Sophie De Smet, Talent Partner
Rue Royale 145, 1000 Brussels, Belgium

Subject: Application for Senior Fintech Payments Architect
Credential Dossier: ZAB_DAB2026_3493

Dear Ms. De Smet,

I am writing to express my strong enthusiasm for the Senior Fintech Payments Architect opportunity at Adyen Brussels. Adyen's unified architecture and relentless engineering culture represent the gold standard for global financial processing.

Having architected high-throughput transaction backbones and distributed messaging pipelines with 99.999% reliability, I am eager to contribute to your core processing engines. My academic background is certified under KMK ZAB dossier ZAB_DAB2026_3493, enabling smooth administrative transition across EU jurisdictions.

Thank you for your consideration. I look forward to connecting with your team.

Warm regards,

Alexander Mercer`
  },
  {
    id: 'job-lu-006',
    title: 'Lead Cloud Security & Regulatory Compliance Architect',
    company: 'European Clearing & Custody Hub (Clearstream/DB)',
    companyLogoText: 'CS',
    companyLogoBg: 'bg-indigo-600',
    city: 'Luxembourg City',
    country: 'Luxembourg',
    flag: '🇱🇺',
    region: 'Luxembourg',
    source: 'StepStone',
    sourceUrl: 'https://stepstone.de/jobs/clearstream-luxembourg-cloud',
    matchScore: 88,
    salaryRange: '€110,000 - €132,000 + Expat Allowance',
    workMode: 'On-site',
    postedTimeAgo: '4h ago',
    isNew: false,
    statusRecommendation: 'APPLY NOW',
    statusReason: '88% High Alignment: DORA (Digital Operational Resilience Act) and CSSF compliant infrastructure in Luxembourg financial district.',
    techStack: ['Kubernetes', 'AWS GovCloud', 'DORA', 'Terraform', 'Vault', 'Zero Trust'],
    visaSupport: 'Full EU cross-border mobility and Luxembourg residence permit sponsorship.',
    recruiter: {
      name: 'Jean-Marc Laurent',
      title: 'Head of IT Risk & Security Recruitment',
      email: 'jm.laurent@clearstream.lu',
      phone: '+352 243 3000',
      department: 'Core Post-Trade Architecture & Cloud Governance',
      postalAddress: 'Clearstream Banking S.A., 42 Avenue J.F. Kennedy, L-1855 Luxembourg',
      hiringTone: 'Corporate DIN 5008',
      directContactNotes: 'Requires formal cover letter highlighting regulatory understanding (CSSF, DORA) and ZAB diploma recognition.'
    },
    jobDescriptionSnippet: 'Lead the security architecture for securities settlement and collateral management systems under CSSF circulars and European DORA compliance frameworks.',
    coverLetterTemplateDE: `Alexander Mercer
Leopoldstraße 142
80804 München
E-Mail: a.mercer.architect@tech-lead.eu

Clearstream Banking S.A.
Herrn Jean-Marc Laurent
42 Avenue J.F. Kennedy
L-1855 Luxembourg

München, 19. September 2026

Bewerbung als Lead Cloud Security & Regulatory Compliance Architect
Referenz: CS-LUX-2026 | ZAB-Akkreditierung: ZAB_DAB2026_3493

Sehr geehrter Herr Laurent,

die Einhaltung europäischer Finanzregulatorien (insbesondere DORA und CSSF-Vorgaben) in Verbindung mit moderner Multi-Cloud-Automatisierung verlangt höchste architektonische Präzision. Als Senior Cloud Architect bewerbe ich mich mit großem Interesse für Ihren Standort in Luxemburg.

Mein formaler Bildungsabschluss ist durch die deutsche ZAB vollumfänglich als äquivalenter M.Sc. der Informatik festgestellt (Referenz: ZAB_DAB2026_3493), was beste Voraussetzungen für die offizielle Sicherheits- und Zuverlässigkeitsüberprüfung im Bankensektor bietet.

Ich freue mich über Ihre Einladung zu einem Fachgespräch.

Mit freundlichen Grüßen

Alexander Mercer`,
    coverLetterTemplateEN: `Alexander Mercer
Leopoldstraße 142, 80804 Munich, Germany
Email: a.mercer.architect@tech-lead.eu

Clearstream Banking S.A.
Attn: Jean-Marc Laurent, IT Risk & Security
42 Avenue J.F. Kennedy, L-1855 Luxembourg

Re: Application for Lead Cloud Security Architect (DORA/CSSF Focus)
Verification Reference: ZAB_DAB2026_3493

Dear Mr. Laurent,

I am writing to present my candidacy for the Lead Cloud Security & Regulatory Compliance Architect position at Clearstream Banking Luxembourg. Ensuring institutional stability while migrating core custody systems to modern secure cloud paradigms is a mission I am exceptionally qualified to advance.

With deep grounding in Zero-Trust, automated infrastructure governance, and verified academic credentials under ZAB file ZAB_DAB2026_3493, I can seamlessly interface with CSSF compliance officers and engineering teams alike.

I welcome the opportunity to discuss my background in detail.

Sincerely,

Alexander Mercer`
  },
  {
    id: 'job-de-007',
    title: 'Junior PHP / WordPress Webmaster',
    company: 'Local Marketing Agentur Süd',
    companyLogoText: 'LM',
    companyLogoBg: 'bg-zinc-700',
    city: 'Augsburg',
    country: 'Germany',
    flag: '🇩🇪',
    region: 'Germany',
    source: 'BA',
    sourceUrl: 'https://jobboerse.arbeitsagentur.de/local-marketing-augsburg',
    matchScore: 34,
    salaryRange: '€38,000 - €44,000',
    workMode: 'On-site',
    postedTimeAgo: '5h ago',
    isNew: false,
    statusRecommendation: 'SKIP',
    statusReason: '🔴 Overqualified & Severe Mismatch (34% Score): Target compensation is 65% below Senior Architect baseline. Stacks around legacy PHP/WordPress rather than Cloud/AI. Blue Card minimum salary threshold not met.',
    techStack: ['PHP 7.4', 'WordPress', 'jQuery', 'MySQL', 'CSS3'],
    visaSupport: 'No visa sponsorship available. Standard regional contract.',
    recruiter: {
      name: 'Tobias Meier',
      title: 'Inhaber & Agenturleiter',
      email: 'info@local-marketing-sued.de',
      phone: '+49 821 55012',
      department: 'Webdesign & Content Management',
      postalAddress: 'Maximilianstraße 12, 86150 Augsburg',
      hiringTone: 'Corporate DIN 5008',
      directContactNotes: 'Seeking junior content uploader.'
    },
    jobDescriptionSnippet: 'Pflege bestehender WordPress-Websites für regionale Handwerksbetriebe. Erstellung von Child-Themes und Einpflegen von Produktfotos.',
    coverLetterTemplateDE: `Alexander Mercer
Leopoldstraße 142, 80804 München
(Bewerbung nicht empfohlen - Profil-Überqualifikation nach KI-Systemanalyse)`,
    coverLetterTemplateEN: `Alexander Mercer
Leopoldstraße 142, 80804 Munich, Germany
(Application skipped - Overqualified profile criteria recommendation)`
  }
];
