import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AddCars from "../car-activity/add-cars/AddCars";
import Cars from "../Cars";
import EditCars from "../car-activity/edit-cars/EditCars";
import HeaderStyle from "../../../../../components/styles/HeaderStyle";
import HeaderBackButton from "../../../../../components/header-back-button/HeaderBackButton";

const StackTabs = createStackNavigator();

const CarTabs = () => {
    return (
        <View style={{ flex: 1, alignSelf: "stretch" }}>
            <StackTabs.Navigator>
                <StackTabs.Screen
                    name="Cars"
                    component={Cars}
                    options={{
                        headerTitle: "Your Cars",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: HeaderBackButton
                    }}
                />
                <StackTabs.Screen
                    name="AddCars"
                    component={AddCars}
                    options={{
                        headerTitle: "Add a Car",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: HeaderBackButton,
                        headerRight: () => (
                            <TouchableOpacity>
                                <Ionicons
                                    name={"ellipsis-horizontal"}
                                    size={30}
                                    style={HeaderStyle.moreOptionsIcon}
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
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: HeaderBackButton,
                        headerRight: () => (
                            <TouchableOpacity>
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

export default CarTabs;