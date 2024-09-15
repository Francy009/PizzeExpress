import React, {useEffect, useState} from "react";

import {getMenu} from "../service/PizzaExpressService";
import "./menu.css";

function Menu() {
    const [menu, setMenu] = useState([])


    useEffect(() => {
        getMenu().then(respose => {
            setMenu(respose.data)
        }).catch(error => {
            alert(error)
        })
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                {menu.map((pizza, index) => {
                    return <div className="col-md-3 mb-4" key={index}>
                        <div className="card  h-100 " style={{width: "18rem"}}>
                            <div className="row">
                                <img className="card-img-top"
                                     src={pizza.linkImmagine}
                                     alt="Card image cap"/>
                            </div>
                            <div className="row">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{pizza.nomePizza}</h5>
                                    <h6>Ingredienti:</h6>
                                    {pizza.listaIngredienti.map(ingrediente => {
                                        return <li className="card-text ingredient-indent">{ingrediente}</li>
                                    })}
                                    <button className="card-button">
                                        {pizza.prezzoPizza}€
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Menu;