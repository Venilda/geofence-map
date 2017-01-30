//  /app/main-page.js

var mapsModule = require("nativescript-google-maps-sdk");

function onMapReady(args) {
    var mapView = args.object;

    console.log("Setting a marker...");
    var marker = new mapsModule.Marker();
    marker.position = mapsModule.Position.positionFromLatLng(42.66251948309662, 23.31786286085844);
    marker.title = "Obecto";
    marker.snippet = "Sofia";
    marker.userData = { index: 1 };
    mapView.latitude = 42.66251948309662;
    mapView.longitude = 23.31786286085844;
    mapView.zoom = 22;
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