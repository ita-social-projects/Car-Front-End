import Address from "./Address";
import { StopType } from "./StopType";

export type Stop = null | {
    id: number;
    type: StopType;
    address: Address;
};
