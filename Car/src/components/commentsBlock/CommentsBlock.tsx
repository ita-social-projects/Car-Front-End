import PreferencesStyle from "../../activity/my-profile/my-profile-activity/preferences/PreferencesStyle";
import { Text, TextInput, View } from "react-native";
import { PREFERENCES_COMMENTS_MAX_LENGTH } from "../../constants/GeneralConstants";
import React, { useState } from "react";
import CommentsBlockProps from "./CommentsBlockProps";
import CommentsBlockStyle from "./CommentsBlockStyle";
import { useTheme } from "../theme/ThemeProvider";

const CommentsBlock = (props: CommentsBlockProps) => {
    const { DM } = useTheme();
    const [comment, setComment] = useState(props.initialComment);
    const [remainingSymbolsText, setRemainingSymbolsText] = useState("Up to 100 symbols");

    return (
        <View style={CommentsBlockStyle.commentsContainer}>
            <Text style={[PreferencesStyle.commentsText, { color: DM("#414045") }]}>
                Comments
            </Text>
            <TextInput
                style={[PreferencesStyle.textInput,
                    {
                        borderColor: DM("black"),
                        color: DM("black")
                    }]}
                multiline={true}
                maxLength={100}
                numberOfLines={10}
                value={comment}
                onChangeText={(text) => { setComment(text);
                    setRemainingSymbolsText(
                        `${PREFERENCES_COMMENTS_MAX_LENGTH - text.length} symbols remaining`);}}
            />
            <Text style={[PreferencesStyle.hintText, { color: DM("black") }]}>
                {remainingSymbolsText}
            </Text>
            <View style={PreferencesStyle.whitespaceBlock} />
        </View>
    );
};

export default CommentsBlock;
