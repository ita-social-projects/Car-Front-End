import { Platform, TextInput, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import EditLocationProps from "./EditLocationProps";
import {
    androidPermission,
    animateCamera, setAddressByCoordinates, setCoordinatesByDescription
} from "../../../../../../utils/LocationHelperFunctions";
import Geolocation from "@react-native-community/geolocation";
import MapView, { LatLng, MapEvent, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
    DEFAULT_LOCATION_ICON_ID,
    initialCamera,
    initialCoordinate,
    initialWayPoint
} from "../../../../../../constants/AddressConstants";
import LocationService from "../../../../../../../api-service/location-service/LocationService";
import { mapStyle as lightMapStyle } from "../../../../../journey/journey-activity/search-journey-map/SearchJourneyMapStyle";
import { CreateJourneyStyle } from "../../../../../journey/journey-activity/create-journey/CreateJourneyStyle";
import WayPoint from "../../../../../../types/WayPoint";
import AddLocationStyle from "../add-locations/AddLocationStyle";
import { GooglePlacesAutocompleteRef } from "react-native-google-places-autocomplete";
import { LOCATION_TYPES } from "../../../../../../constants/LocationConstants";
import LocationDropDownPicker from "../../../../../../components/location-drop-down-picker/LocationDropDownPicker";
import * as navigation from "../../../../../../components/navigation/Navigation";
import SaveLocationButton from "../../../../../../components/save-location-button/SaveLocationButton";
import { useTheme } from "../../../../../../components/theme/ThemeProvider";
import Indicator from "../../../../../../components/activity-indicator/Indicator";
import AddressInput from "../../../../../../components/address-input/AddressInput";
import AddEditCarsStyle from "../../../cars/car-activity/add-edit-cars/AddEditCarsStyle";
import { darkMapStyle } from "../../../../../../constants/DarkMapStyleConstant";
import appInsights from "../../../../../../components/telemetry/AppInsights";

const EditLocation = (props: EditLocationProps) => {
    const { DM, isThemeDark } = useTheme();
    const mapStyle = isThemeDark ? darkMapStyle : lightMapStyle;
    const [markerCoordinates, setMarkerCoordinates] = useState<LatLng>(initialCoordinate);
    const [userCoordinates, setUserCoordinates] = useState<LatLng>(initialCoordinate);
    const [wayPoint, setWayPoint] = useState<WayPoint>({
        ...initialWayPoint, coordinates : {
            latitude: initialCoordinate.latitude,
            longitude: initialCoordinate.longitude
        }
    });
    const [isLoading, setLoading] = useState(true);
    const [locationName, setLocationName] = useState<string>("");
    const [isVisibleLocationDropDown, setIsVisibleLocationDropDown] = useState(false);
    const [locationType, setLocationType] = useState<{id: number, name: string}>(
        { id: DEFAULT_LOCATION_ICON_ID, name: "Other" }
    );

    const mapRef = useRef<MapView | null>(null);
    const addressInputRef = useRef<GooglePlacesAutocompleteRef | null>();

    useEffect(() => {
        if (Platform.OS === "android") {
            androidPermission();
        } else {
            Geolocation.requestAuthorization();
        }
        LocationService.getById(props.locationId).then((response) => {
            const location = response.data;

            setLocationName(String(location?.name));
            setLocationType({
                id: Number(location?.type?.id),
                name: String(location?.type?.name)
            });
            setWayPoint({
                isConfirmed: true,
                text: String(location?.address?.name),
                coordinates: {
                    latitude: Number(location?.address?.latitude),
                    longitude: Number(location?.address?.longitude)
                }
            });
        }).catch((e) => appInsights.trackException({ exception: e }));
    }, []);

    useEffect(() => {
        Geolocation.getCurrentPosition(
            (position) => {
                setUserCoordinates(position.coords);
                animateCamera(setMarkerCoordinates,
                    wayPoint.coordinates,
                    mapRef);
            },
            (error) => {
                appInsights.trackException({ exception: { name: "GeolocationError", message: error.message } });
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
        setLoading(false);
    }, [wayPoint]);

    const setAddress = (address: string, coordinates: LatLng) => {
        setWayPointsCoordinates(coordinates);
        setWayPointsTextAndIsConfirmed(address, true);
    };

    const setWayPointsCoordinates = (coordinates: LatLng) => {
        setWayPoint(prevState => ({
            ...prevState,
            coordinates: coordinates
        }));
    };

    const setWayPointsTextAndIsConfirmed = (text: string, isConfirmed: boolean) => {
        setWayPoint(prevState => ({
            ...prevState,
            isConfirmed: isConfirmed,
            text: text
        }));
    };

    const animateCameraAndMoveMarker = (coordinates: LatLng) => {
        setMarkerCoordinates(coordinates);

        mapRef.current?.animateCamera({
            center: coordinates
        }, { duration: 2000 });
    };

    const mapEventHandler = (event: MapEvent) => {
        addressInputRef.current?.blur();
        setAddressByCoordinates(setAddress, event.nativeEvent.coordinate);
        animateCameraAndMoveMarker(event.nativeEvent.coordinate);
    };

    const addressInputOnChangeTextHandler = (text: string) => {
        setWayPointsTextAndIsConfirmed(text, false);
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

    const updateLocation = async () => {
        await LocationService.update({
            id: props.locationId,
            name: locationName || wayPoint.text,
            address: {
                name: wayPoint.text,
                latitude: wayPoint.coordinates.latitude,
                longitude: wayPoint.coordinates.longitude,
            },
            typeId: locationType.id
        });};

    return(
        isLoading ? (
            <View
                style={[AddEditCarsStyle.wrapper, { backgroundColor: DM("white") }]}
            >
                <Indicator
                    size="large"
                    color="#414045"
                    text="Loading information..."
                />
            </View>
        ) :
            (
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
                        <TextInput
                            style={[AddLocationStyle.textInput,
                                {
                                    borderColor: DM("black"),
                                    backgroundColor: DM("white"),
                                    color: DM("black")
                                }]}
                            value={locationName}
                            placeholder={"Name the chosen address"}
                            placeholderTextColor={"grey"}
                            onChangeText={(fromInput) => {
                                setLocationName(fromInput);
                            }}/>
                        <LocationDropDownPicker
                            fast-food-outline
                            items={LOCATION_TYPES}

                            placeholder={"Choose the address type and the icon"}
                            isVisible={isVisibleLocationDropDown}
                            onOpen={() => setIsVisibleLocationDropDown(true)}
                            defaultValue={locationType.id}
                            onChangeItem={(item) => {
                                setLocationType({ id: item.value, name: item.label });
                                setIsVisibleLocationDropDown(false);
                            }}/>
                    </View>
                    <MapView
                        ref={ref => (mapRef.current = ref)}
                        style={AddLocationStyle.mapContainer}
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
                        onPress={() => updateLocation().then(() => navigation.goBack())}
                    />
                </View>
            )
    );
};

export default EditLocation;
