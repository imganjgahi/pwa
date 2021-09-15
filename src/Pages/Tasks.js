import React, { useState, useEffect } from 'react'

function Tasks() {

    const [state, setState] = useState(null)

    function fetchData() {
        fetch('/dummy.json')
            .then(response => response.json())
            .then(data => setState(data));
    }
    useEffect(() => {
        fetchData()
     }, [])
    return (
        <div>
            {JSON.stringify(state)}
        </div>
    )
}

export default Tasks
