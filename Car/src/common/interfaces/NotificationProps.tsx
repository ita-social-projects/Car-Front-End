// @ts-ignore
import { Participant } from "../../../models/Participant";
import {User} from "../../../models/User";

export interface NotificationProps {
    notificationId: number;
    notificationData: string
    user: User;
    visible: boolean;
    read: boolean;
    date: Date;
} // @ts-ignore
