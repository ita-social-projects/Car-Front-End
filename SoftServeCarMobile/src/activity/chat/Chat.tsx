import React from 'react';
import * as signalR from '@microsoft/signalr';
import { routes } from '../../../environment';
import { View, Text, TextInput, Button, } from 'react-native';
import ChatStyle from './ChatStyle';

export interface ChatState {
    message: string,
    messages: string[],
    hubConnection: signalR.HubConnection,
    receivedUserId: string
}

class Chat extends React.Component<ChatState, ChatState> {

    constructor(props: ChatState) {
        super(props);

        this.state = {
            message: '',
            messages: [],
            hubConnection: null,
            receivedUserId: ''
        }
    }

    componentDidMount() {
        const hubConnection = new signalR.HubConnectionBuilder().withUrl(routes.chatUrl).build();
        this.setState({hubConnection}, () => {
            this.state.hubConnection.start().then(() => "Connection started!");

            hubConnection.on("RecieveMessage", (receivedMessage) => {
                this.setState({messages: [...this.state.messages, receivedMessage]});
            })
        });
    }

    onSubmit = () => {
        this.state.hubConnection.invoke("SendMessage", this.state.message).catch((err) => console.log(err));
        this.setState({ message: '' });

    };

    render() {
        return (
            <>
                <View style={ChatStyle.container}>
                    <View style={ChatStyle.chatMessage}>
                        <View>
                            {this.state.messages.map((message: string, index: number) => {
                                return (
                                    <Text style={ChatStyle.message} key={index}>{message}</Text>
                                );
                            })}
                        </View>
                    </View>
                    <View style={ChatStyle.buttonContainer}>
                        <TextInput style={ChatStyle.input} value={this.state.message}
                                   placeholder="Aa"
                                   onChangeText={(message) => {
                                       this.setState({message: message})
                                   }}/>
                        <View>
                            <Button onPress={this.onSubmit} title="Send"/>
                        </View>
                    </View>
                </View>
            </>
        );
    }
}

export default Chat;