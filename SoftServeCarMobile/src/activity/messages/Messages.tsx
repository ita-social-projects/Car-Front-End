import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Alert, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons";
import Chat from '../chat/Chat';
import SimpleMessage from '../chat/simple-message/SimpleMessage';
import MessagesStyle from './MessagesStyle';

const Stack = createStackNavigator();
export default class Messages extends React.Component {

    render() {

        return (
            <View style={MessagesStyle.container}>

                <Stack.Navigator screenOptions={{
                    headerTitleAlign: 'center',
                }}>
                    <Stack.Screen name="Messages"
                        component={SimpleMessage}
                        options={{
                            headerTitle: "Messages",
                            headerRight: () => (
                                <TouchableOpacity style={MessagesStyle.messages} onPress={() => Alert.alert("Search button was clicked")}>
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
