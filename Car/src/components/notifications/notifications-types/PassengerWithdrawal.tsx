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
import StopType from "../../../../models/stop/StopType";
import { getStopByType } from "../../../utils/JourneyHelperFunctions";
import { FIRST_ELEMENT_INDEX, SECOND_ELEMENT_INDEX, THIRD_ELEMENT_INDEX } from "../../../constants/GeneralConstants";
import StopsBlock from "../../../activity/journey/journey-activity/journey-page/blocks/stops-block/StopsBlock";
import { Text, View } from "react-native";
import JourneyNewApplicantViewStyle from "../../journey-new-applicant/journey-new-applicant-view/JourneyNewApplicantViewStyle";
import { useTheme } from "../../theme/ThemeProvider";

const PassengerWithdrawal = (props: NotificationProps) => {
    const { DM } = useTheme();
    const [modalVisible, setModalVisible] = useState(props.visible);
    const data = JSON.parse(props.notificationData);
    const [stops, setStops] = useState<Stop[]>();
    const [journey, setJourney] = useState<Journey>();
    const [journeyUser, setJourneyUser] = useState<JourneyUserDto>();
    const source = useRef(axios.CancelToken.source());

    const onStopPress = (stop:Stop, stops:Stop[], journeyPoints: JourneyPoint[], notification: NotificationProps) =>
    {
        setModalVisible(false);
        onStopPressHandler(stop,stops,journeyPoints, notification);
    };

    useEffect(() => {
        JourneyService.getJourney(props.journeyId, false, { cancelToken: source.current.token })
            .then(res => {
                setJourney(res.data);
                setJourneyUser(data.journeyUser);

                setStops([
                    getStopByType(res.data, StopType.Start)!,
                    res.data!.stops.filter((stop:Stop) =>
                        stop!.index === FIRST_ELEMENT_INDEX && stop!.userId === props.sender?.id)[FIRST_ELEMENT_INDEX],
                    res.data!.stops.filter((stop:Stop) =>
                        stop!.index === SECOND_ELEMENT_INDEX && stop!.userId === props.sender?.id)[FIRST_ELEMENT_INDEX],
                    getStopByType(res.data, StopType.Finish)!
                ]);
            });

        return () => source.current.cancel();
    }, []);

    return (
        <>
            <MinimizedNotification
                notificationId={props.notificationId}
                user={props.sender}
                notificationTitle={"The passenger has withdrawn your ride!"}
                read={props.read}
                date={props.date}
                openModal={() => setModalVisible(true)}
            />

            <NotificationModalBase isVisible={modalVisible!} styles={[]}>
                <NotificationHeader
                    title="WITHDRAWAL"
                    message="The passenger has withdrawn your ride!"
                    sender={props.sender}
                    disableModal={() => setModalVisible(false)}
                />

                <NotificationRideDetails
                    journeyId={props.journeyId}
                    userId={props.sender?.id!}
                    journeyUser={journeyUser!}
                    journey = {journey!}
                />

                <Text style={{ ...JourneyNewApplicantViewStyle.applicantStopsText, color: DM("black") }}>
                    {props.sender!.name} {props.sender!.surname}`s stops in your ride
                </Text>
                <View>
                    <StopsBlock
                        stops={stops? stops: []}
                        onStopPress={()=> onStopPress}
                        highlightedStops={[SECOND_ELEMENT_INDEX, THIRD_ELEMENT_INDEX]}
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
