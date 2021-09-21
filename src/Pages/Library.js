import React from 'react'

function Library() {

    function openDB() { }
    function displayNewNotif() { 
        const options = {
            body: "شما با موفقیت عملیات را انجام دادید"
        }
        new Notification("Successfully Notification", options)
    }
    function enableNotif() {
        Notification.requestPermission(function(result) {
            console.log("RES: ", result)
            if(result !== 'granted') {
                console.log(" no permission")
            } else {
                console.log(" has permission")
                displayNewNotif()
            }
        })
    }
    const allowNotif = 'Notification' in window
    return (
        <div>
            <button onClick={openDB}>open DB</button> <br /><br/>
            {allowNotif && <button onClick={enableNotif}>Enable Notification</button>}
        </div>
    )
}

export default Library
