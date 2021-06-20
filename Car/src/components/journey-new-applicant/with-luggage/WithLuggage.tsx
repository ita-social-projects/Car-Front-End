import JourneyNewApplicantStyle from "../JourneyNewApplicantStyle";
import { Text, View } from "react-native";
import DM from "../../styles/DM";
import React from "react";

const WithLuggage = ({ hasLuggage } : {hasLuggage?: boolean}) => {
    return (
        <View
            style={[
                JourneyNewApplicantStyle.row,
                JourneyNewApplicantStyle.options
            ]}
        >
            {hasLuggage ? (
                <Text style={JourneyNewApplicantStyle.optionsHeader} >
                    I'm traveling with luggage.
                </Text>
            ) : (
                <View />
            )}
            <View style={[JourneyNewApplicantStyle.optionsLine,
                {
                    borderTopColor: DM("rgba(0,0,0,0)"),
                    borderLeftColor: DM("rgba(0,0,0,0)"),
                    borderRightColor: DM("rgba(0,0,0,0)"),
                    borderBottomColor: DM("#C1C1C5"),
                    backgroundColor: DM("#FFFFFF")
                }]} />
        </View>
    );
};

export default WithLuggage;