/**
 * 1. Use the page layout site and add the necessary jQuery and JavaScript links to the index.html file.
 * 2. Prompt and ask the user for their name, save it in a variable and change the H1 tag to Welcome 'Users Name'.
 * 3. Print the contents of the "h2" tag in the console.
 * 4. Use the .append() method to update the h2 tag to say "Divs don't belong in the head".
 * 5. Print the contents of the h3 and h2 tags in the console.
 */

$(document).ready(function(){


var name = prompt('What is your name?');
$('h1').text('hello ' + name);

console.log($('h2').text());

$('h2').append(" don't belong in the head");

console.log ($('h2');
console.log ('h3');

});