import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import "reflect-metadata";
import { container } from 'tsyringe';
import ChatService from '../../../../api-service/chat-service/ChatService';
import { AuthContext } from '../../auth/AuthProvider';
import SimpleMessageStyle from './SimpleMessageStyle';

const SimpleMessage = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {
    const chatService = container.resolve(ChatService);
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        chatService.getChat(user?.id)
            .then(res => {
                const chats = res.data;
                console.log(chats);
                setData(chats);
                setLoading(false);
            })
    }, []);

    if (isLoading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#5500dc" />
            </View>
        );
    }

    return (
        <View style={{ marginTop: 24 }}>
            <FlatList
                data={data}
                keyExtractor={({ id }) => id.toString()}
                renderItem={({ item }) => (
                    <View style={SimpleMessageStyle.main}>
                        <View style={SimpleMessageStyle.button}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={SimpleMessageStyle.image}
                                    source={{ uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' }} />
                                <View>
                                    <Text style={SimpleMessageStyle.fonts}>{item.name}</Text>
                                    <Text style={SimpleMessageStyle.text}>{item.name} </Text>
                                </View>
                            </View>
                            <TouchableOpacity style={{ paddingTop: 12, }}
                                onPress={() => props.navigation.navigate("Chat")}>
                                <View><Ionicons name={'chatbubbles'} size={20} /></View>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

export default SimpleMessage;
