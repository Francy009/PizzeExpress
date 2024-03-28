import React from "react";

function Menu() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3">
                    <div className="card  h-100 " style={{width: "18rem"}}>
                        <img className="card-img-top"
                             src="https://www.buttalapasta.it/wp-content/uploads/2017/11/pizza-margherita.jpg"
                             alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Margherita</h5>
                            <h6>Ingredienti</h6>
                            <p className="card-text">Farina 00,Olio extravergine di oliva,Pomodoro,Mozzarella</p>
                            <button className="btn btn-primary "
                                    style={{backgroundColor: "red"}}>4,00$
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card  h-100 " style={{width: "18rem"}}>
                        <img className="card-img-top"
                             src="https://www.sanvitolocapovacation.com/img/768_m_2688_pizza.webp"
                             alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Diavola</h5>
                            <h6>Ingredienti</h6>
                            <p className="card-text">Farina 00,Olio extravergine di oliva,Pomodoro,Mozzarella,Piccante</p>
                            <button className="btn btn-primary"
                                    style={{backgroundColor: "red"}}>5,00$
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card  h-100 " style={{width: "18rem"}}>
                        <img className="card-img-top"
                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-f21FMrG30TgC_bLoBWtV5WMj97T3NRi7A&usqp=CAU"
                             alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Marinara</h5>
                            <h6>Ingredienti</h6>
                            <p className="card-text">Farina 00,Olio extravergine di oliva,Pomodoro,Pomodoro,Aglio</p>
                            <button className="btn btn-primary"
                                    style={{backgroundColor: "red"}}>6,00$
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card  h-100 " style={{width: "18rem"}}>
                        <img className="card-img-top"
                             src="https://primochef.it/wp-content/uploads/2020/04/SH_pizza_quattro_formaggi.jpg"
                             alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">4 Formaggi</h5>
                            <h6>Ingredienti</h6>
                            <p className="card-text">Farina 00,Olio extravergine di oliva,Gorgonzola,Fontina,Pepe</p>
                            <button className="btn btn-primary"
                                    style={{backgroundColor: "red"}}>7,00$
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Menu;