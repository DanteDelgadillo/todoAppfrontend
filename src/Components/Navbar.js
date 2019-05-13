import React, { Component } from 'react'
import AddImage from "../images/add.png"
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <Link to="/" className="nav-link navbar-brand"><i className=" far fa-sticky-note "></i></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className=" collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link navbar-brand">To do List <span className="sr-only">(current)</span></Link>
                            </li>
                            <li> </li>
                        </ul>
                    </div>
                </nav>


            </React.Fragment>
        )
    }
}
