import { StyleSheet } from "react-native";
import DM from "../styles/DM";

const CarDropDownPickerStyle = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: DM("black"),
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },

    dropDownStyle: {
        borderWidth: 2,
        borderColor: DM("black"),
        borderTopWidth: 0,
        paddingHorizontal: 4
    },

    placeholderStyle: {
        paddingVertical: 10,
        fontSize: 16,
        lineHeight: 24,
        color: DM("black")
    },

    itemStyle: {
        justifyContent: "flex-start",
        backgroundColor: DM("#F0F0F0"),
        marginTop: 5,
        paddingLeft: 8
    },

    disabledStyle: {
        borderColor: "gray"
    },

    requiredPointer: {
        color: DM("red"),
        position: "absolute",
        left: 18,
        top: 15
    },

    initialPlaceHolder: {
        color: DM("#909095")
    }
});

export default CarDropDownPickerStyle;
