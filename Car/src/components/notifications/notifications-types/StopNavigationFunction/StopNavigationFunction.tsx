import JourneyPoint from "../../../../../models/journey/JourneyPoint";
import Stop from "../../../../../models/stop/Stop";

import { getStopCoordinates } from "../../../../utils/JourneyHelperFunctions";
import * as navigation from "../../../../components/navigation/Navigation";
import NotificationProps from "../../NotificationProps";

export const onStopPressHandler = (
    stop: Stop,
    stops: Stop[],
    journeyPoints: JourneyPoint[],
    notification: NotificationProps) => {

    navigation.navigate("Route View", {
        stops: stops,
        journeyPoints: journeyPoints,
        cameraCoordinates: getStopCoordinates(stop),
        notification: notification,
        withoutAccept: true
    });
};