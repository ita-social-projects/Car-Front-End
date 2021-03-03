import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AddressBookTabsStyle from "./AddressBookTabsStyle";
import * as navigation from "../../../../../components/navigation/Navigation";
import AddressBook from "../AddressBook";
import SetPlace from "../add-locations/SetPlace";

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
                        headerTitleStyle: AddressBookTabsStyle.headerTitleStyle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={AddressBookTabsStyle.backButtonOpacity}
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
                                        AddressBookTabsStyle.backButtonTextView
                                    }
                                >
                                    <Text
                                        style={AddressBookTabsStyle.buttonText}
                                    >
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
                <StackTabs.Screen
                    name="SetPlace"
                    component={SetPlace}
                    options={{
                        headerTitle: "Add Address",
                        headerTitleAlign: "center",
                        headerTitleStyle: AddressBookTabsStyle.headerTitleStyle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={AddressBookTabsStyle.backButtonOpacity}
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
                                        AddressBookTabsStyle.backButtonTextView
                                    }
                                >
                                    <Text
                                        style={AddressBookTabsStyle.buttonText}
                                    >
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
                                    style={AddressBookTabsStyle.moreOptionsIcon}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </StackTabs.Navigator>
        </View>
    );
}
