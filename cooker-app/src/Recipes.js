import React from 'react';
//import Recipe from './Recipe.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import rice from './rice.png'


export default function Recipes() {
    return (
        <div className="card bg-white text-dark" style={{ padding: "2rem" }} >
            Recipes
            <Link to="/Recipe">
                <img src={rice} alt="rice" className="img-fluid"/>
            </Link>

        </div>
    )
}