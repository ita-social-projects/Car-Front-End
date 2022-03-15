import EStyleSheet from "react-native-extended-stylesheet";

const JourneyDetailsUpdateViewStyle = EStyleSheet.create({

    buttonContainer: {
        alignItems: "flex-end",
        flexDirection: "row",
        justifyContent: "flex-end",
        flex: 1,
        height: "100%",
        top: 16,
        paddingBottom: 24
    },

    messageContainer: {
        paddingVertical: 16,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1
    },

    message: {
        textAlign: "center",
        lineHeight: 22,
        fontSize: 18,
        fontWeight: "700"
    },
});

export default JourneyDetailsUpdateViewStyle;