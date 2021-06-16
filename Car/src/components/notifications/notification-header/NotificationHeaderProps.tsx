import User from "../../../../models/user/User";

interface NotificationHeaderProps {
    title: string,
    message: string,
    sender: User,
    withoutSnooze?: boolean,
    disableModal: () => void
}

export default NotificationHeaderProps;
