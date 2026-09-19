import React from 'react';
import { NavigationPage } from '../types';
import { BRAND_DATA } from '../data/brandData';
import { 
  ShieldCheck, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Bell, 
  Smartphone, 
  HeartHandshake,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface HomeSectionProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenComplianceKit: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate, onOpenComplianceKit }) => {
  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 text-white pt-16 sm:pt-24 pb-20 border-b border-stone-800">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            
            {/* Verification Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium mb-6">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Official Brand Portal & RCS Verified Communication Hub</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-100 leading-tight">
              Elevating Contemporary Living with Thoughtful Design.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-stone-300 leading-relaxed font-light">
              Welcome to <strong className="text-white font-medium">Chamhouse</strong> ({BRAND_DATA.domain}). We curate refined home decor, interior textiles, and timeless lifestyle essentials. Stay connected with genuine, verified updates through Rich Communication Services (RCS).
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                id="hero-contact-button"
                href="/contact-us"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-medium text-base shadow-lg shadow-amber-900/40 hover:shadow-amber-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>Contact Us (Opt-In Page)</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                id="hero-compliance-kit-button"
                onClick={onOpenComplianceKit}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-stone-800/80 hover:bg-stone-800 text-stone-200 border border-stone-700 font-medium text-sm transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>RCS Registration Audit Kit</span>
              </button>
            </div>

            {/* Quick Metrics / Signals for Telecom Reviewers */}
            <div className="mt-12 pt-8 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
              <div>
                <span className="block text-2xl font-bold font-serif text-amber-400">100%</span>
                <span className="text-xs text-stone-400">Consent-Driven Messaging</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-serif text-amber-400">TRAI</span>
                <span className="text-xs text-stone-400">TCCCPR 2018 Compliant</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-serif text-amber-400">Zero</span>
                <span className="text-xs text-stone-400">3rd-Party Data Sharing</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-serif text-amber-400">Google RBM</span>
                <span className="text-xs text-stone-400">Certified Sender Spec</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pages Directory Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
            Dedicated Brand Pages
          </span>
          <h2 className="mt-2 text-3xl font-serif font-bold text-stone-900">
            Explore Chamhouse Dedicated Pages
          </h2>
          <p className="mt-2 text-stone-600 text-sm">
            Visit our individual pages for customer inquiries, legal terms, and privacy protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Contact Us */}
          <div className="p-7 rounded-2xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-stone-900 font-serif">
                  Contact Us Page
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold uppercase">
                  Opt-In
                </span>
              </div>
              <p className="text-xs text-stone-500 font-mono mb-3">
                /contact-us
              </p>
              <p className="text-sm text-stone-600 leading-relaxed">
                Dedicated contact page featuring customer support channels, physical office details, and the mandatory <strong>Opt-in Checkbox Button</strong> to authorize communications via RCS, SMS, WhatsApp, and email.
              </p>
            </div>
            
            <div className="pt-6">
              <a
                href="/contact-us"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Visit Contact Us Page</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Terms & Conditions */}
          <div className="p-7 rounded-2xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-stone-900 font-serif">
                  Terms & Conditions
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-800 font-bold uppercase">
                  Legal
                </span>
              </div>
              <p className="text-xs text-stone-500 font-mono mb-3">
                /terms-and-conditions
              </p>
              <p className="text-sm text-stone-600 leading-relaxed">
                Dedicated legal terms page featuring Section 1: Mobile Messaging & RCS Service Terms, opt-out STOP command, HELP support, rates disclaimers, and carrier non-liability.
              </p>
            </div>
            
            <div className="pt-6">
              <a
                href="/terms-and-conditions"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('terms');
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Visit Terms & Conditions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3: Privacy Policy */}
          <div className="p-7 rounded-2xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5">
                <Lock className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-stone-900 font-serif">
                  Privacy Policy
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-bold uppercase">
                  DPDP Act
                </span>
              </div>
              <p className="text-xs text-stone-500 font-mono mb-3">
                /privacy-policy
              </p>
              <p className="text-sm text-stone-600 leading-relaxed">
                Dedicated privacy policy page with the mandatory Mobile Originator Non-Sharing clause, data security protocols, opt-out mechanisms, and designated Grievance Officer details.
              </p>
            </div>
            
            <div className="pt-6">
              <a
                href="/privacy-policy"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('privacy');
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Visit Privacy Policy</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Why Chamhouse uses RCS (Rich Communication Services) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
            Next-Generation Messaging Experience
          </span>
          <h2 className="mt-2 text-3xl font-serif font-bold text-stone-900">
            Why We Choose RCS Business Messaging
          </h2>
          <p className="mt-3 text-stone-600 text-base">
            Instead of standard unverified SMS, Chamhouse utilizes Google-verified Rich Communication Services to guarantee authenticity, cryptographic security, and interactive concierge care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-7 rounded-2xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2 font-serif">
              Google Verified Sender Badge
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Every message displays our official Chamhouse logo, green verification checkmark, and validated business profile—protecting our customers against phishing and fraudulent sender impersonation.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2 font-serif">
              Rich Interactive Cards & Tracking
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Receive high-resolution visual order receipts, interactive delivery tracking with 1-click status updates, dispatch previews, and quick-reply action chips directly inside your phone's native Messages app.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2 font-serif">
              Zero-Spam & Instant Opt-Out
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              We strictly enforce opt-in consent. No customer is contacted without prior authorization. You can revoke permission anytime by simply replying with <span className="font-mono font-semibold text-stone-800">STOP</span>.
            </p>
          </div>

        </div>
      </section>

      {/* Brand Collections & Living Concepts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-stone-800 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Curated Collections
              </span>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-stone-100">
                Crafting Warmth, Elegance & Modernity for Every Home
              </h2>
              <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
                Chamhouse delivers high-grade interior furnishings, artisanal lighting, organic cotton linens, and bespoke living accents. Each piece balances functional longevity with architectural simplicity.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-stone-300">
                    <strong>Bespoke Interior Accents:</strong> Handcrafted stone, ceramic, and hardwood table decor.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-stone-300">
                    <strong>Organic Home Textiles:</strong> Sustainably harvested linen throws, beddings, and rugs.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-stone-300">
                    <strong>Concierge Styling Support:</strong> Live design guidance and personalized consultation over verified RCS.
                  </span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="/contact-us"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-sm font-medium transition-colors"
                >
                  Join Chamhouse Concierge via RCS
                </a>
              </div>
            </div>

            {/* Visual preview card */}
            <div className="bg-stone-800/90 border border-stone-700 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-stone-700 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-xs">
                    CH
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-semibold text-white">Chamhouse</span>
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-[11px] text-stone-400">Verified Business Account • Messages</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-mono text-emerald-300 bg-emerald-950/80 rounded border border-emerald-800">
                  RCS Active
                </span>
              </div>

              {/* Simulated message bubbles */}
              <div className="space-y-4">
                <div className="bg-stone-700/60 rounded-xl p-4 text-xs text-stone-200 border border-stone-600/50 space-y-2">
                  <p className="font-semibold text-amber-300">
                    Welcome to Chamhouse Concierge! ✨
                  </p>
                  <p className="text-stone-300">
                    Your order #CH-8829 (Ceramic Artisan Vase) has been carefully packed and dispatched. Track your delivery in real-time below:
                  </p>
                  <div className="p-3 bg-stone-900/80 rounded-lg border border-stone-700 mt-2">
                    <div className="flex justify-between items-center text-[11px] text-stone-400 mb-1">
                      <span>Status: Out for Delivery</span>
                      <span className="text-amber-400 font-medium">ETA: 4:30 PM Today</span>
                    </div>
                    <div className="w-full bg-stone-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full w-3/4 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-[11px]">
                  <span className="px-3 py-1.5 rounded-full bg-amber-600/30 text-amber-300 border border-amber-500/40">
                    📍 Live Map Tracking
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-stone-700 text-stone-300 border border-stone-600">
                    💬 Chat with Stylist
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-stone-700 text-stone-300 border border-stone-600">
                    🛑 Reply STOP to Opt-Out
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Clear Compliance & Transparency Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-amber-50/60 border border-amber-200/80">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
                <HeartHandshake className="w-4 h-4 text-amber-700" />
                Customer Trust & Regulatory Adherence
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                Official Opt-In & Compliance Documents Ready for Audit
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                As required by telecom regulations and Google RCS guidelines, our official Contact Us Opt-In Page (Page 4 URL), Terms of Service, and Privacy Policy are publicly hosted and accessible as individual dedicated pages on <span className="font-mono text-stone-800">https://chamhouse.co.in/</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/contact-us"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
                className="px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-sm font-medium transition-colors shadow-xs"
              >
                Contact Us (Page 4 Opt-In)
              </a>
              <a
                href="/terms-and-conditions"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('terms');
                }}
                className="px-4 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 text-sm font-medium transition-colors"
              >
                Terms and Conditions
              </a>
              <a
                href="/privacy-policy"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('privacy');
                }}
                className="px-4 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 text-sm font-medium transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
