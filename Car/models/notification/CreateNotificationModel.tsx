import NotificationType from "./NotificationType";

type CreateNotificationModel = null | {
    senderId: number;
    receiverId: number;
    type: NotificationType;
    jsonData: string;
}

export default CreateNotificationModel;
