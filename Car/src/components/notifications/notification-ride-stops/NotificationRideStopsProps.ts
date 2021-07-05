import User from "../../../../models/user/User";

interface NotificationRideStopsProps {
    title: string,
    journeyId: number,
    stopsOwner: User,
}

export default NotificationRideStopsProps;
