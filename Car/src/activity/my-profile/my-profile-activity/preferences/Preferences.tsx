import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import PreferencesService from "../../../../../api-service/preferences-service/PreferencesService";
import UserPreferences from "../../../../../models/user/UserPreferences";
import Indicator from "../../../../components/activity-indicator/Indicator";
import AuthContext from "../../../../components/auth/AuthContext";
import ChooseOption from "../../../../components/choose-opton/ChooseOption";
import { useTheme } from "../../../../components/theme/ThemeProvider";
import PreferencesStyle from "./PreferencesStyle";
import NavigationAddAndRemoveListener from "../../../../types/NavigationAddAndRemoveListener";
import CommentsBlock from "../../../../components/commentsBlock/CommentsBlock";
import { View } from "react-native";

export default function Preferences (props: NavigationAddAndRemoveListener) {
    const { DM } = useTheme();
    const [isSmokingAllowed, setSmokingAllowed] = useState(false);
    const [isEatingAllowed, setEatingAllowed] = useState(false);
    const [comments, setComments] = useState("");
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
                    <CommentsBlock
                        initialComment={comments}
                        commentHeader={"Other Preferences"}
                    />
                </ScrollView>
            )}
        </>
    );
}
