import React, { useEffect, useRef, useState } from "react";
import { Platform, Text, TextInput, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, LatLng, MapEvent } from "react-native-maps";
import {
    initialWayPoint,
    initialCamera,
    initialCoordinate, DEFAULT_LOCATION_ICON_ID
} from "../../../../../../constants/AddressConstants";
import { LOCATION_TYPES } from "../../../../../../constants/LocationConstants";
import { mapStyle } from "../../../../../journey/journey-activity/search-journey-map/SearchJourneyMapStyle";
import WayPoint from "../../../../../../types/WayPoint";
import * as navigation from "../../../../../../components/navigation/Navigation";
import Geolocation from "@react-native-community/geolocation";
import { CreateJourneyStyle } from "../../../../../journey/journey-activity/create-journey/CreateJourneyStyle";
import AddLocationStyle from "./AddLocationStyle";
import LocationDropDownPicker from "../../../../../../components/location-drop-down-picker/LocationDropDownPicker";
import LocationService from "../../../../../../../api-service/location-service/LocationService";
import {
    androidPermission,
    animateCamera,
    setCoordinatesByDescription,
    setAddressByCoordinates,
} from "../../../../../../utils/LocationHelperFunctions";
import SaveLocationButton from "../../../../../../components/save-location-button/SaveLocationButton";
import { GooglePlacesAutocompleteRef } from "react-native-google-places-autocomplete";
import { darkMapStyle } from "../../../../../../constants/DarkMapStyleConstant";
import { useTheme } from "../../../../../../components/theme/ThemeProvider";
import AddressInput from "../../../../../../components/address-input/AddressInput";
import appInsights from "../../../../../../components/telemetry/AppInsights";
import { CHOOSE_ADDRESS_LEFT_PADDING, DEFAULT_INPUT_LEFT_PADDING } from "../../../../../../constants/StylesConstants";
import Location from "../../../../../../../models/location/Location";
import Ionicons from "react-native-vector-icons/Ionicons";

const AddLocation = () => {
    const { colors, isThemeDark } = useTheme();
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
                appInsights.trackException({ exception: { name: "GeolocationError", message: error.message } });
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }, []);

    const saveLocationHandle = async () => {
        await LocationService.add({
            name: locationName || wayPoint.text,
            address: {
                id: 0,
                name: wayPoint.text,
                latitude: wayPoint.coordinates.latitude,
                longitude:wayPoint.coordinates.longitude
            },
            typeId: selectedLocationType.id,
        });
    };

    const [userLocations, setUserLocations] = useState<Location[]>();
    const [isLocationAvailable, setIsLocationAvailable] = useState<boolean>(true);

    useEffect(() => {
        loadLocations();
    }, []);

    const loadLocations = async () =>{
        await LocationService.getAll().then(response => {
            setUserLocations(response.data);
        });
    };

    const checkForAvailability = (name : string) => {
        setIsLocationAvailable(true);
        userLocations?.forEach((item : Location) => {
            if(item?.name == name){
                setIsLocationAvailable(false);
            }
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={AddLocationStyle.inputContainer}>
                <AddressInput
                    placeholder={wayPoint.isConfirmed ? "" : "Choose address"}
                    paddingLeft={wayPoint.isConfirmed ? DEFAULT_INPUT_LEFT_PADDING : CHOOSE_ADDRESS_LEFT_PADDING}
                    address={wayPoint.text}
                    onChangeText={addressInputOnChangeTextHandler}
                    onPress={addressInputOnPressHandler}
                    onClearIconPress={() => setWayPointsTextAndIsConfirmed("", false)}
                    onShowLocationIconPress={()=>animateCameraAndMoveMarker}
                    savedLocations={[]}
                    userLocation={userCoordinates}
                    recentAddresses={[]}
                    refFor={(ref) => (addressInputRef.current = ref)}
                />
                {wayPoint.isConfirmed && (
                    <>
                        <View style={[isLocationAvailable
                            ? AddLocationStyle.textInputBlock
                            : AddLocationStyle.textInputBlockOnError,
                        ]}>
                            <TextInput
                                style={[AddLocationStyle.textInput,
                                    {
                                        borderColor: isLocationAvailable
                                            ? colors.primary
                                            : colors.accentRed,
                                        backgroundColor: colors.white,
                                        color: colors.primary,
                                    }]}
                                value={locationName}
                                placeholder={"Name the chosen address"}
                                placeholderTextColor={colors.secondaryDark}
                                onChangeText={(fromInput) => {
                                    setLocationName(fromInput);
                                    checkForAvailability(fromInput);
                                }}/>
                            { isLocationAvailable
                                ? <></>
                                :(
                                    <>
                                        <View style={[AddLocationStyle.addressErrorBlock]} >
                                            <Ionicons
                                                name="alert-circle-outline"
                                                size={19.5}
                                                style={[{
                                                    color: colors.accentRed,
                                                    transform: [{ rotate: "0deg" }],
                                                    borderColor: colors.neutralLight,
                                                }]}>
                                            </Ionicons>
                                        </View>
                                        <Text
                                            style={[
                                                AddLocationStyle.addressErrorText,
                                                {
                                                    color: colors.accentRed,
                                                    fontSize: 13,
                                                }
                                            ]}>
                                            You already have an address with this name
                                        </Text>
                                    </>
                                )
                            }
                        </View>

                        <LocationDropDownPicker
                            fast-food-outline
                            items={LOCATION_TYPES}
                            placeholder={"Choose the address type"}
                            isVisible={isVisibleLocationDropDown}
                            onOpen={() => setIsVisibleLocationDropDown(true)}
                            onChangeItem={(item) => {
                                setLocationType({ id: item.value, name: item.label });
                                setIsVisibleLocationDropDown(false);
                            }}/>
                    </>
                )}
            </View>

            <MapView
                ref={ref => (mapRef.current = ref)}
                style={AddLocationStyle.mapContainer}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialCamera={initialCamera}
                customMapStyle={isThemeDark ? darkMapStyle : mapStyle}
                onLongPress={mapEventHandler}
                showsCompass={false}
                showsMyLocationButton={false}
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
                wayPointConfirmation={wayPoint.isConfirmed && isLocationAvailable}
                onPress={() => saveLocationHandle().then(() => navigation.goBack())}
            />
        </View>
    );
};

export default AddLocation;