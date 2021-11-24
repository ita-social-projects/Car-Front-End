import React from "react";
import MapView, { LatLng, PROVIDER_GOOGLE } from "react-native-maps";
import { initialCamera } from "../../constants/AddressConstants";
import { mapStopToMarker } from "../../utils/JourneyHelperFunctions";
import NotificationProps from "../../components/notifications/NotificationProps";
import Stop from "../../../models/stop/Stop";
import JourneyPoint from "../../../models/journey/JourneyPoint";
import { darkMapStyle } from "../../constants/DarkMapStyleConstant";
import { mapStyle } from "../../activity/journey/journey-activity/search-journey-map/SearchJourneyMapStyle";
import { useTheme } from "../../components/theme/ThemeProvider";

interface StopViewProps {
    route: {
        params: {
            journeyPoints: JourneyPoint[],
            stops: Stop[],
            cameraCoordinates: LatLng,
            notification: NotificationProps,
            withoutAccept?: boolean
        }
    }
}

const StopView = (props: StopViewProps) => {
    const { isThemeDark } = useTheme();
    const params = props.route.params;

    //const navigateBack = () => {
    //    navigation.goBack();
    //};

    return (
        <>
            <MapView
                style={{ flex: 1 }}
                initialCamera={{ ...initialCamera, center: params.cameraCoordinates }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                customMapStyle={isThemeDark ? darkMapStyle : mapStyle}
                showsCompass={false}
                showsMyLocationButton={false}
            >
                {params.stops.map(mapStopToMarker)}
            </MapView>
        </>
    );
};

export default StopView;
