import React, { useState, useEffect, useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "../../activity/Login";
import { AuthParamList } from "../auth/AuthParamList";
import { ActivityIndicator, View, StyleSheet, Text } from "react-native";
import { AuthContext } from "../auth/AuthProvider";
import { AppTabs } from "./AppTabs";
import { centerStyle } from "../styles/centerStyle";
import { navigationRef } from "./RootNavigation";
import { Exception } from "../../activity/Exception";


interface RoutesProps {

}

const Stack = createStackNavigator<AuthParamList>();

export const Routes: React.FC<RoutesProps> = ({ }) => {
  const { user, loadStorageUser } = useContext(AuthContext);
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

  return (
    <NavigationContainer ref={navigationRef}>
      {
        user ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='AppTabs' component={AppTabs} options={{ headerShown: false }} />
            <Stack.Screen name='Exception' component={Exception} />
          </Stack.Navigator>
        ) :
          (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
              <Stack.Screen name='Login' component={Login} />
              <Stack.Screen name='Exception' component={Exception} />
            </Stack.Navigator>
          )
      }
    </NavigationContainer>
  );
}