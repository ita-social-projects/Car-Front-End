import ChatService from "../../../../../api-service/chat-service/ChatService";
import AuthContext from "../../../../components/auth/AuthContext";
import React, { useEffect, useState, useContext } from "react";
import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    FlatList
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import "reflect-metadata";
import { SearchBar } from "react-native-elements";
import SimpleMessageStyle from "./SimpleMessageStyle";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import APIConfig from "../../../../../api-service/APIConfig";
import AvatarLogo from "../../../../components/avatar-logo/AvatarLogo";

const SimpleMessage = (props: any) => {
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [search, setSearch] = useState("");
    const { user } = useContext(AuthContext);
    const [hubConnection, setHubConnection] = useState<HubConnection>();

    useEffect(() => {
        ChatService.getChat(user?.id).then((res) => {
            const chats = res.data;
            console.log(chats);
            setFilteredDataSource(chats);
            setMasterDataSource(chats);
        });
        const hubConnectionFunc = new HubConnectionBuilder()
            .withUrl(APIConfig.URL + "Chat/")
            .build();
        hubConnectionFunc?.start().then(() => "Connection started!");
        setHubConnection(hubConnectionFunc);
    }, []);

    const setSearchFilter = (text: any) => {
        if (text) {
            const newData = masterDataSource.filter(function (item) {
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
                containerStyle={SimpleMessageStyle.containerStyle}
                inputContainerStyle={SimpleMessageStyle.inputContainerStyle}
            />
        ) : (
            <View />
        );
    };

    const ItemView = ({ item }: any) => {
        return (
            <TouchableOpacity
                onPress={() =>
                    props.navigation.navigate("Chat", {
                        hubConnection: hubConnection,
                        chatId: item.id
                    })
                }
            >
                <View style={SimpleMessageStyle.main}>
                    <View style={SimpleMessageStyle.wrapper}>
                        <View style={SimpleMessageStyle.avatarWrapper}>
                            <AvatarLogo user={item.journey.organizer} size={50} />
                        </View>
                        <View style={SimpleMessageStyle.dataWrapper}>
                            <Text style={SimpleMessageStyle.fonts}>
                                {item.journey.organizer.name}{" "}
                                {item.journey.organizer.surname}
                            </Text>
                            <Text style={SimpleMessageStyle.textStyle}>
                                {item.journey.departureTime
                                    .replace("T", " ")
                                    .slice(0, 16)}
                            </Text>
                        </View>
                        <View style={SimpleMessageStyle.iconWrapper}>
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
            <View style={SimpleMessageStyle.container}>
                {renderHeader()}
                <FlatList
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={ItemView}
                />
            </View>
        </SafeAreaView>
    );
};

export default SimpleMessage;
