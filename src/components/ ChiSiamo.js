import React from "react";
import './chisiamo.css'

function ChiSiamo() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4  mb-3">
                    <img className="img"
                         src="https://www.projectinvictus.it/wp-content/uploads/2017/12/calorie-pizza-margherita-scaled.jpg"/>
                    <img className="img2"
                         src="https://i0.wp.com/www.thegiornale.it/wp-content/uploads/2018/04/pizza.jpg?resize=800%2C445&ssl=1"/>
                </div>
                <div className="col-md-8 mb-3">
                    <h1 className="titolo">CHI SIAMO</h1>
                    <p className="paragrafo">Benvenuti in PizzaExpress!

                        Siamo una pizzeria che ha dedicato la sua passione alla creazione di autentiche esperienze
                        gastronomiche attraverso il linguaggio universale delle pizze. La nostra storia inizia con
                        l'amore per gli ingredienti freschi e la tradizione culinaria italiana. </p>
                    <p className="paragrafo">
                        Presso PizzaExpress, ci impegniamo a portare la gioia e la bontà di ogni fetta di pizza
                        direttamente sulla tua tavola. La nostra cucina virtuale è un luogo dove la creatività si fonde
                        con la qualità, e ogni pizza è un'opera d'arte che celebra l'armonia di sapori autentici.
                    </p>
                    <p className="paragrafo">
                        Siamo orgogliosi della nostra selezione di ingredienti, accuratamente scelti per garantire
                        freschezza e qualità in ogni morso. Dalla crosta croccante alle salse ricche e ai formaggi
                        prelibati, ogni elemento è parte integrante del nostro impegno per offrire il massimo piacere
                        culinario.
                    </p>
                    <p className="paragrafo">
                        La tua esperienza con PizzaExpress non è solo un pasto, ma un viaggio sensoriale attraverso la
                        tradizione e l'innovazione. Ogni pizza che prepariamo è intrisa di passione e impegno, creando
                        un'esperienza unica e indimenticabile.
                    </p>
                    <p className="paragrafo">
                        Grazie per aver scelto di essere con noi e fare parte della nostra storia. Siamo entusiasti di
                        condividere con te il meglio che il mondo delle pizze possa offrire. Buon appetito!
                    </p>
                </div>
            </div>
        </div>

    )
}

export default ChiSiamo;