import Address from "../Address";

interface CreateLocationModel{
    name: string,
    address: Address,
    typeId: number,
    userId: number,
}

export default CreateLocationModel;