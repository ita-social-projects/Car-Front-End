import JourneyNewApplicantStyle from "../JourneyNewApplicantStyle";
import { Text, View } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import React from "react";

const WithLuggage = ({ hasLuggage } : {hasLuggage?: boolean}) => {
    const { colors } = useTheme();

    return (
        <View
            style={[
                JourneyNewApplicantStyle.row,
                JourneyNewApplicantStyle.options
            ]}
        >
            <Text style={JourneyNewApplicantStyle.optionsHeader} >
                {hasLuggage? ("I'm traveling with luggage.")
                    : ("I'm traveling without luggage.")}
            </Text>

            <View style={[JourneyNewApplicantStyle.optionsLine,
                {
                    borderTopColor: "rgba(0,0,0,0)",
                    borderLeftColor: "rgba(0,0,0,0)",
                    borderRightColor: "rgba(0,0,0,0)",
                    borderBottomColor: colors.secondaryLight,
                    backgroundColor: colors.white
                }]} />
        </View>
    );
};

export default WithLuggage;