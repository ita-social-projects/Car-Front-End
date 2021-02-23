import CarColor from "./CarColor";

type CreateCarViewModel = null | {
    id: number;
    modelId: number;
    color: CarColor;
    plateNumber: string;
    ownerId: number;
    imageId: string | null;
};

export default CreateCarViewModel;
