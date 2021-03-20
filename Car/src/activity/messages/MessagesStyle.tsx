import { StyleSheet } from "react-native";
import DM from "../../components/styles/DM";
import Font from "../../data/fonts/Font";

const SimpleMessageStyle = StyleSheet.create({
    main: {
        height: 68,
        width: "100%",
        justifyContent: "center"
    },

    wrapper: {
        flex: 1,
        width: "100%",
        height: 50,
        borderBottomWidth: 1,
        borderColor: DM("black"),
        justifyContent: "space-between",
        flexDirection: "row"
    },

    avatarWrapper: {
        paddingLeft: 5,
        width: 50,
        height: "100%",
        justifyContent: "center"
    },

    dataWrapper: {
        flex: 1,
        paddingLeft: 10.75,
        width: 39,
        height: 39,
        justifyContent: "center",
        marginTop: 15
    },

    iconWrapper: {
        width: 39,
        height: 39,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15
    },

    fonts: {
        fontFamily: Font.OpenSans.Bold,
        fontSize: 13,
        color: DM("#00A3CF")
    },

    image: {
        width: 56,
        height: 56,
        borderRadius: 50,
        marginRight: 7,
        bottom: 5
    },

    lottie: {
        width: 100,
        height: 100
    },

    container: {
        flex: 1,
        backgroundColor: DM("white"),
        padding: 15
    },

    containerStyle: {
        height: 44,
        backgroundColor: DM("white"),
        borderBottomColor: "transparent",
        borderTopColor: "transparent",
        marginTop: 5,
        marginBottom: 20
    },

    inputContainerStyle: {
        backgroundColor: DM("white"),
        borderColor: DM("black"),
        borderWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: DM("black"),
        paddingLeft: 5
    },

    textStyle: {
        fontSize: 11,
        paddingTop: 10,
        lineHeight: 16,
        color: DM("black"),
        fontFamily: Font.OpenSans.SemiBold
    }
});

export default SimpleMessageStyle;
