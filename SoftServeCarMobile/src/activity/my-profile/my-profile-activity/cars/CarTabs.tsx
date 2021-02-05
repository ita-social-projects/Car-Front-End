import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import AddCars from "../../../../components/Cars/AddCars/AddCars";
import Cars from "../../../../components/Cars/Cars";
import EditCars from "../../../../components/Cars/EditCars/EditCars";

const StackTabs = createStackNavigator();

export default function CarTabs() {
    return (
        <View style={{ flex: 1, alignSelf: "stretch" }}>
            <StackTabs.Navigator>
                <StackTabs.Screen
                    name="Cars"
                    component={Cars}
                    options={{
                        title: "Your Cars",
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            textAlign: "center"
                        }
                    }}
                />
                <StackTabs.Screen
                    name="AddCars"
                    component={AddCars}
                    options={{
                        title: "Add a Car",
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            textAlign: "center"
                        }
                    }}
                />
                <StackTabs.Screen
                    name="EditCars"
                    component={EditCars}
                    options={{
                        title: "Edit a Car",
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            textAlign: "center"
                        }
                    }}
                />
            </StackTabs.Navigator>
        </View>
    );
}
