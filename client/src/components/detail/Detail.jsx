import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions";
import './detail.css'

const DetailPage = () => {
    const {id} = useParams();

    const dispatch = useDispatch()
    const detailGame = useSelector((state) => state.detail)

    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])
    return (
        <div className="box-detail">
            <div className="detail">
            { 
                    detailGame.length > 0 ? detailGame?.map(elemento => {
                        return (
                            <div key={elemento.id}>
                               <h3 className="detail-title">{elemento.name}</h3>
                                <h3 className="detail-Id">{elemento.id}</h3>
                               <img className='detail-img'src={elemento.image} alt="" />
                               <div className="detail-content">
                                    <h3>Rating: {elemento.rating}</h3>
                                    <h3>{elemento.description}</h3>
                                    <h3>Released: <br /> {elemento.released}</h3>
                                    <h3 className="platforms">Platforms: <br /> { Array.isArray(detailGame[0]?.platforms) === true ? detailGame[0]?.platforms.map(el => el).join(' - ') : detailGame[0]?.platforms}</h3>
                                    <h3>Genres: <br /> {detailGame[0]?.createdinDb !== true ?
                                    detailGame[0]?.generos?.map(el => el).join(' - ') : detailGame[0]?.generos?.map(el => el.name).join(' - ') }</h3>
                                </div>
                            </div>
                        )
                    } ) :(<span className="loader"></span>)
                        
                }
            </div>
            <Link to='/home'>  
                <button className="btn-home">Volver</button>
            </Link>
        </div>
    )
};
export default DetailPage;