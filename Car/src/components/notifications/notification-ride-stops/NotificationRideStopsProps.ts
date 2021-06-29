import Stop from "../../../../models/stop/Stop";
import User from "../../../../models/user/User";

interface NotificationRideStopsProps {
    title: string,
    stops: Stop[],
    stopsOwner: User
}

export default NotificationRideStopsProps;
