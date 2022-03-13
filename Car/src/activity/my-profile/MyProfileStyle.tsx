import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const MyProfileStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:150
    },

    optionIcon: {
        transform: [{ rotate: "90deg" }]
    },

    text: {
        fontWeight: "bold"
    },
    switchSelector: {
        alignItems:"center",
        paddingTop: 28,
        paddingBottom:16
    },
    switchButton:{
        backgroundColor: "#000000",
        flexDirection: "row",
        justifyContent: "center",
    },
    leftButtonBorder: {
        borderWidth: 1,
        height:32,
        width:82,
        alignItems:"center",
    },
    middleButtonBorder: {
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        height:32,
        width:80,
        alignItems:"center"
    },

    rightButtonBorder: {
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        height:32,
        width:125,
        alignItems:"center"
    },

    buttonText: {
        textTransform: "uppercase",
        fontFamily: Font.Milliard.Milliard,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.25,

    },
    image:{
        width: 22.5, height: 22.5,
        borderRadius: 0,
        resizeMode: "contain"
    },
    buttonLogout:{
        paddingTop:21
    },
    footerContainer:{
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 40,
        paddingBottom: 35
    },
    foterLeftRef:{
        paddingRight: 16,
        fontFamily: Font.OpenSans.OpenSans,
        fontSize: 13,
        lineHeight: 18,
        fontWeight:"normal"
    },
    footerRightRef:{
        paddingLeft: 16,
        paddingRight: 16,
        fontFamily: Font.OpenSans.OpenSans,
        fontSize: 13,
        lineHeight: 18,
        fontWeight:"normal"
    }

});

export default MyProfileStyle;
