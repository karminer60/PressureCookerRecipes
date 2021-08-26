import React from 'react';
import Dashboard from "./Dashboard.js";
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

//set up containers for: categories, recipes, and recipe
export default function Home() {
    return (
    <div className="conatiner-fluid">
        <NavBar/>
        
        <div className="d-flex flex-row">
            <div className="p-2" style={{ padding: "5rem", font: "comfortaa" }}>
                {/* <img src={logoNav} alt="logo-intro"style={{margingTop:"2rem",  width: "15rem", height: "4rem" }} /> */}
            </div>
        </div>

        <div className="container">

            <Dashboard />

        </div>

        <footer className="container-fluid bg-light" style={{ padding: "5rem", fontSize:"0.85rem", font: "comfortaa", color: "gray" }}>
            <div className="d-flex flex-row">
                <Link to="/about" className="navAboutLink disable-link pointer-events: none" style={{ textDecoration: 'none', color: "gray"  }}>
                    About
                </Link>
            </div>

            <div className="copyRight">
                <p>
                Copyright © 2021 Simple Tomate
                </p>
            </div>
        </footer>
    </div>
    )
}