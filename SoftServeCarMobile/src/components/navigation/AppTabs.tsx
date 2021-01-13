import React from "react";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Messages from "../../activity/Messages";
import Journey from "../../activity/Journey";
import Notifications from "../../activity/Notifications";
import { AppTabsList } from "./AppTabsList";
import Ionicons from "react-native-vector-icons/Ionicons";
import MyProfileTabs from "../../activity/my-profile/MyProfileTabs";

interface AppTabsProps{}

const Tabs = createBottomTabNavigator<AppTabsList>();

export const AppTabs: React.FC<AppTabsProps> =({})=>{
    return(
        <Tabs.Navigator
        initialRouteName="Journey"
        sceneContainerStyle={{alignItems:"center"}}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name){
                case "Messages":
                    iconName = 'chatbubbles';
                    break;
                case "MyProfileTabs":
                    iconName = 'person';
                    break;
                case "Journey":
                    iconName = 'car';
                    break;
                case "Notifications":
                    iconName = 'notifications';
                    break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            labelStyle: {
                fontStyle: 'normal',
                fontSize: 10,
                fontWeight: '800',
                fontFamily: 'OpenSans-Bold',
                lineHeight: 16
            },
            activeTintColor: 'black',
            inactiveTintColor: '#AAA9AE',
          }}
        >
            <Tabs.Screen name="Messages" component={Messages}/>
            <Tabs.Screen options={{tabBarLabel: "My Profile"}} name="MyProfileTabs" component={MyProfileTabs}/>
            <Tabs.Screen name="Journey" component={Journey}/>
            <Tabs.Screen name="Notifications" component={Notifications}/>
        </Tabs.Navigator>
    )
}
