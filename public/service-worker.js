const cache_name = "curr-weather";
const cache_assets = [
    "/offline.html",
    "/svg/wifi-off.svg",
    "/img/logo.png",
];

self.addEventListener("install", e => {
    console.log("Service worker: installed");
    e.waitUntil(
        caches.open(cache_name)
        .then(cache => {
            console.log("caching files");
            return cache.addAll(cache_assets);
        })
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
    console.log("Service worker: fetching");
    e.respondWith(
        caches.match(e.request)
            .then( response => {
                if(response) {
                    console.log("responding with caches data", e.request.url);
                    console.log(response);
                    
                    return response;
                }
                console.log("this page no cahed, fetching..", e.request.url);
                return fetch(e.request);
            })
            .catch(() =>{
                console.log("responding with offline fallback");
                return caches.match("/offline.html");
            })
    );
});
