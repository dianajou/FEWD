$('#btn').click(function(event){

	var data = $('#data').val();
	console.log(data);

$('#results').html('');

	$.getJSON(data,function(json, textStatus, jqXHR) {


		$('#results').append('<p>This is the result:</p>');

		for (var i=0; i<json.length; i++){
			$('#results').append('<p>name: ' + json[i].name + '</p>');

		}
	})

		
});