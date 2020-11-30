import React, { useState, useEffect, useContext } from "react";
import { createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";
import {Login} from "../../activity/Login";
import { AuthParamList } from "./AuthParamList";
import { ActivityIndicator,View, StyleSheet, Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import {AuthContext} from "./AuthProvider";
import { AppTabs } from "./AppTabs";


interface RoutesProps
{

}

const Stack  = createStackNavigator<AuthParamList>();

// headerTitleAlign:"center"

export const Routes: React.FC<RoutesProps> = ({})=>{
    const { user, login } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // check if the user is logged in or not
      AsyncStorage.getItem("user")
        .then(userString => {
          if (userString) {
            // decode it
            login();
          }
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);
  
    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }



    return(
        <NavigationContainer>
            {user ? (<AppTabs/>): 
            (
                <Stack.Navigator screenOptions={{headerShown:false}}>
                    <Stack.Screen name="Login" component={Login}/>
                </Stack.Navigator>
            )
            }
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})

