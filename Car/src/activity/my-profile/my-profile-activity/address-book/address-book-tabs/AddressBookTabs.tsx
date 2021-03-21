import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import HeaderStyle from "../../../../../components/styles/HeaderStyle";
import AddressBook from "../AddressBook";
import SetPlace from "../address-book-activity/add-locations/SetPlace";
import HeaderEllipsis from "../../../../../components/header-ellipsis/HeaderEllipsis";
import HeaderBackButton from "../../../../../components/header-back-button/HeaderBackButton";
import DM from "../../../../../components/styles/DM";

const StackTabs = createStackNavigator();

export default function AddressBookTabs () {
    return (
        <View style={{ flex: 1, alignSelf: "stretch" }}>
            <StackTabs.Navigator>
                <StackTabs.Screen
                    name="AddressBook"
                    component={AddressBook}
                    options={{
                        headerTitle: "Address Book",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerLeft: HeaderBackButton
                    }}
                />
                <StackTabs.Screen
                    name="SetPlace"
                    component={SetPlace}
                    options={{
                        headerTitle: "Add Address",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerLeft: HeaderBackButton,
                        headerRight: HeaderEllipsis
                    }}
                />
            </StackTabs.Navigator>
        </View>
    );
}
