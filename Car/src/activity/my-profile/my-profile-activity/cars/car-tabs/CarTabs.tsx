import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AddCars from "../add-cars/AddCars";
import Cars from "../Cars";
import EditCars from "../edit-cars/EditCars";
import CarTabsStyle from "./CarTabsStyle";
import * as navigation from "../../../../../components/navigation/Navigation";

const StackTabs = createStackNavigator();

export default function CarTabs() {
    return (
        <View style={{ flex: 1, alignSelf: "stretch" }}>
            <StackTabs.Navigator>
                <StackTabs.Screen
                    name="Cars"
                    component={Cars}
                    options={{
                        headerTitle: "Your Cars",
                        headerTitleAlign: "center",
                        headerTitleStyle: CarTabsStyle.headerTitleStyle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={CarTabsStyle.backButtonOpacity}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <Ionicons
                                    name={"chevron-back-outline"}
                                    size={35}
                                    color={"#02A2CF"}
                                />
                                <View style={CarTabsStyle.backButtonTextView}>
                                    <Text style={CarTabsStyle.buttonText}>
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
                <StackTabs.Screen
                    name="AddCars"
                    component={AddCars}
                    options={{
                        headerTitle: "Add a Car",
                        headerTitleAlign: "center",
                        headerTitleStyle: CarTabsStyle.headerTitleStyle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={CarTabsStyle.backButtonOpacity}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <Ionicons
                                    name={"chevron-back-outline"}
                                    size={35}
                                    color={"#02A2CF"}
                                />
                                <View style={CarTabsStyle.backButtonTextView}>
                                    <Text style={CarTabsStyle.buttonText}>
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
                                    style={CarTabsStyle.moreOptionsIcon}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
                <StackTabs.Screen
                    name="EditCars"
                    component={EditCars}
                    options={{
                        headerTitle: "Your Car",
                        headerTitleAlign: "center",
                        headerTitleStyle: CarTabsStyle.headerTitleStyle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={CarTabsStyle.backButtonOpacity}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <Ionicons
                                    name={"chevron-back-outline"}
                                    size={35}
                                    color={"#02A2CF"}
                                />
                                <View style={CarTabsStyle.backButtonTextView}>
                                    <Text style={CarTabsStyle.buttonText}>
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
                                    style={CarTabsStyle.moreOptionsIcon}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </StackTabs.Navigator>
        </View>
    );
}
