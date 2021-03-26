(function (window) {
	var speakWord = "Good Bye";
	var byeSpeaker = {};
	byeSpeaker.speak = function (nam) {
		console.log(speakWord + " " + nam);
	}

	window.byeSpeaker = byeSpeaker;

})(window);