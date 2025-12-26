import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SpotifyCaseStudy from './components/SpotifyCaseStudy';
import Home from './components/Home';
import ExitIntentPopup from './components/ExitIntentPopup';

export default function App() {
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