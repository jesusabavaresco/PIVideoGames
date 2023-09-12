import { Link } from "react-router-dom"
import './landingPage.css'
import { Component } from "react";

class Landing extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
        <div className="box">
            <div className="center-box">    
                <h1 className="title-landing">GOOD Videogames</h1>
                <h1 className="title-landing2">GOOD Videogames </h1>
                <Link to='/home'>  
                    <button className="btn-landing">Home</button>
                </Link>
            </div>
        </div>
        )
    }
};
export default Landing;