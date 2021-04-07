import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GooglePlaceData } from "react-native-google-places-autocomplete";
import DM from "../../../../../../components/styles/DM";
import Ionicons from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 100
    },
    iconContainer: {
        width: 50
    },
    iconInnerContainer: {
        backgroundColor: "#a2a2a2",
        padding: 5,
        borderRadius: 50,
        marginRight: 15
    }
});

interface AddressInputRowProps {
    data: GooglePlaceData
}

const AddressInputRow = (props: AddressInputRowProps) => {
    return (
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                <View style={styles.iconInnerContainer}>
                    <Ionicons
                        name={(props.data as any)?.iconName ?? "location"}
                        size={25}
                        color={DM("#414045")}
                    />
                </View>
            </View>
            <Text>{props.data.description || (props.data as any).vicinity}</Text>
        </View>
    );
};

export default AddressInputRow;