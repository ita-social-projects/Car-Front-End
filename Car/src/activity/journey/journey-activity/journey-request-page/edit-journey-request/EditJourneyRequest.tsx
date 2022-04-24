import React, { useContext, useEffect, useState } from "react";
import {
    PermissionsAndroid,
    Platform, ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import LocationService from "../../../../../../api-service/location-service/LocationService";
import Location from "../../../../../../models/location/Location";
import AuthContext from "../../../../../components/auth/AuthContext";
import JourneyService from "../../../../../../api-service/journey-service/JourneyService";
import * as navigation from "../../../../../components/navigation/Navigation";
import {
    initialWayPoint,
    initialCoordinate,
} from "../../../../../constants/AddressConstants";
import {
    DEFAULT_AVAILABLE_SEATS_COUNT,
    INITIAL_PASSENGERS_COUNT,
    LEFT_PADDING_FOR_FROM_PLACEHOLDER,
    LEFT_PADDING_FOR_TO_PLACEHOLDER,
    MIN_AVAILABLE_SEATS_COUNT,
} from "../.././../../../constants/JourneyConstants";
import {
    EMPTY_COLLECTION_LENGTH,
    MIN_DELAY_MS,
} from "../../../../../constants/GeneralConstants";
import WayPoint from "../../../../../types/WayPoint";
import Address from "../../../../../../models/Address";
import Geolocation from "@react-native-community/geolocation";
import EditJourneyRequestProps from "./EditJourneyRequestProps";
import SwitchSelectorStyle from "../../../../../components/SwitchSelector/SwitchSelectorStyle";
import { CreateJourneyStyle } from "../../create-journey/CreateJourneyStyle";
import { LatLng } from "react-native-maps";
import FeeType from "../../../../../../models/journey/FeeType";
import Request from "../../../../../../models/request/RequestModel";
import { MINUTES_OFFSET } from "../../../../../constants/AnimationConstants";
import AsyncStorage from "@react-native-community/async-storage";
import Filter from "../../../../../../models/journey/Filter";
import RequestService from "../../../../../../api-service/request-service/RequestService";
import ConfirmModal from "../../../../../components/confirm-modal/ConfirmModal";
import AddressInputButton from "../../../../../components/address-input-button/AddressInputButton";
import TouchableDateTimePicker, { addMinutesToDate } from "../../../../../components/datetime-picker/TouchableDateTimePicker";
import { useTheme } from "../../../../../components/theme/ThemeProvider";
import appInsights from "../../../../../components/telemetry/AppInsights";
import { darkColors } from "../../../../../components/theme/ThemesColors";
import SeatsInputSpinner from "../../../../../components/input-spinner/SeatsInputSpinner";
import SearchJourneyStyle from "../../search-journey/SearchJourneyStyle";

const EditJourneyRequest = (props: EditJourneyRequestProps) => {
    const { colors } = useTheme();
    const params = props?.route?.params;

    const { user } = useContext(AuthContext);
    const [hasLuggage] = useState<boolean>(false);

    const [from, setFrom] = useState<WayPoint>(initialWayPoint);
    const [to, setTo] = useState<WayPoint>(initialWayPoint);
    const [departureTime, setDepartureTime] = useState<Date>(addMinutesToDate(new Date(), MINUTES_OFFSET));
    const [savedLocations, setSavedLocations] = useState<Array<Location>>([]);
    const [recentAddresses, setRecentAddresses] = useState<Array<Address>>([]);
    const [userCoordinates, setUserCoordinates] = useState<LatLng>(initialCoordinate);

    const activeButtonStyle = {
        backgroundColor: colors.buttonBack,
        color: colors.white,
        borderColor: colors.hover
    };

    const inactiveButtonStyle = {
        backgroundColor: colors.white,
        color: colors.primary,
        borderColor: colors.primary
    };

    const [selectedFee, setSelectedFee] = useState(FeeType.All);
    const [allButtonStyle, setAllButtonStyle] = useState(activeButtonStyle);
    const [freeButtonStyle, setFreeButtonStyle] = useState(inactiveButtonStyle);
    const [paidButtonStyle, setPaidButtonStyle] = useState(inactiveButtonStyle);
    const [isRequest, setIsRequest] = useState<boolean>(false);
    const [isPreviousFilter, setIsPreviousFilter] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [successModalVisible, setSuccessModalVisible] = useState<boolean>(false);
    const [errorModalVisible, setErrorModalVisible] = useState<boolean>(false);
    const [avaliableSeats, setAvaliableSeats] = useState(MIN_AVAILABLE_SEATS_COUNT);

    useEffect(() => {
        LocationService
            .getAll()
            .then((res) => {
                setSavedLocations(res.data);
            });

        JourneyService
            .getRecentJourneyStops()
            .then((res) => {
                setRecentAddresses(([] as Address[]).concat(
                    ...res.data.map(recentStops => recentStops.map(stop => stop!.address))));
            });

    }, []);

    useEffect(() => {
        setAllButtonStyle(selectedFee === FeeType.All ? activeButtonStyle : inactiveButtonStyle);
        setFreeButtonStyle(selectedFee === FeeType.Free ? activeButtonStyle : inactiveButtonStyle);
        setPaidButtonStyle(selectedFee === FeeType.Paid ? activeButtonStyle : inactiveButtonStyle);
    }, [colors, selectedFee]);

    useEffect(() => {
        if (params) {
            if (params.wayPointId === "From") {
                setFrom(params.wayPoint);
            } else if (params.wayPointId === "To") {
                setTo(params.wayPoint);
            }

            if (!isRequest) {
                setIsRequest(Boolean(params?.isRequest));
            }

            if (!isPreviousFilter) {
                fillInFilters();
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
                appInsights.trackException({ exception: { name: "GeolocationError", message: error.message } });
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
            appInsights.trackException({ exception: err as Error });
        }
    };

    const fillInFilters = () => {
        if (params?.isPreviousFilter as boolean) {
            setIsPreviousFilter(params?.isPreviousFilter as boolean);

            AsyncStorage.getItem("searchFilter").then((res) => {
                let filter: Filter = JSON.parse(res || "{}");

                switch (filter.fee) {
                    case FeeType.Free:
                        setAllButtonStyle(inactiveButtonStyle);
                        setFreeButtonStyle(activeButtonStyle);
                        setPaidButtonStyle(inactiveButtonStyle);
                        break;
                    case FeeType.Paid:
                        setAllButtonStyle(inactiveButtonStyle);
                        setFreeButtonStyle(inactiveButtonStyle);
                        setPaidButtonStyle(activeButtonStyle);
                        break;
                }

                setFrom(filter.from);
                setTo(filter.to);
                setDepartureTime(new Date(filter.departureTime));
            });
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
            recentAddresses: recentAddresses,
            previousScreen: "Edit Request Page",
            wayPointId: wayPointId,
            wayPoint: wayPoint,
            camera: {
                center: userCoordinates,
                pitch: 2,
                heading: 20,
                zoom: 15,
                altitude: 200,
            },
            userCoordinates: userCoordinates,
        });
    };

    const onConfirmButtonPress = async () => {
        let fee: FeeType = selectedFee;

        let filterToSave: Filter = {
            from: from,
            to: to,
            departureTime: departureTime,
            fee: fee,
            quantity: avaliableSeats != null ? avaliableSeats : INITIAL_PASSENGERS_COUNT,
        };

        AsyncStorage.setItem("searchFilter", JSON.stringify(filterToSave));

        let request: Request = {
            from: {
                latitude: from.coordinates.latitude,
                longitude: from.coordinates.longitude
            },
            to: {
                latitude: to.coordinates.latitude,
                longitude: to.coordinates.longitude
            },
            fee: fee,
            passengersCount: avaliableSeats != null ? avaliableSeats : INITIAL_PASSENGERS_COUNT,
            userId: Number(user?.id),
            departureTime: departureTime
        };

        setIsLoading(true);

        RequestService.delete(props.route.params.request!.id);

        if (isRequest) {
            RequestService.addRequest(request)
                .then(() => {
                    setSuccessModalVisible(true);
                })
                .catch(() => {
                    setErrorModalVisible(true);
                });
        } else {
            await JourneyService.getFilteredJourneys({
                applicantId: user?.id!,
                fromLatitude: from.coordinates.latitude,
                fromLongitude: from.coordinates.longitude,
                toLatitude: to.coordinates.latitude,
                toLongitude: to.coordinates.longitude,
                departureTime: departureTime,
                hasLuggage: hasLuggage,
                passengersCount: avaliableSeats != null ? avaliableSeats : INITIAL_PASSENGERS_COUNT,
                fee: fee,
            })
                .then((res) => {
                    if (res.data.item2.length > EMPTY_COLLECTION_LENGTH) {
                        let displayFee =
                            allButtonStyle === activeButtonStyle;

                        navigation.navigate("OK Search Result", {
                            journeys: res.data,
                            displayFee: displayFee,
                            passangersCount: avaliableSeats != null ? avaliableSeats
                                : INITIAL_PASSENGERS_COUNT,
                        });

                        setTimeout(() => {
                            setIsLoading(false);
                        }, MIN_DELAY_MS);

                    } else {
                        navigation.navigate("Bad Search Result");
                        setTimeout(() => {
                            setIsLoading(false);
                        }, MIN_DELAY_MS);
                    }
                })
                .catch(() => {
                    setErrorModalVisible(true);
                });
        }
    };

    const errorModalDisableHandler = () => {
        setErrorModalVisible(false);
        setIsLoading(false);
        navigation.navigate("Journey");
    };

    const successModalDisableHandler = () => {
        setSuccessModalVisible(false);
        setIsLoading(false);
        navigation.navigate("Journey");
    };

    return (
        <>
            {!isLoading && (
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, height: "100%" }}
                    style={[SearchJourneyStyle.screenContainer,
                        { backgroundColor: colors.white }]}
                >
                    <View style={SearchJourneyStyle.locationContainer}>
                        <AddressInputButton
                            disabled={!isRequest}
                            iconName={"location"}
                            directionType={"From"}
                            text={from.text}
                            iconColor={darkColors.disableBack}
                            onPress={() =>
                                onAddressInputButtonPressHandler(
                                    "From",
                                    LEFT_PADDING_FOR_FROM_PLACEHOLDER,
                                    "From",
                                    from
                                )
                            }
                        />
                    </View>
                    <View style={SearchJourneyStyle.locationContainer}>
                        <AddressInputButton
                            disabled={!isRequest}
                            iconName={"location"}
                            iconColor={darkColors.disableBack}
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
                        />
                    </View>
                    <View style={SearchJourneyStyle.locationContainer}>
                        <TouchableDateTimePicker
                            onlyTime={false}
                            date={departureTime}
                            setDate={(d) => setDepartureTime(d)}
                            isConfirmed={true}
                        />
                    </View>
                    <View style={SwitchSelectorStyle.container}>
                        <Text style={[CreateJourneyStyle.text, { color: colors.primary }]}>Fee</Text>
                        <View style={[SwitchSelectorStyle.buttonContaier, { borderColor: colors.primary }]}>
                            <TouchableOpacity
                                style={[SwitchSelectorStyle.leftButton, allButtonStyle]}
                                onPress={() => {
                                    setSelectedFee(FeeType.All);
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
                                    setSelectedFee(FeeType.Free);
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
                                    setSelectedFee(FeeType.Paid);
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
                    <View>
                        <SeatsInputSpinner
                            value={avaliableSeats}
                            onChange={seats => setAvaliableSeats(seats)}
                            title={"Passengers"}
                            minValue={MIN_AVAILABLE_SEATS_COUNT}
                            maxValue={DEFAULT_AVAILABLE_SEATS_COUNT}
                        />
                    </View>
                    <View style={[SearchJourneyStyle.publishButtonContainer]}>
                        <TouchableOpacity
                            style={[SearchJourneyStyle.publishButton,
                                {
                                    backgroundColor: !(to.isConfirmed && from.isConfirmed) ?
                                        colors.secondaryDark : colors.buttonBack,
                                    borderColor: !(to.isConfirmed && from.isConfirmed) ?
                                        colors.secondaryDark : colors.buttonBack
                                }]}
                            onPress={() => {
                                onConfirmButtonPress();
                            }}
                            disabled={!(to.isConfirmed && from.isConfirmed)}
                        >
                            <Text style={[CreateJourneyStyle.publishButtonText, { color: colors.white }]}>
                                {"Edit"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            )}
            {isRequest && (
                <>
                    <ConfirmModal
                        visible={successModalVisible}
                        title={"REQUEST"}
                        subtitle={"Your Request was edited!"}
                        confirmText={"OK"}
                        hideCancelButton={true}
                        onConfirm={() => {
                            successModalDisableHandler();
                        }}
                        disableModal={() => {
                            successModalDisableHandler();
                        }}
                    />

                    <ConfirmModal
                        visible={errorModalVisible}
                        title={"Error"}
                        subtitle={"Unexpected error occured :("}
                        confirmText={"OK"}
                        hideCancelButton={true}
                        onConfirm={() => {
                            errorModalDisableHandler();
                        }}
                        disableModal={() => {
                            errorModalDisableHandler();
                        }}
                    />
                </>
            )}
        </>
    );
};

export default EditJourneyRequest;
