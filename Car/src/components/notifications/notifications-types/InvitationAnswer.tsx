import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import JourneyService from "../../../../api-service/journey-service/JourneyService";
import JourneyUserDto from "../../../../models/journey-user/JourneyUserDto";
import Journey from "../../../../models/journey/Journey";
import JourneyPoint from "../../../../models/journey/JourneyPoint";
import Stop from "../../../../models/stop/Stop";
import StopsBlock from "../../../activity/journey/journey-activity/journey-page/blocks/stops-block/StopsBlock";
import AuthContext from "../../auth/AuthContext";
import JourneyNewApplicantViewStyle from "../../journey-new-applicant/journey-new-applicant-view/JourneyNewApplicantViewStyle";
import MinimizedNotification from "../../minimized-notification/MinimizedNotification";
import { useTheme } from "../../theme/ThemeProvider";
import NotificationButtonGroup from "../notification-buttons/NotificationButtonGroup";
import NotificationConfirmButton from "../notification-buttons/NotificationConfirmButton";
import NotificationHeader from "../notification-header/NotificationHeader";
import NotificationModalBase from "../notification-modal-base/NotificationModalBase";
import NotificationRideDetails from "../notification-ride-details/NotificationRideDetails";
import NotificationProps from "../NotificationProps";
import ApplicationAnswerProps from "./ApplicationAnswer/ApplicationAnswerProp";
import { onStopPressHandler } from "./StopNavigationFunction/StopNavigationFunction";

const InvitationAnswer = (props: ApplicationAnswerProps) => {
    const { colors } = useTheme();
    const [notificationModalVisible, setNotificationModalVisible] = useState(props.notification.visible);

    const user = useContext(AuthContext).user;
    const [stops, setStops] = useState<Stop[]>();
    const [journey, setJourney] = useState<Journey>();
    const [journeyUser, setJourneyUser] = useState<JourneyUserDto>();
    const source = useRef(axios.CancelToken.source());
    const [wasOpened,setWasOpened] = useState(false);

    useEffect(() => {
        if(!wasOpened&&notificationModalVisible)
        {
            setWasOpened(true);
            JourneyService.getJourneyWithJourneyUser(props.notification.journeyId,
                props.journeyUserId,
                false,
                { cancelToken: source.current.token })
                .then(res => {
                    setJourney(res.data.item1);
                    setJourneyUser(res.data.item2);
                    let stops = res.data.item1?.stops;

                    stops = stops?.filter((stop) => stop?.userId === res.data.item1?.organizer?.id);
                    stops?.sort((a,b) => a?.index!-b?.index!);

                    setStops(stops);
                });
        }
    }, [notificationModalVisible]);

    const onStopPress = (stop:Stop, journeyPoints: JourneyPoint[], notification: NotificationProps) =>
    {
        setNotificationModalVisible(false);
        onStopPressHandler(stop,stops ?? [],journeyPoints, notification);
    };

    return (
        <>
            <MinimizedNotification
                notificationId={props.notification.notificationId}
                user={props.notification.sender}
                notificationTitle={props.notificationTittle}
                read={props.notification.read}
                date={props.notification.date}
                openModal={() => setNotificationModalVisible(true)}
            />

            <NotificationModalBase isVisible={notificationModalVisible!} styles={[{}]}>
                <NotificationHeader
                    title={props.notificationHeaderTittle}
                    message={props.notificationHeaderMessage}
                    sender={props.notification.sender}
                    disableModal={() => setNotificationModalVisible(false)}
                />

                <NotificationRideDetails
                    journeyId={props.notification.journeyId}
                    userId={user?.id!}
                    IsAvailableSeatsVisible={props.IsAvailableSeatsVisible}
                    IsBaggageVisible={props.IsBaggageVisible}
                    IsDepartureTimeVisible={props.IsDepartureTimeVisible}
                    IsDetailsTitleVisible={props.IsDetailsTitleVisible}
                    IsFeeVisible={props.IsFeeVisible}
                    journey = {journey!}
                    journeyUser = {journeyUser!}
                />
                <Text style={{ ...JourneyNewApplicantViewStyle.applicantStopsText, color: colors.primary }}>
                    {props.notification.sender!.name} {props.notification.sender!.surname}`s stops in your ride
                </Text>
                <View>
                    <StopsBlock
                        stops={stops ? stops : []}
                        onStopPress={() => onStopPress}
                        highlightedStops={[...Array(stops?.length).keys()]}
                    />
                </View>

                <NotificationButtonGroup>
                    <NotificationConfirmButton onConfirm={() => setNotificationModalVisible(false)} />
                </NotificationButtonGroup>
            </NotificationModalBase>
        </>
    );
};

export default InvitationAnswer;