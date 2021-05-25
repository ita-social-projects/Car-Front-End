import React, { useCallback, useContext, useEffect, useState } from "react";
import { ActivityIndicator, Text, View, ScrollView, RefreshControl } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import LocationService from "../../../../../api-service/location-service/LocationService";
import Location from "../../../../../models/location/Location";
import AuthContext from "../../../../components/auth/AuthContext";
import DM from "../../../../components/styles/DM";
import TouchableNavigationCard from "../../../../components/touchable-navigation-card/TouchableNavigationCard";
import AddressBookStyle from "./AddressBookStyle";
import { FIRST_ELEMENT_INDEX, THREE_ELEMENT_COLLECTION_LENGTH } from "../../../../constants/GeneralConstants";
import { MAX_ADDRESS_NAME_LENGTH } from "../../../../constants/LocationConstants";

export default function AddressBook (props: {navigation: any}) {
    const { user } = useContext(AuthContext);
    const [locations, setLocations] = useState<Array<Location>>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        loadLocations();
    }, []);

    const loadLocations = () => {
        LocationService.getAll(Number(user?.id)).then((res: any) => {
            setLocations(res.data);
            setLoading(false);
            setRefreshing(false);
        });
    };

    useEffect(() => {
        return props.navigation.addListener("focus", loadLocations);
    }, [props.navigation]);

    const addressNameSubstring = (addressName: string) => {
        return addressName.substr(FIRST_ELEMENT_INDEX,
            MAX_ADDRESS_NAME_LENGTH - THREE_ELEMENT_COLLECTION_LENGTH) + "...";
    };

    const mapAddressName = (addressName: string) => {
        if (addressName.length <= MAX_ADDRESS_NAME_LENGTH)
            return addressName;
        else
            return addressNameSubstring(addressName);
    };
    let addLocationElement = (
        <View>
            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="AddLocation"
                cardName="Add a Address"
                picture={
                    <Ionicons
                        name={"add-circle-outline"}
                        size={20}
                        color={DM("#414045")}
                    />
                }
                angle="0"
            >
                <Text style={{ fontWeight: "bold", color: DM("#02A2CF") }}>
                    Add New Address
                </Text>
            </TouchableNavigationCard>
            {locations?.length ? (
                <></>
            ) : (
                <Text style={[AddressBookStyle.message, { color: DM("#414045") }]}>
                    Currently you don’t have any address in the list. You have
                    to add a address if you want to create or search Journeys
                    with personal one.
                </Text>
            )}
        </View>
    );

    return (
        <ScrollView
            style={[AddressBookStyle.container, { backgroundColor: DM("white") }]}
            contentContainerStyle={loading && AddressBookStyle.loading}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }
        >
            <View
                style={[
                    AddressBookStyle.locationContainer,
                    loading && AddressBookStyle.loading
                ]}
            >
                {loading ? (
                    <ActivityIndicator size={40} color={DM("black")} />
                ) : locations.length ? (
                    <>
                        {locations.map((item: Location) => {
                            // @ts-ignore
                            // @ts-ignore
                            return (
                                <View key={item?.id}>
                                    <TouchableNavigationCard
                                        navigation={props.navigation}
                                        carId={item?.id}
                                        navigationName="EditLocation"
                                        cardName="Edit a Address"
                                        picture={
                                            <Ionicons
                                                name={
                                                    item?.type?.name
                                                        ? item?.type?.name
                                                        : "star-outline"
                                                }
                                                size={25}
                                                color={DM("#414045")}
                                            />
                                        }
                                    >
                                        <Text style={[AddressBookStyle.name, { color: DM("black") }]}>
                                            {item?.name}
                                        </Text>
                                        <Text style={[AddressBookStyle.address, { color: DM("#414045") }]}>
                                            {mapAddressName(item!.address!.name)}
                                        </Text>
                                    </TouchableNavigationCard>
                                </View>
                            );
                        })}
                        {addLocationElement}
                    </>
                ) : (
                    addLocationElement
                )}
            </View>
        </ScrollView>
    );
}
