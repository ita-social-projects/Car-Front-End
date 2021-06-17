import User from "../../../../models/user/User";

interface NotificationHeaderProps {
    title: string,
    message?: string,
    sender: User,
    withoutSnooze?: boolean,
    withoutMessage?: boolean,
    disableModal: () => void,
}

export default NotificationHeaderProps;
