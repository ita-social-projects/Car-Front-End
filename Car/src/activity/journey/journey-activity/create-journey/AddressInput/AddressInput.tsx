import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import APIConfig from "../../../../../../api-service/APIConfig";
import AddressInputProps from "./AddressInputProps";
import AddressInputStyles from "./AddressInputStyles";
import { Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AddressInputRow from "./AddressInputRow/AddressInputRow";
import Location from "../../../../../../models/location/Location";
import { INITIAL_LATITUDE, INITIAL_LONGITUDE } from "../../../../../constants/Constants";

// const predefinedPlaces: Place[] = [
//     {
//         description: "Home",
//         geometry: { location: { lat: 49.877316, lng: 23.930052 } }
//     },
//     {
//         description: "Work",
//         geometry: { location: { lat: 49.834976, lng: 24.008147 } }
//     },
//     {
//         description: "Work 1",
//         geometry: { location: { lat: 49.834976, lng: 24.008147 } }
//     },
//     {
//         description: "Work 2",
//         geometry: { location: { lat: 49.834976, lng: 24.008147 } }
//     },
//     {
//         description: "Work 3",
//         geometry: { location: { lat: 49.834976, lng: 24.008147 } }
//     },
//     {
//         description: "Work 4",
//         geometry: { location: { lat: 49.834976, lng: 24.008147 } }
//     },
//     {
//         description: "Work 5",
//         geometry: { location: { lat: 49.834976, lng: 24.008147 } }
//     }
// ];

const mapSavedLocationsToPlaces = (locations: Location[]) => {
    return locations.map((location) => {
        return {
            description: location?.name ?? "Unnamed location",
            geometry: {
                location: {
                    lat: location?.address?.latitude ?? INITIAL_LATITUDE,
                    lng: location?.address?.longitude ?? INITIAL_LONGITUDE
                }
            }
        };
    });
};

const AddressInput = (props: AddressInputProps) => {
    return (
        <GooglePlacesAutocomplete
            predefinedPlaces={mapSavedLocationsToPlaces(props.savedLocations)}
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
            renderRow={(data) => <AddressInputRow data={data} />}
        />
    );
};

export default AddressInput;