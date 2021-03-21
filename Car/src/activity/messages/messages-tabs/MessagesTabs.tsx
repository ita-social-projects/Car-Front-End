import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import Chat from "../messages-activity/chat/Chat";
import Messages from "../Messages";
import HeaderStyle from "../../../components/styles/HeaderStyle";
import JourneyApplicant from "../../journey/journey-activity/journey-applicant/JourneyApplicant";
import HeaderBackButton from "../../../components/header-back-button/HeaderBackButton";
import HeaderEllipsis from "../../../components/header-ellipsis/HeaderEllipsis";
import DM from "../../../components/styles/DM";

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
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
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
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerLeft: HeaderBackButton,
                        headerRight: HeaderEllipsis
                    }}
                />

                <StackTabs.Screen
                    name="Applicant Page"
                    options={{
                        title: "SoftServian",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerLeft: HeaderBackButton
                    }}
                    component={JourneyApplicant}
                />
            </StackTabs.Navigator>
        </View>
    );
};

export default MessagesTabs;
