import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import MapView, { LatLng, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import Ionicons from "react-native-vector-icons/Ionicons";
import JourneyPoint from "../../../models/journey/JourneyPoint";
import Stop from "../../../models/stop/Stop";
import User from "../../../models/user/User";
import { mapStyle } from "../../activity/journey/journey-activity/search-journey-map/SearchJourneyMapStyle";
import SearchJourneyStyle from "../../activity/journey/journey-activity/search-journey/SearchJourneyStyle";
import MyProfileTabsStyle from "../../activity/my-profile/my-profile-tabs/MyProfileTabsStyle";
import { initialCamera } from "../../constants/AddressConstants";
import { darkMapStyle } from "../../constants/DarkMapStyleConstant";
import { mapStopToMarker } from "../../utils/JourneyHelperFunctions";
import StopLogoTitle from "../stop-logo-title/StopLogoTitle";
import { useTheme } from "../theme/ThemeProvider";
import * as navigation from "../../components/navigation/Navigation";

interface StopsViewProps {
    journeyPoints: JourneyPoint[],
    stops: Stop[],
    currentStop: number,
    cameraCoordinates: LatLng,
    user: User,
    useOnlyIntermediateStops: boolean
}

const StopsView = (props: StopsViewProps) => {
    const { colors, isThemeDark } = useTheme();

    const [currentStop, setCurrentStop] = useState(props.currentStop);
    const mapRef = useRef<MapView | null>(null);
    const zero = 0;
    const singleIndent = 1;
    const doubleIndent = 2;
    const [firstStop, setFirstStop] = useState<number>();
    const [lastStop, setLastStop] = useState<number>();

    const [visibilityOfNextButton, setVisibilityOfNextButton] = useState<boolean>();
    const [visibilityOfPreviousButton, setVisibilityOfPreviousButton] = useState<boolean>();

    const fixedHeightOfLogoTitle = 105;
    const maxLengthOfRow = 42;
    const heightOfRow = 20;
    const [numberOfRows, setNumberOfRows] = useState<number>(zero);

    useEffect(() => {
        setNumberOfRows(getHeightOfAddressRow(props.stops[currentStop]?.address?.name.length!));
    });

    useEffect(() => {
        if(props.useOnlyIntermediateStops) {
            setFirstStop(singleIndent);
            setLastStop(props.stops.length - doubleIndent);
        }
        else {
            setFirstStop(zero);
            setLastStop(props.stops.length - singleIndent);
        }
    }, []);

    useEffect(() => {
        if(currentStop == lastStop) {
            setVisibilityOfNextButton(true);
        }
        else {
            setVisibilityOfNextButton(false);
        }
        if(currentStop == firstStop) {
            setVisibilityOfPreviousButton(true);
        }
        else {
            setVisibilityOfPreviousButton(false);
        }
    });

    const getHeightOfAddressRow = (length: number): number => {
        return Math.ceil(length / maxLengthOfRow);
    };

    const moveToNextStop = (): void => {
        moveToStop(currentStop, singleIndent);
    };

    const moveToPreviousStop = (): void => {
        moveToStop(currentStop, -singleIndent);
    };

    const moveToStop = (stop: number, indent: number): void => {
        moveCamera(stop + indent);
        setCurrentStop(stop + indent);
    };

    const moveCamera = (stop: number): void => {
        mapRef.current?.animateCamera({
            center: getCoordinates(stop)
        }, { duration: 1000 });
    };

    const getCoordinates = (stop: number): LatLng => {
        return {
            latitude: Number(props.stops[stop]?.address?.latitude),
            longitude: Number(props.stops[stop]?.address?.longitude)
        };
    };

    return (
        <>
            <MapView
                ref = {mapRef}
                style={{ flex: 1 }}
                initialCamera={{ ...initialCamera, center: props.cameraCoordinates }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                customMapStyle={isThemeDark ? darkMapStyle : mapStyle}
                showsCompass={false}
                showsMyLocationButton={false}
            >
                <Polyline
                    coordinates={props.journeyPoints}
                    strokeWidth={5}
                    strokeColor={"#027ebd"}
                />
                {props.stops.map(mapStopToMarker)}
            </MapView>

            {
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("Applicant Page", {
                            userId: props.user?.id
                        })
                    }
                    style={[MyProfileTabsStyle.profileInfo,
                        {
                            borderColor: colors.neutralLight,
                            backgroundColor: colors.white,
                            elevation: 7,
                            height: fixedHeightOfLogoTitle + (numberOfRows - singleIndent) * heightOfRow,
                            top: 17
                        }]}
                >
                    <StopLogoTitle
                        stopToDisplay = {props.stops[currentStop]}
                        userToDisplay = {props.user}
                    />
                </TouchableOpacity>
            }

            {visibilityOfNextButton ||
                <TouchableOpacity onPress = {moveToNextStop}
                    style = {[SearchJourneyStyle.moveToStopButton,
                        { right: 15, backgroundColor: isThemeDark? "#FFFFFF" : "#414045" }]}
                >
                    <Ionicons name = "arrow-forward" color = {colors.white} size = {20}/>
                </TouchableOpacity>
            }

            {visibilityOfPreviousButton ||
                <TouchableOpacity onPress = {moveToPreviousStop}
                    style = {[SearchJourneyStyle.moveToStopButton,
                        { left: 15, backgroundColor: isThemeDark? "#FFFFFF" : "#414045" }]}
                >
                    <Ionicons name = "arrow-back" color = {colors.white} size = {20}/>
                </TouchableOpacity>
            }
        </>
    );
};

export default StopsView;
