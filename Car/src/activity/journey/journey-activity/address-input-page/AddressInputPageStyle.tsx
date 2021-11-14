import { StyleSheet } from "react-native";

const AddressInputPageStyle = StyleSheet.create({
    inputContainer: {
        position: "absolute",
        top: 32,
        left: 10,
        right: 10,
    },
    mapContainer: {
        zIndex: -2,
        height: "100%",
    },
});

export default AddressInputPageStyle;