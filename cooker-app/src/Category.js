import React from 'react';
import { Link } from 'react-router-dom';

export default function Category({ category, image }) {

    return (

        <div className="p-2 bg-light" style={{ margin: "2rem", padding: "2rem", width: "30rem", height: "30rem", font: "comfortaa", backgroundColor: "gainsboro", borderRadius: "1rem"}}>
            <div className="" style={{ padding: "2rem"}}>
                {category}
            </div>
            <div className="">
                <Link to="/recipes">
                    <img src={image} alt="category" style={{ width: "20rem", height: "20rem", borderRadius: "1rem"}}/>
                </Link>
            </div>
        </div>
    )
}