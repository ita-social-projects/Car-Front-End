import React, {useState, useEffect} from 'react';
import * as signalR from '@microsoft/signalr';
import SimpleMessage from './SimpleMesage';

import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';



const hubConnection = new signalR.HubConnectionBuilder().withUrl('http://10.0.2.2:61658/chat').build();

hubConnection.start();
const Chat = () => {


        const [message, setMessage] = useState('');
        const [arrr, setArr] = useState(Array<Element>());

        const arr: Array<Element> = []
        

        
        const onSubmit = () => {
               
                hubConnection.invoke("SendMessage", message);
           };
        
       

         useEffect(() => {
             hubConnection.on("RecieveMessage", message => {
                 console.log(message);
                 //setMessage(message)
                 arr.push(<SimpleMessage mes={message} />)
                 setArr(arr);
                 
             })
        });

        return(
            <View>
                <Text>
                    Enter your message:
                </Text>
                <TextInput placeholder="type here" onChangeText={(message) => setMessage(message)}></TextInput>
                
                <Button onPress={onSubmit} title="Send" />
                <View>{arrr.map(item => item)}</View>
                
            </View>
        );
    
}

export default Chat;