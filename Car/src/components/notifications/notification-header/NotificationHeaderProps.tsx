import User from "../../../../models/user/User";

interface NotificationHeaderProps {
    title?: string,
    message?: string,
    sender: User,
    withSnooze?: boolean,
    withoutMessage?: boolean,
    disableModal?: () => void,
}

export default NotificationHeaderProps;
