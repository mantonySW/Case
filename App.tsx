import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SpotifyCaseStudy from './components/SpotifyCaseStudy';
import Home from './components/Home';
import ExitIntentPopup from './components/ExitIntentPopup';

export default function App() {
  useEffect(() => {
    const email = new URLSearchParams(window.location.search).get("e");
    if (!email) return;

    let hasSent = false;

    const onScroll = () => {
      const scrollTop = window.scrollY + window.innerHeight;
      const scrollHeight = document.body.scrollHeight;
      const scrolledPercent = (scrollTop / scrollHeight) * 100;

      if (scrolledPercent >= 30 && !hasSent) {
        hasSent = true;
        const pageUrl = encodeURIComponent(window.location.href);
        const encodedEmail = encodeURIComponent(email);
        const trackingPixel = new Image();
        trackingPixel.src = `https://go.slxbox.com/l/722833/2025-07-30/35kn1r?email=${encodedEmail}&page_url=${pageUrl}`;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SpotifyCaseStudy />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ExitIntentPopup />
    </Router>
  );
}