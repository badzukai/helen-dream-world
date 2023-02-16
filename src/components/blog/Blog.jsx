import "../../css/blog.css"
import { Route, Link } from "react-router-dom"


export default function Blog () {
    return(
        <div className="contentContainer">
                <div className="blogTitle">
                 <b> ˘͈ᵕ˘͈ ♡  blog  ♡˘͈ᵕ˘͈  </b>
                </div>
                <div className="blogCuerpo">
                    <div className="blogDivider">
                        <img src="http://dl9.glitter-graphics.net/pub/152/152179h4qroi8q2b.gif"/>
                    </div>
                    
                    ⋆ ˚｡⋆୨୧˚ en esta subpage estan las entradas de mi blog ... todo lo que posteo aquí está importado de mi real blog <a href="https://badzukai.bearblog.dev" target="_blank" rel="noreferrer">(click aquí)</a> que está más organizado y bonito ✧.* visitenlo  ˚୨୧⋆｡˚ ⋆
                    <br /> <br />
                    <div className="blogEntradas">
                        <div className="blogAños">
                        <b> '*•.¸♡ ♡¸.•*' &nbsp; 2023 &nbsp; '*•.¸♡ ♡¸.•*'</b> <br /> <br />
                           
                        </div>
                        <div className="blogMeses">
                        <img src="https://cinni.net/images/yys/purpleheartbounce.gif" /> 
                        &nbsp;  <Link className="linkTag" to="/feb2023"> febrero </Link> <br /> <br /> 
                        </div>
                        <div className="blogMeses">
                        <img src="https://cinni.net/images/yys/purpleheartbounce.gif" /> 
                        &nbsp;  <Link className="linkTag" to="/jan2023"> enero </Link> <br /><br /> <br /> 
                        </div>
                        <div className="blogAños">
                        <b> '*•.¸♡ ♡¸.•*' &nbsp; 2022 &nbsp;'*•.¸♡ ♡¸.•*'</b> <br /><br />
                        </div>
                        <div className="blogMeses">
                        <img src="https://cinni.net/images/yys/blueheartbounce.gif"/>  
                        &nbsp; <Link className="linkTag" to="/dic2022"> diciembre </Link>
                        </div>

                    </div>
                </div>
        </div>
                
    )
}