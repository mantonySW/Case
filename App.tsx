import React, { useEffect, useRef, useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SpotifyCaseStudy from './components/SpotifyCaseStudy';
import Home from './components/Home';
import ExitIntentPopup from './components/ExitIntentPopup';

export default function App() {
  const hasSentRef = useRef(false);
  const [trackingFired, setTrackingFired] = useState(false);

  useEffect(() => {
    const getEmailParam = () => {
      const searchParams = new URLSearchParams(window.location.search);
      let email = searchParams.get("e");

      if (!email && window.location.hash) {
        const hashParts = window.location.hash.split('?');
        if (hashParts.length > 1) {
          const hashParams = new URLSearchParams(hashParts[1]);
          email = hashParams.get("e");
        }
      }

      return email;
    };

    const email = getEmailParam();
    if (!email) {
      console.log('📊 No email parameter found - tracking disabled');
      return;
    }

    console.log('📊 Email tracking initialized for:', email);
    console.log('📊 Tracking will fire at 30% scroll depth');

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const scrolledPercent = ((scrollTop + windowHeight) / docHeight) * 100;

      console.log('📊 Current scroll:', {
        scrollTop: Math.round(scrollTop),
        windowHeight: Math.round(windowHeight),
        docHeight: Math.round(docHeight),
        scrolledPercent: scrolledPercent.toFixed(1) + '%',
        hasSent: hasSentRef.current
      });

      if (scrolledPercent >= 30 && !hasSentRef.current) {
        hasSentRef.current = true;
        const pageUrl = encodeURIComponent(window.location.href);
        const encodedEmail = encodeURIComponent(email);
        const trackingPixel = new Image();
        trackingPixel.src = `https://go.slxbox.com/l/722833/2025-07-30/35kn1r?email=${encodedEmail}&page_url=${pageUrl}`;

        console.log('🎯 TRACKING PIXEL FIRED!', {
          scrollDepth: scrolledPercent.toFixed(1) + '%',
          email: email,
          url: window.location.href,
          pixelUrl: trackingPixel.src
        });

        setTrackingFired(true);

        setTimeout(() => setTrackingFired(false), 3000);
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Router>
      {trackingFired && (
        <div className="fixed top-4 right-4 z-[9999] bg-green-500 text-white px-6 py-3 rounded-lg shadow-2xl animate-pulse border-2 border-green-300">
          <div className="flex items-center gap-2 font-bold">
            <span className="text-xl">🎯</span>
            <span>Tracking Pixel Fired!</span>
          </div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<SpotifyCaseStudy />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ExitIntentPopup />
    </Router>
  );
}