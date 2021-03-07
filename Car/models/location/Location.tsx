import Address from "../Address";
import LocationType from "./LocationType";

type Location = null | {
    id: number;
    address: Address;
    type: LocationType;
    name: string;
    userId: number;
};

export default Location;
