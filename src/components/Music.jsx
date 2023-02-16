import "../css/music.css"
import { Route, Link } from "react-router-dom"


export default function Music () {
    return(
    <div className="contentContainer">
        <div className="musicEntry">
            <b> sza </b>

        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/HlcSL2ZXsbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    )
}