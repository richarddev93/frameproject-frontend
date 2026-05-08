'use client';

import { useEffect } from 'react';

export const Analytics = () => {
  useEffect(() => {
    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_path: window.location.pathname,
      });
    `;
    document.head.appendChild(script2);

    console.log('Google Analytics initialized (mock mode)');
    console.log('Replace G-XXXXXXXXXX with your actual GA4 Measurement ID');

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null;
};
