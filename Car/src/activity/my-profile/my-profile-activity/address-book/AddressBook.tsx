import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Text, View, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import LocationService from "../../../../../api-service/location-service/LocationService";
import Location from "../../../../../models/Location";
import AuthContext from "../../../../components/auth/AuthContext";
import TouchableNavigationCard from "../touchable-navigation-card/TouchableNavigationCard";
import AddressBookStyle from "./AddressBookStyle";

export default function AddressBook(props: any) {
    const { user } = useContext(AuthContext);
    const [locations, setLocations] = useState<Array<Location>>([]);
    const [loading, setLoading] = useState(true);

    let addLocationElement = (
        <View>
            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="SetPlace"
                cardName="Add a Address"
                picture={
                    <Ionicons
                        name={"add-circle-outline"}
                        size={20}
                        color={"#414045"}
                    />
                }
                angle="0"
            >
                <Text style={{ fontWeight: "bold", color: "#02A2CF" }}>
                    Add new Address
                </Text>
            </TouchableNavigationCard>
            {locations?.length ? (
                <></>
            ) : (
                <Text style={AddressBookStyle.message}>
                    Currently you don’t have any address in the list. You have
                    to add a address if you want to create or search Journeys
                    with personal one.
                </Text>
            )}
        </View>
    );

    useEffect(() => {
        LocationService
            .getAll(Number(user?.id))
            .then((res: any) => {
                setLocations(res.data);
                setLoading(false);
            })
            .catch((e: any) => console.log(e));
    }, []);

    return (
        <ScrollView
            style={AddressBookStyle.container}
            contentContainerStyle={loading && AddressBookStyle.loading}
        >
            <View
                style={[
                    AddressBookStyle.locationContainer,
                    loading && AddressBookStyle.loading
                ]}
            >
                {loading ? (
                    <ActivityIndicator size={40} color="black" />
                ) : locations.length ? (
                    <>
                        {locations.map((item: any) => {
                            return (
                                <View key={item!.id}>
                                    <TouchableNavigationCard
                                        carId={item!.id}
                                        navigationName="EditAddress"
                                        cardName="Edit a Address"
                                        picture={
                                            <Ionicons
                                                name={
                                                    item?.type?.name
                                                        ? item?.type?.name
                                                        : "location"
                                                }
                                                size={25}
                                                color="#414045"
                                            />
                                        }
                                    >
                                        <Text style={AddressBookStyle.name}>
                                            {item!.name}
                                        </Text>
                                        <Text style={AddressBookStyle.address}>
                                            {item!.address?.street +
                                                ", " +
                                                item!.address?.city}
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
