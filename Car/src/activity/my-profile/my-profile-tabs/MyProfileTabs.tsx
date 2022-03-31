import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import AvatarLogoTitle from "../../../components/avatar-logo-title/AvatarLogoTitle";
import CarTabs from "../my-profile-activity/cars/car-tabs/CarTabs";
import Details from "../my-profile-activity/details/Details";
import MyProfile from "../MyProfile";
import HeaderStyle from "../../../components/styles/HeaderStyle";
import AddressBookTabs from "../my-profile-activity/address-book/address-book-tabs/AddressBookTabs";
import SettingsTabs from "../my-profile-activity/settings/settings-tabs/SettingsTabs";
import HeaderBackButton from "../../../components/header-back-button/HeaderBackButton";
import { useTheme } from "../../../components/theme/ThemeProvider";
import MyProfileTabsStyle from "./MyProfileTabsStyle";
import Badges from "../my-profile-activity/badges/Badges";
import PhoneNumber from "../my-profile-activity/details/phonenumber/PhoneNumber";

const StackTabs = createStackNavigator();

const MyProfileTabs = () => {
    const { colors, isThemeDark } = useTheme();

    return (

        <View style={[HeaderStyle.container, { backgroundColor: colors.white }]}>
            <StackTabs.Navigator>
                <StackTabs.Screen
                    name="MyProfile"
                    component={MyProfile}
                    options={{
                        headerTitle: "",
                        headerStyle: [HeaderStyle.myProfileHeaderStyle,
                            { borderBottomColor: !isThemeDark ? colors.secondaryLight : colors.neutralLight }],
                        headerLeft: () =>

                            <TouchableOpacity
                                activeOpacity={1}
                                style={[MyProfileTabsStyle.profileInfo,
                                    {
                                        borderColor: colors.neutralLight,
                                        backgroundColor: colors.white,
                                        elevation: 7,
                                    }]}
                            >
                                <Animated.View >
                                    <AvatarLogoTitle />
                                </Animated.View>
                            </TouchableOpacity>

                    }}
                />
                <StackTabs.Screen
                    name="Preferences"
                    component={PhoneNumber}
                    options={{
                        headerTitle: "Preferences",
                        headerTitleAlign: "center",
                        headerStyle: [HeaderStyle.border,
                            { borderBottomColor: !isThemeDark ? colors.secondaryLight : colors.neutralLight }],
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton
                    }}
                />
                <StackTabs.Screen
                    name="Details"
                    component={Details}
                    options={{
                        headerTitle: "Details",
                        headerTitleAlign: "center",
                        headerStyle: [HeaderStyle.border,
                            { borderBottomColor: !isThemeDark ? colors.secondaryLight : colors.neutralLight }],
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
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
                <StackTabs.Screen
                    name="Badges"
                    component={Badges}
                    options={{
                        headerTitle: "Badges",
                        headerTitleAlign: "center",
                        headerStyle: [HeaderStyle.border,
                            { borderBottomColor: !isThemeDark ? colors.secondaryLight : colors.neutralLight }],
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton
                    }}
                />
            </StackTabs.Navigator>
        </View>
    );
};

export default MyProfileTabs;
