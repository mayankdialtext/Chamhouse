import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { BRAND_DATA } from '../data/brandData';
import { ShieldCheck, Lock, CheckCircle, Copy, Check, ChevronRight, FileText, ArrowUpRight } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  const [copiedUrl, setCopiedUrl] = useState(false);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(BRAND_DATA.urls.privacy);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  return (
    <div className="bg-stone-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
          <span className="text-stone-900 font-medium">Privacy Policy</span>
        </nav>

        {/* Distinct Page Header */}
        <div className="mb-10 pb-8 border-b border-stone-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-900 border border-emerald-300 mb-3">
                <Lock className="w-4 h-4 text-emerald-700" />
                <span>Data Protection & Privacy Documentation</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900">
                Privacy Policy
              </h1>
              <p className="mt-3 text-stone-600 text-sm">
                Effective Date: January 1, 2026 • Last Reviewed: September 19, 2026 • Version 2.4
              </p>
            </div>

            {/* Carrier Audit Copyable URL Badge */}
            <div className="shrink-0 bg-white p-3.5 rounded-xl border border-stone-300 shadow-xs text-xs space-y-1.5 max-w-md">
              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold text-stone-900">Privacy Policy URL:</span>
                <button
                  onClick={handleCopyUrl}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-800 text-[11px] font-medium transition-colors"
                >
                  {copiedUrl ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-600" />
                      <span>Copy URL</span>
                    </>
                  )}
                </button>
              </div>
              <code className="block bg-stone-100 px-2 py-1 rounded text-emerald-800 font-mono text-[11px] break-all select-all">
                {BRAND_DATA.urls.privacy}
              </code>
            </div>
          </div>

          {/* Quick Jump Links Bar */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <a href="#mobile-originator-protection" className="px-3 py-1.5 rounded-lg bg-emerald-100/70 hover:bg-emerald-200 text-emerald-900 font-medium transition-colors border border-emerald-300/60">
              § Mandatory Mobile Clause
            </a>
            <a href="#data-collection" className="px-3 py-1.5 rounded-lg bg-stone-200/70 hover:bg-stone-300 text-stone-800 transition-colors">
              § Data Collection
            </a>
            <a href="#purpose" className="px-3 py-1.5 rounded-lg bg-stone-200/70 hover:bg-stone-300 text-stone-800 transition-colors">
              § Purpose & Use
            </a>
            <a href="#rights" className="px-3 py-1.5 rounded-lg bg-stone-200/70 hover:bg-stone-300 text-stone-800 transition-colors">
              § Opt-Out Rights
            </a>
            <a href="#grievance" className="px-3 py-1.5 rounded-lg bg-stone-200/70 hover:bg-stone-300 text-stone-800 transition-colors">
              § Grievance Officer
            </a>
            <a
              href="/terms-and-conditions"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('terms');
              }}
              className="px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 font-medium transition-colors border border-amber-200 flex items-center gap-1"
            >
              <span>View Terms & Conditions</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-12 shadow-xs space-y-10 text-stone-700 text-sm leading-relaxed">
          
          {/* CRITICAL CARRIER-COMPLIANCE MANDATORY DISCLOSURE BOX */}
          <div id="mobile-originator-protection" className="p-6 sm:p-8 rounded-2xl bg-emerald-50/80 border-2 border-emerald-400 space-y-4">
            <div className="flex items-center gap-3 text-emerald-950">
              <ShieldCheck className="w-7 h-7 text-emerald-600 shrink-0" />
              <div>
                <h2 className="text-lg sm:text-xl font-bold font-serif text-emerald-950">
                  MANDATORY CARRIER DIRECTIVE: MOBILE DATA NON-SHARING GUARANTEE
                </h2>
                <span className="text-xs text-emerald-800 font-medium">
                  Compliance clause for Google RCS, CTIA, Twilio, Sinch, Dotgo & Indian Telecom Operators
                </span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-emerald-300 shadow-xs">
              <p className="font-semibold text-stone-950 text-sm sm:text-base leading-relaxed">
                "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties."
              </p>
            </div>

            <p className="text-xs text-emerald-900 leading-normal">
              Chamhouse maintains an absolute zero-tolerance policy against unsolicited spam, data brokering, or unauthorized lead sharing. Mobile phone numbers collected via our website, checkout, or customer service channels are used strictly and solely for intended operational and opted-in communications from Chamhouse.
            </p>
          </div>

          {/* Section 1: Overview */}
          <section id="overview" className="space-y-3">
            <h2 className="text-base font-bold font-serif text-stone-900 uppercase tracking-wide">
              1. Overview & Commitment to Privacy
            </h2>
            <p>
              At <strong className="text-stone-900">{BRAND_DATA.brandName}</strong> (accessible at <strong className="text-stone-900">{BRAND_DATA.domain}</strong>, legally operated by {BRAND_DATA.legalEntity}), we hold consumer privacy in the highest regard. This Privacy Policy details our protocols regarding the collection, handling, safeguarding, and disclosure of personal data collected when you browse our website, interact with customer care, or enroll in our Rich Communication Services (RCS), SMS, WhatsApp, and email messaging programs.
            </p>
          </section>

          {/* Section 2: Data We Collect */}
          <section id="data-collection" className="space-y-3">
            <h2 className="text-base font-bold font-serif text-stone-900 uppercase tracking-wide">
              2. Personal Information We Collect
            </h2>
            <p>
              We collect information that you knowingly and voluntarily provide to us when using our services:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-stone-800 pl-2">
              <li>
                <strong>Contact Identifiers:</strong> Your full name, mobile telephone number, email address, and shipping address.
              </li>
              <li>
                <strong>Consent & Opt-In Metadata:</strong> Specific timestamp (date and time) of consent, IP address at the time of opt-in, consent statement version, and selected communication preferences (e.g. order tracking, concierge styling).
              </li>
              <li>
                <strong>Interaction & Service History:</strong> Inquiries submitted via the Contact Us portal, chat history with our styling concierge, delivery acknowledgment receipts, and opt-out requests (STOP keywords).
              </li>
              <li>
                <strong>Technical Device Data:</strong> Browser user agent, device operating system, and carrier network type for optimized RCS rich-card rendering.
              </li>
            </ul>
          </section>

          {/* Section 3: Purpose of Processing */}
          <section id="purpose" className="space-y-3">
            <h2 className="text-base font-bold font-serif text-stone-900 uppercase tracking-wide">
              3. Purpose & Legal Basis of Processing
            </h2>
            <p>
              We utilize your personal information exclusively for lawful business purposes based on your explicit consent and legitimate contract fulfillment:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-stone-800 pl-2">
              <li>Delivering automated transactional alerts, dispatch updates, and delivery tracking via verified RCS and SMS.</li>
              <li>Responding to customer support tickets and home styling inquiries.</li>
              <li>Transmitting occasional collection releases or special promotions only when you have affirmatively chosen to receive them.</li>
              <li>Complying with regulatory obligations under the Telecom Commercial Communications Customer Preference Regulations (TRAI TCCCPR 2018) and the Indian Digital Personal Data Protection Act, 2023 (DPDP Act).</li>
            </ul>
          </section>

          {/* Section 4: Non-Disclosure */}
          <section id="non-disclosure" className="space-y-3">
            <h2 className="text-base font-bold font-serif text-stone-900 uppercase tracking-wide">
              4. Strict Non-Disclosure & Third-Party Sharing Restrictions
            </h2>
            <p>
              Chamhouse does not sell, trade, rent, or lease consumer personal data or phone numbers. We share information only with trusted technical infrastructure providers (such as telecommunications carriers, cloud hosts, and certified SMS/RCS aggregators) strictly for transmitting your authorized messages under strict contractual non-disclosure agreements.
            </p>
            <div className="bg-stone-50 border-l-4 border-emerald-600 p-4 rounded-r-xl text-xs text-stone-800">
              <strong>Explicit Guarantee:</strong> Text messaging originator opt-in data and consent will never be provided to any third party for marketing, promotional, or lead generation initiatives.
            </div>
          </section>

          {/* Section 5: Data Security */}
          <section id="security" className="space-y-3">
            <h2 className="text-base font-bold font-serif text-stone-900 uppercase tracking-wide">
              5. Data Security & Encryption Standards
            </h2>
            <p>
              We apply industry-standard cryptographic protocols (TLS 1.3 in transit and AES-256 at rest) to safeguard your personal contact data. Administrative access is restricted by role-based access control (RBAC) and multi-factor authentication. RCS messaging utilizes Google Jibe / GSMA cryptographic signatures to prevent man-in-the-middle attacks and spoofing.
            </p>
          </section>

          {/* Section 6: User Rights & Opt-Out */}
          <section id="rights" className="space-y-3">
            <h2 className="text-base font-bold font-serif text-stone-900 uppercase tracking-wide">
              6. Your Rights & How to Revoke Consent
            </h2>
            <p>
              Under applicable data protection laws, you retain full ownership and control over your personal data:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-stone-800 pl-2">
              <li>
                <strong>Instant Opt-Out:</strong> Text <strong>STOP</strong> to any message from Chamhouse to immediately revoke messaging consent.
              </li>
              <li>
                <strong>Online Opt-Out:</strong> Use our online{' '}
                <a
                  href="/contact-us"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="text-emerald-800 underline font-semibold"
                >
                  Contact Us / Manage Preferences Portal
                </a>
                .
              </li>
              <li>
                <strong>Access & Deletion:</strong> You may request an export or complete erasure of your personal data by emailing{' '}
                <a href={`mailto:${BRAND_DATA.privacyEmail}`} className="underline text-emerald-800">
                  {BRAND_DATA.privacyEmail}
                </a>.
              </li>
            </ul>
          </section>

          {/* Section 7: Grievance Officer */}
          <section id="grievance" className="space-y-3 pt-4 border-t border-stone-200">
            <h2 className="text-base font-bold font-serif text-stone-900 uppercase tracking-wide">
              7. Grievance Redressal Officer (DPDP Act & IT Act 2000 Compliance)
            </h2>
            <p>
              In accordance with the Information Technology Act, 2000 and Digital Personal Data Protection regulations, the designated Grievance Officer for {BRAND_DATA.brandName} is:
            </p>
            <div className="bg-stone-50 p-5 rounded-xl border border-stone-200 text-xs space-y-1.5 text-stone-800">
              <p><strong>Designation:</strong> Data Protection & Grievance Officer</p>
              <p><strong>Company:</strong> {BRAND_DATA.legalEntity}</p>
              <p><strong>Official Domain:</strong> {BRAND_DATA.domain}</p>
              <p><strong>Email:</strong> <a href={`mailto:${BRAND_DATA.privacyEmail}`} className="underline text-emerald-800 font-semibold">{BRAND_DATA.privacyEmail}</a></p>
              <p><strong>Support Email:</strong> <a href={`mailto:${BRAND_DATA.supportEmail}`} className="underline text-emerald-800">{BRAND_DATA.supportEmail}</a></p>
              <p><strong>Direct Hotline:</strong> <a href={`tel:${BRAND_DATA.phone}`} className="underline text-emerald-800">{BRAND_DATA.phone}</a></p>
              <p><strong>Physical Address:</strong> {BRAND_DATA.address}</p>
              <p className="text-[11px] text-stone-500 pt-1">
                Grievances are officially acknowledged within 24 hours and addressed within 15 working days.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
