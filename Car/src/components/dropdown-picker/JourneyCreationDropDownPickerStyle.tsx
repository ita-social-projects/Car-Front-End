import { StyleSheet } from "react-native";

const JourneyCreationDropDownPickerStyle = StyleSheet.create({
    dropDownStyle: {
        borderWidth: 1,
        borderTopWidth: 0,
        paddingHorizontal: 4,
        paddingLeft: 10,
        position: "absolute",
    },

    style: {
        borderWidth: 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },

    arrow: {
        marginRight: 8,
    },

    placeholderStyle: {
        fontSize: 16,
        lineHeight: 24,
        position: "absolute",
        marginTop: 12,
        marginLeft: 15,
        color: "#909095",
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
