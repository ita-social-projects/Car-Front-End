import React, { useRef, useState } from "react";
import { GooglePlacesAutocompleteRef } from "react-native-google-places-autocomplete";
import { View, Text, TouchableOpacity } from "react-native";
import SearchJourneyStyle from "../search-journey/SearchJourneyStyle";
import DM from "../../../../components/styles/DM";
import AddressInput from "./AddressInput/AddressInput";

function CreateJourney () {
    const [isFromConfirmed, setIsFromConfirmed] = useState(false);
    const [isToConfirmed, setIsToConfirmed] = useState(false);
    const refForFrom = useRef<GooglePlacesAutocompleteRef>();
    const refForTo = useRef<GooglePlacesAutocompleteRef>();

    const confirmPressHandler = () => {
        if (isFromConfirmed && isToConfirmed) return;

        const ref = !isFromConfirmed ? refForFrom : refForTo;
        const setConfirmed = !isFromConfirmed ? setIsFromConfirmed : setIsToConfirmed;
        const input = ref.current?.getAddressText();

        ref.current?.setAddressText(
            `${!isFromConfirmed ? "From" : "To"}: ${input}`);
        setConfirmed(true);
    };

    return (
        <View style={{ flex: 1 }}>
            <AddressInput
                placeholder={"From"}
                isConfirmed={isFromConfirmed}
                ref={refForFrom as any}
            />

            {isFromConfirmed ? (
                <AddressInput
                    placeholder={"To"}
                    isConfirmed={isToConfirmed}
                    ref={refForTo as any}
                />
            ) : (<></>)}

            {isFromConfirmed && isToConfirmed ? (<></>) :
                (<TouchableOpacity
                    style={[SearchJourneyStyle.confirmButton, { backgroundColor: DM(DM("black")) }]}
                    onPress={confirmPressHandler}
                >
                    <Text style={[SearchJourneyStyle.confirmButtonSaveText, { color: DM(DM("white")) }]}>
                        Confirm
                    </Text>
                </TouchableOpacity>)}
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
}

export default CreateJourney;
