import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { BRAND_DATA } from '../data/brandData';
import { ShieldCheck, MessageSquare, FileText, Lock, Home, Sparkles, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
  onOpenComplianceKit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenComplianceKit,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavigationPage; path: string; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'home', path: '/', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { 
      id: 'contact', 
      path: '/contact-us', 
      label: 'Contact Us', 
      icon: <MessageSquare className="w-4 h-4" />, 
      badge: 'Opt-In Button' 
    },
    { id: 'terms', path: '/terms-and-conditions', label: 'Terms & Conditions', icon: <FileText className="w-4 h-4" /> },
    { id: 'privacy', path: '/privacy-policy', label: 'Privacy Policy', icon: <Lock className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <a
            id="brand-logo-button"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white font-serif font-bold text-xl shadow-md border border-amber-500/30 group-hover:scale-105 transition-transform">
              CH
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-stone-100">
                  {BRAND_DATA.brandName}
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  RCS Verified
                </span>
              </div>
              <p className="text-[11px] text-stone-400 font-mono tracking-tight">
                chamhouse.co.in
              </p>
            </div>
          </a>

          {/* Desktop Navigation with distinct real URL paths */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id || (item.id === 'contact' && currentPage === 'opt-in');
              return (
                <a
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.id);
                  }}
                  className={`relative flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-amber-600/20 text-amber-300 border border-amber-500/40 shadow-xs'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-1 px-1.5 py-0.5 text-[10px] uppercase font-bold rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {item.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Button: RCS Carrier Kit & Contact Us CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="open-rcs-kit-btn"
              onClick={onOpenComplianceKit}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 hover:border-amber-500/50 transition-colors shadow-xs"
              title="Open RCS Registration Information & Copyable URLs"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>RCS Audit Kit</span>
            </button>

            <a
              id="nav-quick-contact-btn"
              href="/contact-us"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-amber-600 hover:bg-amber-500 text-white transition-colors shadow-md hover:shadow-amber-600/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Us (Opt-In)</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-800 bg-stone-900 px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium ${
                currentPage === item.id || (item.id === 'contact' && currentPage === 'opt-in')
                  ? 'bg-amber-600/20 text-amber-300 border border-amber-500/40'
                  : 'text-stone-300 hover:bg-stone-800'
              }`}
            >
              <span className="flex items-center gap-2">
                {item.icon}
                {item.label}
              </span>
              {item.badge && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                  {item.badge}
                </span>
              )}
            </a>
          ))}
          <div className="pt-2 border-t border-stone-800 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenComplianceKit();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-stone-800 text-amber-400 border border-stone-700"
            >
              <Sparkles className="w-4 h-4" />
              RCS Registration Audit Kit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
