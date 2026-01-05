'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
      // First time — show loading screen
      setIsLoading(true);

      // Mark as visited
      localStorage.setItem('hasVisited', 'true');

      // Hide after animation completes
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000); // Matches animation duration

      return () => clearTimeout(timer);
    }
    // Not first visit — skip loading screen
  }, []);

  if (!isLoading) return null;

  return (
    <div className="professional-paint-loader">
      <div className="paint-animation-container">
        <div className="paint-splash"></div>
      </div>
    </div>
  );
}