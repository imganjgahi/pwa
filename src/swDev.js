export default function swDev() {
    let swURL = `${process.env.PUBLIC_URL}/sw.js`

    navigator.serviceWorker.register(swURL)
    .then(res => console.log("SW IS REGISTED: ", res))
    .catch(err => console.log("ERR: ", err))
}