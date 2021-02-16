import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import JourneyCardStyle from "./JourneyCardStyle";
import * as navigation from "../navigation/Navigation";

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
                            <Image
                                style={JourneyCardStyle.image}
                                source={require("../../../assets/images/default-user-photo.jpg")}
                            />
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
                                    <TouchableOpacity onPress={() => {}}>
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
                                    {journey?.departureTime === undefined
                                        ? "Today at 19:15"
                                        : journey?.departureTime}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={JourneyCardStyle.stopsBlock}>
                        <View style={JourneyCardStyle.firstStopBlock}>
                            <View style={JourneyCardStyle.stopCircleIcon} />
                            <Text style={JourneyCardStyle.stopsText}>
                                {journey?.stops[0]?.address.street === undefined
                                    ? "Location A"
                                    : journey?.stops[0]?.address.street}
                            </Text>
                        </View>
                        <View style={JourneyCardStyle.stopStickIcon} />
                        <View style={JourneyCardStyle.lastStopBlock}>
                            <View style={JourneyCardStyle.stopCircleIcon} />
                            <Text style={JourneyCardStyle.stopsText}>
                                {journey?.stops[journey?.stops.length - 1]
                                    ?.address.street === undefined
                                    ? "Location B"
                                    : journey?.stops[journey?.stops.length - 1]
                                          ?.address.street}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default JourneyCard;
