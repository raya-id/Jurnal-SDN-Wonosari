const CACHE_NAME = 'jurnal-Guru-pwa-cache-v2';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './Jiraya-Free-Ox192.png',
  './Jiraya-Free-Ox512.png'
];

// Instalasi SW & Penyimpanan Cache Aset Statis (App Shell)
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Aktivasi & Pembersihan Cache Lama
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Interseptor Permintaan (Fetch Interceptor)
self.addEventListener('fetch', (event) => {
  // PENGECUALIAN: Jangan cache iframe Google Script (Harus selalu live/jaringan)
  if (event.request.url.includes('script.google.com')) {
    event.respondWith(fetch(event.request));
    return;
  }
  
  // Strategi Cache-First untuk aset PWA statis agar proses instalasi didukung
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
