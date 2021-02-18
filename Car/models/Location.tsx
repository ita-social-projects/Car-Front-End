import { Address } from "./Address";
import { LocationType } from "./LocationType";

export type Location = null | {
    id: number;
    address: Address;
    type: LocationType;
    name: string;
    userId: number;
};
