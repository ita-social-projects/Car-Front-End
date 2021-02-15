import { NotificationType } from "../src/common/enums/NotificationType";

export type Notification = null | {
    id: number;
    userId: number;
    userName: string;
    position: string;
    description: string;
    isRead: boolean;
    createAt: Date;
    receiverId: number;
    journeyId: number;
    notificationType: NotificationType;
};
