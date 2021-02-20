import React, { useContext, useEffect, useState } from "react";
import {
    ActivityIndicator,
    Button,
    FlatList,
    Modal,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TouchableCard from "../segment-control-activities/touchable/card/TouchableCard";
import TouchableMapBar from "../segment-control-activities/touchable/map-bar/TouchableMapBar";
import { container } from "tsyringe";
import StopService from "../../../../../api-service/stop-service/StopService";
import AuthContext from "../../../auth/AuthContext";
import SearchJouneyStyle from "./SearchJouneyStyle";
import StopType from "../../../../../models/StopType";
import Stop from "../../../../../models/Stop";
import { useNavigation } from "@react-navigation/native";
import MapGetAddress from "../segment-control-activities/map-address/MapGetAddress";
import Journey from "../../../../../models/Journey";
import DestinationSearch from "../segment-control-activities/map-address/DestinationSearch";

function SearchJourney() {
    const navigation = useNavigation();
    const { user } = useContext(AuthContext);
    const stopService = container.resolve(StopService);

    const [stops, setStop] = useState<Array<Array<Stop>> | null>([]);
    const [fromDirection, setFromDirection] = useState("Your location");
    const [toDirection, setToDirection] = useState("");
    const [isOpen, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isMapOpen, setMapOpen] = useState(100);

    useEffect(() => {
        stopService
            .getRecentJourneyStops(Number(user?.id))
            .then((res) => {
                setStop(res.data);
                setLoading(false);
            })
            .catch((e) => console.log(e));
    }, []);

    function getFullAddress(stopDto: Stop | undefined | null) {
        return stopDto?.address?.city + ", " + stopDto?.address?.street;
    }

    return (
        <View style={SearchJouneyStyle.screenContainer}>
            <View
                style={[SearchJouneyStyle.mapContainer, { zIndex: isMapOpen }]}
            >
                <MapGetAddress></MapGetAddress>

                <TouchableOpacity
                    style={[
                        SearchJouneyStyle.carButtonSave,
                        { zIndex: 200, position: "absolute" }
                    ]}
                    onPress={() => { }}
                >
                    <Text style={SearchJouneyStyle.carButtonSaveText}>
                        Confirm
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={SearchJouneyStyle.topInputContainer}>
                {/* <DestinationSearch/>  */}
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
                        defaultInputValue={toDirection}
                        marginBottom="12"
                        marginTop="3"
                        flex="10"
                    />
                ) : (
                        <></>
                    )}
            </View>

            <ScrollView style={[SearchJouneyStyle.container]}>
                <View style={{ zIndex: 150 }}>
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
                    <TouchableCard
                        cardName="Home"
                        iconName="home-outline"
                        angle="0"
                        address="Trifon Kunev 26, Sofia"
                        addressFontColor="#909095"
                        onPress={() => {
                            setFromDirection("Home");
                            setOpen(true);
                        }}
                        iconColor="#414045"
                        size={25}
                    />
                    <TouchableCard
                        cardName="Work"
                        iconName="briefcase-outline"
                        angle="0"
                        address="SoftServe, Bld. 'Bulgaria' 49"
                        addressFontColor="#909095"
                        iconColor="#414045"
                        onPress={() => {
                            navigation.navigate("Search");
                        }}
                        size={25}
                    />

                    <Text style={SearchJouneyStyle.recentJourneyText}>
                        Recent Journeys
                    </Text>
                    {loading ? (
                        <ActivityIndicator
                            style={SearchJouneyStyle.spinner}
                            size={30}
                            color="black"
                        />
                    ) : (
                            <></>
                        )}
                    {stops?.length ? (
                        stops?.map((item) => (
                            <TouchableCard
                                key={item.map((i) => i?.id)}
                                cardName={getFullAddress(
                                    item.find(
                                        (address) =>
                                            address?.type === StopType.Start
                                    )
                                )}
                                iconName="ios-time-outline"
                                angle="0"
                                address={getFullAddress(
                                    item.find(
                                        (address) =>
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
