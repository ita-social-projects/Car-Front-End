import { StyleSheet } from "react-native";

const JourneyCreationDropDownPickerStyle = StyleSheet.create({
    dropDownStyle: {
        backgroundColor: "#fafafa",
        marginTop: 16,
        paddingHorizontal: 14,
        width: "90%",
        marginHorizontal: 20,
        borderWidth: 2,
        borderTopWidth: 0,
        borderColor: "gray",
    },

    style: {
        marginTop: 24,
        marginHorizontal: 20,
        alignItems: "center",
        borderColor: "black",
        borderWidth: 2,
        paddingVertical: 4,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },

    arrow: {
        marginRight: 8,
    },

    staticPlaceholder: {
        fontSize: 16,
        lineHeight: 24,
        position: "absolute",
        color: "gray",
        marginTop: 35,
        marginLeft: 35,
        zIndex: 10,

    },

    divider: {
        backgroundColor: "gray",
    },

    searchable: {
        marginBottom: 0
    },

    selectedLabelStyle: {
        fontWeight: "bold",
    }
});

export default JourneyCreationDropDownPickerStyle;