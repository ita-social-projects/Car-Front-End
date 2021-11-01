import PreferencesStyle from "../../activity/my-profile/my-profile-activity/preferences/PreferencesStyle";
import { Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import CommentBlockProps from "./CommentBlockProps";
import CommentBlockStyle from "./CommentBlockStyle";
import { useTheme } from "../theme/ThemeProvider";
import { PREFERENCES_COMMENTS_MAX_LENGTH } from "../../constants/GeneralConstants";

const CommentBlock = (props: CommentBlockProps) => {
    const { colors } = useTheme();
    const [comment, setComment] = useState(props.initialComment);
    const [remainingSymbolsText, setRemainingSymbolsText] = useState("Up to 100 symbols");

    return (
        <View style={CommentBlockStyle.commentsContainer}>
            <Text style={[PreferencesStyle.commentsText, { color: colors.hover }]}>
                Comments
            </Text>
            <TextInput
                placeholder="Write your comments"
                style={[PreferencesStyle.textInput,
                    {
                        borderColor: colors.primary,
                        color: colors.primary
                    }]}
                multiline={true}
                maxLength={100}
                numberOfLines={10}
                value={comment}
                onChangeText={(text) => { setComment(text);
                    setRemainingSymbolsText(
                        `${PREFERENCES_COMMENTS_MAX_LENGTH - text.length} symbols remaining`);}}
            />
            <Text style={[PreferencesStyle.hintText, { color: colors.primary }]}>
                {remainingSymbolsText}
            </Text>
            <View style={PreferencesStyle.whitespaceBlock} />
        </View>
    );
};

export default CommentBlock;
