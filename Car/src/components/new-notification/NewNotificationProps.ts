import User from "../../../models/user/User";

interface NewNotificationProps {
    notificationId: number,
    openModal: () => void,
    read?: boolean,
    user?: User | null,
    notificationTitle?: string,
    date?: Date
}

export default NewNotificationProps;
