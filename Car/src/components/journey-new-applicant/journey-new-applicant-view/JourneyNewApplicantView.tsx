import React, { useEffect, useState, useContext } from "react";
import { Text, View } from "react-native";
import NotificationProps from "../../notifications/NotificationProps";
import NotificationButtonGroup from "../../notifications/notification-buttons/NotificationButtonGroup";
import NotificationConfirmButton from "../../notifications/notification-buttons/NotificationConfirmButton";
import NotificationDeclineButton from "../../notifications/notification-buttons/NotificationDeclineButton";
import RequestComment from "../request-comments/RequestComment";
import WithLuggage from "../with-luggage/WithLuggage";
import Stop from "../../../../models/stop/Stop";
import JourneyService from "../../../../api-service/journey-service/JourneyService";
import { getStopByType, getStopCoordinates } from "../../../utils/JourneyHelperFunctions";
import StopType from "../../../../models/stop/StopType";
import { FIRST_ELEMENT_INDEX, SECOND_ELEMENT_INDEX, THIRD_ELEMENT_INDEX } from "../../../constants/GeneralConstants";
import JourneyPoint from "../../../../models/journey/JourneyPoint";
import * as navigation from "../../../components/navigation/Navigation";
import StopsBlock from "../../../activity/journey/journey-activity/journey-page/blocks/stops-block/StopsBlock";
import NotificationsService from "../../../../api-service/notifications-service/NotificationsService";
import AuthContext from "../../../components/auth/AuthContext";
import { HTTP_STATUS_OK } from "../../../constants/Constants";
import Journey from "../../../../models/journey/Journey";
import ConfirmModal from "../../confirm-modal/ConfirmModal";
import AvatarLogoTitle from "../../avatar-logo-title/AvatarLogoTitle";
import DM from "../../styles/DM";
import JourneyNewApplicantViewStyle from "./JourneyNewApplicantViewStyle";

interface JourneyNewApplicantViewProps {
    route: {
        params: {
            notification: NotificationProps
        }
    }
}

const JourneyNewApplicantView = (props: JourneyNewApplicantViewProps) => {
    const params = props.route.params.notification;
    const [approveModalVisible,setApproveModalVisible] = useState(false);
    const [declineModalVisible,setDeclineModalVisible] = useState(false);
    const [confirmationModalVisible,setConfirmationModalVisible] = useState(false);
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const data = JSON.parse(params.notificationData);
    const [stops, setStops] = useState<Stop[]>([]);
    const [journey, setJourney] = useState<Journey>();
    const [journeyPoints, setJourneyPoints] = useState<JourneyPoint[]>([]);
    const senders = data?.start?.address.name.slice(FIRST_ELEMENT_INDEX, -" start".length);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        JourneyService.getJourney(params.journeyId!).then(res => {
            setJourney(res.data);
            setJourneyPoints(res.data!.journeyPoints);
            setStops([
                getStopByType(res.data, StopType.Start)!,
                data?.start,
                data?.finish,
                getStopByType(res.data, StopType.Finish)!
            ]);
        });
    }, []);

    const sendRejection = () => {
        NotificationsService.addNotification(
            {
                senderId: user?.id!,
                receiverId:params.sender?.id!,
                journeyId: journey?.id!,
                type: 12,
                jsonData:"{}",
            }
        ).then((res)=> {
            if(res.status == HTTP_STATUS_OK) {
                setDeclineModalVisible(true);
                NotificationsService.deleteNotification(params.notificationId);
            }
        });
    };

    const sendApprove = () => {
        NotificationsService.addNotification(
            {
                senderId: user?.id!,
                receiverId:params.sender?.id!,
                journeyId: journey?.id!,
                type:2,
                jsonData:"{}",
            }
        ).then((res)=> {
            if(res.status == HTTP_STATUS_OK) {
                setApproveModalVisible(true);
                NotificationsService.deleteNotification(params.notificationId);
            }
        });
    };
    const approveUser = () => {
        JourneyService.addUser(
            journey?.id!,
            params.sender?.id!
        ).then((res) => {
            if(res.status === HTTP_STATUS_OK && res.data) {
                sendApprove();
            }
            else{
                setErrorModalVisible(true);
            }
        });
    };

    const onStopPressHandler = (stop: Stop) => {
        navigation.navigate("Route View", {
            stops: stops,
            journeyPoints: journeyPoints,
            cameraCoordinates: getStopCoordinates(stop),
            notification: props.route.params.notification
        });
    };

    return (
        <>
            <View style={[JourneyNewApplicantViewStyle.background, { backgroundColor: DM("rgba(0, 0, 0, 0.5)") }]}>
                <View style={[JourneyNewApplicantViewStyle.window, { backgroundColor: DM("#FFFFFF") }]}>

                    <View style={[JourneyNewApplicantViewStyle.headerContainer]}>
                        <View style={JourneyNewApplicantViewStyle.avatarLogo}>
                            <AvatarLogoTitle userToDisplay={params.sender} />
                        </View>
                    </View>

                    <View>
                        <RequestComment comments={data?.comments?.trim()}/>
                    </View>
                    <WithLuggage hasLuggage={data?.hasLuggage}/>

                    <Text style={JourneyNewApplicantViewStyle.applicantStopsText}>{senders} stops in your ride</Text>
                    <View style={JourneyNewApplicantViewStyle.stopsBlock}>
                        <StopsBlock
                            stops={stops}
                            onStopPress={onStopPressHandler}
                            highlightedStops={[SECOND_ELEMENT_INDEX, THIRD_ELEMENT_INDEX]}
                        />
                    </View>

                    <NotificationButtonGroup>
                        <NotificationConfirmButton
                            confirmText={"ACCEPT"}
                            onConfirm={approveUser}
                        />

                        <NotificationDeclineButton
                            declineText={"Decline"}
                            onDecline={() => setConfirmationModalVisible(true)}
                        />
                    </NotificationButtonGroup>

                    <ConfirmModal
                        visible={approveModalVisible}
                        title="Request is approved"
                        subtitle="Your approvement was successfully sent to the applicant!"
                        confirmText="Ok"
                        hideCancelButton={true}
                        disableModal={() => {
                            setApproveModalVisible(false);
                            navigation.goBack();
                        }}
                        onConfirm={() => {
                            setApproveModalVisible(false);
                            navigation.goBack();
                        }}
                    />

                    <ConfirmModal
                        visible={declineModalVisible}
                        title="Request is declined"
                        subtitle="Your rejection was successfully sent to the applicant!"
                        confirmText="Ok"
                        hideCancelButton={true}
                        disableModal={() => {
                            setDeclineModalVisible(false);
                            navigation.goBack();
                        }}
                        onConfirm={() => {
                            setDeclineModalVisible(false);
                            navigation.goBack();
                        }}
                    />

                    <ConfirmModal
                        visible={confirmationModalVisible}

                        title="ARE YOU SURE?"
                        subtitle="Are you sure you want to decline passanger's request?"
                        confirmText="Yes, decline"
                        cancelText="No, keep it"
                        disableModal={() => setConfirmationModalVisible(false)}
                        onConfirm={() => {
                            setConfirmationModalVisible(false);
                            sendRejection();
                        }}
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
                </View>
            </View>
        </>);
};

export default JourneyNewApplicantView;