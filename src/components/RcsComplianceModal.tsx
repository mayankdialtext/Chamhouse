import React, { useState } from 'react';
import { BRAND_DATA } from '../data/brandData';
import { ShieldCheck, X, Copy, Check, ExternalLink, Sparkles, CheckCircle, FileCode } from 'lucide-react';
import { NavigationPage } from '../types';

interface RcsComplianceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: NavigationPage) => void;
}

export const RcsComplianceModal: React.FC<RcsComplianceModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const fields = [
    {
      id: 'brandName',
      label: 'Brand Name',
      value: BRAND_DATA.brandName,
      hint: 'Your official registered brand identifier for Google RCS & Carriers',
    },
    {
      id: 'domain',
      label: 'Website Domain',
      value: BRAND_DATA.domain,
      hint: 'Matches brand domain https://chamhouse.co.in/',
    },
    {
      id: 'contactUrl',
      label: 'Page 4: Contact Us & RCS Opt-In URL (Dedicated Page)',
      value: BRAND_DATA.urls.contact,
      hint: 'The exact URL required for Section 4: "URL on your website where customers clearly opt-in to receive RCS messages"',
      isPrimary: true,
      navTarget: 'contact' as NavigationPage,
    },
    {
      id: 'termsUrl',
      label: 'Terms & Conditions URL (Dedicated Page)',
      value: BRAND_DATA.urls.terms,
      hint: 'Dedicated page containing Section 1: Mobile Messaging & RCS Service Terms',
      navTarget: 'terms' as NavigationPage,
    },
    {
      id: 'privacyUrl',
      label: 'Privacy Policy URL (Dedicated Page)',
      value: BRAND_DATA.urls.privacy,
      hint: 'Dedicated page containing the mandatory Mobile Originator Non-Sharing Statement',
      navTarget: 'privacy' as NavigationPage,
    },
    {
      id: 'optInCheckbox',
      label: 'Opt-In Checkbox Button Text (Unchecked by default on Contact Us page)',
      value: 'I allow Chamhouse to send me messages via RCS, SMS, WhatsApp and email. Message frequency varies. Msg & data rates may apply. Reply STOP to cancel, HELP for help. View Terms and Conditions and Privacy Policy.',
      hint: 'Meets CTIA, TRAI, and Google RBM affirmative consent standards',
      multiline: true,
    },
    {
      id: 'privacyClause',
      label: 'Mandatory Carrier Non-Sharing Clause',
      value: 'No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.',
      hint: 'Included in Chamhouse Privacy Policy Directive',
      multiline: true,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-stone-900 border border-stone-800 text-stone-100 rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-stone-800 flex items-center justify-between bg-stone-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-serif text-white">
                RCS Registration Audit Kit
              </h2>
              <p className="text-xs text-stone-400">
                Distinct page URLs formatted for Google RBM, Jio, Airtel, Dotgo & Sinch forms
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-4">
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Distinct Pages Configured for Review</p>
              <p className="mt-0.5 text-stone-300">
                Each section below is hosted at its own separate page URL on chamhouse.co.in. The Contact Us page features the explicit un-checked Opt-in Checkbox Button, and the Terms & Privacy pages contain all required carrier legal clauses.
              </p>
            </div>
          </div>

          <div className="space-y-3.5 pt-2">
            {fields.map((f) => (
              <div
                key={f.id}
                className={`p-3.5 rounded-xl border transition-all ${
                  f.isPrimary
                    ? 'bg-amber-950/30 border-amber-500/50'
                    : 'bg-stone-950/70 border-stone-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                    {f.label}
                    {f.isPrimary && (
                      <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                        Requested in Prompt
                      </span>
                    )}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    {f.navTarget && (
                      <button
                        onClick={() => {
                          onNavigate(f.navTarget!);
                          onClose();
                        }}
                        className="text-[11px] text-stone-400 hover:text-white flex items-center gap-1 underline transition-colors"
                      >
                        <span>Open Page</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    )}

                    <button
                      onClick={() => copyToClipboard(f.value, f.id)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors"
                    >
                      {copiedKey === f.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-stone-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="mt-1">
                  {f.multiline ? (
                    <p className="text-xs text-stone-300 font-mono bg-stone-900 p-2.5 rounded-lg border border-stone-800 select-all leading-relaxed">
                      {f.value}
                    </p>
                  ) : (
                    <input
                      type="text"
                      readOnly
                      value={f.value}
                      className="w-full text-xs font-mono text-amber-300 bg-stone-900 px-3 py-2 rounded-lg border border-stone-800 select-all"
                    />
                  )}
                </div>
                <p className="mt-1 text-[11px] text-stone-500">{f.hint}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-stone-800 bg-stone-950 flex items-center justify-between text-xs text-stone-400">
          <span>Chamhouse Official Multi-Page Portal</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium transition-colors"
          >
            Close Kit
          </button>
        </div>

      </div>
    </div>
  );
};
