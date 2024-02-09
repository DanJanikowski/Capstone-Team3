import React, { useState, useEffect } from 'react';
import Employee from '../components/Employee'

export default function HomePage({people}) {
    console.log(people)



    return (
        <>
            <h1>This is HomePage</h1>
            <ul>
                {people && people.slice(0,20).map((person) => (
                    <Employee key={person.id} person={person}/>
                ))}
            </ul>
           
        </>
    )
}