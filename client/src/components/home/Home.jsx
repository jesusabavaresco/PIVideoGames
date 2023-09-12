import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from '../searchbar/SearchBar'
import Card from '../card/Card'
import Paginado from "../paginado/Paginado";
import { getGames, getGenres } from "../../redux/actions";
import './home.css'


const HomePage = () => {
    const dispatch = useDispatch();
    const allVideogames = useSelector((state) => state.videogames)
    // const generos = useSelector((state) => state.genres)

    const [change, setChange] = useState(0);

    useEffect(() => {
        dispatch(getGames());
        dispatch(getGenres())
    }, [dispatch])
    const [currentPage, setCurrentPage] = useState(1)
    const [gamePage] = useState(15)

    const lastGame = currentPage * gamePage
    const firstGame = lastGame - gamePage

    let currentGame = allVideogames.slice(firstGame, lastGame)
    
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    console.log('allvideogamess: ', allVideogames);
    return (
        <div className="container-home">
            <SearchBar setCurrentPage={setCurrentPage} dispatch={dispatch} change={change} setChange={setChange}/>
            <div className='container-cards'> 
                {
                    currentGame.length > 0 ? currentGame?.map(elemento => {
                        return (
                            <div key={elemento.id}> 
                            <Link className='link' to={`/detail/${elemento.id}`}>
                                <Card
                                name={elemento.name}
                                image={elemento.image ? elemento.image : 'poner imagen'}
                                generos={elemento.generos}
                                />
                            </Link>
                            </div>
                        )
                    }) : ( <div className="box-loader"><span className="load"></span></div> )
                }
            </div>
            <Paginado className="paginado"
                gamePage={gamePage}
                allVideogames={allVideogames.length}
                paginado={paginado}
            />

        </div>
    )
}
export default HomePage;