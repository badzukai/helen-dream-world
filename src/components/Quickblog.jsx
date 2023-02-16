import "../css/quickblog.css"
import { Route, Link } from "react-router-dom"


export default function Quickblog () {
    return(
        <div className="contentContainer">
            <div className="quickblogTitle">
                 <b> ˘͈ᵕ˘͈ ♡  quickblog  ♡˘͈ᵕ˘͈  </b>
                </div>
            <div className="quickblogEntry">
                <div className="quickblogUsername">
                    <b> badzukai 🐱‍👓 </b> - 16.02.2022 14:15
                </div>
                <div className="quickblogContent">
                    quiero skipear el estudio y estar laburando de diseñadora ux ui a ni se había inscripto al curso ajsdk
                </div>
            </div>

            <div className="quickblogEntry">
                <div className="quickblogUsername">
                    <b> badzukai 🐱‍👓 </b> - 08.02.2022 20:14
                </div>
                <div className="quickblogContent">
                    recién el 20 suben las notas del enerc... girl just tell me that i didn´t got in
                </div>
            </div>
            <div className="quickblogEntry">
                <div className="quickblogUsername">
                    <b> badzukai 🐱‍👓 </b> - 04.02.2022 20:37
                </div>
                <div className="quickblogContent">
                    hola probando
                </div>
                    
            </div>
        </div>
                
    )
}