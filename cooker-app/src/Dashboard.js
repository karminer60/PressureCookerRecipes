import React from 'react';
import Categories from './Categories.js'

export default function Dashboard(){
    return (
    <div className="card bg-danger text-black fixed-container" style={{ borderRadius: "1rem" }}>
        <Categories/>
    </div>
    )
}