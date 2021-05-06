import React, { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View, Image } from "react-native";
import { SearchBar } from "react-native-elements";
import ChatService from "../../../api-service/chat-service/ChatService";
import AuthContext from "../../components/auth/AuthContext";
import MessagesStyle from "./MessagesStyle";
import {
    GRADIENT_END, GRADIENT_START,
    MESSAGE_SEARCH_INPUT_SYMBOL_LIMIT,
    MESSAGE_SEARCH_START_AFTER_SYMBOLS_NUMBER,
    NOT_EXISTING_ELEMENT_INDEX
} from "../../constants/Constants";
import DM from "../../components/styles/DM";
import { chatsArrToFilteredChatsArr, FilteredChat, MessagesProps } from "./MessagesProps";
import * as navigation from "../../components/navigation/Navigation";
import AvatarLogo from "../../components/avatar-logo/AvatarLogo";
import { LinearTextGradient } from "react-native-text-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import moment from "moment";
import { findAll } from "highlight-words-core";

const Messages = (props: MessagesProps) => {
    const [filteredDataSource, setFilteredDataSource] = useState<FilteredChat[]>([]);
    const [masterDataSource, setMasterDataSource] = useState<FilteredChat[]>([]);
    const [search, setSearch] = useState("");
    const { user } = useContext(AuthContext);

    useEffect(() => {
        ChatService.getChat(user?.id).then((res) => {
            let chats = chatsArrToFilteredChatsArr(res.data);

            setMasterDataSource(JSON.parse(JSON.stringify(chats)));

            setFilteredDataSource(getUniqueChats(chats));
        });
    }, []);

    const getUniqueChats = (chats: FilteredChat[]) => {
        chats.map(chat => { chat.text = ""; });

        return [...new Map(chats.map(chat =>
            [chat["chatId"], chat])).values()];
    };

    const setSearchFilter = (text: string) => {
        if (text.length > MESSAGE_SEARCH_START_AFTER_SYMBOLS_NUMBER) {
            const arr = JSON.parse(JSON.stringify(masterDataSource));
            const journeyOrganize = searchInJourneyOrganizer(text, arr);
            const messages = searchInMessages(text, arr);

            journeyOrganize.length ?
                setFilteredDataSource(getUniqueChats(journeyOrganize))
                :
                setFilteredDataSource(messages);
            setSearch(text);
        }
        else {
            setFilteredDataSource(getUniqueChats(JSON.parse(JSON.stringify(masterDataSource))));
            setSearch(text);
        }
    };

    const searchInJourneyOrganizer = (text: string, chats: FilteredChat[]) => {
        return chats.filter(chat => {
            const data =
                chat!.journey!.organizer!.name.toUpperCase() +
                " " +
                chat!.journey!.organizer!.surname.toUpperCase();
            const textData = text.toUpperCase();

            return data!.indexOf(textData) > NOT_EXISTING_ELEMENT_INDEX;
        });
    };

    const searchInMessages = (text: string, chats: FilteredChat[]) => {
        return chats.filter(chat => {
            const data = chat.text.toUpperCase();
            const textData = text.toUpperCase();

            return data!.indexOf(textData) > NOT_EXISTING_ELEMENT_INDEX;
        });
    };

    const textHighlight = (textToHighlight: string, searchWords: string[]) => {
        const chunks = findAll({ textToHighlight, searchWords });

        return (
            <Text style={[MessagesStyle.textStyle, { color: DM("black") }]}>
                {chunks.map((chunk, index) => {
                    const text = textToHighlight.substr(chunk.start, chunk.end - chunk.start);

                    return (!chunk.highlight)
                        ? text
                        : (
                            <Text
                                key={index}
                                style={chunk.highlight && { backgroundColor: DM("yellow") }}
                            >
                                {text}
                            </Text>
                        );
                })}
            </Text>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={[MessagesStyle.container, { backgroundColor: DM("white") }]}>
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
                <FlatList
                    data={filteredDataSource}
                    keyExtractor={(msg, index) => index.toString() + msg}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Chat", {
                                    chatId: item.chatId,
                                    header:
                                        item.journey!.organizer?.name +
                                        " " +
                                        item.journey!.organizer?.surname +
                                        "'s ride"
                                });
                            }}
                        >
                            <View style={MessagesStyle.main}>
                                <View style={[MessagesStyle.wrapper, { borderColor: DM("black") }]}>
                                    <View style={MessagesStyle.avatarWrapper}>
                                        <AvatarLogo
                                            user={item.journey!.organizer}
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
                                                {item.journey!.organizer?.name}{" "}
                                                {item.journey!.organizer?.surname}'s ride
                                            </Text>
                                        </LinearTextGradient>
                                        {item.text ?
                                            textHighlight(item.text, search.split(" "))
                                            :
                                            <Text style={[MessagesStyle.textStyle, { color: DM("black") }]}>
                                                Starts at: {moment(
                                                    new Date(item!.journey!.departureTime)
                                                ).utc().format("DD.MM HH:mm")}
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
                                Each chat will be deleted 24 hours after the trip
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
        </SafeAreaView>
    );
};

export default Messages;
