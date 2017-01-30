//  /app/main-page.js

var mapsModule = require("nativescript-google-maps-sdk");

function onMapReady(args) {
    var mapView = args.object;

    console.log("Setting a marker...");
    var marker = new mapsModule.Marker();
    marker.position = mapsModule.Position.positionFromLatLng(42.662512826300194, 23.31785447895527);
    marker.title = "Obecto";
    marker.snippet = "Sofia";
    marker.userData = { index: 1 };
    mapView.latitude = 42.662512826300194;
    mapView.longitude = 23.31785447895527;
    mapView.zoom = 20;
    mapView.addMarker(marker);
}

function onMarkerSelect(args) {
    console.log("Clicked on " + args.marker.title);
}

function onCameraChanged(args) {
    console.log("Camera changed: " + JSON.stringify(args.camera));
}

exports.onMapReady = onMapReady;
exports.onMarkerSelect = onMarkerSelect;
exports.onCameraChanged = onCameraChanged;