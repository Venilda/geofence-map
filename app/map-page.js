//  /app/main-page.js

var mapsModule = require("nativescript-google-maps-sdk");
var Color = require("color").Color;

let obecto = {
    name: "Obecto",
    city: "Sofia",
    latitude: 42.66251948309662,
    longitude: 23.31786286085844,
    radius: 10
};

function onMapReady(args) {
    var mapView = args.object;

    console.log("Setting a marker...");
    var marker = new mapsModule.Marker();
    marker.position = mapsModule.Position.positionFromLatLng(obecto.latitude, obecto.longitude);
    marker.title = obecto.name;
    marker.snippet = obecto.city;
    marker.userData = { index: 1 };
    mapView.latitude = obecto.latitude;
    mapView.longitude = obecto.longitude;
    mapView.zoom = 20;
    mapView.addMarker(marker);

    var circle = new mapsModule.Circle();
    circle.center = mapsModule.Position.positionFromLatLng(obecto.latitude, obecto.longitude);
    circle.visible = true;
    circle.radius = obecto.radius;
    circle.fillColor = new Color('#997faaff');
    circle.strokeColor = new Color('#992a55ff');
    circle.strokeWidth = 2;
    mapView.addCircle(circle);
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