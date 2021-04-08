import React from "react";
import { GooglePlacesAutocomplete, Place } from "react-native-google-places-autocomplete";
import APIConfig from "../../../../../../api-service/APIConfig";
import AddressInputProps from "./AddressInputProps";
import AddressInputStyles from "./AddressInputStyles";
import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AddressInputRow from "./AddressInputRow/AddressInputRow";
import Location from "../../../../../../models/location/Location";
import { FIRST_ELEMENT_INDEX, INITIAL_LATITUDE, INITIAL_LONGITUDE } from "../../../../../constants/Constants";

const predefinedPlaces = [
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
    }
];

predefinedPlaces.unshift({
    ...predefinedPlaces[FIRST_ELEMENT_INDEX],
    isTitle: true
} as Place);

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
            predefinedPlaces={mapSavedLocationsToPlaces(props.savedLocations).concat(predefinedPlaces)}
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
                <TouchableOpacity
                    style={AddressInputStyles.marker}
                    onPress={props.onMarkerPress}
                >
                    <FontAwesome
                        name={"map-marker"}
                        size={30}
                        color={props.isMarkerFocus ? "#5355fc" : "grey"}
                    />
                </TouchableOpacity>
            )}
            styles={{
                ...AddressInputStyles,
                ...{
                    container: {
                        ...AddressInputStyles.container,
                        ...{ top: props.top }
                    },
                    textInput: {
                        ...AddressInputStyles.textInput,
                        ...{ paddingLeft: props.paddingLeft }
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
            renderRow={(data) => {
                if ((data as any)?.isTitle) {
                    return (
                        <View style={AddressInputStyles.recentRidesTitleContainer}>
                            <Text style={AddressInputStyles.recentRidesTitle}>
                                Recent rides
                            </Text>
                        </View>
                    );
                }

                return (<AddressInputRow data={data}/>);
            }}
        />
    );
};

export default AddressInput;