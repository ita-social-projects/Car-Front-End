import { Camera } from "react-native-maps";
import Location from "../../../../../../models/location/Location";
import WayPoint from "../../../../../types/WayPoint";

interface AddressInputPageProps {
    route: {
        params: {
            camera: Camera,
            placeholder: string,
            paddingLeft: number,
            savedLocations: Location[],
            previousScreen: "Create Journey",
            wayPointId: string,
            wayPoint: WayPoint
        }
    }
}

export default AddressInputPageProps;