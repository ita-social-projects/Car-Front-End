import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import Chat from "../messages-activity/chat/Chat";
import Messages from "../Messages";
import * as navigation from "../../../components/navigation/Navigation";
import HeaderStyle from "../../../components/styles/HeaderStyle";
import JourneyApplicant from "../../journey/journey-activity/journey-applicant/JourneyApplicant";

const StackTabs = createStackNavigator();

const MessagesTabs = () => {
    const [isOpenFilter, setIsOpenFilter] = useState(false);

    const setIsOpen = () => {
        setIsOpenFilter(!isOpenFilter);
    };

    return (
        <View style={HeaderStyle.container}>
            <StackTabs.Navigator>
                <StackTabs.Screen
                    name="Messages"
                    options={{
                        headerTitle: "Messages",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerRight: () => (
                            <TouchableOpacity
                                style={{ right: 10 }}
                                onPress={() => setIsOpen()}
                            >
                                <Ionicons name={"search"} size={30} />
                            </TouchableOpacity>
                        ),
                        headerLeft: () => <View />
                    }}
                    children={(props) => (
                        <Messages
                            {...props}
                            component={Chat}
                            isOpenFilter={isOpenFilter}
                        />
                    )}
                />
                <StackTabs.Screen
                    name="Chat"
                    component={Chat}
                    options={{
                        headerTitle: "Chat",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={HeaderStyle.backButtonOpacity}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <Ionicons
                                    name={"chevron-back-outline"}
                                    size={35}
                                    color={"#02A2CF"}
                                />
                                <View style={HeaderStyle.backButtonTextView}>
                                    <Text style={HeaderStyle.buttonText}>
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity onPress={() => {}}>
                                <Ionicons
                                    name={"ellipsis-horizontal"}
                                    size={30}
                                    style={HeaderStyle.moreOptionsIcon}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />

                <StackTabs.Screen
                    name="Applicant Page"
                    options={{
                        title: "SoftServian",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={HeaderStyle.backButtonOpacity}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <Ionicons
                                    name={"chevron-back-outline"}
                                    size={35}
                                    color={"#02A2CF"}
                                />
                                <View style={HeaderStyle.backButtonTextView}>
                                    <Text style={HeaderStyle.buttonText}>
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    component={JourneyApplicant}
                />
            </StackTabs.Navigator>
        </View>
    );
};

export default MessagesTabs;
