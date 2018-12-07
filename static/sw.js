'use strict';

(function () {
  var isLocalhost = Boolean(self.location.hostname === 'localhost');
  if (isLocalhost) {
    console.log("Detected localhost, service worker does not cache requests");    
    return;
  }

  var staticCacheName = 'static';
  var pagesCacheName = 'pages';
  var imagesCacheName = 'images';
  var version = 'v1::';
  var staticAssets = [
    '/css/style.css',
    '/js/bootstrap.bundle.min.js',
    '/js/jquery.min.js',
    '/js/tether.min.js'
  ];

  var updateStaticCache = function () {
    return caches.open(version + staticCacheName)
      .then(function (cache) {
        return cache.addAll(staticAssets);
      });
  }

  var stashInCache = function (cacheName, request, response) {
    caches.open(cacheName)
      .then(function (cache) {
        cache.put(request, response);
      });
  }

  var trimCache = function (cacheName, maxItems) {
    caches.open(cacheName)
      .then(function (cache) {
        cache.keys()
          .then(function (keys) {
            if (keys.length > maxItems) {
              cache.delete(keys[0])
                .then(trimCache(cacheName, maxItems));
            }
          });
      });
  }

  var clearOldCaches = function () {
    return caches.keys()
      .then(function (keys) {
        return Promise.all(
          keys
            .filter(function (key) {
              return key.indexOf(version) !== 0;
            })
            .map(function (key) {
              return caches.delete(key);
            })
        );
      });
  }

  self.addEventListener('install', function (event) {
    event.waitUntil(updateStaticCache()
      .then(function () {
        return self.skipWaiting();
      })
    );
  });

  self.addEventListener('activate', function (event) {
    event.waitUntil(clearOldCaches()
      .then(function () {
        return self.clients.claim();
      })
    );
  });
  self.addEventListener('message', function (event) {
    if (event.data.command == 'trimCaches') {
      trimCache(version + pagesCacheName, 35);
      trimCache(version + imagesCacheName, 20);
    }
  });

  self.addEventListener('fetch', function (event) {
    var request = event.request;
    // For non-GET requests, try the network first, fall back to the index page
    if (request.method !== 'GET') {
      event.respondWith(
        fetch(request)
          .catch(function () {
            return caches.match('/');
          })
      );
      return;
    }

    // For HTML requests, try the network first, fall back to the cache, finally the offline page
    if (request.headers.get('Accept').indexOf('text/html') !== -1) {
      // Fix for Chrome bug: https://code.google.com/p/chromium/issues/detail?id=573937
      if (request.mode != 'navigate') {
        request = new Request(request.url, {
          method: 'GET',
          headers: request.headers,
          mode: request.mode,
          credentials: request.credentials,
          redirect: request.redirect
        });
      }
      event.respondWith(
        fetch(request)
          .then(function (response) {
            // NETWORK
            // Stash a copy of this page in the pages cache
            var copy = response.clone();
            var cacheName = version + pagesCacheName;
            stashInCache(cacheName, request, copy);
            return response;
          })
          .catch(function () {
            // CACHE or FALLBACK
            return caches.match(request)
              .then(function (response) {
                return response || caches.match('/');
              })
          })
      );
      return;
    }

    // For non-HTML requests, look in the cache first, fall back to the network
    event.respondWith(
      caches.match(request)
        .then(function (response) {
          // CACHE
          return response || fetch(request)
            .then(function (response) {
              // NETWORK
              // If the request is for an image, stash a copy of this image in the images cache
              if (request.headers.get('Accept').indexOf('image') !== -1) {
                var copy = response.clone();
                var cacheName = version + imagesCacheName;
                stashInCache(cacheName, request, copy);
              }
              return response;
            })
            .catch(function () {
              // OFFLINE
              // If the request is for an image, show an offline placeholder
              if (request.headers.get('Accept').indexOf('image') !== -1) {
                return new Response('<svg role="img" aria-labelledby="offline-title" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title id="offline-title">Offline</title><g fill="none" fill-rule="evenodd"><path fill="#D8D8D8" d="M0 0h400v300H0z"/><text fill="#9B9B9B" font-family="Helvetica Neue,Arial,Helvetica,sans-serif" font-size="72" font-weight="bold"><tspan x="93" y="172">offline</tspan></text></g></svg>', { headers: { 'Content-Type': 'image/svg+xml' } });
              }
            });
        })
    );
  });
})();
