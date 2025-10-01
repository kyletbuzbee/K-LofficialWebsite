// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import PriceTicker from './PriceTicker';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PriceTicker />
      <main id="main-content" className="flex-grow">
        {/* Accessibility Fix: Added id="main-content" to the <main> tag. 
          This provides a landmark for screen readers and can be used for "skip to content" links.
        */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;