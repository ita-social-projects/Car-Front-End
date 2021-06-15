import NotificationType from "./NotificationType";

type CreateNotificationModel = null | {
    senderId: number;
    recieverId: number;
    type: NotificationType;
    jsonData: string;
    journeyId: number;
}

export default CreateNotificationModel;
