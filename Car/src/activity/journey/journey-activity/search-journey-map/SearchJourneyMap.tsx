import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "./SearchJourneyMapStyle";
import SearchJourneyMapProps from "./SearchJourneyMapProps";
import { isDarkMode } from "../../../../components/theme/ThemeProvider";
import { darkMapStyle } from "../../../../constants/DarkMapStyleConstant";

const SearchJourneyMap = (props: SearchJourneyMapProps) => {
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
            customMapStyle={isDarkMode ? darkMapStyle : mapStyle}
        >
            <Marker
                image={require("../../../../../assets/images/maps-markers/with_shade.png")}
                coordinate={{
                    latitude: props.latitude,
                    longitude: props.longitude
                }}
            />
        </MapView>
    );
};

export default SearchJourneyMap;
