import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Ionicons from "react-native-vector-icons/Ionicons";
import APIConfig from "../../../../../../../api-service/APIConfig";
import TouchableMapBar from "../../../../../../components/touchable-map-bar/TouchableMapBar";
import {
    FIRST_ELEMENT_INDEX,
    THIRD_FROM_END_ELEMENT_INDEX,
    INITIAL_LATITUDE,
    INITIAL_LONGITUDE
} from "../../../../../../constants/Constants";
import SetPlaceStyle from "./SetPlaceStyle";

const SetPlace = (props: any) => {
    const [latitude, setLatitude] = useState(INITIAL_LATITUDE);
    const [longitude, setLongitude] = useState(INITIAL_LONGITUDE);
    const [address, setAddress] = useState("");
    const initialRegion = {
        latitude: 49.843844,
        longitude: 24.025581,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    };

    const removeRegionAndPostalCode = (json: string) => {
        return json.split(", ").slice(FIRST_ELEMENT_INDEX, THIRD_FROM_END_ELEMENT_INDEX).join(", ");
    };

    const getActualAddress = () => {
        return fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${APIConfig.apiKey}`
        )
            .then((res) => res.json())
            .then((json) => {
                var indexOfResultedArray = 1;
                var resultedAddress = removeRegionAndPostalCode(
                    json.results[indexOfResultedArray].formatted_address
                );

                setAddress(resultedAddress);
            });
    };

    return (
        <View style={SetPlaceStyle.globalContainer}>
            <View style={SetPlaceStyle.mapContainer}>
                <TouchableMapBar
                    directionType="Address"
                    iconName="location"
                    defaultInputValue={address}
                    marginBottom="15"
                    marginTop="30"
                    flex="6"
                />

                <>
                    <View style={SetPlaceStyle.container}>
                        <TextInput />
                        <Text style={SetPlaceStyle.insideText}></Text>
                        <DropDownPicker
                            customArrowDown={() => (
                                <Ionicons name="caret-down-outline" size={14} />
                            )}
                            customArrowUp={() => (
                                <Ionicons name="caret-up-outline" size={14} />
                            )}
                            items={props.items ?? []}
                            searchable={true}
                            searchablePlaceholder="Manual input"
                            searchablePlaceholderTextColor="gray"
                            searchableError={() => <Text>Not Found</Text>}
                            placeholder={props.placeHolder}
                            defaultValue={""}
                            onChangeItem={
                                props.selectHandle
                                    ? (item) => {
                                        props.selectHandle(item);
                                    }
                                    : () => {}
                            }
                            disabled={props.disabled}
                        />
                    </View>
                </>
                <MapView
                    style={SetPlaceStyle.map}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={initialRegion}
                >
                    <Marker
                        draggable={true}
                        pinColor={"#000080"}
                        onDragEnd={(e: any) => {
                            setLatitude(e.nativeEvent.coordinate.latitude);
                            setLongitude(e.nativeEvent.coordinate.longitude);
                            getActualAddress();
                        }}
                        image={require("../../../../../../../assets/images/custom-marker.png")}
                        coordinate={{
                            latitude: latitude,
                            longitude: longitude
                        }}
                    />
                </MapView>
            </View>
        </View>
    );
};

export default SetPlace;
