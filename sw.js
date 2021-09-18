const prefix = "[ SERVICE WORKER ] "
console.log(prefix, " is working ...")

let cacheData = "appV1"

self.addEventListener('install', function (event) {
    // event.waitUntil(
    //     caches.open(cacheData)
    //         .then(cach => {
    //             cach.addAll([
    //                 // "/static/js/main.chunk.js",
    //                 // "/static/js/vendors~main.chunk.js",
    //                 // "/static/css/vendors~main.chunk.css",
    //                 // "/static/js/bundle.js",
    //                 // "/favicon.ico",
    //                 // "/logo192.png",
    //                 // "/logo512.png",
    //                 // "/pwa/index.html",
    //                 // "/"
    //             ])
    //         })
    //         .catch(err => console.log("ERR: ", err))
    // )
})

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(res => {
                if (res) {
                    return res
                } 
                else {
                    return fetch(event.request)
                    .then(fethRes => {
                        console.log("FETCH: ", event.request.url)
                        return caches.open("dynamic")
                        .then(cach => {
                            cach.put(event.request.url, fethRes.clone())
                            return fethRes
                        })
                    })
                } 
            })
            .catch(err =>  console.log("ERR: ", err) )
    )
})