import React, { useContext, useEffect, useRef, useState } from "react";
import Clipboard from "@react-native-community/clipboard";
import {
    Animated,
    NativeScrollEvent,
    NativeSyntheticEvent,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import { Icon } from "react-native-elements";
import {
    AvatarProps,
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
import { useTheme } from "../../../../components/theme/ThemeProvider";
import BottomPopup from "../../../../components/bottom-popup/BottomPopup";
import MenuButton from "../../../../components/menu-button/MenuButton";
import ChatProps from "./ChatProps";
import {
    INITIAL_NUMBER_TO_RENDER,
    MILLISECONDS,
    NUMBER_OF_MESSAGES_BELOW_FOCUSED,
    NUMBER_OF_NEW_MESSAGES,
    OFFSET_TO_LOAD_NEW_MESSAGES,
} from "../../../../constants/ChatsConstants";
import Message from "../../../../../models/Message";
import AndroidKeyboardAdjust from "react-native-android-keyboard-adjust";
import ReceivedMessagesService from "../../../../../api-service/received-messages-service/ReceivedMessagesService";
import appInsights from "../../../../components/telemetry/AppInsights";
import { getDateWithCorrectUtc } from "../../../../utils/ChatHelperFunctions";

const Chat = (properties: ChatProps) => {
    const { colors } = useTheme();
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

    const invokeConncetion = () => {
        connection?.invoke(
            "EnterToGroup",
            properties.route.params.chatId.toString()
        ).catch((e) => appInsights.trackException({ exception: e }));
    };

    useEffect(() => {
        if (connection) {
            connection.start().then(() => {
                invokeConncetion();

                if (Platform.OS === "android")
                    AndroidKeyboardAdjust.setAdjustResize();

                ReceivedMessagesService.markAsRead(properties.route.params.chatId);
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
                invokeConncetion();
            });

            connection.on("RecieveMessage", (receivedMessage: any) => {
                let creationMessageDate = new Date(receivedMessage.createdAt);

                setMessages((previousMessages) =>
                    GiftedChat.append(
                        previousMessages as any,
                        {
                            _id: receivedMessage.id,
                            text: receivedMessage.text,
                            createdAt: new Date(creationMessageDate),
                            user: {
                                _id: receivedMessage.senderId,
                                name: receivedMessage?.sender?.name + "|"
                                    + receivedMessage?.sender?.surname + "|"
                                    + receivedMessage?.sender?.imageId
                            }
                        } as any
                    )
                );
                ReceivedMessagesService.markAsRead(properties.route.params.chatId);
            });
            setMessage("");

            return () => {
                if (Platform.OS === "android")
                    AndroidKeyboardAdjust.setAdjustPan();

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
                    .catch((e) => appInsights.trackException({ exception: e }));
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
                        backgroundColor: colors.secondaryLight,
                    },
                    right: {
                        backgroundColor: colors.navyBlueGradientFrom,
                    }
                }}
                textStyle={{
                    left: {
                        color: colors.primary,
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
                    color={isSendDisabled ? colors.secondaryDark : colors.primary}
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
                borderColor: colors.primary,
                color: colors.primary,
                justifyContent: "center",
                overflow: "scroll",
                backgroundColor: colors.white,
            }}
            textInputStyle={{
                color: colors.primary
            }}
        />
    );

    const renderUserAvatar = (data: Readonly<AvatarProps<any>> | any) => (
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

    const showPopup = (context: any, myMessage: any) => {
        isOpen = !isOpen;
        selectedMessage = myMessage;

        moreOptionsRef?.current?.snapTo(
            isOpen ? MAX_POPUP_POSITION : MIN_POPUP_POSITION
        );
    };

    const hidePopup = () => {
        moreOptionsRef?.current?.snapTo(MIN_POPUP_POSITION);
    };

    const loadMessages = (messageId: number): Promise<any> => {
        let tempChat: IMessage[] = [];

        return ChatService.getCertainChat(
            properties?.route.params.chatId, messageId)
            .then((res: any) => {
                res.data?.forEach((data: Message) => {
                    const messageToAdd: IMessage = {
                        _id: data?.id!,
                        text: data?.text!,
                        createdAt: Platform.OS === "ios"// no automatic Utc time offset for Ios
                            ? getDateWithCorrectUtc(new Date(data!.createdAt))
                            : new Date(data!.createdAt),
                        user: {
                            _id: data?.senderId!,
                            name: data?.senderName + "|"
                                + data?.senderSurname + "|"
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

                temp.sort((a, b) => Number(b._id) - Number(a._id));

                return onlyUniqueMessages(temp);
            });
            setLoadingNewer(false);
        });
    };

    const focusOnMessage = (msg: IMessage) => {
        setTimeout(() => {
            chatRef.current?._messageContainerRef?.current?.scrollToItem({
                animated: false, item: msg, viewPosition: 0.1
            });
        }, MILLISECONDS);
    };

    const listProps = {
        onScrollEndDrag: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
            if (event.nativeEvent.contentOffset.y < OFFSET_TO_LOAD_NEW_MESSAGES && !isLoadingNewer) {
                loadNewerMessages();
            }
        },
        initialNumToRender: INITIAL_NUMBER_TO_RENDER,
    };

    return (
        <View
            style={[ChatStyle.chatWrapper, { backgroundColor: colors.white}]}>
            {isLoading ? (
                <Indicator
                    size="large"
                    color={colors.hover}
                    text="Loading information..."
                />
            ) : (
                <TouchableWithoutFeedback
                    onPress={() => {Keyboard.dismiss(); hidePopup();}}>
                        <KeyboardAvoidingView style={{flex: 1}}>
                    <GiftedChat
                        scrollToBottom
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
                        alwaysShowSend
                        user={{
                            _id: user?.id!,
                            name: user?.name + "|" + user?.surname
                        }}
                        renderBubble={renderBubble}
                        renderSend={renderSend}
                        bottomOffset={60}
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
                        renderLoadEarlier={() => isLoadingEarlier &&
                            <Indicator
                                size="large"
                                color={colors.hover}
                                text="Loading information..."
                            />
                        }
                    />
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
            )}
            <BottomPopup
                refForChild={(ref) => (moreOptionsRef.current = ref)}
                snapPoints={[CHAT_POPUP_HEIGHT, MIN_POPUP_HEIGHT]}
                enabledInnerScrolling={false}
                enabledGestureInteraction={false}
                initialSnap={1}
                renderHeader={<View />}
                renderContent={
                    <View style={{ backgroundColor: colors.white }}>
                        <MenuButton text="Copy text" onPress={() => {
                            moreOptionsRef.current.snapTo(MIN_POPUP_POSITION);
                            Clipboard.setString(selectedMessage.text);
                        }}/>
                        <MenuButton text="Cancel" onPress={hidePopup} />
                    </View>
                }
            />
        </View>
    );
};

export default Chat;
