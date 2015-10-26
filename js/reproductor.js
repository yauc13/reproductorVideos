

//**  Funciones para la reproduccion de los videos**//

	var can=0;
	
    function init() {
        var video = document.getElementById("Video1");  

        if (video.canPlayType) {   // tests that we have HTML5 video support
            // if successful, display buttons and set up events
            document.getElementById("buttonbar").style.display = "block";
            document.getElementById("inputField").style.display = "block";

            //  button events
            //  Play
            document.getElementById("btnReproducir").addEventListener("click", vidplay, false);
            //  Restart
            document.getElementById("restart").addEventListener("click", function(){
                setTime(0);
             }, false);
            //  Skip backward 10 seconds
            document.getElementById("rew").addEventListener("click", function(){
                setTime(-10);                
            }, false);
            //  Skip forward 10 seconds
            document.getElementById("fwd").addEventListener("click", function(){
                setTime(10);
            }, false);                
            //  set src == latest video file URL
            document.getElementById("btnSiguiente").addEventListener("click", function(){
                getVideo(1);
            }, false);
            document.getElementById("btnAnterior").addEventListener("click", function(){
                getVideo(-1);
            }, false);
            
                            
            // fail with message 
            video.addEventListener("error", function(err) {
                errMessage(err);
            }, true);

            //  button helper functions 
            //  skip forward, backward, or restart
            function setTime(tValue) {
            //  if no video is loaded, this throws an exception 
                try {
                    if (tValue == 0) {
                        video.currentTime = tValue;
                    }
                    else {
                        video.currentTime += tValue;
                    }
                    
                 } catch (err) {
                     // errMessage(err) // show exception
                 errMessage("Video content might not be loaded");
                   }
         }
             //  play video
             function vidplay(evt) {
                if (video.src == "") {  // on first run, src is empty, go get file
                    getVideo(0);
                    video.load();
                }
                button = evt.target; //  get the button id to swap the text based on the state                                    
                if (video.paused) {   // play the file, and display pause symbol
                   video.play();
                   button.textContent = "||";
                } else {              // pause the file, and display play symbol  
                   video.pause();
                   button.textContent = ">";
                }                                        
            }
            //  load video file from input field
            function getVideo(sing) {
   //var fileURL = document.getElementById("videoFile").value;  // get input field    
   var canciones = [
	"Plan B - Fanatica Sensual.mp4",
	"Dalmata - Deseo Animal.mp4",
	"J. Balvin - Ginza.mp4"
	];



	if(can == canciones.length-1){
		can=0;
	}else if(can < 0){
    	can= 2;
    }
    else if(sing==1){
    	can=can+1;
    }else if(sing==-1){
    	can=can-1;
    }else{
    	can=can+0;
    }

/*var can1="Plan B - Fanatica Sensual.mp4";
var can2="Dalmata - Deseo Animal.mp4";
var can3="J. Balvin - Ginza.mp4"; */

var cancion=canciones[can];
/* if(can==0){
 cancion=can1;
}else if(can==1){
cancion=can2
}else if(can==2){
cancion=can3
} */


 $('#lblSing').find('span').text('Holaaaa'+can);
var fileURL = "E:/Videos/MUSICA/Selection/"+cancion;  
//var fileURL = "http://www.youtube.com/embed/QBaIMZ8QjcU";
				
                if (fileURL != ""){
                   video.src = fileURL;
                   video.load();  // if HTML source element is used
                   document.getElementById("btnReproducir").click();  // start play
                 } else {
                    errMessage("Enter a valid video URL");  // fail silently
                 }
            }

//  display an error message 
    function errMessage(msg) {
        // displays an error message for 5 seconds then clears it
                document.getElementById("errorMsg").textContent = msg;
                setTimeout("document.getElementById('errorMsg').textContent=''", 5000);
            }

        } // end of runtime
    }// end of master    