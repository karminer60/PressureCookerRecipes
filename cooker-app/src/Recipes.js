import React from 'react';
import Recipe from './Recipe.js';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Recipes(){
    return(
        <div className="card bg-warning text-danger" style={{padding:"2rem"}} >
            Recipes
            <Recipe/>
        </div>
    )
}