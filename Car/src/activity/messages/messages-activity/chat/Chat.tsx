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
import Indicator from "../../../../components/activity-indicator/Indicator";
import { FIRST_ELEMENT_INDEX, SECOND_ELEMENT_INDEX } from "../../../../constants/Constants";
import UserService from "../../../../../api-service/user-service/UserService";

const Chat = (properties: any) => {
    const [messages, setMessages] = useState<object[]>([]);
    const [message, setMessage] = useState("");
    const [user, setUser] = useState(useContext(AuthContext).user);
    const [connection, setConnection] = useState<HubConnection>();
    const [isLoading, setSpinner] = useState(true);
    const [isSendDisabled, setDisabled] = useState(true);

    useEffect(() => {
        (() => {
            const newConnection = new HubConnectionBuilder()
                .withUrl(APIConfig.URL + "signalr/")
                .withAutomaticReconnect()
                .build();

            setConnection(newConnection);
        })();

        properties.navigation.setOptions({ headerTitle: properties.route.params.header });

        UserService.getUser(user!.id).then((res) => setUser(res.data));

    }, []);

    useEffect(() => {
        if (connection) {
            connection.start().then(() => {
                connection.invoke(
                    "EnterToGroup",
                    properties.route.params.chatId.toString()
                ).catch((err: any) => console.log(err));
            });

            ChatService.getCeratinChat(properties?.route?.params?.chatId).then((res) => {

                let tempChat: any = [];

                res.data?.messages?.forEach((element: any) => {
                    const messageToAdd = {
                        _id: element?.id,
                        text: element?.text,
                        createdAt: element?.createdAt,
                        user: {
                            _id: element?.senderId + "|" + element?.sender?.imageId,
                            name: element?.sender?.name + "|" + element?.sender?.surname
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
                    properties.route.params.chatId.toString()
                ).catch((err: any) => console.log(err));
            });

            connection.on("RecieveMessage", (receivedMessage: any) => {
                setMessages((previousMessages) =>
                    GiftedChat.append(
                        previousMessages as any,
                        {
                            _id: receivedMessage.id,
                            text: receivedMessage.text,
                            createdAt: receivedMessage.createdAt,
                            user: {
                                _id: receivedMessage.senderId + "|" + receivedMessage?.sender?.senderId,
                                name: receivedMessage?.sender?.name + "|" + receivedMessage?.sender?.surname
                            }
                        } as any
                    )
                );
            });
            setMessage("");

            return () => {
                connection?.invoke(
                    "LeaveTheGroup",
                    properties.route.params.chatId.toString()
                );
            };
        }
    }, [connection]);

    const onSend = () => {
        if (connection) {
            const messageToSend = message.trim();

            if (messageToSend != "") {
                connection
                    .invoke("SendMessageToGroup", {
                        Text: messageToSend,
                        SenderId: user?.id,
                        ChatId: properties.route.params.chatId
                    })
                    .catch((err: any) => console.log(err));
                setMessage("");
            }
        } else {
            console.log("No connection yet");
        }

    };

    const renderBubble = (props: any) => (
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

    const renderSend = (props: any) => (
        <Send disabled={isSendDisabled} {...props} style={{ flex: 1, width: "100%" }}>
            <View style={ChatStyle.button}>
                <Icon
                    name="paper-plane"
                    type="font-awesome"
                    color={isSendDisabled ? "grey" : "black"}
                />
            </View>
        </Send>
    );

    const renderInputToolbar = (props: any) => (
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

    const renderUserAvatar = (data: any) => (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate("Applicant Page", {
                    userId: Number(data.currentMessage.user._id.split("|")[FIRST_ELEMENT_INDEX])
                })
            }
        >
            <AvatarLogo
                size={36}
                user={{
                    imageId: data.currentMessage.user._id.split("|")[SECOND_ELEMENT_INDEX],
                    name: data.currentMessage.user.name.split("|")[FIRST_ELEMENT_INDEX],
                    surname: data.currentMessage.user.name.split("|")[SECOND_ELEMENT_INDEX]
                }}
            />
        </TouchableOpacity>
    );

    return (
        <View style={ChatStyle.chatWrapper}>
            {isLoading ? (
                <Indicator
                    size="large"
                    color="#414045"
                    text="Loading information..."
                />
            ) : (
                <GiftedChat
                    renderAvatar={(data) => renderUserAvatar(data)}
                    placeholder="Aa"
                    messagesContainerStyle={{ paddingBottom: 10 }}
                    renderTime={() => <View />}
                    messages={messages as any[]}
                    onInputTextChanged={(value) => {
                        if(value.trim())
                        {
                            setMessage(value);
                            setDisabled(false);
                        }else{
                            setMessage(value);
                            setDisabled(true);
                        }
                    }}
                    text={message}
                    onSend={onSend}
                    scrollToBottom
                    alwaysShowSend
                    user={{
                        _id: user?.id + "|" + user?.imageId,
                        name: user?.name + "|" + user?.surname
                    }}
                    renderBubble={renderBubble}
                    renderSend={renderSend}
                    minInputToolbarHeight={44}
                    minComposerHeight={44}
                    maxComposerHeight={120}
                    renderInputToolbar={renderInputToolbar}
                    maxInputLength={500}
                />
            )}
        </View>
    );
};

export default Chat;
