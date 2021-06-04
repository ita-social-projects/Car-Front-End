import Address from "../Address";
import StopType from "./StopType";

type Stop = null | {
    id: number;
    type: StopType;
    address: Address;
    userId: number;
    journeyId: number;
    index: number;
};

export default Stop;
