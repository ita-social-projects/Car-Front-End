import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Text, View, ScrollView, RefreshControl, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import LocationService from "../../../../../api-service/location-service/LocationService";
import Location from "../../../../../models/location/Location";
import { useTheme } from "../../../../components/theme/ThemeProvider";
import TouchableNavigationCard from "../../../../components/touchable-navigation-card/TouchableNavigationCard";
import AddressBookStyle from "./AddressBookStyle";
import { ADDRESS_NAME_MAX_LINES_COUNT, ADDRESS_NAME_WIDTH_CUT } from "../../../../constants/AddressConstants";

export default function AddressBook (props: {navigation: any}) {
    const { colors } = useTheme();
    const [locations, setLocations] = useState<Array<Location>>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        loadLocations();
    }, []);

    const loadLocations = () => {
        LocationService.getAll().then((res) => {
            setLocations(res.data);
            setLoading(false);
            setRefreshing(false);
        });
    };

    useEffect(() => {
        return props.navigation.addListener("focus", loadLocations);
    }, [props.navigation]);

    let addLocationElement = (
        <View>
            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="AddLocation"
                cardName="Add a Address"
                picture={
                    <Ionicons
                        name={"add-circle-outline"}
                        size={26}
                        color={colors.hover}
                    />
                }
                angle="0"
            >
                <Text style={{ fontWeight: "bold", color: colors.primary, paddingVertical: 6 }}>
                    Add New Address
                </Text>
            </TouchableNavigationCard>
            {locations?.length ? (
                <></>
            ) : (
                <Text style={[AddressBookStyle.message, { color: colors.hover }]}>
                    Currently, you don`t have any locations on the list. Add
                    an address if you want to create journeys of your own.
                </Text>
            )}
        </View>
    );

    const EllipsizedText = (textProps : { text: string, style: any}) => (
        <View style={{ width: Dimensions.get("window").width - ADDRESS_NAME_WIDTH_CUT }}>
            <Text numberOfLines={ADDRESS_NAME_MAX_LINES_COUNT} ellipsizeMode={"tail"} style={textProps.style}>
                {textProps.text}
            </Text>
        </View>
    );

    const renderLocations = () => {
        return(
            locations.length ? (
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
                                            color={colors.hover}
                                        />
                                    }
                                >
                                    <EllipsizedText
                                        text={item!.name}
                                        style={[AddressBookStyle.name, { color: colors.primary }]}
                                    />

                                    <EllipsizedText
                                        text={item!.address!.name}
                                        style={[AddressBookStyle.address, { color: colors.hover }]}
                                    />
                                </TouchableNavigationCard>
                            </View>
                        );
                    })}
                    {addLocationElement}
                </>
            ) : (
                addLocationElement
            )
        );
    };

    return (
        <ScrollView
            style={[AddressBookStyle.container, { backgroundColor: colors.white }]}
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
                    <ActivityIndicator size={40} color={colors.primary} />
                ) : renderLocations()}
            </View>
        </ScrollView>
    );
}
