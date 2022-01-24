import { StyleSheet } from "react-native";

const AddressInputPageStyle = StyleSheet.create({
    inputContainer: {
        position: "absolute",
        top: 9,
        left: 10,
        right: 10,
        width:"85%"
    },
    mapContainer: {
        zIndex: -2,
        height: "100%",
    },
});

export default AddressInputPageStyle;