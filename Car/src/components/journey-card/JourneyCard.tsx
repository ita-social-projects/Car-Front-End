import React, { useContext, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import JourneyCardStyle from "./JourneyCardStyle";
import * as navigation from "../navigation/Navigation";
import AvatarLogo from "../avatar-logo/AvatarLogo";
import moment from "moment";
import Journey from "../../../models/Journey";
import AuthContext from "../auth/AuthContext";

const JourneyCard = (props: any) => {
    const journey: Journey = props.journey;
    const { user } = useContext(AuthContext);
    const [isDriver, setDriver] = useState(false);
    const [isPassenger, setPassenger] = useState(false);

    useEffect (() => {
        journey?.participants.forEach((u) => u?.id == user?.id ? setPassenger(true) : () => <></>);
        setDriver(journey?.organizer?.id == user?.id);
    }, []);

    const navigateJourney = () =>
        navigation.navigate("Journey Page", {
            journeyId: journey?.id,
            isDriver,
            isPassenger
        });

    return (
        <View>
            <TouchableOpacity
                onPress={navigateJourney}
            >
                <View style={JourneyCardStyle.component}>
                    <View style={JourneyCardStyle.driverInfoBlock}>
                        <View style={JourneyCardStyle.imageBlock}>
                            <AvatarLogo user={journey?.organizer} size={38.5} />
                        </View>
                        <View style={JourneyCardStyle.driverTextBlock}>
                            <View style={JourneyCardStyle.driverNameBlock}>
                                <View>
                                    <Text
                                        style={JourneyCardStyle.driverNameText}
                                    >
                                        {journey?.organizer?.name +
                                            " " +
                                            journey?.organizer?.surname}
                                        's journey
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
                                        <Ionicons
                                            name={"ellipsis-horizontal"}
                                            color={"black"}
                                            size={20}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={JourneyCardStyle.driverPositionBlock}>
                                <Text
                                    style={JourneyCardStyle.driverPositionText}
                                >
                                    {journey?.organizer?.position}
                                </Text>
                                <Text style={JourneyCardStyle.timeText}>
                                    {moment(new Date(journey!?.departureTime))
                                        .utc()
                                        .fromNow()}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={JourneyCardStyle.stopsBlock}>
                        <View style={JourneyCardStyle.firstStopBlock}>
                            <View style={JourneyCardStyle.stopCircleIcon} />
                            <Text style={JourneyCardStyle.stopsText}>
                                {journey?.stops[0]?.address?.street ===
                                undefined
                                    ? "Location A"
                                    : journey?.stops[0]?.address?.street}
                            </Text>
                        </View>
                        <View style={JourneyCardStyle.stopStickIcon} />
                        <View style={JourneyCardStyle.lastStopBlock}>
                            <View style={JourneyCardStyle.stopCircleIcon} />
                            <Text style={JourneyCardStyle.stopsText}>
                                {journey?.stops[journey?.stops?.length - 1]
                                    ?.address?.street === undefined
                                    ? "Location B"
                                    : journey?.stops[journey?.stops?.length - 1]
                                        ?.address?.street}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default JourneyCard;
