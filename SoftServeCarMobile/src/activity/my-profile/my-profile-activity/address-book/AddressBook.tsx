import React, { Component } from "react";
import { Text, View } from "react-native";
import AddressBookStyle from "./AddressBookStyle";

export default class AddressBook extends Component {
    render() {
        return (
            <View style={AddressBookStyle.container}>
                <Text>Address book</Text>
            </View>
        );
    }
}
