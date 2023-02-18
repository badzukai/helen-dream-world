import "../css/music.css"
import { Route, Link } from "react-router-dom"
import { useState } from "react";


export default function Music () {

    const [form, setForm] = useState({
        comment: ""
    });

    function handleChange(e){
        setForm({...form, [e.target.name] : e.target.value})
    }

    console.log(form)
    return(
    <div className="contentContainer">
        <div className="musicEntry">
            <b> sza </b>

        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/HlcSL2ZXsbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className="formulario">
        <form action="formulario.php">
            <textarea name="comment" value={form.comment} onChange={(e) => {handleChange(e)}}  cols="30" rows="10"></textarea>

        </form>
        </div>
    </div>
    
    )
}