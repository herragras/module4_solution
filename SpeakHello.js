(function (window) { 
	var speakWord = "Hello";
	var helloSpeaker = {};
	helloSpeaker.speak = function (nam) {
		console.log(speakWord + " " + nam);
	}

	window.helloSpeaker = helloSpeaker;

})(window);