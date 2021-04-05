import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Ionicons from "react-native-vector-icons/Ionicons";
import APIConfig from "../../../../../../../api-service/APIConfig";
import DM from "../../../../../../components/styles/DM";
import TouchableMapBar from "../../../../../../components/touchable-map-bar/TouchableMapBar";
import {
    FIRST_ELEMENT_INDEX,
    THIRD_FROM_END_ELEMENT_INDEX,
    INITIAL_LATITUDE,
    INITIAL_LONGITUDE, SECOND_ELEMENT_INDEX
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

    const getActualAddress = (latitude: number, longitude: number) => {
        return fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${APIConfig.apiKey}`
        )
            .then((res) => res.json())
            .then((json) => {
                const resultedAddress =
                    removeRegionAndPostalCode(json.results[SECOND_ELEMENT_INDEX].formatted_address);

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
                    <View style={[SetPlaceStyle.container,
                        {
                            borderColor: DM("black"),
                            backgroundColor: DM("white")
                        }]}>
                        <TextInput />
                        <Text style={[SetPlaceStyle.insideText, { color: DM("#909095") }]}></Text>
                        <DropDownPicker
                            customArrowDown={() => (
                                <Ionicons
                                    name="caret-down-outline"
                                    size={14}
                                    color={DM("black")}
                                />
                            )}
                            customArrowUp={() => (
                                <Ionicons
                                    name="caret-up-outline"
                                    size={14}
                                    color={DM("black")}
                                />
                            )}
                            items={props.items ?? []}
                            searchable={true}
                            searchablePlaceholder="Manual input"
                            searchablePlaceholderTextColor={DM("gray")}
                            searchableError={() => <Text>Not Found</Text>}
                            placeholder={props.placeHolder}
                            arrowColor={DM("black")}
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
                        pinColor={DM("#000080")}
                        onDragEnd={(e: any) => {
                            setLatitude(e.nativeEvent.coordinate.latitude);
                            setLongitude(e.nativeEvent.coordinate.longitude);
                            getActualAddress(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude);
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
