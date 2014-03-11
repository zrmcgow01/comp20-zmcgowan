
var xhr;

function init(){
	var lat = 42.3599611; //this will be changed to 0 in final version
	var lon = -71.0567528; //this will be changed to 0 in final version
	var myLocation = new google.maps.LatLng(lat, lon);		
	var mapOptions = {
						zoom: 13,
						center: myLocation,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					};
	map_div = document.getElementById("map_canvas");
	var map = new google.maps.Map(map_div, mapOptions);			

	if(navigator.geolocation) {
		//navigator.geolocation.getCurrentPosition(function(position){
		//lat = position.coords.latitude;
		//lon = position.coords.longitude;
		
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
			draw_stations(map);
		//});
	}
	else {
		alert("Geolocation is not supported by this browser.");
		}
}

function draw_stations(map){

	xhr = new XMLHttpRequest();
	xhr.open("get", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true);
	xhr.onreadystatechange = dataReady;
	xhr.send(null);
}

function dataReady(){
	if (xhr.readyState == 4 && xhr.status == 200) {
			scheduleData = JSON.parse(xhr.responseText);
			scheduleDom = document.getElementById("schedule");
			
			var myLocation = new google.maps.LatLng(lat, lon);	
		}
	else if (xhr.readyState == 4 && xhr.status == 500) {
		scheduleDom = document.getElementById("schedule");
		scheduleDom.innerHTML = '<p>Loading the data has failed. Please try again</p>';
	
				}
	}
}

function parse_json(){
	console.log("hi");
	xhr = new XMLHttpRequest();
	xhr.open("get", "stations.json", true);
	xhr.onreadystatechange = parse_stations;
	xhr.send(null);
}

function parse_stations(){
	if(xhr.readyState==4 && xhr.status == 200) {
		console.log("json file properly opened");
		data = JSON.parse(xhr.responseText);
		scheduleDom = document.getElementById("schedule");
		scheduleDom.innerHTML = data[1]["line"];
	}
}	