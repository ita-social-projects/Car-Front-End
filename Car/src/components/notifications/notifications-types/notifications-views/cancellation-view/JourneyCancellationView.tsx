import React, { useContext, useEffect, useRef, useState } from "react";
import NotificationProps from "../../../NotificationProps";
import AuthContext from "../../../../auth/AuthContext";
import Stop from "../../../../../../models/stop/Stop";
import JourneyPoint from "../../../../../../models/journey/JourneyPoint";
import NotificationHeader from "../../../notification-header/NotificationHeader";
import NotificationRideDetails from "../../../notification-ride-details/NotificationRideDetails";
import { Text, View, } from "react-native";
import StopsBlock from "../../../../../activity/journey/journey-activity/journey-page/blocks/stops-block/StopsBlock";
import { FIRST_ELEMENT_INDEX, SECOND_ELEMENT_INDEX, THIRD_ELEMENT_INDEX } from "../../../../../constants/GeneralConstants";
import JourneyService from "../../../../../../api-service/journey-service/JourneyService";
import axios from "axios";
import Journey from "../../../../../../models/journey/Journey";
import JourneyUserDto from "../../../../../../models/journey-user/JourneyUserDto";
import { getStopByType, getStopCoordinates } from "../../../../../utils/JourneyHelperFunctions";
import StopType from "../../../../../../models/stop/StopType";
import { useTheme } from "../../../../theme/ThemeProvider";
import { ScrollView } from "react-native-gesture-handler";
import * as navigation from "../../../../../components/navigation/Navigation";
import PassengerWithdrawalViewStyle from "../withdrawn-view/PassengerWithdrawalViewStyle";
import JourneyNewApplicantViewStyle from "../../../../journey-new-applicant/journey-new-applicant-view/JourneyNewApplicantViewStyle";
import NotificationHeaderStyle from "../../../notification-header/NotificationHeaderStyle";
import NotificationButtonGroup from "../../../notification-buttons/NotificationButtonGroup";
import NotificationConfirmButton from "../../../notification-buttons/NotificationConfirmButton";

interface JourneyCancellationViewProps {
    route: {
        params: {
            notification: NotificationProps
        }
    }
}

const JourneyCancellationView = (props: JourneyCancellationViewProps) => {
    const { colors } = useTheme();
    const user = useContext(AuthContext).user;
    const source = useRef(axios.CancelToken.source());
    const [stops, setStops] = useState<Stop[]>();
    const [journey, setJourney] = useState<Journey>();
    const [journeyUser, setJourneyUser] = useState<JourneyUserDto>();
    const [journeyPoints, setJourneyPoints] = useState<JourneyPoint[]>();

    useEffect(() => {
        JourneyService.getJourneyWithJourneyUser(props.route.params.notification.journeyId,
            user?.id!,
            true,
            { cancelToken: source.current.token })
            .then(res => {
                setJourney(res.data.item1);
                setJourneyUser(res.data.item2);
                setJourneyPoints(res.data!.item1?.journeyPoints);
                setStops([
                    getStopByType(res.data.item1, StopType.Start)!,
                    res.data.item1!.stops.filter((stop) =>
                        stop!.userId == user?.id && stop!.index === FIRST_ELEMENT_INDEX)[FIRST_ELEMENT_INDEX],
                    res.data.item1!.stops.filter((stop) =>
                        stop!.userId == user?.id && stop!.index === SECOND_ELEMENT_INDEX)[FIRST_ELEMENT_INDEX],
                    getStopByType(res.data.item1, StopType.Finish)!
                ]);
            });
    }, []);

    const onStopPressHandler = (stop: Stop) => {
        navigation.navigate("Route View", {
            stops: stops,
            journeyPoints: journeyPoints,
            cameraCoordinates: getStopCoordinates(stop),
            notification: props.route.params.notification,
            currentStop: Number(stops?.findIndex((stp) => stp?.address?.name == stop?.address?.name)),
        });
    };

    return (
        <>
            <ScrollView style={{ flexGrow: 1 }}>

                <View style={[
                    PassengerWithdrawalViewStyle.window,
                    { color: colors.primary }
                ]}
                >
                    <NotificationHeader
                        sender={props.route.params.notification.sender}
                    />

                    <View style={[NotificationHeaderStyle.messageContainer, {
                        borderTopColor: colors.disableBack,
                        borderBottomColor: colors.disableBack
                    }]}>
                        <Text style={[NotificationHeaderStyle.message, { color: colors.primary }]}>
                            The driver has canceled {"\n"}your ride!
                        </Text>
                    </View>

                    <NotificationRideDetails
                        journeyId={props.route.params.notification.journeyId}
                        userId={user?.id!}
                        IsBaggageVisible={true}
                        IsDetailsTitleVisible={true}
                        IsFeeVisible={true}
                        IsAvailableSeatsVisible={true}
                        withSeats
                        journey={journey!}
                        journeyUser={journeyUser!}
                    />
                    <Text style={{ ...JourneyNewApplicantViewStyle.applicantStopsText, color: colors.primary }}>
                        {props.route.params.notification.sender?.name}
                        {props.route.params.notification.sender?.surname}`s stops
                    </Text>

                    <View>
                        <StopsBlock
                            stops={stops ? stops : []}
                            onStopPress={onStopPressHandler}
                            highlightedStops={[SECOND_ELEMENT_INDEX, THIRD_ELEMENT_INDEX]}
                        />
                    </View>

                    <NotificationButtonGroup>
                        <NotificationConfirmButton
                            confirmText={"Ok"}
                            onConfirm={() => {
                                navigation.goBack();
                            }} />
                    </NotificationButtonGroup>

                </View>

            </ScrollView>
        </>
    );
};

export default JourneyCancellationView;
