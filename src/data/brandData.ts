export const BRAND_DATA = {
  brandName: 'Chamhouse',
  legalEntity: 'Chamhouse Lifestyle & Living Private Limited',
  domain: 'https://chamhouse.co.in/',
  supportEmail: 'support@chamhouse.co.in',
  privacyEmail: 'privacy@chamhouse.co.in',
  complianceEmail: 'compliance@chamhouse.co.in',
  phone: '+91 98712 34567',
  address: 'Level 4, Two Horizon Center, Golf Course Road, DLF Phase 5, Gurugram, Haryana 122002, India',
  businessHours: 'Monday - Saturday: 9:30 AM - 6:30 PM IST',
  rcsSenderName: 'Chamhouse Verified',
  brandTagline: 'Curated Living & Modern Home Aesthetics',
  
  // Specific URLs required by RCS Onboarding Forms (Google RBM / Carrier forms)
  urls: {
    home: 'https://chamhouse.co.in/',
    contact: 'https://chamhouse.co.in/contact-us',
    optIn: 'https://chamhouse.co.in/contact-us',
    terms: 'https://chamhouse.co.in/terms-and-conditions',
    privacy: 'https://chamhouse.co.in/privacy-policy',
  },

  // Compliant Consent Text matching CTIA, TRAI, and Google RBM standards
  standardOptInStatement: 
    'I agree to receive communications from Chamhouse via RCS, SMS, WhatsApp, and email at the mobile phone number and email address provided. I understand that consent is not a condition of purchase. Message and data rates may apply. Message frequency varies. I can reply STOP to unsubscribe at any time or HELP for assistance. I have read and agree to the Chamhouse Terms & Conditions and Privacy Policy.',

  rcsProgramDetails: {
    programName: 'Chamhouse Customer Updates & Concierge',
    shortDescription: 'Transactional order tracking, customer support, and curated styling updates from Chamhouse.',
    optOutKeyword: 'STOP',
    helpKeyword: 'HELP',
    supportedCarriers: 'All major mobile carriers in India (Airtel, Jio, Vodafone Idea, BSNL) and international RCS-enabled networks worldwide.',
    frequencyNotice: 'Message frequency varies based on customer interaction and active orders.',
    feeDisclosure: 'Chamhouse does not charge for receiving messages. Standard carrier message and data rates may apply according to your cellular plan.',
  }
};
