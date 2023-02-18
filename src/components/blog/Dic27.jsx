import "../../css/blogentries.css"
import { Route, Link } from "react-router-dom"
import { useState } from "react";
import axios from "axios"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Comments from "../Comments";

export default function Dic27 () {
    
    return(
        <div className="contentContainer">
            <div className="dicBlogEntries">
                <div className="dic27Titulo">
                inagurando blog (o･ω･o) <br />
                </div><br />
                <div className="dic27Corazon">
                status : npc <br />
                </div>
                <div className="dic27Corazon">
                currently doing : programando!! #programadora <br />
                </div>
                <div className="dic27Corazon">
                wanting: unos nachos con cheddar <br />
                </div><br />
                <div className="dic27Degrade">
                haroo este post es para inagurar el blog! no se bien que poner acá la verdad, supongo que se me hará más natural en cuanto le agarre la mano, in the meantime les cuento que estoy obsesionada con los retrowebsites y practicamente todo mi tiempo libre lo invierto en <a href="https://www.neocities.org">neocities</a>... lit my dream place. no sé que más contar estoy hyped af por mi cumple y tengo ganas de irme de vacaciones. no sé que más poner chaaaaaaaaaaaau.
 <br />
                </div><br />
                <div className="dic27Linea">
                podés ver este post en <a href="https://badzukai.bearblog.dev" target="_blank">mi bearblog</a> <br />
                </div> <br />
            </div>
            <Comments/>
           
        </div>
    )
}