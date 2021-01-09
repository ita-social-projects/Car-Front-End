import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { baseUrl } from '../api/ApiEndPoints';
import { axiosInstance } from '../api/Interceptor';

const axiosInst = axiosInstance;
export default class Journey extends Component {
    render() {
        return (
            <View>
                <Text>Journey</Text>
            </View>
        )
    }
}
