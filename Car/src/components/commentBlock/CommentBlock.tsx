import PreferencesStyle from "../../activity/my-profile/my-profile-activity/preferences/PreferencesStyle";
import { Text, TextInput, View } from "react-native";
import React, { useState, useEffect } from "react";
import CommentBlockProps from "./CommentBlockProps";
import CommentBlockStyle from "./CommentBlockStyle";
import { useTheme } from "../theme/ThemeProvider";
import { PREFERENCES_COMMENTS_MAX_LENGTH } from "../../constants/GeneralConstants";
import AsyncStorage from "@react-native-community/async-storage";

const CommentBlock = (props: CommentBlockProps) => {
    const { colors } = useTheme();
    const [comment, setComment] = useState("");
    const [remainingSymbolsText, setRemainingSymbolsText] = useState("Up to 100 symbols");
    
    const saveComment = async () => {
        
        await AsyncStorage.setItem('Key',comment);
    }

    const loadComment = async () => {
        const setvalue = await AsyncStorage.getItem('Key')
        if (setvalue !== null) {
            setComment(setvalue);
        }
    }

    useEffect(() => {
        loadComment();
    },[]);

    useEffect(() => {
        saveComment();
    },[comment]);
    
    return (
        <View style={CommentBlockStyle.commentsContainer}>
            <Text style={[PreferencesStyle.commentsText, { color: colors.hover }]}>
                Comments
            </Text>
            <TextInput
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
