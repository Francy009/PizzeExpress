import React from "react";
import {useForm} from 'react-hook-form';
import "./contattaci.css"

function Contattaci() {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));

    }
    return (
        <div className="container">
            <div className="card" style={{width: "30rem", margin: "0 auto", marginBottom: "1rem"}}>
                <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/60/f1/9c/pizza-express-jazz-club.jpg?w=1200&h=-1&s=1"
                    className="card-img-top"/>
                <div className="card-body " style={{backgroundColor: "lightgrey"}}>
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
                            <input className="contattaci" type="text" id="number" placeholder="+39"
                                   {...register("number", {
                                       required: true,
                                       minLength: 2
                                   })}
                            /> {errors?.number && <span>Questo campo è obbligatorio.</span>}
                            <textarea className="contattaci" id="messaggio" maxLength="500"
                                      placeholder="Scrivi qui il tuo messaggio..."
                                      {...register("messaggio", {
                                          required: true,
                                          minLength: 2
                                      })}
                            /> {errors?.messaggio && <span>Questo campo è obbligatorio.</span>}
                            <button type="submit" className="btn btn-primary"
                                    style={{backgroundColor: "red"}}>Contattaci
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Contattaci