import Address from "../Address";
import StopType from "./StopType";
import User from "../user/User";

type Stop = null | {
    id: number;
    type: StopType;
    address: Address;
    user: User;
    journeyId: number;
};

export default Stop;
