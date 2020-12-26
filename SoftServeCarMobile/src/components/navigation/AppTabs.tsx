import React from "react";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Messages from "../../activity/Messages";
import MyProfile from "../../activity/MyProfile";
import Journey from "../../activity/Journey";
import Notifications from "../../activity/Notifications";
import { AppTabsList } from "./AppTabsList";
import Ionicons from "react-native-vector-icons/Ionicons";

interface AppTabsProps{

}

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
                case "MyProfile": 
                    iconName = 'person';
                    break;
                case "Journey": 
                    iconName = 'car';
                    break;
                case "Notifications": 
                    iconName = 'notifications';
                    break;
            }
            // https://github.com/oblador/react-native-vector-icons 
            // this library has additional in root conditions for each OS
            return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            labelStyle: {
                fontStyle: 'normal',
                fontSize: 10,
                fontWeight: '800',
                fontFamily: 'OpenSans-Bold', //doesn't work because react native have not easy way to use custom fonts
                lineHeight: 16
            },
            activeTintColor: 'black',
            inactiveTintColor: '#AAA9AE',
          }}
        >
            <Tabs.Screen name="Messages" component={Messages}/>
            <Tabs.Screen options={{tabBarLabel: "My Profile"}} name="MyProfile" component={MyProfile}/>
            <Tabs.Screen name="Journey" component={Journey}/>
            <Tabs.Screen name="Notifications" component={Notifications}/>
        </Tabs.Navigator>
    )
}
