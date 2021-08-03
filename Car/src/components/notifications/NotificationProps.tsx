import User from "../../../models/user/User";

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
}

export default NotificationProps;
