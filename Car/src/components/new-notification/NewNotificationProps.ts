import User from "../../../models/user/User";

interface NewNotificationProps {
    read?: boolean,
    user?: User | null,
    notificationTitle?: string,
    date?: Date
}

export default NewNotificationProps;
