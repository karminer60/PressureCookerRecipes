import React from 'react';

import { Link } from 'react-router-dom';

export default function Category({ category, image }) {

    return (

        <div className="card row" style={{ margin: "2rem", padding: "2rem", width: "30rem", height: "30rem", font: "comfortaa", backgroundColor: "grey" }}>
            <div className="col-sm">
                {category}
            </div>
            <div className="col-sm">
                <Link to="/Recipe">
                    <img src={image} style={{ width: "20rem", height: "20rem", paddingBottom: "5rem", borderRadius: "1rem"}} />
                </Link>
            </div>
            <div className="col-sm">
                <p style={{ paddingLeft: "5rem", padding: "3rem", paddingRight: " 0rem", font: "comfortaa" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil hic delectus excepturi ipsam
                    reprehenderit iusto rem, quam, repellendus accusantium culpa reiciendis sit dolorum aut aperiam a
                    architecto. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
            </div>
        </div>
    )
}