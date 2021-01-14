import React, { useState, useEffect } from 'react';
import * as signalR from '@microsoft/signalr';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { routes } from '../../../environment';


const ChatFunc = (props) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [hubConnection, setHubConnection] = useState();

    useEffect(() => {
        const connection = new signalR.HubConnectionBuilder()
                            .withUrl(routes.chatUrl)
                            .configureLogging(signalR.LogLevel.Information)
                            .build();
        console.log(connection);
        setHubConnection(connection);
        console.log(hubConnection);

        hubConnection.start().then(() => console.log('connection started')).catch((err) => console.log(err));

        hubConnection.on('ReceiveMessage', (recievedMessage : string) => {
            setMessages(messages.push(recievedMessage));
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


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
      },
     
    message: {
        borderWidth: 1,
        borderColor: "#20232a",
        borderRadius: 8,
        textAlign: 'center',
        padding: 8,
    },
    input: {
        padding: 10,
        width: '80%',
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 4,
      },

    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        margin: 5,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between'
    },
    chatMessage: {
        flex: 1,
        backgroundColor: 'powderblue'
    },    
});