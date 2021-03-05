import EStyleSheet from "react-native-extended-stylesheet";

const SettingsStyle = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },

    profileInfo: {
        marginHorizontal: 14,
        marginVertical: 20,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#F0F0F0",
        height: 126,
    },

    cardText: {
        fontWeight: "bold",
        color: "#000000"
    }
});

export default SettingsStyle;
