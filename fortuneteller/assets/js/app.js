var objects = ["it's not impossible </br>", "hmm... i'd say so</br>", "lol no</br>", "don't get your hopes up but it's possible</br>", "100%</br>", "the future is looking bright</br>",
				"idk what do u think</br>", "i don't understand the question</br>", "could happen</br>"];

$('.button').click(function() {
	var random_object_number = Math.floor(Math.random() * objects.length),
		object_to_use		= objects[random_object_number],
		color_to_use		= colors[random_color_number],
		result				= '<span class="object ' + color_to_use +  '">' + object_to_use + '</span>';





	$('.content').prepend(result);


});xx