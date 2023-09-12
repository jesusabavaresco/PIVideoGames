import React from "react";
import './paginado.css'

function Paginado({ gamePage, allVideogames, paginado }) {
    const pageNumber = []

    for (let i = 1; i <= Math.ceil(allVideogames / gamePage); i++) {
        pageNumber.push(i)
    }

    const handleChangePag = (num) => {
        paginado(num)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
    return (
        <ul className="paginado">
            {
                pageNumber && pageNumber.map(Number => (
                    <li key={Number}>
                        <button className="number" onClick={() => handleChangePag(Number)}>{Number}</button>
                    </li>
                ))
            }
        </ul>
    )
}

export default Paginado;