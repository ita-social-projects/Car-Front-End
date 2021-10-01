import React, { useContext, useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import PreferencesService from "../../../../../api-service/preferences-service/PreferencesService";
import UserPreferences from "../../../../../models/user/UserPreferences";
import Indicator from "../../../../components/activity-indicator/Indicator";
import AuthContext from "../../../../components/auth/AuthContext";
import ChooseOption from "../../../../components/choose-opton/ChooseOption";
import DM from "../../../../components/styles/DM";
import PreferencesStyle from "./PreferencesStyle";
import NavigationAddAndRemoveListener from "../../../../types/NavigationAddAndRemoveListener";
import { PREFERENCES_COMMENTS_MAX_LENGTH } from "../../../../constants/GeneralConstants";

export default function Preferences (props: NavigationAddAndRemoveListener) {
    const [isSmokingAllowed, setSmokingAllowed] = useState(false);
    const [isEatingAllowed, setEatingAllowed] = useState(false);
    const [comments, setComments] = useState("");
    const [remainingSymbols, setRemainingSymbols] = useState(PREFERENCES_COMMENTS_MAX_LENGTH);
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
                    setRemainingSymbols(res.data.comments ?
                        PREFERENCES_COMMENTS_MAX_LENGTH - res.data.comments.length : PREFERENCES_COMMENTS_MAX_LENGTH);
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
                <View style={[PreferencesStyle.loadingContainer, { backgroundColor:  DM("white") }]}>
                    <Indicator
                        size="large"
                        color={DM("#414045")}
                        text="Loading information..."
                    />
                </View>
            ) : (
                <ScrollView style={[PreferencesStyle.container, { backgroundColor: DM("white") }]}>
                    <View style={PreferencesStyle.chooseOptionContainer}>
                        <ChooseOption
                            text={"Do you allow smoking in your car?"}
                            value={isSmokingAllowed}
                            onValueChanged={(value: boolean) =>
                                setSmokingAllowed(value)
                            }
                        />
                    </View>
                    <View>
                        <ChooseOption
                            text={"Do you allow eating in your car?"}
                            value={isEatingAllowed}
                            onValueChanged={(value: boolean) => setEatingAllowed(value)}
                        />
                    </View>
                    <View style={PreferencesStyle.commentsContainer}>
                        <Text style={[PreferencesStyle.commentsText, { color: DM("#414045") }]}>
                            Other preferences
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
                            value={comments}
                            onChangeText={(text) => { setComments(text);
                                setRemainingSymbols(PREFERENCES_COMMENTS_MAX_LENGTH - text.length);}}
                        />
                        <Text style={[PreferencesStyle.hintText, { color: DM("black") }]}>
                            {remainingSymbols === PREFERENCES_COMMENTS_MAX_LENGTH ?
                                "Up to 100 symbols" : `${remainingSymbols} symbols remaining` }
                        </Text>
                        <View style={PreferencesStyle.whitespaceBlock} />
                    </View>
                </ScrollView>
            )}
        </>
    );
}
