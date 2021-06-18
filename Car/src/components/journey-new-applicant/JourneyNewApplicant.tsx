import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import MinimizedNotification from "../minimized-notification/MinimizedNotification";
import NotificationProps from "../notifications/NotificationProps";
import NotificationModalBase from "../notifications/notification-modal-base/NotificationModalBase";
import NotificationHeader from "../notifications/notification-header/NotificationHeader";
import NotificationButtonGroup from "../notifications/notification-buttons/NotificationButtonGroup";
import NotificationConfirmButton from "../notifications/notification-buttons/NotificationConfirmButton";
import NotificationDeclineButton from "../notifications/notification-buttons/NotificationDeclineButton";
import RequestComment from "./RequestComments/RequestComment";
import WithLuggage from "./WithLuggage/WithLuggage";
import StopsBlock from "../../activity/journey/journey-activity/journey-page/StopsBlock/StopsBlock";
import Stop from "../../../models/stop/Stop";
import JourneyService from "../../../api-service/journey-service/JourneyService";
import { getStopByType, getStopCoordinates } from "../../utils/JourneyHelperFunctions";
import StopType from "../../../models/stop/StopType";
import { FIRST_ELEMENT_INDEX, SECOND_ELEMENT_INDEX, THIRD_ELEMENT_INDEX } from "../../constants/GeneralConstants";
import JourneyNewApplicantStyle from "./JourneyNewApplicantStyle";
import JourneyPoint from "../../../models/journey/JourneyPoint";
import * as navigation from "../../components/navigation/Navigation";

const JourneyNewApplicant = (props: NotificationProps) => {
    const [modalVisible, setModalVisible] = useState(props.visible ?? false);
    const data = JSON.parse(props.notificationData);
    const [stops, setStops] = useState<Stop[]>([]);
    const [journeyPoints, setJourneyPoints] = useState<JourneyPoint[]>([]);
    const senders = data?.start?.address.name.slice(FIRST_ELEMENT_INDEX, -" start".length);

    useEffect(() => {
        JourneyService.getJourney(props.journeyId!).then(res => {
            setJourneyPoints(res.data!.journeyPoints);
            setStops([
                getStopByType(res.data, StopType.Start)!,
                data?.start,
                data?.finish,
                getStopByType(res.data, StopType.Finish)!
            ]);
        });
    }, []);

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
                        onConfirm={() => setModalVisible(false)}
                    />

                    <NotificationDeclineButton
                        declineText={"Decline"}
                        onDecline={() => setModalVisible(false)}
                    />
                </NotificationButtonGroup>
            </NotificationModalBase>

        </>);
};

export default JourneyNewApplicant;
