import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { BRAND_DATA } from '../data/brandData';
import { ShieldCheck, FileText, CheckCircle, Copy, Check, MessageSquare, ChevronRight, Lock, ArrowUpRight } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  const [copiedUrl, setCopiedUrl] = useState(false);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(BRAND_DATA.urls.terms);
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
          <span className="text-stone-900 font-medium">Terms and Conditions</span>
        </nav>

        {/* Distinct Page Header */}
        <div className="mb-10 pb-8 border-b border-stone-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-300 mb-3">
                <FileText className="w-4 h-4 text-amber-700" />
                <span>Legal Agreement & Telecommunications Terms</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900">
                Terms and Conditions
              </h1>
              <p className="mt-3 text-stone-600 text-sm">
                Effective Date: January 1, 2026 • Last Reviewed: September 19, 2026 • Version 2.4
              </p>
            </div>

            {/* Carrier Audit Copyable URL Badge */}
            <div className="shrink-0 bg-white p-3.5 rounded-xl border border-stone-300 shadow-xs text-xs space-y-1.5 max-w-md">
              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold text-stone-900">Terms & Conditions URL:</span>
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
                {BRAND_DATA.urls.terms}
              </code>
            </div>
          </div>

          {/* Quick Jump Links Bar */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <a href="#rcs-messaging-terms" className="px-3 py-1.5 rounded-lg bg-amber-100/70 hover:bg-amber-200 text-amber-900 font-medium transition-colors border border-amber-300/60">
              § 1. Mobile & RCS Terms
            </a>
            <a href="#acceptance" className="px-3 py-1.5 rounded-lg bg-stone-200/70 hover:bg-stone-300 text-stone-800 transition-colors">
              § 2. Acceptance
            </a>
            <a href="#intellectual-property" className="px-3 py-1.5 rounded-lg bg-stone-200/70 hover:bg-stone-300 text-stone-800 transition-colors">
              § 3. Intellectual Property
            </a>
            <a href="#liability" className="px-3 py-1.5 rounded-lg bg-stone-200/70 hover:bg-stone-300 text-stone-800 transition-colors">
              § 5. Liability
            </a>
            <a href="#governing-law" className="px-3 py-1.5 rounded-lg bg-stone-200/70 hover:bg-stone-300 text-stone-800 transition-colors">
              § 6. Governing Law
            </a>
            <a
              href="/privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('privacy');
              }}
              className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-medium transition-colors border border-emerald-200 flex items-center gap-1"
            >
              <span>View Privacy Policy</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-12 shadow-xs space-y-10 text-stone-700 text-sm leading-relaxed">
          
          {/* SECTION 1: RCS & MOBILE MESSAGING TERMS - HIGHLIGHTED */}
          <div id="rcs-messaging-terms" className="p-6 sm:p-8 rounded-2xl bg-amber-50/70 border-2 border-amber-300 space-y-6">
            <div className="flex items-center gap-3 text-amber-900">
              <ShieldCheck className="w-7 h-7 text-amber-700 shrink-0" />
              <div>
                <h2 className="text-lg sm:text-xl font-bold font-serif">
                  SECTION 1: MOBILE MESSAGING & RCS (RICH COMMUNICATION SERVICES) TERMS
                </h2>
                <span className="text-xs text-amber-800 font-medium">
                  Regulatory Compliance Standard for Google RBM, Bharti Airtel, Reliance Jio, Vi, CTIA & TRAI
                </span>
              </div>
            </div>
            
            <p className="text-xs text-amber-950 font-medium bg-amber-100/70 p-3.5 rounded-xl border border-amber-200 leading-relaxed">
              This section governs your participation in the <strong>{BRAND_DATA.brandName}</strong> Mobile Messaging Program, 
              including communications delivered through Google RCS Business Messaging, Short Message Service (SMS), WhatsApp Business, and Multimedia Messaging Service (MMS).
            </p>

            <div className="space-y-4 text-xs text-stone-800">
              <div>
                <h3 className="font-bold text-stone-900 uppercase tracking-wide">1.1 Program Description & Scope</h3>
                <p className="mt-1 leading-relaxed">
                  When you opt in to receive communications from <strong>{BRAND_DATA.brandName}</strong> ({BRAND_DATA.domain}), you agree to receive automated and concierge-managed alerts, transactional order confirmations, delivery dispatch notifications, styling consultations, and occasional promotional announcements directly to the mobile telephone number you provided.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-stone-900 uppercase tracking-wide">1.2 User Opt-In & Consent Verification</h3>
                <p className="mt-1 leading-relaxed">
                  You opt in to our messaging program by affirmatively submitting your contact information and checking the mandatory consent box located on our official website at{' '}
                  <a
                    href="/contact-us"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('contact');
                    }}
                    className="text-amber-800 font-semibold underline"
                  >
                    chamhouse.co.in/contact-us
                  </a>
                  . Consent is completely voluntary and is <strong>never</strong> a condition of purchase or receiving services from Chamhouse.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-stone-900 uppercase tracking-wide">1.3 How to Opt-Out (Revocation of Consent)</h3>
                <p className="mt-1 leading-relaxed">
                  You may opt out of our mobile messaging program at any time. To stop receiving RCS and SMS messages, simply reply with the keyword <strong>STOP</strong>, <strong>CANCEL</strong>, <strong>UNSUBSCRIBE</strong>, or <strong>QUIT</strong> to any message received from Chamhouse. Upon receipt of your opt-out request, you will receive one final message confirming that your consent has been revoked and you have been unsubscribed. No further messages will be sent unless you re-enroll.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-stone-900 uppercase tracking-wide">1.4 Customer Assistance & Help Command</h3>
                <p className="mt-1 leading-relaxed">
                  If you require assistance or experience issues with the messaging program, reply with the keyword <strong>HELP</strong> to any message, or reach out directly to our dedicated customer support team:
                </p>
                <ul className="mt-1 list-disc list-inside space-y-0.5 text-stone-700">
                  <li>Email: <a href={`mailto:${BRAND_DATA.supportEmail}`} className="underline text-amber-800">{BRAND_DATA.supportEmail}</a></li>
                  <li>Customer Care Telephone: <a href={`tel:${BRAND_DATA.phone}`} className="underline text-amber-800 font-mono">{BRAND_DATA.phone}</a></li>
                  <li>Physical Headquarters: {BRAND_DATA.address}</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-stone-900 uppercase tracking-wide">1.5 Cost, Rates & Message Frequency</h3>
                <p className="mt-1 leading-relaxed">
                  Chamhouse does not charge any additional fee to receive or transmit RCS or SMS messages. However, <strong>standard message and data rates may apply</strong> in accordance with your individual mobile carrier plan. Message frequency varies depending on your order activity and customer support interactions (typically 2 to 4 messages per order). Please consult your wireless telecommunications service provider for specific messaging and data plan rates.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-stone-900 uppercase tracking-wide">1.6 Supported Wireless Carriers & Liability Disclaimer</h3>
                <p className="mt-1 leading-relaxed">
                  Our messaging services are compatible with all major cellular network carriers in India (including Bharti Airtel, Reliance Jio, Vodafone Idea, and BSNL) as well as global international carriers supporting GSMA Universal Profile RCS. <strong>Carriers and mobile telecommunication operators are not liable for delayed or undelivered messages.</strong>
                </p>
              </div>

              <div>
                <h3 className="font-bold text-stone-900 uppercase tracking-wide">1.7 Consumer Privacy & Originator Data Protection</h3>
                <p className="mt-1 leading-relaxed">
                  We treat your mobile information with extreme confidentiality. In compliance with carrier regulations, <strong>no mobile phone numbers or originator opt-in consent data will ever be sold, rented, leased, or shared with third parties or affiliates for marketing or promotional purposes.</strong> For full disclosures, please consult our{' '}
                  <a
                    href="/privacy-policy"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('privacy');
                    }}
                    className="text-amber-800 font-semibold underline"
                  >
                    Privacy Policy
                  </a>.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: General Terms & Acceptance */}
          <section id="acceptance" className="space-y-3">
            <h2 className="text-base font-bold font-serif text-stone-900 uppercase tracking-wide">
              2. Acceptance of General Terms
            </h2>
            <p>
              By accessing, browsing, or placing inquiries on <strong className="text-stone-900">https://chamhouse.co.in/</strong> (the "Website"), you agree to be bound by these Terms and Conditions and all applicable local, national, and international laws. If you do not agree to these terms, you are prohibited from utilizing the website or registering for our communication services.
            </p>
          </section>

          {/* Section 3: Intellectual Property */}
          <section id="intellectual-property" className="space-y-3">
            <h2 className="text-base font-bold font-serif text-stone-900 uppercase tracking-wide">
              3. Intellectual Property Rights
            </h2>
            <p>
              All content featured on the Website—including brand graphics, typography, photography, product styling designs, text, icons, and software—is the exclusive intellectual property of {BRAND_DATA.legalEntity} and is protected under Indian and international copyright, trademark, and unfair competition laws. Unauthorized copying, scraping, reproduction, or distribution is strictly prohibited.
            </p>
          </section>

          {/* Section 4: Product Specifications & Accuracy */}
          <section id="products" className="space-y-3">
            <h2 className="text-base font-bold font-serif text-stone-900 uppercase tracking-wide">
              4. Product Information & Disclaimers
            </h2>
            <p>
              Chamhouse strives to ensure all descriptions, images, and dimensions of home lifestyle products are portrayed accurately. However, handcrafted items and natural stone or textile goods may possess organic variations in texture and finish. We reserve the right to amend pricing, specifications, or discontinue collections without prior notice.
            </p>
          </section>

          {/* Section 5: Limitation of Liability */}
          <section id="liability" className="space-y-3">
            <h2 className="text-base font-bold font-serif text-stone-900 uppercase tracking-wide">
              5. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted under applicable law, Chamhouse, its directors, officers, employees, and authorized agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or inability to access the Website, third-party carrier delays, or network interruptions.
            </p>
          </section>

          {/* Section 6: Governing Law & Jurisdiction */}
          <section id="governing-law" className="space-y-3">
            <h2 className="text-base font-bold font-serif text-stone-900 uppercase tracking-wide">
              6. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms and Conditions shall be governed by and interpreted in accordance with the substantive laws of the Republic of India, specifically under the Information Technology Act, 2000, and rules framed thereunder. Any legal disputes arising in connection with the Website or messaging services shall be subject to the exclusive jurisdiction of the competent courts situated in Gurugram / New Delhi, India.
            </p>
          </section>

          {/* Section 7: Official Contact */}
          <section id="contact-info" className="space-y-3 pt-4 border-t border-stone-200">
            <h2 className="text-base font-bold font-serif text-stone-900 uppercase tracking-wide">
              7. Contact & Legal Inquiries
            </h2>
            <p>
              For questions regarding these Terms & Conditions or the RCS Messaging Program, please reach our compliance department:
            </p>
            <div className="bg-stone-50 p-5 rounded-xl border border-stone-200 text-xs space-y-1.5">
              <p><strong>Legal Entity:</strong> {BRAND_DATA.legalEntity}</p>
              <p><strong>Domain:</strong> {BRAND_DATA.domain}</p>
              <p><strong>Compliance Email:</strong> <a href={`mailto:${BRAND_DATA.complianceEmail}`} className="underline text-amber-800">{BRAND_DATA.complianceEmail}</a></p>
              <p><strong>Support Email:</strong> <a href={`mailto:${BRAND_DATA.supportEmail}`} className="underline text-amber-800">{BRAND_DATA.supportEmail}</a></p>
              <p><strong>Address:</strong> {BRAND_DATA.address}</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
