$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        // var $bgobj = $(this); // assigning the object
     
        // $(window).scroll(function() {
        //     var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
             
        //     // Put together our final background position
        //     var coords = '50% '+ yPos + 'px';
 
        //     // Move the background
        //     $bgobj.css({ backgroundPosition: coords });
        // }); 
    });    

    /*
    function labelCircle( circleObj, text  )
    {
        var textattr = { 'font-size': 10, fill: '#000', stroke: 'none', 'font-family': 'Arial,Helvetica,sans-serif', 'font-weight': 400 };
        var bbox = circleObj.getBBox();
        var textObj = circleObj.paper.text( bbox.x + bbox.width / 2, bbox.y + bbox.height / 2, text ).attr( textattr );
        return textObj;
    }

    labelCircle(circles[0],"Test"); */

    // navCircles[0].click(function () {
    //     $('html, body').animate({scrollTop: $("#intro").offset().top}, 500);
    // });

    // navCircles[1].click(function () {
    //     $('html, body').animate({scrollTop: $("#depratio").offset().top}, 500);
    // });

    // navCircles[2].click(function () {
    //     $('html, body').animate({scrollTop: $("#fertility").offset().top}, 500);
    // });

    // navCircles[3].click(function () {
    //     $('html, body').animate({scrollTop: $("#lifeexp").offset().top}, 500);
    // });

    // navCircles[4].click(function () {
    //     $('html, body').animate({scrollTop: $("#money").offset().top}, 500);
    // });

    // navCircles[5].click(function () {
    //     $('html, body').animate({scrollTop: $("#share").offset().top}, 500);
    // });
});

$('#home-container').on('click', function(){
    $(this).slideToggle()
})


// function selectNav(id) {
//     navCircles.attr({r: navNormal, fill: navNormalColor});
//     navCircles[id].attr({r: navZoom, fill: navZoomColor});
//     selected = navCircles[id];
// }



var stations = [
	{
		name:'Sheung Wan',
		coordinates: [48.40129,8.3823],
		sequence:67,
		media:'images/tram.jpg',
		caption:'Fruits of the seas',
	},{
		name:'Tong Wan',
		coordinates: [48.40129,8.3823],
		sequence:67,
		media:'images/tram2.jpg',
		caption:'Fruits of the seas',
	}
]

stations.each(
    function(station){
        $('#panels').append(
            '<div class="panel">' +
                '<img src="' + station.media + '">' +
                '<h1>' + station.name + '</h1>' +
                '<p>' + station.caption + '</p>' +
            '</div>'
        )
    }
)


var DingDing = (function(obj){
	stations = obj.map(function(s){ return new Station(s)})
	// We use the stations || {} to pass in the stations variable that you've defined,
	// or (||) if it can't find it it will pass an empty object and your script won't 
	// because of it! :)
	return {
		stations : stations
	}
}(stations || {}))

function Station(obj){
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			this[prop] = obj[prop];
		}
	}
   	// If we user CLASS.prototype.METHOD it is only stored
   	// once in memory but we can use it for all objects that
   	// are created
   	Station.prototype.toString = function() {
   		return this.name + ' @ [' + this.coordinates.toString() + ']'
   	};
	
	Station.prototype.print = function(msg){
		console.log(msg);
	}

	Station.prototype.visitNext = function(){
		DingDing.stations.map(function(s){
			s.sequence - this.sequence
		})
	}

	Station.prototype.visitPrev = function(){
		DingDing.stations.map(function(s){
			this.sequence - s.sequence
		})
	}

	Station.prototype.panel = function() {
		stationHTML = '<section><h2>' + this.name + '</h2><img class="stationImage">' + this.media + '</img><p>'+ this.caption+ '</p></setion>'
		$('#panels').append(stationHTML)
	};
}


var SheungWan = new Station(stations[0])

