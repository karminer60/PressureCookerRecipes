import React from 'react';
//import Recipe from './Recipe.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import grains from './assets/grains.jpg'
import fruits from './assets/fruits.jpg'
import legumes from './assets/legumes.jpg'
import meats from './assets/meats.jpg'
import sweets from './assets/sweets.jpg'
import veggies from './assets/veggies.jpg'

import Category from './Category'

let categoriesArray = [ { image: grains, title: "Grains"}, { image: fruits, title: "Fruits"}, {image: legumes, title:"Legumes"}, {image: meats, title: "Meats"}, {image:sweets, title: "Sweets"}, {image:veggies, title: "Veggies"}]


export default function Categories() {
    return (
        <div className="d-flex flex-wrap space-evenly" style={{ font: "comfortaa" }} >
            
                {categoriesArray.map((item)=> <Category category={item.title} image={item.image}/>)}
           
        </div>
    )
}