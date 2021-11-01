import Address from "../Address";
import StopType from "./StopType";

type Stop = null | {
    id: number;
    type: StopType;
    index: number;
    address: Address;
    userId: number;
    journeyId: number;
    isCancelled: boolean;
    alias?: string
};

export default Stop;
