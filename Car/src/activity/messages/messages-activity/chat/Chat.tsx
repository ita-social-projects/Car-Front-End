import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import {
    Bubble,
    GiftedChat,
    InputToolbar,
    Send
} from "react-native-gifted-chat";
import ChatService from "../../../../../api-service/chat-service/ChatService";
import AuthContext from "../../../../components/auth/AuthContext";
import AvatarLogo from "../../../../components/avatar-logo/AvatarLogo";
import * as navigation from "../../../../components/navigation/Navigation";
import ChatStyle from "./ChatStyle";
import { HubConnectionBuilder, HubConnection } from "@microsoft/signalr";
import APIConfig from "../../../../../api-service/APIConfig";
import Spinner from "react-native-loading-spinner-overlay";

const Chat = (props: any) => {
    const [messages, setMessages] = useState<object[]>([]);
    const [message, setMessage] = useState("");
    const { user } = useContext(AuthContext);
    const [connection, setConnection] = useState<HubConnection>();
    const [loading, setSpinner] = useState(true);

    useEffect(() => {
        (() => {
            const newConnection = new HubConnectionBuilder()
                .withUrl(APIConfig.URL + "signalr/")
                .withAutomaticReconnect()
                .build();

            setConnection(newConnection);
        })();
        props.navigation.setOptions({ headerTitle: props.route.params.header });
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start().then(() => {
                connection.invoke(
                    "EnterToGroup",
                    props.route.params.chatId.toString()
                ).catch((err: any) => console.log(err));
            });

            ChatService.getCeratinChat(props?.route?.params?.chatId).then((res) => {

                let tempChat: any = [];

                res.data?.messages?.forEach((element: any) => {
                    const messageToAdd = {
                        _id: element?.id,
                        text: element?.text,
                        createdAt: element?.createdAt,
                        user: {
                            _id: element?.senderId?.toString(),
                            name: element?.sender?.name + " " + element?.sender?.surname
                        }
                    };

                    tempChat.push(messageToAdd);
                });
                setMessages(tempChat);
            }).then(() => {
                setSpinner(false);
            });
            console.log("Use Effect has refreshed");

            connection.onreconnected(() => {
                connection.invoke(
                    "EnterToGroup",
                    props.route.params.chatId.toString()
                ).catch((err: any) => console.log(err));
            });

            connection!.on("RecieveMessage", (receivedMessage: any) => {
                setMessages((previousMessages) =>
                    GiftedChat.append(
                        previousMessages as any,
                        {
                            _id: receivedMessage.id,
                            text: receivedMessage.text,
                            createdAt: receivedMessage.createdAt,
                            user: {
                                _id: receivedMessage.senderId?.toString(),
                                name: receivedMessage?.sender?.name + " " + receivedMessage?.sender?.surname
                            }
                        } as any
                    )
                );
            });
            setMessage("");

            return () => {
                connection?.invoke(
                    "LeaveTheGroup",
                    props.route.params.chatId.toString()
                );
            };
        }
    }, [connection]);

    const onSend = () => {
        if (connection) {
            const messageToSend = message.trim();

            if (messageToSend != "") {
                connection!
                    .invoke("SendMessageToGroup", {
                        Text: messageToSend,
                        SenderId: user?.id,
                        ChatId: props.route.params.chatId
                    })
                    .catch((err: any) => console.log(err));
                setMessage("");
            }
        } else {
            console.log("No connection yet");
        }

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
            <Send {...props} style={{ flex: 1, width: "100%" }}>
                <View style={ChatStyle.button}>
                    <Icon
                        name="paper-plane"
                        type="font-awesome"
                        color="black"
                    />
                </View>
            </Send>
        );
    };

    const renderInputToolbar = (props: any) => {
        return (
            <InputToolbar
                {...props}
                required
                autogrow
                multiline
                flex={1}
                primaryStyle={{
                    borderWidth: 2,
                    marginHorizontal: 10,
                    justifyContent: "center",
                    height: "100%",
                    overflow: "scroll"
                }}
            />
        );
    };

    const renderUserAvatar = (data: any) => {
        return (
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
        );
    };

    return (
        <View style={ChatStyle.chatWrapper}>
            <GiftedChat
                renderAvatar={(data) => renderUserAvatar(data)}
                placeholder="Aa"
                messagesContainerStyle={{ paddingBottom: 10 }}
                renderTime={() => <View />}
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
                minInputToolbarHeight={44}
                minComposerHeight={44}
                maxComposerHeight={120}
                renderInputToolbar={renderInputToolbar}
                maxInputLength={500}
            />
            {
                <Spinner
                    visible={loading}
                    textContent={"Loading..."}
                    color={"#414045"}
                    textStyle={ChatStyle.spinnerTextStyle}
                />
            }
        </View>
    );
};

export default Chat;
