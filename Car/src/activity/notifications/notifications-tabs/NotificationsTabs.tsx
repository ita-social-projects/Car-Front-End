import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import HeaderStyle from "../../../components/styles/HeaderStyle";
import Notifications from "../Notifications";

const StackTabs = createStackNavigator();

const NotificationsTabs = (props: any) => {
    const hubConnection = props.SignalRHubConnection;

    console.log("-", 2000);
    console.log(hubConnection);
    console.log("!", 2000);
    
    return (
        <View style={HeaderStyle.container}>
            <StackTabs.Navigator>
                <StackTabs.Screen
                    name="Notifications"
                    component={(navprops2) => (
                        <Notifications
                            {...navprops2}
                            SignalRHubConnection={props.SignalRHubConnection}
                        />
                    )}
                    options={{
                        headerTitle: "Notifications",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: () => <View />
                    }}
                />
            </StackTabs.Navigator>
        </View>
    );
};

export default NotificationsTabs;
