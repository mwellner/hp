var CACHE_NAME_DYNAMIC = 'mwellner-dynamic-v1';
var CACHE_NAME_SHELL = 'mwellner-shell-v1';
var urlsToCache = [
  '/css/style.css',
  '/js/bootstrap.bundle.min.js',
  '/js/jquery.min.js',
  '/js/tether.min.js'
];

const isLocalhost = Boolean(self.location.hostname === 'localhost');

if (!isLocalhost) {
  self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME_SHELL)
        .then(function (cache) {
          return cache.addAll(urlsToCache);
        })
    );
  });

  self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.open(CACHE_NAME_DYNAMIC).then(function (cache) {
        return cache.match(event.request).then(function (response) {
          return response || fetch(event.request).then(function (response) {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  });

  self.addEventListener('activate', function (event) {
    var cacheWhitelist = [CACHE_NAME_SHELL, CACHE_NAME_DYNAMIC];
    event.waitUntil(
      caches.keys().then(function (cacheNames) {
        return Promise.all(
          cacheNames.map(function (cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
} else {
  console.log("Detected localhost, service worker does not cache requests");
}