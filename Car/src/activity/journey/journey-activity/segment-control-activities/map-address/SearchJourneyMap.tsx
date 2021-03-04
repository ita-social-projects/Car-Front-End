import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../map-address/SearchJourneyMapStyle";

const SearchJourneyMap = (props: any) => {
    return (
        <MapView
            style={{ flex: 1 }}
            provider={PROVIDER_GOOGLE}
            region={{
                latitude: 49.843844,
                longitude: 24.025581,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            customMapStyle={mapStyle}
        >
            <Marker
                image={require("../../../../../../assets/images/custom-marker.png")}
                coordinate={{
                    latitude: props?.latitude,
                    longitude: props?.longitude
                }}
            />
        </MapView>
    );
};

export default SearchJourneyMap;
