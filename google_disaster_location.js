var map;

function initialize() {
  var myOptions = {
    zoom: 2,
    center: new google.maps.LatLng(0, 0),
    //disableDefaultUI: true, remove user panel
    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.DEFAULT
    },//Can accept small. DEFAULT, large
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },//Can accept HORIZONTAL_BAR, , DEFAULT
    rotateControl: true,
    scaleControl: true,
    streetViewControl: false,
    overviewMapControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById("google_disaster_location_map"), myOptions);
  map.setMapTypeId(Drupal.settings.map_config.type);

  if((Drupal.settings.map_config.Lat != 0) && (Drupal.settings.map_config.Lon != 0)) {
    map.setCenter(new google.maps.LatLng(Drupal.settings.map_config.Lat, Drupal.settings.map_config.Lon));
    map.setZoom(10);
  }
  else {
    map.setCenter(new google.maps.LatLng(0, 0)); //Nothing to show map cenetr gets param (0, 0) 
    map.setZoom(parseInt(Drupal.settings.map_config.zoom));
  }

  var path_to_module = Drupal.settings.path_to_module;

  if(Drupal.settings.earthquakes_data != null) {
    for (i = 0; i < Drupal.settings.earthquakes_data.length; i++) {
      var description = '<div id="infobox"><h4 style="margin:0px">' + Drupal.settings.earthquakes_data[i].Region + '</h4><br />';
      description += '<b>Id: </b>' + Drupal.settings.earthquakes_data[i].Eqid + '<br />' + '<b>Datetime: </b>' + Drupal.settings.earthquakes_data[i].datetime + '<br />';
      description += '<b>Latitude: </b>' + Drupal.settings.earthquakes_data[i].Lat + '<br />' + '<b>Longitude: </b>' + Drupal.settings.earthquakes_data[i].Lon + '<br />';
      description += '<b>Magnitude: </b>' + Drupal.settings.earthquakes_data[i].Magnitude + '<br />' + '<b>Depth: </b>' + Drupal.settings.earthquakes_data[i].Depth;
      description += '<br /><a  target="new" href="' + Drupal.settings.earthquakes_data[i].link + '"> More info </a></div>';
      var location = new google.maps.LatLng(parseFloat(Drupal.settings.earthquakes_data[i].Lat), parseFloat(Drupal.settings.earthquakes_data[i].Lon));
      var image = new google.maps.MarkerImage(path_to_module + '/img/earthquake.png');
      var marker = placeMarker(location);
      marker.setIcon(image);
      attachMessage(marker, description);
    }
  }
  if(Drupal.settings.floods_data != null) {
    for (i = 0; i < Drupal.settings.floods_data.length; i++) {
      var description ='<div id="infobox"> <h4 style="margin:0px">' + Drupal.settings.floods_data[i].title + '</h4><b>ID: </b>' + Drupal.settings.floods_data[i].ID + '<br />';
      description += '<b>Location(s): </b>' + Drupal.settings.floods_data[i].locations + '<br />' + '<b>Date began: </b>' + Drupal.settings.floods_data[i].began + '<br />';
      description += '<b>Date ended: </b>' + Drupal.settings.floods_data[i].ended + '<br />' + '<b>Main cause: </b>' + Drupal.settings.floods_data[i].main_cause + '<br />';
      description += '<b>Latitude: </b>' + Drupal.settings.floods_data[i].latitude + '<br />' + '<b>Longitude: </b>' + Drupal.settings.floods_data[i].longitude + '<br />';
      description += '<b>Magnitude: </b>' + Drupal.settings.floods_data[i].magnitude + '<br />' + '<b>sqkm: </b>' + Drupal.settings.floods_data[i].sqkm + '<br />';
      description += '<a  target="new" href="' + Drupal.settings.floods_data[i].link + '"> More info </a></div>';
      var location = new google.maps.LatLng(parseFloat(Drupal.settings.floods_data[i].latitude), parseFloat(Drupal.settings.floods_data[i].longitude));
      var image = new google.maps.MarkerImage(path_to_module + '/img/flood.png');
      var marker = placeMarker(location);
      marker.setIcon(image);
      attachMessage(marker, description);
    }
  }
  if(Drupal.settings.volcanoes_data != null) {
    for (i = 0; i < Drupal.settings.volcanoes_data.length; i++) {
      var description = '<div id="infobox"> <h4 style="margin:0px">' + Drupal.settings.volcanoes_data[i].title + '</h4><br />';
      description += '<b>About: </b>' + Drupal.settings.volcanoes_data[i].description + '<br />' + '<b>Datetime: </b>' + Drupal.settings.volcanoes_data[i].datetime + '<br />';
      description += '<b>Latitude: </b>' + Drupal.settings.volcanoes_data[i].Lat + '<br />' + '<b>Longitude: </b>' + Drupal.settings.volcanoes_data[i].Lon + '<br />';
      description += '<a  target="new" href="' + Drupal.settings.volcanoes_data[i].link + '"> More info </a></div>';
      var location = new google.maps.LatLng(parseFloat(Drupal.settings.volcanoes_data[i].Lat), parseFloat(Drupal.settings.volcanoes_data[i].Lon));
      var image = new google.maps.MarkerImage(path_to_module + '/img/volcano.png');
      var marker = placeMarker(location);
      marker.setIcon(image);
      attachMessage(marker, description);      
    }
  }
}

function placeMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
  return marker;
}

function attachMessage(marker, message) {
  var infowindow = new google.maps.InfoWindow({ 
    maxWidth: 200,
    content: message,
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

function popupMessage() {
  $('#popuup_div').show();
}

function popupClose() {
  $('#popuup_div').hide();
}

google.maps.event.addDomListener(window, 'load', initialize);
