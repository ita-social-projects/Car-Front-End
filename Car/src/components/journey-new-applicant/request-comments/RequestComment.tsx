import { Text, View } from "react-native";
import JourneyNewApplicantStyle from "../JourneyNewApplicantStyle";
import DM from "../../styles/DM";
import React from "react";

const RequestComment = ({ comments } : {comments?: string}) => {
    if (!comments) {
        return null;
    }

    return (
        <View
            style={[
                JourneyNewApplicantStyle.row,
                JourneyNewApplicantStyle.commentsBox,
                {
                    borderColor: DM("rgba(151, 151, 151, 0.3)"),
                    backgroundColor: DM("#FFFFFF")
                }
            ]}
        >
            <Text style={{ ...JourneyNewApplicantStyle.commentsText, color: DM("black") }} >
                {comments}
            </Text>
            <View style={[JourneyNewApplicantStyle.commentsBoxAfter,
                {
                    borderTopColor: DM("rgba(0,0,0,0)"),
                    borderLeftColor: DM("rgba(0,0,0,0)"),
                    borderRightColor: DM("rgba(151, 151, 151, 0.3)"),
                    borderBottomColor: DM("rgba(151, 151, 151, 0.3)"),
                    backgroundColor: DM("#FFFFFF")
                }]} />
        </View>
    );
};

export default RequestComment;