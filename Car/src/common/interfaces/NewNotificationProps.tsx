import {User} from "../../../models/User";

export interface NewNotificationProps {
    user: User;
    notificationTitle: string;
    read: boolean;
    date: Date;
}
