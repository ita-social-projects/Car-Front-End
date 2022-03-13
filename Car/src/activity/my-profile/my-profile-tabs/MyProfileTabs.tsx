import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import CarTabs from "../my-profile-activity/cars/car-tabs/CarTabs";
import Preferences from "../my-profile-activity/preferences/Preferences";
import MyProfile from "../MyProfile";
import AddressBookTabs from "../my-profile-activity/address-book/address-book-tabs/AddressBookTabs";
import HeaderBackButton from "../../../components/header-back-button/HeaderBackButton";
import { useTheme } from "../../../components/theme/ThemeProvider";
import MyProfileTabsStyle from "./MyProfileTabsStyle";
import Badges from "../my-profile-activity/badges/Badges";
import HeaderStyle from "../../../components/styles/HeaderStyle";

const StackTabs = createStackNavigator();

const MyProfileTabs = () => {
    const { colors, isThemeDark } = useTheme();

    return (

        <View style={[MyProfileTabsStyle.container, { backgroundColor: colors.white }]}>
            <StackTabs.Navigator>
                <StackTabs.Screen
                    name="MyProfile"
                    component={MyProfile}
                    options={{
                        headerTitle: "",
                        headerStyle: [MyProfileTabsStyle.myProfileHeaderStyle,
                            { borderBottomColor: !isThemeDark ? colors.secondaryLight : colors.neutralLight }],
                    }}
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
                <StackTabs.Screen
                    name="Preferences"
                    component={Preferences}
                    options={{
                        headerTitle: "Preferences",
                        headerTitleAlign: "center",
                        headerStyle: [
                            { borderBottomColor: !isThemeDark ? colors.secondaryLight : colors.neutralLight }],
                        headerTitleStyle: [MyProfileTabsStyle.headerTitleStyle, { color: colors.primary }],
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

            </StackTabs.Navigator>
        </View>
    );
};

export default MyProfileTabs;
