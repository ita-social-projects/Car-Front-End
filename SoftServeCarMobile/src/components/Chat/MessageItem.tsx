import React, { ComponentProps } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";


const MessageItem = (props) => {
        return(
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"}} />
                <Text style={styles.fonts}>Max Leontievvvvv</Text>
                <TouchableOpacity style={styles.refIcon} onPress={() => props.navigation.navigate("Chat")}>
                    <View style={styles.refIcon}><Ionicons name={'car'} size={20}></Ionicons></View>
                </TouchableOpacity>
            </View>
        );
}

export default MessageItem;

export const styles = StyleSheet.create({
    image:{
        
        width: 56,
        height: 56,
        borderRadius: 50
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 5,
        bottom: 0
    },
    fonts: {
        fontFamily: "OpenSans",
        fontWeight: '700'
    },
    refIcon: {
        width: 20,
        height: 20,
        left: 2,
        top: 2
    }
    
})