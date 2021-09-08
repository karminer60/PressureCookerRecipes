import React from 'react';
import { Link } from 'react-router-dom';

export default function Category({ category, image }) {

    return (

        <div className="p-2 bg-light flex-grow-1" style={{ margin: "2rem", width: "35rem", height: "30rem", font: "comfortaa", fontSize: "1.5rem", backgroundColor: "gainsboro", borderRadius: "1rem"}}>
            <div className="" style={{ padding: "2rem"}}>
                {category}
            </div>
            <div className="flex-grow-1">
                <Link to="/recipes">
                    <img src={image} alt="category" style={{ width: "25rem", height: "20rem", borderRadius: "1rem"}}/>
                </Link>
            </div>
        </div>
    )
}