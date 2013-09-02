$(function(){
	$('h2').css('background-color', 'green');

	$('h2').before('<h3>Hello World</h3>');
	$('<h3>Hello World!!!</h3>').insertAfter('h2');
	id = setInterval("$('#container').toggleClass('colored-container')", 3000);

});