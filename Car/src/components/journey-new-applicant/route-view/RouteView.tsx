import React, { useContext, useState } from "react";
import JourneyPoint from "../../../../models/journey/JourneyPoint";
import Stop from "../../../../models/stop/Stop";
import MapView, { LatLng, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../../../activity/journey/journey-activity/search-journey-map/SearchJourneyMapStyle";
import { mapStopToMarker } from "../../../utils/JourneyHelperFunctions";
import { initialCamera } from "../../../constants/AddressConstants";
import SearchJourneyStyle from "../../../activity/journey/journey-activity/search-journey/SearchJourneyStyle";
import { Text, TouchableOpacity } from "react-native";
import DM from "../../styles/DM";
import { darkMapStyle } from "../../../constants/DarkMapStyleConstant";
import { isDarkMode } from "../../navigation/Routes";
import NotificationsService from "../../../../api-service/notifications-service/NotificationsService";
import AuthContext from "../../auth/AuthContext";
import { HTTP_STATUS_OK } from "../../../constants/Constants";
import ConfirmModal from "../../confirm-modal/ConfirmModal";
import NotificationProps from "../../notifications/NotificationProps";
import * as navigation from "../../../components/navigation/Navigation";

interface RouteViewProps {
    route: {
        params: {
            journeyPoints: JourneyPoint[],
            stops: Stop[],
            cameraCoordinates: LatLng,
            notification: NotificationProps
        }
    }
}

const RouteView = (props: RouteViewProps) => {
    const { user } = useContext(AuthContext);
    const params = props.route.params;
    const [approveModalVisible,setApproveModalVisible] = useState(false);

    const sendApprove = () => {
        console.log(params);
        console.log(params.notification?.sender?.id);
        console.log(params.notification?.journeyId!);
        NotificationsService.addNotification(
            {
                senderId: user?.id!,
                receiverId:params.notification?.sender?.id!,
                journeyId: params.notification?.journeyId!,
                type:2,
                jsonData:"{}",
            }
        ).then((res)=> {
            if(res.status == HTTP_STATUS_OK) {
                setApproveModalVisible(true);
                NotificationsService.deleteNotification(params.notification?.notificationId);
            }
        });
    };
    const navigateBack = () => {
        setApproveModalVisible(false);
        navigation.navigate("Notifications");
    };

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
            <TouchableOpacity onPress = {sendApprove}
                style={[SearchJourneyStyle.confirmButton, { backgroundColor: "black" }]}
            >
                <Text style={[SearchJourneyStyle.confirmButtonSaveText, { color: DM(DM("white")) }]}>
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
        </>
    );
};

export default RouteView;