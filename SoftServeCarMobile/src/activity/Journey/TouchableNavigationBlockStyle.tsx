import { Dimensions, StyleSheet } from "react-native";

const blockStyle = StyleSheet.create({
    blockContainer: {
        borderRadius: 8,
        borderColor: "#FFFFFF",
        borderWidth: 2,
        borderStyle: "solid",
        height: 160,
        marginVertical: 5
    },

    textStyle: {
        marginLeft: 20,
        flex: 1,
        fontFamily: "Proxima-Nova-Reg",
        fontWeight: "bold",
        fontSize: 24,
        justifyContent: "center",
        textTransform: "uppercase",
        textAlignVertical: "center",
        color: "#FFFFFF",
        width: Dimensions.get('window').width / 3
    },

    imageStyle: {
        justifyContent: "flex-end",
        marginTop: 10
    },
    
    viewContainer: {
        paddingHorizontal: 10,
        justifyContent: "center",
        flexDirection: "row",
        height: 150,
        width: Dimensions.get('window').width
    },
})
export default blockStyle;
