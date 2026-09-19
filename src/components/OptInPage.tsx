import React from 'react';
import { NavigationPage } from '../types';
import { ContactUsPage } from './ContactUsPage';

interface OptInPageProps {
  onNavigate: (page: NavigationPage) => void;
}

/**
 * OptInPage re-exports the ContactUsPage component
 * to ensure URL compatibility with Page 4 (/contact-us and /opt-in).
 */
export const OptInPage: React.FC<OptInPageProps> = ({ onNavigate }) => {
  return <ContactUsPage onNavigate={onNavigate} />;
};
