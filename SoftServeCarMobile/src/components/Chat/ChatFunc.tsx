import React, { useState, useContext, useEffect } from 'react';
import * as signalR from '@microsoft/signalr';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './ChatStyles/ChatStyles';


const ChatFunc = (props) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [hubConnection, setHubConnection] = useState();

    useEffect(() => {
        const connection = new signalR.HubConnectionBuilder().withUrl('http://10.0.2.2:61658/chat').build();
        console.log(connection)
        setHubConnection(connection);
        console.log(hubConnection);

        hubConnection.start().then(() => console.log('connection started')).catch((err) => console.log(err));

        hubConnection.on('ReceiveMessage', (message: string) => {
            setMessages(messages.push(message));
        })
    }, []);

    const onSubmit = () => {
        hubConnection.invoke('SendMessage', message).catch((err) => console.log(err));
        setMessage('');
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.chatMessage}>
                    <View>
                        {messages.map((message: string, index: number) => {
                            return (
                                <Text style={styles.message} key={index}>{message}</Text>
                            );
                        })}
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TextInput style={styles.input} value={message}
                        placeholder="Aa"
                        onChangeText={(messagee) => { setMessage(messagee) }} />
                    <View>
                        <Button onPress={onSubmit} title="Send" />
                    </View>
                </View>
            </View>

        </>
    );
}

export default ChatFunc;