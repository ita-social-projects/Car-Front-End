import React, { useContext, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import JourneyCardStyle from "./JourneyCardStyle";
import * as navigation from "../navigation/Navigation";
import AvatarLogo from "../avatar-logo/AvatarLogo";
import moment from "moment";
import AuthContext from "../auth/AuthContext";
import { FIRST_ELEMENT_INDEX, LAST_INDEX_CORRECTION } from "../../constants/Constants";
import DM from "../styles/DM";

const JourneyCard = (props: any) => {
    const journey = props.journey;
    const { user } = useContext(AuthContext);
    const [isDriver, setDriver] = useState(false);
    const [isPassenger, setPassenger] = useState(false);

    useEffect (() => {
        journey?.participants.forEach((participant: any) =>
            participant?.id == user?.id ? setPassenger(true) : () => <></>);
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
                <View style={[JourneyCardStyle.component, { borderColor: DM("black") }]}>
                    <View style={JourneyCardStyle.driverInfoBlock}>
                        <View style={JourneyCardStyle.imageBlock}>
                            <AvatarLogo user={journey?.organizer} size={38.5} />
                        </View>
                        <View style={JourneyCardStyle.driverTextBlock}>
                            <View style={JourneyCardStyle.driverNameBlock}>
                                <View>
                                    <Text style={[JourneyCardStyle.driverNameText, { color: DM("black") }]} >
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
                                            color={DM("black")}
                                            size={20}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={JourneyCardStyle.driverPositionBlock}>
                                <Text style={[JourneyCardStyle.driverPositionText, { color: DM("#909095") }]} >
                                    {journey?.organizer?.position}
                                </Text>
                                <Text style={[JourneyCardStyle.timeText, { color: DM("#02A2CF") }]}>
                                    {moment(new Date(journey?.departureTime))
                                        .utc()
                                        .fromNow()}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={JourneyCardStyle.stopsBlock}>
                        <View style={JourneyCardStyle.firstStopBlock}>
                            <View style={[JourneyCardStyle.stopCircleIcon,
                                {
                                    backgroundColor: DM("#AAA9AE"),
                                    borderColor: DM("#FFFFFF")
                                }]} />
                            <Text style={[JourneyCardStyle.stopsText, { color: DM("#414045") }]}>
                                {journey?.stops[FIRST_ELEMENT_INDEX]?.address?.street ===
                                undefined
                                    ? "Location A"
                                    : journey?.stops[FIRST_ELEMENT_INDEX]?.address?.street}
                            </Text>
                        </View>
                        <View style={[JourneyCardStyle.stopStickIcon, { backgroundColor: DM("#AAA9AE") }]} />
                        <View style={JourneyCardStyle.lastStopBlock}>
                            <View style={[JourneyCardStyle.stopCircleIcon,
                                {
                                    backgroundColor: DM("#AAA9AE"),
                                    borderColor: DM("#FFFFFF")
                                }]} />
                            <Text style={[JourneyCardStyle.stopsText, { color: DM("#414045") }]}>
                                {journey?.stops[journey?.stops?.length - LAST_INDEX_CORRECTION]
                                    ?.address?.street === undefined
                                    ? "Location B"
                                    : journey?.stops[journey?.stops?.length - LAST_INDEX_CORRECTION]
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
