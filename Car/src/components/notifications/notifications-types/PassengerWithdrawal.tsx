import React, { useEffect, useRef, useState } from "react";
import MinimizedNotification from "../../minimized-notification/MinimizedNotification";
import NotificationRideDetails from "../notification-ride-details/NotificationRideDetails";
import NotificationButtonGroup from "../notification-buttons/NotificationButtonGroup";
import NotificationHeader from "../notification-header/NotificationHeader";
import NotificationModalBase from "../notification-modal-base/NotificationModalBase";
import NotificationProps from "../NotificationProps";
import NotificationConfirmButton from "../notification-buttons/NotificationConfirmButton";
import { onStopPressHandler } from "./StopNavigationFunction/StopNavigationFunction";
import Stop from "../../../../models/stop/Stop";
import JourneyPoint from "../../../../models/journey/JourneyPoint";
import Journey from "../../../../models/journey/Journey";
import JourneyUserDto from "../../../../models/journey-user/JourneyUserDto";
import JourneyService from "../../../../api-service/journey-service/JourneyService";
import axios from "axios";
import StopsBlock from "../../../activity/journey/journey-activity/journey-page/blocks/stops-block/StopsBlock";
import { Text, View } from "react-native";
import JourneyNewApplicantViewStyle from "../../journey-new-applicant/journey-new-applicant-view/JourneyNewApplicantViewStyle";
import { useTheme } from "../../theme/ThemeProvider";
import * as navigation from "../../../components/navigation/Navigation";
import { getHighlightedStops } from "../../../utils/JourneyHelperFunctions";

const PassengerWithdrawal = (props: NotificationProps) => {
    const { colors } = useTheme();
    const [modalVisible, setModalVisible] = useState(props.visible);
    const data = JSON.parse(props.notificationData);
    const stops: Stop[] = data.stopsRepresentation;
    const [journey, setJourney] = useState<Journey>();
    const [journeyUser, setJourneyUser] = useState<JourneyUserDto>();
    const [wasOpened, setWasOpened] = useState(false);
    const source = useRef(axios.CancelToken.source());

    const onStopPress = (stop:Stop, myStops:Stop[], journeyPoints: JourneyPoint[], notification: NotificationProps) =>
    {
        setModalVisible(false);
        onStopPressHandler(stop,myStops,journeyPoints, notification);
    };

    useEffect(() => {
        if(!wasOpened && modalVisible)
        {
            setWasOpened(true);
            JourneyService.getJourney(props.journeyId, false, { cancelToken: source.current.token })
                .then(res => {
                    setJourney(res.data);
                    setJourneyUser(data.journeyUser);
                });
        }
    }, [modalVisible]);

    return (
        <>
            <MinimizedNotification
                notificationId={props.notificationId}
                user={props.sender}
                notificationTitle={"Has withdrawn from the ride!"}
                read={props.read}
                date={props.date}
                openModal={ () => {
                    navigation.navigate("Withdrawal", {
                        notification: props
                    });
                }}
            />

            <NotificationModalBase isVisible={modalVisible!} styles={[]}>
                <NotificationHeader
                    title="WITHDRAWAL"
                    message="The passenger has withdrawn from your ride!"
                    sender={props.sender}
                    disableModal={() => setModalVisible(false)}
                />

                <NotificationRideDetails
                    journeyId={props.journeyId}
                    userId={props.sender?.id!}
                    journeyUser={journeyUser!}
                    journey = {journey!}
                />

                <Text style={{ ...JourneyNewApplicantViewStyle.applicantStopsText, color: colors.primary }}>
                    {props.sender!.name} {props.sender!.surname}`s stops in your ride
                </Text>
                <View>
                    <StopsBlock
                        stops={stops ?? []}
                        onStopPress={()=> onStopPress}
                        highlightedStops={getHighlightedStops(stops, props.sender!.id)}
                    />
                </View>
                <NotificationButtonGroup>
                    <NotificationConfirmButton onConfirm={() => setModalVisible(false)} />
                </NotificationButtonGroup>
            </NotificationModalBase>
        </>
    );
};

export default PassengerWithdrawal;
