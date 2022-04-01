import { Dimensions, StyleSheet } from "react-native";

const AvatarLogoTitleStyle = StyleSheet.create({

    mainContainer:{
        borderRadius: 16,
        borderWidth: 1,
        minHeight: 48,
        width: Dimensions.get("screen").width - 32,
        paddingHorizontal: 26,
        paddingVertical: 24,
    },

    container: {
        minHeight: 48,
        width: Dimensions.get("screen").width - 32,
        left:20,
        top:10
    },

    headerContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        minHeight: 98,
    },

    headerUserInformation: {
        marginLeft: 20
    },

    headerUserName: {
        lineHeight: 22,
        fontSize: 18,
        marginBottom: 4,
        fontWeight: "bold"
    },

    headerUserPosition: {
        lineHeight: 18,
        fontSize: 14,
        marginBottom: 4,
        color: "rgba(0, 163, 207, 1)"
    },

    headerUserLocation: {
        lineHeight: 18,
        fontSize: 14,
        marginBottom: 4
    },

    headerUserRides: {
        lineHeight: 18,
        fontSize: 13
    }
});

export default AvatarLogoTitleStyle;
