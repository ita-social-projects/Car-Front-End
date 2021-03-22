import React, { useContext, useEffect, useState } from "react";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
import TouchableCard from "../../../../components/touchable-card/TouchableCard";
import TouchableMapBar from "../../../../components/touchable-map-bar/TouchableMapBar";
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
import {
    HIDDEN_MAP_Z_INDEX,
    SHOWN_MAP_Z_INDEX,
    INITIAL_LATITUDE,
    INITIAL_LONGITUDE,
    SINGLE_ELEMENT_COLLECTION_LENGTH
} from "../../../../constants/Constants";
import DM from "../../../../components/styles/DM";

const SearchJourney = () => {
    const { user } = useContext(AuthContext);

    const [stops, setStop] = useState<Array<Array<Stop>> | null>([]);
    const [fromDirection, setFromDirection] = useState("Your location");
    const [isOpen, setOpen] = useState(false);
    const [latitude, setLatitude] = useState<number | undefined>(INITIAL_LATITUDE);
    const [longitude, setLongitude] = useState<number | undefined>(INITIAL_LONGITUDE);
    const [isMapOpen, setMapOpen] = useState(HIDDEN_MAP_Z_INDEX);
    const [locations, setLocations] = useState<Array<Location>>([]);
    const [loading, setLoading] = useState(true);
    const [journeys, setJourneys] = useState<Array<Journey>>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // eslint-disable-next-line no-magic-numbers
        JourneyService.getJourney(1).then((res1) => {
            // eslint-disable-next-line no-magic-numbers
            JourneyService.getJourney(2).then((res2) => {
                // eslint-disable-next-line no-magic-numbers
                JourneyService.getJourney(3).then((res3) => {
                    // eslint-disable-next-line no-magic-numbers
                    JourneyService.getJourney(5).then((res4) => {
                        // eslint-disable-next-line no-magic-numbers
                        JourneyService.getJourney(7).then((res5) => {
                            // eslint-disable-next-line no-magic-numbers
                            JourneyService.getJourney(8).then((res6) => {
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

        JourneyService
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
                />
                <TouchableOpacity style={[SearchJourneyStyle.confirmButton, { backgroundColor: DM(DM("black")) }]} >
                    <Text style={[SearchJourneyStyle.confirmButtonSaveText, { color: DM(DM("white")) }]}>
                        Confirm
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={[SearchJourneyStyle.topInputContainer,
                {
                    backgroundColor: DM("#FAFAFA"),
                    borderBottomColor: DM("#C1C1C5")
                }]}>
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

            <ScrollView style={[SearchJourneyStyle.container, { backgroundColor: DM("#FAFAFA") }]}>
                <View style={SearchJourneyStyle.insideContainer}>
                    {loading ? (
                        <></>
                    ) : locations.length != SINGLE_ELEMENT_COLLECTION_LENGTH ? (
                        <>
                            <TouchableCard
                                cardName="Map"
                                iconName="location"
                                angle="0"
                                address="Choose starting point on the Map"
                                addressFontColor={DM("black")}
                                iconColor={DM("#414045")}
                                size={25}
                                onPress={() => {
                                    setMapOpen(SHOWN_MAP_Z_INDEX);
                                }}
                            />
                            {locations.map((item: any) => (
                                <View key={item.id}>
                                    <TouchableCard
                                        cardName={item?.name}
                                        iconName={
                                                item?.type?.name
                                                    ? item?.type?.name
                                                    : "location"
                                        }
                                        angle="0"
                                        address={
                                                item.address?.street +
                                                ", " +
                                                item.address?.city
                                        }
                                        addressFontColor={DM("#909095")}
                                        onPress={() => {
                                            setFromDirection(
                                                    item.address?.street +
                                                        ", " +
                                                        item.address?.city
                                            );
                                            setOpen(true);
                                            setLongitude(
                                                    item.address?.longitude
                                            );
                                            setLatitude(
                                                    item.address?.latitude
                                            );
                                        }}
                                        iconColor={DM("#414045")}
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
                                color={DM("#414045")}
                                size="large"
                                text="Loading information..."
                            />
                        </View>
                    ) : (
                        <Text style={[SearchJourneyStyle.recentJourneyText, { color: DM("black") }]}>
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
                                addressFontColor={DM("#909095")}
                                iconColor={DM("#909095")}
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
                            color="green"
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
                            color="red"
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
};

export default SearchJourney;
