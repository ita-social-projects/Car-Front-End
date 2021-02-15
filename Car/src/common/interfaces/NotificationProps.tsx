// @ts-ignore
import { Participant } from "../../../models/Participant";

export interface NotificationProps {
    notificationId: number;
    participant: Participant;
    visible: boolean;
    read: boolean;
    date: Date;
} // @ts-ignore
