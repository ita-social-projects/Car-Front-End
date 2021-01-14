import { StyleSheet } from "react-native";

export const TouchableJourneyStyle = StyleSheet.create({
    component: {
        margin: 10,
        padding: 10,
        borderRadius: 8,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "white",
    },

    header: {
        flexDirection: "row",
    },

    image: {
        borderRadius: 400,
        width: 38,
        height: 38,
    },

    driverBlock: {
        margin: 5,
        marginLeft: 15,
        justifyContent: "space-between",
    },

    driverName: {
        fontFamily: "OpenSans-Regular",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 16,
        display: "flex",
        alignItems: "center",
    },

    driverPosition: {
        fontFamily: "OpenSans-Regular",
        fontSize: 14,
        lineHeight: 16,
        color: "#909095",
        display: "flex",
        alignItems: "center",
    },

    rightBlock: {
        alignSelf: "flex-end",
    },

    time: {
        fontFamily: "OpenSans-Regular",
        fontSize: 14,
        lineHeight: 16,
        textAlign: "right",
        color: "#909095",
    }
});
