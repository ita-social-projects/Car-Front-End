import React from "react";
import { Text, View } from "react-native";
import ErrorAlert from "../../../../components/error-alert/ErrorAlert";
import AddressBookStyle from "./AddressBookStyle";

const AddressBook = () => {
    ErrorAlert();

    return (
        <View style={AddressBookStyle.container}>
            <Text>Address book</Text>
        </View>
    );
};

export default AddressBook;
