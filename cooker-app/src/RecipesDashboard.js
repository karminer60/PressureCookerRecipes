import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

export default function RecipesDashboard() {
    //JavaScript
    let recipes = fetch("http://localhost:8081/recipes")
                .then(data => {
                    //do something with the data
                })
                .catch(error => {
                    //do something with the error
                })
    //React
    return (
        <div className="container-fluid">
            <NavBar />
            <div style={{ padding: "5rem" }}>
                Make a fetch request for all recipes, here
               
                {
                 recipes.array.forEach(element => {
                    console.log(element)
            
                })}
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