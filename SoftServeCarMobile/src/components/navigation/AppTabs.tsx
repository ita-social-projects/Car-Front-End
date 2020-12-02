import React from "react";
import {StyleSheet} from "react-native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Messages from "../../activity/Messages";
import MyProfile from "../../activity/MyProfile";
import Journey from "../../activity/Journey";
import Notifications from "../../activity/Notifications";

interface AppTabsProps{

}

const Tabs = createBottomTabNavigator();
//, tabBarIcon=""
export const AppTabs: React.FC<AppTabsProps> =({})=>{
    return(
        <Tabs.Navigator initialRouteName="Journey" sceneContainerStyle={{alignItems:"center"}}>
            <Tabs.Screen name="Messages" component={Messages}/>
            <Tabs.Screen options={{tabBarLabel: "My Profile"/*, tabBarIcon: styles.container*/}} name="MyProfile" component={MyProfile}/>
            <Tabs.Screen name="Journey" component={Journey}/>
            <Tabs.Screen name="Notifications" component={Notifications}/>
        </Tabs.Navigator>
    )
}


/*const styles = StyleSheet.create({
    container:{
        position: "absolute",
        width: 20,
        height: 16,
        //left: calc(50% - 20px/2),
        //top: calc(50% - 16px/2),
        
        
        background: 414045
    }
})*/