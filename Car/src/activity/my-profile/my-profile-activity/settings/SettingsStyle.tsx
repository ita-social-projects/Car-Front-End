import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Font from "../../../../data/fonts/Font";

const SettingsStyle = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },

    avatarContainer: {
        height: Dimensions.get("window").width,
        backgroundColor: "#FFFFFF",
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },

    uploadButton: {
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#000000",
        marginRight: 24,
        marginBottom: 19
    },

    uploadButtonText: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 20
    },

    avatar: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        position: "absolute",
        overlayColor: "#000000"
    },

    overlay: {
        top: -Dimensions.get("window").width / 2,
        right: 0,
        bottom: 0,
        left: -Dimensions.get("window").width / 2,
        borderWidth: Dimensions.get("window").width / 2,
        height: Dimensions.get("window").width * 2,
        width: Dimensions.get("window").width * 2,
        borderColor: "rgba(255,255,255,0.5)",
        borderRadius: 1000,
        position: "absolute"
    },

    whitespace: {
        top: Dimensions.get("window").width,
        right: 0,
        bottom: 0,
        left: 0,
        height: Dimensions.get("window").width / 2,
        width: Dimensions.get("window").width,
        backgroundColor: "#FFFFFF",
        position: "absolute"
    },

    saveButton: {
        width: 81,
        height: 48,
        backgroundColor: "#000000",
        fontFamily: Font.ProximaNova.Bold,
        fontSize: 16,
        alignItems: "center",
        justifyContent: "center"
    },

    saveButtonText: {
        fontFamily: Font.ProximaNova.Bold,
        fontSize: 16,
        color: "#FFFFFF",
        textTransform: "uppercase"
    },

    saveButtonContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 16
    },

    pressedButton: {
        backgroundColor: "#888888"
    }
});

export default SettingsStyle;
