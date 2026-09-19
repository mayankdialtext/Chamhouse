import React from 'react';
import { NavigationPage } from '../types';
import { BRAND_DATA } from '../data/brandData';
import { ShieldCheck, Mail, Phone, MapPin, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenComplianceKit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenComplianceKit }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white font-serif font-bold text-lg shadow-md border border-amber-500/30">
                CH
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wide text-white">
                  {BRAND_DATA.brandName}
                </span>
                <p className="text-xs text-stone-400">
                  {BRAND_DATA.brandTagline}
                </p>
              </div>
            </div>
            
            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              Chamhouse provides curated modern living essentials and interior decor collections. 
              We utilize certified Rich Communication Services (RCS) to deliver secure, verified, 
              interactive updates directly to our valued customers.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-700/50 text-emerald-300 text-xs font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Registered RCS Business Messaging Sender</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-200 mb-4">
              Website Pages
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                  }}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Home Page
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1.5 font-medium"
                >
                  <span>Contact Us (Opt-In)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenComplianceKit}
                  className="text-stone-400 hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <span>RCS Audit Helper Kit</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Compliance & Legal Pages */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-200 mb-4">
              Legal & Policy Pages
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  id="footer-link-terms"
                  href="/terms-and-conditions"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('terms');
                  }}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  id="footer-link-privacy"
                  href="/privacy-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('privacy');
                  }}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions#rcs-messaging-terms"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('terms');
                  }}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Mobile & RCS Messaging Terms
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy#mobile-originator-protection"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('privacy');
                  }}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Mobile Originator Protection
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Revoke Consent / Opt-Out
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contact & Office */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-200 mb-4">
              Official Headquarters
            </h3>
            <ul className="space-y-3 text-xs text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{BRAND_DATA.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${BRAND_DATA.supportEmail}`} className="hover:text-white transition-colors">
                  {BRAND_DATA.supportEmail}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${BRAND_DATA.phone}`} className="hover:text-white transition-colors font-mono">
                  {BRAND_DATA.phone}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Carrier Compliance Bar */}
        <div className="pt-8 border-t border-stone-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 items-center text-xs text-stone-500">
          <div>
            <p>
              © {new Date().getFullYear()} {BRAND_DATA.legalEntity}. All rights reserved. Official domain: <span className="text-stone-300 font-mono">chamhouse.co.in</span>.
            </p>
            <p className="mt-1 text-[11px] text-stone-400">
              No mobile information will be shared with third parties/affiliates for marketing/promotional purposes.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center md:justify-end gap-3 text-[11px]">
            <span className="flex items-center gap-1 text-stone-400">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              TRAI TCCCPR Compliant
            </span>
            <span className="text-stone-700">•</span>
            <span className="flex items-center gap-1 text-stone-400">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              Google RBM Onboarding Standard
            </span>
            <span className="text-stone-700">•</span>
            <span className="flex items-center gap-1 text-stone-400">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              CTIA Compliant
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
