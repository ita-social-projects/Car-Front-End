import { StyleSheet } from "react-native";
import Font from "../../../../data/fonts/Font";

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
        marginLeft: 15,
        fontFamily: Font.ProximaNova.Bold
    },

    headerUserName: {
        lineHeight: 21,
        fontSize: 18,
        marginBottom: 8,
        fontWeight: "bold"
    },

    headerUserAdditionalData: {
        lineHeight: 14,
        fontSize: 14,
        opacity: 0.5,
        marginBottom: 8
    }
});

export default AvatarLogoTitleStyle;
