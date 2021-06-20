import React from "react";
import JourneyPoint from "../../../../models/journey/JourneyPoint";
import Stop from "../../../../models/stop/Stop";
import MapView, { LatLng, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../../../activity/journey/journey-activity/map-address/SearchJourneyMapStyle";
import { mapStopToMarker } from "../../../utils/JourneyHelperFunctions";
import { initialCamera } from "../../../constants/AddressConstants";
import SearchJourneyStyle from "../../../activity/journey/journey-activity/search-journey/SearchJourneyStyle";
import { Text, TouchableOpacity } from "react-native";
import DM from "../../styles/DM";
import { darkMapStyle } from "../../../constants/DarkMapStyleConstant";
import { isDarkMode } from "../../navigation/Routes";

interface RouteViewProps {
    route: {
        params: {
            journeyPoints: JourneyPoint[],
            stops: Stop[],
            cameraCoordinates: LatLng
        }
    }
}

const RouteView = (props: RouteViewProps) => {
    const params = props.route.params;

    return (
        <>
            <MapView
                style={{ flex: 1 }}
                initialCamera={{ ...initialCamera, center: params.cameraCoordinates }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                customMapStyle={isDarkMode ? darkMapStyle : mapStyle}
                showsCompass={false}
                showsMyLocationButton={false}
            >
                <Polyline
                    coordinates={params.journeyPoints}
                    strokeWidth={5}
                    strokeColor={"#027ebd"}
                />

                {params.stops.map(mapStopToMarker)}
            </MapView>
            <TouchableOpacity
                style={[SearchJourneyStyle.confirmButton, { backgroundColor: "black" }]}
            >
                <Text style={[SearchJourneyStyle.confirmButtonSaveText, { color: DM(DM("white")) }]}>
                    ACCEPT
                </Text>
            </TouchableOpacity>
        </>
    );
};

export default RouteView;