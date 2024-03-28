import React from "react";
import {useForm} from "react-hook-form";
import data from "bootstrap/js/src/dom/data";

function PrenotaTavolo() {
    ;

    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        ;
    }

    return (
        <div className="container">
            <div className="card" style={{width: "30rem", margin: "0 auto", marginBottom: "1rem"}}>
                <img src="https://www.clubdelgusto.me/img/prenota_tavolo.webp" className="card-img-top" alt="..."/>
                <div className="card-body" style={{backgroundColor: "lightgrey"}}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="container " style={{textAlign: "center"}}>
                            <input className="contattaci" type="text" id="nome"
                                   placeholder="nome" {...register("nome", {
                                required: true,
                                minLength: 2
                            })}
                            />
                            {errors?.nome && <span>Questo campo è obbligatorio.</span>}
                            <input className="contattaci" type="text" id="cognome" placeholder="cognome"
                                   {...register("cognome", {
                                       required: true,
                                       minLength: 2
                                   })}
                            />
                            {errors?.cognome && <span>Questo campo è obbligatorio.</span>}
                            <input className="contattaci" type="email" id="email" placeholder="email@gmail.com"
                                   {...register("email", {
                                       required: true,
                                       minLength: 2
                                   })}
                            /> {errors?.email && <span>Questo campo è obbligatorio.</span>}
                            <button type="submit" className="btn btn-primary" style={{backgroundColor: "red",}}>invia
                                prenotazione
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PrenotaTavolo