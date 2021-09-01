import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const AvatarLogoTitle = StyleSheet.create({
    userAvatar: {
        borderRadius: 1000,
        justifyContent: "center",
        alignItems: "center"
    },

    userAvatarText: {
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "700",
        textTransform: "uppercase",
    },

    spinner: {
        position: "absolute",
        marginHorizontal: 0,
        marginVertical: 0,
    }
});

export default AvatarLogoTitle;
