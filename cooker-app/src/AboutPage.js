import React from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router-dom'

export default function AboutPage() {
    return (
        <div className="container-fluid">
            <NavBar />
            <div className="p-2 card text-center" style={{ }}>
                <h1>About Simple Tomate</h1>
                <p style={{ padding: "1rem", font: "comfortaa" }}>Simple Tomate’s mission is to provide simple instructions for
                    cooking staple foods such as beans, rice, chicken, soup, yogurt, etc. Our website caters to cooks with a
                    tight schedule and/or patience that prefer to quickly reference cooking instructions without a narrative or background.
                </p>
                <p style={{ padding: "1rem", font: "comfortaa" }}>
                    Each staple food recipe includes an ingredient list, instructions, culinary ratios, and the total time it takes to prepare and cook your food.
                    Thank you for visiting our page! We hope you enjoy each staple food instruction in your unique recipe.
                </p>
            </div>

            <footer className="bg-light" style={{ padding: "3rem", fontSize:"1rem", font: "comfortaa"}}>
                <div className="d-flex flex-row">
                    <Link to="/about" className="navAboutLink" style={{ }}>
                        About
                    </Link>
                </div>

                <div className="copyRight" style={{ padding: "5rem", font: "comfortaa", fontSize: "0.85rem" }}>
                    <p>
                        Copyright © 2021 Simple Tomate All rights reserved
                    </p>
                </div>
            </footer>
        </div>


    )

}