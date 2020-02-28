var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play()
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause()
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	var playbackRateDec = video.playbackRate-video.playbackRate*.2
	if(playbackRateDec >= 0.25){
		video.playbackRate = playbackRateDec
	}
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	var playbackRateInc = video.playbackRate + video.playbackRate*.25
	if(playbackRateInc < 5){
		video.playbackRate = playbackRateInc
	}
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	var newTime = video.currentTime+60
	if(newTime >= video.duration){
		video.currentTime = 0;
		video.playbackRate = 1;
		video.muted = false;
		video.play();
	}
	else{
		video.currentTime = newTime;
	}
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
		if(video.muted){
			video.muted = false
  			console.log("Unmuted");
		}
		else{
			video.muted = true
			console.log("Muted");
		}
}

function changeVolume() {
	video.muted = false;
	let volume = document.getElementById("volumeSlider").value/100;
	video.volume = volume;
	console.log("Volume is " + volume);
}
       

function gray() { 
	video.className = "grayscale"
	console.log("In grayscale")
}

function color() {
	video.className = ""
	console.log("In color") 
}
