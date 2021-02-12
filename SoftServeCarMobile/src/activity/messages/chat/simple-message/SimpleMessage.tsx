import ChatService from "../../../../../api-service/chat-service/ChatService";
import { AuthContext } from "../../../auth/AuthProvider";
import React, { useEffect, useState, useContext } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import "reflect-metadata";
import { container } from 'tsyringe';
import { SearchBar } from "react-native-elements";
import SimpleMessageStyle from "./SimpleMessageStyle";


const SimpleMessage = (props: any) => {
    const chatService = container.resolve(ChatService);
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [search, setSearch] = useState('');
    const { user } = useContext(AuthContext);

    useEffect(() => {
        chatService.getChat(user?.id)
            .then(res => {
                const chats = res.data;
                console.log(chats);
                setFilteredDataSource(chats);
                setMasterDataSource(chats);
            })
    }, []);

    const setSearchFilter = (text) => {
        if (text) {
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
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
        return (props.isOpenFilter) ? (
            <SearchBar
                searchIcon={{ color: "black", size: 28 }}
                onChangeText={(text) => setSearchFilter(text)}
                onClear={() => setSearchFilter('')}
                placeholder={'Search in Messages'}
                value={search}
                containerStyle={SimpleMessageStyle.containerStyle}
                inputContainerStyle={SimpleMessageStyle.inputContainerStyle}
            />) : <View />
    };

    const ItemView = ({ item }) => {
        return (
            <View style={SimpleMessageStyle.main}>
                <View style={SimpleMessageStyle.button}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={SimpleMessageStyle.image}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' }} />
                        <View>
                            <Text style={SimpleMessageStyle.fonts}>{item.name}</Text>
                            <Text style={SimpleMessageStyle.textStyle}>{item.name} </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ paddingTop: 12, }}
                        onPress={() => props.navigation.navigate("Chat")}>
                        <View><Ionicons name={'chatbubbles'} size={20} /></View>
                    </TouchableOpacity>
                </View>
            </View>
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
}

export default SimpleMessage;

