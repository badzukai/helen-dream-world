/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import "../css/home.css"
import SobreMi from "./SobreMi"
import { Route, Link, Switch } from "react-router-dom"
import Content from "./Content"
import Blog from "./blog/Blog"
import Quickblog from "./Quickblog"
import Jan2023 from "./blog/Jan2023"
import Feb2023 from "./blog/Feb2023"
import Dic2022 from "./blog/Dic2022.jsx"
import Dic27 from "./blog/Dic27.jsx"
import Jan09 from "./blog/Jan09.jsx"
import Jan13 from "./blog/Jan13.jsx"
import Jan18 from "./blog/Jan18.jsx"
import Feb08 from "./blog/Feb08"
import Feb16 from "./blog/Feb16"
import NotFound from "./NotFound.jsx"
import InProgress from "./InProgress.jsx"
import Music from "./Music.jsx"
import { useState } from "react"


export default function Home () {
    
    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
      }

    if (localStorage.getItem("theme") !== "light" && localStorage.getItem("theme") !== "dark") {
        localStorage.setItem("theme", "light")
    }
    
    let [theme, setTheme] = useState(localStorage.getItem("theme"))
    console.log(theme)

    function changeTheme(){
        if (theme === "light") {
            localStorage.setItem("theme", "dark");
        }else{
            localStorage.setItem("theme", "light");
        }
        setTheme(localStorage.getItem("theme"))
    }

    return(
    // <html>
    //     <head>
    //         <meta charset="UTF-8"/>
    //         <title>♡ helen's dream home ♡ </title>
    //         <link href="style.css" rel="stylesheet" type="text/css" media="all"/>
    //         <link rel="shortcut icon" href="https://cinni.net/shrine/ace/0kirara_m-doji.sakura.ne.jp.gif" type="image/x-icon"/>
    //         <script src="https://yesterwebring.neocities.org/script.js"></script>
    //         <script src="https://melonking.net/scripts/frame-link.js"></script>
    //         <script>
    //         updateTitle = false;
    //         </script>
    //     </head>
    /*/ https://webneko.net/?valentine /*/
        <div className={`index ${theme} `}>
          <div className="layout">
          
            <div className="marquee"><marquee scrollamount="2"> <img src="https://test.cinni.net/cinni/Dotmd.gif" width="16" height="16"/>. . . welcome to helen's dream world . . . disfrute su estadía! . . . &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . . . esta página esta construida para verse en computadoras, si estas desde un celular no tendrás acceso a muchas funciones ... <img src="https://test.cinni.net/cinni/Dotmd.gif" width="16px"/></marquee></div> 
            
            <div className="potd">
                <iframe width="120" height="120" src="" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="stats">

                   feeling &nbsp; <a href="http://www.imood.com/users/badzukai" target="_blank" rel="noreferrer"><img src="https://moods.imood.com/display/uname-badzukai/fg-8e3a3/trans-1/imood.gif" className="imageBorder"/></a><br/> 

                {/* <center>
                    <button className="toggle" onClick={toggleTheme()}>change theme</button>
                </center> */}
            </div>
            <div className="side">
                <center>
                        <img src="https://i2.glitter-graphics.org/pub/538/538172dqlxwnx868.gif" className="button"/>
                        
                        <img src="https://i10.glitter-graphics.org/pub/223/223900lkyihutiz9.gif" className="button"/>
                        <img src="https://i3.glitter-graphics.org/pub/180/180793o6w0geqbip.gif" className="button"/>
                        <img src="https://dl5.glitter-graphics.net/pub/143/143975i590kaiky0.gif" className="button"/>
                        <img src="https://dl3.glitter-graphics.net/pub/360/360743ebjz2woppw.gif" className="button"/>
                        <img src="https://i8.glitter-graphics.org/pub/1227/1227758dcwfqu75up.gif" className="button"/>
                        <img src="https://i9.glitter-graphics.org/pub/406/406599zlju4kb016.gif" className="button"/>
                        <img src="https://i10.glitter-graphics.org/pub/805/805441e8czn30y1y.gif" className="button"/>
                       <img src="https://cinni.net/images/blinky_22.gif" className="button"/>
                       <img src="https://cinni.net/images/web/blinkies/cn_needcoffee.gif" className="button"/>
                       <img src="https://cinni.net/images/web/blinkies/night_bloger.gif" className="button"/>
                       <img src="https://cinni.net/images/web/blinkies/pink8.gif" className="button"/>
                       <img src="https://cinni.net/images/web/blinkies/black2.gif" className="button"/>
                       <img src="https://cinni.net/images/web/blinkies/lunablinkie.gif" className="button"/>
                       <img src="https://cinni.net/images/web/blinkies/skSbXSF.gif" className="button"/>
                       
                </center>
            </div>
            
            <Switch>
                <Route exact path="/" render={() => <Content/>} />
                <Route path={"/sobremi"} render={() => <SobreMi/>} />
                <Route path={"/blog"} render={() => <Blog/>} />
                <Route path={"/quickblog"} render={() => <Quickblog/>} />
                <Route path={"/inprogress"} render={() => <InProgress/>} />
                <Route path={"/jan2023"} render={() => <Jan2023/>} />
                <Route path={"/feb2023"} render={() => <Feb2023/>} />
                <Route path={"/dic2022"} render={() => <Dic2022/>} />
                <Route path={"/dic27"} render={ () => <Dic27/>}/>
                <Route path={"/jan09"} render={ () => <Jan09/>}/>
                <Route path={"/jan13"} render={ () => <Jan13/>}/>
                <Route path={"/jan18"} render={ () => <Jan18/>}/>
                <Route path={"/feb08"} render={() => <Feb08/>}/>
                <Route path={"/feb16"} render={() => <Feb16/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route render={ () => <NotFound/>}/>
            </Switch>
            
            <div className="me">
                <div className="mefondo">
                    <span className="fontS12pxLineHeight12">✧ ✧ ♡</span> me <span className="fontS12pxLineHeight12" >♡ ✧ ✧</span></div>
                <table>
                        <tbody>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/yys/blueheartbounce.gif"/>
                            </td>
                            <td className="sidebar">
                                <Link className="linkTag" to="/"> home </Link>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/yys/blueheartbounce.gif"/>
                            </td>
                            <td className="sidebar">
                                <Link className="linkTag" to="/sobremi">sobre mi </Link>
                            </td>
                            </tr>
                            <tr>
                            <td >
                                <img src="https://cinni.net/images/yys/blueheartbounce.gif"/>
                            </td>
                            <td className="sidebar">
                            <Link className="linkTag" to="/blog"> blog </Link>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/yys/blueheartbounce.gif"/>
                            </td>
                            <td className="sidebar">
                            <Link className="linkTag" to="/InProgress"> photo album </Link>
                            </td>
                            </tr>
                            
                            <tr>
                            <td >
                                <img src="https://cinni.net/images/yys/blueheartbounce.gif"/>
                            </td>
                            <td className="sidebar">
                            <Link className="linkTag" to="/music"> music </Link>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/yys/blueheartbounce.gif"/>
                            </td>
                            <td className="sidebar">
                            <Link className="linkTag" to="/InProgress"> reading </Link>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/yys/blueheartbounce.gif"/>
                            </td>
                            <td className="sidebar">
                            <Link className="linkTag" to="/quickblog"> quickblog </Link>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/yys/blueheartbounce.gif"/>
                            </td>
                            <td className="sidebar">
                                <Link className="linkTag" to="/InProgress"> textos </Link>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/yys/blueheartbounce.gif"/> 
                            </td>
                            <td className="sidebar">
                            <Link className="linkTag" to="/InProgress"> drawings </Link>
                                
                            </td>
                            </tr>
                            <tr>
                            <td>
                            <img src="https://cinni.net/images/yys/blueheartbounce.gif"/>
                            </td>
                            <td className="sidebar">
                            <a href="http://users3.smartgb.com/g/g.php?a=s&i=g36-34086-6c" target="_blank" rel="noreferrer">guestbook</a>
                            </td>
                            
                            </tr>
                       
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td className="sidebar">
                                    <a href="https://oekaki.cinni.net/" target="_blank" rel="noreferrer"> resources </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td className="sidebar">
                                <Link className="linkTag" to="/InProgress"> loki </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td className="sidebar">
                                <Link className="linkTag" to="/InProgress"> cool websites </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td className="sidebar">
                                <Link className="linkTag" to="/InProgress"> updates </Link>
                                </td>
                            </tr>
                            <tr>
                                <td >
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td className="sidebar">
                                <Link className="linkTag" to="/InProgress"> games </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td className="sidebar">
                                <Link className="linkTag" to="/InProgress"> quiz results </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td className="sidebar">
                                <Link className="linkTag" to="/InProgress"> toy box </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif" width="17"/>
                                </td>
                                <td className="sidebar">
                                <Link className="linkTag" to="/InProgress"> web goodies </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td className="sidebar">
                                <Link className="linkTag" to="/InProgress"> fonts </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td className="sidebar">
                                <button onClick={changeTheme} > cambiar tema </button>
                                </td>
                            </tr>
                            
                        </tbody>

                    </table>
            </div>
            <script src="https://yesterweb.org/js/widget.js"></script>
            <div className="rainbow"></div>
            <div className="l1"></div>
            <div className="l4"></div>
                <div className="l5"></div>
                <div className="l6"></div>
          </div>

              <script src="https://99gifshop.neocities.org/theme-control.js"></script>

           <script data-goatcounter="https://cinni.goatcounter.com/count"
              async src="//gc.zgo.at/count.js"></script>
        </div>
    )
}
