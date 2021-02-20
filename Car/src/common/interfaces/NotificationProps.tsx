import User from "../../../models/User";

interface NotificationProps {
    notificationId: number;
    notificationData: string
    user: User;
    visible: boolean;
    read: boolean;
    date: Date;
}

export default NotificationProps;
