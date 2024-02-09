import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function HomePage() {
    const [people, setPeolple] = useState([])

    useEffect(() => {
        const getPeople = async() => {
            let response = await axios('http://localhost:3503')
            console.log(response.data)
            setPeolple(response.data)
        }
        getPeople()
    },[])

    return (
        <>
            <h1>This is HomePage</h1>
        </>
    )
}