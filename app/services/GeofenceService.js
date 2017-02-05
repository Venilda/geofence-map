var utils = require("utils/utils");

const GEOFENCE_RADIUS = 10;
const GoogleApi = com.google.android.gms.location;
const context = utils.ad.getApplicationContext();

const GoogleApiClient = com.google.android.gms.common.api.GoogleApiClient;
const LocationServices = com.google.android.gms.location.LocationServices;
const LocationRequest = com.google.android.gms.location.LocationRequest;
const LocationListener = com.google.android.gms.location.LocationListener;

class GeofenceService {

    constructor() {}

    geofenceEnter(chain, store) {

    }

    geofenceExit(chain, store) {

    }

    initialize(sproximityMarketingData) {
        return new sproximityMarketingData();
    }

    intializeApi() {
        this.googleApiClient = new GoogleApiClient.Builder(application.android.context)
            .addConnectionCallbacks(new GoogleApiClient.ConnectionCallbacks({
                onConnected: function() {
                    debug('onConnected', arguments);
                    this.ready = true;
                    this.notify({
                        eventName: 'ready',
                    });
                    this.notify({
                        eventName: '_googleApiClientConnected',
                        object: this.googleApiClient
                    });
                }.bind(this),
                onConnectionSuspended: function() {
                    debug('onConnectionSuspended', arguments);
                    this.notify({
                        eventName: '_googleApiClientConnectionSuspended',
                        object: this.googleApiClient
                    });
                }.bind(this),
            }))
            .addOnConnectionFailedListener(new GoogleApiClient.OnConnectionFailedListener({
                onConnectionFailed: function() {
                    debug('onConnectionFailed', arguments);
                    this.notify({
                        eventName: '_googleApiClientConnectionFailed',
                        object: this.googleApiClient
                    });
                }.bind(this),
            }))
            .addApi(LocationServices.API)
            .build();

        this.googleApiClient.connect();
    }

    addGeofence(chain, store) {
        let geofancePoint = new GoogleApi.Geofence.Builder()
            .setRequestId(chain.name)
            .setCircularRegion(
                store.latitude,
                store.longitude,
                this.GEOFENCE_RADIUS
            ).setExpirationDuration(12 * 60 * 60 * 1000)
            .setTransitionTypes(1 | 2)
            .build();

        let builder = new GoogleApi.GeofencingRequest.Builder();
        builder.setInitialTrigger(GoogleApi.GeofencingRequest.INITIAL_TRIGGER_ENTER);
        builder.addGeofence(geofancePoint);
        return builder.build();
    }
}