import React, { useEffect, useRef } from "react";
import { Keyboard, Text, View, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete, GooglePlacesAutocompleteRef, Place } from "react-native-google-places-autocomplete";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import CredentialsManager from "../../../credentials/credentials.json";
import Address from "../../../models/Address";
import Location from "../../../models/location/Location";
import { INITIAL_LATITUDE, INITIAL_LONGITUDE } from "../../constants/AddressConstants";
import { useTheme } from "../theme/ThemeProvider";
import AddressInputProps from "./AddressInputProps";
import AddressInputRow from "./AddressInputRow/AddressInputRow";
import AddressInputStyles from "./AddressInputStyles";

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

const mapRecentAddressesToPlaces: (addresses: Address[]) => Place[] = addresses => {
    return addresses.map(address => ({
        description: address ? address.name : "Unnamed location",
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
    const { colors } = useTheme();
    const ref = useRef<GooglePlacesAutocompleteRef | null>();

    const keyboardDidHide = () => ref.current?.blur();

    useEffect(() => {
        Keyboard.addListener("keyboardDidHide", keyboardDidHide);

        return () => Keyboard.removeListener("keyboardDidHide", keyboardDidHide);
    }, []);

    return (
        <GooglePlacesAutocomplete
            ref={instance => {
                ref.current = instance;
                props.refFor && props.refFor(instance);
            }}
            predefinedPlaces={mapSavedLocationsToPlaces(props.savedLocations)
                .concat(mapRecentAddressesToPlaces(props.recentAddresses))}
            onPress={props.onPress}
            query={{
                key: CredentialsManager.mapApiKey,
                language: "ua",
                location: `${props.userLocation.latitude},${props.userLocation.longitude}`,
                radius: 30000
            }}
            renderLeftButton={() => (
                <Text style={[AddressInputStyles.placeholder, { color: colors.primary }]}>
                    {props.placeholder + ":"}
                </Text>
            )}
            renderRightButton={() => (
                props.address === "" ?
                    (<View style={AddressInputStyles.marker}>
                        <FontAwesome
                            name={"map-marker"}
                            size={30}
                            color={colors.navyBlueGradientFrom}
                        />
                    </View>) :
                    (<TouchableOpacity
                        style={AddressInputStyles.clearIcon}
                        onPress={props.onClearIconPress}
                    >
                        <Ionicons
                            name={"close"}
                            size={30}
                            color={colors.primary}
                        />
                    </TouchableOpacity>))}
            styles={{
                ...AddressInputStyles,
                ...{
                    textInput: {
                        ...AddressInputStyles.textInput,
                        paddingLeft: props.paddingLeft,
                        color: colors.primary,
                        backgroundColor: colors.white,
                        borderColor: colors.primary
                    },
                    row: {
                        backgroundColor: colors.white
                    },
                    separator: {
                        backgroundColor: colors.secondaryDark
                    },
                    description: {
                        color: colors.primary
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