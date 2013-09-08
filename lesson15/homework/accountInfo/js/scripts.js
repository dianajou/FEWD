$(document).ready(function(){

var name = prompt('What is your name?'); 
$('h2').text(name);

console.log($('h2').text());

var accountnum = prompt('What is your account number?');
$('h3').text('Account Number' + ': ' + accountnum);

});