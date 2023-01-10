/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import "../css/home.css"
import SobreMi from "./SobreMi"
import { Route, Link } from "react-router-dom"
import Content from "./Content"
import Blog from "./Blog"
import Jan2023 from "./Jan2023"
import Dic2022 from "./Dic2022.jsx"
import Dic27 from "./Dic27.jsx"
import Jan09 from "./Jan09.jsx"
import NotFound from "./NotFound.jsx"


export default function Home () {
    

    
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
        <div className="index">
          <div className="layout">
          
          
            <div className="marquee"><marquee scrollamount="2"> <img src="https://test.cinni.net/cinni/Dotmd.gif" width="16" height="16"/>. . . welcome to helen's dream world . . . disfrute su estadía! . . .<img src="https://test.cinni.net/cinni/Dotmd.gif" width="16px"/></marquee></div> 
            
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
            {/* <Route path= "*" render={ () => <NotFound/>}/> */}
            <Route exact path="/" render={() => <Content/>} />
            <Route path={"/sobremi"} render={() => <SobreMi/>} />
            <Route path={"/blog"} render={() => <Blog/>} />
            <Route path={"/jan2023"} render={() => <Jan2023/>} />
            <Route path={"/dic2022"} render={() => <Dic2022/>} />
            <Route path={"/dic27"} render={ () => <Dic27/>}/>
            <Route path={"/jan09"} render={ () => <Jan09/>}/>
            
            <div className="me">
                <div className="mefondo">
                    <span className="fontS12pxLineHeight12">✧ ✧ ♡</span> me <span className="fontS12pxLineHeight12" >♡ ✧ ✧</span></div>
                <table>
                        <tbody>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/yys/blueheartbounce.gif"/>
                            </td>
                            <td>
                                <Link className="linkTag" to="/"> home </Link>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/yys/blueheartbounce.gif"/>
                            </td>
                            <td>
                                <Link className="linkTag" to="/sobremi">sobre mi </Link>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/yys/blueheartbounce.gif"/>
                            </td>
                            <td>
                            <Link className="linkTag" to="/blog"> blog </Link>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/yys/blueheartbounce.gif"/>
                            </td>
                            <td>
                                <a href="x" target="frame">photo album</a>
                            </td>
                            </tr>
                            
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/yys/blueheartbounce.gif"/>
                            </td>
                            <td>
                                <a href="https://cinni.net/music.html" target="frame">music</a>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/yys/blueheartbounce.gif"/>
                            </td>
                            <td>
                                <a href="https://cinni.net/me/books/" target="frame">reading club</a>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/yys/blueheartbounce.gif"/>
                            </td>
                            <td>
                                <a href="https://cinni.net/about/wip.html" target="frame">quick blog</a>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/yys/blueheartbounce.gif"/>
                            </td>
                            <td>
                                <a href="https://cinni.net/shrine.html" target="frame">textos</a>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/yys/blueheartbounce.gif"/> 
                            </td>
                            <td>
                                <a href="http://users3.smartgb.com/g/g.php?a=s&i=g36-34086-6c" target="_blank" rel="noreferrer">guestbook</a>
                            </td>
                            </tr>
                            <tr>
                            <td>
                            <img src="https://cinni.net/images/yys/blueheartbounce.gif"/>
                            </td>
                            <td>
                            <a href="https://ko-fi.com/cinnii" target="_blank" rel="noreferrer"> drawings</a>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            <div className="you">
                <div>
                    <span className="fontS12pxLineHeight12">✧ ✧ ♡</span> you <span className="fontS12pxLineHeight12">♡ ✧ ✧</span></div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td>
                                    <a href="https://oekaki.cinni.net/" target="_blank" rel="noreferrer"> resources </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td>
                                    <a href="https://archive.cinni.net/" target="_blank" rel="noreferrer">a</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td>
                                    <a href="https://directory.cinni.net/" target="_blank" rel="noreferrer">cool websites</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/linkout.html" target="frame">updates</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/resources.html" target="frame">games</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/adopt.html" target="frame">adoption cafe</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/toybox/" target="frame">toy box</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif" width="17"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/web.html" target="frame">web goodies</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/kaomoji.html" target="frame">kaomoji</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/font.html" target="frame">fonts</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif" width="17"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/theme/" target="frame">themes</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/doll.html" target="frame">dollz center</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/cliques.html" target="frame">cliques</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/sitename.html" target="frame"> URL generator </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/globe.html" target="frame"> globe maker </a>
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
                  <div className="pagedoll"></div>

              <script src="https://99gifshop.neocities.org/theme-control.js"></script>

           <script data-goatcounter="https://cinni.goatcounter.com/count"
              async src="//gc.zgo.at/count.js"></script>
        </div>
    )
}
