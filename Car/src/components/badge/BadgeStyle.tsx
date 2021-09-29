import { StyleSheet } from "react-native";

const BadgeStyle = StyleSheet.create({
    text:{
        color:"white",
        fontSize:10
    },

    container: {
        width:22,
        height:22,
        borderRadius: 11,
        backgroundColor:"#FF5104",
        alignItems:"center",
        justifyContent:"center",
        marginVertical: 24
    }
});

export default BadgeStyle;