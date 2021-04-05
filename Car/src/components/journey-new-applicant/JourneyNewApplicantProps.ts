import UserModel from "../../types/UserModel";

interface JourneyNewApplicantProps {
    visible?: boolean,
    notificationId: number,
    notificationData: string,
    user: UserModel,
    read?: boolean,
    date?: Date
}

export default JourneyNewApplicantProps;
