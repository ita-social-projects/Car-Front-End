import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import JourneyCardStyle from "./JourneyCardStyle";
import * as navigation from "../navigation/Navigation";
import AvatarLogo from "../avatar-logo/AvatarLogo";
import moment from "moment";

const JourneyCard = (props: any) => {
    const journey = props.journey;

    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Journey Page", {
                        journeyId: journey?.id
                    });
                }}
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
                                    {moment(
                                        new Date(journey?.departureTime)
                                    ).fromNow()}
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
                                {journey?.stops[journey?.stops.length - 1]
                                    ?.address?.street === undefined
                                    ? "Location B"
                                    : journey?.stops[journey?.stops.length - 1]
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
