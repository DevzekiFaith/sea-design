'use client';

import dynamic from 'next/dynamic';

const ServiceWorker = dynamic(
  () => import('./ServiceWorker'),
  { ssr: false }
);

export default function ServiceWorkerRegister() {
  return <ServiceWorker />;
}
