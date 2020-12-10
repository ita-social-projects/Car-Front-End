import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Home from '../components/Chat/Home';
import Chat from '../components/Chat/Chat';

export default class Messages extends Component {
    render() {
        return (
            <View>
                <Chat />
            </View>
        )
    }
}
