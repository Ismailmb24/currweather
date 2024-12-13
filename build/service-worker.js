const cache_name = "curr-weather";
const cache_assets = [
    "/offline.html",
    "/svg/wifi-off.svg",
    "/img/logo.png",
];

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(cache_name)
        .then(cache => {
            return cache.addAll(cache_assets);
        })
    );
});

self.addEventListener("activate", e => {
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cache_name) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request)
            .then( response => {
                if(response) {
                    return response;
                }
                return fetch(e.request);
            })
            .catch(() =>{
                return caches.match("/offline.html");
            })
    );
});
