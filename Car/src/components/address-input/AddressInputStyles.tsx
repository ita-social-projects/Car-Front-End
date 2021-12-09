import { StyleSheet } from "react-native";

const AddressInputStyles = StyleSheet.create({
    placeholder: {
        position: "absolute",
        left: 15,
        top: 10,
        zIndex: 1,
        fontSize: 18,
    },
    listView: {
        position: "absolute",
        top: 50,
        zIndex: 1,
        height: 254,
    },
    textInput: {
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 0,
        paddingLeft: 58,
        paddingRight: 45,
        paddingVertical: 10
    },
    predefinedPlacesDescription: {
        color: "#1faadb",
    },
    clearIcon: {
        position: "absolute",
        top: 10,
        right: 15
    },
    marker: {
        position: "absolute",
        top: 10,
        right: 15
    }
});

export default AddressInputStyles;