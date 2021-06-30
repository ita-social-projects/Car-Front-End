import { Text } from "react-native";
import JourneyPageStyle from "../../JourneyPageStyle";
import React from "react";

const CommentsBlock = ({ comments }: {comments?: string}) => {
    return comments ? (
        <Text style={JourneyPageStyle.commentsBlock}>
            <Text style={JourneyPageStyle.commentsLabel}>Comments: </Text>
            <Text>{comments}</Text>
        </Text>
    ) : <></>;
};

export default CommentsBlock;