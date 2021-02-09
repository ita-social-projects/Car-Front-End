import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import "reflect-metadata";
import { container } from "tsyringe";
import UserService from "../../../../api-service/user-service/UserService";
import { User } from "../../../../models/User";
import { AuthContext } from "../../auth/AuthProvider";
import AddressBook from "../my-profile-activity/address-book/AddressBook";
import AvatarLogoTitle from "../my-profile-activity/avatar-logo/AvatarLogoTitle";
import CarTabs from "../my-profile-activity/cars/car-tabs/CarTabs";
import Details from "../my-profile-activity/details/Details";
import Preferences from "../my-profile-activity/preferences/Preferences";
import Settings from "../my-profile-activity/settings/Settings";
import MyProfile from "../MyProfile";
import MyProfileTabsStyle from "./MyProfileTabsStyle";
import * as navigation from "../../../components/navigation/Navigation";

const StackTabs = createStackNavigator();

const MyProfileTabs = () => {
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
        <View style={{ flex: 1, alignSelf: "stretch" }}>
            <StackTabs.Navigator>
                <StackTabs.Screen
                    name="MyProfile"
                    component={MyProfile}
                    options={{
                        headerTitle: "",
                        headerStyle: MyProfileTabsStyle.headerStyle,
                        headerLeft: (args) => (
                            <AvatarLogoTitle {...args} user={currentUser} />
                        )
                    }}
                />
                <StackTabs.Screen
                    name="Preferences"
                    component={Preferences}
                    options={{
                        headerTitle: "Preferences",
                        headerTitleAlign: "center",
                        headerTitleStyle: MyProfileTabsStyle.headerTitleStyle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={MyProfileTabsStyle.backButtonOpacity}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <Ionicons
                                    name={"chevron-back-outline"}
                                    size={35}
                                    color={"#02A2CF"}
                                    style={MyProfileTabsStyle.blackButtonText}
                                />
                                <View
                                    style={
                                        MyProfileTabsStyle.backButtonTextView
                                    }
                                >
                                    <Text
                                        style={[
                                            MyProfileTabsStyle.buttonText,
                                            MyProfileTabsStyle.blackButtonText
                                        ]}
                                    >
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
                <StackTabs.Screen
                    name="Details"
                    component={Details}
                    options={{
                        headerTitle: "Details",
                        headerTitleAlign: "center",
                        headerTitleStyle: MyProfileTabsStyle.headerTitleStyle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={MyProfileTabsStyle.backButtonOpacity}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <Ionicons
                                    name={"chevron-back-outline"}
                                    size={35}
                                    color={"#02A2CF"}
                                    style={MyProfileTabsStyle.blackButtonText}
                                />
                                <View
                                    style={
                                        MyProfileTabsStyle.backButtonTextView
                                    }
                                >
                                    <Text
                                        style={[
                                            MyProfileTabsStyle.buttonText,
                                            MyProfileTabsStyle.blackButtonText
                                        ]}
                                    >
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
                <StackTabs.Screen
                    name="CarTabs"
                    component={CarTabs}
                    options={{ headerShown: false }}
                />
                <StackTabs.Screen
                    name="AddressBook"
                    component={AddressBook}
                    options={{
                        headerTitle: "Address Book",
                        headerTitleAlign: "center",
                        headerTitleStyle: MyProfileTabsStyle.headerTitleStyle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={MyProfileTabsStyle.backButtonOpacity}
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
                                    style={
                                        MyProfileTabsStyle.backButtonTextView
                                    }
                                >
                                    <Text style={MyProfileTabsStyle.buttonText}>
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
                <StackTabs.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        headerTitle: "Settings",
                        headerTitleAlign: "center",
                        headerTitleStyle: MyProfileTabsStyle.headerTitleStyle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={MyProfileTabsStyle.backButtonOpacity}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <Ionicons
                                    name={"chevron-back-outline"}
                                    size={35}
                                    color={"#02A2CF"}
                                    style={MyProfileTabsStyle.blackButtonText}
                                />
                                <View
                                    style={
                                        MyProfileTabsStyle.backButtonTextView
                                    }
                                >
                                    <Text
                                        style={[
                                            MyProfileTabsStyle.buttonText,
                                            MyProfileTabsStyle.blackButtonText
                                        ]}
                                    >
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </StackTabs.Navigator>
        </View>
    );
};
export default MyProfileTabs;
