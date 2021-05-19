import CarPhoto from "./CarPhoto";

type CreateCarViewModel = null | {
    ownerId: number;
    modelId: number;
    color: number;
    plateNumber: string;
    photo: CarPhoto | null
};

export default CreateCarViewModel;
