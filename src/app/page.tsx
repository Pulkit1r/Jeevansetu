'use client';

import { useEffect, useState } from 'react';
import { LoadingScreen, LandingPage } from '@/Page';

export default function HomePage() {
  const [showLoader, setShowLoader] = useState<boolean | null>(null);

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem('hasLoaded');

    if (hasLoadedBefore) {
      setShowLoader(false);
    } else {
      setShowLoader(true);
      sessionStorage.setItem('hasLoaded', 'true');
    }
  }, []);

  if (showLoader === null) return null;

  return showLoader ? (
    <LoadingScreen onComplete={() => setShowLoader(false)} />
  ) : (
    <LandingPage />
  );
}
