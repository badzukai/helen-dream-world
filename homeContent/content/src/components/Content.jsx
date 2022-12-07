/* eslint-disable jsx-a11y/alt-text */
import "../css/homeContent.css"



export default function Content(){
    let date = new Date()
    let dayDate = date.toLocaleDateString();
    let hourDate = date.toString().split(" ")[4]

    console.log(date);

    return(
        <div>
            <center> 
            <br/> </center>
            <img src="https://cinni.net/images/welcome-dreamland.png"  className="welcomebanner"/> 

            <img src="http://dl3.glitter-graphics.net/pub/344/344663ev9dicoavn.gif" className="welcomeimg imgFloatLeft"/>
        <div className="welcometml">
            <p className="pPadding">
                
                <span className="spanColorbien" > ♡ ♡ ♡ <b><i>bienvenidas</i></b> to my lil corner on the web! soy helena ♡ ♡ ♡ </span></p> 
            </div>
             <img src="https://archive.cinni.net/99gif/items/7/blob_heart.gif"/><br/> 
           
        
        <div className="h2">
            <b>
                <span className= "textocomun">
            ✎ . . current status ★彡･ﾟ✧ 
                </span>
             </b> 
        </div>
            {/* {document.Write(document.LastModified)} */}
                
        <div className="h2">
            <b>
                <span className= "textocomun">
            {`✎ . . last update: ${dayDate} - ${hourDate}  ★彡･ﾟ✧ `}
                </span>
             </b> 
        </div>

        <div className="body">
                <p className="lastUpdates">
                
                
                        ♡ currently working on : <br />
                        ♡ blog <br />
                        ♡ photodump <br />
                        ♡ links <br/>

                <br/>older updates:<br/>
                    
                        ♡ <br /> 
                        ♡ <br /> 
                        ♡ <br /> 
                        ♡ <br /> 
                        ♡ <br /> 
                        ♡ <br /> 
                        ♡ <br /> 
                        ♡ <br /> 

           
                </p>
        </div>
            <br />
            <br />
        
       
                <img src="https://web.archive.org/web/20191101011527im_/http://www.easydoll.com/mooddolls/mooddoll9.gif" className="imgFloatRight"/>
            <center>
                <br />
                <p className="dividertop"> 
                ┌──❀*̥˚──◌──◌──❀*̥˚─┐
                </p>
                <div className="guestbookContainer">
                    <br/>
                    
                    <img src="https://cinni.net/images/sym/g1.gif"/><b><i> firmen mi </i> </b>
                    <a href="http://users3.smartgb.com/g/g.php?a=s&i=g36-34086-6c" target="_blank" rel="noreferrer"><img src="https://cinni.net/images/guestbook.png"/></a><img src="https://cinni.net/images/sym/g1.gif"/>
                   <br />
                </div>     
                <p className="dividerbottom"> 
                └◌───❀*̥˚───◌───❀*̥˚┘
                </p>          
            </center>
                <br />
                <br />
            <center> 
                <img src="https://web.archive.org/web/20190911145822im_/http://www.easydoll.com/dividers/div9.gif"  />
                <img src="https://cinni.net/images/sym/nice-day.gif"/>
                <br/>
            
            </center>
            

            
            <br/>
            <script src="https://99gifshop.neocities.org/theme-control.js"></script>
            <script data-goatcounter="https://cinni.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
            </div>
            
    )
}


