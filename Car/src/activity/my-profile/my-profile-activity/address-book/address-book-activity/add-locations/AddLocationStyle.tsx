import { Dimensions, StyleSheet } from "react-native";

const AddLocationStyle = StyleSheet.create({

    inputContainer: {
        position:"absolute",
        top: 25,
        left: 10,
        right: 10,
    },
    mapContainer :{
        zIndex:-2,
        height: "100%",
    },
    textInput: {
        color: "black",
        backgroundColor: "white",
        top: 10,
        fontSize: 18,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 0,
        paddingLeft: 15,
        paddingRight: 45,
        paddingVertical: 6,
    },

    dropDownPicker: {
        marginBottom: 16
    },

    saveButton: {
        paddingHorizontal: 16,
        paddingVertical: 14,
        top: Dimensions.get("screen").height - 236,
        left: Dimensions.get("screen").width - 90,
        position: "absolute",
        backgroundColor: "#000000",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },

    saveButtonSaveText: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 20
    }

});

export default AddLocationStyle;
