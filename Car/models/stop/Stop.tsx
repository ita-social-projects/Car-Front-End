import Address from "../Address";
import User from "../user/User";
import { UserStop } from "../user/UserStop";

type Stop = null | {
    id: number;
    index: number;
    address: Address;
    journeyId: number;
    isCancelled: boolean;
    alias?: string;
    users?: Array<User>;
    userStops?: Array<UserStop>;
};

export default Stop;
