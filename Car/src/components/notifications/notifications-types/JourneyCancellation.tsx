import React, { useContext, useEffect, useRef, useState } from "react";
import NotificationProps from "../NotificationProps";
import AuthContext from "../../auth/AuthContext";
import MinimizedNotification from "../../minimized-notification/MinimizedNotification";
import Stop from "../../../../models/stop/Stop";
import JourneyPoint from "../../../../models/journey/JourneyPoint";
import NotificationButtonGroup from "../notification-buttons/NotificationButtonGroup";
import NotificationConfirmButton from "../notification-buttons/NotificationConfirmButton";
import NotificationModalBase from "../notification-modal-base/NotificationModalBase";
import NotificationHeader from "../notification-header/NotificationHeader";
import NotificationRideDetails from "../notification-ride-details/NotificationRideDetails";
import { Text, View } from "react-native";
import JourneyNewApplicantViewStyle from "../../journey-new-applicant/journey-new-applicant-view/JourneyNewApplicantViewStyle";
import StopsBlock from "../../../activity/journey/journey-activity/journey-page/blocks/stops-block/StopsBlock";
import { FIRST_ELEMENT_INDEX, SECOND_ELEMENT_INDEX, THIRD_ELEMENT_INDEX } from "../../../constants/GeneralConstants";
import { onStopPressHandler } from "./StopNavigationFunction/StopNavigationFunction";
import JourneyService from "../../../../api-service/journey-service/JourneyService";
import axios from "axios";
import Journey from "../../../../models/journey/Journey";
import JourneyUserDto from "../../../../models/journey-user/JourneyUserDto";
import { getStopByType } from "../../../utils/JourneyHelperFunctions";
import StopType from "../../../../models/stop/StopType";
import { colors } from "react-native-elements";

const JourneyCancellation = (props: NotificationProps) => {
    const user = useContext(AuthContext).user;
    const [modalVisible, setModalVisible] = useState(props.visible);
    const [wasOpened,setWasOpened] = useState(false);
    const source = useRef(axios.CancelToken.source());
    const [stops, setStops] = useState<Stop[]>();
    const [journey, setJourney] = useState<Journey>();
    const [journeyUser, setJourneyUser] = useState<JourneyUserDto>();

    useEffect(() => {
        if(!wasOpened&&modalVisible)
        {
            setWasOpened(true);
            JourneyService.getJourneyWithJourneyUser(props.journeyId,
                user?.id!,
                true,
                { cancelToken: source.current.token })
                .then(res => {
                    setJourney(res.data.item1);
                    setJourneyUser(res.data.item2);
                    setStops([
                        getStopByType(res.data.item1, StopType.Start)!,
                        res.data.item1!.stops.filter((stop) =>
                            stop!.userId == user?.id && stop!.index === FIRST_ELEMENT_INDEX)[FIRST_ELEMENT_INDEX],
                        res.data.item1!.stops.filter((stop) =>
                            stop!.userId == user?.id && stop!.index === SECOND_ELEMENT_INDEX)[FIRST_ELEMENT_INDEX],
                        getStopByType(res.data.item1, StopType.Finish)!
                    ]);
                });
        }
    }, [modalVisible]);

    const onStopPress = (stop:Stop, stops:Stop[], journeyPoints: JourneyPoint[], notification: NotificationProps) =>
    {
        setModalVisible(false);
        onStopPressHandler(stop,stops,journeyPoints, notification);
    };

    return (
        <>
            <MinimizedNotification
                notificationId={props.notificationId}
                user={props.sender}
                notificationTitle={"Ride is canceled"}
                read={props.read}
                date={props.date}
                openModal={() => setModalVisible(true)}
            />
            <NotificationModalBase isVisible={modalVisible!}>
                <NotificationHeader
                    title="RIDE IS CANCELED"
                    message={"The driver has canceled \nyour ride!"}
                    sender={props.sender}
                    disableModal={() => setModalVisible(false)}
                />

                <NotificationRideDetails
                    journeyId={props.journeyId}
                    userId={user?.id!}
                    IsBaggageVisible={true}
                    IsDetailsTitleVisible={true}
                    IsFeeVisible={true}
                    IsAvailableSeatsVisible = {true}
                    withSeats
                    journey = {journey!}
                    journeyUser = {journeyUser!}
                />

                <Text style={{ ...JourneyNewApplicantViewStyle.applicantStopsText, color: colors.black }}>
                    {props.sender!.name} {props.sender!.surname}`s stops in your ride
                </Text>
                <View>
                    <StopsBlock
                        stops={stops ? stops : []}
                        onStopPress={() => onStopPress}
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

export default JourneyCancellation;
