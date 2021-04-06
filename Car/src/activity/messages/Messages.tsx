import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { SearchBar } from "react-native-elements";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { LinearTextGradient } from "react-native-text-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import ChatService from "../../../api-service/chat-service/ChatService";
import AuthContext from "../../components/auth/AuthContext";
import AvatarLogo from "../../components/avatar-logo/AvatarLogo";
import MessagesStyle from "./MessagesStyle";
import * as navigation from "../../components/navigation/Navigation";
import { GRADIENT_END, GRADIENT_START, NOT_EXISTING_ELEMENT_INDEX } from "../../constants/Constants";
import DM from "../../components/styles/DM";
import MessagesProps from "./MessagesProps";

const Messages = (props: MessagesProps) => {
    const [filteredDataSource, setFilteredDataSource] = useState<any>([]);
    const [masterDataSource, setMasterDataSource] = useState<any>([]);
    const [search, setSearch] = useState("");
    const { user } = useContext(AuthContext);

    useEffect(() => {
        ChatService.getChat(user?.id).then((res) => {
            const chats = res.data;

            setFilteredDataSource(chats);
            setMasterDataSource(chats);
        });
    }, []);

    const setSearchFilter = (text: any) => {
        if (text) {
            const newData = masterDataSource.filter((item: any) => {
                const itemData =
                    item.journey.organizer.name +
                        " " +
                        item.journey.organizer.surname
                        ? item.journey.organizer.name.toUpperCase() +
                        " " +
                        item.journey.organizer.surname.toUpperCase()
                        : "".toUpperCase();
                const textData = text.toUpperCase();

                return itemData.indexOf(textData) > NOT_EXISTING_ELEMENT_INDEX;
            });

            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={[MessagesStyle.container, { backgroundColor: DM("white") }]}>
                {props.isOpenFilter ? (
                    <SearchBar
                        maxLength={25}
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
                    keyExtractor={(item, index) => index.toString() + item}
                    renderItem={({ item }: any) => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Chat", {
                                    chatId: item.id,
                                    header:
                                            item.journey.organizer.name +
                                            " " +
                                            item.journey.organizer.surname +
                                            "'s journey"
                                });
                            }}
                        >
                            <View style={MessagesStyle.main}>
                                <View style={[MessagesStyle.wrapper, { borderColor: DM("black") }]}>
                                    <View style={MessagesStyle.avatarWrapper}>
                                        <AvatarLogo
                                            user={item.journey.organizer}
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
                                                {item.journey.organizer.name}{" "}
                                                {item.journey.organizer.surname}'s journey
                                            </Text>
                                        </LinearTextGradient>
                                        <Text style={[MessagesStyle.textStyle, { color: DM("black") }]}>
                                        Starts at: {moment(
                                                new Date(item.journey.departureTime)
                                            ).format("DD.MM HH:mm")}
                                        </Text>
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
            </View>
        </SafeAreaView>
    );
};

export default Messages;
