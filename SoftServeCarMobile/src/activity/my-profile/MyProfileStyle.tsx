import { StyleSheet } from "react-native";

const MyProfileStyle = StyleSheet.create({
    
    container: {
        flex: 1, 
        backgroundColor: 'white',
    },

    optionIcon: {
        transform: [{ rotate: '90deg' }]
    },

    text: {
        fontWeight: 'bold'
    },
});

export default MyProfileStyle;