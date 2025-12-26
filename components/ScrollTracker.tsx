import React, { useEffect, useState, useRef } from 'react';

const ScrollTracker: React.FC = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const emailParam = urlParams.get('e');

    if (!emailParam || hasSubmitted) {
      return;
    }

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= 30 && !hasSubmitted && formRef.current) {
        setHasSubmitted(true);

        const emailInput = formRef.current.querySelector('input[name="email"]') as HTMLInputElement;
        const pageUrlInput = formRef.current.querySelector('input[name="page_url"]') as HTMLInputElement;

        if (emailInput && pageUrlInput) {
          emailInput.value = emailParam;
          pageUrlInput.value = window.location.href;
          formRef.current.submit();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasSubmitted]);

  return (
    <>
      <iframe
        ref={iframeRef}
        name="hidden-iframe"
        style={{ display: 'none' }}
      />
      <form
        ref={formRef}
        action="https://www2.saleslabx.com/l/722833/2025-07-30/35kn1r"
        method="POST"
        target="hidden-iframe"
        style={{ display: 'none' }}
      >
        <input type="hidden" name="email" />
        <input type="hidden" name="page_url" />
      </form>
    </>
  );
};

export default ScrollTracker;
