import React from 'react';
import Categories from "./Categories.js";

//set up containers for: categories, recipes, and recipe
export default function Home() {
    return (<div className="conatinerfluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{padding:"2rem"}}>
            <div class="container-fluid">
                <div className="card bg-danger" style={{padding:"1rem"}}>
                <a href="https://www.google.com/"className="navbar-brand text-white" >Simple Tomate</a>
                </div>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-danger btn-outline-white" type="submit">Search</button>
                </form>
            </div>
        </nav>

        
        <div className="container">
            <div className="card bg-secondary text-white" style={{padding:"5rem"}}>
                Picture or Intro Here
            </div>

        </div>

        <div className="container">
            <div className="card bg-white " style={{padding:"5rem"}}>
                
            </div>

        </div>
        <div className="container" >

            <Categories />

        </div>
    </div>
    )
}