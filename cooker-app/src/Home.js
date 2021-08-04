import React from 'react';
import Dashboard from "./Dashboard.js";
import logoNav from './assets/logoTomate.png'
import logoIntro from './assets/logoTomate5.png'

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
                <p style={{padding:"1rem", font: "comfortaa"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil hic delectus excepturi ipsam
                reprehenderit iusto rem, quam, repellendus accusantium culpa reiciendis sit dolorum aut aperiam a
                architecto. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <p style={{padding:"1rem", font: "comfortaa"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil hic delectus excepturi ipsam
                reprehenderit iusto rem, quam, repellendus accusantium culpa reiciendis sit dolorum aut aperiam a
                architecto. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                </div>
            <div className="p-2" style={{padding: "5rem", font: "comfortaa"}}>
                <img src={logoIntro} alt="logo-intro"style={{ width: "20rem", height: "20rem" }} />
            </div>

        </div>

        <div className="container">
            <div className="card bg-white" style={{ padding: "5rem" }}>

            </div>

        </div>
        <div className="container" >

            <Dashboard />

        </div>
    </div>
    )
}