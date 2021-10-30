import { GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocompleteRef }
    from "react-native-google-places-autocomplete";
import { LatLng } from "react-native-maps";
import Address from "../../../models/Address";
import Location from "../../../models/location/Location";

interface AddressInputProps {
    placeholder: string,
    paddingLeft: number,
    address: string,
    //
    onChangeText: (text: string) => void,
    //
    onPress: (data: GooglePlaceData, detail: (GooglePlaceDetail | null)) => void,
    onClearIconPress: () => void,
    savedLocations: Location[],
    recentAddresses: Address[],
    userLocation: LatLng,
    //
    refFor?: (r: GooglePlacesAutocompleteRef | null) => void
}

export default AddressInputProps;