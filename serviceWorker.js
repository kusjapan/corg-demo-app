
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('demo-cache-v1').then(cache => {
      return cache.addAll([
        'index.html',
        'manual_sample.pdf',
        'manifest.json',
        'serviceWorker.js',
        'icon-192.png',
        'icon-512.png'
      ]);
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
