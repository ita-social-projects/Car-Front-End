import React, { useEffect, useState } from "react";
import {
    FlatList,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    Image,
} from "react-native";
import { SearchBar } from "react-native-elements";
import ChatService from "../../../api-service/chat-service/ChatService";
import MessagesStyle from "./MessagesStyle";
import {
    FIRST_ELEMENT_OF_THE_ARRAY,
    MESSAGE_SEARCH_INPUT_SYMBOL_LIMIT,
    MESSAGE_SEARCH_START_AFTER_SYMBOLS_NUMBER,
} from "../../constants/MessageConstants";
import { GRADIENT_END, GRADIENT_START } from "../../constants/StylesConstants";
import { ZERO } from "../../constants/GeneralConstants";
import { useTheme } from "../../components/theme/ThemeProvider";
import { MessagesProps } from "./MessagesProps";
import * as navigation from "../../components/navigation/Navigation";
import AvatarLogo from "../../components/avatar-logo/AvatarLogo";
import { LinearTextGradient } from "react-native-text-gradient";
import moment from "moment";
import { findAll } from "highlight-words-core";
import Chat from "../../../models/Chat/Chat";
import Indicator from "../../components/activity-indicator/Indicator";
import { getDateWithCorrectUtc } from "../../utils/ChatHelperFunctions";

const Messages = (props: MessagesProps) => {
    const { colors, isThemeDark } = useTheme();
    const [filteredDataSource, setFilteredDataSource] = useState<Chat[]>([]);
    const [masterDataSource, setMasterDataSource] = useState<Chat[]>([]);
    const [isLoading, setisLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [isChatsEmpty, setChatsEmpty] = useState(false);

    const getChats = () => {
        if (!search) {
            setisLoading(true);
            ChatService.getChat().then((res) => {
                let chats = res.data;

                if (chats.length === ZERO) {
                    setChatsEmpty(true);
                }

                setMasterDataSource(JSON.parse(JSON.stringify(chats)));

                setFilteredDataSource(chats);
                setisLoading(false);
            });
        }
    };

    useEffect(() => {
        props.navigation.addListener("focus", getChats);
        getChats();

        return () => {
            props.navigation.removeListener("focus", getChats);
        };
    }, [search]);

    useEffect(() => {
        if(!props.isOpenFilter)
            setSearch("");
    }, [props.isOpenFilter]);

    const setSearchFilter = (text: string) => {
        let textTrimmed = text.trim();

        if (textTrimmed.length > MESSAGE_SEARCH_START_AFTER_SYMBOLS_NUMBER) {
            setisLoading(true);
            ChatService.getFilteredChats({ searchText: textTrimmed, chats: masterDataSource }).then(res => {

                setFilteredDataSource(res.data);
                setisLoading(false);
            });
            setSearch(text);
        } else {
            setFilteredDataSource(JSON.parse(JSON.stringify(masterDataSource)));
            setSearch(text);
        }
    };
    const textHighlight = (textToHighlight: string, searchWords: string[]) => {
        const chunks = findAll({ textToHighlight, searchWords, autoEscape: true });

        return (
            <Text style={[MessagesStyle.textStyle, { color: colors.primary }]}>
                {chunks.map((chunk, index) => {
                    const text = textToHighlight.substr(
                        chunk.start,
                        chunk.end - chunk.start
                    );

                    return !chunk.highlight ? (
                        text
                    ) : (
                        <Text key={index} style={MessagesStyle.highlightedText}>
                            {text}
                        </Text>
                    );
                })}
            </Text>
        );
    };

    const searchMatchingResults = () => {
        return (
            filteredDataSource?.length ? (
                <View style={MessagesStyle.warningContainer}></View>
            ) : (
                <View style={MessagesStyle.noMessageContainer}>
                    <Text style={{ ...MessagesStyle.noMessageStyle, color: colors.primary, lineHeight: 22 }}>
                        NO RESULTS MATCHING YOUR
                        {"\n"}
                        SEARCH FILTERS
                    </Text>
                    <Image
                        style={MessagesStyle.noChatImageStyle}
                        source={require("../../../assets/images/chat/no-chats.png")}
                    />
                </View>
            )
        );
    };

    const messageWhenUserHasNoChats = () => {
        return (
            <View style={MessagesStyle.noMessageContainer}>
                <Text style={{ ...MessagesStyle.noMessageStyle, color: colors.primary, lineHeight: 22 }}>
                    CURRENTLY YOU DO NOT HAVE ANY
                    {"\n"}
                    CHATS
                </Text>
                <Image
                    style={MessagesStyle.noChatImageStyle}
                    source={require("../../../assets/images/chat/no-chats.png")}
                />
            </View>
        );
    };

    const chatsList = () => {
        return (
            <View>
                <FlatList
                    data={filteredDataSource}
                    keyExtractor={(msg, index) => index.toString() + msg}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Chat", {
                                    chatId: item?.id,
                                    messageId: item?.messageId,
                                    header: item?.name,
                                });
                            }}
                        >
                            <View style={MessagesStyle.main}>
                                <View
                                    style={[MessagesStyle.wrapper,
                                        { borderColor: !isThemeDark ? colors.secondaryLight : colors.neutralLight }]}
                                >
                                    <View style={MessagesStyle.avatarWrapper}>
                                        <AvatarLogo user={item?.journeyOrganizer} size={38} />
                                    </View>
                                    <View style={MessagesStyle.dataWrapper}>
                                        <LinearTextGradient
                                            locations={[GRADIENT_START, GRADIENT_END]}
                                            colors={[colors.navyBlueGradientFrom, colors.navyBlueGradientFrom]}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 0 }}
                                        >
                                            <Text
                                                style={[MessagesStyle.fonts, { color: colors.navyBlueGradientFrom }]}
                                            >
                                                {item?.name}
                                            </Text>
                                        </LinearTextGradient>
                                        {item?.messageText ? (
                                            textHighlight(item.messageText, search.split("\n"))
                                        ) : (
                                            <Text
                                                style={[
                                                    MessagesStyle.textStyle,
                                                    { color: colors.primary },
                                                ]}
                                            >
                                                Starts at{" "}
                                                {moment(getDateWithCorrectUtc(
                                                    new Date(item!.journeys[FIRST_ELEMENT_OF_THE_ARRAY].departureTime)))
                                                    .format(
                                                        "DD.MM, HH:mm"
                                                    )}
                                            </Text>
                                        )}
                                    </View>

                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                {isChatsEmpty ? messageWhenUserHasNoChats() : searchMatchingResults()}
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {props.isOpenFilter ? (
                <SearchBar
                    maxLength={MESSAGE_SEARCH_INPUT_SYMBOL_LIMIT}
                    searchIcon={false}
                    autoFocus={true}
                    onChangeText={(text) => setSearchFilter(text)}
                    onClear={() => setSearchFilter("")}
                    placeholder={"Search in Messages"}
                    value={search}
                    containerStyle={[
                        MessagesStyle.containerStyle,
                        { backgroundColor: colors.white },
                    ]}
                    inputContainerStyle={[
                        MessagesStyle.inputContainerStyle,
                        {
                            backgroundColor: colors.white,
                            borderColor: colors.primary,
                            borderBottomColor: colors.primary,
                        },
                    ]}
                />
            ) : (
                <View />
            )}

            <View style={[MessagesStyle.container, { backgroundColor: colors.white }]}>
                {isLoading ? (
                    <Indicator
                        size="large"
                        color={colors.hover}
                        text="Loading information..."
                    />
                ) : (
                    chatsList()
                )}
            </View>
        </SafeAreaView>
    );
};

export default Messages;
