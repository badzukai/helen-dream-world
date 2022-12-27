/* eslint-disable jsx-a11y/alt-text */
import "../css/homeContent.css"
import { useEffect } from "react";



export default function Content(){
	let date = new Date()
	let dayDate = date.toLocaleDateString();
	let hourDate = date.toString().split(" ")[4]

	useEffect(() => {
		const script = document.createElement("script");

		script.src = "https://status.cafe/current-status.js?name=badzukai";
		script.async = true;
		document.body.appendChild(script);
	}, []);
	
	console.log(date);

	return(
		<div className="contentContainer">
			<div className="welcometml">
				<img src="https://dl.glitter-graphics.com/pub/345/345294me3vmife4k.gif" className="welcomeimg"/>
				<br />
				<span className="welcomeTextContainer"> <p className="welcomeText"> ♡ ♡ ♡ <b><i>bienvenidas</i></b> to my lil corner on the web!</p> <p className="welcomeText"> soy helena ♡ ♡ ♡ </p></span>
			</div>
		<div className="homepageContent">
			<div className="gifContent">
			<img src="https://archive.cinni.net/99gif/items/7/blob_heart.gif"/><br/> 
			</div>
			<div className="h2">
				<b>
				<span className= "textocomun">
				✎ . . current status ★彡･ﾟ✧ 
				
				</span>
				</b> <hr />
			</div>
			<div id="statuscafe"><div id="statuscafe-username"></div><div id="statuscafe-content"></div></div><script src="https://status.cafe/current-status.js?name=badzukai" defer></script>
			
				
			<div className="h2">
				<b>
				<span className= "textocomun">
				{`✎ . . last update: ${dayDate} - ${hourDate}  ★彡･ﾟ✧ `}
				</span>
				</b> <hr />
			</div>

			<div className="body">
				<p className="lastUpdates">
						<b>currently working on :  </b><br />
						♡ blog <br />
						♡ photodump <br />
						♡ links <br/> 
						<br/> 
						<b> older updates: </b><br/>
					
						♡ <a href="http://users3.smartgb.com/g/g.php?a=s&i=g36-34086-6c" target="_blank"> guestbook </a>(firmenlo!) <br /> 
						♡  <a href="/sobreMi"> sobre mi subpage </a> <br />
						♡ <br /> 
						♡ <br /> 
						♡ <br /> 
						♡ <br /> 
						♡ <br /> 
						♡ <br /> 

		   
					</p>
			</div>
			</div>
				
				
				<img src="https://web.archive.org/web/20191101011527im_/http://www.easydoll.com/mooddolls/mooddoll9.gif" className="imgFloatRight"/>
				<img src="https://web.archive.org/web/20191101011527im_/http://www.easydoll.com/mooddolls/mooddoll21.gif" className="imgFloatLeft" />	
					<center>
					<br />
			
				<p className="dividertop"> 
				┌───❀*̥˚──◌───◌───◌───◌──❀*̥˚───┐
				</p>

			<div className="guestbookContainer">
					<br/> 
					<b className="firmenmiContent">firmen mi</b> <br />
					<a href="http://users3.smartgb.com/g/g.php?a=s&i=g36-34086-6c" target="_blank" rel="noreferrer"><img src="https://cinni.net/images/guestbook.png" className="guestbookPng"/></a>
					
				   <br />
			</div>     

				<p className="dividerbottom"> 
				└───❀*̥˚──◌───◌───◌───◌──❀*̥˚───┘
				</p>          
			
					</center>
					<br />
					<br />

					<center>
			<div className="contentFinal">
					<img src="https://web.archive.org/web/20190911145822im_/http://www.easydoll.com/dividers/div9.gif"  />
					
					<br/>
			</div>
			<div className="contentFinal">
			<img src="https://cinni.net/images/sym/nice-day.gif"/>
			</div>
					</center>
					<br/>

				{/* esto hay que centrarlo creo */}	
			<script src="https://99gifshop.neocities.org/theme-control.js"></script>
			<script data-goatcounter="https://cinni.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
			
			</div> //div final// 
			
	)
}


