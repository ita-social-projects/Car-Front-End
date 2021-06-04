import User from "../../../../models/user/User";

interface NotificationHeaderProps {
    title: string,
    message: string,
    sender: User,
    disableModal: () => void
}

export default NotificationHeaderProps;
