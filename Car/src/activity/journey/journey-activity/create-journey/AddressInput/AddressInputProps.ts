import { GooglePlaceData, GooglePlaceDetail } from "react-native-google-places-autocomplete";
import Location from "../../../../../../models/location/Location";
import Address from "../../../../../../models/Address";
import { LatLng } from "react-native-maps";

interface AddressInputProps {
    placeholder: string,
    paddingLeft: number,
    address: string,
    // eslint-disable-next-line unused-imports/no-unused-vars
    onChangeText: (text: string) => void,
    // eslint-disable-next-line unused-imports/no-unused-vars
    onPress: (data: GooglePlaceData, detail: (GooglePlaceDetail | null)) => void,
    savedLocations: Location[],
    recentAddresses: Address[],
    userLocation: LatLng
}

export default AddressInputProps;