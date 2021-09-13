import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View, Image } from "react-native";
import { SearchBar } from "react-native-elements";
import ChatService from "../../../api-service/chat-service/ChatService";
import MessagesStyle from "./MessagesStyle";
import {
    MESSAGE_SEARCH_INPUT_SYMBOL_LIMIT,
    MESSAGE_SEARCH_START_AFTER_SYMBOLS_NUMBER
} from "../../constants/MessageConstants";
import {
    GRADIENT_END,
    GRADIENT_START
} from "../../constants/StylesConstants";
import { NOT_EXISTING_ELEMENT_INDEX } from "../../constants/GeneralConstants";
import DM from "../../components/styles/DM";
import { MessagesProps } from "./MessagesProps";
import * as navigation from "../../components/navigation/Navigation";
import AvatarLogo from "../../components/avatar-logo/AvatarLogo";
import { LinearTextGradient } from "react-native-text-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import moment from "moment";
import { findAll } from "highlight-words-core";
import Chat from "../../../models/Chat/Chat";
import Indicator from "../../components/activity-indicator/Indicator";

const Messages = (props: MessagesProps) => {
    const [filteredDataSource, setFilteredDataSource] = useState<Chat[]>([]);
    const [masterDataSource, setMasterDataSource] = useState<Chat[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");

    const getChats = () => {
        if (!search) {
            setIsLoading(true);
            ChatService.getChat().then((res) => {
                let chats = res.data;

                setMasterDataSource(JSON.parse(JSON.stringify(chats)));

                setFilteredDataSource(chats);
                setIsLoading(false);
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

    const setSearchFilter = (text: string) => {
        let textTrimmed = text.trim();

        if (textTrimmed.length > MESSAGE_SEARCH_START_AFTER_SYMBOLS_NUMBER) {
            setIsLoading(true);
            const arr: Chat[] = JSON.parse(JSON.stringify(masterDataSource));

            const searchInTitle = arr.filter(chat => {
                let chatTitle = chat?.name.toUpperCase();

                return chatTitle!.indexOf(textTrimmed.toUpperCase()) > NOT_EXISTING_ELEMENT_INDEX;
            });

            searchInTitle.length ?
                setFilteredDataSource(searchInTitle)
                :
                ChatService.getFilteredChats({ searchText: textTrimmed, chats: masterDataSource }).then(res => {
                    setFilteredDataSource(res.data);
                    setIsLoading(false);
                });
            setSearch(text);
        }
        else {
            setFilteredDataSource(JSON.parse(JSON.stringify(masterDataSource)));
            setSearch(text);
        }
    };

    const textHighlight = (textToHighlight: string, searchWords: string[]) => {
        const chunks = findAll({ textToHighlight, searchWords, autoEscape: true });

        return (
            <Text style={[MessagesStyle.textStyle, { color: DM("black") }]}>
                {chunks.map((chunk, index) => {
                    const text = textToHighlight.substr(chunk.start, chunk.end - chunk.start);

                    return (!chunk.highlight)
                        ? text
                        : (
                            <Text
                                key={index}
                                style={MessagesStyle.highlightedText}
                            >
                                {text}
                            </Text>
                        );
                })}
            </Text>
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
                                <View style={[MessagesStyle.wrapper, { borderColor: DM("black") }]}>
                                    <View style={MessagesStyle.avatarWrapper}>
                                        <AvatarLogo
                                            user={item?.journeyOrganizer}
                                            size={50}
                                        />
                                    </View>
                                    <View style={MessagesStyle.dataWrapper}>
                                        <LinearTextGradient
                                            locations={[GRADIENT_START, GRADIENT_END]}
                                            colors={["#00A3CF", "#5552A0"]}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 0 }}
                                        >
                                            <Text style={[MessagesStyle.fonts, { color: DM("#00A3CF") }]}>
                                                {item?.name}
                                            </Text>
                                        </LinearTextGradient>
                                        {item?.messageText ?
                                            textHighlight(item.messageText, search.split(" "))
                                            :
                                            <Text style={[MessagesStyle.textStyle, { color: DM("black") }]}>
                                                starts at {moment(
                                                    new Date(item?.journey?.departureTime!)
                                                ).format("DD.MM, HH:mm")}
                                            </Text>
                                        }
                                    </View>

                                    <View style={MessagesStyle.iconWrapper}>
                                        <View>
                                            <Ionicons
                                                name={"chatbubbles"}
                                                size={20}
                                                color={DM("black")}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                {
                    filteredDataSource?.length ? (
                        <View style={MessagesStyle.warningContainer}>
                            <Text style={MessagesStyle.warningMessageStyle}>
                                Each chat will be deleted 2 weeks after the trip
                                {"\n"}
                                departure time
                            </Text>
                        </View>
                    ) : (
                        <>
                            <View style={MessagesStyle.noMessageContainer}>
                                <Text style={MessagesStyle.noMessageStyle}>
                                    CURRENTLY YOU DO NOT HAVE ANY
                                    {"\n"}
                                    CHATS
                                </Text>
                                <Image
                                    style={MessagesStyle.noChatImageStyle}
                                    source={require("../../../assets/images/chat/no-chats.png")}
                                />
                            </View>
                        </>
                    )
                }
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {props.isOpenFilter ? (
                <SearchBar
                    maxLength={MESSAGE_SEARCH_INPUT_SYMBOL_LIMIT}
                    searchIcon={{ color: DM("black"), size: 28 }}
                    onChangeText={(text) => setSearchFilter(text)}
                    onClear={() => setSearchFilter("")}
                    placeholder={"Search in Messages"}
                    value={search}
                    containerStyle={[MessagesStyle.containerStyle, { backgroundColor: DM("white") }]}
                    inputContainerStyle={[MessagesStyle.inputContainerStyle,
                        {
                            backgroundColor: DM("white"),
                            borderColor: DM("black"),
                            borderBottomColor: DM("black")
                        }]}
                />
            ) : (
                <View />
            )}

            <View style={[MessagesStyle.container, { backgroundColor: DM("white") }]}>
                {isLoading ?
                    <Indicator
                        size="large"
                        color={DM("#414045")}
                        text="Loading information..."
                    /> :
                    chatsList()
                }
            </View>
        </SafeAreaView>
    );
};

export default Messages;
