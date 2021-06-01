import User from "../../../models/user/User";

interface JourneyNewApplicantProps {
    visible?: boolean,
    notificationId: number,
    notificationData: string,
    user: User,
    read?: boolean,
    date?: Date
}

export default JourneyNewApplicantProps;
