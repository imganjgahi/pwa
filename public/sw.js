const prefix = "[ SERVICE WORKER ] "
console.log(prefix, " is working ...")

let cacheData = "appV1"
const CanCache = false

self.addEventListener('install', function (event) {
    console.log(prefix, "is install . . .")
    if(!CanCache) return
    event.waitUntil(
        caches.open(cacheData)
            .then(cach => {
                cach.addAll([
                    "/index.html",
                    "/offline.html",
                ])
            })
            .catch(err => console.log("ERR: ", err))
    )
})
self.addEventListener('activate', function (event) {
    console.log(prefix, "is Actived . . .")
    event.waitUntil(caches.keys()
        .then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if (key !== cacheData && key !== "dynamic") {
                        console.log(prefix, "Remove Cache", key)
                        return caches.delete(key)
                    }
                }))
        })
        .catch(err => console.log("ERR: ", err)))
})

self.addEventListener('fetch', function (event) {
    if(!CanCache) return event.respondWith(fetch(event.request))
    event.respondWith(
        caches.match(event.request)
            .then(res => {
                if (res) {
                    return res
                }
                else {
                    return fetch(event.request)
                        .then(fethRes => {
                            console.log(prefix, " ADD URL: ", event.request.url)
                            return caches.open("dynamic")
                                .then(cach => {
                                    cach.put(event.request.url, fethRes.clone())
                                    return fethRes
                                })
                        })
                        .catch(err => {
                            console.log("ERR: ", err)
                            return caches.open(cacheData)
                                .then(cach => {
                                    console.log("return to ofline page ")
                                    return cach.match("/offline.html")
                                })
                        })
                }
            })
            .catch(err => console.log("ERR: ", err))
    )
})