$(window).keypress(function(event) {
	console.log(event.which);
	if (event.which == 97 || event.which == 65) {
		var newLetter = $(".alphabet .letter-a .letter").clone();
		$("body").append(newLetter);
}

if (event.which == 98 || event.which == 66) {
		var newLetter = $(".alphabet .letter-o .letter").clone();
		$("body").append(newLetter);
}
});