import { StyleSheet } from "react-native";
import { ProximaNova } from "../../../../../font-manager";

const AvatarLogoTitleStyle = StyleSheet.create({

    headerContainer: {
        flex: 1,
        flexDirection: 'row'
    },

    headerUserAvatar: {
        width: 56,
        height: 56,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#EEEEEE'
    },

    headerUserInformation: {
        marginLeft: 15,
        fontFamily: ProximaNova.Bold
    },

    headerUserName: {
        lineHeight: 21,
        fontSize: 18,
        marginBottom: 8,
        fontWeight: 'bold'
    },

    headerUserAdditionalData: {
        lineHeight: 14,
        fontSize: 14,
        opacity: 0.5,
        marginBottom: 8
    }
});

export default AvatarLogoTitleStyle;