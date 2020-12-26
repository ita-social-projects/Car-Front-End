import React, { useState, useEffect, useContext } from "react";
import { createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";
import {Login} from "../../activity/Login";
import { AuthParamList } from "./AuthParamList";
import { ActivityIndicator,View } from "react-native";
import {AuthContext} from "./AuthProvider";
import { AppTabs } from "./AppTabs";
import { centerStyle } from "../styles/centerStyle";
import { Exception } from "../../activity/Exception";
import { navigationRef } from './RootNavigation';

interface RoutesProps
{

}

const Stack  = createStackNavigator<AuthParamList>();
export const Routes: React.FC<RoutesProps> = ({})=>{
    const { user,logout, loadStorageUser } = useContext(AuthContext);   
    const [loading, setLoading] = useState(true);   

    useEffect(() => {     
      loadStorageUser(); 
      setLoading(false);       
    }, []);  
   
    if (loading) {
      return (
        <View style={centerStyle.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }     
    return(    
      <NavigationContainer ref = {navigationRef}>
          {               
           user ? (
              <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name = 'AppTabs' component = {AppTabs} options={{headerShown:false}}/>
                <Stack.Screen name = 'Exception' component = {Exception}/>
              </Stack.Navigator>
           ): 
          (             
            <Stack.Navigator >              
               <Stack.Screen name = 'Login' component = {Login} options={{headerShown:false}}/>               
            </Stack.Navigator>
          )
          }
      </NavigationContainer>
  );
}
