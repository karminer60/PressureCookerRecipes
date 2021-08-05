import React from 'react';

import { Link } from 'react-router-dom';

export default function Category({ category, image }) {

    return (

        <div className="p-2" style={{ margin: "2rem", padding: "2rem", width: "30rem", height: "30rem", font: "comfortaa", backgroundColor: "gainsboro"}}>
            <div className="" style={{ padding: "2rem"}}>
                {category}
            </div>
            <div className="">
                <Link to="/Recipe">
                    <img src={image} alt="category" style={{ width: "20rem", height: "20rem", borderRadius: "1rem"}}/>
                </Link>
            </div>
        </div>
    )
}