import React from "react";
import { GooglePlacesAutocomplete, Place } from "react-native-google-places-autocomplete";
import APIConfig from "../../../../../../api-service/APIConfig";
import AddressInputProps from "./AddressInputProps";
import AddressInputStyles from "./AddressInputStyles";
import { Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AddressInputRow from "./AddressInputRow/AddressInputRow";
import Location from "../../../../../../models/location/Location";
import { INITIAL_LATITUDE, INITIAL_LONGITUDE } from "../../../../../constants/Constants";

let recentRides = [
    {
        description: "Address 1",
        geometry: { location: { lat: 49.877316, lng: 23.930052 } }
    },
    {
        description: "Address 2",
        geometry: { location: { lat: 49.834976, lng: 24.008147 } }
    },
    {
        description: "Address 3",
        geometry: { location: { lat: 49.834976, lng: 24.008147 } }
    },
    {
        description: "Address 4",
        geometry: { location: { lat: 49.834976, lng: 24.008147 } }
    },
    {
        description: "Address 5",
        geometry: { location: { lat: 49.834976, lng: 24.008147 } }
    }
];

recentRides = recentRides.map(ride => {
    return { ...ride, iconName: "ios-time-outline" };
});

// eslint-disable-next-line unused-imports/no-unused-vars
const mapSavedLocationsToPlaces: (locations: Location[]) => Place[] = (locations: Location[]) => {
    return locations.map((location) => {
        return {
            description: location?.name ?? "Unnamed location",
            geometry: {
                location: {
                    lat: location?.address?.latitude ?? INITIAL_LATITUDE,
                    lng: location?.address?.longitude ?? INITIAL_LONGITUDE
                }
            },
            iconName: location?.type?.name
        };
    });
};

const AddressInput = (props: AddressInputProps) => {
    return (
        <GooglePlacesAutocomplete
            predefinedPlaces={mapSavedLocationsToPlaces(props.savedLocations).concat(recentRides)}
            onPress={props.onPress}
            query={{
                key: APIConfig.apiKey,
                language: "ua"
            }}
            renderLeftButton={() => (
                <Text style={AddressInputStyles.placeholder}>
                    {props.placeholder + ":"}
                </Text>
            )}
            renderRightButton={() => (
                <View style={AddressInputStyles.marker}>
                    <FontAwesome
                        name={"map-marker"}
                        size={30}
                        color={"#5355fc"}
                    />
                </View>
            )}
            styles={{
                ...AddressInputStyles,
                ...{
                    textInput: {
                        ...AddressInputStyles.textInput,
                        paddingLeft: props.paddingLeft
                    }
                }
            }}
            enablePoweredByContainer={false}
            isRowScrollable={false}
            textInputProps={{
                onChangeText: props.onChangeText,
                value: props.address
            }}
            placeholder={""}
            renderRow={(data) => (<AddressInputRow data={data}/>)}
        />
    );
};

export default AddressInput;