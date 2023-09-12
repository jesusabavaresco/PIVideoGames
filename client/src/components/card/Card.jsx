import React from "react";
import './card.css'

function Card({ name, image, generos }) {
    console.log('Generos: ', generos);
    return (
        <div className="card">
            <h3 className="name">{name}</h3>
            <h3>{typeof generos[0] == 'object' ? generos.map((e) => e.name).join(' - ') : generos.map((e) => e).join(' - ') }</h3>
            <img className="img-card" src={image} alt="not found"/>
        </div>
    )
}
export default Card;