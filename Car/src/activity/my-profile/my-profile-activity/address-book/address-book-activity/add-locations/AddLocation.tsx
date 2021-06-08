import React, { useContext, useEffect, useRef, useState } from "react";
import { Platform, TextInput, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, LatLng, MapEvent } from "react-native-maps";
import {
    initialWayPoint,
    initialCamera,
    initialCoordinate, DEFAULT_LOCATION_ICON_ID
} from "../../../../../../constants/AddressConstants";
import { MAX_LOCATION_NAME_LENGTH } from "../../../../../../constants/LocationConstants";
import { mapStyle } from "../../../../../journey/journey-activity/map-address/SearchJourneyMapStyle";
import WayPoint from "../../../../../../types/WayPoint";
import * as navigation from "../../../../../../components/navigation/Navigation";
import Geolocation from "@react-native-community/geolocation";
import { CreateJourneyStyle } from "../../../../../journey/journey-activity/create-journey/CreateJourneyStyle";
import AddressInput from "../../../../../journey/journey-activity/create-journey/AddressInput/AddressInput";
import AddLocationStyle from "./AddLocationStyle";
import LocationDropDownPicker from "../../../../../../components/location-drop-down-picker/LocationDropDownPicker";
import Ionicons from "react-native-vector-icons/Ionicons";
import AuthContext from "../../../../../../components/auth/AuthContext";
import LocationService from "../../../../../../../api-service/location-service/LocationService";
import {
    androidPermission,
    animateCamera,
    setCoordinatesByDescription,
    setAddressByCoordinates,
    addressNameSubstring
} from "../../../../../../utils/LocationHelperFunctions";
import SaveLocationButton from "../../../../../../components/save-location-button/SaveLocationButton";
import { GooglePlacesAutocompleteRef } from "react-native-google-places-autocomplete";

const AddLocation = () => {

    const { user } = useContext(AuthContext);

    const [wayPoint, setWayPoint] = useState<WayPoint>(initialWayPoint);
    const setWayPointsCoordinates = (coordinates: LatLng) => {
        setWayPoint(prevState => ({
            ...prevState,
            coordinates: coordinates
        }));
    };

    const [locationName, setLocationName] = useState<string>("");

    const [isVisibleLocationDropDown, setIsVisibleLocationDropDown] = useState(false);

    const [selectedLocationType, setLocationType] = useState<{id: number, name: string}>(
        { id: DEFAULT_LOCATION_ICON_ID, name: "Other" }
    );

    const setWayPointsTextAndIsConfirmed = (text: string, isConfirmed: boolean) => {
        setWayPoint(prevState => ({
            ...prevState,
            isConfirmed: isConfirmed,
            text: text
        }));
    };

    const [userCoordinates, setUserCoordinates] = useState<LatLng>(initialCoordinate);

    const mapRef = useRef<MapView | null>(null);
    const addressInputRef = useRef<GooglePlacesAutocompleteRef | null>();

    const [markerCoordinates, setMarkerCoordinates] = useState<LatLng>(initialCoordinate);

    const animateCameraAndMoveMarker = (coordinates: LatLng) => {
        setMarkerCoordinates(coordinates);

        mapRef.current?.animateCamera({
            center: coordinates
        }, { duration: 2000 });
    };

    const setAddress = (address: string, coordinates: LatLng) => {
        setWayPointsCoordinates(coordinates);
        setWayPointsTextAndIsConfirmed(address, true);
    };

    const addressInputOnPressHandler = (data: any) => {
        if (data.geometry) {
            const point = data.geometry.location;

            setWayPointsCoordinates({ latitude: point.lat, longitude: point.lng });
            animateCameraAndMoveMarker({ latitude: point.lat, longitude: point.lng });
        } else {
            setCoordinatesByDescription(data.description, setWayPointsCoordinates, animateCameraAndMoveMarker);
        }

        setWayPointsTextAndIsConfirmed(data.description, true);
    };
    const addressInputOnChangeTextHandler = (text: string) => {
        setWayPointsTextAndIsConfirmed(text, false);
    };

    const mapEventHandler = (event: MapEvent) => {
        addressInputRef.current?.blur();
        setAddressByCoordinates(setAddress, event.nativeEvent.coordinate);
        animateCameraAndMoveMarker(event.nativeEvent.coordinate);
    };

    useEffect(() => {
        if (Platform.OS === "android") {
            androidPermission();
        } else {
            Geolocation.requestAuthorization();
        }
        Geolocation.getCurrentPosition(
            (position) => {
                setUserCoordinates(position.coords);
                animateCamera(setMarkerCoordinates, position.coords, mapRef);
            },
            (error) => {
                console.log(error);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }, []);

    const saveLocationHandle = async () => {
        await LocationService.add({
            name: locationName ? locationName: addressNameSubstring(wayPoint.text),
            address: {
                id: 0,
                name: wayPoint.text,
                latitude: wayPoint.coordinates.latitude,
                longitude:wayPoint.coordinates.longitude
            },
            typeId: selectedLocationType.id,
            userId: Number(user?.id),
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={AddLocationStyle.inputContainer}>
                <AddressInput
                    placeholder={"Address"}
                    paddingLeft={90}
                    address={wayPoint.text}
                    onChangeText={addressInputOnChangeTextHandler}
                    onPress={addressInputOnPressHandler}
                    onClearIconPress={() => setWayPointsTextAndIsConfirmed("", false)}
                    savedLocations={[]}
                    userLocation={userCoordinates}
                    recentAddresses={[]}
                    refFor={(ref) => (addressInputRef.current = ref)}
                />
                {wayPoint.isConfirmed && (
                    <>
                        <TextInput
                            style={AddLocationStyle.textInput}
                            value={locationName}
                            maxLength={MAX_LOCATION_NAME_LENGTH}
                            placeholder={"Name the chosen address"}
                            placeholderTextColor={"grey"}
                            onChangeText={(fromInput) => {
                                setLocationName(fromInput);
                            }}/>

                        <LocationDropDownPicker
                            items={[{
                                label: "Work", value: 4,
                                icon: () => <Ionicons name="ios-briefcase-outline" size={25} color="#414045"/>
                            },
                                {
                                    label: "Home", value: 3,
                                    icon: () => <Ionicons name="home-outline" size={25} color="#414045"/>
                                },
                                {
                                    label: "Other", value: DEFAULT_LOCATION_ICON_ID,
                                    icon: () => <Ionicons name="star-outline" size={25} color="#414045"/>
                                }]}

                            placeholder={"Choose the address type and the icon"}
                            isVisible={isVisibleLocationDropDown}
                            onOpen={() => setIsVisibleLocationDropDown(true)}
                            onChangeItem={(item) => {
                                setLocationType({ id: item.value, name: item.label });
                                setIsVisibleLocationDropDown(false);
                            }}/></>
                )}
            </View>

            <MapView
                ref={ref => (mapRef.current = ref)}
                style={{ height: "100%" }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialCamera={initialCamera}
                customMapStyle={mapStyle}
                onLongPress={mapEventHandler}
                showsCompass={false}
            >
                <Marker
                    title={"Address"}
                    style={CreateJourneyStyle.movableMarker}
                    draggable={true}
                    onDragEnd={mapEventHandler}
                    image={require("../../../../../../../assets/images/maps-markers/with_shade.png")}
                    coordinate={markerCoordinates}
                />
            </MapView>
            <SaveLocationButton
                wayPointConfirmation={wayPoint.isConfirmed}
                onPress={() => saveLocationHandle().then(() => navigation.goBack())}
            />
        </View>
    );
};

export default AddLocation;