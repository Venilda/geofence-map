var utils = require("utils/utils");

const GEOFENCE_RADIUS = 10;
const GoogleApi = com.google.android.gms.location;
const context = utils.ad.getApplicationContext();

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