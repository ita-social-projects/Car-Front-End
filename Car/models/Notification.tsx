import { NotificationType } from "../src/common/enums/NotificationType";
import { User } from "./User";

export type Notification = null | {
    id: number;
    receiver: User;
    data: string;
    isRead: boolean;
    createdAt: Date;
    sender: User;
    type: NotificationType;
};