import Location from "../../../models/location/Location";

interface AddressNameInputProps{
    currentLocationName: string,
    userLocations: Location[] | undefined,
    placeholder: string,
    placeholderColor: string,
    onTextChange: (newName: string, locationAvailability: boolean) => void,
}
export default AddressNameInputProps;