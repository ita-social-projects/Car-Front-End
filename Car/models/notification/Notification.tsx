import NotificationType from "./NotificationType";
import User from "../user/User";

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
