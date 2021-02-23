import CarColor from "./CarColor";

type UpdateCarViewModel = null | {
    id: number;
    modelId: number;
    color: CarColor;
    plateNumber: string;
    ownerId: number;
    imageId: string | null;
};

export default UpdateCarViewModel;
