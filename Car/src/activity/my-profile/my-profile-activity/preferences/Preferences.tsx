import React, { useContext, useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import PreferencesService from "../../../../../api-service/preferences-service/PreferencesService";
import UserPreferences from "../../../../../models/user/UserPreferences";
import Indicator from "../../../../components/activity-indicator/Indicator";
import AuthContext from "../../../../components/auth/AuthContext";
import ChooseOption from "../../../../components/choose-opton/ChooseOption";
import { useTheme } from "../../../../components/theme/ThemeProvider";
import PreferencesStyle from "./PreferencesStyle";
import NavigationAddAndRemoveListener from "../../../../types/NavigationAddAndRemoveListener";
import { PREFERENCES_COMMENTS_MAX_LENGTH } from "../../../../constants/GeneralConstants";

export default function Preferences (props: NavigationAddAndRemoveListener) {
    const { colors } = useTheme();
    const [isSmokingAllowed, setSmokingAllowed] = useState(false);
    const [isEatingAllowed, setEatingAllowed] = useState(false);
    const [comments, setComments] = useState("");
    const [remainingSymbolsText, setRemainingSymbolsText] = useState("Up to 100 symbols");
    const [isLoading, setLoading] = useState(true);

    const { user } = useContext(AuthContext);

    const [userPreferences, setUserPreferences] = useState(
        {} as UserPreferences
    );

    const updatePreferences = () => {
        let preferences: UserPreferences = null;

        if (userPreferences) {
            preferences = {
                id: userPreferences.id,
                doAllowSmoking: isSmokingAllowed,
                doAllowEating: isEatingAllowed,
                comments: comments
            };
        }
        PreferencesService.updateUserPreferences(preferences);
    };

    useEffect(() => {
        PreferencesService.getUserPreferences(Number(user?.id))
            .then((res) => {
                if (res.data) {
                    setSmokingAllowed(res.data.doAllowSmoking);
                    setEatingAllowed(res.data.doAllowEating);
                    setComments(res.data.comments);
                    setRemainingSymbolsText(res.data.comments ?
                        `${PREFERENCES_COMMENTS_MAX_LENGTH - res.data.comments.length} symbols remaining`
                        : "Up to 100 symbols");
                    setUserPreferences(res.data);
                }
            })
            .then(() => setLoading(false));
    }, []);

    useEffect(() => {
        props.navigation.addListener("blur", updatePreferences);

        return () => {
            props.navigation.removeListener("blur", updatePreferences);
        };
    }, [updatePreferences]);

    return (
        <>
            {isLoading ? (
                <View style={[PreferencesStyle.loadingContainer, { backgroundColor:  colors.white }]}>
                    <Indicator
                        size="large"
                        color={colors.hover}
                        text="Loading information..."
                    />
                </View>
            ) : (
                <ScrollView style={[PreferencesStyle.container, { backgroundColor: colors.white }]}>
                    <View style={PreferencesStyle.chooseOptionContainer}>
                        <ChooseOption
                            text={"Allow smoking in your car"}
                            value={isSmokingAllowed}
                            onValueChanged={(value: boolean) =>
                                setSmokingAllowed(value)
                            }
                        />
                    </View>
                    <View>
                        <ChooseOption
                            text={"Allow eating in your car"}
                            value={isEatingAllowed}
                            onValueChanged={(value: boolean) => setEatingAllowed(value)}
                        />
                    </View>
                    <View style={PreferencesStyle.commentsContainer}>
                        <Text style={[PreferencesStyle.commentsText, { color: colors.hover }]}>
                            Other preferences
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
                            value={comments}
                            onChangeText={(text) => { setComments(text);
                                setRemainingSymbolsText(
                                    `${PREFERENCES_COMMENTS_MAX_LENGTH - text.length} symbols remaining`);}}
                        />
                        <Text style={[PreferencesStyle.hintText, { color: colors.primary }]}>
                            {remainingSymbolsText}
                        </Text>
                        <View style={PreferencesStyle.whitespaceBlock} />
                    </View>
                </ScrollView>
            )}
        </>
    );
}
