import { StyleSheet } from "react-native";

const CarsStyle = StyleSheet.create({
    container: {
        flex: 1,
    },

    loading: {
        flex: 1
    },

    carContainer: {
        alignSelf: "stretch",
        justifyContent: "center",
        padding: 8
    },

    brand: {
        fontWeight: "bold",
    },

    model: {
        fontWeight: "bold",
        fontSize: 11,
        lineHeight: 16,
    },

    message: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        fontSize: 15,
    },

    carAvatar: {
        width: 38.5,
        height: 38.5,
        borderRadius: 38.5,
    }
});

export default CarsStyle;
