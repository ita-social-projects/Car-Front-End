import React, { Component } from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native";
import AddressBookStyle from "./AddressBookStyle";

export default function AddressBook(props: any) {
    return (
        <View style={AddressBookStyle.container}>
            <FlatList
                data={[
                    { key: "a", name: "a" },
                    { key: "b", name: "b" }
                ]}
                renderItem={({ item }) => <Text>{item.name}</Text>}
            />
        </View>
    );
}
