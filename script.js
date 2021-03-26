(function (){
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for (var nam of names){
		if (nam[0].toLowerCase() === "j") byeSpeaker.speak(nam);
		else helloSpeaker.speak(nam);
	}
})();