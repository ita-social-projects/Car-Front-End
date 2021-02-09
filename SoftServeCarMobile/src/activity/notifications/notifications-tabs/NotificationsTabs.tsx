import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useContext, useEffect } from "react";
import { View, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { container } from "tsyringe";
import UserService from "../../../../api-service/user-service/UserService";
import { User } from "../../../../models/User";
import { AuthContext } from "../../auth/AuthProvider";
import MyProfileTabsStyle from "../../my-profile/my-profile-tabs/MyProfileTabsStyle";
import Notifications from "../Notifications";
import NotificationsTabsStyle from "./NotificationsTabsStyle";

const StackTabs = createStackNavigator();

const ChatTabs = () => {
    const userServices = container.resolve(UserService);
    const [currentUser, setCurrentUser] = useState({} as User);
    const { user } = useContext(AuthContext);

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
                    name="Notifications"
                    component={Notifications}
                    options={{
                        headerTitle: "Notifications",
                        headerTitleAlign: "center",
                        headerTitleStyle:
                            NotificationsTabsStyle.headerTitleStyle,
                        headerLeft: () => <View />
                    }}
                />
            </StackTabs.Navigator>
        </View>
    );
};
export default ChatTabs;
