import EStyleSheet from "react-native-extended-stylesheet";
import Font from "../../data/fonts/Font";

const RideFoundStyle = EStyleSheet.create({
    container: {
        height: "50%",
        flex: 1,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 16,
        marginHorizontal: "7%",
        marginVertical: "57%",
        paddingHorizontal: "7%",
        paddingTop: "8%",
        shadowOffset: { width: 0, height: 16 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 10,
    },

    body: {
        height: "100%",
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
