import React from "react";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Messages from "../../activity/Messages";
import MyProfile from "../../activity/MyProfile";
import Journey from "../../activity/Journey";
import Notifications from "../../activity/Notifications";

interface AppTabsProps{

}

const Tabs = createBottomTabNavigator();

export const AppTabs: React.FC<AppTabsProps> =({})=>{
    return(
            <Tabs.Navigator initialRouteName="Journey" sceneContainerStyle={{alignItems:"center"}}>
                <Tabs.Screen name="Messages" component={Messages}/>
                <Tabs.Screen options={{tabBarLabel: "My Profile"}} name="MyProfile" component={MyProfile}/>
                <Tabs.Screen name="Journey" component={Journey}/>
                <Tabs.Screen name="Notifications" component={Notifications}/>
            </Tabs.Navigator>
    )
}


