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
  category: 'identity' | 'travel' | 'tax' | 'transport' | 'education' | 'vital-records' | 'welfare';
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
  },
  {
    id: 'aadhaar-card',
    name: 'Aadhaar Card Enrollment',
    category: 'identity',
    description: 'Get your Unique Identity Number (Aadhaar) from UIDAI',
    what_is_it: 'Aadhaar is a 12-digit unique identity number issued by the Unique Identification Authority of India (UIDAI). It serves as proof of identity and address and is linked with various government and private services including bank accounts, taxes, and welfare schemes.',
    who_can_apply: 'Any Indian citizen or registered resident of India. Children, adults, and senior citizens can all apply for Aadhaar.',
    eligibility: [
      'Must be an Indian citizen or registered resident',
      'Must be present for biometric enrollment (fingerprints and iris scan)',
      'Must provide proof of identity and address',
      'Must not have duplicate Aadhaar enrollment'
    ],
    documents_required: [
      {
        name: 'Identity proof',
        description: 'Passport, voter ID, driving licence, PAN, or any government-issued ID',
        where_to_get: 'Already in your possession'
      },
      {
        name: 'Address proof',
        description: 'Electricity bill, water bill, rent agreement, property tax receipt, or ration card',
        where_to_get: 'Your utility provider, landlord, or government office'
      },
      {
        name: 'Mobile number',
        description: 'Active mobile number for OTP verification',
        where_to_get: 'Your personal mobile number'
      },
      {
        name: 'Email address (optional)',
        description: 'For receiving Aadhaar updates and notifications',
        where_to_get: 'Your personal email'
      }
    ],
    fees: [
      {
        amount: 'Free',
        description: 'Aadhaar enrollment is completely free'
      }
    ],
    steps: [
      {
        number: 1,
        title: 'Locate Nearest Enrollment Center',
        description: 'Visit https://www.uidai.gov.in to find the nearest Aadhaar enrollment center in your area.'
      },
      {
        number: 2,
        title: 'Gather Required Documents',
        description: 'Collect identity proof and address proof. Originals will be verified and returned.'
      },
      {
        number: 3,
        title: 'Visit Enrollment Center',
        description: 'Go to the enrollment center with your documents. You must be present in person.'
      },
      {
        number: 4,
        title: 'Fill Enrollment Form',
        description: 'Complete the Aadhaar enrollment form with accurate personal details.'
      },
      {
        number: 5,
        title: 'Provide Biometric Data',
        description: 'Provide fingerprints (all 10 fingers) and iris scan. Photograph will be taken by the center.'
      },
      {
        number: 6,
        title: 'Verify Information',
        description: 'Review all entered information and confirm before submission.'
      },
      {
        number: 7,
        title: 'Receive Enrollment Slip',
        description: 'You\'ll receive an enrollment slip with an enrollment ID. Keep this safe.'
      },
      {
        number: 8,
        title: 'Receive Aadhaar',
        description: 'Your Aadhaar will be sent to your address within 90 days. You can also download it online using your enrollment ID.'
      }
    ],
    processing_time: '30-90 days (physical delivery), Instant (e-Aadhaar download)',
    common_mistakes: [
      {
        mistake: 'Providing incorrect personal information',
        consequence: 'Aadhaar enrollment rejection or need for correction',
        how_to_avoid: 'Double-check all details before submission. Ensure spelling matches your identity documents.'
      },
      {
        mistake: 'Poor quality biometric data',
        consequence: 'Enrollment rejection, need to re-enroll',
        how_to_avoid: 'Ensure fingers are clean and dry. Avoid applying henna or mehendi before enrollment.'
      },
      {
        mistake: 'Not being present in person',
        consequence: 'Enrollment cannot be completed',
        how_to_avoid: 'Aadhaar enrollment requires in-person attendance. You cannot enroll through an agent.'
      },
      {
        mistake: 'Using invalid or expired documents',
        consequence: 'Enrollment rejection',
        how_to_avoid: 'Ensure your identity and address proofs are valid and not expired.'
      },
      {
        mistake: 'Providing incorrect address',
        consequence: 'Aadhaar delivery issues',
        how_to_avoid: 'Provide your current residential address. Update if you move after enrollment.'
      },
      {
        mistake: 'Duplicate enrollment attempts',
        consequence: 'Aadhaar enrollment rejection',
        how_to_avoid: 'Check if you already have an Aadhaar before enrolling. One person cannot have multiple Aadhaar numbers.'
      },
      {
        mistake: 'Not updating mobile number',
        consequence: 'Cannot receive OTP for Aadhaar updates',
        how_to_avoid: 'Provide an active mobile number during enrollment. Update it if you change your number.'
      },
      {
        mistake: 'Losing enrollment slip',
        consequence: 'Difficulty tracking Aadhaar status',
        how_to_avoid: 'Keep the enrollment slip safe. Note down the enrollment ID for future reference.'
      },
      {
        mistake: 'Providing documents in poor condition',
        consequence: 'Enrollment rejection',
        how_to_avoid: 'Provide clear, legible documents. Ensure text is readable and not damaged.'
      },
      {
        mistake: 'Not following up on Aadhaar delivery',
        consequence: 'Missing Aadhaar or not knowing its status',
        how_to_avoid: 'Track your Aadhaar status online using enrollment ID. Follow up if not received within 90 days.'
      }
    ],
    common_rejection_reasons: [
      'Incorrect or incomplete personal information',
      'Poor quality biometric data (fingerprints or iris)',
      'Invalid or expired identity proof',
      'Address proof not acceptable',
      'Duplicate enrollment detected',
      'Documents not matching',
      'Applicant not present at enrollment center',
      'Incomplete enrollment form',
      'Biometric mismatch with existing records',
      'Applicant age below minimum requirement'
    ],
    official_link: 'https://www.uidai.gov.in',
    official_link_text: 'Visit UIDAI Official Website'
  },
  {
    id: 'voter-id',
    name: 'Voter ID Card Application',
    category: 'identity',
    description: 'Apply for your Voter ID card from the Election Commission',
    what_is_it: 'A Voter ID card, also known as EPIC (Elector\'s Photo Identity Card), is an identity document issued by the Election Commission of India. It serves as proof of citizenship and eligibility to vote in elections.',
    who_can_apply: 'Indian citizens who are 18 years or older and not disqualified under the Representation of the People Act.',
    eligibility: [
      'Must be an Indian citizen',
      'Must be 18 years or older',
      'Must be a resident of the constituency where you want to vote',
      'Must not be disqualified under the Representation of the People Act',
      'Must not be a non-citizen or person of unsound mind'
    ],
    documents_required: [
      {
        name: 'Proof of citizenship',
        description: 'Birth certificate, passport, Aadhaar, or school leaving certificate',
        where_to_get: 'Municipal corporation, passport office, UIDAI, or school'
      },
      {
        name: 'Proof of residence',
        description: 'Electricity bill, water bill, rent agreement, property tax receipt, or ration card',
        where_to_get: 'Your utility provider, landlord, or government office'
      },
      {
        name: 'Passport-size photograph',
        description: '4x6 cm, recent, with white background',
        where_to_get: 'Any photography studio'
      },
      {
        name: 'Identity proof',
        description: 'Aadhaar, PAN, driving licence, or any government-issued ID',
        where_to_get: 'Already in your possession'
      }
    ],
    fees: [
      {
        amount: 'Free',
        description: 'Voter ID card application and issuance is completely free'
      }
    ],
    steps: [
      {
        number: 1,
        title: 'Visit Election Commission Website',
        description: 'Go to https://eci.gov.in or your state election commission website.'
      },
      {
        number: 2,
        title: 'Fill Online Application',
        description: 'Complete Form 6 (Application for Registration as Voter) with accurate personal details.'
      },
      {
        number: 3,
        title: 'Upload Documents',
        description: 'Upload scanned copies of citizenship proof, residence proof, and photograph.'
      },
      {
        number: 4,
        title: 'Submit Application',
        description: 'Submit the application online or at your nearest polling station or election office.'
      },
      {
        number: 5,
        title: 'Verification Process',
        description: 'Election officials will verify your documents and eligibility. You may be contacted for clarification.'
      },
      {
        number: 6,
        title: 'Approval',
        description: 'Your application will be approved if all documents are correct and you meet eligibility criteria.'
      },
      {
        number: 7,
        title: 'Voter ID Card Issuance',
        description: 'Your Voter ID card will be printed and made available at your polling station.'
      },
      {
        number: 8,
        title: 'Collect Voter ID',
        description: 'Collect your Voter ID card from your polling station or election office.'
      }
    ],
    processing_time: '30-60 days (subject to verification)',
    common_mistakes: [
      {
        mistake: 'Providing incorrect address',
        consequence: 'Application rejection or voter ID issued for wrong constituency',
        how_to_avoid: 'Provide your current residential address. Ensure it matches your address proof.'
      },
      {
        mistake: 'Using invalid or expired documents',
        consequence: 'Application rejection',
        how_to_avoid: 'Ensure all documents are valid and not expired. Use recent documents.'
      },
      {
        mistake: 'Spelling inconsistencies',
        consequence: 'Application rejection or delay',
        how_to_avoid: 'Ensure name spelling matches across all documents. Use exact same spelling as in citizenship proof.'
      },
      {
        mistake: 'Poor quality documents',
        consequence: 'Application rejection',
        how_to_avoid: 'Provide clear, legible scans. Ensure all text is readable and not blurred.'
      },
      {
        mistake: 'Incomplete application form',
        consequence: 'Application rejection',
        how_to_avoid: 'Fill all mandatory fields. Don\'t leave any field blank.'
      },
      {
        mistake: 'Not providing proof of residence',
        consequence: 'Application rejection',
        how_to_avoid: 'Provide valid address proof. Utility bills are most commonly accepted.'
      },
      {
        mistake: 'Applying from wrong constituency',
        consequence: 'Application rejection',
        how_to_avoid: 'Apply from the constituency where you currently reside. Update if you move.'
      },
      {
        mistake: 'Submitting duplicate applications',
        consequence: 'Application rejection',
        how_to_avoid: 'Check if you\'re already registered as a voter before applying.'
      },
      {
        mistake: 'Not following up on application status',
        consequence: 'Not knowing if application was approved or rejected',
        how_to_avoid: 'Track your application status online. Follow up if not approved within 60 days.'
      },
      {
        mistake: 'Incorrect date of birth',
        consequence: 'Application rejection or age eligibility issues',
        how_to_avoid: 'Provide correct date of birth. Ensure it matches your citizenship proof.'
      }
    ],
    common_rejection_reasons: [
      'Incorrect or incomplete personal information',
      'Invalid or expired documents',
      'Address proof not acceptable',
      'Applicant age below 18 years',
      'Applicant disqualified under Representation of the People Act',
      'Duplicate voter registration',
      'Poor quality or illegible documents',
      'Spelling inconsistencies across documents',
      'Incomplete application form',
      'Non-resident of the constituency'
    ],
    official_link: 'https://eci.gov.in',
    official_link_text: 'Visit Election Commission Website'
  },
  {
    id: 'bonafide-certificate',
    name: 'Bonafide Certificate Application',
    category: 'education',
    description: 'Get a bonafide certificate from your school or college',
    what_is_it: 'A bonafide certificate is an official document issued by educational institutions that certifies that a student is or was a bonafide (genuine) student of that institution. It\'s used for various purposes like applying for scholarships, visas, bank loans, and other official work.',
    who_can_apply: 'Current or former students of schools, colleges, or universities who need proof of their enrollment or past attendance.',
    eligibility: [
      'Must be or have been a student of the institution',
      'Must have completed at least one semester/term',
      'Must not have outstanding dues or disciplinary issues',
      'Must apply within a reasonable period of leaving the institution'
    ],
    documents_required: [
      {
        name: 'Identity proof',
        description: 'Student ID card, Aadhaar, or any government-issued ID',
        where_to_get: 'Your institution or already in your possession'
      },
      {
        name: 'Admission letter or enrollment proof',
        description: 'Original admission letter or enrollment confirmation from the institution',
        where_to_get: 'Your institution\'s admission office'
      },
      {
        name: 'Recent photograph',
        description: 'Passport-size photograph (4x6 cm) with white background',
        where_to_get: 'Any photography studio'
      },
      {
        name: 'Application form',
        description: 'Bonafide certificate application form (available at the institution)',
        where_to_get: 'Your institution\'s office or website'
      }
    ],
    fees: [
      {
        amount: '₹50-₹200',
        description: 'Bonafide certificate fee (varies by institution)'
      },
      {
        amount: '₹100-₹300',
        description: 'Expedited/urgent processing (if available)'
      }
    ],
    steps: [
      {
        number: 1,
        title: 'Obtain Application Form',
        description: 'Get the bonafide certificate application form from your institution\'s office or download from their website.'
      },
      {
        number: 2,
        title: 'Fill Application Form',
        description: 'Complete the form with your personal details, enrollment number, and purpose of the certificate.'
      },
      {
        number: 3,
        title: 'Attach Required Documents',
        description: 'Attach identity proof, photograph, and any other required documents as per the form.'
      },
      {
        number: 4,
        title: 'Submit Application',
        description: 'Submit the completed form to your institution\'s office (in person or online if available).'
      },
      {
        number: 5,
        title: 'Pay Certificate Fee',
        description: 'Pay the bonafide certificate fee as specified by your institution.'
      },
      {
        number: 6,
        title: 'Verification',
        description: 'The institution will verify your enrollment status and academic records.'
      },
      {
        number: 7,
        title: 'Certificate Generation',
        description: 'The certificate will be generated and signed by the authorized official.'
      },
      {
        number: 8,
        title: 'Collect Certificate',
        description: 'Collect your bonafide certificate from the office or receive it by post if available.'
      }
    ],
    processing_time: '2-5 working days (normal), 1 day (expedited if available)',
    common_mistakes: [
      {
        mistake: 'Incomplete application form',
        consequence: 'Application rejection',
        how_to_avoid: 'Fill all mandatory fields. Don\'t leave any field blank.'
      },
      {
        mistake: 'Providing incorrect enrollment number',
        consequence: 'Application rejection or delay',
        how_to_avoid: 'Verify your enrollment number from your student ID or admission letter.'
      },
      {
        mistake: 'Poor quality photograph',
        consequence: 'Application rejection',
        how_to_avoid: 'Provide a clear, recent passport-size photograph with white background.'
      },
      {
        mistake: 'Not specifying purpose of certificate',
        consequence: 'Delay in processing',
        how_to_avoid: 'Clearly mention the purpose (scholarship, visa, loan, etc.) in your application.'
      },
      {
        mistake: 'Applying too long after leaving the institution',
        consequence: 'Application rejection',
        how_to_avoid: 'Apply within a reasonable period. Some institutions have a time limit for issuing certificates.'
      },
      {
        mistake: 'Outstanding dues or disciplinary issues',
        consequence: 'Application rejection',
        how_to_avoid: 'Clear any outstanding fees or dues before applying. Resolve any disciplinary issues.'
      },
      {
        mistake: 'Using invalid identity proof',
        consequence: 'Application rejection',
        how_to_avoid: 'Use a valid government-issued ID. Ensure it\'s not expired.'
      },
      {
        mistake: 'Not following the institution\'s format requirements',
        consequence: 'Application rejection',
        how_to_avoid: 'Follow the specific format and requirements mentioned by your institution.'
      },
      {
        mistake: 'Not paying the correct fee',
        consequence: 'Application rejection or delay',
        how_to_avoid: 'Verify the correct fee amount with your institution before payment.'
      },
      {
        mistake: 'Not keeping a copy of the application',
        consequence: 'Difficulty tracking status',
        how_to_avoid: 'Keep a photocopy or digital copy of your application for reference.'
      }
    ],
    common_rejection_reasons: [
      'Incomplete application form',
      'Incorrect or invalid enrollment number',
      'Poor quality or missing photograph',
      'Invalid identity proof',
      'Outstanding dues or fees',
      'Disciplinary issues pending',
      'Not a bonafide student of the institution',
      'Enrollment period too long ago',
      'Incorrect fee payment',
      'Missing required documents'
    ],
    official_link: 'https://www.education.gov.in',
    official_link_text: 'Visit Ministry of Education Website'
  },
  {
    id: 'board-certificate',
    name: 'Board Certificate Application',
    category: 'education',
    description: 'Apply for duplicate or additional board certificates from your school board',
    what_is_it: 'A board certificate, also known as a school leaving certificate or mark sheet, is an official document issued by the school board that certifies your completion of a particular class or course. It includes your marks, grades, and academic performance.',
    who_can_apply: 'Former students who have completed their studies from a recognized school board and need duplicate or additional copies of their certificates.',
    eligibility: [
      'Must be a former student of a recognized school',
      'Must have completed the examination',
      'Must have passed the examination',
      'Must not have outstanding dues with the school or board'
    ],
    documents_required: [
      {
        name: 'Identity proof',
        description: 'Aadhaar, PAN, voter ID, or any government-issued ID',
        where_to_get: 'Already in your possession'
      },
      {
        name: 'Original certificate or mark sheet (if available)',
        description: 'Your original board certificate or mark sheet',
        where_to_get: 'In your possession'
      },
      {
        name: 'School admission number or roll number',
        description: 'Your enrollment/roll number from school',
        where_to_get: 'Your original certificate or school records'
      },
      {
        name: 'Application form',
        description: 'Board certificate application form (available from the board office or website)',
        where_to_get: 'School board office or website'
      },
      {
        name: 'Affidavit (if original lost)',
        description: 'Notarized affidavit stating loss of original certificate',
        where_to_get: 'Notary public'
      }
    ],
    fees: [
      {
        amount: '₹100-₹300',
        description: 'Duplicate certificate fee (varies by board)'
      },
      {
        amount: '₹50-₹100',
        description: 'Additional copy fee'
      },
      {
        amount: '₹200-₹500',
        description: 'Expedited processing (if available)'
      }
    ],
    steps: [
      {
        number: 1,
        title: 'Identify Your School Board',
        description: 'Determine which school board issued your certificate (CBSE, ICSE, State Board, etc.).'
      },
      {
        number: 2,
        title: 'Visit Board Website',
        description: 'Go to your school board\'s official website and look for certificate services.'
      },
      {
        number: 3,
        title: 'Download Application Form',
        description: 'Download the duplicate certificate application form or get it from the board office.'
      },
      {
        number: 4,
        title: 'Fill Application Form',
        description: 'Complete the form with your personal details, school name, roll number, and year of examination.'
      },
      {
        number: 5,
        title: 'Attach Documents',
        description: 'Attach identity proof, photograph, and affidavit (if original is lost).'
      },
      {
        number: 6,
        title: 'Submit Application',
        description: 'Submit the application to your school board office (in person, by post, or online if available).'
      },
      {
        number: 7,
        title: 'Pay Certificate Fee',
        description: 'Pay the duplicate certificate fee as specified by the board.'
      },
      {
        number: 8,
        title: 'Receive Certificate',
        description: 'Your duplicate certificate will be issued and sent to you by post or available for collection.'
      }
    ],
    processing_time: '7-15 working days (normal), 2-3 working days (expedited if available)',
    common_mistakes: [
      {
        mistake: 'Providing incorrect roll number',
        consequence: 'Application rejection or delay',
        how_to_avoid: 'Verify your roll number from your original certificate or school records.'
      },
      {
        mistake: 'Incomplete application form',
        consequence: 'Application rejection',
        how_to_avoid: 'Fill all mandatory fields. Don\'t leave any field blank.'
      },
      {
        mistake: 'Using invalid identity proof',
        consequence: 'Application rejection',
        how_to_avoid: 'Use a valid government-issued ID. Ensure it\'s not expired.'
      },
      {
        mistake: 'Not providing affidavit when original is lost',
        consequence: 'Application rejection',
        how_to_avoid: 'If original is lost, provide a notarized affidavit stating the loss.'
      },
      {
        mistake: 'Incorrect school name or board',
        consequence: 'Application rejection',
        how_to_avoid: 'Verify the exact school name and board from your original certificate.'
      },
      {
        mistake: 'Poor quality or missing photograph',
        consequence: 'Application rejection',
        how_to_avoid: 'Provide a clear, recent passport-size photograph with white background.'
      },
      {
        mistake: 'Not paying the correct fee',
        consequence: 'Application rejection or delay',
        how_to_avoid: 'Verify the correct fee amount with the board office before payment.'
      },
      {
        mistake: 'Applying to wrong board office',
        consequence: 'Application rejection',
        how_to_avoid: 'Identify the correct board and apply to the appropriate office.'
      },
      {
        mistake: 'Not keeping application reference number',
        consequence: 'Difficulty tracking status',
        how_to_avoid: 'Keep the application reference number or receipt for tracking.'
      },
      {
        mistake: 'Incorrect year of examination',
        consequence: 'Application rejection',
        how_to_avoid: 'Verify the year you appeared for the examination from your original certificate.'
      }
    ],
    common_rejection_reasons: [
      'Incorrect or invalid roll number',
      'Incomplete application form',
      'Invalid identity proof',
      'Poor quality or missing photograph',
      'Incorrect school name or board',
      'Missing affidavit (if original lost)',
      'Incorrect fee payment',
      'Outstanding dues with school or board',
      'Applicant did not pass the examination',
      'Application submitted to wrong board office'
    ],
    official_link: 'https://www.cbseacademic.nic.in',
    official_link_text: 'Visit CBSE Official Website'
  },
  {
    id: 'birth-certificate',
    name: 'Birth Certificate Application',
    category: 'vital-records',
    description: 'Register or obtain a birth certificate from the municipal corporation',
    what_is_it: 'A birth certificate is an official document issued by the municipal corporation that records the birth of a child. It serves as proof of identity, citizenship, age, and parentage. It\'s required for school admission, passport applications, marriage registration, and various government benefits.',
    who_can_apply: 'Parents or guardians of a child, or the child themselves (if adult). Birth certificates can be obtained within 30 days of birth (normal registration) or after 30 days (late registration).',
    eligibility: [
      'Must be a registered birth in India',
      'Must have proof of birth (hospital discharge summary, midwife certificate, or witness)',
      'Must provide parent\'s identity and address proof',
      'For late registration, must have supporting documents'
    ],
    documents_required: [
      {
        name: 'Hospital discharge summary or birth notification',
        description: 'Official document from the hospital where birth took place',
        where_to_get: 'Hospital where child was born'
      },
      {
        name: 'Parent\'s identity proof',
        description: 'Aadhaar, PAN, voter ID, or driving licence of either parent',
        where_to_get: 'Already in your possession'
      },
      {
        name: 'Parent\'s address proof',
        description: 'Electricity bill, water bill, rent agreement, or property tax receipt',
        where_to_get: 'Your utility provider or landlord'
      },
      {
        name: 'Birth registration form',
        description: 'Form to be filled at the municipal corporation office',
        where_to_get: 'Municipal corporation office or website'
      },
      {
        name: 'Affidavit (for late registration)',
        description: 'Notarized affidavit stating reasons for late registration',
        where_to_get: 'Notary public'
      }
    ],
    fees: [
      {
        amount: 'Free',
        description: 'Birth certificate registration within 30 days of birth'
      },
      {
        amount: '₹50-₹100',
        description: 'Late registration fee (after 30 days but within 1 year)'
      },
      {
        amount: '₹100-₹500',
        description: 'Very late registration fee (after 1 year, requires court order)'
      },
      {
        amount: '₹10-₹25',
        description: 'Duplicate certificate fee'
      }
    ],
    steps: [
      {
        number: 1,
        title: 'Locate Municipal Corporation Office',
        description: 'Find your nearest municipal corporation office (Nagar Nigam, Municipal Council, or Gram Panchayat depending on your area).'
      },
      {
        number: 2,
        title: 'Collect Birth Registration Form',
        description: 'Obtain the birth registration form from the municipal office or download from their website.'
      },
      {
        number: 3,
        title: 'Fill Application Form',
        description: 'Complete the form with child\'s details, parent\'s information, and birth details.'
      },
      {
        number: 4,
        title: 'Attach Required Documents',
        description: 'Attach hospital discharge summary, parent\'s identity proof, and address proof.'
      },
      {
        number: 5,
        title: 'Submit Application',
        description: 'Submit the completed form to the municipal corporation office with all documents.'
      },
      {
        number: 6,
        title: 'Pay Registration Fee',
        description: 'Pay the registration fee (if applicable) at the municipal office.'
      },
      {
        number: 7,
        title: 'Receive Registration Number',
        description: 'You\'ll receive a registration number and receipt. Keep this for future reference.'
      },
      {
        number: 8,
        title: 'Collect Birth Certificate',
        description: 'Collect the birth certificate from the office (usually within 5-7 working days).'
      }
    ],
    processing_time: '5-7 working days (normal), 15-30 days (late registration)',
    common_mistakes: [
      {
        mistake: 'Incomplete hospital discharge summary',
        consequence: 'Application rejection',
        how_to_avoid: 'Ensure hospital document has all required details and official stamp.'
      },
      {
        mistake: 'Incorrect parent\'s name or spelling',
        consequence: 'Birth certificate issued with errors, need for correction',
        how_to_avoid: 'Double-check spelling of parent\'s name. Use exact name as in identity proof.'
      },
      {
        mistake: 'Missing address proof',
        consequence: 'Application rejection',
        how_to_avoid: 'Provide valid address proof showing current residence.'
      },
      {
        mistake: 'Delayed registration without proper documentation',
        consequence: 'Application rejection or need for court order',
        how_to_avoid: 'Register within 30 days. For late registration, provide affidavit and supporting documents.'
      },
      {
        mistake: 'Incorrect child\'s name',
        consequence: 'Birth certificate issued with wrong name',
        how_to_avoid: 'Verify child\'s name before submission. Ensure it matches hospital records.'
      },
      {
        mistake: 'Using invalid identity proof',
        consequence: 'Application rejection',
        how_to_avoid: 'Use valid government-issued ID. Ensure it\'s not expired.'
      },
      {
        mistake: 'Not keeping registration receipt',
        consequence: 'Difficulty obtaining duplicate certificate',
        how_to_avoid: 'Keep the registration receipt and registration number safe.'
      },
      {
        mistake: 'Applying to wrong municipal office',
        consequence: 'Application rejection',
        how_to_avoid: 'Apply to the municipal office of the area where birth took place.'
      },
      {
        mistake: 'Incomplete application form',
        consequence: 'Application rejection',
        how_to_avoid: 'Fill all mandatory fields. Don\'t leave any field blank.'
      },
      {
        mistake: 'Not providing witness for home births',
        consequence: 'Application rejection',
        how_to_avoid: 'For home births, provide affidavit from midwife or witness to birth.'
      }
    ],
    common_rejection_reasons: [
      'Incomplete hospital discharge summary',
      'Invalid or expired parent\'s identity proof',
      'Missing address proof',
      'Incomplete application form',
      'Incorrect parent\'s name or spelling',
      'No supporting documents for late registration',
      'Applicant not registered in the jurisdiction',
      'Conflicting information across documents',
      'Missing witness affidavit (for home births)',
      'Application submitted to wrong municipal office'
    ],
    official_link: 'https://www.india.gov.in',
    official_link_text: 'Visit India.gov.in for Municipal Services'
  },
  {
    id: 'death-certificate',
    name: 'Death Certificate Application',
    category: 'vital-records',
    description: 'Register and obtain a death certificate from the municipal corporation',
    what_is_it: 'A death certificate is an official document issued by the municipal corporation that records the death of a person. It serves as legal proof of death and is required for settling insurance claims, inheritance matters, pension closure, and other legal procedures.',
    who_can_apply: 'Family members, relatives, or any person present at the time of death. The informant must be someone who knows the deceased.',
    eligibility: [
      'Must be a death registered in India',
      'Must have proof of death (hospital discharge summary, doctor\'s certificate, or witness)',
      'Must provide deceased\'s identity proof',
      'Must be registered within 21 days of death'
    ],
    documents_required: [
      {
        name: 'Hospital discharge summary or medical certificate',
        description: 'Official document from hospital or doctor confirming death',
        where_to_get: 'Hospital or treating doctor'
      },
      {
        name: 'Deceased\'s identity proof',
        description: 'Aadhaar, PAN, voter ID, or any government-issued ID',
        where_to_get: 'Deceased\'s documents'
      },
      {
        name: 'Informant\'s identity proof',
        description: 'Identity proof of the person reporting the death',
        where_to_get: 'Already in your possession'
      },
      {
        name: 'Death registration form',
        description: 'Form to be filled at the municipal corporation office',
        where_to_get: 'Municipal corporation office or website'
      },
      {
        name: 'Address proof of deceased',
        description: 'Electricity bill, rent agreement, or property tax receipt',
        where_to_get: 'Deceased\'s documents'
      }
    ],
    fees: [
      {
        amount: 'Free',
        description: 'Death certificate registration within 21 days of death'
      },
      {
        amount: '₹50-₹100',
        description: 'Late registration fee (after 21 days but within 1 year)'
      },
      {
        amount: '₹100-₹500',
        description: 'Very late registration fee (after 1 year, requires court order)'
      },
      {
        amount: '₹10-₹25',
        description: 'Duplicate certificate fee'
      }
    ],
    steps: [
      {
        number: 1,
        title: 'Locate Municipal Corporation Office',
        description: 'Find your nearest municipal corporation office in the area where death occurred.'
      },
      {
        number: 2,
        title: 'Collect Death Registration Form',
        description: 'Obtain the death registration form from the municipal office or download from their website.'
      },
      {
        number: 3,
        title: 'Fill Application Form',
        description: 'Complete the form with deceased\'s details, cause of death, and informant\'s information.'
      },
      {
        number: 4,
        title: 'Attach Required Documents',
        description: 'Attach medical certificate, deceased\'s identity proof, and address proof.'
      },
      {
        number: 5,
        title: 'Submit Application',
        description: 'Submit the completed form to the municipal corporation office with all documents.'
      },
      {
        number: 6,
        title: 'Pay Registration Fee',
        description: 'Pay the registration fee (if applicable) at the municipal office.'
      },
      {
        number: 7,
        title: 'Receive Registration Number',
        description: 'You\'ll receive a registration number and receipt. Keep this for future reference.'
      },
      {
        number: 8,
        title: 'Collect Death Certificate',
        description: 'Collect the death certificate from the office (usually within 5-7 working days).'
      }
    ],
    processing_time: '5-7 working days (normal), 15-30 days (late registration)',
    common_mistakes: [
      {
        mistake: 'Incomplete medical certificate',
        consequence: 'Application rejection',
        how_to_avoid: 'Ensure medical certificate has all required details, doctor\'s signature, and official stamp.'
      },
      {
        mistake: 'Incorrect deceased\'s name or spelling',
        consequence: 'Death certificate issued with errors',
        how_to_avoid: 'Double-check spelling. Use exact name as in identity proof.'
      },
      {
        mistake: 'Missing informant\'s identity proof',
        consequence: 'Application rejection',
        how_to_avoid: 'Provide valid identity proof of the person reporting the death.'
      },
      {
        mistake: 'Delayed registration without documentation',
        consequence: 'Application rejection or need for court order',
        how_to_avoid: 'Register within 21 days. For late registration, provide supporting documents.'
      },
      {
        mistake: 'Incorrect cause of death',
        consequence: 'Death certificate issued with wrong information',
        how_to_avoid: 'Verify cause of death from medical certificate before submission.'
      },
      {
        mistake: 'Using invalid identity proof',
        consequence: 'Application rejection',
        how_to_avoid: 'Use valid government-issued ID. Ensure it\'s not expired.'
      },
      {
        mistake: 'Not keeping registration receipt',
        consequence: 'Difficulty obtaining duplicate certificate',
        how_to_avoid: 'Keep the registration receipt and registration number safe.'
      },
      {
        mistake: 'Applying to wrong municipal office',
        consequence: 'Application rejection',
        how_to_avoid: 'Apply to the municipal office of the area where death occurred.'
      },
      {
        mistake: 'Incomplete application form',
        consequence: 'Application rejection',
        how_to_avoid: 'Fill all mandatory fields. Don\'t leave any field blank.'
      },
      {
        mistake: 'Not providing address proof of deceased',
        consequence: 'Application rejection',
        how_to_avoid: 'Provide valid address proof showing deceased\'s residence.'
      }
    ],
    common_rejection_reasons: [
      'Incomplete medical certificate',
      'Invalid or expired identity proof',
      'Missing address proof',
      'Incomplete application form',
      'Incorrect deceased\'s name or spelling',
      'No supporting documents for late registration',
      'Conflicting information across documents',
      'Application submitted to wrong municipal office',
      'Informant not authorized to report death',
      'Death not registered within legal timeframe'
    ],
    official_link: 'https://www.india.gov.in',
    official_link_text: 'Visit India.gov.in for Municipal Services'
  },
  {
    id: 'marriage-certificate',
    name: 'Marriage Certificate Registration',
    category: 'vital-records',
    description: 'Register your marriage and obtain a marriage certificate',
    what_is_it: 'A marriage certificate is an official document issued by the municipal corporation or registrar that records the marriage of two individuals. It serves as legal proof of marriage and is required for passport applications, visa processing, bank account updates, insurance claims, and inheritance matters.',
    who_can_apply: 'Married couples who want to register their marriage. Registration can be done before or after marriage, but must be done within 30 days of marriage.',
    eligibility: [
      'Must be legally married (as per applicable personal law)',
      'Both parties must be willing to register the marriage',
      'Must be of marriageable age (18+ for females, 21+ for males)',
      'Must not be in any prohibited relationship',
      'Must have valid identity proof of both parties'
    ],
    documents_required: [
      {
        name: 'Marriage invitation or religious ceremony document',
        description: 'Proof that marriage ceremony took place',
        where_to_get: 'Marriage invitation card or religious document'
      },
      {
        name: 'Bride\'s identity proof',
        description: 'Aadhaar, PAN, voter ID, or driving licence',
        where_to_get: 'Already in your possession'
      },
      {
        name: 'Groom\'s identity proof',
        description: 'Aadhaar, PAN, voter ID, or driving licence',
        where_to_get: 'Already in your possession'
      },
      {
        name: 'Address proof of both parties',
        description: 'Electricity bill, water bill, rent agreement, or property tax receipt',
        where_to_get: 'Your utility provider or landlord'
      },
      {
        name: 'Witness affidavit',
        description: 'Affidavit from two witnesses to the marriage',
        where_to_get: 'Notary public (witnesses must sign)'
      },
      {
        name: 'Marriage registration form',
        description: 'Form to be filled at the municipal corporation office',
        where_to_get: 'Municipal corporation office or website'
      },
      {
        name: 'Photographs of bride and groom',
        description: 'Passport-size photographs (4x6 cm) with white background',
        where_to_get: 'Any photography studio'
      }
    ],
    fees: [
      {
        amount: 'Free',
        description: 'Marriage certificate registration within 30 days of marriage'
      },
      {
        amount: '₹50-₹100',
        description: 'Late registration fee (after 30 days but within 1 year)'
      },
      {
        amount: '₹100-₹500',
        description: 'Very late registration fee (after 1 year, requires court order)'
      },
      {
        amount: '₹10-₹25',
        description: 'Duplicate certificate fee'
      }
    ],
    steps: [
      {
        number: 1,
        title: 'Locate Marriage Registrar Office',
        description: 'Find your nearest marriage registrar office (usually at municipal corporation or district office).'
      },
      {
        number: 2,
        title: 'Collect Marriage Registration Form',
        description: 'Obtain the marriage registration form from the registrar office or download from their website.'
      },
      {
        number: 3,
        title: 'Fill Application Form',
        description: 'Complete the form with details of both bride and groom, marriage date, and place.'
      },
      {
        number: 4,
        title: 'Attach Required Documents',
        description: 'Attach identity proofs, address proofs, witness affidavit, and marriage invitation.'
      },
      {
        number: 5,
        title: 'Submit Application',
        description: 'Submit the completed form to the marriage registrar office with all documents.'
      },
      {
        number: 6,
        title: 'Pay Registration Fee',
        description: 'Pay the registration fee (if applicable) at the registrar office.'
      },
      {
        number: 7,
        title: 'Verification Process',
        description: 'The registrar will verify the information and may conduct an interview with the couple.'
      },
      {
        number: 8,
        title: 'Receive Marriage Certificate',
        description: 'Collect the marriage certificate from the office (usually within 5-7 working days).'
      }
    ],
    processing_time: '5-7 working days (normal), 15-30 days (late registration)',
    common_mistakes: [
      {
        mistake: 'Incorrect marriage date',
        consequence: 'Marriage certificate issued with wrong date',
        how_to_avoid: 'Verify marriage date before submission. Use date from marriage invitation or religious document.'
      },
      {
        mistake: 'Spelling inconsistencies in names',
        consequence: 'Marriage certificate issued with errors',
        how_to_avoid: 'Ensure names match exactly with identity proofs. Use same spelling across all documents.'
      },
      {
        mistake: 'Missing witness affidavit',
        consequence: 'Application rejection',
        how_to_avoid: 'Obtain affidavit from two witnesses to the marriage. Get it notarized.'
      },
      {
        mistake: 'Invalid or expired identity proof',
        consequence: 'Application rejection',
        how_to_avoid: 'Use valid government-issued ID. Ensure it\'s not expired.'
      },
      {
        mistake: 'Incomplete address proof',
        consequence: 'Application rejection',
        how_to_avoid: 'Provide valid address proof for both bride and groom.'
      },
      {
        mistake: 'Delayed registration without proper documentation',
        consequence: 'Application rejection or need for court order',
        how_to_avoid: 'Register within 30 days. For late registration, provide supporting documents.'
      },
      {
        mistake: 'Using poor quality photographs',
        consequence: 'Application rejection',
        how_to_avoid: 'Provide clear, recent passport-size photographs with white background.'
      },
      {
        mistake: 'Not keeping registration receipt',
        consequence: 'Difficulty obtaining duplicate certificate',
        how_to_avoid: 'Keep the registration receipt and registration number safe.'
      },
      {
        mistake: 'Incomplete application form',
        consequence: 'Application rejection',
        how_to_avoid: 'Fill all mandatory fields. Don\'t leave any field blank.'
      },
      {
        mistake: 'Applying to wrong registrar office',
        consequence: 'Application rejection',
        how_to_avoid: 'Apply to the registrar office of the area where marriage took place.'
      }
    ],
    common_rejection_reasons: [
      'Incomplete application form',
      'Invalid or expired identity proof',
      'Missing witness affidavit',
      'Address proof not acceptable',
      'Spelling inconsistencies in names',
      'No supporting documents for late registration',
      'Conflicting information across documents',
      'Poor quality or missing photographs',
      'Applicants below marriageable age',
      'Application submitted to wrong registrar office'
    ],
    official_link: 'https://www.india.gov.in',
    official_link_text: 'Visit India.gov.in for Registration Services'
  },
  {
    id: 'ration-card-new',
    name: 'Ration Card - New Application',
    category: 'welfare',
    description: 'Apply for a new ration card to access subsidized food grains',
    what_is_it: 'A ration card is an official document issued by the state food and civil supplies department that entitles the holder to purchase subsidized food grains (rice, wheat, sugar) and other essential commodities. It serves as proof of residence and is linked to various government welfare schemes.',
    who_can_apply: 'Indian citizens who are permanent residents of a state and wish to access subsidized food grains through the Public Distribution System (PDS).',
    eligibility: [
      'Must be an Indian citizen',
      'Must be a permanent resident of the state',
      'Must have proof of residence in the state',
      'Must not already have a ration card in the same state',
      'Must meet income criteria (varies by state and category)'
    ],
    documents_required: [
      {
        name: 'Address proof',
        description: 'Electricity bill, water bill, rent agreement, property tax receipt, or ration card of family member',
        where_to_get: 'Your utility provider or landlord'
      },
      {
        name: 'Identity proof',
        description: 'Aadhaar, PAN, voter ID, driving licence, or passport',
        where_to_get: 'Already in your possession'
      },
      {
        name: 'Ration card application form',
        description: 'Form to be filled at the food and civil supplies office',
        where_to_get: 'Food and civil supplies office or website'
      },
      {
        name: 'Income proof (if applicable)',
        description: 'For BPL/APL categories, income certificate from tahsildar',
        where_to_get: 'Tahsildar office'
      },
      {
        name: 'Family list',
        description: 'List of all family members with their details',
        where_to_get: 'To be prepared by applicant'
      }
    ],
    fees: [
      {
        amount: '₹0-₹50',
        description: 'Ration card application fee (varies by state)'
      }
    ],
    steps: [
      {
        number: 1,
        title: 'Locate Food and Civil Supplies Office',
        description: 'Find your nearest food and civil supplies office (also called ration office or PDS office) in your area.'
      },
      {
        number: 2,
        title: 'Collect Application Form',
        description: 'Obtain the ration card application form from the office or download from the state website.'
      },
      {
        number: 3,
        title: 'Fill Application Form',
        description: 'Complete the form with your personal details, family members, and residential address.'
      },
      {
        number: 4,
        title: 'Attach Required Documents',
        description: 'Attach address proof, identity proof, and income proof (if applicable).'
      },
      {
        number: 5,
        title: 'Submit Application',
        description: 'Submit the completed form to the food and civil supplies office with all documents.'
      },
      {
        number: 6,
        title: 'Pay Application Fee',
        description: 'Pay the application fee (if applicable) at the office.'
      },
      {
        number: 7,
        title: 'Verification Process',
        description: 'The office will verify your documents and conduct a survey of your residence.'
      },
      {
        number: 8,
        title: 'Receive Ration Card',
        description: 'Collect your ration card from the office (usually within 15-30 days).'
      }
    ],
    processing_time: '15-30 days (subject to verification and survey)',
    common_mistakes: [
      {
        mistake: 'Incomplete address proof',
        consequence: 'Application rejection',
        how_to_avoid: 'Provide valid address proof showing current residence with name and address clearly visible.'
      },
      {
        mistake: 'Incorrect family member details',
        consequence: 'Ration card issued with errors or family members not added',
        how_to_avoid: 'List all family members accurately with correct names and relationships.'
      },
      {
        mistake: 'Using invalid identity proof',
        consequence: 'Application rejection',
        how_to_avoid: 'Use valid government-issued ID. Ensure it\'s not expired.'
      },
      {
        mistake: 'Incomplete application form',
        consequence: 'Application rejection',
        how_to_avoid: 'Fill all mandatory fields. Don\'t leave any field blank.'
      },
      {
        mistake: 'Not providing income proof when required',
        consequence: 'Application rejection',
        how_to_avoid: 'Check if income proof is required for your category. Obtain from tahsildar if needed.'
      },
      {
        mistake: 'Applying from wrong office',
        consequence: 'Application rejection',
        how_to_avoid: 'Apply to the food and civil supplies office of your residential area.'
      },
      {
        mistake: 'Not being present for survey',
        consequence: 'Application rejection',
        how_to_avoid: 'Be present at your residence during the survey. Inform the office if you\'re unavailable.'
      },
      {
        mistake: 'Providing incorrect address',
        consequence: 'Ration card issued for wrong address',
        how_to_avoid: 'Provide your current residential address. Update if you move.'
      },
      {
        mistake: 'Not keeping application receipt',
        consequence: 'Difficulty tracking status',
        how_to_avoid: 'Keep the application receipt and reference number safe.'
      },
      {
        mistake: 'Spelling inconsistencies',
        consequence: 'Ration card issued with errors',
        how_to_avoid: 'Ensure spelling of names matches across all documents.'
      }
    ],
    common_rejection_reasons: [
      'Incomplete or invalid address proof',
      'Invalid or expired identity proof',
      'Incomplete application form',
      'Incorrect family member details',
      'Missing income proof (if required)',
      'Applicant not present during survey',
      'Spelling inconsistencies',
      'Already holding ration card in the state',
      'Income exceeds limit for category',
      'Application submitted to wrong office'
    ],
    official_link: 'https://www.india.gov.in',
    official_link_text: 'Visit India.gov.in for Ration Card Services'
  },
  {
    id: 'ration-card-correction',
    name: 'Ration Card - Correction & Updates',
    category: 'welfare',
    description: 'Correct errors or update information on your existing ration card',
    what_is_it: 'Ration card correction and updates allow you to modify incorrect information on your ration card, add or remove family members, update address, or correct spelling errors. This ensures your ration card remains accurate and functional for accessing PDS benefits.',
    who_can_apply: 'Any person holding a valid ration card who needs to correct errors or update information on their card.',
    eligibility: [
      'Must have an existing valid ration card',
      'Must provide proof of the correction needed',
      'Must have valid identity proof',
      'Must apply to the correct food and civil supplies office'
    ],
    documents_required: [
      {
        name: 'Original ration card',
        description: 'Your current ration card',
        where_to_get: 'In your possession'
      },
      {
        name: 'Identity proof',
        description: 'Aadhaar, PAN, voter ID, or driving licence',
        where_to_get: 'Already in your possession'
      },
      {
        name: 'Proof of correction',
        description: 'Document supporting the correction (e.g., birth certificate for name, marriage certificate for name change)',
        where_to_get: 'Relevant government office'
      },
      {
        name: 'Address proof (if updating address)',
        description: 'Electricity bill, water bill, or rent agreement',
        where_to_get: 'Your utility provider or landlord'
      },
      {
        name: 'Correction application form',
        description: 'Form to be filled at the food and civil supplies office',
        where_to_get: 'Food and civil supplies office or website'
      },
      {
        name: 'Affidavit (if needed)',
        description: 'Notarized affidavit for corrections without supporting documents',
        where_to_get: 'Notary public'
      }
    ],
    fees: [
      {
        amount: '₹0-₹50',
        description: 'Correction fee (varies by state)'
      }
    ],
    steps: [
      {
        number: 1,
        title: 'Identify the Correction Needed',
        description: 'Determine what information needs to be corrected (name, address, family members, etc.).'
      },
      {
        number: 2,
        title: 'Gather Supporting Documents',
        description: 'Collect documents that prove the correction (birth certificate, marriage certificate, address proof, etc.).'
      },
      {
        number: 3,
        title: 'Visit Food and Civil Supplies Office',
        description: 'Go to your nearest food and civil supplies office with original ration card and supporting documents.'
      },
      {
        number: 4,
        title: 'Fill Correction Form',
        description: 'Complete the ration card correction form with details of the correction needed.'
      },
      {
        number: 5,
        title: 'Submit Application',
        description: 'Submit the completed form with original ration card and supporting documents.'
      },
      {
        number: 6,
        title: 'Pay Correction Fee',
        description: 'Pay the correction fee (if applicable) at the office.'
      },
      {
        number: 7,
        title: 'Verification Process',
        description: 'The office will verify the information and supporting documents.'
      },
      {
        number: 8,
        title: 'Receive Updated Ration Card',
        description: 'Collect your corrected ration card from the office (usually within 5-15 days).'
      }
    ],
    processing_time: '5-15 working days (subject to verification)',
    common_mistakes: [
      {
        mistake: 'Incomplete supporting documents',
        consequence: 'Application rejection',
        how_to_avoid: 'Provide all necessary documents that support the correction.'
      },
      {
        mistake: 'Not providing original ration card',
        consequence: 'Application rejection',
        how_to_avoid: 'Bring original ration card to the office.'
      },
      {
        mistake: 'Incorrect correction details',
        consequence: 'Correction not made or incorrect correction applied',
        how_to_avoid: 'Clearly specify what needs to be corrected. Double-check before submission.'
      },
      {
        mistake: 'Using invalid identity proof',
        consequence: 'Application rejection',
        how_to_avoid: 'Use valid government-issued ID. Ensure it\'s not expired.'
      },
      {
        mistake: 'Incomplete application form',
        consequence: 'Application rejection',
        how_to_avoid: 'Fill all mandatory fields. Don\'t leave any field blank.'
      },
      {
        mistake: 'Applying to wrong office',
        consequence: 'Application rejection',
        how_to_avoid: 'Apply to the food and civil supplies office that issued your ration card.'
      },
      {
        mistake: 'Not keeping application receipt',
        consequence: 'Difficulty tracking status',
        how_to_avoid: 'Keep the application receipt and reference number safe.'
      },
      {
        mistake: 'Requesting multiple corrections without proper documentation',
        consequence: 'Application rejection',
        how_to_avoid: 'Provide supporting documents for each correction requested.'
      },
      {
        mistake: 'Spelling inconsistencies in correction',
        consequence: 'Correction not applied or applied incorrectly',
        how_to_avoid: 'Ensure corrected spelling matches supporting documents exactly.'
      },
      {
        mistake: 'Not updating address when moving',
        consequence: 'Ration card becomes invalid or benefits not accessible',
        how_to_avoid: 'Update address immediately after moving. Provide new address proof.'
      }
    ],
    common_rejection_reasons: [
      'Incomplete or invalid supporting documents',
      'Original ration card not provided',
      'Invalid or expired identity proof',
      'Incomplete application form',
      'Incorrect correction details',
      'Spelling inconsistencies',
      'Application submitted to wrong office',
      'Correction not supported by documents',
      'Ration card already corrected',
      'Applicant not authorized to make correction'
    ],
    official_link: 'https://www.india.gov.in',
    official_link_text: 'Visit India.gov.in for Ration Card Services'
  }
];

export const categories = [
  { id: 'identity', name: 'Identity & Documents', icon: '🆔' },
  { id: 'travel', name: 'Travel & Passport', icon: '✈️' },
  { id: 'tax', name: 'Tax & Finance', icon: '💰' },
  { id: 'transport', name: 'Transport & Vehicles', icon: '🚗' },
  { id: 'education', name: 'Education & Scholarships', icon: '🎓' },
  { id: 'vital-records', name: 'Vital Records', icon: '📋' },
  { id: 'welfare', name: 'Welfare & Benefits', icon: '🤝' }
];
