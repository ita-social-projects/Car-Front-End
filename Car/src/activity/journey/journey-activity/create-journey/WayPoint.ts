import { LatLng } from "react-native-maps";

interface WayPoint {
    text: string,
    isConfirmed: boolean,
    coordinates: LatLng
}

export default WayPoint;
