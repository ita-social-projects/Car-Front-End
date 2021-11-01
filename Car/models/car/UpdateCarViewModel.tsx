import CarPhoto from "./CarPhoto";

type UpdateCarViewModel = null | {
    id: number;
    brand: string;
    model: string;
    color: number;
    plateNumber: string;
    photo: CarPhoto | null
};

export default UpdateCarViewModel;
