import React, { useContext, useEffect, useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TouchableCard from "../../../../components/touchable-card/TouchableCard";
import TouchableMapBar from "../../../../components/touchable-map-bar/TouchableMapBar";
import StopService from "../../../../../api-service/stop-service/StopService";
import LocationService from "../../../../../api-service/location-service/LocationService";
import SearchJourneyStyle from "./SearchJourneyStyle";
import Stop from "../../../../../models/stop/Stop";
import Location from "../../../../../models/location/Location";
import SearchJourneyMap from "../map-address/SearchJourneyMap";
import AuthContext from "../../../../components/auth/AuthContext";
import Indicator from "../../../../components/activity-indicator/Indicator";
import JourneyService from "../../../../../api-service/journey-service/JourneyService";
import Journey from "../../../../../models/Journey";
import * as navigation from "../../../../components/navigation/Navigation";
import StopType from "../../../../../models/stop/StopType";

function SearchJourney () {
    const { user } = useContext(AuthContext);

    const [stops, setStop] = useState<Array<Array<Stop>> | null>([]);
    const [fromDirection, setFromDirection] = useState("Your location");
    const [isOpen, setOpen] = useState(false);
    const [latitude, setLatitude] = useState<Number | undefined>(1);
    const [longitude, setLongitude] = useState<Number | undefined>(1);
    const [isMapOpen, setMapOpen] = useState(100);
    const [locations, setLocations] = useState<Array<Location>>([]);
    const [loading, setLoading] = useState(true);
    const [journeys, setJourneys] = useState<Array<Journey>>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        JourneyService.getJourney(1).then((res1) => {
            JourneyService.getJourney(2).then((res2) => {
                JourneyService.getJourney(3).then((res3) => {
                    JourneyService.getJourney(5).then((res4) => {
                        JourneyService.getJourney(7).then((res5) => {
                            JourneyService.getJourney(2).then((res6) => {
                                setJourneys([
                                    res1.data,
                                    res2.data,
                                    res3.data,
                                    res4.data,
                                    res5.data,
                                    res6.data,
                                    res1.data,
                                    res2.data,
                                    res3.data,
                                    res4.data,
                                    res5.data
                                ]);
                                setIsLoading(false);
                            });
                        });
                    });
                });
            });
        });
    }, []);

    useEffect(() => {
        LocationService
            .getAll(Number(user?.id))
            .then((res: any) => {
                setLocations(res.data);
            })
            .catch((e: any) => console.log(e));

        StopService
            .getRecentJourneyStops(Number(user?.id))
            .then((res: any) => {
                setStop(res.data);
                setLoading(false);
            })
            .catch((e: any) => console.log(e));
    }, []);

    const getFullAddress = (stopDto: Stop | undefined | null) =>
        stopDto?.address?.street + ", " + stopDto?.address?.city;

    return (
        <View style={SearchJourneyStyle.screenContainer}>
            <View
                style={[SearchJourneyStyle.mapContainer, { zIndex: isMapOpen }]}
            >
                <SearchJourneyMap
                    latitude={latitude}
                    longitude={longitude}
                ></SearchJourneyMap>
                <TouchableOpacity
                    style={
                        SearchJourneyStyle.confirmButton
                    }
                >
                    <Text style={SearchJourneyStyle.confirmButtonSaveText}>
                        Confirm
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={SearchJourneyStyle.topInputContainer}>
                <TouchableMapBar
                    directionType="From"
                    iconName="location"
                    defaultInputValue={fromDirection}
                    marginBottom="15"
                    marginTop="30"
                    flex="6"
                />
                {isOpen ? (
                    <TouchableMapBar
                        directionType="To"
                        iconName="map"
                        defaultInputValue={""}
                        marginBottom="12"
                        marginTop="3"
                        flex="10"
                    />
                ) : (
                    <></>
                )}
            </View>

            <ScrollView style={[SearchJourneyStyle.container]}>
                <View style={SearchJourneyStyle.insideContainer}>
                    {loading ? (
                        <></>
                    ) : locations.length != 1 ? (
                        <>
                            <TouchableCard
                                cardName="Map"
                                iconName="location"
                                angle="0"
                                address="Choose starting point on the Map"
                                addressFontColor="black"
                                iconColor="#414045"
                                size={25}
                                onPress={() => {
                                    setMapOpen(200);
                                }}
                            />
                            {locations.map((item: any) => (
                                <View key={item!.id}>
                                    <TouchableCard
                                        cardName={item?.name}
                                        iconName={
                                                item?.type?.name
                                                    ? item?.type?.name
                                                    : "location"
                                        }
                                        angle="0"
                                        address={
                                                item!.address?.street +
                                                ", " +
                                                item!.address?.city
                                        }
                                        addressFontColor="#909095"
                                        onPress={() => {
                                            setFromDirection(
                                                    item!.address?.street +
                                                        ", " +
                                                        item!.address?.city
                                            );
                                            setOpen(true);
                                            setLongitude(
                                                    item!.address?.longitude
                                            );
                                            setLatitude(
                                                    item!.address?.latitude
                                            );
                                        }}
                                        iconColor="#414045"
                                        size={25}
                                    />
                                </View>
                            ))}
                        </>
                    ) : (
                        {}
                    )}

                    {loading ? (
                        <View style={SearchJourneyStyle.loadingContainer}>
                            <Indicator
                                color="#414045"
                                size="large"
                                text="Loading information..."
                            />
                        </View>
                    ) : (
                        <Text style={SearchJourneyStyle.recentJourneyText}>
                            Recent Journeys
                        </Text>
                    )}
                    {stops?.length ? (
                        stops?.map((item: any) => (
                            <TouchableCard
                                key={item.map((i: any) => i?.id)}
                                cardName={getFullAddress(
                                    item.find(
                                        (address: any) =>
                                            address?.type === StopType.Start
                                    )
                                )}
                                iconName="ios-time-outline"
                                angle="0"
                                address={getFullAddress(
                                    item.find(
                                        (address: any) =>
                                            address?.type === StopType.Finish
                                    )
                                )}
                                addressFontColor="#909095"
                                iconColor="#909095"
                                size={30}
                            />
                        ))
                    ) : (
                        <></>
                    )}
                </View>
                <View style={SearchJourneyStyle.buttonsContainer}>
                    <View style={SearchJourneyStyle.button}>
                        <Button
                            disabled={isLoading}
                            color="#000000"
                            title="OK"
                            onPress={() => {
                                navigation.navigate("OK Search Result", {
                                    journeys: journeys
                                });
                            }}
                        />
                    </View>
                    <View style={SearchJourneyStyle.button}>
                        <Button
                            color="#000000"
                            title="BAD"
                            onPress={() => {
                                navigation.navigate("Bad Search Result");
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default SearchJourney;
