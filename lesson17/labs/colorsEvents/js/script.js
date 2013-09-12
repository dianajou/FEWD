/**
 * Welcome to Keyboard Events Exercise
 * A couple of thing we want to do:
 * 
 * 1) First, let's display the most recent keyCode the user pressed. This will help you do the second
 *    exercise. 
 *
 * 2) Now, let's change the behavior of the "noVowels" textbox so that no vowels can
 *    be typed in it. 
 *    Hint, remeber what event.preventDefault() does? 
 */

$('#noVowels').keypress(function(event){


	var key = String.fromCharCode(event.keyCode;
	if (key == 97 ){
			event.preventDefault();
	}
 $('#justPressed').text(String.fromCharCode(event.keyCode));

});

