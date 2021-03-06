import NotificationType from "./NotificationType";

type CreateNotificationModel = null | {
    senderId: number;
    receiverId: number;
    type: NotificationType;
    jsonData: string;
    journeyId: number;
}

export default CreateNotificationModel;
