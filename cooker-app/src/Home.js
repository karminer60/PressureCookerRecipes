import React from 'react';
import Dashboard from "./Dashboard.js";
import logoNav from './assets/logoTomate.png'

//set up containers for: categories, recipes, and recipe
export default function Home() {
    return (<div className="conatinerfluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: "2rem" }}>
            <div class="container-fluid">
                <div className="">
                    <a href="https://www.google.com/" className="navbar-brand text-white"> <img src={logoNav} alt="nav-logo" style={{ padding: "1rem" }} /></a>
                </div>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{font: "comfortaa"}} />
                    <button className="btn btn-danger btn-outline-white" type="submit" style={{font: "comfortaa"}}>Search</button>
                </form>
            </div>
        </nav>


        <div className="d-flex flex-row">
            <div className="p-2 card text-center">
                <p style={{padding:"1rem", font: "comfortaa"}}>Simple Tomate’s mission is to provide simple instructions for 
                cooking staple foods such as beans, rice, chicken, soup, yogurt, etc. Our website caters to cooks with a 
                tight schedule and/or patience that prefer to quickly reference cooking instructions without a narrative or background. 
                </p>
                <p style={{padding:"1rem", font: "comfortaa"}}> 
                Each staple food recipe includes an ingredient list, instructions, culinary ratios, and the total time it takes to prepare and cook your food. 
                Thank you for visiting our page! We hope you enjoy each staple food instruction in your unique recipe.
                </p>
                </div>
            <div className="p-2" style={{padding: "5rem", font: "comfortaa"}}>
                <img src={logoNav} alt="logo-intro"style={{margingTop:"2rem",  width: "15rem", height: "4rem" }} />
            </div>
        </div>

        <div className="container">

            <Dashboard />

        </div>
    </div>
    )
}