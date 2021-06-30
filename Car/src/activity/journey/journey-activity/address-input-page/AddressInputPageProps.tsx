import { Camera, LatLng } from "react-native-maps";
import Address from "../../../../../models/Address";
import Location from "../../../../../models/location/Location";
import WayPoint from "../../../../types/WayPoint";
interface AddressInputPageProps {
    route: {
        params: {
            camera: Camera,
            placeholder: string,
            paddingLeft: number,
            savedLocations: Location[],
            recentAddresses: Address[],
            previousScreen: "Create Journey",
            wayPointId: string,
            wayPoint: WayPoint,
            userCoordinates: LatLng
        }
    }
}

export default AddressInputPageProps;