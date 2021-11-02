import React, { useContext, useEffect, useState } from "react";
import {
    PermissionsAndroid,
    Platform, ScrollView,
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
    initialWayPoint,
    initialCoordinate,
} from "../../../../constants/AddressConstants";
import {
    INITIAL_PASSENGERS_COUNT,
    LEFT_PADDING_FOR_FROM_PLACEHOLDER,
    LEFT_PADDING_FOR_TO_PLACEHOLDER,
} from "../../../../constants/JourneyConstants";
import {
    SECOND_ELEMENT_INDEX,
    EMPTY_COLLECTION_LENGTH,
    MIN_DELAY_MS,
} from "../../../../constants/GeneralConstants";
import WayPoint from "../../../../types/WayPoint";
import Address from "../../../../../models/Address";
import Geolocation from "@react-native-community/geolocation";
import SearchJourneyProps from "./SearchJourneyProps";
import SwitchSelectorStyle from "../../../../components/SwitchSelector/SwitchSelectorStyle";
import { CreateJourneyStyle } from "../create-journey/CreateJourneyStyle";
import { LatLng } from "react-native-maps";
import FeeType from "../../../../../models/journey/FeeType";
import Request from "../../../../../models/request/RequestModel";
import { MINUTES_OFFSET } from "../../../../constants/AnimationConstants";
import AsyncStorage from "@react-native-community/async-storage";
import Filter from "../../../../../models/journey/Filter";
import RequestService from "../../../../../api-service/request-service/RequestService";
import Indicator from "../../../../components/activity-indicator/Indicator";
import ConfirmModal from "../../../../components/confirm-modal/ConfirmModal";
import AddressInputButton from "../../../../components/address-input-button/AddressInputButton";
import TouchableDateTimePicker, { addMinutesToDate } from "../../../../components/datetime-picker/TouchableDateTimePicker";
import JourneyCreationDropDownPicker from "../../../../components/dropdown-picker/JourneyCreationDropDownPicker";
import { useTheme } from "../../../../components/theme/ThemeProvider";
import appInsights from "../../../../components/telemetry/AppInsights";

const SearchJourney = (props: SearchJourneyProps) => {
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
        backgroundColor: colors.primary,
        color: colors.white,
        borderColor: colors.primary
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

    const [userQuantity] = useState<{ id: number, name: string }[]>([
        { id: 1, name: "1" }, { id: 2, name: "2" }, { id: 3, name: "3" }, { id: 4, name: "4" }]);
    const [isVisibleQuantityDropDown, setIsVisibleQuantityDropDown] = useState(false);
    const [selectedQuantity, setSelectedQuantity] = useState<{ id: number | null, name: string }>({ id: 1, name: "1" });

    useEffect(() => {
        LocationService
            .getAll()
            .then((res: any) => setSavedLocations(res.data));

        JourneyService
            .getRecentJourneyStops()
            .then((res: any) => setRecentAddresses(res.data[SECOND_ELEMENT_INDEX]
                .map((stop: Stop) => stop?.address)));

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
            recentAddresses: filterRecentAddresses(),
            previousScreen: isRequest ? "Journey Request Page" : "Search Journey",
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
            quantity: selectedQuantity.id != null ? selectedQuantity.id : INITIAL_PASSENGERS_COUNT,
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
            passengersCount: selectedQuantity.id != null ? selectedQuantity.id : INITIAL_PASSENGERS_COUNT,
            userId: Number(user?.id),
            departureTime: departureTime
        };

        setIsLoading(true);

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
                passengersCount: selectedQuantity.id != null ? selectedQuantity.id : INITIAL_PASSENGERS_COUNT,
                fee: fee,
            })
                .then((res) => {
                    if (res.data.length > EMPTY_COLLECTION_LENGTH) {
                        let displayFee =
                            allButtonStyle === activeButtonStyle;

                        navigation.navigate("OK Search Result", {
                            journeys: res.data,
                            displayFee: displayFee,
                            passangersCount: selectedQuantity.id != null ? selectedQuantity.id
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

    const filterRecentAddresses = () =>
        recentAddresses.filter((address) =>
            savedLocations.every(
                (location) =>
                    location?.address?.longitude !== address?.longitude &&
                    location?.address?.latitude !== address?.latitude
            )
        );

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
            {isLoading && (
                <View style={{ height: "85%" }}>
                    <Indicator
                        size="large"
                        color={colors.hover}
                        text={isRequest ? "Creating request..." : "Searching..."}
                    />
                </View>
            )}
            {!isLoading && (
                <ScrollView
                    style={[SearchJourneyStyle.screenContainer,
                        { backgroundColor: colors.white }]}
                >
                    <View style={SearchJourneyStyle.locationContainer}>
                        <AddressInputButton
                            disabled = {isRequest}
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
                        />
                    </View>
                    <View style={SearchJourneyStyle.locationContainer}>
                        <AddressInputButton
                            disabled = {isRequest}
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
                    <View style = {[Platform.OS !== "android" && { zIndex: 1 },[SearchJourneyStyle.locationContainer]]}>
                        <JourneyCreationDropDownPicker
                            items={userQuantity.map((car) => ({
                                label: car.name,
                                value: car.id
                            }))}
                            paddingLeft={100}
                            searchable={false}
                            placeholder="Passengers:"
                            isVisible={isVisibleQuantityDropDown}
                            onOpen={() => setIsVisibleQuantityDropDown(true)}
                            onChangeItem={(item) => {
                                setSelectedQuantity({ id: item.value, name: item.label });
                                setIsVisibleQuantityDropDown(false);
                            }}
                            valueId={selectedQuantity.id}
                            zIndex={2}
                        />
                    </View>
                    <View style={SwitchSelectorStyle.container}>
                        <Text style={[CreateJourneyStyle.text, { color: colors.primary }]}>Fee</Text>
                        <View style={{ flexDirection: "row" }}>
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
                    <View style={[SearchJourneyStyle.publishButtonContainer]}>
                        <TouchableOpacity
                            style={[SearchJourneyStyle.publishButton,
                                {
                                    backgroundColor: !(to.isConfirmed && from.isConfirmed) ?
                                        colors.secondaryDark : colors.primary,
                                    borderWidth: 0,
                                }]}
                            onPress={() => {
                                onConfirmButtonPress();
                            }}
                            disabled={!(to.isConfirmed && from.isConfirmed)}
                        >
                            <Text style={[CreateJourneyStyle.publishButtonText, { color: colors.white }]}>
                                {isRequest ? "Create Request" : "Search"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            )}
            {isRequest && (
                <>
                    <ConfirmModal
                        visible={successModalVisible}
                        title={"Success"}
                        subtitle={"Request successfully created!"}
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

export default SearchJourney;
