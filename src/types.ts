export type NavigationPage = 'home' | 'contact' | 'opt-in' | 'terms' | 'privacy';

export interface OptInFormData {
  fullName: string;
  countryCode: string;
  phoneNumber: string;
  email: string;
  inquiryType: string;
  message: string;
  consentAgreed: boolean;
  preferences: {
    orderAlerts: boolean;
    promotionalOffers: boolean;
    supportAssistance: boolean;
  };
}

export interface ConsentReceipt {
  referenceId: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  timestamp: string;
  channels: string[];
  consentStatement: string;
  status: 'ACTIVE' | 'REVOKED';
}
