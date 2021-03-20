import React from "react";
import { Text, View } from "react-native";
import CreateJourneyStyle from "./CreateJourneyStyle";

const CreateJourney = () => {
    return (
        <View style={CreateJourneyStyle.container}>
            <Text style={CreateJourneyStyle.text}>
                Create Journey
            </Text>
        </View>
    );
};

export default CreateJourney;