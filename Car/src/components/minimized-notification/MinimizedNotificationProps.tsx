import User from "../../../models/user/User";

interface MinimizedNotificationProps {
    notificationId: number,
    openModal: () => void,
    read?: boolean,
    user?: User | null,
    notificationTitle?: string,
    date?: Date
}

export default MinimizedNotificationProps;
