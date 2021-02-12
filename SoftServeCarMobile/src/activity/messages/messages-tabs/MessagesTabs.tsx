import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { container } from "tsyringe";
import UserService from "../../../../api-service/user-service/UserService";
import { User } from "../../../../models/User";
import { AuthContext } from "../../auth/AuthProvider";
import MyProfileTabsStyle from "../../my-profile/my-profile-tabs/MyProfileTabsStyle";
import MessagesTabsStyle from "./MessagesTabsStyle";
import Chat from "../chat/Chat";
import SimpleMessage from "../chat/simple-message/SimpleMessage";
import * as navigation from "../../../components/navigation/Navigation";

const StackTabs = createStackNavigator();

const ChatTabs = () => {
    const userServices = container.resolve(UserService);
    const [currentUser, setCurrentUser] = useState({} as User);
    const { user } = useContext(AuthContext);
    const [isOpenFilter, setIsOpenFilter] = useState(false);

    const setIsOpen = () => {
        setIsOpenFilter(!isOpenFilter);
    }

    useEffect(() => {
        userServices
            .getUser(Number(user?.id))
            .then((res: { data: React.SetStateAction<User> }) =>
                setCurrentUser(res.data)
            )
            .catch((e: any) => console.log(e));
    }, []);

    return (
        <View style={MyProfileTabsStyle.container}>
            <StackTabs.Navigator>
                <StackTabs.Screen
                    name="Messages"
                    options={{
                        headerTitle: "Messages",
                        headerTitleAlign: "center",
                        headerTitleStyle: MessagesTabsStyle.headerTitleStyle,
                        headerRight: () => (
                            <TouchableOpacity style={{ right: 10 }} onPress={() => setIsOpen()}>
                                <Ionicons name={'search'} size={30} />
                            </TouchableOpacity>
                        )
                    }}
                    children={(props) => <SimpleMessage {...props} component={Chat} isOpenFilter={isOpenFilter} />}
                />
                <StackTabs.Screen
                    name="Chat"
                    component={Chat}
                    options={{
                        headerTitle: "Chat",
                        headerTitleAlign: "center",
                        headerTitleStyle: MessagesTabsStyle.headerTitleStyle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={MessagesTabsStyle.backButtonOpacity}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <Ionicons
                                    name={"chevron-back-outline"}
                                    size={35}
                                    color={"#02A2CF"}
                                />
                                <View
                                    style={MessagesTabsStyle.backButtonTextView}
                                >
                                    <Text style={MessagesTabsStyle.buttonText}>
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity onPress={() => { }}>
                                <Ionicons
                                    name={"ellipsis-horizontal"}
                                    size={10}
                                    style={MessagesTabsStyle.moreOptionsIcon}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </StackTabs.Navigator>
        </View>
    );
};
export default ChatTabs;
