import React, { Component } from "react";
import { Text, View } from "react-native";
import AddressBookStyle from "./AddressBookStyle";

const AddressBook = () => {
    return (
        <View style={AddressBookStyle.container}>
            <Text>Address book</Text>
        </View>
    );
};

export default AddressBook;
