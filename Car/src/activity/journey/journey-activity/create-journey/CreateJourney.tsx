import React from "react";
import { Text, View } from "react-native";
import DM from "../../../../components/styles/DM";
import CreateJourneyStyle from "./CreateJourneyStyle";

const CreateJourney = () => {
    return (
        <View style={[CreateJourneyStyle.container, { backgroundColor: DM("#FFFFFF") }]}>
            <Text style={{ color: DM("black") }}>
                Create Journey
            </Text>
        </View>
    );
};

export default CreateJourney;