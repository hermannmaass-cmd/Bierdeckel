self.addEventListener("install", (e) => {
  self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  self.clients.claim();
});
self.addEventListener("fetch", (e) => {
  // Alles normal durchreichen (kein Caching nötig)
  e.respondWith(fetch(e.request).catch(() => new Response("Offline")));
});
