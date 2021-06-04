import User from "../../../models/user/User";

interface MinimizedNotification {
    notificationId: number,
    openModal: () => void,
    read?: boolean,
    user?: User | null,
    notificationTitle?: string,
    date?: Date
}

export default MinimizedNotification;
