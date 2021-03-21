import { StyleSheet } from "react-native";

const CarDropDownPickerStyle = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },

    dropDownStyle: {
        borderWidth: 2,
        borderTopWidth: 0,
        paddingHorizontal: 4
    },

    placeholderStyle: {
        paddingVertical: 10,
        fontSize: 16,
        lineHeight: 24,
    },

    itemStyle: {
        justifyContent: "flex-start",
        marginTop: 5,
        paddingLeft: 8
    },

    disabledStyle: {
        borderColor: "gray"
    },

    requiredPointer: {
        position: "absolute",
        left: 18,
        top: 15
    },
});

export default CarDropDownPickerStyle;
