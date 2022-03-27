import { StyleSheet } from "react-native";
import { DEFAULT_INPUT_LEFT_PADDING } from "../../constants/StylesConstants";

const PhoneNumberInputStyle = StyleSheet.create({
    phoneNumberText: {
        borderWidth: 2,
        paddingLeft: DEFAULT_INPUT_LEFT_PADDING,
        fontSize: 18,
    },

    closeButtonImage: {
        justifyContent: "center",
        alignItems: "center",
    },

    closeButton: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 50,
    },

    closeButtonParrent: {
        position: "absolute",
        right: 0,
    }
});

export default PhoneNumberInputStyle;