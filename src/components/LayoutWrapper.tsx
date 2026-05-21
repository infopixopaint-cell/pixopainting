'use client';

import { useState } from 'react';
import SplashScreen from './SplashScreen';
import DynamicIslandHeader from './DynamicIslandHeader';
import DynamicIslandFooter from './DynamicIslandFooter';
import FloatingContact from './FloatingContact';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <div style={{ opacity: 0, animation: 'fadeIn 1s forwards' }}>
          <DynamicIslandHeader />
          <main style={{ minHeight: '100vh' }}>
            {children}
          </main>
          <DynamicIslandFooter />
          <FloatingContact />
          <style jsx global>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
