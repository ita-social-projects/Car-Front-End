import { GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocompleteRef }
    from "react-native-google-places-autocomplete";
import { LatLng } from "react-native-maps";
import Address from "../../../models/Address";
import Location from "../../../models/location/Location";

interface AddressInputProps {
    placeholder: string,
    paddingLeft: number,
    address: string,
    // eslint-disable-next-line unused-imports/no-unused-vars
    onChangeText: (text: string) => void,
    // eslint-disable-next-line unused-imports/no-unused-vars
    onPress: (data: GooglePlaceData, detail: (GooglePlaceDetail | null)) => void,
    onClearIconPress: () => void,
    savedLocations: Location[],
    recentAddresses: Address[],
    userLocation: LatLng,
    // eslint-disable-next-line unused-imports/no-unused-vars
    refFor?: (r: GooglePlacesAutocompleteRef | null) => void
}

export default AddressInputProps;