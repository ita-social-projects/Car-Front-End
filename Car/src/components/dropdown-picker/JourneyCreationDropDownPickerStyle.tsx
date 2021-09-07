import { StyleSheet } from "react-native";

const JourneyCreationDropDownPickerStyle = StyleSheet.create({
    dropDownStyle: {
        borderWidth: 2,
        borderTopWidth: 0,
        paddingHorizontal: 4,
    },

    style: {
        borderWidth: 2,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },

    arrow: {
        marginRight: 8,
    },

    placeholderStyle: {
        fontSize: 16,
        lineHeight: 24,
        position: "absolute",
        marginTop: 11,
        marginLeft: 15,
        color: "#909095",
        zIndex: 10
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
