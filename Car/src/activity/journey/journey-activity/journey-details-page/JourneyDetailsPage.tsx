import React, { useContext, useEffect, useState } from "react";
import { CreateJourneyStyle } from "../create-journey/CreateJourneyStyle";
import {
    ScrollView,
    TouchableOpacity,
    View,
    Text,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import JourneyDetailsPageProps from "./JourneyDetailsPageProps";
import SwitchSelector from "../../../../components/SwitchSelector/SwitchSelector";
import CarService from "../../../../../api-service/car-service/CarService";
import AuthContext from "../../../../components/auth/AuthContext";
import { DAY_OFFSET, MINUTES_OFFSET } from "../../../../constants/AnimationConstants";
import {
    CREATING_FONT_SIZE,
    DEFAULT_AVAILABLE_SEATS_COUNT,
    DEFAULT_TAXI_AVAILABLE_SEATS_COUNT,
    INITIAL_TIME,
    MIN_AVAILABLE_SEATS_COUNT
} from "../../../../constants/JourneyConstants";
import {
    EMPTY_COLLECTION_LENGTH,
    FIRST_ELEMENT_INDEX, ZERO_ID
} from "../../../../constants/GeneralConstants";
import JourneyService from "../../../../../api-service/journey-service/JourneyService";
import LocationService from "../../../../../api-service/location-service/LocationService";
import * as navigation from "../../../../components/navigation/Navigation";
import JourneyDto from "../../../../../models/journey/JourneyDto";
import Location from "../../../../../models/location/Location";
import Indicator from "../../../../components/activity-indicator/Indicator";
import ConfirmModal from "../../../../components/confirm-modal/ConfirmModal";
import moment from "moment";
import ConfirmModalProps from "../../../../components/confirm-modal/ConfirmModalProps";
import { freeRideModal, invitationsErrorModal, publishErrorModal, updateErrorModal } from "./JourneyDetailsModals";
import { createStopArrayFromWayPoint } from "../../../../utils/JourneyHelperFunctions";
import Journey from "../../../../../models/journey/Journey";
import AddressInputButton from "../../../../components/address-input-button/AddressInputButton";
import TouchableDateTimePicker, { addMinutesToDate } from "../../../../components/datetime-picker/TouchableDateTimePicker";
import JourneyCreationDropDownPicker from "../../../../components/dropdown-picker/JourneyCreationDropDownPicker";
import SeatsInputSpinner from "../../../../components/input-spinner/SeatsInputSpinner";
import { useTheme } from "../../../../components/theme/ThemeProvider";
import Ionicons from "react-native-vector-icons/Ionicons";
import UserService from "../../../../../api-service/user-service/UserService";
import User from "../../../../../models/user/User";
import Invitation from "../../../../../models/invitation/Invitation";
import { HTTP_STATUS_OK } from "../../../../constants/Constants";
import WeekDay from "../../../../components/schedule-bottom-popup/WeekDay";
import SearchJourneyStyle from "../search-journey/SearchJourneyStyle";
import ChatService from "../../../../../api-service/chat-service/ChatService";
import CreateChat from "../../../../../models/Chat/CreateChat";
import CommentBlock from "../../../../components/commentBlock/CommentBlock";
import { Divider } from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";
import FeeType from "../../../../../models/journey/FeeType";
import RideType from "../../../../../models/journey/RideType";
import { useIsFocused } from "@react-navigation/native";
import PublishRideFilter from "../../../../../models/journey/PublishRideFilter";
import { lightColors } from "../../../../components/theme/ThemesColors";

const getCarId = (journey?: Journey) => {
    if (!journey || journey.car && journey.car.id === ZERO_ID) return null;

    return journey.car!.id;
};

const JourneyDetailsPage = (props: JourneyDetailsPageProps) => {
    const { colors } = useTheme();
    const params = props.route.params;
    const journey = params.journey;

    props.weekDay!.current = props.weekDay?.current ||
        params.weekDay ||
        journey?.schedule?.days ||
        WeekDay.None;

    const carModel = journey?.car?.model;
    const weekDay = props.weekDay!.current;
    const existingInvitations: Invitation[] = journey ? journey.invitations : [];

    const { user } = useContext(AuthContext);

    const [savedLocations, setSavedLocations] = useState<Array<Location>>([]);

    const [isVisibleCarDropDown, setIsVisibleCarDropDown] = useState(false);
    const [selectedCar, setSelectedCar] = useState<{ id: number | null, name: string }>({
        id: getCarId(journey),
        name: journey ? `${journey?.car?.brand} ${carModel}` : ""
    });
    const [userCars, setUserCars] = useState<{ id: number, name: string }[]>([]);
    const [allUsers, setAllUsers] = useState<User[]>([]);
    const [comments, setComments] = useState("");

    const isFocused = useIsFocused();

    const activeButtonStyle = {
        backgroundColor: colors.hover,
        color: colors.white,
        borderColor: colors.primary
    };

    const inactiveButtonStyle = {
        backgroundColor: colors.white,
        color: colors.primary,
        borderColor: colors.primary
    };

    const setButtonStyle = (shouldBeHighlighted: boolean) => {
        if (shouldBeHighlighted)
            return activeButtonStyle;

        return inactiveButtonStyle;
    };
    const [selectedFee, setSelectedFee] = useState(FeeType.Free);
    const [selectedRide, setSelectedRide] = useState(RideType.OwnCar);
    const [isOwnCar, setOwnCar] = useState(journey?.isOnOwnCar || !journey);

    let highlightOwnCarButton: boolean = !journey || journey.isOnOwnCar;
    const [ownCarButtonStyle, setOwnCarButtonStyle] = useState(setButtonStyle(highlightOwnCarButton));
    const [taxiButtonStyle, setTaxiButtonStyle] = useState(setButtonStyle(!highlightOwnCarButton));

    let highlightPaidButton: boolean = !journey || journey.isFree;
    const [selectedFeeAsPaid, setSelectedFeeAsPaid] = useState(!highlightPaidButton);
    const [paidButtonStyle, setPaidButtonStyle] = useState(setButtonStyle(!highlightPaidButton));
    const [freeButtonStyle, setFreeButtonStyle] = useState(setButtonStyle(highlightPaidButton));

    useEffect(() => {
        setFreeButtonStyle(selectedFeeAsPaid ? inactiveButtonStyle : activeButtonStyle);
        setPaidButtonStyle(selectedFeeAsPaid ? activeButtonStyle : inactiveButtonStyle);
    }, [colors, selectedFeeAsPaid]);

    useEffect(() => {
        setOwnCarButtonStyle(isOwnCar ? activeButtonStyle: inactiveButtonStyle);
        setTaxiButtonStyle(isOwnCar ? inactiveButtonStyle: activeButtonStyle);
    }, [colors, isOwnCar]);

    const getNextDay = (date: Date): Date => {
        const dateOffset = date.getDate() - (new Date()).getDate() + DAY_OFFSET;

        date.setDate(date.getDate() + (dateOffset > DAY_OFFSET ? dateOffset : DAY_OFFSET));

        return date;
    };

    const getDepartureTimeIfScheduled = (date: Date): Date => {
        if (weekDay)
            return getNextDay(date);

        return date;
    };

    const getDepartureTime = (): Date => {
        let date;

        if (journey)
            date = moment(new Date(journey?.departureTime ?? INITIAL_TIME)).toDate();
        else
            date = addMinutesToDate(new Date(), MINUTES_OFFSET);

        return getDepartureTimeIfScheduled(date);
    };

    const [departureTime, setDepartureTime] = useState<Date>(getDepartureTime());
    const [departureTimeIsConfirmed, setDepartureTimeIsConfirmed] = useState(Boolean(journey));

    const [availableSeats, setAvailableSeats] = useState(
        journey?.countOfSeats ?? DEFAULT_AVAILABLE_SEATS_COUNT);

    const [comment] = useState(journey?.comments ?? "");

    const [savedLocationIsLoading, setSavedLocationIsLoading] = useState(true);
    const [userCarIsLoading, setUserCarIsLoading] = useState(true);
    const [rideIsPublishing, setRideIsPublishing] = useState(false);
    const [usersIsLoading, setUsersIsLoading] = useState(true);
    const [newInvitations, setNewInvitations] = useState<{ email: string; isCorrect: boolean }[]>(
        params.newInvitations ?? []
    );

    const [successfullyPublishModalIsVisible, setSuccessfullyPublishModalIsVisible] = useState(false);
    const [successfullyUpdateModalIsVisible, setSuccessfullyUpdateModalIsVisible] = useState(false);
    const [discardModalIsVisible, setDiscardModalIsVisible] = useState(false);
    const [applyChangesModalIsVisible, setApplyChangesModalIsVisible] = useState(false);

    const [modal, setModal] = useState<ConfirmModalProps>({ ...freeRideModal, visible: false });
    const disableModal = () => setModal(prevState => ({ ...prevState, visible: false }));

    useEffect(() => {
        setNewInvitations(params.newInvitations ?? []);
    }, [params]);

    useEffect(() =>{
        if(weekDay)
            setDepartureTime(getDepartureTime());
    }, [weekDay]);

    useEffect(() => {
        CarService.getAll().then(result => {
            setUserCars(result.data.map(car => (
                {
                    id: Number(car?.id),
                    name: `${car?.brand} ${car?.model}`
                }
            )));
            if (result.data.length === EMPTY_COLLECTION_LENGTH) {
                setOwnCarButtonStyle(inactiveButtonStyle);
                setTaxiButtonStyle(activeButtonStyle);
                setOwnCar(false);
                setAvailableSeats(DEFAULT_TAXI_AVAILABLE_SEATS_COUNT);
            }
            setUserCarIsLoading(false);
        });

        LocationService
            .getAll()
            .then((res) => {
                setSavedLocations(res.data);
                setSavedLocationIsLoading(false);
            });

        UserService.getAllUsers().then((res) => {
            setAllUsers(res.data);
            setUsersIsLoading(false);
        });
    }, []);

    useEffect(() : any => {
        AsyncStorage.getItem("publishRideFieldsState")
            .then((item) => {
                if (item) loadJourneyState();
            });
    }, []);

    useEffect(() : any => {
        if(!isFocused) saveJourneyState();
    }, [isFocused]);

    const createAllInvitationsArrayFromNewInvitations = (): Invitation[] => {
        return newInvitations.filter(inv => inv.isCorrect).map<Invitation>((invitedUser) => {
            return {
                id: 0,
                invitedUserId: allUsers.find((us) => us?.email === invitedUser.email)!.id,
                journeyId: 0,
                type: 0
            };
        }).concat(existingInvitations);
    };

    const saveJourneyState = () => {

        let filterToSave: PublishRideFilter = {
            departureTime: departureTime,
            departureTimeIsConfirmed: departureTimeIsConfirmed,
            fee: selectedFee,
            selectedCar: selectedCar,
            rideType: selectedRide,
            passengers: availableSeats,
            comments: comments,
            newInvitations: newInvitations
        };

        AsyncStorage.setItem("publishRideFieldsState", JSON.stringify(filterToSave));
    };

    const loadJourneyState = async () => {
        await AsyncStorage.getItem("publishRideFieldsState").then((res) => {
            let filter: PublishRideFilter = JSON.parse(res || "{}");

            switch (filter.fee) {
                case FeeType.Free:
                    setSelectedFeeAsPaid(false);
                    setSelectedFee(FeeType.Free);
                    break;
                case FeeType.Paid:
                    setSelectedFeeAsPaid(true);
                    setSelectedFee(FeeType.Paid);
                    break;
            }
            switch (filter.rideType) {
                case RideType.OwnCar:
                    setOwnCar(true);
                    setSelectedCar(filter.selectedCar);
                    setSelectedRide(RideType.OwnCar);
                    break;
                case RideType.Taxi:
                    setOwnCar(false);
                    setSelectedRide(RideType.Taxi);
                    break;
            }
            setDepartureTime(new Date(filter.departureTime));
            setDepartureTimeIsConfirmed(filter.departureTimeIsConfirmed);
            setAvailableSeats(filter.passengers);
            setComments(filter.comments);
            setNewInvitations(filter.newInvitations ?? []);
        });
    };

    const publishJourneyHandler = async () => {
        if (createAllInvitationsArrayFromNewInvitations().length > availableSeats)
        {
            setModal(invitationsErrorModal);

            return;
        }
        setRideIsPublishing(true);

        for (let location of savedLocations) {
            if (location?.name === params.from.text &&
                location.address?.latitude === params.from.coordinates.latitude &&
                location.address.longitude === params.from.coordinates.longitude)
                params.from.text = location.address?.name;
            if (location?.name === params.to.text &&
                location.address?.latitude === params.to.coordinates.latitude &&
                location.address.longitude === params.to.coordinates.longitude)
                params.to.text = location.address?.name;
        }

        const newJourney: JourneyDto = {
            id: 0,
            carId: JSON.stringify(ownCarButtonStyle) === JSON.stringify(activeButtonStyle) ? selectedCar.id : null,
            comments: comments,
            countOfSeats: availableSeats,
            departureTime: departureTime,
            isFree: !selectedFeeAsPaid,
            isOnOwnCar: JSON.stringify(ownCarButtonStyle) === JSON.stringify(activeButtonStyle),
            organizerId: Number(user?.id),
            journeyPoints: params.routePoints.map((point, index) => ({ ...point, index: index })),
            stops: createStopArrayFromWayPoint(params.from, params.to, params.stops, Number(user?.id)),
            invitations: createAllInvitationsArrayFromNewInvitations(),
            duration: params.duration,
            routeDistance: Math.round(params.routeDistance),
            weekDay: weekDay || null,
        };

        await JourneyService.add(newJourney)
            .then((res) => {
                const newChat : CreateChat = {
                    id: res.data.journeyModel.id,
                    name:
                        user?.name + " " +
                        user?.surname + "'s ride"
                };

                ChatService.addChat(newChat)
                    .then(() => {
                        setSuccessfullyPublishModalIsVisible(true);
                    }
                    );
            })
            .catch(() => setModal(publishErrorModal));

        setRideIsPublishing(false);
    };

    const updateJourneyHandler = async () => {
        if (!journey) return;

        setRideIsPublishing(true);

        const updatedJourney: JourneyDto = {
            ...journey,
            carId: JSON.stringify(ownCarButtonStyle) === JSON.stringify(activeButtonStyle) ? selectedCar.id : null,
            comments: comments.trim(),
            countOfSeats: availableSeats,
            departureTime: departureTime,
            isFree: !selectedFeeAsPaid,
            isOnOwnCar: JSON.stringify(ownCarButtonStyle) === JSON.stringify(activeButtonStyle),
            duration: journey.duration,
            weekDay: weekDay || null,
            invitations: createAllInvitationsArrayFromNewInvitations(),
            organizerId: Number(journey.organizer?.id),
        };

        await JourneyService.updateDetails(updatedJourney)
            .then((res) => {
                if (res.status === HTTP_STATUS_OK) {
                    setSuccessfullyUpdateModalIsVisible(true);
                }
                else {
                    setModal(updateErrorModal);
                }
            })
            .catch(() => setModal(updateErrorModal));

        setRideIsPublishing(false);
    };

    const noChanges = () => {
        if (!journey) return false;

        return (journey.car?.id === ZERO_ID || journey.car?.id === selectedCar.id) &&
            new Date(journey.departureTime).getTime() === departureTime.getTime() &&
            journey.comments === comment &&
            journey.countOfSeats === availableSeats &&
            journey.isFree === (freeButtonStyle === activeButtonStyle) &&
            journey.isOnOwnCar === (ownCarButtonStyle === activeButtonStyle);
    };

    const isLoading = userCarIsLoading || rideIsPublishing
        || successfullyPublishModalIsVisible || savedLocationIsLoading || usersIsLoading;

    const confirmDisabled = !departureTimeIsConfirmed || noChanges();

    return (
        <>
            {isLoading && (
                <Indicator
                    size="large"
                    color={colors.hover}
                    text={rideIsPublishing ? "The ride is publishing..." : "Loading information..."}
                />
            )}
            {!isLoading && (
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "position"}
                >
                    <ScrollView style={[CreateJourneyStyle.container, { backgroundColor: colors.white }]}>
                        <View style={SearchJourneyStyle.locationContainer}>
                            <AddressInputButton
                                iconName={"location"}
                                directionType={"From"}
                                marginTop={16}
                                text={params.from.text}
                                disabled={true}
                                iconColor={lightColors.secondaryLight}
                            />
                        </View>
                        <View style={SearchJourneyStyle.locationContainer}>
                            <AddressInputButton
                                iconName={"location"}
                                directionType={"To"}
                                text={params.to.text}
                                disabled={true}
                                iconColor={lightColors.secondaryLight}
                            />
                        </View>

                        <View style={SearchJourneyStyle.locationContainer}>
                            {params.stops.map((stop, index) => (
                                <AddressInputButton
                                    iconName={"location"}
                                    directionType={"Via"}
                                    text={stop.text}
                                    disabled={true}
                                    key={index}
                                    marginBottom={16}
                                    iconColor={lightColors.secondaryLight}
                                />
                            ))}
                        </View>

                        <View style={SearchJourneyStyle.DepartureContainerLocation}>
                            <TouchableDateTimePicker
                                date={departureTime}
                                setDate={(d) => {
                                    setDepartureTime(d);
                                    setDepartureTimeIsConfirmed(true);
                                }}
                                isConfirmed={departureTimeIsConfirmed}
                                setIsConfirmedToTrue={() => setDepartureTimeIsConfirmed(true)}
                                onlyTime={weekDay ? true : false}
                            />
                        </View>
                        <SwitchSelector
                            leftButtonStyle={ownCarButtonStyle}
                            rightButtonStyle={taxiButtonStyle}
                            onLeftButtonPress={() => {
                                setOwnCar(true);
                                setSelectedRide(RideType.OwnCar);
                                setIsVisibleCarDropDown(false);
                                setAvailableSeats(DEFAULT_AVAILABLE_SEATS_COUNT);
                            }}
                            onRightButtonPress={() => {
                                setOwnCar(false);
                                setSelectedRide(RideType.Taxi);
                                setAvailableSeats(DEFAULT_TAXI_AVAILABLE_SEATS_COUNT);
                            }}
                            title={"Ride Type"}
                            leftButtonText={"Own car"}
                            rightButtonText={"Taxi"}
                            disableLeftButton={userCars.length === EMPTY_COLLECTION_LENGTH}
                        />

                        {isOwnCar && (
                            <View style={CreateJourneyStyle.dropDownPickerContainer}>
                                <JourneyCreationDropDownPicker
                                    items={userCars.map((car) => ({
                                        label: car.name,
                                        value: car.id
                                    }))}
                                    paddingLeft={105}
                                    searchable={true}
                                    placeholder="Choose a Car:"
                                    isVisible={isVisibleCarDropDown}
                                    onOpen={() => setIsVisibleCarDropDown(true)}
                                    onChangeItem={(item) => {
                                        setSelectedCar({ id: item.value, name: item.label });
                                        setIsVisibleCarDropDown(false);
                                    }}
                                    valueId={selectedCar.id === null && userCars.length > EMPTY_COLLECTION_LENGTH ?
                                        userCars[FIRST_ELEMENT_INDEX].id : selectedCar.id
                                    }
                                />
                            </View>
                        )}

                        <SwitchSelector
                            leftButtonStyle={freeButtonStyle}
                            rightButtonStyle={paidButtonStyle}
                            onLeftButtonPress={() => {
                                setSelectedFeeAsPaid(false);
                                setSelectedFee(FeeType.Free);
                            }}
                            onRightButtonPress={() => {
                                setSelectedFeeAsPaid(true);
                                setSelectedFee(FeeType.Paid);
                            }}
                            title={"Fee"}
                            leftButtonText={"Free"}
                            rightButtonText={"Paid"}
                        />

                        <SeatsInputSpinner
                            value={availableSeats}
                            onChange={seats => setAvailableSeats(seats)}
                            title={"Passengers"}
                            minValue={journey?.participants.length ?? MIN_AVAILABLE_SEATS_COUNT}
                            maxValue={isOwnCar ? DEFAULT_AVAILABLE_SEATS_COUNT : DEFAULT_TAXI_AVAILABLE_SEATS_COUNT}
                        />

                        <CommentBlock
                            initialComment={comments}
                            commentHeader="Comments"
                            placeholder = "Write your comments"
                            setComments={(initialComment:string)=>
                                setComments(initialComment)}
                        />

                        <View style={CreateJourneyStyle.invitationsView}>
                            <Text style={[CreateJourneyStyle.commentsCaption, { color: colors.primary }]}>Invite
                                Softservians</Text>
                            <TouchableOpacity style={CreateJourneyStyle.invitationsLink}
                                onPress={() =>
                                    navigation.navigate("Journey Invitations",
                                        { journey: journey, newInvitations: newInvitations, allUsers: allUsers })
                                }
                            >
                                <Ionicons
                                    style={[
                                        { transform: [{ rotate: "0deg" }], borderColor: colors.neutralLight }
                                    ]}
                                    name={"people-circle-outline"}
                                    size={35}
                                    color={colors.hover}
                                />
                                <View style={{ marginLeft: 20 }}>
                                    <Text style={{ ...CreateJourneyStyle.invitationsCaption, color: colors.primary }}>
                                        Invite SoftServians</Text>
                                    <Text style={{ ...CreateJourneyStyle.invitationsDescription,
                                        color: colors.primary, width: 238 }}>
                                        {existingInvitations.length +
                                            newInvitations.filter(inv => inv.isCorrect).length} SoftServian
                                        will be notified for that Journey

                                    </Text>
                                </View>
                                <Ionicons
                                    style={[
                                        {
                                            transform: [{ rotate: "0deg" }], borderColor: colors.neutralLight,
                                            marginLeft: 53
                                        }
                                    ]}
                                    name={"chevron-forward-outline"}
                                    size={25}
                                    color={colors.hover}
                                />
                            </TouchableOpacity>
                        </View>

                        <Divider style={[CreateJourneyStyle.separator, { backgroundColor: colors.secondaryLight }]} />

                        <View style={[CreateJourneyStyle.publishButtonContainer,

                            { flexDirection: journey ? "row" : "column" }]}>

                            <TouchableOpacity
                                style={[CreateJourneyStyle.publishButton,
                                    {
                                        backgroundColor: confirmDisabled ? colors.secondaryDark : colors.hover,
                                        borderColor: confirmDisabled ? colors.secondaryDark : colors.hover
                                    }]}
                                onPress={journey ?
                                    () => setApplyChangesModalIsVisible(true) :
                                    publishJourneyHandler}
                                disabled={confirmDisabled}
                            >
                                <Text style={[CreateJourneyStyle.publishButtonText,
                                    {
                                        fontSize: CREATING_FONT_SIZE,
                                        color: colors.white
                                    }]}>
                                    {journey ? "Apply changes" : "Publish"}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[CreateJourneyStyle.discardButton,
                                    {
                                        display: journey ? "flex" : "none",
                                    }]}
                                onPress={() => setDiscardModalIsVisible(true)}
                            >
                                <Text style={CreateJourneyStyle.discardButtonText}>
                                    Discard Changes
                                </Text>
                            </TouchableOpacity>

                        </View>

                    </ScrollView>
                </KeyboardAvoidingView>
            )}

            <ConfirmModal
                {...modal}
                onConfirm={disableModal}
                disableModal={disableModal}
            />

            <ConfirmModal
                visible={successfullyPublishModalIsVisible}
                title={"Success"}
                subtitle={"Ride successfully published"}
                confirmText={"OK"}
                hideCancelButton={true}
                onConfirm={() => {
                    setSuccessfullyPublishModalIsVisible(false);
                    navigation.navigate("Journey");
                }}
                disableModal={() => {
                    setSuccessfullyPublishModalIsVisible(false);
                    navigation.navigate("Journey");
                }}
            />

            <ConfirmModal
                visible={successfullyUpdateModalIsVisible}
                title={"Success"}
                subtitle={"Ride details successfully updated"}
                confirmText={"OK"}
                hideCancelButton={true}
                onConfirm={() => {
                    setSuccessfullyUpdateModalIsVisible(false);
                    navigation.goBack();
                }}
                disableModal={() => {
                    setSuccessfullyUpdateModalIsVisible(false);
                    navigation.goBack();
                }}
            />

            <ConfirmModal
                visible={discardModalIsVisible}
                title={"Are you sure?"}
                subtitle={"Are you sure you want to discard the changes?"}
                confirmText={"Yes, discard"}
                cancelText={"No, keep it"}
                onConfirm={() => {
                    setDiscardModalIsVisible(false);
                    navigation.goBack();
                }}
                disableModal={() => setDiscardModalIsVisible(false)}
            />

            <ConfirmModal
                visible={applyChangesModalIsVisible}
                title={"CHANGES"}
                subtitle={"After the changes is applied, all passengers will get notified. " +
                    "Some of them might withdraw from the ride if change doesn't suit them"}
                confirmText={"Apply"}
                cancelText={"Cancel"}
                onConfirm={() => {
                    setApplyChangesModalIsVisible(false);
                    updateJourneyHandler();
                }}
                disableModal={() => setApplyChangesModalIsVisible(false)}
            />
        </>
    );
};

export default JourneyDetailsPage;
