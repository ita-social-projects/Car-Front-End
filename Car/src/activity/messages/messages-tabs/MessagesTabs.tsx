import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import UserService from "../../../../api-service/user-service/UserService";
import User from "../../../../models/User";
import AuthContext from "../../../components/auth/AuthContext";
import Chat from "../chat/Chat";
import SimpleMessage from "../chat/simple-message/SimpleMessage";
import * as navigation from "../../../components/navigation/Navigation";
import HeaderStyle from "../../../components/styles/HeaderStyle";

const StackTabs = createStackNavigator();

const MessagesTabs = () => {
    const [currentUser, setCurrentUser] = useState({} as User);
    const { user } = useContext(AuthContext);
    const [isOpenFilter, setIsOpenFilter] = useState(false);

    const setIsOpen = () => {
        setIsOpenFilter(!isOpenFilter);
    };

    useEffect(() => {
        UserService.getUser(Number(user?.id))
            .then((res: { data: React.SetStateAction<User> }) =>
                setCurrentUser(res.data)
            )
            .catch((e: any) => console.log(e));
    }, []);

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
                        <SimpleMessage
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
            </StackTabs.Navigator>
        </View>
    );
};
export default MessagesTabs;
