import React, { useContext, useEffect, useState } from "react";
import { CreateJourneyStyle } from "../create-journey/CreateJourneyStyle";
import {
    ScrollView,
    TextInput,
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
    DEFAULT_AVAILABLE_SEATS_COUNT, EDITING_FONT_SIZE,
    INITIAL_TIME,
    MIN_AVAILABLE_SEATS_COUNT,
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
import { freeRideModal, paidRideModal, publishErrorModal, updateErrorModal } from "./JourneyDetailsModals";
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
import appInsights from "../../../../components/telemetry/AppInsights";
import ChatService from "../../../../../api-service/chat-service/ChatService";
import CreateChat from "../../../../../models/Chat/CreateChat";

const getCarId = (journey?: Journey) => {
    if (!journey || journey.car && journey.car.id === ZERO_ID) return null;

    return journey.car!.id;
};

const JourneyDetailsPage = (props: JourneyDetailsPageProps) => {
    const { DM } = useTheme();
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
        name: journey ? `${carModel?.brand?.name} ${carModel?.name}` : ""
    });
    const [userCars, setUserCars] = useState<{ id: number, name: string }[]>([]);
    const [allUsers, setAllUsers] = useState<User[]>([]);

    const activeButtonStyle = {
        backgroundColor: DM("#000000"),
        color: DM("#FFFFFF"),
        borderColor: DM("#000000")
    };

    const inactiveButtonStyle = {
        backgroundColor: DM("#FFFFFF"),
        color: DM("#000000"),
        borderColor: DM("#000000")
    };

    const setButtonStyle = (shouldBeHighlighted: boolean) => {
        if (shouldBeHighlighted)
            return activeButtonStyle;

        return inactiveButtonStyle;
    };

    let highlightOwnCarButton: boolean = !journey || journey.isOnOwnCar;
    const [ownCarButtonStyle, setOwnCarButtonStyle] = useState(setButtonStyle(highlightOwnCarButton));
    const [taxiButtonStyle, setTaxiButtonStyle] = useState(setButtonStyle(!highlightOwnCarButton));

    let highlightPaidButton: boolean = !journey || !journey.isFree;
    const [paidButtonStyle, setPaidButtonStyle] = useState(setButtonStyle(highlightPaidButton));
    const [freeButtonStyle, setFreeButtonStyle] = useState(setButtonStyle(!highlightPaidButton));

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

    const [isOwnCar, setOwnCar] = useState(journey?.isOnOwnCar || !journey);

    const [availableSeats, setAvailableSeats] = useState(
        journey?.countOfSeats ?? DEFAULT_AVAILABLE_SEATS_COUNT);

    const [comment, setComment] = useState(journey?.comments ?? "");

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
                    name: `${car?.model?.brand?.name} ${car?.model?.name}`
                }
            )));
            if (result.data.length === EMPTY_COLLECTION_LENGTH) {
                setOwnCarButtonStyle(inactiveButtonStyle);
                setTaxiButtonStyle(activeButtonStyle);
            }
            setUserCarIsLoading(false);
        });

        LocationService
            .getAll()
            .then((res) => {
                setSavedLocations(res.data);
                setSavedLocationIsLoading(false);
            })
            .catch((e) => appInsights.trackException({ exception: e }));

        UserService.getAllUsers().then((res) => {
            setAllUsers(res.data);
            setUsersIsLoading(false);
        });
    }, []);

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

    const publishJourneyHandler = async () => {
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
            comments: comment,
            countOfSeats: availableSeats,
            departureTime: departureTime,
            isFree: JSON.stringify(freeButtonStyle) === JSON.stringify(activeButtonStyle),
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
                    id: res.data.id,
                    name: 
                        user?.name + " " +
                        user?.surname + "'s ride"
                }
                ChatService.addChat(newChat)
                .then(() => setSuccessfullyPublishModalIsVisible(true))
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
            comments: comment.trim(),
            countOfSeats: availableSeats,
            departureTime: departureTime,
            isFree: JSON.stringify(freeButtonStyle) === JSON.stringify(activeButtonStyle),
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
                    color={DM("#414045")}
                    text={rideIsPublishing ? "The ride is publishing..." : "Loading information..."}
                />
            )}
            {!isLoading && (
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "position"}
                >
                    <ScrollView style={[CreateJourneyStyle.container, { backgroundColor: DM("white") }]}>
                        <View style={SearchJourneyStyle.locationContainer}>
                            <AddressInputButton
                                iconName={"location"}
                                directionType={"From"}
                                text={params.from.text}
                                disabled={true}
                            />
                        </View>
                        <View style={SearchJourneyStyle.locationContainer}>
                            <AddressInputButton
                                iconName={"location"}
                                directionType={"To"}
                                text={params.to.text}
                                disabled={true}
                            />
                        </View>

                        {params.stops.map((stop, index) => (
                            <AddressInputButton
                                iconName={"location"}
                                directionType={"Via"}
                                text={stop.text}
                                disabled={true}
                                marginHorizontal={20}
                                marginBottom={24}
                                key={index}
                            />
                        ))}
                        <View style={SearchJourneyStyle.locationContainer}>
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
                                setIsVisibleCarDropDown(false);
                                setOwnCarButtonStyle(activeButtonStyle);
                                setTaxiButtonStyle(inactiveButtonStyle);
                            }}
                            onRightButtonPress={() => {
                                setOwnCar(false);
                                setOwnCarButtonStyle(inactiveButtonStyle);
                                setTaxiButtonStyle(activeButtonStyle);
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
                                setModal(freeRideModal);
                                setFreeButtonStyle(activeButtonStyle);
                                setPaidButtonStyle(inactiveButtonStyle);
                            }}
                            onRightButtonPress={() => {
                                setModal(paidRideModal);
                                setFreeButtonStyle(inactiveButtonStyle);
                                setPaidButtonStyle(activeButtonStyle);
                            }}
                            title={"Fee"}
                            leftButtonText={"Free"}
                            rightButtonText={"Paid"}
                        />

                        <SeatsInputSpinner
                            value={availableSeats}
                            onChange={seats => setAvailableSeats(seats)}
                            title={"Available seats:"}
                            minValue={journey?.participants.length ?? MIN_AVAILABLE_SEATS_COUNT}
                        />

                        <View style={CreateJourneyStyle.commentsView}>
                            <Text style={[CreateJourneyStyle.commentsCaption, { color: DM("black") }]}>Comments</Text>
                            <TextInput
                                style={[CreateJourneyStyle.textInputStyle,
                                    {
                                        borderColor: DM("black"),
                                        color: DM("black")
                                    }]}
                                multiline={true}
                                maxLength={100}
                                numberOfLines={10}
                                placeholder={"Write your comment"}
                                placeholderTextColor={DM("#686262")}
                                onChangeText={text => setComment(text)}
                                value={comment}
                            />
                            <Text style={{ color: DM("#686262"), paddingTop: 5 }}>Up to 100 symbols</Text>
                        </View>

                        <View style={CreateJourneyStyle.invitationsView}>
                            <Text style={[CreateJourneyStyle.commentsCaption, { color: DM("black") }]}>Invited
                                SoftServians</Text>
                            <TouchableOpacity style={CreateJourneyStyle.invitationsLink}
                                onPress={() =>
                                    navigation.navigate("Journey Invitations",
                                        { journey: journey, newInvitations: newInvitations, allUsers: allUsers })
                                }
                            >
                                <Ionicons
                                    style={[
                                        { transform: [{ rotate: "0deg" }], borderColor: DM("#EEEEEE") }
                                    ]}
                                    name={"people-circle-outline"}
                                    size={35}
                                    color={DM("#414045")}
                                />
                                <View style={{ marginLeft: 17 }}>
                                    <Text style={{ ...CreateJourneyStyle.invitationsCaption, color: DM("black") }}>
                                        Invited SoftServians</Text>
                                    <Text style={{ ...CreateJourneyStyle.invitationsDesctiption, color: DM("black") }}>
                                        {existingInvitations.length +
                                            newInvitations.filter(inv => inv.isCorrect).length} SoftServians are invited
                                        for that Ride</Text>
                                </View>
                                <Ionicons
                                    style={[
                                        {
                                            transform: [{ rotate: "0deg" }], borderColor: DM("#EEEEEE"),
                                            marginLeft: 35
                                        }
                                    ]}
                                    name={"chevron-forward-outline"}
                                    size={25}
                                    color={DM("#414045")}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={[CreateJourneyStyle.publishButtonContainer,
                            { flexDirection: journey ? "row" : "column" }]}>

                            <TouchableOpacity
                                style={[CreateJourneyStyle.discardButton,
                                    {
                                        display: journey ? "flex" : "none",
                                        borderColor: DM("black")
                                    }]}
                                onPress={() => setDiscardModalIsVisible(true)}
                            >
                                <Text style={CreateJourneyStyle.discardButtonText}>
                                    Discard changes
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[CreateJourneyStyle.publishButton,
                                    {
                                        backgroundColor: confirmDisabled ? DM("gray") : DM("black"),
                                        borderColor: confirmDisabled ? DM("gray") : DM("black")
                                    }]}
                                onPress={journey ?
                                    () => setApplyChangesModalIsVisible(true) :
                                    publishJourneyHandler}
                                disabled={confirmDisabled}
                            >
                                <Text style={[CreateJourneyStyle.publishButtonText,
                                    {
                                        fontSize: journey ? EDITING_FONT_SIZE : CREATING_FONT_SIZE,
                                        color: DM("white")
                                    }]}>
                                    {journey ? "Apply changes" : "Publish"}
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
                confirmColor={"black"}
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
