import React from "react";
import { GooglePlacesAutocomplete, GooglePlacesAutocompleteRef } from "react-native-google-places-autocomplete";
import APIConfig from "../../../../../../api-service/APIConfig";
import AddressInputProps from "./AddressInputProps";
import AddressInputStyles from "./AddressInputStyles";

const AddressInput = React.forwardRef<GooglePlacesAutocompleteRef, AddressInputProps>
((props: AddressInputProps, ref) => {
    return (
        <GooglePlacesAutocomplete
            ref={ref}
            onPress={(data, details) => console.log(data, details)}
            query={{
                key: APIConfig.apiKey,
                language: "ua"
            }}
            placeholder={props.placeholder}
            styles={{ ...AddressInputStyles, ...{ container: {
                flex: props.flex,
            } } }}
            enablePoweredByContainer={false}
            textInputProps={{
                editable: !props.isConfirmed
            }}
        />);
});

export default AddressInput;