import React from 'react';
import Categories from "./Categories.js";

//set up containers for: categories, recipes, and recipe
export default function Home() {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <a href="https://www.google.com/" class="navbar-brand">Simple Tomatoe</a>
            

        </nav>
        <div className="container" >

            <Categories />

        </div>
    </>
    )
}