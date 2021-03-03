import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TouchableCard from "../segment-control-activities/touchable/card/TouchableCard";
import TouchableMapBar from "../segment-control-activities/touchable/map-bar/TouchableMapBar";
import StopService from "../../../../../api-service/stop-service/StopService";
import LocationService from "../../../../../api-service/location-service/LocationService";
import SearchJouneyStyle from "./SearchJouneyStyle";
import StopType from "../../../../../models/StopType";
import Stop from "../../../../../models/Stop";
import Location from "../../../../../models/Location";
import SearchJourneyMap from "../segment-control-activities/map-address/SearchJourneyMap";
import AuthContext from "../../../../components/auth/AuthContext";

function SearchJourney() {
    const { user } = useContext(AuthContext);

    const [stops, setStop] = useState<Array<Array<Stop>> | null>([]);
    const [fromDirection, setFromDirection] = useState("Your location");
    const [isOpen, setOpen] = useState(false);
    const [latitude, setLatitude] = useState<Number | undefined>(1);
    const [longitude, setLongitude] = useState<Number | undefined>(1);
    const [isMapOpen, setMapOpen] = useState(100);
    const [locations, setLocations] = useState<Array<Location>>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        LocationService
            .getAll(Number(user?.id))
            .then((res: any) => {
                setLocations(res.data);
            })
            .catch((e: any) => console.log(e));
    }, []);

    useEffect(() => {
        StopService
            .getRecentJourneyStops(Number(user?.id))
            .then((res: any) => {
                setStop(res.data);
                setLoading(false);
            })
            .catch((e: any) => console.log(e));
    }, []);

    function getFullAddress(stopDto: Stop | undefined | null) {
        return stopDto?.address?.street + ", " + stopDto?.address?.city;
    }

    return (
        <View style={SearchJouneyStyle.screenContainer}>
            <View
                style={[SearchJouneyStyle.mapContainer, { zIndex: isMapOpen }]}
            >
                <SearchJourneyMap
                    latitude={latitude}
                    longitude={longitude}
                ></SearchJourneyMap>
                <TouchableOpacity
                    style={[
                        SearchJouneyStyle.carButtonSave,
                        { zIndex: 200, position: "absolute" }
                    ]}
                >
                    <Text style={SearchJouneyStyle.carButtonSaveText}>
                        Confirm
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={SearchJouneyStyle.topInputContainer}>
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

            <ScrollView style={[SearchJouneyStyle.container]}>
                <View style={SearchJouneyStyle.insideContainer}>
                    {loading ? (
                        <></>
                    ) : locations.length ? (
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
                            {locations.map((item: any) => {
                                return (
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
                                );
                            })}
                        </>
                    ) : (
                        {}
                    )}

                    {loading ? (
                        <ActivityIndicator
                            style={SearchJouneyStyle.spinner}
                            size={30}
                            color="black"
                        />
                    ) : (
                        <Text style={SearchJouneyStyle.recentJourneyText}>
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
            </ScrollView>
        </View>
    );
}

export default SearchJourney;
