  var map;
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();
    
 function initMap() {  

  var chernigiv = new google.maps.LatLng(51.4938438, 31.2999212);
      
  var mapOptions = {
      zoom: 9,
      center: chernigiv
  }

  map = new google.maps.Map(document.getElementById('map'), mapOptions);
     directionsDisplay.setMap(map);

  var marker = new google.maps.Marker({
        position: chernigiv,
        map: map
        });

  document.getElementById('submit').addEventListener('click', function() {
          calcRoute(directionsService, directionsDisplay);
        });
}

function calcRoute() {
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  var request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.WALKING
  };

      directionsService.route(request, function(result, status) {
        if (status == 'OK') {
        directionsDisplay.setDirections(result);
     }
  });
}

$(document).ready(function(){
  initMap();
});     