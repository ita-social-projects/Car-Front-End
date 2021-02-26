import React, { useState, useEffect, useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import {
    GiftedChat,
    Bubble,
    Send,
    InputToolbar
} from "react-native-gifted-chat";
import ChatService from "../../../../api-service/chat-service/ChatService";
import UserService from "../../../../api-service/user-service/UserService";
import AuthContext from "../../../components/auth/AuthContext";
import AvatarLogo from "../../../components/avatar-logo/AvatarLogo";
import * as navigation from "../../../components/navigation/Navigation";
import { hubConnection } from "../../../components/navigation/Routes";
import ChatStyle from "./ChatStyle";

const Chat = (props: any) => {
    const [messages, setMessages] = useState<object[]>([]);
    const [message, setMessage] = useState("");
    const { user } = useContext(AuthContext);

    props.navigation.setOptions({ headerTitle: props.route.params.header });

    useEffect(() => {
        ChatService.getCeratinChat(props?.route?.params?.chatId).then((res) => {
            const messagesFromChat = res.data?.messages;
            const tempChat: any = [];
            messagesFromChat?.forEach((element: any) => {
                UserService.getUser(element?.senderId).then((res) => {
                    const messageToAdd = {
                        _id: element?.id,
                        text: element?.text,
                        createdAt: element?.createdAt,
                        user: {
                            _id: element?.senderId?.toString(),
                            name: res?.data?.name + " " + res?.data?.surname
                        }
                    };
                    tempChat.push(messageToAdd);
                });
            });
            setMessages(tempChat);
        });

        hubConnection.on("RecieveMessage", (message: any) => {
            console.log(message);
            UserService.getUser(message?.senderId).then((res) =>
                setMessages((previousMessages) =>
                    GiftedChat.append(
                        previousMessages as any,
                        {
                            _id: message.id,
                            text: message.text,
                            createdAt: message.createdAt,
                            user: {
                                _id: message.senderId?.toString(),
                                name: res?.data?.name + " " + res?.data?.surname
                            }
                        } as any
                    )
                )
            );
        });
        hubConnection
            ?.invoke("EnterToGroup", props.route.params.chatId.toString())
            .catch((err: any) => console.log(err));
        setMessage("");
        return function cleanup() {
            hubConnection?.invoke(
                "LeaveTheGroup",
                props.route.params.chatId.toString()
            );
        };
    }, []);

    const onSend = () => {
        hubConnection
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
                        color: "#000000",
                        paddingHorizontal: 8,
                        paddingVertical: 2
                    },
                    right: {
                        color: "#FFFFFF",
                        paddingHorizontal: 8,
                        paddingVertical: 2
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
            <View
                style={{
                    marginHorizontal: 16,
                    marginVertical: 46
                }}
            >
                <InputToolbar
                    {...props}
                    primaryStyle={{
                        borderWidth: 2,
                        justifyContent: "center",
                        alignItems: "center",
                        height: 44
                    }}
                />
            </View>
        );
    };

    return (
        <View style={ChatStyle.chatWrapper}>
            <GiftedChat
                renderAvatar={(data) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("Applicant Page", {
                                userId: Number(data.currentMessage.user._id)
                            })
                        }
                    >
                        <AvatarLogo
                            size={36}
                            user={{
                                id: data.currentMessage.user._id,
                                name: data.currentMessage.user.name.split(
                                    " "
                                )[0],
                                surname: data.currentMessage.user.name.split(
                                    " "
                                )[1]
                            }}
                        />
                    </TouchableOpacity>
                )}
                messagesContainerStyle={{ paddingHorizontal: 8 }}
                placeholder="Aa"
                renderTime={() => <View></View>}
                maxInputLength={500}
                messages={messages as any[]}
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
