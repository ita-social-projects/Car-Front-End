import { StyleSheet } from "react-native";

const JourneyPageStyle = StyleSheet.create({
    
    container: {
        flex: 1,

    },

    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },

    title: {
        fontSize: 32,
    },

    panelContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },

    panel: {
        height: 200,
        backgroundColor: "white",
    },

    headerTitleStyle: {
        paddingLeft: 24,
        paddingBottom: 20,
        backgroundColor: "white",

    },

    headerTextStyle: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 0.2,
        alignItems: 'center'
    },
});

export default JourneyPageStyle;