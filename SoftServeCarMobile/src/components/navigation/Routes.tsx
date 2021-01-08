import React, { useEffect, useContext } from "react";
import { createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";
import {Login} from "../../activity/login/Login";
import { AuthParamList } from "../auth/AuthParamList";
import {AuthContext} from "../auth/AuthProvider";
import { AppTabs } from "./AppTabs";
import { navigationRef } from "./RootNavigation";
import { Exception } from "../../activity/exception/Exception";


interface RoutesProps
{}

const Stack  = createStackNavigator<AuthParamList>();

export const Routes: React.FC<RoutesProps> = ({})=>{
    const { user,loadStorageUser } = useContext(AuthContext);   

    useEffect(() => {     
      loadStorageUser(); 
    }, []);

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
            <Stack.Navigator screenOptions={{headerShown:false}} >              
               <Stack.Screen name = 'Login' component = {Login} />  
               <Stack.Screen name = 'Exception' component = {Exception}/>          
            </Stack.Navigator>
          )
          }
      </NavigationContainer>
  );
}