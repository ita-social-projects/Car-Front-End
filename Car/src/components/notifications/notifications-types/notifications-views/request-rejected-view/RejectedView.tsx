import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../../../auth/AuthContext";
import Stop from "../../../../../../models/stop/Stop";
import NotificationHeader from "../../../notification-header/NotificationHeader";
import NotificationRideDetails from "../../../notification-ride-details/NotificationRideDetails";
import StopsBlock from "../../../../../activity/journey/journey-activity/journey-page/blocks/stops-block/StopsBlock";
import JourneyService from "../../../../../../api-service/journey-service/JourneyService";
import Journey from "../../../../../../models/journey/Journey";
import { getStopCoordinates } from "../../../../../utils/JourneyHelperFunctions";
import * as navigation from "../../../../../components/navigation/Navigation";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import PassengerWithdrawalViewStyle from "../withdrawn-view/PassengerWithdrawalViewStyle";
import {
    FIRST_ELEMENT_INDEX,
    LAST_INDEX_CORRECTION,
} from "../../../../../constants/GeneralConstants";
import JourneyUserDto from "../../../../../../models/journey-user/JourneyUserDto";
import axios from "axios";
import JourneyNewApplicantViewStyle from "../../../../journey-new-applicant/journey-new-applicant-view/JourneyNewApplicantViewStyle";
import { useTheme } from "../../../../theme/ThemeProvider";
import NotificationHeaderStyle from "../../../notification-header/NotificationHeaderStyle";
import NotificationButtonGroup from "../../../notification-buttons/NotificationButtonGroup";
import NotificationConfirmButton from "../../../notification-buttons/NotificationConfirmButton";

interface InvitationAcceptedViewProps {
    route: {
        params: {
            notification:any
        }
    }
}

const RejectedView = (props: InvitationAcceptedViewProps) => {
    const { colors } = useTheme();
    const user = useContext(AuthContext).user;
    const [stops, setStops] = useState<Stop[]>([]);
    const [journey, setJourney] = useState<Journey>();
    const [journeyUser, setJourneyUser] = useState<JourneyUserDto>();
    const source = useRef(axios.CancelToken.source());
    let name = props.route.params.notification.notification.sender!.name;
    let surname = props.route.params.notification.notification.sender!.surname;

    useEffect(() => {
        JourneyService.getJourneyWithJourneyUser(props.route.params.notification.notification.journeyId,
            props.route.params.notification.journeyUserId,
            false,
            { cancelToken: source.current.token })
            .then(res => {
                setJourney(res.data.item1);
                setJourneyUser(res.data.item2);
                setStops(res.data.item1!.stops);
            });

    }, []);

    const onStopPressHandler = (stop: Stop) => {
        navigation.navigate("Stop View", {
            stops: stops,
            journeyPoints: props.route.params.notification.journeyPoints,
            cameraCoordinates: getStopCoordinates(stop),
            notification: props
        });
    };

    return (
        <>
            <ScrollView style = {{ flexGrow: 1 }}>

                <View style={[PassengerWithdrawalViewStyle.window, { backgroundColor: colors.white }]}>

                    <NotificationHeader
                        sender={props.route.params.notification.notification.sender}
                    />

                    {props.route.params.notification.notificationHeaderMessage !== "" &&
                        <View style={[NotificationHeaderStyle.messageContainer, {
                            borderTopColor: colors.disableBack,
                            borderBottomColor: colors.disableBack
                        }]}>
                            <Text style={[NotificationHeaderStyle.message, { color: colors.primary }]}>
                                {props.route.params.notification.notificationHeaderMessage}
                            </Text>
                        </View>
                    }

                    <NotificationRideDetails
                        journeyId={props.route.params.notification.notification.journeyId}
                        userId={user?.id!}
                        IsAvailableSeatsVisible={props.route.params.notification.IsAvailableSeatsVisible}
                        IsBaggageVisible={props.route.params.notification.IsBaggageVisible}
                        IsDepartureTimeVisible={props.route.params.notification.routeIsDepartureTimeVisible}
                        IsDetailsTitleVisible={props.route.params.notification.IsDetailsTitleVisible}
                        IsFeeVisible={props.route.params.notification.IsFeeVisible}
                        journey={journey!}
                        journeyUser={journeyUser!}
                    />
                    <Text style={{ ...JourneyNewApplicantViewStyle.applicantStopsText, color: colors.primary }}>
                        {name} {surname}`s stops in your ride
                    </Text>

                    <View>
                        <StopsBlock
                            stops={stops ? stops : []}
                            onStopPress={onStopPressHandler}
                            highlightedStops={[FIRST_ELEMENT_INDEX, stops.length - LAST_INDEX_CORRECTION]}
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

export default RejectedView;
