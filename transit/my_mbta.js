var map; //global variable for Google map
var lat = 0; //initialize latitiude variable
var lon = 0; //initialize longitude variable
var request = new XMLHttpRequest(); //do I need?
var infoWindow = new google.maps.InfoWindow(); //this will be filled
						//with information about the appropriate station
var myLocation = new google.maps.LatLng(lat, lon);
var mapOptions = {
					zoom: 13,
					center: myLocation,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				
var marker; //do I need?
var places; //do i need?


function init(){
	console.log("got here");
	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){
		lat = position.coords.latitude;
		lon = position.coords.longitude;
		displayMap();
		});
	}
	else {
		alert("Geolocation is not supported by this browser.");
		}
}


function displayMap(){

	myLocation = new google.maps.LatLng(lat, lon);
	
	map.panTo(myLocation);

	marker = new google.maps.Marker({
		position: myLocation,
		title: "I am here!"
	});
	
	marker.setMap(map);
	
	//google.maps.event.addListener(marker, 'click', function() {
	//	infoWindow.setContent(marker.title);
	//	infoWindow.open(map, marker);
	//});
}