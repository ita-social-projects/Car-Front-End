import { StyleSheet } from "react-native";

const AddressBookStyle = StyleSheet.create({
    container: {
        flex: 1,
    },

    loading: {
        flex: 1
    },

    locationContainer: {
        alignSelf: "stretch",
        justifyContent: "center",
        padding: 8
    },

    name: {
        fontWeight: "bold",
        fontSize: 13,
        lineHeight: 18
    },

    address: {
        fontSize: 11,
        fontWeight: "normal",
        lineHeight: 15
    },

    message: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        fontSize: 14,
    },
});

export default AddressBookStyle;
