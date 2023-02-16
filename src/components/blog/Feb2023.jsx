import "../../css/dic2022.css"
import { Route, Link } from "react-router-dom"

export default function feb2023 () {
    return(
        <div className="contentContainer">
        
            <div className="dicTitle">
            <b> ♡ mis blogentries de febrero 2023 ♡ </b>
            </div>
        <div className="dicCuerpo">
        <Link className="linkTag" to="/feb08"> 08. 02 . 2023 - sii todo bienn (se mata) </Link> 
        <br /><br />
        <Link className="linkTag" to="/feb16"> 16. 02 . 2023 - que carajo voy a hacer de mi vidaa </Link> 
      

        </div>
        </div>
    )
}