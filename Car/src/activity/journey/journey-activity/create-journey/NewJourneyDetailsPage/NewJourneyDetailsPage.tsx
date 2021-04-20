import React, { useState } from "react";
import { CreateJourneyStyle } from "../CreateJourneyStyle";
import { ScrollView, TextInput, TouchableOpacity, View, Text } from "react-native";
import TouchableDateTimePicker from "../../touchable/datetime-picker/TouchableDateTimePicker";
import JourneyCreationDropDownPicker from "../../dropdown-picker/JourneyCreationDropDownPicker";
import SeatsInputSpinner from "../../input-spinner/SeatsInputSpinner";
import FreeButtonChoiceAlert from "../../alerts/FreeButtonChoiceAlert";
import PaidButtonChoiceAlert from "../../alerts/PaidButtonChoiceAlert";
import AddressInputButton from "../AddressInputButton/AddressInputButton";
import NewJourneyDetailsPageProps from "./NewJourneyDetailsPageProps";
import SwitchSelector from "../SwitchSelector/SwitchSelector";
import SwitchSelectorStyle from "../SwitchSelector/SwitchSelectorStyle";

const NewJourneyDetailsPage = (props: NewJourneyDetailsPageProps) => {

    const params = props.route.params;

    const [isVisibleCarDropDown, setIsVisibleCarDropDown] = useState(false);
    const [state, setState] = useState();

    const [freeButtonStyle, setFreeButtonStyle] = useState(SwitchSelectorStyle.activeButton);
    const [paidButtonStyle, setPaidButtonStyle] = useState(SwitchSelectorStyle.inactiveButton);

    const [ownCarButtonStyle, setOwnCarButtonStyle] = useState(SwitchSelectorStyle.activeButton);
    const [taxiButtonStyle, setTaxiButtonStyle] = useState(SwitchSelectorStyle.inactiveButton);

    return (
        <ScrollView style={CreateJourneyStyle.container}>

            <AddressInputButton
                iconName={"location"}
                directionType={"From"}
                text={params.from.text}
                disabled={true}
                marginHorizontal={20}
            />
            <AddressInputButton
                iconName={"location"}
                directionType={"To"}
                text={params.to.text}
                disabled={true}
                marginHorizontal={20}
            />

            {params.stops.map((stop, index) => (
                <AddressInputButton
                    iconName={"location"}
                    directionType={"Via"}
                    text={stop.text}
                    disabled={true}
                    marginHorizontal={20}
                    key={index}
                />
            ))}

            <TouchableDateTimePicker iconName="time" />

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

            <SeatsInputSpinner/>

            <SwitchSelector
                leftButtonStyle={ownCarButtonStyle}
                rightButtonStyle={taxiButtonStyle}
                onLeftButtonPress={() => {
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
                    items={[
                        { label: "Volkswagen Jetta", value: "volkswagen jetta" },
                        { label: "Ford Fiesta", value: "ford fiesta" },
                        { label: "Toyota Camry", value: "toyota camry" },
                        { label: "Test 1", value: "toyota camry" },
                        { label: "Test 2", value: "toyota camry" },
                    ]}
                    paddingLeft={105}
                    searchable={true}
                    placeholder="Choose a Car:"
                    isVisible={isVisibleCarDropDown}
                    onOpen={() => setIsVisibleCarDropDown(true)}
                    onChangeItem={(item: { value: React.SetStateAction<undefined> }) => {
                        setState(item.value);
                        setIsVisibleCarDropDown(false);
                    }}
                    onClose={state}
                />)}

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

            <TouchableOpacity style={CreateJourneyStyle.publishButton}>
                <Text style={CreateJourneyStyle.publishButtonText}>Publish</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default NewJourneyDetailsPage;