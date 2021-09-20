import User from "../../../models/user/User";
import Journey from "../../../models/journey/Journey";

interface NotificationProps {
    visible?: boolean,
    notificationId: number,
    notificationData: string,
    sender: User,
    read?: boolean,
    date?: Date,
    journeyId?: number
    // eslint-disable-next-line
    onDelete?: (id: number) => void
    journey?: Journey
}

export default NotificationProps;
