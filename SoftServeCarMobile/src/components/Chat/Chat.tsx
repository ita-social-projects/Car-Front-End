import React, {useState, useEffect} from 'react';
import * as signalR from '@microsoft/signalr';
import SimpleMessage from './SimpleMesage';

import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Chat extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            message: null,
            messages: [],
            hubConnection: null
        }
    }

    componentDidMount() {
        const hubConnection = new signalR.HubConnectionBuilder().withUrl('http://10.0.2.2:61658/chat').build();
        this.setState({hubConnection}, () => {
            this.state.hubConnection.start().then(() => "Connection started!"); 

            hubConnection.on("RecieveMessage", receivedMessage => {
                const text = receivedMessage;
                const messages = this.state.messages.concat([text]);
                this.setState( {messages} );
            })
        });
    }

        onSubmit = () => {
            console.log("here");
            console.log(this.state.message);
            console.log(this.state.messages);
        this.state.hubConnection.invoke("SendMessage", this.state.message);

        this.setState({message: ''});
   };

   render() {
       return (
           <>
            <View>
                <TextInput value={this.state.message}
                placeholder="type text here"
                onChangeText={(message) => {this.setState({message: message})}} />
                <Button onPress={this.onSubmit} title="Send" />
                {this.state.messages.map((message: string, index: number) => {
                    return (
                    <Text key={index}>{message}</Text>
                    );
                })}
            </View>
           </>
       );
   }


}

export default Chat;