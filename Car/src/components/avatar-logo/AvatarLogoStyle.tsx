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
        fontSize: 16,
        lineHeight: 16,
        fontWeight: "700",
        textTransform: "uppercase",
        color: "#FFFFFF",
        paddingTop: 3
    },

    image: { 
        position: "absolute", 
    }
});

export default AvatarLogoTitle;
