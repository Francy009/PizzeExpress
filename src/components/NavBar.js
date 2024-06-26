import React from "react";
import './navBar.css'
import {Link} from "react-router-dom";

export function NavBar() {
    return (

        <nav id="navbarcontainer" className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a>
                    <img className="container"
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTitA4aFTsBG-q4tAJCU9aWksV8pl6nU9jb2pYVrj0tg9LmUmWIfWjy6dSm8ZHz_BgHZg&usqp=CAU"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/chi-siamo" className="nav-link" href="#">Chi Siamo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/menu" className="nav-link" href="#">Menù</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contattaci" className="nav-link" href="#">Contattaci</Link>
                        </li>
                    </ul>
                </div>
                <button className="nav-item nav-button">
                    <a className="nav-link" href="#">
                        <b>Prenota Tavolo</b></a>
                </button>
            </div>
        </nav>
    )
}
