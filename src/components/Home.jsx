/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import "../css/home.css"
import SobreMi from "./SobreMi"
import { Route, Link } from "react-router-dom"
import Content from "./Content"
import Blog from "./Blog"



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
            <a  className="header"></a>
            <div className="marquee"><marquee scrollamount="2"> <img src="https://test.cinni.net/cinni/Dotmd.gif" width="16" height="16"/>. . . welcome to helen's dream home . . . disfrute su estadía! . . .<img src="https://test.cinni.net/cinni/Dotmd.gif" width="16px"/></marquee></div> 
            
            <div className="potd">
                <iframe width="120" height="120" src="" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="stats">
                <center className="font5px">
                    <script language="JavaScript">var fhs = document.createElement('script');var fhs_id = "5665914";
                                   var ref = (''+document.referrer+'');var pn =  window.location;var w_h = window.screen.width + " x " + window.screen.height;
                                   fhs.src = "//freehostedscripts.net/ocounter.php?site="+fhs_id+"&e1=Online User&e2=Online Users&r="+ref+"&m=0&wh="+w_h+"&a=1&pn="+pn+"";
                                   document.head.appendChild(fhs);document.write("<span id='o_"+fhs_id+"'></span>");
                    </script>
                </center>
                    hits..... <script type="text/javascript" src="//counter.websiteout.net/js/36/5/301/0"></script><br/>

                    mood <a href="http://www.imood.com/users/badzukai" target="_blank" rel="noreferrer"><img src="https://moods.imood.com/display/uname-badzukai/fg-8e3a3/trans-1/imood.gif" className="imageBorder"/></a><br/>

                    rss...... <a href="https://cinni.net/rss.xml" target="_blank" rel="noreferrer"><img src="https://cinni.net/images/rssfeed.png" align="top"/>  <span className="fontS10px">★彡</span></a><br/> 

                {/* <center>
                    <button className="toggle" onClick={toggleTheme()}>change theme</button>
                </center> */}
            </div>
            <div className="side">
                <center>
                    <a href="https://www.furcadia.com/"><img src="https://www.furcadia.com/services/online/myonlinestatus.php4?username=cinni&online_url=https://cinni.net/images/furc/furc-on.png&offline_url=https://cinni.net/images/furc/furc-off.png" alt="Furcadia!" border={0} /></a>

                       <a href="https://99gifshop.neocities.org/" target="_blank" rel="noreferrer"><img src="https://99gifshop.neocities.org/img/88x31.4.png" className="button"/></a>

                       <a href="https://entranceorexit.net/" target="_blank" rel="noreferrer"><img src="https://entranceorexit.net/img/eoe_button.png" className="button"/></a>

                       <a href="https://forum.melonking.net/" target="_blank" rel="noreferrer"><img src="https://forum.melonking.net/images/MELONLAND-FORUM.GIF" className="button"/></a>
                </center>
            </div>
            <Route exact path="/" render={() => <Content/>} />
            <Route path={"/sobremi"} render={() => <SobreMi/>} />
            <Route path={"/blog"} render={() => <Blog/>} />
            
            <div className="me">
                <div>
                    <span className="fontS12pxLineHeight12">✧ ✧ ♡</span> me <span className="fontS12pxLineHeight12" >♡ ✧ ✧ </span></div>
                    <table>
                        <tbody>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/yys/tokage.png"/>
                            </td>
                            <td>
                                <Link className="linkTag" to="/"> home </Link>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/cow-01.gif"/>
                            </td>
                            <td>
                                <Link className="linkTag" to="/sobremi">sobre mi </Link>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/gbook.gif"/>
                            </td>
                            <td>
                            <Link className="linkTag" to="/blog"> blog </Link>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/stuff/tinicomputer.gif"/>
                            </td>
                            <td>
                                <a href="x" target="frame">photo album</a>
                            </td>
                            </tr>
                            
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/nature/tiniflower2.gif"/>
                            </td>
                            <td>
                                <a href="https://cinni.net/music.html" target="frame">music</a>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/pop-112.gif"/>
                            </td>
                            <td>
                                <a href="https://cinni.net/me/books/" target="frame">reading club</a>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/mini-usi-a.gif"/>
                            </td>
                            <td>
                                <a href="https://cinni.net/about/wip.html" target="frame">www wip</a>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/yys/blueheartbounce.gif"/>
                            </td>
                            <td>
                                <a href="https://cinni.net/shrine.html" target="frame">shrines</a>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <img src="https://cinni.net/images/yys/youvegotmail.gif"/> 
                            </td>
                            <td>
                                <a href="http://users2.smartgb.com/g/g.php?a=s&i=g26-36688-af" target="_blank" rel="noreferrer">guestbook</a>
                            </td>
                            </tr>
                            <tr>
                            <td>
                            <img src="https://cinni.net/images/kofi.png"/>
                            </td>
                            <td>
                            <a href="https://ko-fi.com/cinnii" target="_blank" rel="noreferrer"> ko-fi</a>
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
                                    <img src="https://archive.cinni.net/sites/icon/kintanti-icon-pink-pencil2.png"/>
                                </td>
                                <td>
                                    <a href="https://oekaki.cinni.net/" target="_blank" rel="noreferrer"> oekaki board </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td>
                                    <a href="https://archive.cinni.net/" target="_blank" rel="noreferrer">cutie net archive</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/food/tini-strawberry-peep.gif"/>
                                </td>
                                <td>
                                    <a href="https://directory.cinni.net/" target="_blank" rel="noreferrer">ichigo directory</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/links.gif"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/linkout.html" target="frame">cool links</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/purpleheartbounce.gif"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/resources.html" target="frame">artist resources</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/ppp03.gif"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/adopt.html" target="frame">adoption cafe</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/kitten-in-box.gif"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/toybox/" target="frame">toy box</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/hk09.gif" width="17"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/web.html" target="frame">web goodies</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/ku012.gif"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/kaomoji.html" target="frame">kaomoji</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/a-green-star.gif"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/font.html" target="frame">fonts</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/creatures/neonlove.lani_cubic6.gif" width="17"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/theme/" target="frame">themes</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/dollface2.png"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/doll.html" target="frame">dollz center</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/yys/pinkheart1.gif"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/cliques.html" target="frame">cliques</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/shrine/ace/0kirara_m-doji.sakura.ne.jp.gif"/>
                                </td>
                                <td>
                                    <a href="https://cinni.net/sitename.html" target="frame"> URL generator </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://cinni.net/images/a-yellow-star.gif"/>
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
