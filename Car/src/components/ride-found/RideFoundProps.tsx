import User from "../../../models/user/User";

interface RideFoundProps{
    visible?: boolean,
    notificationId: number,
    notificationData: string,
    user: User,
    read?: boolean,
    date?: Date
}

export default RideFoundProps;
