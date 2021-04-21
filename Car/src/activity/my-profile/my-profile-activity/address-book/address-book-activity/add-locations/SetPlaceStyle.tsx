import { StyleSheet } from "react-native";

const SetPlaceStyle = StyleSheet.create({
    container: {
        backgroundColor:"#F2F2F2",
        paddingTop: 10
    },

    topInputContainer:{
        borderBottomColor: "#C1C1C5",
        borderBottomWidth:1,
    },

    barIcon: {
        flex:1,
        borderColor: "#EEEEEE",
    },

    dropDownPicker: {
        marginTop:20
    },

    inactiveButton: {
        backgroundColor: "#FFFFFF",
        color: "#000000"
    },

    activeButton: {
        backgroundColor: "#000000",
        color: "#FFFFFF"
    },

    text:{
        flex:1,
        fontWeight:"bold",
    },

    textInputStyle:{
        height: 100,
        borderWidth: 2,
        borderColor: "black",
        fontSize: 15,
        paddingLeft: 10,
        textAlignVertical: "top",
    },

    publishButton: {
        marginLeft: 260,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "#000000",
        flexDirection: "row",
    },

    publishButtonText: {
        paddingHorizontal: 6,
        color: "white",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 20,
    },

    movableMarker: {
        position: "absolute",
        zIndex: 1
    },

    scrollView: {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        paddingHorizontal: 10,
        height: 200,
        marginTop: 15
    }
});

export default SetPlaceStyle;
