import { StyleSheet } from "react-native";
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
        justifyContent: "space-between",
        flexDirection: "row"
    },
    avatarWrapper: {
        paddingLeft: 5,
        width: 40,
        height: "100%",
        justifyContent: "center"
    },
    dataWrapper: {
        flex: 1,
        marginHorizontal: 10,
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
        fontSize: 13
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
        backgroundColor: "white",
        padding: 15
    },
    containerStyle: {
        height: 44,
        backgroundColor: "white",
        borderBottomColor: "transparent",
        borderTopColor: "transparent",
        marginTop: 5,
        marginBottom: 20
    },
    inputContainerStyle: {
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: "black",
        paddingLeft: 5
    },
    textStyle: {
        fontSize: 11,
        paddingTop: 10,
        fontFamily: Font.OpenSans.SemiBold
    }
});

export default SimpleMessageStyle;
