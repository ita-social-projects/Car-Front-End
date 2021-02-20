import React, { useState, useEffect } from "react";
import { View, TextInput, SafeAreaView } from "react-native";
import {
    GooglePlaceData,
    GooglePlaceDetail,
    GooglePlacesAutocomplete
} from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";

import styles from "./RouteCreateStyles";
import PlaceRow from "./PlaceRow";

const homePlace = {
    description: "Home",
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }
};
const workPlace = {
    description: "Work",
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }
};

const DestinationSearch = () => {
    const [originPlace, setOriginPlace] = useState<Element | null>(null);
    const [destinationPlace, setDestinationPlace] = useState<Element | null>(
        null
    );

    const navigation = useNavigation();

    interface Element {
        data: GooglePlaceData;
        details: GooglePlaceDetail | null;
    }
    const checkNavigation = () => {
        if (originPlace && destinationPlace) {
            navigation.navigate("SearchResults", {
                originPlace,
                destinationPlace
            });
        }
    };

    useEffect(() => {
        checkNavigation();
    }, [originPlace, destinationPlace]);

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder="Where from?"
                onPress={(data, details = null) => {
                    setOriginPlace({ data, details });
                }}
                enablePoweredByContainer={false}
                suppressDefaultStyles
                styles={{
                    textInput: styles.textInput,
                    container: styles.autocompleteContainer,
                    listView: styles.listView,
                    separator: styles.separator
                }}
                fetchDetails
                query={{
                    key: "AIzaSyBccdNQgrDNw4l3kNniAn-jTBMpQrc212I",
                    language: "en"
                }}
                renderRow={(data) => <PlaceRow data={data} />}
                renderDescription={(data) => data.description}
                predefinedPlaces={[homePlace, workPlace]}
            />

            <GooglePlacesAutocomplete
                placeholder="Where to?"
                onPress={(data, details = null) => {
                    setDestinationPlace({ data, details });
                }}
                enablePoweredByContainer={false}
                suppressDefaultStyles
                styles={{
                    textInput: styles.textInput,
                    container: {
                        ...styles.autocompleteContainer,
                        top: 55
                    },
                    separator: styles.separator
                }}
                fetchDetails
                query={{
                    key: "AIzaSyBccdNQgrDNw4l3kNniAn-jTBMpQrc212I",
                    language: "en"
                }}
                renderRow={(data) => <PlaceRow data={data} />}
            />
        </View>
    );
};

export default DestinationSearch;
