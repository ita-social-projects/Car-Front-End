import { Text } from "react-native";
import JourneyPageStyle from "../../JourneyPageStyle";
import React from "react";
import { useTheme } from "../../../../../../components/theme/ThemeProvider";

const CommentsBlock = ({ comments }: {comments?: string}) => {
    const { colors } = useTheme();

    return comments ? (
        <Text style={JourneyPageStyle.commentsBlock}>
            <Text style={{ ...JourneyPageStyle.commentsLabel, color: colors.primary }}>Comments: </Text>
            <Text style={{ color: colors.primary }}>{comments}</Text>
        </Text>
    ) : <></>;
};

export default CommentsBlock;