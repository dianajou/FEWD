

$('#color_string').keypress(function(event){
		


});


// $('html').mousemove(function(event){
// 	// console.log(event.pageX);
// 	// console.log(event.pageY);
// 	$('#xLocation').text(event.pageX);
// 	$('#yLocation').text(event.pageY);
// });

// $('#mouseBox').mousedown(function(hello){
// 		function hello(){
// 			console.log('hello world');

// 		}
// });

// $('#mouseBox').on ('mousedown mouseup', function(event){
		
// 			console.log('hello world');
	
// });

// This is the global variable of storing the selected color jquery object.
// Initially there is no selected color so it is null.
var selected_color = null;

// Document ready. not necessary to use this as the colors.js is included at the end just before the body closing tag.
$(function(){

  // Bind the add_colors() callback when the user click the add button
  $('#add').click(add_colors);

  // Bind the change_bg() callback when the mouse hovering the small color square which are already added.
  $('#colors').on('hover', '.color', change_bg);

  // Bind the delete_color() callback when the user double click the small square.
  $('#colors').on('dblclick', '.color', delete_color);

  // Bind the toggle_select_color() callback when the user click the small square.
  $('#colors').on('click', '.color', toggle_select_color);

  // Move the selected small square when user click one of the 2 arrows.
  $('#left').click(left);
  $('#right').click(right);

});

function add_colors() {
  // Get the user colors input
  var colors = $('#colors_string').val();

  // Split the input string into an array of colors.
  colors = colors.split(', ');

  // For each color string in the array, append the small square which is a div with class="color".
  for(var i = 0; i < colors.length; i++) {
    var color = $('<div>');
    color.addClass('color');
    color.css('background-color', colors[i]);
    $('#colors').append(color);
  }
}

function change_bg() {
  // get the color of the small square being mouse hovered.
  var color = $(this).css('background-color');

  // Set the input textbox bg color.
  $('#colors_string').css('background-color', color);
}

function delete_color() {
  // Remove the small squared which is double clicked.
  $(this).remove();
}

function toggle_select_color() {
  // the selected is just a border, you can add manipulate using inline style or you could make use of the "selected" class.

  // Check the global variable selected_color and check if it is equal to the current small square being clicked.
  if(selected_color != this) {
    // Rmoev border of the current selected color if the user click the non-selected small square
    $(selected_color).removeClass('selected');
    // Assign the current selected box in the the global variable selected_color.
    selected_color = this;
    // Set the border
    $(selected_color).addClass('selected');
  }
  else {
    // Only remove the border when the user click the selected color again.
    $(selected_color).removeClass('selected');
    selected_color = null;
  }
}

function left() {
  if(selected_color !== null) {
    // Move the selected color to the previous one.
    var previous = $(selected_color).prev();
    previous.before(selected_color);
  }
}

function right() {
  if(selected_color !== null) {
    // Move the selected color to the next one.
    var next = $(selected_color).next();
    next.after(selected_color);
  }
}
