import { GooglePlaceData, GooglePlaceDetail } from "react-native-google-places-autocomplete";

interface AddressInputProps {
    placeholder: string,
    top: number,
    paddingLeft: number,
    address: string,
    isMarkerFocus: boolean,
    // eslint-disable-next-line unused-imports/no-unused-vars
    onChangeText: (text: string) => void,
    // eslint-disable-next-line unused-imports/no-unused-vars
    onPress: (data: GooglePlaceData, detail: (GooglePlaceDetail | null)) => void,
    onMarkerPress: () => void
}

export default AddressInputProps;