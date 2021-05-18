import JourneyPageStyle from "../JourneyPageStyle";
import DM from "../../../../../components/styles/DM";
import { Divider } from "react-native-elements";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as navigation from "../../../../../components/navigation/Navigation";
import React from "react";
import Journey from "../../../../../../models/journey/Journey";

interface ButtonBlockProps {
    isDriver: boolean,
    isPassenger: boolean,
    isRequested: boolean,
    journey: Journey
}

const ButtonBlock = (props: ButtonBlockProps) => {
    return (
        <View style={[
            JourneyPageStyle.buttons,
            { backgroundColor: DM("#FFFFFF") }
        ]}>
            <Divider style={[JourneyPageStyle.separator, { backgroundColor: DM("#C1C1C5") }]} />
            <View style={JourneyPageStyle.buttonsBlock}>
                {(props.isDriver || props.isPassenger) && (
                    <TouchableOpacity
                        style={[JourneyPageStyle.messageAllButton, {
                            backgroundColor: DM("white"),
                            borderColor: DM("black") }
                        ]}
                        onPress={() =>
                            navigation.navigate("MessagesTabs", {
                                screen: "Chat",
                                params: {
                                    chatId: props.journey?.id,
                                    header:
                                        props.journey?.organizer?.name + " " +
                                        props.journey?.organizer?.surname + "'s ride"
                                }
                            })
                        }
                    >
                        <Text style={[JourneyPageStyle.messageAllButtonText, { color: DM("black") }]}>
                            Message to all
                        </Text>
                    </TouchableOpacity>
                )}
                {!props.isDriver && !props.isPassenger && (
                    <TouchableOpacity
                        style={[
                            JourneyPageStyle.requestButton,
                            { backgroundColor: DM("black") },
                            props.isRequested && { backgroundColor: DM("#00000033") }]}
                        onPress={() => navigation.navigate("Journey Request Page", {
                            journeyId: props.journey?.id
                        })}
                        disabled={props.isRequested}
                    >
                        <Text style={[JourneyPageStyle.requestButtonText, { color: DM("white") }]}>
                            {props.isRequested ? "Requested" : "Send request"}
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
            {/*<Divider style={[JourneyPageStyle.separator, { backgroundColor: DM("#C1C1C5") }]} />*/}
            {/*<Divider style={[JourneyPageStyle.separator, { backgroundColor: DM("#C1C1C5") }]} />*/}
        </View>
    );
};

export default ButtonBlock;