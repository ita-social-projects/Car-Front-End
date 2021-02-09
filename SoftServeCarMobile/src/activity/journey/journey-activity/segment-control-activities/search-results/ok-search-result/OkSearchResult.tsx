import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import Ionicons from "react-native-vector-icons/Ionicons"
import { Journey } from "../../../../../../../models/Journey"
import { Stop } from "../../../../../../../models/Stop"
import { User } from "../../../../../../../models/User"
import OkSearchResultStyle from "./OkSearchResultStyle"

const OkSearchResult = ({ route }: any) => {

    const [journeys, setJourneys] = useState<Array<Journey>>([
        {
            id: 1,
            routeDistance: 3,
            departureTime: null as unknown as Date,
            countOfSeats: 3,
            comments: '',
            isFree: true,
            scheduleId: 1,
            participants: null as unknown as Array<User>,
            stops: [null as Stop, null as Stop],
            organizer: { id: 52, name: 'Roman', surname: 'Danylevych', position: 'Student of SoftServe IT Academy', location: '', email: '', token: '', hireDate: Date.prototype, byteOfImage: '' }
        },
        {
            id: 2,
            routeDistance: 3,
            departureTime: null as unknown as Date,
            countOfSeats: 3,
            comments: '',
            isFree: true,
            scheduleId: 1,
            participants: null as unknown as Array<User>,
            stops: [null as Stop, null as Stop],
            organizer: { id: 52, name: 'Roman', surname: 'Danylevych', position: 'Student of SoftServe IT Academy', location: '', email: '', token: '', hireDate: Date.prototype, byteOfImage: '' }
        },
        {
            id: 3,
            routeDistance: 3,
            departureTime: null as unknown as Date,
            countOfSeats: 3,
            comments: '',
            isFree: true,
            scheduleId: 1,
            participants: null as unknown as Array<User>,
            stops: [null as Stop, null as Stop],
            organizer: { id: 52, name: 'Roman', surname: 'Danylevych', position: 'Student of SoftServe IT Academy', location: '', email: '', token: '', hireDate: Date.prototype, byteOfImage: '' }
        },
        {
            id: 4,
            routeDistance: 3,
            departureTime: null as unknown as Date,
            countOfSeats: 3,
            comments: '',
            isFree: true,
            scheduleId: 1,
            participants: null as unknown as Array<User>,
            stops: [null as Stop, null as Stop],
            organizer: { id: 52, name: 'Roman', surname: 'Danylevych', position: 'Student of SoftServe IT Academy', location: '', email: '', token: '', hireDate: Date.prototype, byteOfImage: '' }
        },
    ]);

    const navigation = useNavigation();

    return (
        <View style={OkSearchResultStyle.container}>
            <FlatList
                data={journeys}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate("Journey Page", {}); }}>
                            <View style={OkSearchResultStyle.component}>
                                <View style={OkSearchResultStyle.driverInfoBlock}>
                                    <View style={OkSearchResultStyle.imageBlock}>
                                        <Image style={OkSearchResultStyle.image}
                                            source={require("../../../../../../../assets/images/default-user-photo.jpg")} />
                                    </View>
                                    <View style={OkSearchResultStyle.driverTextBlock}>
                                        <View style={OkSearchResultStyle.driverNameBlock}>
                                            <View>
                                                <Text style={OkSearchResultStyle.driverNameText}>
                                                    {item?.organizer?.name + ' ' + item?.organizer?.surname}'s journey
                                                </Text>
                                            </View>
                                            <View style={OkSearchResultStyle.moreOptionsBlock}>
                                                <TouchableOpacity
                                                    onPress={() => { }}>
                                                    <Ionicons name={"ellipsis-horizontal"} color={"black"} size={20} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={OkSearchResultStyle.driverPositionBlock}>
                                            <Text style={OkSearchResultStyle.driverPositionText}>
                                                {item?.organizer?.position}
                                            </Text>
                                            <Text style={OkSearchResultStyle.timeText}>
                                                {item?.departureTime === null ? 'Today at 19:15' : item?.departureTime}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={OkSearchResultStyle.stopsBlock}>

                                    <View style={OkSearchResultStyle.firstStopBlock}>
                                        <View style={OkSearchResultStyle.stopCircleIcon} />
                                        <Text style={OkSearchResultStyle.stopsText}>
                                            Location A
                                        </Text>
                                    </View>
                                    <View style={OkSearchResultStyle.stopStickIcon}/>
                                    <View style={OkSearchResultStyle.lastStopBlock}>
                                        <View style={OkSearchResultStyle.stopCircleIcon} />
                                        <Text style={OkSearchResultStyle.stopsText}>
                                            Location B
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

export default OkSearchResult;