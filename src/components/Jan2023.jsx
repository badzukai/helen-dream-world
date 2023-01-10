import "../css/dic2022.css"
import { Route, Link } from "react-router-dom"

export default function jan2023 () {
    return(
        <div className="contentContainer">
        
            <div className="dicTitle">
            <b> ♡ mis blogentries de enero 2023 ♡ </b>
            </div>
        <div className="dicCuerpo">
        <Link className="linkTag" to="/jan09"> 09. 01 . 2023 - primer post del año ☆*:.｡.o(≧▽≦)o.｡.:*☆ </Link> 
        </div>
        
        </div>
    )
}