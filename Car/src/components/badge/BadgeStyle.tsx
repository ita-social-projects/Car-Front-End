import { StyleSheet } from "react-native";

const BadgeStyle = StyleSheet.create({
    text:{
        color:"black",
        fontSize:10
    },

    container: {
        width:24,
        height:24,
        borderRadius: 12,
        backgroundColor:"orange",
        alignItems:"center",
        justifyContent:"center",
        marginVertical:35,
    }
});

export default BadgeStyle;