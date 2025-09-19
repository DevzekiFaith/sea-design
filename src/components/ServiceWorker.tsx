'use client';

import { useEffect } from 'react';

const ServiceWorker = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(() => {
            console.log('ServiceWorker registration successful');
          })
          .catch(error => {
            console.log('ServiceWorker registration failed: ', error);
          });
      });
    }
  }, []);

  return null; // This component doesn't render anything
};

export default ServiceWorker;
