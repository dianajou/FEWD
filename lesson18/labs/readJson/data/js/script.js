$('#btn').click(function(event){
	
	var data = $('#data').val;
	$.getJSON(data,function(json, textStatus, jqXHR) {

		console.log(json);
		console.log(textStatus);
		console.log(jqXHR);
	}

		)
});