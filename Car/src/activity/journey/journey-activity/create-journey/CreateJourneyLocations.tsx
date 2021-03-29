import React, { useEffect, useState } from "react";
import { PermissionsAndroid, Platform, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import APIConfig from "../../../../../api-service/APIConfig";
import SearchJourneyStyle from "../search-journey/SearchJourneyStyle";
import { mapStyle } from "../map-address/SearchJourneyMapStyle";
import Geolocation from "@react-native-community/geolocation";
import TouchableMapBar from "../../../../components/touchable-map-bar/TouchableMapBar";

const CreateJourneyLocations = () => {
    const DEFAULT_LATITUDE = 49.843844;
    const DEFAULT_LONGITUDE = 24.025581;
    const ZERO = 0;
    const MINUS_THREE = -3;
    const [latitude, setLatitude] = useState(DEFAULT_LATITUDE);
    const [longitude, setLongitude] = useState(DEFAULT_LONGITUDE);
    const [fromDirection, setFromDirection] = useState("Your Location");
    const [selectedLocation, setSelectedLocation] = useState({ lat: 49.843844, lng: 24.025581 });
    const [isOpen] = useState(false);

    let mapRegion = {
        latitude: 49.843844,
        longitude: 24.025581,
        latitudeDelta: 0.09,
        longitudeDelta: 0.09
    };

    const androidPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the location");

            } else {
                console.log("Location permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };

    useEffect(() => {
        if (Platform.OS === "android") {
            androidPermission();
        } else {
            Geolocation.requestAuthorization();
        }
        Geolocation.getCurrentPosition(
            (position) => {
                setLatitude(position.coords.latitude);
                setSelectedLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
                setLongitude(position.coords.longitude);
                console.log(position);
            },
            (error) => {
                console.log(error);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }, []);

    useEffect(() => {
        console.log(selectedLocation);
    }, [selectedLocation]);

    const removeRegionAndPostalCode = (json: any) => {
        return json.split(", ").slice(ZERO, MINUS_THREE).join(", ");
    };

    const getFromDirection = () => {
        return fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${APIConfig.apiKey}`
        )
            .then((res) => res.json())
            .then((json) => {
                var indexOfResultedArray = 1;
                var resultedAddress = removeRegionAndPostalCode(
                    json.results[indexOfResultedArray].formatted_address
                );

                setFromDirection(resultedAddress);
            });
    };

    const setSelectedLocationHandler = (event: any) => {
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude
        });
    };

    let markerCoordinates = {
        latitude: selectedLocation.lat,
        longitude: selectedLocation.lng
    };

    return (
        <View style={SearchJourneyStyle.topInputContainer}>
            <TouchableMapBar
                directionType="From"
                iconName="location"
                defaultInputValue={fromDirection}
                marginBottom="15"
                marginTop="30"
                flex="6"
            />
            {isOpen ? (
                <TouchableMapBar
                    directionType="To"
                    iconName="map"
                    defaultInputValue={""}
                    marginBottom="12"
                    marginTop="3"
                    flex="10"
                />
            ) : (
                <></>
            )}
            <MapView
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialRegion={mapRegion}
                customMapStyle={mapStyle}
            >
                {<Marker
                    draggable={true}
                    onDragEnd={(e: any) => {
                        setLatitude(e.nativeEvent.coordinate.latitude);
                        setLongitude(e.nativeEvent.coordinate.longitude);
                        setSelectedLocationHandler;
                        getFromDirection();
                    }}
                    image={require("../../../../../assets/images/custom-marker.png")}
                    coordinate={markerCoordinates}
                />}
            </MapView>
        </View>
    );
};

export default CreateJourneyLocations;