import UpdateAddressModel from "../address/UpdateAddressModel";

interface UpdateLocationModel{
    id: number,
    name: string,
    address: UpdateAddressModel,
    typeId: number,
}

export default UpdateLocationModel;