import React, { startTransition, useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

export default function RecipesDashboard() {
    //JavaScript
    const [result, setResult] = useState(null);
    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/recipes');
                if (response.ok) {
                    const data = await response.json();
                    setResult([false, data]);
                }else{
                    setResult([true, 'error'])
                }
            } catch (err){
                setResult([true, 'error'])
            }
        
        };
        // call the function
        fetchData();
        }, [])
            
    //React
    if(!result){
        return(
            <div>Fetching</div>
        )
    }
    //destructuring
    const [isError, recipes] = result
    if(isError){
        return <div>Error</div>
    }
    if(result.length === 0){
        return <div>None Available</div>
    }
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