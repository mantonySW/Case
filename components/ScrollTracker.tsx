import React, { useEffect, useState } from 'react';

const ScrollTracker: React.FC = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const emailParam = urlParams.get('e');

    if (!emailParam || hasSubmitted) {
      return;
    }

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= 30 && !hasSubmitted) {
        setHasSubmitted(true);

        const formData = new FormData();
        formData.append('email', emailParam);
        formData.append('page_url', window.location.href);

        fetch('https://www2.saleslabx.com/l/722833/2025-07-30/35kn1r', {
          method: 'POST',
          body: formData,
          mode: 'no-cors'
        }).catch(() => {
          // Silently handle errors
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasSubmitted]);

  return null;
};

export default ScrollTracker;
