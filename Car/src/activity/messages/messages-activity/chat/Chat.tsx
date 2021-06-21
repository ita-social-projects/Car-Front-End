import React, { useContext, useEffect, useRef, useState } from "react";
import { Animated, Clipboard, NativeScrollEvent, NativeSyntheticEvent, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import {
    Bubble,
    BubbleProps,
    GiftedChat,
    IMessage,
    InputToolbar,
    Send,
} from "react-native-gifted-chat";
import ChatService from "../../../../../api-service/chat-service/ChatService";
import AuthContext from "../../../../components/auth/AuthContext";
import AvatarLogo from "../../../../components/avatar-logo/AvatarLogo";
import * as navigation from "../../../../components/navigation/Navigation";
import ChatStyle from "./ChatStyle";
import { HubConnectionBuilder, HubConnection } from "@microsoft/signalr";
import APIConfig from "../../../../../api-service/APIConfig";
import Indicator from "../../../../components/activity-indicator/Indicator";
import {
    CHAT_POPUP_HEIGHT,
    COUNT_OF_MESSAGES_TO_LOAD,
} from "../../../../constants/MessageConstants";
import {
    HALF_OPACITY,
    MAX_OPACITY,
    MAX_POPUP_POSITION,
    MIN_POPUP_HEIGHT,
    MIN_POPUP_POSITION
} from "../../../../constants/StylesConstants";
import {
    FIRST_ELEMENT_INDEX,
    SECOND_ELEMENT_INDEX,
    THIRD_ELEMENT_INDEX,
    ZERO_ID
} from "../../../../constants/GeneralConstants";
import UserService from "../../../../../api-service/user-service/UserService";
import DM from "../../../../components/styles/DM";
import BottomPopup from "../../../../components/bottom-popup/BottomPopup";
import MenuButton from "../../../../components/menu-button/MenuButton";
import ChatProps from "./ChatProps";
import { INITIAL_NUMBER_TO_RENDER,
    MILLISECONDS,
    NUMBER_OF_MESSAGES_BELOW_FOCUSED,
    NUMBER_OF_NEW_MESSAGES,
    START_LIST_POSITION
} from "../../../../constants/ChatsConstants";

const Chat = (properties: ChatProps) => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [message, setMessage] = useState("");
    const [user, setUser] = useState(useContext(AuthContext).user);
    const [connection, setConnection] = useState<HubConnection>();
    const [isLoading, setSpinner] = useState(true);
    const [isSendDisabled, setDisabled] = useState(true);
    const [isLoadingEarlier, setLoadingEarlier] = useState(false);
    const [isLoadingNewer, setLoadingNewer] = useState(false);
    const [isLoadMessage, setLoadMessage] = useState(true);
    const fadeAnim = useRef(new Animated.Value(HALF_OPACITY)).current;
    const chatRef = useRef<GiftedChat>(null);

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

            let messageToFocusId = properties.route.params.messageId || ZERO_ID;
            let messageId = ZERO_ID;

            if (messageToFocusId) {
                messageId = messageToFocusId + NUMBER_OF_MESSAGES_BELOW_FOCUSED;
            }

            loadMessages(messageId)
                .then((res: IMessage[]) => {
                    setMessages(res);
                    setSpinner(false);
                    focusOnMessage(res.find(msg => msg._id === messageToFocusId)!);
                });

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
                            createdAt: new Date(receivedMessage.createdAt),
                            user: {
                                _id: receivedMessage.senderId,
                                name: receivedMessage?.sender?.name + "|"
                                    + receivedMessage?.sender?.surname + "|"
                                    + receivedMessage?.sender?.imageId
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

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true
            }
        ).start();
    }, [fadeAnim]);

    const renderBubble = (props: BubbleProps<IMessage>) => (
        <Animated.View
            style={{
                opacity: props.currentMessage?._id === properties.route.params.messageId ? fadeAnim : MAX_OPACITY,
            }}
        >
            <Bubble
                {...props}
                wrapperStyle={{
                    left: {
                        backgroundColor: DM("#F1F1F4"),
                    },
                    right: {
                        backgroundColor: DM("#EB7A89"),
                    }
                }}
                textStyle={{
                    left: {
                        color: DM("#000000"),
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
        </Animated.View>
    );

    const renderSend = (props: any) => (
        <Send disabled={isSendDisabled} {...props} style={{ flex: 1, width: "100%" }}>
            <View style={ChatStyle.button}>
                <Icon
                    name="paper-plane"
                    type="font-awesome"
                    color={isSendDisabled ? DM("grey") : DM("black")}
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
                borderColor: DM("black"),
                color: DM("black"),
                justifyContent: "center",
                height: "100%",
                overflow: "scroll",
                backgroundColor: DM("white"),
            }}
        />
    );

    const renderUserAvatar = (data: any) => (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate("Applicant Page", {
                    userId: data.currentMessage.user._id as number
                })
            }
        >
            <AvatarLogo
                size={36}
                user={{
                    imageId: data.currentMessage.user.name.replace("null", "").split("|")[THIRD_ELEMENT_INDEX],
                    name: data.currentMessage.user.name.split("|")[FIRST_ELEMENT_INDEX],
                    surname: data.currentMessage.user.name.split("|")[SECOND_ELEMENT_INDEX]
                }}
            />
        </TouchableOpacity>
    );

    const moreOptionsRef = useRef<any>(null);

    let selectedMessage: any;
    let isOpen: boolean = false;

    const showPopup = (context: any, message: any) => {
        isOpen = !isOpen;
        selectedMessage = message;

        moreOptionsRef?.current?.snapTo(
            isOpen ? MAX_POPUP_POSITION : MIN_POPUP_POSITION
        );
    };

    const loadMessages = (messageId: number): Promise<any> => {
        let tempChat: IMessage[] = [];

        return ChatService.getCertainChat(
            properties?.route.params.chatId, messageId)
            .then((res: any) => {
                res.data?.forEach((data: any) => {
                    const messageToAdd = {
                        _id: data?.id,
                        text: data?.text,
                        createdAt: new Date(data.createdAt),
                        user: {
                            _id: data?.senderId,
                            name: data?.name + "|"
                                + data?.surname + "|"
                                + data?.imageId
                        }
                    };

                    tempChat.push(messageToAdd);
                });
                if (tempChat.length < COUNT_OF_MESSAGES_TO_LOAD) {
                    setLoadMessage(false);
                }
            })
            .then(() => tempChat);
    };

    const loadEarlierMessages = () => {
        setLoadingEarlier(true);
        let oldestMessageId = Math.min(...messages.map((u: any) => u._id));

        loadMessages(oldestMessageId)
            .then((res) => {
                setMessages((previousMessages) =>
                    GiftedChat.append(
                        res,
                        previousMessages as any
                    )
                );
                setLoadingEarlier(false);
            });
    };

    const loadNewerMessages = () => {
        setLoadingNewer(true);
        let firstMessage = messages[FIRST_ELEMENT_INDEX];
        let id = Number(firstMessage._id) + NUMBER_OF_NEW_MESSAGES;

        loadMessages(id).then((res: IMessage[]) => {
            setMessages((previousMessages) => {
                let temp = GiftedChat.append(
                    res,
                    previousMessages as any
                );

                const onlyUniqueMessages = (arr: IMessage[]) =>
                    arr.filter((value, index, array) =>
                        array.map(obj => obj._id)
                            .indexOf(value._id) === index);

                const sortMessagesById = (arr: IMessage[]) =>
                    arr.sort((a,b) => Number(b._id) - Number(a._id));

                return onlyUniqueMessages(sortMessagesById(temp));
            });
            setLoadingNewer(false);
            focusOnMessage(firstMessage);
        });
    };

    const focusOnMessage = (message: IMessage) => {
        setTimeout(() => {
            chatRef.current?._messageContainerRef?.current?.scrollToItem({
                animated: false, item: message, viewPosition: 0.1 });
        }, MILLISECONDS);
    };

    const listProps = {
        onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
            if (event.nativeEvent.contentOffset.y === START_LIST_POSITION && !isLoadingNewer) {
                loadNewerMessages();
            }
        },
        initialNumToRender: INITIAL_NUMBER_TO_RENDER,
    };

    return (
        <View style={[ChatStyle.chatWrapper, { backgroundColor: DM("white") }]}>
            {isLoading ? (
                <Indicator
                    size="large"
                    color={DM("#414045")}
                    text="Loading information..."
                />
            ) : (
                <GiftedChat
                    listViewProps={listProps}
                    ref={chatRef}
                    renderAvatar={(data) => renderUserAvatar(data)}
                    messagesContainerStyle={{ paddingBottom: 10 }}
                    timeFormat="HH:mm"
                    dateFormat="DD.MM"
                    messages={messages as any[]}
                    onInputTextChanged={(value) => {
                        if (value.trim()) {
                            setMessage(value);
                            setDisabled(false);
                        } else {
                            setMessage(value);
                            setDisabled(true);
                        }
                    }}
                    text={message}
                    onSend={onSend}
                    scrollToBottom
                    alwaysShowSend
                    user={{
                        _id: user?.id!,
                        name: user?.name + "|" + user?.surname
                    }}
                    renderBubble={renderBubble}
                    renderSend={renderSend}
                    minInputToolbarHeight={44}
                    minComposerHeight={44}
                    maxComposerHeight={120}
                    renderInputToolbar={renderInputToolbar}
                    maxInputLength={500}
                    onLongPress={showPopup}
                    loadEarlier={isLoadMessage}
                    onLoadEarlier={loadEarlierMessages}
                    isLoadingEarlier={isLoadingEarlier}
                    infiniteScroll={true}
                    renderLoadEarlier={() => isLoadingEarlier ?
                        <Indicator
                            size="large"
                            color={DM("#414045")}
                            text="Loading information..."
                        /> : <View />
                    }
                />
            )}
            <BottomPopup
                refForChild={(ref) => (moreOptionsRef.current = ref)}
                snapPoints={[CHAT_POPUP_HEIGHT, MIN_POPUP_HEIGHT]}
                enabledInnerScrolling={false}
                enabledGestureInteraction={false}
                initialSnap={1}
                renderHeader={<View />}
                renderContent={
                    <View style={{ backgroundColor: DM("white") }}>
                        <MenuButton text="Copy text" onPress={() => {
                            moreOptionsRef.current.snapTo(MIN_POPUP_POSITION);
                            Clipboard.setString(selectedMessage.text);
                        }} />
                        <MenuButton text="Cancel" onPress={() => moreOptionsRef.current.snapTo(MIN_POPUP_POSITION)} />
                    </View>
                }
            />
        </View>
    );
};

export default Chat;
