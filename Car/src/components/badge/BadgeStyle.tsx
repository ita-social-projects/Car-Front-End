import { StyleSheet } from "react-native";

const BadgeStyle = StyleSheet.create({
    text:{
        color:"black",
        fontSize:12
    },

    container: {
        width:30,
        height:30,
        borderRadius: 15,
        backgroundColor:"orange",
        alignItems:"center",
        justifyContent:"center",
        top:10,
    }
});

export default BadgeStyle;