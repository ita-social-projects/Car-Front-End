import { StyleSheet } from "react-native";

const LocationDropDownPickerStyle = StyleSheet.create({
    dropDownStyle: {
        marginTop: 5,
        borderWidth: 1,
        borderTopWidth: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },

    container: {
        marginBottom: 150
    },

    style: {
        alignItems: "center",
        borderWidth: 1,
        paddingVertical: 3,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,

    },

    arrow: {
        marginRight: 5,
    },

    staticPlaceholder: {
        fontSize: 18,
        lineHeight: 24,
        top:-1,
        left:-4,
        zIndex: 10,
    },

    itemStyle: {
        justifyContent: "flex-start",
        paddingLeft: 8,
    },

    labelStyle:{
        fontSize: 16,
        top:3,
        left:3,
    },

    selectedLabelStyle: {
        fontSize: 18,
        top:0,
        left:3,
    }
});

export default LocationDropDownPickerStyle;