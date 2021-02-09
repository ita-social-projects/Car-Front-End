import React, { useContext, useEffect } from "react";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Messages from "../../../activity/messages/Messages";
import JourneyTabs from "../../../activity/journey/journey-tabs/JourneyTabs";
import Notifications from "../../../activity/notifications/Notifications";
import { AppTabsList } from "./AppTabsList";
import Ionicons from "react-native-vector-icons/Ionicons";
import MyProfileTabs from "../../../activity/my-profile/MyProfileTabs";
import "reflect-metadata";
import { AuthContext } from '../../../activity/auth/AuthProvider';
import * as signalR from "@microsoft/signalr";
import { routes } from "../../../../environment";


interface AppTabsProps{}

const Tabs = createBottomTabNavigator<AppTabsList>();

export const AppTabs: React.FC<AppTabsProps> =({})=>{
    const { unreadNumber, getUnreadNumber } = useContext(AuthContext);    
    const hubConnection = new signalR.HubConnectionBuilder().withUrl(routes.notificationUrl).build();
    hubConnection.start();

    useEffect(() => {
        hubConnection.on("sendToReact", (receivedMessage) => {
            getUnreadNumber();            
        })
    })

    useEffect(() => {
        getUnreadNumber();        
    },[])

    return(
        <Tabs.Navigator 
        initialRouteName="JourneyTabs"
        sceneContainerStyle={{alignItems:"center"}}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name){
                case "Messages": 
                    iconName = 'chatbubbles';
                break;
                case "MyProfileTabs": 
                    iconName = 'person';
                break;
                case "JourneyTabs":
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
            <Tabs.Screen options={{tabBarLabel: "Journey"}} name="JourneyTabs" component={JourneyTabs}/>
            {unreadNumber == ''?
            (
                <Tabs.Screen name="Notifications" component={Notifications}/>
            ):
            (
                <Tabs.Screen name="Notifications" component={Notifications} options = {{tabBarBadge: Number(unreadNumber) }}/>
            )}
        </Tabs.Navigator>
    )
}
