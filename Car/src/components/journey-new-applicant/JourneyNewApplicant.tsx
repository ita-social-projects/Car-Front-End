import React, { useEffect, useState, useContext } from "react";
import { Text } from "react-native";
import MinimizedNotification from "../minimized-notification/MinimizedNotification";
import NotificationProps from "../notifications/NotificationProps";
import NotificationModalBase from "../notifications/notification-modal-base/NotificationModalBase";
import NotificationHeader from "../notifications/notification-header/NotificationHeader";
import NotificationButtonGroup from "../notifications/notification-buttons/NotificationButtonGroup";
import NotificationConfirmButton from "../notifications/notification-buttons/NotificationConfirmButton";
import NotificationDeclineButton from "../notifications/notification-buttons/NotificationDeclineButton";
import RequestComment from "./request-comments/RequestComment";
import WithLuggage from "./with-luggage/WithLuggage";
import Stop from "../../../models/stop/Stop";
import JourneyService from "../../../api-service/journey-service/JourneyService";
import { getStopByType, getStopCoordinates } from "../../utils/JourneyHelperFunctions";
import StopType from "../../../models/stop/StopType";
import { FIRST_ELEMENT_INDEX, SECOND_ELEMENT_INDEX, THIRD_ELEMENT_INDEX } from "../../constants/GeneralConstants";
import JourneyNewApplicantStyle from "./JourneyNewApplicantStyle";
import JourneyPoint from "../../../models/journey/JourneyPoint";
import * as navigation from "../../components/navigation/Navigation";
import StopsBlock from "../../activity/journey/journey-activity/journey-page/blocks/stops-block/StopsBlock";
import NotificationsService from "../../../api-service/notifications-service/NotificationsService";
import AuthContext from "../../components/auth/AuthContext";
import { HTTP_STATUS_OK } from "../../constants/Constants";
import Journey from "../../../models/journey/Journey";
import ConfirmModal from "../confirm-modal/ConfirmModal";

const JourneyNewApplicant = (props: NotificationProps) => {
    const [modalVisible, setModalVisible] = useState(props.visible ?? false);
    const [approveModalVisible,setApproveModalVisible] = useState(false);
    const [declineModalVisible,setDeclineModalVisible] = useState(false);
    const [confirmationModalVisible,setConfirmationModalVisible] = useState(false);
    const data = JSON.parse(props.notificationData);
    const [stops, setStops] = useState<Stop[]>([]);
    const [journey, setJourney] = useState<Journey>();
    const [journeyPoints, setJourneyPoints] = useState<JourneyPoint[]>([]);
    const senders = data?.start?.address.name.slice(FIRST_ELEMENT_INDEX, -" start".length);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        JourneyService.getJourney(props.journeyId!).then(res => {
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
                receiverId:props.sender?.id!,
                journeyId: journey?.id!,
                type: 12,
                jsonData:"{}",
            }
        ).then((res)=> {
            if(res.status == HTTP_STATUS_OK) {
                setDeclineModalVisible(true);
                NotificationsService.deleteNotification(props.notificationId);
            }
        });
    };

    const sendApprove = () => {
        NotificationsService.addNotification(
            {
                senderId: user?.id!,
                receiverId:props.sender?.id!,
                journeyId: journey?.id!,
                type:2,
                jsonData:"{}",
            }
        ).then((res)=> {
            if(res.status == HTTP_STATUS_OK) {
                setApproveModalVisible(true);
                NotificationsService.deleteNotification(props.notificationId);
            }
        });
    };

    const onStopPressHandler = (stop: Stop) => {
        setModalVisible(false);
        navigation.navigate("Route View", {
            stops: stops,
            journeyPoints: journeyPoints,
            cameraCoordinates: getStopCoordinates(stop)
        });
    };

    return (
        <>
            <MinimizedNotification
                notificationId={props.notificationId}
                user={props.sender}
                notificationTitle={"New applicant"}
                read={props.read}
                date={props.date}
                openModal={() => setModalVisible(true)}
            />

            <NotificationModalBase isVisible={modalVisible} >
                <NotificationHeader
                    title="New Applicant"
                    withoutMessage={true}
                    sender={props.sender}
                    disableModal={() => setModalVisible(false)}
                />

                <RequestComment comments={data?.comments?.trim()}/>

                <WithLuggage hasLuggage={data?.hasLuggage}/>

                <Text style={JourneyNewApplicantStyle.applicantStopsText}>{senders} stops in your ride</Text>
                <StopsBlock
                    stops={stops}
                    onStopPress={onStopPressHandler}
                    highlightedStops={[SECOND_ELEMENT_INDEX, THIRD_ELEMENT_INDEX]}
                />

                <NotificationButtonGroup>
                    <NotificationConfirmButton
                        confirmText={"ACCEPT"}
                        onConfirm={sendApprove}
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
                        setModalVisible(false);
                        props.onDelete(props.notificationId);
                    }}
                    onConfirm={() => {
                        setApproveModalVisible(false);
                        setModalVisible(false);
                        props.onDelete(props.notificationId);
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
                        setModalVisible(false);
                        props.onDelete(props.notificationId);
                    }}
                    onConfirm={() => {
                        setDeclineModalVisible(false);
                        setModalVisible(false);
                        props.onDelete(props.notificationId);
                    }}
                />

                <ConfirmModal
                    visible={confirmationModalVisible}

                    title="ARE YOU SURE?"
                    subtitle="Are you sure you want to decline passanger's request?"
                    confirmText="Yes, withdraw"
                    cancelText="No, keep it"
                    disableModal={() => setConfirmationModalVisible(false)}
                    onConfirm={() => {
                        setConfirmationModalVisible(false);
                        sendRejection();
                    }}
                />
            </NotificationModalBase>

        </>);
};

export default JourneyNewApplicant;
