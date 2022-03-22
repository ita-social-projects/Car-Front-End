import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AddLocationStyle from "../../activity/my-profile/my-profile-activity/address-book/address-book-activity/add-locations/AddLocationStyle";
import AddressNameInputProps from "./AddressNameInputProps";
import { useTheme } from "../../components/theme/ThemeProvider";
import Location from "../../../models/location/Location";

const AddressNameInput = (props: AddressNameInputProps) => {

    const { colors } = useTheme();
    const [isLocationAvailable, setIsLocationAvailable] = useState<boolean>(true);

    const checkForAvailability = (name : string): boolean => {
        let availability = true;

            props.userLocations?.forEach((item : Location) => {
                if(item?.name == name && item?.name != props.currentLocationName){
                    availability = false;
                }});

            return availability;
    };

    return(
        <>
            <View style={[isLocationAvailable
                ? AddLocationStyle.textInputBlock
                : AddLocationStyle.textInputBlockOnError,
            ]}>
                <TextInput
                    style={[AddLocationStyle.textInput,
                        {
                            borderColor: isLocationAvailable
                                ? colors.primary
                                : colors.accentRed,
                            backgroundColor: colors.white,
                            color: colors.primary,
                        }]}
                    defaultValue={props.currentLocationName}
                    placeholder={"Name the chosen address"}
                    placeholderTextColor={colors.secondaryDark}
                    onChangeText={(fromInput: string) =>{
                        setIsLocationAvailable(checkForAvailability(fromInput));
                        props.onTextChange(fromInput, checkForAvailability(fromInput));
                    }}/>
                { isLocationAvailable
                    ? <></>
                    :(
                        <>
                            <View style={[AddLocationStyle.addressErrorBlock]} >
                                <Ionicons
                                    name="alert-circle-outline"
                                    size={19.5}
                                    style={[{
                                        color: colors.accentRed,
                                        borderColor: colors.neutralLight,
                                    }]}>
                                </Ionicons>
                            </View>
                            <Text
                                style={[
                                    AddLocationStyle.addressErrorText,
                                    { color: colors.accentRed }
                                ]}>
                                You already have an address with this name
                            </Text>
                        </>
                    )
                }
            </View>
        </>
    );
};

export default AddressNameInput;