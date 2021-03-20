import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";
import DM from "../styles/DM";

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
        color: DM("#FFFFFF")
    },
});

export default AvatarLogoTitle;
