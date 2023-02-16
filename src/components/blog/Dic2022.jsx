import "../../css/dic2022.css"
import { Route, Link } from "react-router-dom"

export default function dic2022 () {
    return(
        <div className="contentContainer">
            <div className="dicTitle">
            <b> ♡ mis blogentries de diciembre 2022 ♡ </b>
            </div>
        <div className="dicCuerpo">
        <Link className="linkTag" to="/dic27"> 27. 12 . 2022 - inagurando blog (o･ω･o) </Link> 
        </div>
        </div>
    )
}