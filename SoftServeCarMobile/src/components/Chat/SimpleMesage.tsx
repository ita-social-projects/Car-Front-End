import React, { ComponentProps, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from 'axios';


const SimpleMessage = (props) => {
    const[data, setData] = useState([])
    const[number, setNumber] = useState(0);

    useEffect(() => {
        axios.get('http://10.0.2.2:61658/api/UserChats/5')
        .then(res => {
            const chats = res.data;
            setData(chats);
        })
    }, []);

    

        return(
            <View style={{ marginTop: 24 }}>
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.main}>
                            <View style={styles.button}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={styles.image} source={{ uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' }} />
                                    <View>
                                        <Text style={styles.fonts}>{item.chatName}</Text>
                                        <Text style={{ fontSize: 11, paddingTop: 10, fontFamily: 'sans-serif' }}>{item.chatName} </Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={{ paddingTop: 12, }} onPress={() => props.navigation.navigate("Chat")}>
                                    <View><Ionicons name={'chatbubbles'} size={20}></Ionicons></View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>
        );
}

export default SimpleMessage;

export const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderBottomColor: '#C1C1C5',
        height: 68,
        alignContent: 'center',
        width: 344,
        alignSelf: 'center',

    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    fonts: {
        fontFamily: 'OpenSans-Italic',
        fontWeight: 'bold',
        fontSize: 13,
    },
    image: {

        width: 56,
        height: 56,
        borderRadius: 50,
        marginRight: 7,
        bottom: 5
    },
    lottie: {
        width: 100,
        height: 100
    }

})