import PreferencesStyle from "../../activity/my-profile/my-profile-activity/preferences/PreferencesStyle";
import { Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import CommentBlockProps from "./CommentBlockProps";
import CommentBlockStyle from "./CommentBlockStyle";
import { useTheme } from "../theme/ThemeProvider";
import { PREFERENCES_COMMENTS_MAX_LENGTH } from "../../constants/GeneralConstants";

const CommentBlock = (props: CommentBlockProps) => {
    const { colors } = useTheme();
    const [remainingSymbolsText,setRemainingSymbolsText]=useState(
        ()=>!props.initialComment ? "Up to 100 symbols"
            :`${PREFERENCES_COMMENTS_MAX_LENGTH - props.initialComment.length} symbols left`);

    return(
        <View style={[CommentBlockStyle.commentsContainer, props.containerStyle]}>
            <Text style={[PreferencesStyle.commentsText, { color: colors.primary }]}>
                Comments
            </Text>
            <TextInput
                placeholderTextColor = {colors.hover}
                placeholder={props.placeholder}
                style={[PreferencesStyle.textInput,
                    {
                        borderColor: colors.primary,
                        color: colors.primary
                    }]}
                multiline={true}
                maxLength={100}
                numberOfLines={10}
                value={props.initialComment}
                onChangeText={(text) => {props.setComments(text);
                    setRemainingSymbolsText(
                        `${PREFERENCES_COMMENTS_MAX_LENGTH - text.length} symbols left`);}}
            />
            <Text style={[PreferencesStyle.hintText, { color: colors.primary }]}>
                {remainingSymbolsText}
            </Text>
            <View style={PreferencesStyle.whitespaceBlock} />
        </View>
    );
};

export default CommentBlock;
