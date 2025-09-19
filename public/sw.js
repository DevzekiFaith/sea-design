// This is a basic service worker
// You can customize it based on your needs

const CACHE_NAME = 'lucktang-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/favicon.ico'
  // Add other assets you want to cache
];

self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
