import CarPhoto from "./CarPhoto";

type CreateCarViewModel = null | {
    ownerId: number;
    brand: string;
    model: string;
    color: number;
    plateNumber: string;
    photo: CarPhoto | null
};

export default CreateCarViewModel;
