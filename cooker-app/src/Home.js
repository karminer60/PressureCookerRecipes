import React from 'react';
import Categories from "./Categories.js";

//set up containers for: categories, recipes, and recipe
export default function Home(){
    return(<>
        <div className="navbar navbar-expand-lg navbar-light bg-light">
             Simple Tomate
        </div>
        <div className="container" >

            <Categories/>

        </div>
        </>
    )
}