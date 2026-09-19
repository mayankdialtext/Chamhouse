/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { NavigationPage } from './types';
import { BRAND_DATA } from './data/brandData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeSection } from './components/HomeSection';
import { ContactUsPage } from './components/ContactUsPage';
import { TermsPage } from './components/TermsPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { RcsComplianceModal } from './components/RcsComplianceModal';
import { Sparkles, ShieldCheck } from 'lucide-react';

const PAGE_CONFIG: Record<NavigationPage, { path: string; title: string }> = {
  home: {
    path: '/',
    title: 'Chamhouse | Curated Living & Modern Home Aesthetics',
  },
  contact: {
    path: '/contact-us',
    title: 'Contact Us & RCS Opt-In | Chamhouse',
  },
  'opt-in': {
    path: '/contact-us',
    title: 'Contact Us & RCS Opt-In | Chamhouse',
  },
  terms: {
    path: '/terms-and-conditions',
    title: 'Terms & Conditions of Service | Chamhouse',
  },
  privacy: {
    path: '/privacy-policy',
    title: 'Privacy Policy & Mobile Data Protection | Chamhouse',
  },
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [isComplianceModalOpen, setIsComplianceModalOpen] = useState(false);

  // Determine page from current window location (path or hash)
  const resolvePageFromLocation = useCallback((): NavigationPage => {
    const pathname = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase().replace('#', '');

    if (
      pathname.includes('/contact') || 
      pathname.includes('/opt-in') || 
      hash === 'contact' || 
      hash === 'opt-in' || 
      hash === 'optin' ||
      hash === 'page4'
    ) {
      return 'contact';
    }

    if (
      pathname.includes('/terms') || 
      hash === 'terms' || 
      hash === 'terms-and-conditions'
    ) {
      return 'terms';
    }

    if (
      pathname.includes('/privacy') || 
      hash === 'privacy' || 
      hash === 'privacy-policy'
    ) {
      return 'privacy';
    }

    return 'home';
  }, []);

  // Sync state with URL on mount and browser popstate (back/forward)
  useEffect(() => {
    const handleLocationChange = () => {
      const detected = resolvePageFromLocation();
      setCurrentPage(detected);
      document.title = PAGE_CONFIG[detected]?.title || 'Chamhouse';
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, [resolvePageFromLocation]);

  // Navigate function that pushes real browser history state
  const navigateTo = (page: NavigationPage) => {
    const targetPage = page === 'opt-in' ? 'contact' : page;
    setCurrentPage(targetPage);

    const config = PAGE_CONFIG[targetPage];
    if (config) {
      window.history.pushState({ page: targetPage }, '', config.path);
      document.title = config.title;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* Top Compliance Bar for RCS Verification Audit */}
      <div className="bg-stone-950 text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-stone-300">
              Official Portal for <strong className="text-white font-medium">{BRAND_DATA.domain}</strong>
            </span>
            <span className="hidden md:inline text-stone-600">|</span>
            <span className="hidden md:inline text-stone-400">
              Prepared for Google RCS Business Messaging & Carrier Registry
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsComplianceModalOpen(true)}
              className="text-amber-400 hover:text-amber-300 text-[11px] font-medium flex items-center gap-1 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Copy Carrier Form URLs (Contact Us, Terms, Privacy)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenComplianceKit={() => setIsComplianceModalOpen(true)}
      />

      {/* Page Content: Each page is rendered distinctly based on URL path */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeSection
            onNavigate={navigateTo}
            onOpenComplianceKit={() => setIsComplianceModalOpen(true)}
          />
        )}

        {(currentPage === 'contact' || currentPage === 'opt-in') && (
          <ContactUsPage onNavigate={navigateTo} />
        )}

        {currentPage === 'terms' && (
          <TermsPage onNavigate={navigateTo} />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicyPage onNavigate={navigateTo} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenComplianceKit={() => setIsComplianceModalOpen(true)}
      />

      {/* RCS Registration Helper Modal */}
      <RcsComplianceModal
        isOpen={isComplianceModalOpen}
        onClose={() => setIsComplianceModalOpen(false)}
        onNavigate={navigateTo}
      />

    </div>
  );
}
