import React, { useState } from 'react';
import { NavigationPage, OptInFormData, ConsentReceipt } from '../types';
import { BRAND_DATA } from '../data/brandData';
import { 
  ShieldCheck, 
  CheckSquare, 
  Square, 
  Send, 
  CheckCircle, 
  Phone, 
  Mail, 
  User, 
  MapPin,
  Clock,
  AlertCircle, 
  Copy, 
  Check, 
  RotateCcw,
  Smartphone,
  ExternalLink,
  ChevronRight,
  MessageSquare
} from 'lucide-react';

interface ContactUsPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<OptInFormData>({
    fullName: '',
    countryCode: '+91',
    phoneNumber: '',
    email: '',
    inquiryType: 'Customer Support & Order Updates',
    message: '',
    consentAgreed: false,
    preferences: {
      orderAlerts: true,
      promotionalOffers: true,
      supportAssistance: true,
    }
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionReceipt, setSubmissionReceipt] = useState<ConsentReceipt | null>(null);
  const [optOutPhone, setOptOutPhone] = useState('');
  const [optOutStatus, setOptOutStatus] = useState<string | null>(null);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [activeTab, setActiveTab] = useState<'contact' | 'manage'>('contact');

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(BRAND_DATA.urls.contact);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Valid mobile phone number is required.';
    } else if (!/^\d{7,14}$/.test(formData.phoneNumber.replace(/[\s-]/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    // Explicit opt-in checkbox button is mandatory
    if (!formData.consentAgreed) {
      newErrors.consentAgreed = 'You must check the opt-in checkbox button to allow Chamhouse to send you messages via RCS, SMS, WhatsApp and email.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `CHAM-RCS-${Math.floor(100000 + Math.random() * 900000)}`;
      const activeChannels = ['RCS (Rich Communication Services)', 'SMS', 'WhatsApp', 'Email'];

      const receipt: ConsentReceipt = {
        referenceId: generatedId,
        fullName: formData.fullName,
        phoneNumber: `${formData.countryCode} ${formData.phoneNumber}`,
        email: formData.email,
        timestamp: new Date().toISOString(),
        channels: activeChannels,
        consentStatement: BRAND_DATA.standardOptInStatement,
        status: 'ACTIVE'
      };

      setSubmissionReceipt(receipt);
      setIsSubmitting(false);
    }, 500);
  };

  const handleOptOut = (e: React.FormEvent) => {
    e.preventDefault();
    if (!optOutPhone.trim()) {
      return;
    }
    setOptOutStatus(`Consent revoked for ${optOutPhone}. You have been unsubscribed from all RCS, SMS, WhatsApp, and marketing communications.`);
    setOptOutPhone('');
  };

  return (
    <div className="bg-stone-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-stone-500 mb-6" aria-label="Breadcrumb">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className="hover:text-amber-700 transition-colors"
          >
            Home
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-stone-900 font-medium">Contact Us</span>
        </nav>

        {/* Distinct Page Header */}
        <div className="mb-10 pb-8 border-b border-stone-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-300 mb-3">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>RCS Verification • Customer Contact & Opt-In Page</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900">
                Contact Us
              </h1>
              <p className="mt-3 text-stone-600 text-base max-w-2xl leading-relaxed">
                Have questions about our collections, need order tracking assistance, or want to connect with our interior concierge? Reach out below. Customers can clearly opt in to receive verified updates via RCS, SMS, WhatsApp, and email.
              </p>
            </div>

            {/* Carrier Audit Copyable URL Badge */}
            <div className="shrink-0 bg-white p-3.5 rounded-xl border border-stone-300 shadow-xs text-xs space-y-1.5 max-w-md">
              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold text-stone-900">Page 4 URL (Contact Us Opt-In):</span>
                <button
                  onClick={handleCopyUrl}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-800 text-[11px] font-medium transition-colors"
                >
                  {copiedUrl ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-stone-600" />
                      <span>Copy URL</span>
                    </>
                  )}
                </button>
              </div>
              <code className="block bg-stone-100 px-2 py-1 rounded text-amber-800 font-mono text-[11px] break-all select-all">
                {BRAND_DATA.urls.contact}
              </code>
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center sm:justify-start mb-8">
          <div className="inline-flex p-1 rounded-xl bg-stone-200/80 border border-stone-300 text-xs font-medium">
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-5 py-2.5 rounded-lg transition-all ${
                activeTab === 'contact'
                  ? 'bg-white text-stone-900 shadow-sm font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Contact Form & RCS Opt-In
            </button>
            <button
              onClick={() => setActiveTab('manage')}
              className={`px-5 py-2.5 rounded-lg transition-all ${
                activeTab === 'manage'
                  ? 'bg-white text-stone-900 shadow-sm font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Manage Preferences / Opt-Out
            </button>
          </div>
        </div>

        {activeTab === 'contact' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Official Contact Channels & Address */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-xs space-y-6">
                <h2 className="text-lg font-bold font-serif text-stone-900 pb-3 border-b border-stone-100">
                  Customer Support Desk
                </h2>

                <div className="space-y-4 text-sm text-stone-700">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-stone-900 font-medium text-xs uppercase tracking-wider">
                        Corporate Headquarters
                      </strong>
                      <p className="text-stone-600 text-xs mt-0.5 leading-relaxed">
                        {BRAND_DATA.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-stone-900 font-medium text-xs uppercase tracking-wider">
                        Official Email Support
                      </strong>
                      <a href={`mailto:${BRAND_DATA.supportEmail}`} className="text-amber-800 hover:underline text-xs">
                        {BRAND_DATA.supportEmail}
                      </a>
                      <p className="text-stone-500 text-[11px]">Inquiries answered within 4 business hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-stone-900 font-medium text-xs uppercase tracking-wider">
                        Customer Care Line
                      </strong>
                      <a href={`tel:${BRAND_DATA.phone}`} className="text-amber-800 hover:underline text-xs font-mono">
                        {BRAND_DATA.phone}
                      </a>
                      <p className="text-stone-500 text-[11px]">{BRAND_DATA.businessHours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-stone-900 font-medium text-xs uppercase tracking-wider">
                        Business Hours
                      </strong>
                      <p className="text-stone-600 text-xs mt-0.5">
                        {BRAND_DATA.businessHours}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-2 text-stone-600">
                  <div className="flex items-center gap-1.5 text-stone-900 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Official Brand Identity</span>
                  </div>
                  <p>Legal Entity: <strong>{BRAND_DATA.legalEntity}</strong></p>
                  <p>Domain: <strong className="font-mono text-stone-800">https://chamhouse.co.in/</strong></p>
                  <p>RCS Sender Name: <strong className="text-stone-800">{BRAND_DATA.rcsSenderName}</strong></p>
                </div>
              </div>

              {/* RCS Verified Phone Simulation */}
              <div className="bg-stone-900 text-stone-200 rounded-2xl p-5 border border-stone-800 shadow-md space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Smartphone className="w-4 h-4 text-amber-400" />
                    <span>RCS Messages on Customer Phone</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                    Google Verified Badge
                  </span>
                </div>

                <div className="bg-stone-800/90 rounded-xl p-3 border border-stone-700 text-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-xs">
                      CH
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-white text-xs">Chamhouse</span>
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span className="text-[10px] text-stone-400">Verified Business Messaging</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-stone-300 pt-1 leading-relaxed">
                    "Hi Priya, thank you for contacting Chamhouse! We've received your inquiry. Your concierge advisor is reviewing your request."
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded-full bg-stone-700 text-stone-200 text-[10px]">
                      View Status
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-stone-700 text-stone-200 text-[10px]">
                      Chat with Agent
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-stone-700 text-stone-400 text-[10px]">
                      Reply STOP
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form with Mandatory Opt-in Checkbox Button */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
                
                <div className="mb-6 pb-5 border-b border-stone-100">
                  <h2 className="text-xl font-bold font-serif text-stone-900">
                    Send Us a Message
                  </h2>
                  <p className="mt-1 text-xs text-stone-500">
                    Please provide your contact details below so our team can follow up with your inquiry.
                  </p>
                </div>

                {submissionReceipt ? (
                  <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950">
                      <div className="flex items-center gap-3 mb-3">
                        <CheckCircle className="w-7 h-7 text-emerald-600 shrink-0" />
                        <div>
                          <h3 className="font-serif font-bold text-lg text-emerald-900">
                            Message Sent & Opt-In Confirmed!
                          </h3>
                          <p className="text-xs text-emerald-700">
                            Reference Token: <strong className="font-mono">{submissionReceipt.referenceId}</strong>
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-emerald-200 text-xs space-y-2 text-emerald-800">
                        <div className="flex justify-between">
                          <span className="font-medium text-emerald-950">Name:</span>
                          <span>{submissionReceipt.fullName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-emerald-950">Mobile Number:</span>
                          <span className="font-mono">{submissionReceipt.phoneNumber}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-emerald-950">Email:</span>
                          <span>{submissionReceipt.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-emerald-950">Opt-In Timestamp:</span>
                          <span className="font-mono">{new Date(submissionReceipt.timestamp).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-emerald-950">Authorized Channels:</span>
                          <span>RCS, SMS, WhatsApp, Email</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 space-y-1.5">
                      <p className="font-semibold text-stone-900">Recorded Consent Record:</p>
                      <blockquote className="italic border-l-2 border-amber-600 pl-3 text-stone-700 text-[11px]">
                        "{submissionReceipt.consentStatement}"
                      </blockquote>
                      <p className="text-[11px] text-stone-500 pt-1">
                        You can cancel at any time by replying <strong>STOP</strong> or using the Manage Preferences tab.
                      </p>
                    </div>

                    <button
                      onClick={() => setSubmissionReceipt(null)}
                      className="w-full py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-sm font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Send Another Inquiry</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    
                    {/* Full Name */}
                    <div>
                      <label htmlFor="contact-fullName" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Your Full Name <span className="text-amber-600">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          id="contact-fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Rahul Verma"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                            errors.fullName 
                              ? 'border-red-400 bg-red-50/40 text-red-900 focus:border-red-500' 
                              : 'border-stone-300 bg-white focus:border-amber-600 focus:ring-1 focus:ring-amber-600'
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Phone Number with Country Code */}
                    <div>
                      <label htmlFor="contact-phoneNumber" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Mobile Phone Number <span className="text-amber-600">*</span> 
                        <span className="text-stone-400 font-normal lowercase ml-1">(for RCS, SMS & WhatsApp)</span>
                      </label>
                      <div className="flex gap-2">
                        <select
                          id="contact-countryCode"
                          aria-label="Country Code"
                          value={formData.countryCode}
                          onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                          className="w-24 px-2 py-2.5 rounded-xl border border-stone-300 bg-stone-50 text-xs font-medium focus:outline-none focus:border-amber-600"
                        >
                          <option value="+91">🇮🇳 +91 (IN)</option>
                          <option value="+1">🇺🇸 +1 (US)</option>
                          <option value="+44">🇬🇧 +44 (UK)</option>
                          <option value="+971">🇦🇪 +971 (UAE)</option>
                          <option value="+65">🇸🇬 +65 (SG)</option>
                          <option value="+61">🇦🇺 +61 (AU)</option>
                        </select>

                        <div className="relative flex-1">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                            <Phone className="w-4 h-4" />
                          </div>
                          <input
                            id="contact-phoneNumber"
                            type="tel"
                            value={formData.phoneNumber}
                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                            placeholder="98765 43210"
                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                              errors.phoneNumber 
                                ? 'border-red-400 bg-red-50/40 text-red-900 focus:border-red-500' 
                                : 'border-stone-300 bg-white focus:border-amber-600 focus:ring-1 focus:ring-amber-600'
                            }`}
                          />
                        </div>
                      </div>
                      {errors.phoneNumber && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.phoneNumber}
                        </p>
                      )}
                      <p className="mt-1 text-[11px] text-stone-400">
                        Will be used to send your inquiry status and Chamhouse updates.
                      </p>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Email Address <span className="text-amber-600">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          id="contact-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rahul@example.com"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                            errors.email 
                              ? 'border-red-400 bg-red-50/40 text-red-900 focus:border-red-500' 
                              : 'border-stone-300 bg-white focus:border-amber-600 focus:ring-1 focus:ring-amber-600'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Inquiry Type / Subject */}
                    <div>
                      <label htmlFor="contact-inquiryType" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Inquiry Subject
                      </label>
                      <select
                        id="contact-inquiryType"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-sm focus:outline-none focus:border-amber-600"
                      >
                        <option value="Customer Support & Order Updates">Customer Support & Order Updates</option>
                        <option value="Decor & Styling Consultation">Decor & Styling Consultation</option>
                        <option value="RCS Concierge Enrollment">RCS Concierge Enrollment</option>
                        <option value="General Brand Inquiry">General Brand Inquiry</option>
                      </select>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Your Message <span className="text-stone-400 font-normal lowercase">(optional)</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can our Chamhouse team assist you today?"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-sm focus:outline-none focus:border-amber-600"
                      ></textarea>
                    </div>

                    {/* 
                      THE EXPLICIT OPT-IN CHECKBOX BUTTON
                      Required by RCS Carriers & User Prompt:
                      "I allow [Brand Name] to send me messages via RCS, SMS, WhatsApp and email"
                      Unchecked by default.
                    */}
                    <div className={`p-4 rounded-xl border transition-all ${
                      errors.consentAgreed 
                        ? 'border-red-400 bg-red-50/60' 
                        : 'border-amber-300 bg-amber-50/60'
                    }`}>
                      <div className="flex items-start gap-3">
                        <button
                          type="button"
                          id="optin-checkbox-button"
                          role="checkbox"
                          aria-checked={formData.consentAgreed}
                          onClick={() => setFormData({ ...formData, consentAgreed: !formData.consentAgreed })}
                          className="mt-0.5 shrink-0 text-amber-700 hover:text-amber-800 focus:outline-none transition-transform active:scale-95"
                        >
                          {formData.consentAgreed ? (
                            <CheckSquare className="w-5 h-5 text-amber-700 fill-amber-100" />
                          ) : (
                            <Square className="w-5 h-5 text-stone-400 hover:text-stone-600" />
                          )}
                        </button>

                        <div className="text-xs text-stone-800 leading-relaxed">
                          <label 
                            htmlFor="optin-checkbox-button" 
                            className="cursor-pointer select-none font-medium"
                            onClick={() => setFormData({ ...formData, consentAgreed: !formData.consentAgreed })}
                          >
                            I allow <strong className="text-stone-900">{BRAND_DATA.brandName}</strong> to send me messages via RCS, SMS, WhatsApp and email.
                          </label>
                          
                          <p className="mt-1 text-stone-600 text-[11px] leading-normal">
                            I understand that consent is not a condition of purchase. Message and data rates may apply. Message frequency varies. 
                            You may revoke consent at any time by replying <strong>STOP</strong> or contacting{' '}
                            <a href={`mailto:${BRAND_DATA.supportEmail}`} className="underline text-amber-800">{BRAND_DATA.supportEmail}</a>. 
                            Reply <strong>HELP</strong> for assistance. I confirm that I have reviewed and agree to the{' '}
                            <a
                              href="/terms-and-conditions"
                              onClick={(e) => {
                                e.preventDefault();
                                onNavigate('terms');
                              }}
                              className="text-amber-800 underline hover:text-amber-900 font-semibold"
                            >
                              Terms and Conditions
                            </a>
                            {' '}and{' '}
                            <a
                              href="/privacy-policy"
                              onClick={(e) => {
                                e.preventDefault();
                                onNavigate('privacy');
                              }}
                              className="text-amber-800 underline hover:text-amber-900 font-semibold"
                            >
                              Privacy Policy
                            </a>.
                          </p>
                        </div>
                      </div>

                      {errors.consentAgreed && (
                        <p className="mt-2 text-xs text-red-700 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.consentAgreed}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      id="contact-submit-button"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-medium text-sm transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>Processing & Confirming Opt-In...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Message & Confirm Opt-In</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500 pt-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Zero spam guarantee • Originator phone data is never sold or shared</span>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        ) : (
          /* Manage Preferences / Opt-Out Section */
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-stone-200 p-8 shadow-xs">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-stone-100">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold font-serif text-stone-900">
                  Revoke Consent & Opt-Out
                </h2>
                <p className="text-xs text-stone-500">
                  Chamhouse respects your preferences. You can unsubscribe immediately below.
                </p>
              </div>
            </div>

            {optOutStatus ? (
              <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-sm">Unsubscribe Successful</span>
                </div>
                <p className="text-xs text-emerald-800">{optOutStatus}</p>
                <button
                  onClick={() => setOptOutStatus(null)}
                  className="text-xs font-semibold text-emerald-900 underline"
                >
                  Manage another phone number
                </button>
              </div>
            ) : (
              <form onSubmit={handleOptOut} className="space-y-4">
                <p className="text-xs text-stone-600 leading-relaxed">
                  Enter your registered mobile number to revoke your consent and stop receiving RCS, SMS, and WhatsApp messages from Chamhouse. You can also simply reply with <strong>STOP</strong> directly in any message thread.
                </p>

                <div>
                  <label htmlFor="optOut-phone" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Your Registered Mobile Number
                  </label>
                  <input
                    id="optOut-phone"
                    type="tel"
                    value={optOutPhone}
                    onChange={(e) => setOptOutPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-amber-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs uppercase tracking-wider transition-colors"
                >
                  Revoke Consent & Unsubscribe
                </button>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-stone-100 text-xs text-stone-500 space-y-1">
              <p>Customer Support Contact:</p>
              <p>Email: <a href={`mailto:${BRAND_DATA.supportEmail}`} className="underline text-amber-800">{BRAND_DATA.supportEmail}</a> | Phone: <a href={`tel:${BRAND_DATA.phone}`} className="underline text-amber-800">{BRAND_DATA.phone}</a></p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
