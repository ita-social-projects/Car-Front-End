import {NotificationType} from "../src/common/enums/NotificationType";

export type Notification = null | {
    id: number;
    userId: number;
    userName: string;
    position: string;
    description: string;
    isRead: boolean;
    createAt: string;
    receiverId: number;
    journeyId: number;
    userColor: string;
    notificationType: NotificationType;
};
