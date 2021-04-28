import { Dimensions, StyleSheet } from "react-native";

const AddLocationStyle = StyleSheet.create({
    /* container: {
        backgroundColor:"#F2F2F2",
        paddingTop: 10
    },*/
    inputContainer: {
        position:"absolute",
        top: 25,
        left: 10,
        right: 10,
        zIndex: 1,
    },

    textInput: {
        color: "black",
        fontSize: 18,
        borderColor: "black",
        borderWidth: 2,
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
