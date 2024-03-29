import { Text, View } from "react-native";
import JourneyNewApplicantStyle from "../JourneyNewApplicantStyle";
import { useTheme } from "../../theme/ThemeProvider";
import React from "react";

const RequestComment = ({ comments } : {comments?: string}) => {
    const { colors } = useTheme();

    if (!comments) {
        return null;
    }

    return (
        <View
            style={[
                JourneyNewApplicantStyle.commentsBox,
                {
                    borderColor: colors.disableBack,
                    backgroundColor: colors.white
                }
            ]}
        >
            <Text style={{ ...JourneyNewApplicantStyle.commentsText, color: colors.primary }} >
                {comments}
            </Text>
            <View style={[JourneyNewApplicantStyle.commentsBoxAfter,
                {
                    borderTopColor: "rgba(0,0,0,0)",
                    borderLeftColor: "rgba(0,0,0,0)",
                    borderRightColor: colors.disableBack,
                    borderBottomColor: colors.disableBack,
                    backgroundColor: colors.white
                }]} />
        </View>
    );
};

export default RequestComment;