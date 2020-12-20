import React, { Component } from 'react'
import { Text, View, Button, Alert } from 'react-native';
import Chat from '../components/Chat/Chat';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleMessageClass from '../components/Chat/SimpleMessageClass';

const Stack = createStackNavigator();
export default class Messages extends React.Component {

    render() {

        return (
            <View style={{ flex: 1, alignSelf: "stretch" }}>

                <Stack.Navigator screenOptions={{
                    headerTitleAlign: 'center',
                }}>
                    <Stack.Screen name="Messages"
                        component={SimpleMessageClass}
                        options={{
                            headerTitle: "Messages",
                            headerRight: () => (
                                <TouchableOpacity style={{ right: 10 }} onPress={() => Alert.alert("Search button was clicked")}>
                                    <Ionicons name={'search'} size={30} />
                                </TouchableOpacity>
                            )
                        }} />
                    <Stack.Screen name="Chat" component={Chat} />
                </Stack.Navigator>
            </View>
        )
    }
}
