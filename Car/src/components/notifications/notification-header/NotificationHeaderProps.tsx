import User from "../../../../models/user/User";

interface NotificationHeaderProps {
    title: string,
    message: string,
    sender: User,
    withoutSnooze?: Boolean,
    disableModal: () => void
}

export default NotificationHeaderProps;
