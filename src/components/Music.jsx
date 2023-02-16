import "../css/music.css"
import { Route, Link } from "react-router-dom"


export default function Music () {
    return(
    <div className="contentContainer">
        <div className="musicEntry">
            <b> sza </b>

        </div>
        <iframe className="videoyutun" src="https://open.spotify.com/track/7fd3aMiuwHWKsTdZafjOfZ?si=6a7633e812f043e7" />
    </div>
    )
}