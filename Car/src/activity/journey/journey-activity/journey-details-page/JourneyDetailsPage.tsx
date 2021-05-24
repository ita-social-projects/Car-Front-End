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
import TouchableDateTimePicker, { addMinutesToDate } from "../touchable/datetime-picker/TouchableDateTimePicker";
import JourneyCreationDropDownPicker from "../dropdown-picker/JourneyCreationDropDownPicker";
import SeatsInputSpinner from "../input-spinner/SeatsInputSpinner";
import AddressInputButton from "../create-journey/AddressInputButton/AddressInputButton";
import JourneyDetailsPageProps from "./JourneyDetailsPageProps";
import SwitchSelector from "../create-journey/SwitchSelector/SwitchSelector";
import { activeButtonStyle, inactiveButtonStyle } from "../create-journey/SwitchSelector/SwitchSelectorStyle";
import CarService from "../../../../../api-service/car-service/CarService";
import AuthContext from "../../../../components/auth/AuthContext";
import { MINUTES_OFFSET } from "../../../../constants/AnimationConstants";
import {
    CREATING_FONT_SIZE,
    DEFAULT_AVAILABLE_SEATS_COUNT, EDITING_FONT_SIZE,
    INITIAL_TIME,
    MIN_AVAILABLE_SEATS_COUNT,
} from "../../../../constants/JourneyConstants";
import {
    EMPTY_COLLECTION_LENGTH,
    FIRST_ELEMENT_INDEX
} from "../../../../constants/GeneralConstants";
import JourneyService from "../../../../../api-service/journey-service/JourneyService";
import StopType from "../../../../../models/stop/StopType";
import * as navigation from "../../../../components/navigation/Navigation";
import CreateJourneyModel from "../../../../../models/journey/CreateJourneyModel";
import Indicator from "../../../../components/activity-indicator/Indicator";
import ConfirmModal from "../../../../components/confirm-modal/ConfirmModal";
import moment from "moment";
import ConfirmModalProps from "../../../../components/confirm-modal/ConfirmModalProps";
import { freeRideModal, paidRideModal, publishErrorModal } from "./JourneyDetailsModals";

const JourneyDetailsPage = (props: JourneyDetailsPageProps) => {

    const params = props.route.params;
    const journey = params.journey;
    const carModel = journey?.car?.model;

    const { user } = useContext(AuthContext);

    const [isVisibleCarDropDown, setIsVisibleCarDropDown] = useState(false);
    const [selectedCar, setSelectedCar] = useState<{id: number, name: string}>({
        id: journey?.car?.id ?? NaN,
        name: journey ? `${carModel?.brand?.name} ${carModel?.name}` : ""
    });
    const [userCars, setUserCars] = useState<{id: number, name: string}[]>([]);

    const [ownCarButtonStyle, setOwnCarButtonStyle] = useState(
        journey?.isOnOwnCar && journey || !journey ? activeButtonStyle : inactiveButtonStyle);
    const [taxiButtonStyle, setTaxiButtonStyle] = useState(
        journey?.isOnOwnCar && journey || !journey ? inactiveButtonStyle : activeButtonStyle);

    const [freeButtonStyle, setFreeButtonStyle] = useState(
        journey?.isFree && journey || !journey ? activeButtonStyle : inactiveButtonStyle);
    const [paidButtonStyle, setPaidButtonStyle] = useState(
        journey?.isFree && journey || !journey ? inactiveButtonStyle : activeButtonStyle);

    const [departureTime, setDepartureTime] = useState<Date>(journey ?
        moment(new Date(journey?.departureTime ?? INITIAL_TIME)).toDate() :
        addMinutesToDate(new Date(), MINUTES_OFFSET));
    const [departureTimeIsConfirmed, setDepartureTimeIsConfirmed] = useState(Boolean(journey));

    const [availableSeats, setAvailableSeats] = useState(
        journey?.countOfSeats ?? DEFAULT_AVAILABLE_SEATS_COUNT);

    const [comment, setComment] = useState(journey?.comments ?? "");

    const [userCarIsLoading, setUserCarIsLoading] = useState(true);
    const [rideIsPublishing, setRideIsPublishing] = useState(false);

    const [successfullyPublishModalIsVisible, setSuccessfullyPublishModalIsVisible] = useState(false);
    const [discardModalIsVisible, setDiscardModalIsVisible] = useState(false);
    const [applyChangesModalIsVisible, setApplyChangesModalIsVisible] = useState(false);

    const [modal, setModal] = useState<ConfirmModalProps>({ ...freeRideModal, visible: false });
    const disableModal = () => setModal(prevState => ({ ...prevState, visible: false }));

    useEffect(() => {
        CarService.getAll(Number(user?.id)).then(result => {
            setUserCars(result.data.map(car => (
                {
                    id: Number(car?.id),
                    name: `${car?.model?.brand?.name} ${car?.model?.name}`
                }
            )));
            setUserCarIsLoading(false);
        });
    }, []);

    const publishJourneyHandler = async () => {
        setRideIsPublishing(true);

        const newJourney: CreateJourneyModel = {
            carId: selectedCar.id,
            comments: comment,
            countOfSeats: availableSeats,
            departureTime: departureTime,
            isFree: freeButtonStyle === activeButtonStyle,
            isOnOwnCar: ownCarButtonStyle === activeButtonStyle,
            organizerId: Number(user?.id),
            journeyPoints: params.routePoints.map((point, index) => ({ ...point, index: index })),
            stops: [{ ...params.from, stopType: StopType.Start },
                ...params.stops.map(stop => ({ ...stop, stopType: StopType.Intermediate })),
                { ...params.to, stopType: StopType.Finish }]
                .map((value) => {
                    return {
                        address: {
                            id: 0,
                            latitude: value.coordinates.latitude,
                            longitude: value.coordinates.longitude,
                            name: value.text
                        },
                        type: value.stopType,
                        id: 0,
                        journeyId: 0,
                        userId: Number(user?.id)
                    };
                }),
            durationInMinutes: Math.round(params.duration),
            routeDistance: Math.round(params.routeDistance)
        };

        await JourneyService.add(newJourney)
            .then(() => setSuccessfullyPublishModalIsVisible(true))
            .catch(() => setModal(publishErrorModal));

        setRideIsPublishing(false);
    };

    const isLoading = userCarIsLoading || rideIsPublishing || successfullyPublishModalIsVisible;

    return (
        <>
            {isLoading && (
                <Indicator
                    size="large"
                    color="#414045"
                    text={rideIsPublishing ? "The ride is publishing..." : "Loading information..."}
                />
            )}
            {!isLoading && (
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "position"}
                >
                    <ScrollView style={CreateJourneyStyle.container}>

                        <AddressInputButton
                            iconName={"location"}
                            directionType={"From"}
                            text={params.from.text}
                            disabled={true}
                            marginHorizontal={20}
                            marginBottom={24}
                        />
                        <AddressInputButton
                            iconName={"location"}
                            directionType={"To"}
                            text={params.to.text}
                            disabled={true}
                            marginHorizontal={20}
                            marginBottom={24}
                        />

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

                        <TouchableDateTimePicker
                            date={departureTime}
                            setDate={(d) => {
                                setDepartureTime(d);
                                setDepartureTimeIsConfirmed(true);
                            }}
                            isConfirmed={departureTimeIsConfirmed}
                            setIsConfirmedToTrue={() => setDepartureTimeIsConfirmed(true)}
                        />

                        <SwitchSelector
                            leftButtonStyle={ownCarButtonStyle}
                            rightButtonStyle={taxiButtonStyle}
                            onLeftButtonPress={() => {
                                if (ownCarButtonStyle === activeButtonStyle) return;

                                setIsVisibleCarDropDown(false);
                                setOwnCarButtonStyle(activeButtonStyle);
                                setTaxiButtonStyle(inactiveButtonStyle);
                            }}
                            onRightButtonPress={() => {
                                setOwnCarButtonStyle(inactiveButtonStyle);
                                setTaxiButtonStyle(activeButtonStyle);
                            }}
                            title={"Ride Type"}
                            leftButtonText={"Own car"}
                            rightButtonText={"Taxi"}
                        />

                        {ownCarButtonStyle === activeButtonStyle && (
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
                                valueId={Number.isNaN(selectedCar.id) && userCars.length > EMPTY_COLLECTION_LENGTH ?
                                    userCars[FIRST_ELEMENT_INDEX].id : selectedCar.id
                                }
                            />)}

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
                            <Text style={CreateJourneyStyle.commentsCaption}>Comments</Text>
                            <TextInput
                                style={CreateJourneyStyle.textInputStyle}
                                multiline={true}
                                maxLength={100}
                                numberOfLines={10}
                                placeholder={"Write your comment"}
                                placeholderTextColor={"#686262"}
                                onChangeText={text => setComment(text)}
                                value={comment}
                            />
                            <Text style={{ color: "#686262", paddingTop: 5 }}>Up to 100 symbols</Text>
                        </View>

                        <View style={[CreateJourneyStyle.publishButtonContainer,
                            { flexDirection: journey ? "row" : "column" }]}>

                            <TouchableOpacity
                                style={[CreateJourneyStyle.discardButton,
                                    { display: journey ? "flex" : "none" }]}
                                onPress={() => setDiscardModalIsVisible(true)}
                            >
                                <Text style={CreateJourneyStyle.discardButtonText}>
                                    Discard changes
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[CreateJourneyStyle.publishButton,
                                    { backgroundColor: departureTimeIsConfirmed ? "black" : "#afafaf" }]}
                                onPress={journey ?
                                    () => setApplyChangesModalIsVisible(true) :
                                    publishJourneyHandler}
                                disabled={!departureTimeIsConfirmed}
                            >
                                <Text style={[CreateJourneyStyle.publishButtonText,
                                    { fontSize: journey ? EDITING_FONT_SIZE : CREATING_FONT_SIZE }]}>
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
                    console.log("Ride is updating...");
                    props.navigation?.push("Journey Page", {
                        journeyId: journey?.id,
                        isDriver: true,
                        isPassenger: false,
                        afterEditing: true
                    });
                }}
                disableModal={() => setApplyChangesModalIsVisible(false)}
            />
        </>
    );
};

export default JourneyDetailsPage;
