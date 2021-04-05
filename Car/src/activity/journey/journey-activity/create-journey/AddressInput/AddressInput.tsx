import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import APIConfig from "../../../../../../api-service/APIConfig";
import AddressInputProps from "./AddressInputProps";
import AddressInputStyles from "./AddressInputStyles";
import { Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const AddressInput = (props: AddressInputProps) => {
    return (
        <GooglePlacesAutocomplete
            onPress={props.onPress}
            query={{
                key: APIConfig.apiKey,
                language: "ua"
            }}
            renderLeftButton={() => (
                <Text style={AddressInputStyles.placeholder}>
                    {props.placeholder + ":"}
                </Text>
            )}
            renderRightButton={() => (
                <TouchableOpacity
                    style={AddressInputStyles.marker}
                    onPress={props.onMarkerPress}
                >
                    <FontAwesome
                        name={"map-marker"}
                        size={30}
                        color={props.isMarkerFocus ? "#5355fc" : "grey"}
                    />
                </TouchableOpacity>
            )}
            styles={{
                ...AddressInputStyles,
                ...{
                    container: {
                        ...AddressInputStyles.container,
                        ...{ top: props.top }
                    },
                    textInput: {
                        ...AddressInputStyles.textInput,
                        ...{ paddingLeft: props.paddingLeft }
                    }
                }
            }}
            enablePoweredByContainer={false}
            isRowScrollable={false}
            textInputProps={{
                // editable: !props.isConfirmed
                onChangeText: props.onChangeText,
                value: props.address
            }}
            placeholder={""}
        />);
};

export default AddressInput;