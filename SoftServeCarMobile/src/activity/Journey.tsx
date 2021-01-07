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
                <Button color="black" title="401 exception"
                    onPress={function note() {
                        axiosInst.get(baseUrl+"/ExceptionTest/exception401")
                            .then(response => {
                                return response;
                            })
                            .catch((error) => {
                                return error;
                            });
                    }}></Button>
            </View>
        )
    }
}
