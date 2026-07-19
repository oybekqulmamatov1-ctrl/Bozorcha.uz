// Bozorcha — minimal service worker (PWA o'rnatilishi uchun talab qilinadi)
const CACHE_NAME = "bozorcha-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Pass-through fetch — offline keshlash kerak bo'lsa, keyinroq kengaytirish mumkin
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
