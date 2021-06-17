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
import { getStopByType } from "../../utils/JourneyHelperFunctions";
import StopType from "../../../models/stop/StopType";
import { FIRST_ELEMENT_INDEX, SECOND_ELEMENT_INDEX, THIRD_ELEMENT_INDEX } from "../../constants/GeneralConstants";
import JourneyNewApplicantStyle from "./JourneyNewApplicantStyle";

const JourneyNewApplicant = (props: NotificationProps) => {
    const [modalVisible, setModalVisible] = useState(props.visible ?? false);
    const data = JSON.parse(props.notificationData);
    const [stops, setStops] = useState<Stop[]>([]);
    const senders = data?.start?.address.name.slice(FIRST_ELEMENT_INDEX, " start".length);

    useEffect(() => {
        JourneyService.getJourney(props.journeyId!).then(res => {
            setStops([
                getStopByType(res.data, StopType.Start)!,
                data?.start,
                data?.finish,
                getStopByType(res.data, StopType.Finish)!
            ]);
        });
    }, []);

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
                <Text style={JourneyNewApplicantStyle.tipsText}>Tap on stop to view it on the map</Text>
                <StopsBlock
                    stops={stops}
                    onStopPress={stop => console.log(stop)}
                    highlightedStops={[SECOND_ELEMENT_INDEX, THIRD_ELEMENT_INDEX]}
                />

                <NotificationButtonGroup>
                    <NotificationConfirmButton onConfirm={() => setModalVisible(false)} />

                    <NotificationDeclineButton
                        declineText={"Decline"}
                        onDecline={() => setModalVisible(true)}
                    />
                </NotificationButtonGroup>
            </NotificationModalBase>

        </>);
};

export default JourneyNewApplicant;
