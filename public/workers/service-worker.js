const cache_name = "curr-weather";
const cacheAssets = [
    "../offline.html"
];

self.addEventListener("install", e => {
    self.skipWaiting();
    console.log("Service worker: installed");
    e.waitUntil(
        caches.open(cache_name)
        .then( cache => cache.addAll(cacheAssets))
    );
});

self.addEventListener("activate", e => {
    console.log("Service worker: activated");
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cache_name) {
                        console.log("Deleting old Cache");
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

self.addEventListener("fetch", e => {
    console.log("Service worker: fetched");
    e.respondWith(
        caches.match(e.request)
            .then( response => {
                if(response) {
                    return response;
                }
                return fetch(e.request);
            })
            .catch(() => caches.match("../offline.html"))
    );
});
