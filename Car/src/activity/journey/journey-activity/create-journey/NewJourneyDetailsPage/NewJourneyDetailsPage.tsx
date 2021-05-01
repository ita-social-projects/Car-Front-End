import React, { useContext, useEffect, useState } from "react";
import { CreateJourneyStyle } from "../CreateJourneyStyle";
import { ScrollView, TextInput, TouchableOpacity, View, Text } from "react-native";
import TouchableDateTimePicker, { addMinutesToDate } from "../../touchable/datetime-picker/TouchableDateTimePicker";
import JourneyCreationDropDownPicker from "../../dropdown-picker/JourneyCreationDropDownPicker";
import SeatsInputSpinner from "../../input-spinner/SeatsInputSpinner";
import FreeButtonChoiceAlert from "../../alerts/FreeButtonChoiceAlert";
import PaidButtonChoiceAlert from "../../alerts/PaidButtonChoiceAlert";
import AddressInputButton from "../AddressInputButton/AddressInputButton";
import NewJourneyDetailsPageProps from "./NewJourneyDetailsPageProps";
import SwitchSelector from "../SwitchSelector/SwitchSelector";
import SwitchSelectorStyle from "../SwitchSelector/SwitchSelectorStyle";
import CarService from "../../../../../../api-service/car-service/CarService";
import AuthContext from "../../../../../components/auth/AuthContext";
import {
    DEFAULT_AVAILABLE_SEATS_COUNT,
    EMPTY_COLLECTION_LENGTH,
    FIRST_ELEMENT_INDEX,
    MINUTES_OFFSET
} from "../../../../../constants/Constants";
import JourneyService from "../../../../../../api-service/journey-service/JourneyService";
import APIConfig from "../../../../../../api-service/APIConfig";
import StopType from "../../../../../../models/stop/StopType";
import * as navigation from "../../../../../components/navigation/Navigation";

const NewJourneyDetailsPage = (props: NewJourneyDetailsPageProps) => {

    const params = props.route.params;

    const { user } = useContext(AuthContext);

    const [isVisibleCarDropDown, setIsVisibleCarDropDown] = useState(false);
    const [selectedCar, setSelectedCar] =
        useState<{id: number, name: string}>({ id: NaN, name: "" });
    const [userCars, setUserCars] = useState<{id: number, name: string}[]>([]);

    const [freeButtonStyle, setFreeButtonStyle] = useState(SwitchSelectorStyle.activeButton);
    const [paidButtonStyle, setPaidButtonStyle] = useState(SwitchSelectorStyle.inactiveButton);

    const [ownCarButtonStyle, setOwnCarButtonStyle] = useState(SwitchSelectorStyle.activeButton);
    const [taxiButtonStyle, setTaxiButtonStyle] = useState(SwitchSelectorStyle.inactiveButton);

    const [departureTime, setDepartureTime] = useState(addMinutesToDate(new Date(), MINUTES_OFFSET));

    const [availableSeats, setAvailableSeats] = useState(DEFAULT_AVAILABLE_SEATS_COUNT);

    const [comment, setComment] = useState("");

    useEffect(() => {
        CarService.getAll(Number(user?.id)).then(result => {
            setUserCars(result.data.map(car => (
                {
                    id: Number(car?.id),
                    name: `${car?.model?.brand?.name} ${car?.model?.name}`
                }
            )));
        });
    }, []);

    useEffect(() => console.log("route points length - ", params.routePoints.length), []);

    const publishJourneyHandler = async () => {
        if (APIConfig.URL.endsWith(".net/")) return;

        await JourneyService.add({
            carId: selectedCar.id,
            comments: comment,
            countOfSeats: availableSeats,
            departureTime: departureTime,
            isFree: freeButtonStyle === SwitchSelectorStyle.activeButton,
            isOnOwnCar: ownCarButtonStyle === SwitchSelectorStyle.activeButton,
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
                        user: null
                    };
                })
        }).then(() => navigation.navigate("Journey"));
    };

    return (
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

            <TouchableDateTimePicker date={departureTime} setDate={(d) => setDepartureTime(d)}/>

            <SwitchSelector
                leftButtonStyle={ownCarButtonStyle}
                rightButtonStyle={taxiButtonStyle}
                onLeftButtonPress={() => {
                    if (ownCarButtonStyle === SwitchSelectorStyle.activeButton) return;

                    setIsVisibleCarDropDown(false);
                    setOwnCarButtonStyle(SwitchSelectorStyle.activeButton);
                    setTaxiButtonStyle(SwitchSelectorStyle.inactiveButton);
                }}
                onRightButtonPress={() => {
                    setOwnCarButtonStyle(SwitchSelectorStyle.inactiveButton);
                    setTaxiButtonStyle(SwitchSelectorStyle.activeButton);
                }}
                title={"Ride Type"}
                leftButtonText={"Own car"}
                rightButtonText={"Taxi"}
            />

            {ownCarButtonStyle === SwitchSelectorStyle.activeButton && (
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
                    FreeButtonChoiceAlert();
                    setFreeButtonStyle(SwitchSelectorStyle.activeButton);
                    setPaidButtonStyle(SwitchSelectorStyle.inactiveButton);
                }}
                onRightButtonPress={() => {
                    PaidButtonChoiceAlert();
                    setFreeButtonStyle(SwitchSelectorStyle.inactiveButton);
                    setPaidButtonStyle(SwitchSelectorStyle.activeButton);
                }}
                title={"Fee"}
                leftButtonText={"Free"}
                rightButtonText={"Paid"}
            />

            <SeatsInputSpinner value={availableSeats} onChange={seats => setAvailableSeats(seats)}/>

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

            <View style={CreateJourneyStyle.publishButtonContainer}>
                <TouchableOpacity
                    style={CreateJourneyStyle.publishButton}
                    onPress={publishJourneyHandler}
                >
                    <Text style={CreateJourneyStyle.publishButtonText}>Publish</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default NewJourneyDetailsPage;