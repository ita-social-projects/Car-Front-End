import NotificationType from "./NotificationType";
import User from "../User";

type Notification = null | {
    id: number;
    user: User;
    isRead: boolean;
    createAt: Date;
    receiverId: number;
    notificationType: NotificationType;
    notificationData: string;
};

export default Notification;
