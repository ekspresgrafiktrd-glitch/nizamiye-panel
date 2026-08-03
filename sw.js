// Minimal service worker — sadece PWA/APK kurulabilirliği için gerekli.
// Önbelleğe almıyor; her zaman ağdan taze veri çeker.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
