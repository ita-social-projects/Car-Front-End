import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Platform, PermissionsAndroid } from "react-native";
import SearchJourneyStyle from "../search-journey/SearchJourneyStyle";
import DM from "../../../../components/styles/DM";
import AddressInput from "./AddressInput/AddressInput";
import MapView, { LatLng, MapEvent, Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { mapStyle } from "../map-address/SearchJourneyMapStyle";
import {
    FIRST_ELEMENT_INDEX,
    INITIAL_LATITUDE,
    INITIAL_LONGITUDE,
    SECOND_ELEMENT_INDEX,
    SECOND_FROM_END_ELEMENT_INDEX,
    THIRD_ELEMENT_INDEX,
    THIRD_FROM_END_ELEMENT_INDEX
} from "../../../../constants/Constants";
import APIConfig from "../../../../../api-service/APIConfig";
import MapViewDirections from "react-native-maps-directions";
import { CreateJourneyStyle } from "./CreateJourneyStyle";
import MarkerFocus from "./MarkerFocus";
import Geolocation from "@react-native-community/geolocation";

const CreateRequestToGeocodingApi = (address: string) => {
    return "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        address.replace(" ", "+") +
        "&key=" + APIConfig.apiKey;
};

const CreateJourney = () => {
    const [fromText, setFromText] = useState("");
    const [toText, setToText] = useState("");

    const [markerFocus, setMarkerFocus] = useState(MarkerFocus.From);

    const [isFromConfirmed, setIsFromConfirmed] = useState(false);
    const [isToConfirmed, setIsToConfirmed] = useState(false);

    const [fromCoordinates, setFromCoordinates] =
        useState<LatLng>({ latitude: 0, longitude: 0 });
    const [toCoordinates, setToCoordinates] =
        useState<LatLng>({ latitude: 0, longitude: 0 });

    let mapRegion: Region = {
        latitude: INITIAL_LATITUDE,
        longitude: INITIAL_LONGITUDE,
        latitudeDelta: 0.09,
        longitudeDelta: 0.09
    };
    const [region, setRegion] = useState<Region>(mapRegion);

    const setRegionHelper = (latitude: number, longitude: number) => {
        setRegion((prevState) => {
            return {
                ...prevState,
                latitude: latitude,
                longitude: longitude
            };
        });

    };

    const androidPermission = async () => {
        try {
            const granted = await PermissionsAndroid
                .request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

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
                setRegionHelper(position.coords.latitude, position.coords.longitude);
            },
            (error) => {
                console.log(error);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }, []);

    const confirmPressHandler = () => {
        console.log("Confirm was pressed");
    };

    const setAddress = (address: string, coordinates: LatLng) => {
        if (markerFocus === MarkerFocus.From) {
            setFromText(address);
            setIsFromConfirmed(true);
            setFromCoordinates(coordinates);
        } else if (markerFocus === MarkerFocus.To) {
            setToText(address);
            setIsToConfirmed(true);
            setToCoordinates(coordinates);
        }
    };

    const removeRegionAndPostalCode = (json: string) => {
        const addressArray = json.split(", ");
        const endIndex = addressArray.length > THIRD_ELEMENT_INDEX ?
            THIRD_FROM_END_ELEMENT_INDEX :
            SECOND_FROM_END_ELEMENT_INDEX;

        return addressArray.slice(FIRST_ELEMENT_INDEX, endIndex).join(", ");
    };

    const getFromDirection = (latitude: number, longitude: number) => {
        fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${APIConfig.apiKey}`)
            .then((res) => res.json())
            .then((json) => {
                let resultedAddress = json.results[SECOND_ELEMENT_INDEX].formatted_address;

                resultedAddress = removeRegionAndPostalCode(resultedAddress);
                setAddress(resultedAddress, { latitude: latitude, longitude: longitude });
            });
    };

    const onMarkerPressHandler = (markerFocus: MarkerFocus) => setMarkerFocus(markerFocus);

    const GetCoordinatesByDescription = (description: string,
        setAddress: Dispatch<SetStateAction<LatLng>>) => {

        fetch(CreateRequestToGeocodingApi(description))
            .then(result => result.json())
            .then(json => {
                const location = json.results[FIRST_ELEMENT_INDEX].geometry.location;
                const coordinate = { latitude: location.lat, longitude: location.lng };

                setAddress(coordinate);
                setRegionHelper(coordinate.latitude, coordinate.longitude);
            });
    };

    const addressInputOnPressHandler = (data: any,
        setCoordinates: Dispatch<SetStateAction<LatLng>>,
        setIsConfirmed: Dispatch<SetStateAction<boolean>>,
        setText: Dispatch<SetStateAction<string>>) => {

        if (data.geometry) {
            const point = data.geometry.location;

            setCoordinates({ latitude: point.lat, longitude: point.lng });
            setRegionHelper(point.lat, point.lng);
        } else {
            GetCoordinatesByDescription(data.description, setCoordinates);
        }
        setIsConfirmed(true);
        setText(data.description);
    };

    const addressInputOnChangeTextHandler = (text: string,
        setIsConfirmed: Dispatch<SetStateAction<boolean>>,
        setText: Dispatch<SetStateAction<string>>) => {
        setIsConfirmed(false);
        setText(text);
    };

    const markerOnDragEndHandler = (event: MapEvent) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;

        getFromDirection(latitude, longitude);

        setRegionHelper(latitude, longitude);
    };

    const fromAndToIsConfirmed = isFromConfirmed && isToConfirmed;

    return (
        <View style={{ flex: 1 }}>
            <AddressInput
                placeholder={"From"}
                top={10}
                paddingLeft={68}
                address={fromText}
                onPress={(data) =>
                    addressInputOnPressHandler(data, setFromCoordinates, setIsFromConfirmed, setFromText)
                }
                onChangeText={(text) =>
                    addressInputOnChangeTextHandler(text, setIsFromConfirmed, setFromText)
                }
                onMarkerPress={() => onMarkerPressHandler(MarkerFocus.From)}
                isMarkerFocus={markerFocus === MarkerFocus.From}
            />

            <AddressInput
                placeholder={"To"}
                top={65}
                paddingLeft={45}
                address={toText}
                onPress={(data) =>
                    addressInputOnPressHandler(data, setToCoordinates, setIsToConfirmed, setToText)
                }
                onChangeText={(text) =>
                    addressInputOnChangeTextHandler(text, setIsToConfirmed, setToText)
                }
                onMarkerPress={() => onMarkerPressHandler(MarkerFocus.To)}
                isMarkerFocus={markerFocus === MarkerFocus.To}
            />

            <MapView
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialRegion={region}
                region={region}
                customMapStyle={mapStyle}
            >
                {
                    <>
                        <Marker
                            style={CreateJourneyStyle.movableMarker}
                            draggable={true}
                            onDragEnd={markerOnDragEndHandler}
                            image={require("../../../../../assets/images/custom-marker.png")}
                            coordinate={region}
                        />
                        {
                            fromAndToIsConfirmed ? (
                                <>
                                    <Marker
                                        title={"From"}
                                        coordinate={fromCoordinates}
                                        image={require("../../../../../assets/images/circle-marker.png")}
                                    />
                                    <Marker
                                        title={"To"}
                                        coordinate={toCoordinates}
                                    />
                                    <MapViewDirections
                                        origin={fromCoordinates}
                                        destination={toCoordinates}
                                        apikey={APIConfig.apiKey}
                                        strokeWidth={5}
                                        strokeColor="#027ebd"
                                    />
                                </>
                            ) : (<></>)
                        }
                    </>
                }
            </MapView>

            <TouchableOpacity
                style={[SearchJourneyStyle.confirmButton,
                    { backgroundColor: DM(DM(fromAndToIsConfirmed ? "black" : "gray")) }]}
                onPress={confirmPressHandler}
                disabled={!fromAndToIsConfirmed}
            >
                <Text style={[SearchJourneyStyle.confirmButtonSaveText, { color: DM(DM("white")) }]}>
                    Confirm
                </Text>
            </TouchableOpacity>
        </View>
    );

    /*const [isVisibleJourneyTypeDropDown, setIsVisibleJourneyTypeDropDown] = useState(false);
    const [isVisibleCarDropDown, setIsVisibleCarDropDown] = useState(false);
    const [state, setState] = useState();

    function changeJourneyTypeDropDownVisibility () {
        setIsVisibleJourneyTypeDropDown(true);
        setIsVisibleCarDropDown(false);
    }

    function changeCarDropDownVisibility () {
        setIsVisibleJourneyTypeDropDown(false);
        setIsVisibleCarDropDown(true);
    }

    function closeAllDropDowns () {
        setIsVisibleJourneyTypeDropDown(false);
        setIsVisibleCarDropDown(false);
    }

    const [freeButtonStyle, setFreeButtonStyle] = useState(CreateJourneyStyle.activeButton);

    const [paidButtonStyle, setPaidButtonStyle] = useState(CreateJourneyStyle.inactiveButton);

    return (
        <ScrollView style={CreateJourneyStyle.container}>
            <TouchableDateTimePicker iconName="time" />
            <JourneyCreationDropDownPicker
                items={[
                    { label: "Own Car", value: "own car" },
                    { label: "Taxi", value: "taxi" },
                ]}
                paddingLeft={100}
                placeholder="Journey type:"
                isVisible={isVisibleJourneyTypeDropDown}
                onOpen={() => changeJourneyTypeDropDownVisibility()}
                onChangeItem={(item: { value: React.SetStateAction<undefined>; }) => {
                    setState(item.value);
                    closeAllDropDowns();
                }}
            />
            <JourneyCreationDropDownPicker
                items={[
                    { label: "Volkswagen Jetta", value: "volkswagen jetta" },
                    { label: "Ford Fiesta", value: "ford fiesta" },
                    { label: "Toyota Camry", value: "toyota camry" },
                ]}
                paddingLeft={105}
                searchable={true}
                placeholder="Choose a Car:"
                isVisible={isVisibleCarDropDown}
                onOpen={() => changeCarDropDownVisibility()}
                onChangeItem={(item: { value: React.SetStateAction<undefined>; }) => {
                    setState(item.value);
                    closeAllDropDowns();
                }}
                onClose={state}
            />
            <SeatsInputSpinner/>
            <View style={CreateJourneyStyle.feeContainer}>
                <Text style={CreateJourneyStyle.text}>Fee</Text>
                <TouchableOpacity
                    style={[CreateJourneyStyle.feeButtonFree, freeButtonStyle]}
                    onPress={() => {
                        FreeButtonChoiceAlert();
                        setFreeButtonStyle(CreateJourneyStyle.activeButton);
                        setPaidButtonStyle(CreateJourneyStyle.inactiveButton);
                    }}>
                    <Text style={[CreateJourneyStyle.feeButtonText, freeButtonStyle]}>Free</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[CreateJourneyStyle.feeButtonPaid, paidButtonStyle]}
                    onPress={() => {
                        PaidButtonChoiceAlert();
                        setFreeButtonStyle(CreateJourneyStyle.inactiveButton);
                        setPaidButtonStyle(CreateJourneyStyle.activeButton);
                    }}>
                    <Text style={[CreateJourneyStyle.feeButtonText, paidButtonStyle]}>Paid</Text>
                </TouchableOpacity>
            </View>
            <View style={CreateJourneyStyle.commentsView}>
                <Text style={CreateJourneyStyle.commentsCaption}>Comments</Text>
                <TextInput
                    style={CreateJourneyStyle.textInputStyle}
                    multiline={true}
                    maxLength={100}
                    numberOfLines={10}
                />
                <Text>Up to 100 symbols</Text>
            </View>
            <TouchableOpacity
                style={[CreateJourneyStyle.publishButton]}>
                <Text style={CreateJourneyStyle.publishButtonText}>Publish</Text>
            </TouchableOpacity>
        </ScrollView>
    );*/
};

export default CreateJourney;
