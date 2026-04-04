export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface Document {
  name: string;
  description: string;
  where_to_get: string;
}

export interface CommonMistake {
  mistake: string;
  consequence: string;
  how_to_avoid: string;
}

export interface GovernmentProcess {
  id: string;
  name: string;
  category: 'identity' | 'travel' | 'tax' | 'transport' | 'education';
  description: string;
  what_is_it: string;
  who_can_apply: string;
  eligibility: string[];
  documents_required: Document[];
  fees: {
    amount: string;
    description: string;
  }[];
  steps: ProcessStep[];
  processing_time: string;
  common_mistakes: CommonMistake[];
  common_rejection_reasons: string[];
  official_link: string;
  official_link_text: string;
}

export const processes: GovernmentProcess[] = [
  {
    id: 'passport-fresh',
    name: 'Passport Application (Fresh)',
    category: 'travel',
    description: 'Apply for a new ordinary passport for international travel',
    what_is_it: 'An ordinary passport is a travel document issued by the Government of India that proves your identity and citizenship. It\'s required for international travel and serves as an important proof of address and identity.',
    who_can_apply: 'Indian citizens of any age. For minors (below 18), parents/guardians must apply on their behalf.',
    eligibility: [
      'Must be an Indian citizen',
      'No criminal cases pending against you',
      'No warrants issued in your name',
      'Not in high debt or with substantial unpaid loans',
      'Must have valid proof of identity and address'
    ],
    documents_required: [
      {
        name: 'Duly filled Form 1A',
        description: 'Official application form for fresh passport',
        where_to_get: 'Download from https://www.passportindia.gov.in'
      },
      {
        name: 'Two passport-size photographs',
        description: '4x6 cm, recent, with white background',
        where_to_get: 'Get printed from any photography studio'
      },
      {
        name: 'Birth certificate or school leaving certificate',
        description: 'Proof of date of birth',
        where_to_get: 'Municipal corporation (birth certificate) or school (leaving certificate)'
      },
      {
        name: 'Address proof',
        description: 'Electricity bill, water bill, rent agreement, or property tax receipt',
        where_to_get: 'Your utility provider or landlord'
      },
      {
        name: 'Identity proof',
        description: 'Aadhaar, PAN, voter ID, or driving licence',
        where_to_get: 'Already in your possession'
      },
      {
        name: 'Police verification',
        description: 'Conducted by local police at your address',
        where_to_get: 'Automatic - police will visit your address'
      }
    ],
    fees: [
      {
        amount: '₹1,500',
        description: '36-page ordinary passport (10 years validity)'
      },
      {
        amount: '₹2,000',
        description: '60-page jumbo passport (10 years validity)'
      },
      {
        amount: '₹1,000 (36 pages) or ₹1,500 (60 pages)',
        description: 'For minors (below 15 years)'
      }
    ],
    steps: [
      {
        number: 1,
        title: 'Visit Passport Seva Portal',
        description: 'Go to https://www.passportindia.gov.in and register for an account if you don\'t have one.'
      },
      {
        number: 2,
        title: 'Fill Online Application',
        description: 'Complete Form 1A with accurate personal details, address, and contact information.'
      },
      {
        number: 3,
        title: 'Upload Documents',
        description: 'Upload scanned copies of all required documents (clear, legible copies).'
      },
      {
        number: 4,
        title: 'Pay Application Fee',
        description: 'Pay the passport fee online using debit card, credit card, or net banking.'
      },
      {
        number: 5,
        title: 'Schedule Appointment',
        description: 'Select your nearest Passport Seva Kendra (PSK) and book an appointment slot.'
      },
      {
        number: 6,
        title: 'Visit PSK on Appointment Date',
        description: 'Bring original documents and appointment slip. Submit documents, provide fingerprints, and get photograph taken.'
      },
      {
        number: 7,
        title: 'Police Verification',
        description: 'Local police will visit your registered address to verify your details and residence.'
      },
      {
        number: 8,
        title: 'Receive Passport',
        description: 'Your passport will be delivered to your address (typically within 10-20 days).'
      }
    ],
    processing_time: '10-20 days (normal), 1-3 days (Tatkal/urgent with additional fees)',
    common_mistakes: [
      {
        mistake: 'Typos or inaccurate information',
        consequence: 'Application rejection or requirement to apply for re-issue after passport is issued',
        how_to_avoid: 'Double-check spelling of name, date of birth, and address before submitting. Cross-verify with your identity documents.'
      },
      {
        mistake: 'Mismatch between documents',
        consequence: 'Application rejection or delay in processing',
        how_to_avoid: 'Ensure all documents have consistent information (name, DOB, address). Use the exact same spelling across all documents.'
      },
      {
        mistake: 'Incomplete or unclear documents',
        consequence: 'Application rejection',
        how_to_avoid: 'Provide clear, legible photocopies. Ensure all text is readable and not faded or blurred.'
      },
      {
        mistake: 'Missing documents',
        consequence: 'Application rejection',
        how_to_avoid: 'Verify you have all required documents before applying. Use the official checklist from the portal.'
      },
      {
        mistake: 'Incorrect signature',
        consequence: 'Application rejection or delay',
        how_to_avoid: 'Ensure your signature matches across all documents. Practice your signature before signing documents.'
      },
      {
        mistake: 'Failure to pay fees on time',
        consequence: 'Application cancellation',
        how_to_avoid: 'Complete payment immediately after filling the form. Keep payment confirmation for reference.'
      },
      {
        mistake: 'Not attending police verification',
        consequence: 'Application rejection',
        how_to_avoid: 'Be present at your registered address during police verification. Inform police if you\'re unavailable.'
      },
      {
        mistake: 'Incorrect ECR/ECNR status',
        consequence: 'Delay in processing or issues at airports',
        how_to_avoid: 'If you\'ve passed class X, tick ECNR (Emigration Check Not Required). Verify your education status.'
      },
      {
        mistake: 'Exceeding appointment reschedule limit',
        consequence: 'Application cancellation',
        how_to_avoid: 'Don\'t reschedule more than 3 times in a year. Plan your appointment carefully.'
      },
      {
        mistake: 'Criminal record or pending cases',
        consequence: 'Application rejection',
        how_to_avoid: 'Ensure you have no pending criminal cases or warrants. If charges were dropped, provide proof.'
      }
    ],
    common_rejection_reasons: [
      'Mistakes in the application form',
      'Incorrect or missing documents',
      'Unclear or illegible photocopies',
      'Failure to complete police verification',
      'Criminal cases pending or warrants issued',
      'High debt or unpaid loans',
      'Information mismatch across documents',
      'Failure to pay fees on time',
      'Incomplete address information',
      'Signature mismatch across documents'
    ],
    official_link: 'https://www.passportindia.gov.in',
    official_link_text: 'Visit Passport Seva Portal'
  },
  {
    id: 'pan-correction',
    name: 'PAN Card Correction',
    category: 'tax',
    description: 'Update incorrect or outdated information on your PAN card',
    what_is_it: 'PAN (Permanent Account Number) correction allows you to update incorrect or outdated information on your PAN card. This is essential for financial transactions, tax filing, and linking with other government services like Aadhaar.',
    who_can_apply: 'Any individual who has a PAN card with incorrect details. You can update information due to name change (marriage, legal reasons), address change, or any other correction needed.',
    eligibility: [
      'Must be an Indian citizen or resident',
      'Must already have a PAN card',
      'Must have valid proof of the corrected information',
      'Must not have duplicate PAN applications pending'
    ],
    documents_required: [
      {
        name: 'Original PAN card',
        description: 'Your current PAN card',
        where_to_get: 'In your possession'
      },
      {
        name: 'Identity proof',
        description: 'Aadhaar, passport, voter ID, or driving licence',
        where_to_get: 'Already in your possession'
      },
      {
        name: 'Address proof (if updating address)',
        description: 'Electricity bill, water bill, rent agreement, or property tax receipt',
        where_to_get: 'Your utility provider or landlord'
      },
      {
        name: 'Marriage certificate (if name changed)',
        description: 'Legal proof of name change due to marriage',
        where_to_get: 'Municipal corporation or registrar'
      },
      {
        name: 'Birth certificate (if correcting DOB)',
        description: 'Proof of correct date of birth',
        where_to_get: 'Municipal corporation'
      },
      {
        name: 'Self-attested photocopies',
        description: 'Photocopies of all supporting documents with your signature',
        where_to_get: 'Make copies and sign them'
      }
    ],
    fees: [
      {
        amount: '₹110',
        description: 'PAN correction fee (inclusive of GST)'
      }
    ],
    steps: [
      {
        number: 1,
        title: 'Visit PAN Service Provider',
        description: 'Go to https://www.nsdl.co.in or https://www.utiitsl.com (authorized PAN service providers).'
      },
      {
        number: 2,
        title: 'Select Correction Service',
        description: 'Click on "PAN Services" and choose "Correction in PAN Data".'
      },
      {
        number: 3,
        title: 'Fill Correction Form',
        description: 'Complete Form 49A with the corrected information and your PAN number.'
      },
      {
        number: 4,
        title: 'Upload Documents',
        description: 'Upload scanned copies of required documents (clear, legible copies in PDF or JPG format).'
      },
      {
        number: 5,
        title: 'Pay Correction Fee',
        description: 'Pay ₹110 online using debit card, credit card, or net banking.'
      },
      {
        number: 6,
        title: 'Generate Token',
        description: 'After payment, a token number will be generated. Save this for your records.'
      },
      {
        number: 7,
        title: 'Submit Physical Documents (if required)',
        description: 'Some cases may require physical submission at the nearest authorized center.'
      },
      {
        number: 8,
        title: 'Receive Confirmation',
        description: 'You\'ll receive an email confirmation. Updated PAN details will be reflected in 5-7 working days.'
      }
    ],
    processing_time: '5-7 working days (online), 10-15 working days (physical submission)',
    common_mistakes: [
      {
        mistake: 'Mismatched personal details',
        consequence: 'Application rejection',
        how_to_avoid: 'Ensure name, DOB, address match across all documents. Use exact same spelling as in Aadhaar.'
      },
      {
        mistake: 'Spelling inconsistencies',
        consequence: 'Application rejection or PAN-Aadhaar linking failure',
        how_to_avoid: 'Use exact same spelling as in Aadhaar and other official documents. Check character by character.'
      },
      {
        mistake: 'Uploading unclear or blurry documents',
        consequence: 'Application rejection',
        how_to_avoid: 'Ensure scanned documents are clear, legible, and properly lit. Use high-resolution scans.'
      },
      {
        mistake: 'Wrong form submission',
        consequence: 'Application rejection',
        how_to_avoid: 'Use Form 49A for corrections (not Form 49 which is for new PAN).'
      },
      {
        mistake: 'Incomplete information',
        consequence: 'Application rejection',
        how_to_avoid: 'Fill all required fields in the application. Don\'t leave any field blank.'
      },
      {
        mistake: 'Not linking with Aadhaar',
        consequence: 'PAN may become inoperative',
        how_to_avoid: 'Ensure your PAN is linked with Aadhaar. Use eKYC for seamless linking.'
      },
      {
        mistake: 'Outdated address',
        consequence: 'Communication issues and delayed processing',
        how_to_avoid: 'Update address if you\'ve moved to a new location. Provide current address proof.'
      },
      {
        mistake: 'Incorrect signature',
        consequence: 'Application rejection',
        how_to_avoid: 'Ensure signature matches across documents. Sign consistently.'
      },
      {
        mistake: 'Missing supporting documents',
        consequence: 'Application rejection',
        how_to_avoid: 'Provide all required proofs for the correction. Check the official checklist.'
      },
      {
        mistake: 'Not verifying information before submission',
        consequence: 'Application rejection or need for re-submission',
        how_to_avoid: 'Double-check all details before final submission. Review the entire form once more.'
      }
    ],
    common_rejection_reasons: [
      'Mismatch between PAN and Aadhaar details',
      'Unclear or illegible documents',
      'Incomplete application form',
      'Missing supporting documents',
      'Information doesn\'t match across documents',
      'Invalid or expired identity proof',
      'Incorrect form used (Form 49 instead of 49A)',
      'Signature mismatch',
      'Duplicate PAN application',
      'PAN already linked with different Aadhaar'
    ],
    official_link: 'https://www.nsdl.co.in',
    official_link_text: 'Visit NSDL PAN Services'
  },
  {
    id: 'driving-licence-renewal',
    name: 'Driving Licence Renewal',
    category: 'transport',
    description: 'Renew your driving licence before or after expiry',
    what_is_it: 'Driving licence renewal is the process of extending the validity of your driving licence. It\'s required to legally continue driving after your current licence expires. A valid licence confirms your eligibility and competence to drive.',
    who_can_apply: 'Any individual with a valid or recently expired driving licence. Those within the one-year grace period after licence expiry can renew without taking a fresh driving test.',
    eligibility: [
      'Must be at least 18 years old (or minimum age as per vehicle class)',
      'Must have a valid medical fitness certificate (for commercial vehicles or if required)',
      'No disqualification from driving',
      'No pending traffic violations or serious offences',
      'Current driving licence must not be suspended or cancelled'
    ],
    documents_required: [
      {
        name: 'Original driving licence',
        description: 'Your current driving licence',
        where_to_get: 'In your possession'
      },
      {
        name: 'Form 2',
        description: 'Application for renewal of driving licence',
        where_to_get: 'Download from https://sarathi.parivahan.gov.in'
      },
      {
        name: 'Identity proof',
        description: 'Aadhaar, passport, voter ID, or PAN',
        where_to_get: 'Already in your possession'
      },
      {
        name: 'Address proof',
        description: 'Electricity bill, water bill, rent agreement, or property tax receipt',
        where_to_get: 'Your utility provider or landlord'
      },
      {
        name: 'Two passport-size photographs',
        description: '4x6 cm, recent, with white background',
        where_to_get: 'Get printed from any photography studio'
      },
      {
        name: 'Medical certificate (if applicable)',
        description: 'For commercial vehicles or drivers above 40 years of age',
        where_to_get: 'Government hospital or authorized medical center'
      }
    ],
    fees: [
      {
        amount: '₹200-₹400',
        description: 'Renewal fee (varies by state, within 30 days of expiry)'
      },
      {
        amount: '₹200 + ₹1,000 penalty',
        description: 'After 30 days but within 1 year grace period'
      },
      {
        amount: '₹1,000 penalty + renewal fee',
        description: 'After 1 year grace period (additional penalties may apply)'
      }
    ],
    steps: [
      {
        number: 1,
        title: 'Visit Parivahan Portal',
        description: 'Go to https://sarathi.parivahan.gov.in and select your state.'
      },
      {
        number: 2,
        title: 'Select Renewal Service',
        description: 'Click on "Services on Driver\'s License" and select "Renewal".'
      },
      {
        number: 3,
        title: 'Enter Licence Details',
        description: 'Enter your driving licence number and date of birth.'
      },
      {
        number: 4,
        title: 'Fill Application Form',
        description: 'Complete the online application form with accurate personal details.'
      },
      {
        number: 5,
        title: 'Upload Documents',
        description: 'Upload scanned copies of required documents and passport-size photograph.'
      },
      {
        number: 6,
        title: 'Pay Renewal Fee',
        description: 'Pay the renewal fee online using debit card, credit card, or net banking.'
      },
      {
        number: 7,
        title: 'Schedule RTO Appointment',
        description: 'Select your nearest RTO/DTO and book an appointment slot.'
      },
      {
        number: 8,
        title: 'Visit RTO on Appointment Date',
        description: 'Bring original documents and appointment confirmation. Complete verification and biometric process.'
      },
      {
        number: 9,
        title: 'Receive Renewed Licence',
        description: 'Your renewed driving licence will be delivered to your address (typically within 7-10 days).'
      }
    ],
    processing_time: '7-10 days (online processing), 10-15 days (physical processing)',
    common_mistakes: [
      {
        mistake: 'Delaying renewal',
        consequence: 'Additional penalties and fines for driving with expired licence',
        how_to_avoid: 'Apply before or immediately after expiry. Check your licence expiry date regularly.'
      },
      {
        mistake: 'Missing documents',
        consequence: 'Application rejection',
        how_to_avoid: 'Gather all required documents before applying. Use the official checklist.'
      },
      {
        mistake: 'Incorrect information',
        consequence: 'Application rejection or delay',
        how_to_avoid: 'Ensure all details match your identity proof. Double-check before submission.'
      },
      {
        mistake: 'Unclear photographs',
        consequence: 'Application rejection',
        how_to_avoid: 'Provide clear, recent passport-size photographs with white background.'
      },
      {
        mistake: 'Expired medical certificate',
        consequence: 'Application rejection (for commercial vehicles)',
        how_to_avoid: 'Ensure medical certificate is valid. Get it renewed if needed.'
      },
      {
        mistake: 'Wrong form submission',
        consequence: 'Application rejection',
        how_to_avoid: 'Use Form 2 for renewal (not Form 1 which is for new licence).'
      },
      {
        mistake: 'Not checking expiry date',
        consequence: 'Driving with expired licence, legal penalties',
        how_to_avoid: 'Check your licence expiry date regularly. Set a reminder 2 months before expiry.'
      },
      {
        mistake: 'Incorrect address',
        consequence: 'Renewed licence delivery issues',
        how_to_avoid: 'Update address if you\'ve moved. Provide current address proof.'
      },
      {
        mistake: 'Signature mismatch',
        consequence: 'Application rejection',
        how_to_avoid: 'Ensure signature matches across documents. Sign consistently.'
      },
      {
        mistake: 'Incomplete online application',
        consequence: 'Application rejection',
        how_to_avoid: 'Fill all mandatory fields. Review the entire form before submission.'
      }
    ],
    common_rejection_reasons: [
      'Incomplete application form',
      'Missing or incorrect documents',
      'Photograph not meeting specifications',
      'Medical certificate not valid or missing (if required)',
      'Information mismatch between documents',
      'Expired identity proof',
      'Traffic violations or pending cases',
      'Disqualification from driving',
      'Unclear or illegible documents',
      'Incorrect fee payment'
    ],
    official_link: 'https://sarathi.parivahan.gov.in',
    official_link_text: 'Visit MoRTH Parivahan Portal'
  }
];

export const categories = [
  { id: 'identity', name: 'Identity & Documents', icon: '🆔' },
  { id: 'travel', name: 'Travel & Passport', icon: '✈️' },
  { id: 'tax', name: 'Tax & Finance', icon: '💰' },
  { id: 'transport', name: 'Transport & Vehicles', icon: '🚗' },
  { id: 'education', name: 'Education & Scholarships', icon: '🎓' }
];
