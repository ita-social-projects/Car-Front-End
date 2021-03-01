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

const Messages = (props: any) => {
    const [filteredDataSource, setFilteredDataSource] = useState<any>([]);
    const [masterDataSource, setMasterDataSource] = useState<any>([]);
    const [search, setSearch] = useState("");
    const { user } = useContext(AuthContext);

    useEffect(() => {
        ChatService.getChat(user?.id).then((res) => {
            const chats = res.data;

            console.log(chats);
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
                
                return itemData.indexOf(textData) > -1;
            });

            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    const renderHeader = () => {
        return props.isOpenFilter ? (
            <SearchBar
                searchIcon={{ color: "black", size: 28 }}
                onChangeText={(text) => setSearchFilter(text)}
                onClear={() => setSearchFilter("")}
                placeholder={"Search in Messages"}
                value={search}
                containerStyle={MessagesStyle.containerStyle}
                inputContainerStyle={MessagesStyle.inputContainerStyle}
            />
        ) : (
            <View />
        );
    };

    const ItemView = ({ item }: any) => {
        return (
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
                    <View style={MessagesStyle.wrapper}>
                        <View style={MessagesStyle.avatarWrapper}>
                            <AvatarLogo
                                user={item.journey.organizer}
                                size={50}
                            />
                        </View>
                        <View style={MessagesStyle.dataWrapper}>
                            <LinearTextGradient
                                locations={[0, 1]}
                                colors={["#00A3CF", "#5552A0"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text style={MessagesStyle.fonts}>
                                    {item.journey.organizer.name}{" "}
                                    {item.journey.organizer.surname}'s journey
                                </Text>
                            </LinearTextGradient>
                            <Text style={MessagesStyle.textStyle}>
                                {moment(
                                    new Date(item.journey.departureTime)
                                ).calendar()}
                            </Text>
                        </View>
                        <View style={MessagesStyle.iconWrapper}>
                            <View>
                                <Ionicons name={"chatbubbles"} size={20} />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={MessagesStyle.container}>
                {renderHeader()}
                <FlatList
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString() + item}
                    renderItem={ItemView}
                />
            </View>
        </SafeAreaView>
    );
};

export default Messages;
