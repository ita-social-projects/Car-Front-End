import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
import {
    GiftedChat,
    Bubble,
    Send,
    InputToolbar
} from "react-native-gifted-chat";
import ChatService from "../../../../api-service/chat-service/ChatService";
import AuthContext from "../../../components/auth/AuthContext";
import ChatStyle from "./ChatStyle";
const Chat = (props: any) => {
    const [messages, setMessages] = useState<object[]>([]);
    const [message, setMessage] = useState("");
    const { user } = useContext(AuthContext);

    useEffect(() => {
        ChatService.getCeratinChat(props?.route?.params?.chatId).then((res) => {
            const messagesFromChat = res.data.messages;
            const tempChat: any = [];
            messagesFromChat.forEach((element) => {
                const messageToAdd = {
                    _id: element.id,
                    text: element.text,
                    createdAt: element.createdAt,
                    user: {
                        _id: element.senderId.toString()!,
                        name: "React Native",
                        avatar: "https://placeimg.com/140/140/any"
                    }
                };
                tempChat.push(messageToAdd);
            });
            setMessages(tempChat);
        });

        props.route.params.hubConnection.on(
            "RecieveMessage",
            (message: any) => {
                console.log(message);
                setMessages((previousMessages) =>
                    GiftedChat.append(previousMessages, {
                        _id: message.id,
                        text: message.text,
                        createdAt: message.createdAt,
                        user: {
                            _id: message.senderId?.toString(),
                            avatar: "https://placeimg.com/140/140/any"
                        }
                    })
                );
            }
        );
        props.route.params.hubConnection
            ?.invoke("EnterToGroup", props.route.params.chatId.toString())
            .catch((err: any) => console.log(err));
        setMessage("");
        return function cleanup() {
            props.route.params.hubConnection?.invoke(
                "LeaveTheGroup",
                props.route.params.chatId.toString()
            );
        };
    }, []);

    const onSend = () => {
        props.route.params.hubConnection
            ?.invoke("SendMessageToGroup", {
                Text: message,
                SenderId: user?.id,
                ChatId: props.route.params.chatId
            })
            .catch((err: any) => console.log(err));
        setMessage("");
    };

    const renderBubble = (props: any) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    left: {
                        backgroundColor: "#F1F1F4"
                    },
                    right: {
                        backgroundColor: "#EB7A89"
                    }
                }}
                textStyle={{
                    left: {
                        color: "#000000"
                    },
                    right: {
                        color: "#FFFFFF"
                    }
                }}
            />
        );
    };
    const renderSend = (props: any) => {
        return (
            <Send {...props}>
                <View style={ChatStyle.button}>
                    <Icon
                        name="paper-plane"
                        type="font-awesome"
                        color="white"
                    />
                </View>
            </Send>
        );
    };

    const renderInputToolbar = (props: any) => {
        return (
            <InputToolbar
                {...props}
                primaryStyle={{
                    borderWidth: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    height: 44
                }}
            />
        );
    };

    return (
        <View style={ChatStyle.chatWrapper}>
            <GiftedChat
                placeholder="Aa"
                renderTime={() => <View></View>}
                maxInputLength={500}
                messages={messages}
                onInputTextChanged={setMessage}
                text={message}
                onSend={onSend}
                scrollToBottom
                alwaysShowSend
                user={{
                    _id: user?.id.toString()!,
                    name: user?.name!
                }}
                renderBubble={renderBubble}
                renderSend={renderSend}
                renderInputToolbar={renderInputToolbar}
            />
        </View>
    );
};

export default Chat;
