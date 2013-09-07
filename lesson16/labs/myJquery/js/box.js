/*
	Only add code to this file.
*/

$('h1').remove();
$('body > p').remove();
var answer = prompt('Are you ready for the DOM to change? (Y)es or (N)o');

if (answer == 'Y' || answer == 'y') {
		$('.box').hide(3000, showBox2);
		// $('.box2').css('background-color', 'blue').show(1000);
}
else {
	alert('nothing has changed!');
}

function showBox2(){
		$('.box2').css('background-color', 'blue').show(1000);
}


