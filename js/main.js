function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;

	console.log(fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {
		console.log('You are an adult');
	} else if (age >= 13) {
		console.log('You are a teenager');
	} else {
		console.log('You are a child');
	}

	if (firstName.toLowerCase().trim() === 'general' && lastName.toLowerCase().trim() !== 'assembly') {
		console.log('Hello, General!');
	}

}


// When the page has loaded
$(function () {

	// When the user clicks the image - ask questions
	$('img').on('click', askQuestions);

	// When the user clicks an H3
	$('h3').on('click', function () {

		// Toggle the next element
		$(this).next().slideToggle();

	});

});
