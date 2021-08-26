import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

export default function RecipesDashboard() {
    return (
        <div className="container-fluid">
            <NavBar />
            <div style={{ padding: "5rem" }}>

                Recipes dashboard goes here

            </div>


            <footer className="container-fluid bg-light" style={{ padding: "5rem", fontSize: "0.85rem", font: "comfortaa", color: "gray"  }}>
                <div className="d-flex flex-row">
                    <Link to="/about" className="navAboutLink disable-link pointer-events: none" style={{ textDecoration: 'none', color: "gray" }}>
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