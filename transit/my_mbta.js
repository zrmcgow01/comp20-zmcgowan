var request = new XMLHttpRequest();




function init(){
	var lat = 42.3599611; //this will be changed to 0 in final version
	var lon = -71.0567528; //this will be changed to 0 in final version
	var myLocation = new google.maps.LatLng(lat, lon);		
	var mapOptions = {
						zoom: 13,
						center: myLocation,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					};
	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);			

	if(navigator.geolocation) {
		//navigator.geolocation.getCurrentPosition(function(position){
		//lat = position.coords.latitude;
		//lon = position.coords.longitude;
		//displayMap(map);
		
			map.panTo(myLocation);
		
			var marker = new google.maps.Marker({
				position: myLocation,
				title: "I am here!"
			});
			
			marker.setMap(map);
			var infoWindow = new google.maps.InfoWindow();
			google.maps.event.addListener(marker, 'click', function() {
				infoWindow.setContent(marker.title);
				infoWindow.open(map, marker);
			});
		//});
	}
	else {
		alert("Geolocation is not supported by this browser.");
		}
}


function displayMap(map){
	
	map.panTo(myLocation);

	var marker = new google.maps.Marker({
		position: myLocation,
		title: "I am here!"
	});
	
	marker.setMap(map);
	
	google.maps.event.addListener(marker, 'click', function() {
		infoWindow.setContent(marker.title);
		infoWindow.open(map, marker);
	});
}