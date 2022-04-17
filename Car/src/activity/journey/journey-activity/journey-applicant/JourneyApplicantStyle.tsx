import { Dimensions, StyleSheet } from "react-native";
import Font from "../../../../data/fonts/Font";

const JourneyApplicantStyle = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        paddingTop: 16,

    },

    containerBadge:
    {
        borderRadius: 16,
        borderWidth: 1,
        minHeight: 152,
        width: Dimensions.get("screen").width - 32,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    containerPhone:
    {
        borderRadius: 16,
        borderWidth: 1,
        minHeight: 50,
        width: Dimensions.get("screen").width - 32,
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",

    },

    speceBetweenContainer:
    {
        marginTop: 8,
        marginBottom:8,
    },

    textAchievements:
    {
        fontFamily: Font.OpenSans.Bold,
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 13,
        textAlign: "center",
        marginTop: 16,
        marginBottom: 16,
    },

    textNotification:
    {
        fontFamily: Font.Milliard.Bold,
        fontSize: 14,
        textAlign: "center",
        textTransform: "uppercase",
        marginTop: 32

    },

    textMobileAndPhoneNumber:
    {
        fontFamily: Font.OpenSans.Bold,
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 13,
    },

    badges:
    {
        marginHorizontal:14,
        marginVertical: 8,
        alignItems: "center"
    },

    image:
    {
        width: 85,
        height: 120
    },

    indicator:
    {
        height: "100%",
        justifyContent: "center",
        alignItems:"center"
    },

});

export default JourneyApplicantStyle;