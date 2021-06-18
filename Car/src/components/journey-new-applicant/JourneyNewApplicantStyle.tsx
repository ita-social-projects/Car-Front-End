import EStyleSheet from "react-native-extended-stylesheet";
import Font from "../../data/fonts/Font";

const JourneyNewApplicantStyle = EStyleSheet.create({
    row: {
        flex: 0,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start"
    },

    commentsBox: {
        borderWidth: 1,
        borderStyle: "solid",
        marginTop: "1.5rem"
    },

    commentsBoxAfter: {
        position: "absolute",
        width: "1rem",
        height: "1rem",
        borderWidth: 1,
        borderStyle: "solid",
        top: "-0.5rem",
        left: "50%",
        marginLeft: "-1rem",
        transform: [{ rotateZ: "-135deg" }],
        opacity: 1
    },

    commentsText: {
        margin: "1.5rem",
        textAlign: "center",
        fontFamily: Font.ProximaNova.Regular,
        fontSize: "1.2rem",
        paddingLeft: "1rem",
        paddingRight: "1rem"
    },

    options: {
        marginTop: "1.5rem"
    },

    optionsHeader: {
        fontFamily: Font.OpenSans.Bold,
        lineHeight: "1.1rem",
        fontSize: "1rem"
    },

    optionsLine: {
        minHeight: 7,
        minWidth: "99%",
        borderWidth: 1,
        borderStyle: "solid",
        marginLeft: "auto",
        marginRight: "auto"
    },

    applicantStopsText: {
        fontWeight: "bold",
        fontSize: 16,
        paddingTop: 15
    }
});

export default JourneyNewApplicantStyle;
