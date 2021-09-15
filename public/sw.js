const prefix = "[ SERVICE WORKER ] "
console.log(prefix, " is working ...")

let cacheData = "appV1"

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheData)
        .then(cach => {
            cach.addAll([
                "/pwa/static/js/main.chunk.js",
                "/pwa/static/js/vendors~main.chunk.js",
                "/pwa/static/css/vendors~main.chunk.css",
                "/pwa/static/js/bundle.js", 
                "/index.html",
                "/pwa/index.html",
                "/",
                "/pwa/about",
                "/pwa/about/",
                "/pwa/tasks",
                "/pwa/tasks/",

                "static/js/main.chunk.js",
                "static/js/vendors~main.chunk.js",
                "static/css/vendors~main.chunk.css",
                "static/js/bundle.js", 
                "/index.html",
                "index.html",
                "/",
                "about",
                "about/",
                "tasks",
                "tasks/",
            ])
        })
        .catch(err => console.log("ERR: ", err))
    )
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(res => {
            if(res) return res
            else return fetch(event.request)
        })
        .catch(err => console.log("ERR: ", err))
    )
})