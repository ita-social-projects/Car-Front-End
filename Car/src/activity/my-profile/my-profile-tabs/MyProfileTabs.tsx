import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import AvatarLogoTitle from "../../../components/avatar-logo-title/AvatarLogoTitle";
import CarTabs from "../my-profile-activity/cars/car-tabs/CarTabs";
import Details from "../my-profile-activity/details/Details";
import Preferences from "../my-profile-activity/preferences/Preferences";
import MyProfile from "../MyProfile";
import HeaderStyle from "../../../components/styles/HeaderStyle";
import AddressBookTabs from "../my-profile-activity/address-book/address-book-tabs/AddressBookTabs";
import SettingsTabs from "../my-profile-activity/settings/settings-tabs/SettingsTabs";
import HeaderBackButton from "../../../components/header-back-button/HeaderBackButton";

const StackTabs = createStackNavigator();

const MyProfileTabs = () => {

    return (
        <View style={HeaderStyle.container}>
            <StackTabs.Navigator>
                <StackTabs.Screen
                    name="MyProfile"
                    component={MyProfile}
                    options={{
                        headerTitle: "",
                        headerStyle: HeaderStyle.myProfileHeaderStyle,
                        headerLeft: () => <AvatarLogoTitle />
                    }}
                />
                <StackTabs.Screen
                    name="Preferences"
                    component={Preferences}
                    options={{
                        headerTitle: "Preferences",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: HeaderBackButton
                    }}
                />
                <StackTabs.Screen
                    name="Details"
                    component={Details}
                    options={{
                        headerTitle: "Details",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: HeaderBackButton
                    }}
                />
                <StackTabs.Screen
                    name="CarTabs"
                    component={CarTabs}
                    options={{ headerShown: false }}
                />
                <StackTabs.Screen
                    name="AddressBookTabs"
                    component={AddressBookTabs}
                    options={{ headerShown: false }}
                />
                <StackTabs.Screen
                    name="SettingsTabs"
                    component={SettingsTabs}
                    options={{ headerShown: false }}
                />
            </StackTabs.Navigator>
        </View>
    );
};

export default MyProfileTabs;
