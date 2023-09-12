import React, {useState} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchName, filterName, filterRating, filterGenres, filterCreated, getGames  } from "../../redux/actions";
import './searchbar.css'



const SearchBar = ({setCurrentPage, dispatch, change, setChange}) => {
    const generos = useSelector((state) => state.genres)

    const [name, setName] = useState(" ");


    function handleInputName(e) {
        e.preventDefault()
        setName(e.target.value)
    };
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(searchName(name))
    };
    async function handleOrderName(e) {
        e.preventDefault()
        dispatch(filterName(e.target.value))
        setChange(change + 1)

    }
    function handleOrderRating(e) {
        dispatch(filterRating(e.target.value));
        setChange(change + 1)
    }

    function handleFilterGenres(e) {
        dispatch(filterGenres(e.target.value))
    }
    function handleFilterCreated(e) {
        dispatch(filterCreated(e.target.value)) 
    }
  
    
    return (   
        <div className="container">
            <button onClick={() => dispatch(getGames())}  className="box-title">
                <h1 className="title">GOOD GAMES</h1>
            </button>
      
            <div className="box-contentFilter">
                <div className="box-filter">
                    <select className="input" onChange={e => handleOrderName(e)}>
                        <option value="">Order</option>
                        <option value="asc">Upward</option>
                        <option value="des">Falling</option>
                    </select>
                </div>
                <div className="box-filter">
                    <select className="input"  onChange={(e) => { handleOrderRating(e) }}>
                        <option value='All'> Rating </option>
                        <option value="max">Max Rating</option>
                        <option value="min">Min Rating</option>
                    </select>
                </div>
                <div className="box-filter">
                    <select className="input"  onChange={e => handleFilterGenres(e)} >
                        <option value=""> Genres</option>
                            {generos.map((f) => (
                        <option key={f.id} value={f.name}>{f.name}</option>
                            ))}
                    </select>
                </div>
                <div className="box-filter">
                    <select className="input"  onChange={e => handleFilterCreated(e)}>
                            <option value="All">All</option>
                            <option value="api">Existing video games</option>
                            <option value="created">created video games</option>
                    </select>
                </div>

            </div>
            <div>
                <input className="input-search" type="text"
                    placeholder="Look for your video game here"
                    onChange={e => handleInputName(e)}
                />
                <button onClick={e => handleSubmit(e)} type="submit">Search</button>
            </div>
            <div>
                <Link to={'/form'}><button className="btn-searchbar" >Create video game</button> </Link>
            </div>


        </div>
    )
}
export default SearchBar;