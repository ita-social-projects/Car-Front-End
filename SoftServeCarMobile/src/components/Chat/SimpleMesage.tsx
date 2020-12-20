import React, { ComponentProps, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import MessageItem from './MessageItem';


const SimpleMessage = (props) => {
    const[data, setData] = useState([])
    const[number, setNumber] = useState(0);

    useEffect(() => {
        fetch('http://10.0.2.2:61658/api/Value')
        .then((response) => response.json())
        .then((json) => {
            setData(json.chats as []);
            console.log(data);
        });

    }, []);

    

        return(
            <View style={styles.container}>
                {/* <Image style={styles.image} source={{uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"}} />
                <Text style={styles.fonts}>{data.forEach(elem => <Text>{elem.id}</Text>)}</Text>
                <TouchableOpacity style={styles.refIcon} onPress={() => props.navigation.navigate("Chat")}>
                    <View style={styles.refIcon}><Ionicons name={'chatbubbles'} size={20}></Ionicons></View>
                </TouchableOpacity> */}

                {/* <FlatList data = {data} keyExtractor={ ({id}, index) => id } renderItem={({item}) => {
                    
                        <Text style={{padding: 20}}>{item.name}</Text>
                }} /> */}

                
            </View>
        );
}

export default SimpleMessage;

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
        left: 5,
        right: 0,
        top: 5,
        bottom: 0,
        padding: 5,
        margin: 5
    },
    fonts: {
        fontFamily: "OpenSans",
        fontWeight: '700',
        top: 15
    },
    refIcon: {
        top: 6,
        width: 20,
        height: 20,
        left: 2,
        right: 0
    }
    
})