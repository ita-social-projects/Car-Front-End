import { LatLng } from "react-native-maps";

interface WayPoint {
    text: string,
    isConfirmed: boolean,
    coordinates: LatLng,
    stopId: number,
    changeable: boolean
}

export default WayPoint;
