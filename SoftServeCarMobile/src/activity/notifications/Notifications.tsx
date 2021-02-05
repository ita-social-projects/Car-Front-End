import React, { Component } from 'react'
import { Text, View } from 'react-native'
import NotificationsStyle from './NotificationsStyle'

export default class Notifications extends Component {
    render() {
        return (
            <View style={NotificationsStyle.container}>
                <Text>Notifications</Text>
            </View>
        )
    }
}
