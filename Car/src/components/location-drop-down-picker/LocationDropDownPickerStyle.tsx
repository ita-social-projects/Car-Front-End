import { StyleSheet } from "react-native";

const LocationDropDownPickerStyle = StyleSheet.create({
    dropDownStyle: {
        backgroundColor: "#fafafa",
        marginTop: 5,
        borderWidth: 2,
        borderTopWidth: 0,
        borderColor: "white",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },

    container: {
        marginBottom: 150
    },

    style: {
        alignItems: "center",
        borderColor: "black",
        borderWidth: 2,
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
        color: "gray",
        top:-1,
        left:-4,
        zIndex: 10,
    },

    divider: {
        backgroundColor: "gray",
    },

    itemStyle: {
        justifyContent: "flex-start",
        paddingLeft: 8,
    },

    labelStyle:{
        fontSize: 16,
        color:"black",
        top:3,
        left:3,
    },

    selectedLabelStyle: {
        fontSize: 18,
        color:"black",
        top:0,
        left:3,
    }
});

export default LocationDropDownPickerStyle;