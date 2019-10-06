function myMap() {
    var myCenter = new google.maps.LatLng(18.390070,-66.095146);
    var mapCanvas = document.getElementById("googleMap");
    var mapOptions = {center: myCenter, zoom: 14, mapTypeControl: true,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP,
                google.maps.MapTypeId.SATELLITE]}, streetViewControl: false
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
    google.maps.event.addListener(marker,'click',function() {
        var infowindow = new google.maps.InfoWindow({
            content:"Come visit us! - JLM Solutions Corp."});
        infowindow.open(map,marker);
    });
}
