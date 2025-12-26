import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SpotifyCaseStudy from './components/SpotifyCaseStudy';
import Home from './components/Home';
import ExitIntentPopup from './components/ExitIntentPopup';

export default function App() {
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
      console.log('No email parameter found - tracking disabled');
      return;
    }

    console.log('Email tracking initialized for:', email);
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
        console.log('Tracking pixel fired at', scrolledPercent.toFixed(1), '% scroll depth');
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