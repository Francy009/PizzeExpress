import React from "react";

function home() {
    return (
        <div className="container">
            <div className="row d-flex">
                <div className="col-md-8 mb-3">
                    <img className="img img-fluid"
                         src="https://www.df-gourmet.com/wp-content/uploads/2021/06/Come-realizzare-una-pizza-gourmet-con-le-farine-Mulino-Marino.jpg"
                         alt="immagine pizza"></img>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <h1 className="card-title titolo">PizzaExpress!</h1>

                            <p className="card-text paragrafo">Benvenuti nel nostro delizioso mondo di Pizze Express!
                                Siamo entusiasti di accogliervi nel cuore della
                                nostra cucina virtuale, dove la passione per la pizza si unisce alla convenienza della
                                consegna
                                a
                                domicilio. Da noi, ogni morso è un viaggio attraverso i sapori autentici e la freschezza
                                degli
                                ingredienti selezionati con cura.
                            </p>
                            <p className=" card-text paragrafo"> La vostra esperienza con Pizze Express non sarà solo un
                                pasto,
                                ma un momento di piacere culinario che vi porterà in un viaggio sensoriale unico. Grazie
                                per
                                aver
                                scelto di essere con noi, e preparatevi a
                                gustare il meglio che il mondo delle pizze possa offrire! Buon appetito!</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default home;