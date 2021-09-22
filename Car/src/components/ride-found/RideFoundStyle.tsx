import EStyleSheet from "react-native-extended-stylesheet";
import Font from "../../data/fonts/Font";

const RideFoundStyle = EStyleSheet.create({
    body: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },

    container: {
        width: "90%",
        borderRadius: 15,
        padding: 20,
    },

    headerContainer: {
        alignItems: "center",
    },

    messageContainer: {
        marginTop: "10%"
    },

    buttonsContainer: {
        width: "100%",
        height: "45%",
        marginTop: "10%"
    },

    button : {
        width: "100%",
        height: "50%",
        alignItems: "center",
        justifyContent: "center"
    },

    viewButton: {
        backgroundColor: "#D80056",
        width: "100%",
        height: "50%",
        alignItems: "center",
        justifyContent: "center"
    },

    skipButton: {
        width: "100%"
    },

    headerText:{
        fontFamily: Font.ProximaNova.Bold,
        fontSize: "1rem"
    },

    messageText: {
        fontFamily: Font.OpenSans.Regular,
        fontSize: "0.95rem"
    },

    viewButtonText: {
        fontFamily: Font.ProximaNova.Bold,
        fontSize: "1.05rem",
        color: "#FFFFFF"
    },

    skipButtonText: {
        fontFamily: Font.ProximaNova.Bold,
        fontSize: "1.05rem",
    }
});

export default RideFoundStyle;
