import { ZERO } from "../../src/constants/GeneralConstants";

export class AddressModel {
    name: string;
    latitude: number;
    longitude: number;

    constructor (model: Partial<AddressModel>) {
        this.name = model.name || "";
        this.latitude = model.latitude || ZERO;
        this.longitude = model.longitude || ZERO;
    }
}
