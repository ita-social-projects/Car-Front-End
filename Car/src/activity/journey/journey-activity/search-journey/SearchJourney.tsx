import React, { useContext, useEffect, useState } from "react";
import {
    PermissionsAndroid,
    Platform,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import LocationService from "../../../../../api-service/location-service/LocationService";
import SearchJourneyStyle from "./SearchJourneyStyle";
import Stop from "../../../../../models/stop/Stop";
import Location from "../../../../../models/location/Location";
import AuthContext from "../../../../components/auth/AuthContext";
import JourneyService from "../../../../../api-service/journey-service/JourneyService";
import * as navigation from "../../../../components/navigation/Navigation";
import {
    EMPTY_COLLECTION_LENGTH,
    LEFT_PADDING_FOR_FROM_PLACEHOLDER,
    LEFT_PADDING_FOR_TO_PLACEHOLDER,
    INITIAL_PASSENGERS_COUNT,
    initialWayPoint,
    initialCoordinate,
} from "../../../../constants/Constants";
import AddressInputButton from "../create-journey/AddressInputButton/AddressInputButton";
import WayPoint from "../../../../types/WayPoint";
import Address from "../../../../../models/Address";
import Geolocation from "@react-native-community/geolocation";
import SearchJourneyProps from "./SearchJourneyProps";
import TouchableDateTimePicker from "../touchable/datetime-picker/TouchableDateTimePicker";
import SeatsInputSpinner from "../input-spinner/SeatsInputSpinner";
import SwitchSelectorStyle from "../create-journey/SwitchSelector/SwitchSelectorStyle";
import { CreateJourneyStyle } from "../create-journey/CreateJourneyStyle";
import ChooseOption from "../../../../components/choose-opton/ChooseOption";
import { LatLng } from "react-native-maps";

const SearchJourney = (props: SearchJourneyProps) => {
    const params = props?.route?.params;

    const { user } = useContext(AuthContext);

    // eslint-disable-next-line unused-imports/no-unused-vars
    const [stops, setStop] = useState<Array<Array<Stop>> | null>([]);
    // eslint-disable-next-line unused-imports/no-unused-vars
    const [locations, setLocations] = useState<Array<Location>>([]);
    // eslint-disable-next-line unused-imports/no-unused-vars
    const [loading, setLoading] = useState<boolean>(true);
    // eslint-disable-next-line unused-imports/no-unused-vars
    const [isLoading, setIsLoading] = useState<boolean>(true);
    // eslint-disable-next-line unused-imports/no-unused-vars
    const [hasLuggage, setHasLuggage] = useState<boolean>(false);
    const [from, setFrom] = useState<WayPoint>(initialWayPoint);
    const [to, setTo] = useState<WayPoint>(initialWayPoint);
    const [departureTime, setDepartureTime] = useState<Date>(new Date());
    // eslint-disable-next-line unused-imports/no-unused-vars
    const [savedLocations, setSavedLocations] = useState<Array<Location>>([]);
    // eslint-disable-next-line unused-imports/no-unused-vars
    const [recentAddresses, setRecentAddresses] = useState<Array<Address>>([]);
    const [userCoordinates, setUserCoordinates] = useState<LatLng>(initialCoordinate);
    const [availableSeats, setAvailableSeats] = useState(INITIAL_PASSENGERS_COUNT);
    const [allButtonStyle, setAllButtonStyle] = useState(SwitchSelectorStyle.activeButton);
    const [freeButtonStyle, setFreeButtonStyle] = useState(SwitchSelectorStyle.inactiveButton);
    const [paidButtonStyle, setPaidButtonStyle] = useState(SwitchSelectorStyle.inactiveButton);

    useEffect(() => {
        LocationService.getAll(Number(user?.id))
            .then((res: any) => {
                setLocations(res.data);
            })
            .catch((e: any) => console.log(e));

        JourneyService.getRecentJourneyStops(Number(user?.id))
            .then((res) => {
                setStop(
                    res.data.filter(
                        (array) => array.length !== EMPTY_COLLECTION_LENGTH
                    )
                );
                setLoading(false);
            })
            .catch((e: any) => console.log(e));
    }, []);

    useEffect(() => {
        if (params) {
            if (params.wayPointId === "From") {
                setFrom(params.wayPoint);
            } else if (params.wayPointId === "To") {
                setTo(params.wayPoint);
            }
        }
    }, [params]);

    useEffect(() => {
        if (Platform.OS === "android") {
            androidPermission();
        } else {
            Geolocation.requestAuthorization();
        }
        Geolocation.getCurrentPosition(
            (position) => {
                setUserCoordinates(position.coords);
            },
            (error) => {
                console.log(error);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }, []);

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

    const onAddressInputButtonPressHandler = (
        placeholder: string,
        paddingLeft: number,
        wayPointId: string,
        wayPoint: WayPoint
    ) => {
        navigation.navigate("Address Input", {
            placeholder: placeholder,
            paddingLeft: paddingLeft,
            savedLocations: savedLocations,
            recentAddresses: filterRecentAddresses(),
            previousScreen: "Search Journey",
            wayPointId: wayPointId,
            wayPoint: wayPoint,
            camera: {
                center: userCoordinates,
                pitch: 2,
                heading: 20,
                zoom: 20,
                altitude: 200,
            },
            userCoordinates: userCoordinates,
        });
    };

    const filterRecentAddresses = () =>
        recentAddresses.filter((address) =>
            savedLocations.every(
                (location) =>
                    location?.address?.longitude !== address?.longitude &&
                    location?.address?.latitude !== address?.latitude
            )
        );

    return (
        <View style={SearchJourneyStyle.screenContainer}>
            <View style={SearchJourneyStyle.locationContainer}>
                <AddressInputButton
                    iconName={"location"}
                    directionType={"From"}
                    text={from.text}
                    onPress={() =>
                        onAddressInputButtonPressHandler(
                            "From",
                            LEFT_PADDING_FOR_FROM_PLACEHOLDER,
                            "From",
                            from
                        )
                    }
                    marginBottom={15}
                />
                <AddressInputButton
                    iconName={"location"}
                    directionType={"To"}
                    text={to.text}
                    onPress={() =>
                        onAddressInputButtonPressHandler(
                            "To",
                            LEFT_PADDING_FOR_TO_PLACEHOLDER,
                            "To",
                            to
                        )
                    }
                    marginBottom={15}
                />
            </View>

            <TouchableDateTimePicker
                date={departureTime}
                setDate={(d) => setDepartureTime(d)}
            />

            <SeatsInputSpinner
                value={availableSeats}
                onChange={(seats) => setAvailableSeats(seats)}
                title={"Passengers:"}
            />

            <View style={SwitchSelectorStyle.container}>
                <Text style={CreateJourneyStyle.text}>Fee</Text>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                        style={[SwitchSelectorStyle.leftButton, allButtonStyle]}
                        onPress={() => {
                            setAllButtonStyle(SwitchSelectorStyle.activeButton);
                            setFreeButtonStyle(
                                SwitchSelectorStyle.inactiveButton
                            );
                            setPaidButtonStyle(
                                SwitchSelectorStyle.inactiveButton
                            );
                        }}
                    >
                        <Text
                            style={[
                                SwitchSelectorStyle.buttonText,
                                allButtonStyle,
                            ]}
                        >
                            All
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            SwitchSelectorStyle.leftButton,
                            freeButtonStyle,
                        ]}
                        onPress={() => {
                            setAllButtonStyle(
                                SwitchSelectorStyle.inactiveButton
                            );
                            setFreeButtonStyle(
                                SwitchSelectorStyle.activeButton
                            );
                            setPaidButtonStyle(
                                SwitchSelectorStyle.inactiveButton
                            );
                        }}
                    >
                        <Text
                            style={[
                                SwitchSelectorStyle.buttonText,
                                freeButtonStyle,
                            ]}
                        >
                            Free
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            SwitchSelectorStyle.rightButton,
                            paidButtonStyle,
                        ]}
                        onPress={() => {
                            setAllButtonStyle(
                                SwitchSelectorStyle.inactiveButton
                            );
                            setFreeButtonStyle(
                                SwitchSelectorStyle.inactiveButton
                            );
                            setPaidButtonStyle(
                                SwitchSelectorStyle.activeButton
                            );
                        }}
                    >
                        <Text
                            style={[
                                SwitchSelectorStyle.buttonText,
                                paidButtonStyle,
                            ]}
                        >
                            Paid
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                <ChooseOption
                    text={"Do you have any luggage with you?"}
                    value={hasLuggage}
                    onValueChanged={(value: boolean) => {
                        setHasLuggage(value);
                    }}
                />
            </View>
            <View style={SearchJourneyStyle.buttonContainer}>
                <TouchableOpacity
                    style={CreateJourneyStyle.publishButton}
                    onPress={() => {}}
                >
                    <Text style={CreateJourneyStyle.publishButtonText}>Search</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SearchJourney;
