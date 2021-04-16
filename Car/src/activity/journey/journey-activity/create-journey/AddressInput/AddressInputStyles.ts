import { StyleSheet } from "react-native";

const AddressInputStyles = StyleSheet.create({
    placeholder: {
        position: "absolute",
        left: 15,
        top: 10,
        zIndex: 1,
        fontSize: 18,
        color: "grey"
    },
    listView: {
        position: "relative",
        zIndex: 100,
        height: 270
    },
    textInput: {
        color: "black",
        fontSize: 18,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 0,
        paddingLeft: 58,
        paddingRight: 45,
        paddingVertical: 10
    },
    predefinedPlacesDescription: {
        color: "#1faadb",
    },
    marker: {
        position: "absolute",
        top: 8,
        right: 20
    }
});

export default AddressInputStyles;