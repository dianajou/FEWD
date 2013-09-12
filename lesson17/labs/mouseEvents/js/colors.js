

$('#color_string').on('click', '.color', function(event){
		console.log(123);


});


$('html').mousemove(function(event){
	// console.log(event.pageX);
	// console.log(event.pageY);
	$('#xLocation').text(event.pageX);
	$('#yLocation').text(event.pageY);
});

$('#mouseBox').mousedown(function(hello){
		function hello(){
			console.log('hello world');

		}
});

$('#mouseBox').on ('mousedown mouseup', function(event){
		
			console.log('hello world');
	
});