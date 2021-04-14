import { GooglePlaceData, GooglePlaceDetail } from "react-native-google-places-autocomplete";
import Location from "../../../../../../models/location/Location";

interface AddressInputProps {
    placeholder: string,
    paddingLeft: number,
    address: string,
    // eslint-disable-next-line unused-imports/no-unused-vars
    onChangeText: (text: string) => void,
    // eslint-disable-next-line unused-imports/no-unused-vars
    onPress: (data: GooglePlaceData, detail: (GooglePlaceDetail | null)) => void,
    savedLocations: Location[]
}

export default AddressInputProps;