import JourneyPoint from "../../../../models/journey/JourneyPoint";
import Stop from "../../../../models/stop/Stop";
import User from "../../../../models/user/User";
import NotificationProps from "../NotificationProps";

interface NotificationRideStopsProps {
    title: string,
    journeyId: number,
    stopsOwner: User,
    IsStopsTitleVisible?: boolean,
    //
    onStopPress: (stop: Stop, stops: Stop[], journeyPoints: JourneyPoint[], notification: NotificationProps) => void,
    notification: NotificationProps
}

export default NotificationRideStopsProps;
