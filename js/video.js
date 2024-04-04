var video; 

//1: page load
window.addEventListener("load", function() { 
	console.log("Good job opening the window"); //message to display when loads
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false; //setting autoplay/loop to false
	console.log("Auto play is set to " + video.autoplay); //log autoplay/loop
	console.log ("Loop is set to " + video.loop)
});

//2: play button
document.querySelector("#play").addEventListener("click", function() {
	video = document.querySelector("#player1");
	volume_percent = video.volume * 100 //calculating volume percent
	video.play(); 
	document.querySelector("#volume").innerHTML = volume_percent + "%"
	console.log("Played video"); 
}
);

//3: pause button
document.querySelector("#pause").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.pause(); 
	console.log("Paused video"); 
}
);

//4: slow down
document.querySelector("#slower").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.playbackRate *= .9; //decrease playback speed
	console.log("Slowed down video");
	console.log("Video speed is at " + video.playbackRate)
}
);

//5: speed up
document.querySelector("#faster").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.playbackRate *= 1.1;
	console.log("Sped up video");
	console.log("Video speed is at " + video.playbackRate)
}
);

//6: skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	video = document.querySelector("#player1");

	if (video.ended) { //ended
		video.currentTime = 0;
		console.log("Skipped ahead");
		console.log("Video's current time is " + video.currentTime)
	}
	else { //not ended
		video.currentTime += 10; //skip ahead by 10 seconds
		console.log("Skipped ahead");
		console.log("Video's current time is " + video.currentTime)
	}
}
);

//7: mute
document.querySelector("#mute").addEventListener("click", function() {
	video = document.querySelector("#player1");
	
	if (video.muted) { //if muted
		video.muted = false;
		console.log("Video is unmuted");
		document.querySelector("#mute").innerHTML = "Mute"
	}
	else { //if not muted
		video.muted = true;
		console.log("Video is muted");
		document.querySelector("#mute").innerHTML = "Unmute"
	}
}
);

//8: volume slider
document.querySelector("#slider").addEventListener("change", function() {
    video = document.querySelector("#player1");
    volume = document.querySelector("#slider").value;
    volume_decimal = volume / 100 //convert do decimal
    video.volume = volume_decimal;
    document.querySelector("#volume").innerHTML = volume + "%"
    console.log("The volume value is " + volume_decimal)
}
);

//9: styled
document.querySelector("#vintage").addEventListener("click", function() {
    video = document.querySelector("#player1");
    video.classList.add("oldSchool")
}
);

//10: original
document.querySelector("#orig").addEventListener("click", function() {
    video = document.querySelector("#player1");
    video.classList.remove("oldSchool")
}
);


