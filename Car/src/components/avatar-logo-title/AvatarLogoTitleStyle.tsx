import { StyleSheet } from "react-native";
import DM from "../styles/DM";

const AvatarLogoTitleStyle = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingLeft: 17
    },

    headerContainer: {
        flex: 1,
        flexDirection: "row"
    },

    headerUserInformation: {
        marginLeft: 71,
        position: "absolute"
    },

    headerUserName: {
        lineHeight: 21,
        fontSize: 18,
        marginBottom: 8,
        color: DM("black"),
        fontWeight: "bold"
    },

    headerUserAdditionalData: {
        lineHeight: 14,
        fontSize: 14,
        opacity: 0.5,
        color: DM("black"),
        marginBottom: 8
    }
});

export default AvatarLogoTitleStyle;
