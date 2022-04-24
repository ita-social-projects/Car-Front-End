import StopType from "./StopType";
import { AddressModel } from "../address/AddressModel";

export class StopModel {
    stopType?: StopType;
    address?: AddressModel;

    constructor (model: Partial<StopModel>) {
        this.stopType = model.stopType || undefined;
        this.address = model.address;
    }
}
