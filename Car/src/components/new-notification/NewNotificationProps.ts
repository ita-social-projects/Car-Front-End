import UserModel from "../types/UserModel";

interface NewNotificationProps {
    read?: boolean,
    user?: UserModel | null,
    notificationTitle?: string,
    date?: Date
}

export default NewNotificationProps;
