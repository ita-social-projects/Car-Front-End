import { NotificationType } from "../src/common/enums/NotificationType";
import {User} from "./User";

export type Notification = null | {
    id: number;
    user: User;
    isRead: boolean;
    createAt: Date;
    receiverId: number;
    notificationType: NotificationType;
    notificationData: string;
};
