import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Journey } from "../../../../../../../models/Journey";
import OkSearchResultStyle from "./OkSearchResultStyle";

const OkSearchResult = ({ route }: any) => {
    const journeys: Array<Journey> = route.params.journeys;
    const navigation = useNavigation();

    return (
        <View style={OkSearchResultStyle.container}>
            <FlatList
                data={journeys}
                keyExtractor={(item, index) => "" + item + index}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Journey Page", {
                                    journeyId: item?.id
                                });
                            }}
                        >
                            <View style={OkSearchResultStyle.component}>
                                <View
                                    style={OkSearchResultStyle.driverInfoBlock}
                                >
                                    <View
                                        style={OkSearchResultStyle.imageBlock}
                                    >
                                        <Image
                                            style={OkSearchResultStyle.image}
                                            source={require("../../../../../../../assets/images/default-user-photo.jpg")}
                                        />
                                    </View>
                                    <View
                                        style={
                                            OkSearchResultStyle.driverTextBlock
                                        }
                                    >
                                        <View
                                            style={
                                                OkSearchResultStyle.driverNameBlock
                                            }
                                        >
                                            <View>
                                                <Text
                                                    style={
                                                        OkSearchResultStyle.driverNameText
                                                    }
                                                >
                                                    {item?.organizer?.name +
                                                        " " +
                                                        item?.organizer
                                                            ?.surname}
                                                    's journey
                                                </Text>
                                            </View>
                                            <View
                                                style={
                                                    OkSearchResultStyle.moreOptionsBlock
                                                }
                                            >
                                                <TouchableOpacity
                                                    onPress={() => {}}
                                                >
                                                    <Ionicons
                                                        name={
                                                            "ellipsis-horizontal"
                                                        }
                                                        color={"black"}
                                                        size={20}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View
                                            style={
                                                OkSearchResultStyle.driverPositionBlock
                                            }
                                        >
                                            <Text
                                                style={
                                                    OkSearchResultStyle.driverPositionText
                                                }
                                            >
                                                {item?.organizer?.position}
                                            </Text>
                                            <Text
                                                style={
                                                    OkSearchResultStyle.timeText
                                                }
                                            >
                                                {item?.departureTime ===
                                                undefined
                                                    ? "Today at 19:15"
                                                    : item?.departureTime}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={OkSearchResultStyle.stopsBlock}>
                                    <View
                                        style={
                                            OkSearchResultStyle.firstStopBlock
                                        }
                                    >
                                        <View
                                            style={
                                                OkSearchResultStyle.stopCircleIcon
                                            }
                                        />
                                        <Text
                                            style={
                                                OkSearchResultStyle.stopsText
                                            }
                                        >
                                            {item?.stops[0]?.address.street ===
                                            undefined
                                                ? "Location A"
                                                : item?.stops[0]?.address
                                                      .street}
                                        </Text>
                                    </View>
                                    <View
                                        style={
                                            OkSearchResultStyle.stopStickIcon
                                        }
                                    />
                                    <View
                                        style={
                                            OkSearchResultStyle.lastStopBlock
                                        }
                                    >
                                        <View
                                            style={
                                                OkSearchResultStyle.stopCircleIcon
                                            }
                                        />
                                        <Text
                                            style={
                                                OkSearchResultStyle.stopsText
                                            }
                                        >
                                            {item?.stops[item?.stops.length - 1]
                                                ?.address.street === undefined
                                                ? "Location B"
                                                : item?.stops[
                                                      item?.stops.length - 1
                                                  ]?.address.street}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

export default OkSearchResult;
