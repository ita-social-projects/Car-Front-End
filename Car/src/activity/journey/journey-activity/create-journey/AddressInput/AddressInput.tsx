import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import APIConfig from "../../../../../../api-service/APIConfig";
import AddressInputProps from "./AddressInputProps";
import AddressInputStyles from "./AddressInputStyles";
import { Text } from "react-native";

const AddressInput = (props: AddressInputProps) => {
    return (
        <GooglePlacesAutocomplete
            onPress={props.onPress}
            query={{
                key: APIConfig.apiKey,
                language: "ua"
            }}
            renderLeftButton={() => {
                return (
                    <Text style={AddressInputStyles.placeholder}>
                        {props.placeholder + ":"}
                    </Text>
                );
            }}
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
                onChangeText: props.onChangeText
            }}
            placeholder={""}
        />);
};

export default AddressInput;