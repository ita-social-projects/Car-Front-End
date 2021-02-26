import React, { useContext, useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import PreferencesService from "../../../../../api-service/preferences-service/PreferencesService";
import UserPreferences from "../../../../../models/UserPreferences";
import Indicator from "../../../../components/activity-indicator/Indicator";
import AuthContext from "../../../../components/auth/AuthContext";
import ChooseOptionComponent from "./ChooseOptionComponent";
import PreferencesStyle from "./PreferencesStyle";

export default function Preferences(props: any) {
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
                <View style={PreferencesStyle.loadingContainer}>
                    <Indicator
                        size="large"
                        color="#414045"
                        text="Loading information..."
                    />
                </View>
            ) : (
                <ScrollView style={PreferencesStyle.container}>
                    <ChooseOptionComponent
                        text={"Do you allow smoking in your car?"}
                        value={isSmokingAllowed}
                        onValueChanged={(value: any) =>
                            setSmokingAllowed(value)
                        }
                    />
                    <ChooseOptionComponent
                        text={"Do you allow eating in your car?"}
                        value={isEatingAllowed}
                        onValueChanged={(value: any) => setEatingAllowed(value)}
                    />
                    <View style={PreferencesStyle.commentsContainer}>
                        <Text style={PreferencesStyle.commentsText}>
                            Comments
                        </Text>
                        <TextInput
                            style={PreferencesStyle.TextInput}
                            multiline={true}
                            maxLength={100}
                            numberOfLines={10}
                            value={comments}
                            onChangeText={(text) => setComments(text)}
                        />
                        <Text style={PreferencesStyle.hintText}>
                            Up to 100 symbols
                        </Text>
                        <View style={PreferencesStyle.whitespaceBlock} />
                    </View>
                </ScrollView>
            )}
        </>
    );
}
