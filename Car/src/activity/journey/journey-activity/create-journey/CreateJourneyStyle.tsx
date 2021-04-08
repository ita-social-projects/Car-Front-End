import { StyleSheet } from "react-native";

export const CreateJourneyStyle = StyleSheet.create({
    container: {
        backgroundColor:"#F2F2F2",
    },

    recentJourneyText:{
        paddingBottom: 5,
        paddingLeft: 10,
        paddingTop: 8,
        paddingRight: 10,
        marginRight:10,
        fontWeight: "bold",
        fontSize:12
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

    feeButtonFree: {
        paddingHorizontal: 16,
        paddingVertical: 6,
        backgroundColor: "#000000",
        flexDirection: "row",
        justifyContent: "flex-end",
        borderWidth: 2,
        borderRightWidth: 0
    },

    feeButtonPaid: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        borderWidth: 2,
        marginRight: 20,
    },

    feeButtonText: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 18,
    },

    inactiveButton: {
        backgroundColor: "#FFFFFF",
        color: "#000000"
    },

    activeButton: {
        backgroundColor: "#000000",
        color: "#FFFFFF"
    },

    feeContainer:{
        flexDirection:"row",
        marginLeft:21,
        marginRight:0,
        marginTop:16,
        marginBottom:20,
        fontSize:13,
        lineHeight:16
    },

    text:{
        flex:1,
        fontWeight:"bold",
    },

    commentsView: {
        marginTop:0,
        marginLeft:20,
        marginRight:20
    },

    textInputStyle:{
        height: 100,
        borderWidth: 2,
        borderColor: "black",
        fontSize: 15,
        paddingLeft: 10,
        textAlignVertical: "top",
    },

    commentsCaption: {
        fontSize: 17,
        fontWeight: "bold"
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
    }
});
