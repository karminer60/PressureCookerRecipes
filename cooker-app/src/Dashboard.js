import React from 'react';
import Categories from './Categories.js'

export default function Dashboard(){
    return (
    <div className="card bg-danger text-black fixed-container" style={{padding:"2rem"}}>
        <Categories/>
    </div>
    )
}