export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] };

export type LegalSection = {
  heading: string;
  blocks: ContentBlock[];
};

export type LegalDoc = {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export const legalDocs: LegalDoc[] = [
  // ─── Document 01 ─────────────────────────────────────────────────────────────
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your personal information.',
    lastUpdated: 'May 2026',
    intro:
      'Aneeras LLP (hereinafter Aneeras, we, our, or us) is committed to protecting the privacy of all users (you or User) of Tripknot, a travel discovery mobile application and website operated by Aneeras (collectively, the Platform). This Privacy Policy explains what personal information we collect, how we use it, how we share it, and the rights you have over it. By using the Platform, you agree to the terms of this Privacy Policy. Tripknot is free for all end users. Aneeras does not collect payment information from users. All commercial arrangements are with business operators only.',
    sections: [
      {
        heading: '2.1 Information You Provide Directly',
        blocks: [
          {
            type: 'ul',
            items: [
              'Full name, email address, phone number, and location during account registration',
              'Profile photo, bio, travel preferences, and home location',
              'Communications you send to us including support requests and feedback',
              'Business listing information submitted by operators: name, address, category, photos, hours, and contact details',
            ],
          },
        ],
      },
      {
        heading: '2.2 Information Collected Automatically',
        blocks: [
          {
            type: 'ul',
            items: [
              'Device identifiers (IDFA on iOS, GAID on Android), IP address, operating system, and browser type',
              'App usage data: pages viewed, searches performed, listings clicked, and time spent on features',
              'Location data (with your permission): GPS coordinates for trip planning and nearby listing discovery',
              'Log data: crash reports, performance data, error logs, and timestamps',
              'Cookies and similar tracking technologies on the web platform',
            ],
          },
        ],
      },
      {
        heading: '2.3 Information from Third Parties',
        blocks: [
          {
            type: 'ul',
            items: [
              'If you sign in via Google or Apple, we receive your name, email, and profile photo from those providers',
              'Publicly available travel and geographic data from mapping and tourism APIs',
            ],
          },
        ],
      },
      {
        heading: '3. How We Use Your Information',
        blocks: [
          {
            type: 'ul',
            items: [
              'To create, maintain, and manage your account on the Tripknot Platform',
              'To provide trip planning, itinerary generation, map-based discovery, and personalized travel recommendations',
              'To display and manage business listings submitted by operators',
              'To send transactional emails, notifications, and account alerts',
              'To send promotional communications about features and travel content — you may opt out at any time',
              'To analyze usage and improve the functionality, safety, and design of the Platform',
              'To detect and prevent fraudulent activity, abuse, and security threats',
              'To comply with legal obligations applicable to Aneeras and enforce our policies',
            ],
          },
        ],
      },
      {
        heading: '4.1 With Service Providers',
        blocks: [
          {
            type: 'p',
            text: 'Aneeras shares information with trusted vendors who help us operate the Tripknot Platform: cloud hosting, analytics, email delivery, and customer support tools. They are contractually prohibited from using your data for any other purpose.',
          },
        ],
      },
      {
        heading: '4.2 With Business Operators on Tripknot',
        blocks: [
          {
            type: 'p',
            text: 'If you interact with a business listing on Tripknot, we may share your name and contact information with that business solely to fulfil your request. We do not share payment data as end users are not charged.',
          },
        ],
      },
      {
        heading: '4.3 For Legal Reasons',
        blocks: [
          {
            type: 'p',
            text: 'We may disclose your information if required by law, court order, or to protect the rights, property, or safety of Aneeras, Tripknot users, or the public.',
          },
        ],
      },
      {
        heading: '4.4 Business Transfers',
        blocks: [
          {
            type: 'p',
            text: 'In a merger, acquisition, restructuring, or sale of assets involving Aneeras, your information may transfer to the successor entity under the same privacy protections.',
          },
        ],
      },
      {
        heading: '5. Data Retention',
        blocks: [
          {
            type: 'p',
            text: 'Aneeras retains your personal information for as long as your account is active or as needed to operate the Tripknot Platform. Upon account deletion, we delete or anonymize your data within 30 days, except where retention is required by Indian law or for legitimate purposes such as fraud prevention or tax compliance.',
          },
        ],
      },
      {
        heading: '6. Your Privacy Rights',
        blocks: [
          {
            type: 'ul',
            items: [
              'Right to Access: Request a copy of the personal data Aneeras holds about you',
              'Right to Rectification: Request correction of inaccurate or incomplete data',
              'Right to Erasure: Request deletion of your personal data',
              'Right to Restrict Processing: Request that we limit how we use your data',
              'Right to Data Portability: Receive your data in a machine-readable format',
              'Right to Object: Object to processing, including for direct marketing',
              'Right to Withdraw Consent: Withdraw consent at any time',
            ],
          },
          {
            type: 'p',
            text: 'To exercise these rights, contact Aneeras at support@aneeras.com. We will respond within 30 days.',
          },
        ],
      },
      {
        heading: '7. Security',
        blocks: [
          {
            type: 'p',
            text: 'Aneeras implements AES-256 encryption at rest, TLS 1.2+ in transit, role-based access controls, and regular security audits to protect your information. No system is completely secure and we cannot guarantee absolute security.',
          },
        ],
      },
      {
        heading: "8. Children's Privacy",
        blocks: [
          {
            type: 'p',
            text: 'The Tripknot Platform is not directed to children under 13 (or 16 in the EEA). Aneeras does not knowingly collect personal information from children. Contact support@tripknot.in if you believe a child has submitted their information.',
          },
        ],
      },
      {
        heading: '9. Changes to This Policy',
        blocks: [
          {
            type: 'p',
            text: 'Aneeras may update this Privacy Policy at any time. Material changes will be notified via the Platform and, where required by law, by direct notification. Continued use of the Tripknot Platform after changes constitutes acceptance.',
          },
        ],
      },
      {
        heading: '10. Contact',
        blocks: [
          {
            type: 'p',
            text: 'Aneeras LLP — Product: Tripknot | Email: support@tripknot.in | Legal: support@aneeras.com | Website: www.tripknot.in',
          },
        ],
      },
    ],
  },

  // ─── Document 02 ─────────────────────────────────────────────────────────────
  {
    slug: 'terms-of-use',
    title: 'Terms of Use',
    description: 'Rules governing your use of the Tripknot Platform.',
    lastUpdated: 'May 2026',
    intro:
      'These Terms of Use (Terms) constitute a legally binding agreement between you and Aneeras LLP, the developer and operator of the Tripknot travel discovery platform (the Platform or the App). By downloading, installing, or using the Platform, you confirm you have read, understood, and agree to be bound by these Terms. If you do not agree, stop using the Platform immediately. The Tripknot Platform is completely free for all end users. Aneeras does not collect payment information from users. All fees are charged to business operators only.',
    sections: [
      {
        heading: '2. Eligibility',
        blocks: [
          {
            type: 'ul',
            items: [
              'You must be at least 18 years of age to create an account on Tripknot',
              'You must have the legal capacity to enter into a binding contract',
              'If using the Platform on behalf of a business, you confirm you have authority to bind that business',
              'Use of the Platform is void where prohibited by applicable law',
            ],
          },
        ],
      },
      {
        heading: '3.1 Registration',
        blocks: [
          {
            type: 'p',
            text: 'You must register an account to access full Platform features. You agree to provide accurate, complete, and current information and to keep your account details updated at all times.',
          },
        ],
      },
      {
        heading: '3.2 Account Security',
        blocks: [
          {
            type: 'p',
            text: 'You are solely responsible for the confidentiality of your credentials and all activity under your account. Notify Aneeras immediately at support@tripknot.in of any unauthorized use.',
          },
        ],
      },
      {
        heading: '3.3 Termination',
        blocks: [
          {
            type: 'p',
            text: 'Aneeras may suspend or terminate your account if you violate these Terms, engage in fraudulent activity, or pose a risk to other users or Platform integrity.',
          },
        ],
      },
      {
        heading: '4. The Platform is Free for Users',
        blocks: [
          {
            type: 'p',
            text: "End users are not charged any fees for using Tripknot, accessing listings, creating itineraries, or using any feature currently available. Aneeras's commercial model is entirely operator-facing. If a paid user feature is introduced in future, it will be announced with prior notice and governed by updated Terms.",
          },
        ],
      },
      {
        heading: '5. Prohibited Conduct',
        blocks: [
          { type: 'p', text: 'You agree NOT to:' },
          {
            type: 'ul',
            items: [
              'Use the Platform for any unlawful, harmful, fraudulent, or deceptive purpose',
              'Post false, misleading, defamatory, or infringing content',
              'Impersonate any person, entity, or representative of Aneeras or Tripknot',
              "Scrape or systematically harvest data from the Platform without Aneeras's written consent",
              'Attempt to gain unauthorized access to the Platform, servers, or databases',
              'Introduce malware, viruses, or other malicious code',
              'Use automated bots or scripts to interact with the Platform',
              'Reproduce, redistribute, or resell any Platform content without authorization',
            ],
          },
        ],
      },
      {
        heading: '6. Intellectual Property',
        blocks: [
          {
            type: 'p',
            text: 'All content on the Tripknot Platform — including the Tripknot name, logo, design, text, graphics, software, and the Aneeras name and identity — is the exclusive property of Aneeras LLP or its licensors and is protected under applicable Indian and international intellectual property laws. You are granted a limited, non-exclusive, non-transferable, revocable license to use the Platform for its intended purposes only.',
          },
        ],
      },
      {
        heading: '7. User-Generated Content',
        blocks: [
          {
            type: 'p',
            text: "By submitting content such as reviews, photos, itineraries, and comments to Tripknot, you grant Aneeras a worldwide, royalty-free, perpetual, irrevocable, non-exclusive license to use, reproduce, modify, distribute, and display that content in connection with the Platform and Aneeras's operations.",
          },
        ],
      },
      {
        heading: '8. Third-Party Links and Services',
        blocks: [
          {
            type: 'p',
            text: 'The Tripknot Platform may link to or integrate third-party services. Aneeras is not responsible for their content or practices. Your use of third-party services is governed by their own terms and privacy policies.',
          },
        ],
      },
      {
        heading: '9. Disclaimers',
        blocks: [
          {
            type: 'p',
            text: 'THE TRIPKNOT PLATFORM IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. ANEERAS DOES NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED OR ERROR-FREE. TRAVEL INFORMATION IS FOR INFORMATIONAL PURPOSES ONLY AND SHOULD NOT BE RELIED UPON AS PROFESSIONAL ADVICE.',
          },
        ],
      },
      {
        heading: '10. Limitation of Liability',
        blocks: [
          {
            type: 'p',
            text: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ANEERAS LLP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES ARISING FROM YOUR USE OF THE TRIPKNOT PLATFORM. ANEERAS'S TOTAL CUMULATIVE LIABILITY TO YOU SHALL NOT EXCEED INR 10,000.",
          },
        ],
      },
      {
        heading: '11. Indemnification',
        blocks: [
          {
            type: 'p',
            text: 'You agree to indemnify and hold harmless Aneeras LLP, its officers, directors, employees, and agents from any claims, damages, liabilities, and costs (including reasonable legal fees) arising from: (a) your use or misuse of the Platform; (b) your violation of these Terms; (c) your violation of any third-party rights; or (d) any content you submit to Tripknot.',
          },
        ],
      },
      {
        heading: '12. Governing Law and Dispute Resolution',
        blocks: [
          {
            type: 'p',
            text: 'These Terms are governed by the laws of India. Any dispute shall be resolved through binding arbitration under the Arbitration and Conciliation Act, 1996, with seat and venue in Pondicherry, India, conducted in English by a sole mutually appointed arbitrator. Either party may seek interim relief from a competent Indian court. The courts of Pondicherry shall have exclusive jurisdiction for non-arbitrable matters.',
          },
        ],
      },
      {
        heading: '13. Modifications',
        blocks: [
          {
            type: 'p',
            text: 'Aneeras may modify these Terms at any time. Updated Terms will be posted on the Tripknot Platform with a revised effective date. Continued use after the effective date constitutes acceptance.',
          },
        ],
      },
      {
        heading: '14. Contact',
        blocks: [
          {
            type: 'p',
            text: 'Aneeras LLP — Product: Tripknot | Email: support@tripknot.in | Legal: support@aneeras.com | Website: www.tripknot.in',
          },
        ],
      },
    ],
  },

  // ─── Document 03 ─────────────────────────────────────────────────────────────
  {
    slug: 'data-privacy',
    title: 'Data Privacy Policy',
    description: 'DPDP Act 2023, GDPR, and CCPA compliance details.',
    lastUpdated: 'May 2026',
    intro:
      "This Data Privacy Policy supplements the Privacy Policy and provides detail on how Aneeras LLP, as the operator of the Tripknot Platform, complies with India's Digital Personal Data Protection Act, 2023 (DPDP Act), the General Data Protection Regulation (GDPR), and the California Consumer Privacy Act (CCPA). As Tripknot is a free platform for end users, Aneeras does not process user payment data. India's DPDP Act is the primary applicable law for Tripknot's Indian user base. Aneeras acts as the Data Fiduciary under this law.",
    sections: [
      {
        heading: '2.1 Data Fiduciary Declaration',
        blocks: [
          {
            type: 'p',
            text: 'Aneeras LLP, as the developer and operator of the Tripknot Platform, acts as the Data Fiduciary under the DPDP Act, 2023, and is responsible for the processing of personal data of individuals (Data Principals) who use Tripknot within India.',
          },
        ],
      },
      {
        heading: '2.2 Consent',
        blocks: [
          {
            type: 'p',
            text: 'Aneeras obtains free, specific, informed, unconditional, and unambiguous consent from Data Principals before processing their personal data, through a clear plain-language notice presented in the Tripknot app at registration or first use. You may withdraw consent at any time by contacting legal@aneeras.com.',
          },
        ],
      },
      {
        heading: '2.3 Rights of Data Principals',
        blocks: [
          {
            type: 'ul',
            items: [
              'Right to Information: Obtain information about personal data processed by Aneeras via Tripknot',
              'Right to Correction and Erasure: Correct inaccurate data and request erasure of data no longer needed',
              'Right to Grievance Redressal: Have grievances addressed by Aneeras within legally prescribed timelines',
              'Right to Nominate: Nominate someone to exercise these rights in the event of death or incapacity',
            ],
          },
        ],
      },
      {
        heading: '2.4 Our Obligations as Data Fiduciary',
        blocks: [
          {
            type: 'ul',
            items: [
              'Maintain complete and up-to-date records of all personal data processed through Tripknot',
              'Implement appropriate technical and organizational security measures for all Tripknot user data',
              'Notify the Data Protection Board and affected users of any data breach as prescribed by law',
              'Not retain personal data beyond the period necessary for stated purposes',
              "Designate and publicly name a Grievance Officer at Aneeras prior to Tripknot's public launch",
            ],
          },
        ],
      },
      {
        heading: '2.5 Cross-Border Data Transfers',
        blocks: [
          {
            type: 'p',
            text: 'Any transfer of personal data outside India collected through Tripknot will be conducted only to countries permitted by the Central Government under the DPDP Act, or through mechanisms prescribed by law.',
          },
        ],
      },
      {
        heading: '3. Categories of Personal Data Processed',
        blocks: [
          {
            type: 'ul',
            items: [
              'Identifiers: Name, email, phone, IP address, device ID, Tripknot username',
              'Usage and Activity: Browsing history on Tripknot, searches, feature interactions, clickstream data',
              'Geolocation: GPS coordinates collected with consent for trip planning and discovery',
              'Inferences: Travel preferences, behavioral profiles, personalization data derived from Tripknot usage',
              'Operator Info (B2B only): Business name, category, professional contact details of listing operators',
            ],
          },
        ],
      },
      {
        heading: '4. Processing Purposes and Legal Basis',
        blocks: [
          {
            type: 'ul',
            items: [
              'Account Management on Tripknot — Contractual necessity',
              'Trip Planning and Recommendations — Contractual necessity / Legitimate interests',
              'Business Listing Services — Contractual necessity',
              'Marketing Communications — Consent',
              'Analytics and Platform Improvement — Legitimate interests',
              'Fraud Prevention and Security — Legitimate interests / Legal obligation',
              'Legal Compliance (Aneeras) — Legal obligation',
            ],
          },
        ],
      },
      {
        heading: '5. GDPR Rights — EEA and UK Users',
        blocks: [
          {
            type: 'ul',
            items: [
              'Right of Access (Article 15): Obtain a copy of your personal data held by Aneeras',
              'Right to Rectification (Article 16): Correct inaccurate data',
              'Right to Erasure (Article 17): Request deletion under specific circumstances',
              'Right to Restriction (Article 18): Restrict processing in certain situations',
              'Right to Portability (Article 20): Receive data in a portable format',
              'Right to Object (Article 21): Object to processing based on legitimate interests',
            ],
          },
          {
            type: 'p',
            text: 'Contact support@aneeras.com to exercise GDPR rights. You may also lodge a complaint with your national data protection authority.',
          },
        ],
      },
      {
        heading: '6. CCPA Rights — California Users',
        blocks: [
          {
            type: 'ul',
            items: [
              'Right to Know: Categories and pieces of personal information collected in the past 12 months',
              'Right to Delete: Request deletion of personal information, subject to legal exceptions',
              'Right to Opt-Out of Sale: Aneeras does not sell your personal information',
              'Right to Non-Discrimination: Aneeras will not discriminate for exercising CCPA rights',
            ],
          },
        ],
      },
      {
        heading: '7. Data Security Measures',
        blocks: [
          {
            type: 'ul',
            items: [
              'AES-256 encryption for data at rest on all Tripknot servers',
              'TLS 1.2 or higher for all data in transit',
              'Role-based access controls and least-privilege principles across Aneeras systems',
              'Regular security assessments and vulnerability testing',
              'Data breach notification to regulators and users as required by law',
            ],
          },
        ],
      },
      {
        heading: '8. Contact',
        blocks: [
          {
            type: 'p',
            text: 'For all data privacy inquiries relating to the Tripknot Platform: Aneeras LLP | Email: support@aneeras.com | Website: www.tripknot.in',
          },
        ],
      },
    ],
  },

  // ─── Document 04 ─────────────────────────────────────────────────────────────
  {
    slug: 'business-listing-terms',
    title: 'Business Listing Terms',
    description: 'Terms for operators listing their business on Tripknot.',
    lastUpdated: 'May 2026',
    intro:
      'These Business Listing Terms govern the submission, publication, and management of business listings by operators (Operator, you) on the Tripknot Platform, developed and operated by Aneeras LLP. By submitting a business listing, you agree to these terms in addition to the General Terms of Use. Aneeras charges operators only. End users of the Tripknot Platform are never charged any fees.',
    sections: [
      {
        heading: '2. Eligibility to List',
        blocks: [
          {
            type: 'ul',
            items: [
              'You must be a legally registered business or an authorized representative of one',
              'Your business must operate lawfully under all applicable Indian and international laws',
              'You must have authority to bind the business to these terms',
              'Tourism businesses, hospitality establishments, attractions, tour operators, and travel service providers are eligible to list on Tripknot',
            ],
          },
        ],
      },
      {
        heading: '3.1 Mandatory Information',
        blocks: [
          {
            type: 'ul',
            items: [
              'Legal business name and DBA if applicable',
              'Physical address or service area',
              'Business category and subcategory',
              'Primary contact phone number or email',
              'Business description — 50 to 500 words',
              'Legal document proof of business',
              'Hours of operation',
            ],
          },
        ],
      },
      {
        heading: '3.2 Optional Information',
        blocks: [
          {
            type: 'ul',
            items: [
              'High-resolution photos or videos — must comply with Section 6',
              'Website URL and social media handles',
              'Pricing information, menus, or service catalogs',
              'Accessibility and amenity information',
            ],
          },
        ],
      },
      {
        heading: '4. Accuracy and Truthfulness',
        blocks: [
          {
            type: 'p',
            text: 'You represent and warrant that all listing information submitted to Tripknot is truthful, accurate, complete, and not misleading. You agree to update your listing whenever information changes. Aneeras reserves the right to remove or suspend listings containing false or misleading information.',
          },
        ],
      },
      {
        heading: '5. Prohibited Content',
        blocks: [
          {
            type: 'ul',
            items: [
              'False, misleading, or deceptive information about your business',
              'Content infringing any third-party intellectual property rights',
              'Discriminatory, offensive, obscene, or harassing content',
              'Content promoting illegal activities or products',
              'Fake reviews, manipulated ratings, or incentivized testimonials',
              'Competitor trademarks or brand names without authorization',
              'Spam, unsolicited promotional content, or undisclosed affiliate links',
            ],
          },
        ],
      },
      {
        heading: '6. Photos and Media',
        blocks: [
          {
            type: 'p',
            text: 'Photos submitted to Tripknot must be owned by or licensed to you, must accurately represent your business, be high-resolution (minimum 800 × 600 pixels), and free of competitor watermarks. By submitting photos, you grant Aneeras a perpetual, royalty-free license to display them on Tripknot and in related promotional materials.',
          },
        ],
      },
      {
        heading: '7. Reviews and Ratings',
        blocks: [
          {
            type: 'p',
            text: "User reviews on Tripknot are independent and not controlled by Aneeras. We will not remove legitimate negative reviews. Operators may flag reviews believed to violate our guidelines for investigation. Aneeras's moderation decisions are final. Offering incentives in exchange for reviews is strictly prohibited.",
          },
        ],
      },
      {
        heading: '8. Subscription Plans',
        blocks: [
          {
            type: 'p',
            text: 'Aneeras offers the following subscription plans for Tripknot operators:',
          },
          {
            type: 'ul',
            items: [
              'Starter Plan — FREE: Basic listing visibility on Tripknot',
              'Essential Plan — ~Rs.1,499 / month: Enhanced features and priority listing',
              'Growth Plan — ~Rs.2,499 / month: Advanced tools, maximum visibility and bookings',
            ],
          },
          {
            type: 'p',
            text: 'All prices are exclusive of applicable GST. Full billing, refund, auto-renewal, and cancellation terms are in the Terms and Conditions, Section 4. Aneeras reserves the right to modify plans with 30 days advance written notice to operators.',
          },
        ],
      },
      {
        heading: '9. Listing Approval and Moderation',
        blocks: [
          {
            type: 'p',
            text: 'All listings on Tripknot are subject to review and approval by Aneeras before publication. We may reject, modify, suspend, or remove any listing where it violates these Terms or applicable law. Operators will be notified of moderation actions and may appeal by contacting support@tripknot.in.',
          },
        ],
      },
      {
        heading: '10. Operator Responsibilities',
        blocks: [
          {
            type: 'ul',
            items: [
              'Maintain accurate and current listing information on Tripknot at all times',
              'Respond to user inquiries routed via the Platform in a timely and professional manner',
              'Comply with all applicable consumer protection, trade, tourism, and data protection laws',
              'Not engage in conduct that damages the reputation of Aneeras, Tripknot, or other operators',
            ],
          },
        ],
      },
      {
        heading: '11. Intellectual Property of Operators',
        blocks: [
          {
            type: 'p',
            text: 'You retain ownership of original content and trademarks submitted with your Tripknot listing. By submitting, you grant Aneeras a non-exclusive, royalty-free, worldwide license to display, reproduce, and distribute that content solely in connection with the Tripknot Platform.',
          },
        ],
      },
      {
        heading: '12. Indemnification by Operator',
        blocks: [
          {
            type: 'p',
            text: 'You agree to indemnify and hold harmless Aneeras LLP from any claims, damages, or liabilities arising from: (a) inaccurate or false listing content on Tripknot; (b) violation of these terms; (c) third-party claims from your business operations; or (d) intellectual property infringement through your submitted content.',
          },
        ],
      },
      {
        heading: '13. Termination of Listings',
        blocks: [
          {
            type: 'p',
            text: 'Either party may terminate a Tripknot listing at any time. Operators may request removal by emailing support@tripknot.in. Aneeras may remove listings with or without notice in cases of policy violation.',
          },
        ],
      },
    ],
  },

  // ─── Document 05 ─────────────────────────────────────────────────────────────
  {
    slug: 'terms-and-conditions',
    title: 'Terms and Conditions',
    description: 'General legal framework and operator billing terms.',
    lastUpdated: 'May 2026',
    intro:
      'These Terms and Conditions govern all aspects of your relationship with Aneeras LLP as the developer and operator of the Tripknot Platform, and are to be read with the Privacy Policy, Data Privacy Policy, Terms of Use, Business Listing Terms, EULA, and Cookie and Tracking Policy (collectively, the Agreement). In case of conflict, precedence is: (1) Data Privacy Policy; (2) Privacy Policy; (3) Business Listing Terms; (4) Terms and Conditions; (5) Terms of Use; (6) EULA; (7) Cookie and Tracking Policy.',
    sections: [
      {
        heading: '2. Account Registration',
        blocks: [
          {
            type: 'ul',
            items: [
              'Users must provide a valid email and create a secure password or use accepted third-party authentication',
              'Aneeras may require business verification for Operator accounts on Tripknot',
              'Each user may maintain only one personal account; multiple accounts for abuse or circumvention are prohibited',
              'Accounts are personal and non-transferable',
            ],
          },
        ],
      },
      {
        heading: '3. Platform Availability',
        blocks: [
          {
            type: 'p',
            text: 'Aneeras does not guarantee uninterrupted availability of Tripknot. We may update, modify, suspend, or discontinue features at any time, endeavouring to provide advance notice of material changes. Aneeras shall not be liable for downtime, service interruptions, or data loss resulting from maintenance or technical failures.',
          },
        ],
      },
      {
        heading: '4.1 Subscription Plans',
        blocks: [
          {
            type: 'p',
            text: 'This section applies to business operators only. End users of Tripknot are not subject to any payment obligations to Aneeras. Operators may subscribe to the Essential Plan (approximately Rs.1,499/month) or Growth Plan (approximately Rs.2,499/month). The Starter Plan is free.',
          },
        ],
      },
      {
        heading: '4.2 Billing Cycle',
        blocks: [
          {
            type: 'p',
            text: 'Paid subscriptions to Tripknot operator plans are billed monthly from the date of activation and auto-renew on the same date each month unless cancelled before renewal.',
          },
        ],
      },
      {
        heading: '4.3 Payment Methods',
        blocks: [
          {
            type: 'p',
            text: 'Aneeras accepts payments via credit card, debit card, UPI, net banking, and other methods available on the Tripknot Platform. All payments are processed by secure third-party payment gateways. Aneeras does not store full payment card details.',
          },
        ],
      },
      {
        heading: '4.4 Auto-Renewal',
        blocks: [
          {
            type: 'p',
            text: 'By subscribing, you authorize Aneeras to charge your payment method on a recurring monthly basis. You will receive a reminder before each renewal. Cancel before the renewal date to stop the next charge.',
          },
        ],
      },
      {
        heading: '4.5 Refund Policy',
        blocks: [
          {
            type: 'ul',
            items: [
              'Cancellation within 7 days of first subscription (new operator): Full refund of first month fee, subject to review by Aneeras',
              'Cancellation after 7 days of first subscription: No refund; access continues until billing cycle ends',
              'Aneeras terminates operator for policy violation: No refund',
              'Aneeras terminates operator without cause: Pro-rata refund for unused days in current cycle',
              'Duplicate charge or billing error by Aneeras: Full refund within 14 business days',
            ],
          },
          {
            type: 'p',
            text: 'Refund requests must be sent to support@aneeras.com within 30 days of the charge with proof of payment. Processed within 14 business days to the original payment method.',
          },
        ],
      },
      {
        heading: '4.6 Pricing Changes',
        blocks: [
          {
            type: 'p',
            text: 'Aneeras may change Tripknot subscription pricing with a minimum of 30 days written notice to operators. Continued use of a plan after the notice period constitutes acceptance of new pricing.',
          },
        ],
      },
      {
        heading: '4.7 GST and Invoicing',
        blocks: [
          {
            type: 'p',
            text: 'Subscription fees charged by Aneeras are exclusive of GST, which will be applied at the applicable rate. GST-compliant tax invoices will be issued by Aneeras within 3 business days of each successful payment and will be accessible via the Operator Dashboard.',
          },
        ],
      },
      {
        heading: '4.8 Failed Payments',
        blocks: [
          {
            type: 'p',
            text: 'If payment fails, Aneeras will retry up to three times over 7 days. If unresolved, your Tripknot plan will be downgraded to the Starter Plan. You will be notified by email of all failed payment attempts.',
          },
        ],
      },
      {
        heading: '4.9 Cancellation',
        blocks: [
          {
            type: 'p',
            text: 'Operators may cancel via the Tripknot Operator Dashboard or by emailing support@tripknot.in. Cancellation takes effect at the end of the current billing cycle. Listing data is retained by Aneeras for 30 days post-cancellation before permanent deletion.',
          },
        ],
      },
      {
        heading: '5. No Charges to End Users',
        blocks: [
          {
            type: 'p',
            text: 'The Tripknot Platform is free for all end users. Aneeras does not collect payment information from end users and processes no financial transactions with users. If a user-facing paid feature is introduced in future by Aneeras, separate terms will be published in advance.',
          },
        ],
      },
      {
        heading: '6. Future Booking Feature',
        blocks: [
          {
            type: 'p',
            text: 'Aneeras may introduce an in-app booking feature within Tripknot in a future phase. At that time, a separate Booking and Transaction Terms document will be published. Operators will be given advance notice before the booking feature is enabled for their listings on Tripknot.',
          },
        ],
      },
      {
        heading: '7. Intellectual Property',
        blocks: [
          {
            type: 'p',
            text: 'All Tripknot and Aneeras trademarks, service marks, logos, and trade names are the exclusive property of Aneeras LLP or respective owners. Unauthorized use may result in legal action. Report IP infringement to support@aneeras.com.',
          },
        ],
      },
      {
        heading: '8. DMCA and Content Takedown',
        blocks: [
          {
            type: 'p',
            text: 'To report copyrighted content reproduced without authorization on Tripknot, email support@aneeras.com with: (a) identification of the work; (b) URL of infringing material; (c) your contact information; (d) a statement of good faith belief; and (e) your signature. Aneeras will process valid notices under the IT Act, 2000.',
          },
        ],
      },
      {
        heading: '9. Dispute Resolution',
        blocks: [
          {
            type: 'ul',
            items: [
              'Informal Resolution: Submit dispute in writing to support@aneeras.com; Aneeras will respond within 15 business days',
              'Mediation: If unresolved, non-binding mediation via a mutually agreed mediator in Pondicherry, India',
              'Arbitration: If mediation fails, binding arbitration under the Arbitration and Conciliation Act, 1996, seated in Pondicherry, India, governed by Indian law',
            ],
          },
          {
            type: 'p',
            text: 'Class Action Waiver: You waive any right to bring claims as a class, collective, or representative action against Aneeras.',
          },
        ],
      },
      {
        heading: '10. Force Majeure',
        blocks: [
          {
            type: 'p',
            text: 'Aneeras is not liable for failure or delay in operating Tripknot due to causes beyond our reasonable control, including acts of God, war, terrorism, pandemic, government action, internet outages, or natural disasters.',
          },
        ],
      },
      {
        heading: '11. Entire Agreement',
        blocks: [
          {
            type: 'p',
            text: 'This Agreement, including all incorporated documents, constitutes the entire understanding between you and Aneeras LLP regarding the Tripknot Platform and supersedes all prior agreements on the subject matter.',
          },
        ],
      },
      {
        heading: '12. Contact',
        blocks: [
          {
            type: 'p',
            text: 'Aneeras LLP — Product: Tripknot | Email: support@tripknot.in | Legal: support@aneeras.com | Website: www.tripknot.in',
          },
        ],
      },
    ],
  },

  // ─── Document 06 ─────────────────────────────────────────────────────────────
  {
    slug: 'eula',
    title: 'End User License Agreement (EULA)',
    description: 'License terms required for Apple App Store and Google Play Store.',
    lastUpdated: 'May 2026',
    intro:
      'This End User License Agreement (EULA) is a legal agreement between you (End User) and Aneeras LLP (Licensor), the developer of the Tripknot travel discovery application (App). By downloading, installing, or using the App, you agree to this EULA. If you do not agree, do not download or use the App. Apple Inc. and Google LLC are third-party beneficiaries to this EULA and may enforce it against you directly.',
    sections: [
      {
        heading: '2. License Grant',
        blocks: [
          {
            type: 'p',
            text: 'Aneeras LLP grants you a limited, non-exclusive, non-transferable, revocable license to download and install the Tripknot App on devices you own or control, and to use the App for your personal, non-commercial purposes. The App is licensed, not sold. Aneeras retains all ownership and intellectual property rights in and to the App.',
          },
        ],
      },
      {
        heading: '3. The App is Free to Use',
        blocks: [
          {
            type: 'p',
            text: "The Tripknot App is provided free of charge to end users. There are no in-app purchases, premium user subscriptions, or charges levied on end users. Aneeras's commercial model is operator-facing only, and this EULA imposes no payment obligations on you.",
          },
        ],
      },
      {
        heading: '4. Restrictions',
        blocks: [
          {
            type: 'ul',
            items: [
              'Do not copy, modify, adapt, translate, or create derivative works of the Tripknot App',
              'Do not reverse engineer, disassemble, or decompile the App or any part of it',
              'Do not sublicense, sell, rent, lease, or distribute the App to any third party',
              'Do not remove or alter any proprietary notices, labels, or marks on the App',
              'Do not use the App for any unlawful purpose or to transmit harmful, offensive, or unauthorized content',
            ],
          },
        ],
      },
      {
        heading: '5. Updates and Maintenance',
        blocks: [
          {
            type: 'p',
            text: 'Aneeras may provide Tripknot App updates including upgrades, bug fixes, and patches. Updates may be downloaded and installed automatically without prior notice. You consent to automatic updates. Aneeras has no obligation to provide any updates or to maintain any specific features or functionality.',
          },
        ],
      },
      {
        heading: '6. Apple App Store — Additional Terms',
        blocks: [
          {
            type: 'ul',
            items: [
              'This EULA is solely between you and Aneeras LLP, not Apple Inc. Apple is not responsible for the Tripknot App or its content',
              'Apple has no obligation to provide maintenance or support services for the Tripknot App',
              'If the App fails to conform to any applicable warranty, you may notify Apple for a refund of any purchase price. Apple has no further warranty obligations with respect to the App',
              'Apple is not responsible for addressing any product liability, consumer protection, or intellectual property infringement claims relating to the Tripknot App',
              'Apple Inc. and its subsidiaries are third-party beneficiaries of this EULA and, upon your acceptance, Apple has the right to enforce this EULA against you as a third-party beneficiary',
            ],
          },
        ],
      },
      {
        heading: '7. Google Play — Additional Terms',
        blocks: [
          {
            type: 'ul',
            items: [
              'This EULA is solely between you and Aneeras LLP, not Google LLC',
              'Google has no obligation to provide maintenance or support services for the Tripknot App',
              'To the extent permitted by law, Google has no warranty obligations with respect to the App',
            ],
          },
        ],
      },
      {
        heading: '8. Intellectual Property',
        blocks: [
          {
            type: 'p',
            text: "All intellectual property in and to the Tripknot App — software, graphics, text, trademarks, and the Aneeras and Tripknot names and logos — is owned by Aneeras LLP or its licensors. Nothing in this EULA grants you rights to use Aneeras's or Tripknot's trademarks, logos, or domain names.",
          },
        ],
      },
      {
        heading: '9. Privacy',
        blocks: [
          {
            type: 'p',
            text: 'The Tripknot App collects and uses personal data as described in our Privacy Policy. By using the App, you consent to such collection and use.',
          },
        ],
      },
      {
        heading: '10. Term and Termination',
        blocks: [
          {
            type: 'p',
            text: 'This EULA is effective from the date you first use the Tripknot App and continues until terminated. Your rights terminate automatically without notice if you breach any term. Upon termination, you must cease all use of the App and delete it from your devices. Aneeras may also terminate or suspend your access at any time.',
          },
        ],
      },
      {
        heading: '11. Disclaimer and Limitation of Liability',
        blocks: [
          {
            type: 'p',
            text: "THE TRIPKNOT APP IS PROVIDED AS IS WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ANEERAS LLP DISCLAIMS ALL WARRANTIES AND SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING FROM USE OF THE APP. ANEERAS'S TOTAL LIABILITY SHALL NOT EXCEED INR 10,000.",
          },
        ],
      },
      {
        heading: '12. Governing Law',
        blocks: [
          {
            type: 'p',
            text: 'This EULA is governed by the laws of India. Any disputes shall be resolved in accordance with the Dispute Resolution clause in the Terms of Use, with seat of arbitration in Pondicherry, India and governed by the Arbitration and Conciliation Act, 1996.',
          },
        ],
      },
      {
        heading: '13. Contact',
        blocks: [
          {
            type: 'p',
            text: 'Aneeras LLP — Product: Tripknot | Email: support@tripknot.in | Legal: support@aneeras.com | Website: www.tripknot.in',
          },
        ],
      },
    ],
  },

  // ─── Document 07 ─────────────────────────────────────────────────────────────
  {
    slug: 'cookie-policy',
    title: 'Cookie and Tracking Policy',
    description: 'How we use cookies, device identifiers, GPS, and tracking technologies.',
    lastUpdated: 'May 2026',
    intro:
      'This Cookie and Tracking Policy explains how Aneeras LLP, as the operator of the Tripknot Platform, uses cookies, device identifiers, SDKs, and similar tracking technologies. By using Tripknot, you consent to use of these technologies as described. You may withdraw consent at any time through the mechanisms below.',
    sections: [
      {
        heading: '2. What Are Cookies?',
        blocks: [
          {
            type: 'p',
            text: 'Cookies are small text files stored on your device when you visit a website or use an app. They help Aneeras recognize you on Tripknot, remember your preferences, analyze usage, and improve the Platform. Similar technologies — including IDFA and GAID device identifiers, SDKs embedded in the Tripknot mobile app, and pixel tags — work in analogous ways.',
          },
        ],
      },
      {
        heading: '3. Types of Tracking Technologies Used on Tripknot',
        blocks: [
          {
            type: 'ul',
            items: [
              'Strictly Necessary — Required for Tripknot to function: session tokens, login authentication, security cookies. Cannot be disabled.',
              'Functional and Preference — Remember your choices on Tripknot: language, location settings, and display preferences.',
              'Analytics and Performance — Anonymous data to understand how users interact with Tripknot and improve features. Example: Firebase Analytics.',
              'Device Identifiers (Mobile) — IDFA on iOS and GAID on Android, collected with your consent for analytics and personalized content. Opt out via device settings.',
              'Location Tracking (GPS) — Precise location data collected with your explicit consent for trip planning and nearby listing discovery on Tripknot. Revoke via device settings.',
            ],
          },
        ],
      },
      {
        heading: '4. What Aneeras Does Not Do',
        blocks: [
          {
            type: 'ul',
            items: [
              'Aneeras does not use advertising cookies or serve third-party ads on the Tripknot Platform',
              'Aneeras does not sell cookie data or tracking data to any third party',
              'Aneeras does not track Tripknot users across third-party websites for advertising purposes',
              'Aneeras does not use fingerprinting or covert tracking methods',
            ],
          },
        ],
      },
      {
        heading: '5.1 In-App Controls',
        blocks: [
          {
            type: 'p',
            text: 'Manage your tracking preferences via Settings — Privacy Controls within the Tripknot App.',
          },
        ],
      },
      {
        heading: '5.2 Device Settings — Mobile Identifiers',
        blocks: [
          {
            type: 'ul',
            items: [
              'iOS: Settings — Privacy and Security — Tracking — Disable "Allow Apps to Request to Track"',
              'Android: Settings — Privacy — Ads — Opt out of Ads Personalization',
            ],
          },
        ],
      },
      {
        heading: '5.3 Browser Settings',
        blocks: [
          {
            type: 'p',
            text: 'For the Tripknot web platform, control cookies through your browser settings. Note that disabling strictly necessary cookies will prevent the Platform from functioning correctly.',
          },
        ],
      },
      {
        heading: '6. Consent and Withdrawal',
        blocks: [
          {
            type: 'p',
            text: 'Aneeras requests your consent for non-essential tracking at first use of the Tripknot Platform. You may withdraw consent at any time without affecting prior processing. Withdrawal for certain tracking technologies may reduce personalized feature functionality on Tripknot.',
          },
        ],
      },
      {
        heading: '7. Updates to This Policy',
        blocks: [
          {
            type: 'p',
            text: 'Aneeras may update this Cookie and Tracking Policy from time to time. Material changes will be communicated via the Tripknot Platform. Continued use after notification constitutes acceptance.',
          },
        ],
      },
      {
        heading: '8. Contact',
        blocks: [
          {
            type: 'p',
            text: 'For questions about this Cookie and Tracking Policy: Aneeras LLP | Email: support@aneeras.com | Website: www.tripknot.in',
          },
        ],
      },
    ],
  },
];

export function getLegalDoc(slug: string): LegalDoc | undefined {
  return legalDocs.find((doc) => doc.slug === slug);
}