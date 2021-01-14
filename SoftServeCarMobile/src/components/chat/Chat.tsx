import React from 'react';
import * as signalR from '@microsoft/signalr';
//import signalR from '@aspnet/signalr';
import {routes} from '../../../environment';


import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
} from 'react-native';


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
        //flex: 1,
        backgroundColor: 'powderblue'
    },    
});

