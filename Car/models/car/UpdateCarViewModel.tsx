import CarPhoto from "./CarPhoto";

type UpdateCarViewModel = null | {
    id: number;
    modelId: number;
    color: number;
    plateNumber: string;
    photo: CarPhoto | null
};

export default UpdateCarViewModel;
