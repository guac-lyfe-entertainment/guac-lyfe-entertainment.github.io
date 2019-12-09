let myMap = () => {
    let myCenter = new google.maps.LatLng(18.390070,-66.095146);
    let mapCanvas = document.getElementById("googleMap");
    let mapOptions = {
        center: myCenter, 
        zoom: 14, 
        mapTypeControl: true,
        mapTypeControlOptions: {
            mapTypeIds: [
                google.maps.MapTypeId.ROADMAP,
                google.maps.MapTypeId.SATELLITE
            ]
        }, 
        streetViewControl: false
    };
    let map = new google.maps.Map(mapCanvas, mapOptions);
    let marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
    
    google.maps.event.addListener(marker, 'click', () => {
        let infowindow = new google.maps.InfoWindow({
            content:"Come visit us! - Phill's Phire Phoods"
        });
        infowindow.open(map,marker);
    });
};
