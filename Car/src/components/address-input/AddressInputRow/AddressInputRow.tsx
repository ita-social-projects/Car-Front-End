import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GooglePlaceData } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../theme/ThemeProvider";

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 100
    },
    iconContainer: {
        marginVertical: -5,
        marginRight: 15
    }
});

const AddressInputRow = ({ data }: {data: GooglePlaceData}) => {
    const { DM } = useTheme();

    return (
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                <Ionicons
                    name={(data as any)?.iconName ?? "location"}
                    size={25}
                    color={DM("#414045")}
                />
            </View>
            <Text style={{ color: DM("black") }}>{data.description || (data as any).vicinity}</Text>
        </View>
    );
};

export default AddressInputRow;