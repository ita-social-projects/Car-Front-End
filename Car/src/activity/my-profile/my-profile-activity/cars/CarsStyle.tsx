import { StyleSheet } from "react-native";
import DM from "../../../../components/styles/DM";

const CarsStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DM("white")
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
        color: DM("black")
    },

    model: {
        fontWeight: "bold",
        fontSize: 11,
        lineHeight: 16,
        color: DM("#414045")
    },

    message: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        fontSize: 15,
        color: DM("#414045")
    },

    carAvatar: {
        width: 38.5,
        height: 38.5,
        borderRadius: 38.5,
    }
});

export default CarsStyle;
