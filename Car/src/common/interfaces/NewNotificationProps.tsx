import User from "../../../models/User";

interface NewNotificationProps {
    user: User;
    notificationTitle: string;
    read: boolean;
    date: Date;
}

export default NewNotificationProps;
