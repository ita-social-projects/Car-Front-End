import React, { useContext, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import JourneyCardStyle from "./JourneyCardStyle";
import * as navigation from "../navigation/Navigation";
import AvatarLogo from "../avatar-logo/AvatarLogo";
import AuthContext from "../auth/AuthContext";
import { FIRST_ELEMENT_INDEX, LAST_INDEX_CORRECTION } from "../../constants/GeneralConstants";
import { useTheme } from "../theme/ThemeProvider";
import Journey from "../../../models/journey/Journey";
import { MAX_ADDRESS_NAME_LENGTH } from "../../constants/AddressConstants";
import { trimTheStringIfTooLong } from "../../utils/GeneralHelperFunctions";
import { JOURNEY_CARD_WITH_FEE_HEIGHT, MAX_USER_FULL_NAME_LENGTH } from "../../constants/JourneyConstants";
import Stop from "../../../models/stop/Stop";
import { getTimeToShow } from "../../utils/JourneyHelperFunctions";
import StopType from "../../../models/stop/StopType";

const JourneyCard =
    (props: {
        journey?: Journey,
        displayFee?: boolean,
        applicantStops?: Stop[],
        passangersCount?: number,
        isPast: boolean,
        isCanceled: boolean
            }) => {
        const { colors } = useTheme();
        const journey = props.journey;
        const { user } = useContext(AuthContext);
        const [isDriver, setIsDriver] = useState(false);
        const [isPassenger, setIsPassenger] = useState(false);

        useEffect (() => {
            setIsPassenger(journey?.participants.some(
                passenger => passenger?.id === user?.id) ?? false);
            setIsDriver(journey?.organizer?.id == user?.id);
        }, []);

        const navigateJourney = () =>
            navigation.navigate("Journey Page", {
                journeyId: journey?.id,
                isDriver,
                isPassenger,
                applicantStops: props.applicantStops,
                passangersCount: props.passangersCount,
                isPast: props.isPast,
                isCanceled: props.isCanceled
            });

        const fullName = `${journey?.organizer?.name} ${journey?.organizer?.surname}`;

        const GetFirstLocation = () =>
        {
            let locationName;

            if(journey?.stops[FIRST_ELEMENT_INDEX]?.address?.name)
            {
                locationName = journey?.stops.
                    filter(item => item?.userId === journey.organizer?.id
                    && item?.type === StopType.Start)[FIRST_ELEMENT_INDEX]?.
                    address?.name;
            }
            locationName = locationName ?? "Location A";

            return locationName;
        };

        const GetSecondLocation = () =>
        {
            let locationName;

            if(journey?.stops[journey?.stops?.length - LAST_INDEX_CORRECTION]?.address?.name)
            {
                locationName = journey?.stops.
                    filter(item => item?.userId === journey.organizer?.id
                    && item?.type == StopType.Finish)
                    [FIRST_ELEMENT_INDEX]?.
                    address?.name;

            }
            locationName = locationName ?? "Location B";

            return locationName;
        };

        return (
            <View>
                <TouchableOpacity
                    onPress={navigateJourney}
                >
                    <View style={[JourneyCardStyle.component,
                        { borderColor: colors.primary,
                            height: JOURNEY_CARD_WITH_FEE_HEIGHT }]}>
                        <View style={JourneyCardStyle.driverInfoBlock}>
                            <View style={[JourneyCardStyle.imageBlock, props.displayFee && { paddingBottom: 5.75 }]}>
                                <AvatarLogo user={journey?.organizer} size={38.5} />
                            </View>
                            <View style={JourneyCardStyle.driverTextBlock}>
                                <View style={JourneyCardStyle.driverNameBlock}>
                                    <View>
                                        <Text style={[JourneyCardStyle.driverNameText, { color: colors.primary }]} >
                                            {trimTheStringIfTooLong(fullName, MAX_USER_FULL_NAME_LENGTH)}'s ride
                                        </Text>
                                    </View>
                                    <View style={JourneyCardStyle.moreOptionsBlock}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                navigation.navigate(
                                                    "Applicant Page",
                                                    {
                                                        userId:
                                                        journey?.organizer?.id
                                                    }
                                                );
                                            }}
                                        >
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={JourneyCardStyle.driverPositionBlock}>
                                    <Text style={[JourneyCardStyle.driverPositionText,
                                        { color: colors.secondaryDark }]} >
                                        {journey?.organizer?.position}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={JourneyCardStyle.journeyDetailBlock}>
                            <Text style={[JourneyCardStyle.timeText, { color: colors.accentBlue }]}>
                                {getTimeToShow(journey)}
                            </Text>
                            <View>
                                <Text style={{ ...JourneyCardStyle.feeText, color: colors.primary }}>
                                    {journey?.isFree ? "Free" : "Paid"}
                                </Text>
                            </View>
                        </View>
                        <View style={JourneyCardStyle.stopsBlock}>
                            <View style={JourneyCardStyle.firstStopBlock}>
                                <View style={[JourneyCardStyle.stopCircleIcon,
                                    {
                                        backgroundColor: colors.secondaryLight,
                                        borderColor: colors.white
                                    }]} />
                                <Text style={[JourneyCardStyle.stopsText, { color: colors.hover }]}>
                                    {trimTheStringIfTooLong(
                                        GetFirstLocation(),
                                        MAX_ADDRESS_NAME_LENGTH)}
                                </Text>
                            </View>
                            <View style={[JourneyCardStyle.stopStickIcon,
                                { backgroundColor: colors.secondaryLight }]} />
                            <View style={JourneyCardStyle.lastStopBlock}>
                                <View style={[JourneyCardStyle.stopCircleIcon,
                                    {
                                        backgroundColor: colors.secondaryLight,
                                        borderColor: colors.white
                                    }]} />
                                <Text style={[JourneyCardStyle.stopsText, { color: colors.hover }]}>
                                    {trimTheStringIfTooLong(
                                        GetSecondLocation(),
                                        MAX_ADDRESS_NAME_LENGTH)}
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

export default JourneyCard;
