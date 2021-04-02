import { GooglePlaceData, GooglePlaceDetail } from "react-native-google-places-autocomplete";

interface AddressInputProps {
    placeholder: string,
    top: number,
    paddingLeft: number,
    // eslint-disable-next-line unused-imports/no-unused-vars
    onChangeText: (text: string) => void,
    // eslint-disable-next-line unused-imports/no-unused-vars
    onPress: (data: GooglePlaceData, detail: (GooglePlaceDetail | null)) => void
}

export default AddressInputProps;