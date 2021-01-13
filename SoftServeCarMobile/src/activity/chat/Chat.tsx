import React from 'react';
import * as signalR from '@microsoft/signalr';
import styles from './chat-styles/ChatStyle';


import {
    View,
    Text,
    TextInput,
    Button,
} from 'react-native';


export interface ChatState {
    message: string,
    messages: string[],
    hubConnection: signalR.HubConnection,
    recievedUserId: string

}
class Chat extends React.Component<ChatState, ChatState>{

    constructor(props: ChatState) {
        super(props);

        this.state = {
            message: '',
            messages: [],
            hubConnection: null,
            recievedUserId: ''
        }

    }


    componentDidMount() {
        const hubConnection = new signalR.HubConnectionBuilder().withUrl('http://10.0.2.2:61658/chat').build();
        this.setState({ hubConnection }, () => {
            this.state.hubConnection.start().then(() => "Connection started!");

            hubConnection.on("RecieveMessage", (receivedMessage) => {
                this.setState({ messages: [...this.state.messages, receivedMessage] });
            })
        });
    }

    onSubmit = () => {
        console.log(this.state.message);

        this.state.hubConnection.invoke("SendMessage", this.state.message);

        this.setState({ message: '' });
    };

    render() {
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.chatMessage}>
                        <View>
                            {this.state.messages.map((message: string, index: number) => {
                                return (
                                    <Text style={styles.message} key={index}>{message}</Text>
                                );
                            })}
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TextInput style={styles.input} value={this.state.message}
                            placeholder="Aa"
                            onChangeText={(message) => { this.setState({ message: message }) }} />
                        <View>
                            <Button onPress={this.onSubmit} title="Send" />
                        </View>
                    </View>
                </View>

            </>
        );
    }


}

export default Chat;
