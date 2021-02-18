import Participant from "../../../models/Participant";

interface NotificationProps {
    notificationId: number;
    participant: Participant;
    visible: boolean;
    read: boolean;
    date: Date;
}

export default NotificationProps;
