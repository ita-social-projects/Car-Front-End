import React, { useContext, useRef, useState } from "react";
import JourneyPoint from "../../../../models/journey/JourneyPoint";
import Stop from "../../../../models/stop/Stop";
import MapView, { LatLng, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../../../activity/journey/journey-activity/search-journey-map/SearchJourneyMapStyle";
import { mapStopToMarker } from "../../../utils/JourneyHelperFunctions";
import { initialCamera } from "../../../constants/AddressConstants";
import SearchJourneyStyle from "../../../activity/journey/journey-activity/search-journey/SearchJourneyStyle";
import { Text, TouchableOpacity } from "react-native";
import { darkMapStyle } from "../../../constants/DarkMapStyleConstant";
import { useTheme } from "../../theme/ThemeProvider";
import NotificationsService from "../../../../api-service/notifications-service/NotificationsService";
import AuthContext from "../../auth/AuthContext";
import { HTTP_STATUS_OK } from "../../../constants/Constants";
import ConfirmModal from "../../confirm-modal/ConfirmModal";
import NotificationProps from "../../notifications/NotificationProps";
import * as navigation from "../../../components/navigation/Navigation";
import JourneyService from "../../../../api-service/journey-service/JourneyService";
import { DEFAULT_PASSANGERS_COUNT } from "../../../constants/JourneyConstants";
import Ionicons from "react-native-vector-icons/Ionicons";

interface RouteViewProps {
    route: {
        params: {
            journeyPoints: JourneyPoint[],
            stops: Stop[],
            currentStop: number,
            cameraCoordinates: LatLng,
            notification: NotificationProps,
            withoutAccept?: boolean
        }
    }
}

const RouteView = (props: RouteViewProps) => {
    const { colors, isThemeDark } = useTheme();
    const { user } = useContext(AuthContext);
    const params = props.route.params;
    const [approveModalVisible,setApproveModalVisible] = useState(false);
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const data = JSON.parse(params.notification.notificationData);
    const jsonData = JSON.stringify({
        hasLuggage: data?.hasLuggage,
        applicantStops: data?.applicantStops,
        passangersCount: data?.passangersCount ?? DEFAULT_PASSANGERS_COUNT
    });
    const [currentStop, setCurrentStop] = useState(params.currentStop);
    const mapRef = useRef<MapView | null>(null);
    const singleIndent = 1;
    const leftBorder = 0;

    const moveToNextStop = () : void => {
        if(currentStop == params.stops.length - singleIndent)
            moveCamera(currentStop);
        else
            moveToStop(currentStop, singleIndent);
    };

    const moveToPreviousStop = () : void => {
        if(currentStop == leftBorder)
            moveCamera(currentStop);
        else
            moveToStop(currentStop, -singleIndent);
    };

    const moveToStop = (stop : number, indent : number) : void => {
        moveCamera(stop + indent);
        setCurrentStop(stop + indent);
    };

    const moveCamera = (stop: number) : void => {
        mapRef.current?.animateCamera({
            center: getCoordinates(stop)
        }, { duration: 1000 });
    };

    const getCoordinates = (stop: number) : LatLng => {
        return {
            latitude: Number(params.stops[stop]?.address?.latitude),
            longitude: Number(params.stops[stop]?.address?.longitude)
        };
    };

    const sendApprove = () => {
        NotificationsService.addNotification(
            {
                senderId: user?.id!,
                receiverId:params.notification?.sender?.id!,
                journeyId: params.notification?.journeyId,
                type:2,
                jsonData: jsonData,
            }
        ).then((res)=> {
            if(res.status == HTTP_STATUS_OK) {
                setApproveModalVisible(true);
                NotificationsService.deleteNotification(params.notification?.notificationId);
                if(params.notification.onDelete)
                    params.notification.onDelete(params.notification.notificationId);
            }
        });
    };
    const navigateBack = () => {
        setApproveModalVisible(false);
        navigation.navigate("Notifications");
    };

    const approveUser = () => {
        JourneyService.addUser(
            {
                journeyUser: {
                    journeyId: params.notification?.journeyId,
                    userId: params.notification?.sender?.id!,
                    withBaggage: data?.hasLuggage,
                    passangersCount: data?.passangersCount ?? DEFAULT_PASSANGERS_COUNT
                },
                ApplicantStops: data?.applicantStops
            }
        ).then((res) => {
            if(res.status === HTTP_STATUS_OK && res.data) {
                sendApprove();
            }
            else{
                setErrorModalVisible(true);
            }
        });
    };

    return (
        <>
            <MapView
                ref = {mapRef}
                style={{ flex: 1 }}
                initialCamera={{ ...initialCamera, center: params.cameraCoordinates }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                customMapStyle={isThemeDark ? darkMapStyle : mapStyle}
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

            {
                <TouchableOpacity onPress = {moveToNextStop}
                    style={[SearchJourneyStyle.moveToStopButton, { right: 15 }]}
                >
                    <Ionicons name = "arrow-forward" color = {colors.white} size = {20}/>
                </TouchableOpacity>
            }

            {
                <TouchableOpacity onPress = {moveToPreviousStop}
                    style = {[SearchJourneyStyle.moveToStopButton, { left: 15 }]}
                >
                    <Ionicons name = "arrow-back" color = {colors.white} size = {20}/>
                </TouchableOpacity>
            }

            {!props.route.params.withoutAccept &&
            <>
                <TouchableOpacity onPress = {approveUser}
                    style={[SearchJourneyStyle.confirmButton, { backgroundColor: "black" }]}
                >
                    <Text style={[SearchJourneyStyle.confirmButtonSaveText, { color: colors.white }]}>
                    ACCEPT
                    </Text>
                </TouchableOpacity>
                <ConfirmModal
                    visible={approveModalVisible}
                    title="Request is approved"
                    subtitle="Your approvement was successfully sent to the applicant!"
                    confirmText="Ok"
                    hideCancelButton={true}
                    disableModal={navigateBack}
                    onConfirm={navigateBack}
                />

                <ConfirmModal
                    visible={errorModalVisible}
                    title="Error"
                    subtitle="Failed to add the user to the ride!"
                    confirmText="Ok"
                    hideCancelButton={true}
                    disableModal={() => {
                        setErrorModalVisible(false);
                    }}
                    onConfirm={() => {
                        setErrorModalVisible(false);
                    }}
                />
            </>
            }
        </>
    );
};

export default RouteView;
