import React from 'react';
import Recipe from './Recipe.js';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Recipes(){
    return(
        <div className="conatainer" >
            Recipes
            <Recipe/>
        </div>
    )
}