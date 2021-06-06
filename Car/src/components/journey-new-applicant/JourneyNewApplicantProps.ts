import User from "../../../models/user/User";

interface JourneyNewApplicantProps {
    visible?: boolean,
    notificationId: number,
    notificationData: string,
    sender: User,
    read?: boolean,
    date?: Date
}

export default JourneyNewApplicantProps;
