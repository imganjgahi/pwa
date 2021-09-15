import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>MEHR APP</h1>
            <p>The Home Page</p>
            <p> <Link to="https://10.0.2.2:8080"> Local Link </Link> </p>
        </div>
    )
}

export default Home
