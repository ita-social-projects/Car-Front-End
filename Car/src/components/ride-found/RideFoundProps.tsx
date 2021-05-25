import UserModel from "../../types/UserModel";

interface RideFoundProps{
    visible?: boolean,
    notificationId: number,
    notificationData: string,
    user: UserModel,
    read?: boolean,
    date?: Date
}

export default RideFoundProps;
