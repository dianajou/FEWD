/* Write the JS neccesary to calculate values after a number is changed inside the form field.

Hints:
1.) Learn about change event methods: http://api.jquery.com/change/
2.) Learn about retrieving values from form inputs: http://api.jquery.com/val/
3.) Learn how to select specific inputs using eq selectors: http://api.jquery.com/eq-selector/

*/

$('#addition input:eq(0)').change(addition);
$('#addition input:eq(1)').change(addition);

function addition() {
	var sumBox1 = parseInt($('#addition input:eq(0)').val());
}








// $('#addition input:eq(0)').change(function(){

// 	var sumBox1 = parseInt($('#addition input:eq(0)').val());
// 	var sumBox2 = parseInt($('#addition input:eq(1)').val());

// 	// console.log(sumBox1);
// 	// console.log(sumBox2);
// 	$('#addition input:eq(2)').val(sumBox1 + sumBox2);

// });

// $('#addition input:eq(1)').change(function(){

// 	var sumBox1 = parseInt($('#addition input:eq(0)').val());
// 	var sumBox2 = parseInt($('#addition input:eq(1)').val());

// 	// console.log(sumBox1);
// 	// console.log(sumBox2);
// 	$('#addition input:eq(2)').val(sumBox1 + sumBox2);

// });