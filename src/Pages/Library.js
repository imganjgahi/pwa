import React from 'react'
import ICON from './icon.png'
function Library() {

    function openDB() { }
    function swDisplayNewNotif() {

        if ('serviceWorker' in navigator) {
            const options = {
                body: "شما با موفقیت عملیات را انجام دادید",
                icon: ICON,
                image: "/icon.png",
                dir: "rtl",
                lang: "fa-IR",
                vibrate: [100, 50, 100],
                badge: "/icon.png"
            }
            navigator.serviceWorker.ready.then(swReg => {
                swReg.showNotification("SW Successfully Notification", options)
            })
        }
    }
    function displayNewNotif() {
        const options = {
            body: "شما با موفقیت عملیات را انجام دادید"
        }
        new Notification("Successfully Notification", options)
    }
    function enableNotif() {
        Notification.requestPermission(function (result) {
            console.log("RES: ", result)
            if (result !== 'granted') {
                console.log(" no permission")
            } else {
                console.log(" has permission")
                // displayNewNotif()
                swDisplayNewNotif()
            }
        })
    }
    const allowNotif = 'Notification' in window
    return (
        <div>
            <button onClick={openDB}>open DB</button> <br /><br />
            {allowNotif && <button onClick={enableNotif}>Enable Notification</button>}
        </div>
    )
}

export default Library
