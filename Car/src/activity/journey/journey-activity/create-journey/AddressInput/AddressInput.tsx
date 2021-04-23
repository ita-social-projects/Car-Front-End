import React from "react";
import { GooglePlacesAutocomplete, Place } from "react-native-google-places-autocomplete";
import APIConfig from "../../../../../../api-service/APIConfig";
import AddressInputProps from "./AddressInputProps";
import AddressInputStyles from "./AddressInputStyles";
import { Text, TouchableOpacity, View } from "react-native";
import AddressInputRow from "./AddressInputRow/AddressInputRow";
import Location from "../../../../../../models/location/Location";
import { INITIAL_LATITUDE, INITIAL_LONGITUDE } from "../../../../../constants/Constants";
import Address from "../../../../../../models/Address";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// eslint-disable-next-line unused-imports/no-unused-vars
const mapSavedLocationsToPlaces: (locations: Location[]) => Place[] = locations => {
    return locations.map((location) => ({
        description: location?.name ?? "Unnamed location",
        geometry: {
            location: {
                lat: location?.address?.latitude ?? INITIAL_LATITUDE,
                lng: location?.address?.longitude ?? INITIAL_LONGITUDE
            }
        },
        iconName: location?.type?.name
    }));
};

// eslint-disable-next-line unused-imports/no-unused-vars
const mapRecentAddressesToPlaces: (addresses: Address[]) => Place[] = addresses => {
    return addresses.map(address => ({
        description: address ? `${address.city}, ${address.street}` : "Unnamed location",
        geometry: {
            location: {
                lat: address?.latitude ?? INITIAL_LATITUDE,
                lng: address?.longitude ?? INITIAL_LONGITUDE
            }
        },
        iconName: "ios-time-outline"
    }));
};

const AddressInput = (props: AddressInputProps) => {
    return (
        <GooglePlacesAutocomplete
            predefinedPlaces={mapSavedLocationsToPlaces(props.savedLocations)
                .concat(mapRecentAddressesToPlaces(props.recentAddresses))}
            onPress={props.onPress}
            query={{
                key: APIConfig.apiKey,
                language: "ua",
                location: `${props.userLocation.latitude},${props.userLocation.longitude}`,
                radius: 30000
            }}
            renderLeftButton={() => (
                <Text style={AddressInputStyles.placeholder}>
                    {props.placeholder + ":"}
                </Text>
            )}
            renderRightButton={() => (
                props.address === "" ?
                    (<View style={AddressInputStyles.marker}>
                        <FontAwesome
                            name={"map-marker"}
                            size={30}
                            color={"#5355fc"}
                        />
                    </View>) :
                    (<TouchableOpacity
                        style={AddressInputStyles.clearIcon}
                        onPress={props.onClearIconPress}
                    >
                        <Ionicons
                            name={"close"}
                            size={30}
                            color={"black"}
                        />
                    </TouchableOpacity>))}
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
            minLength={2}
        />
    );
};

export default AddressInput;