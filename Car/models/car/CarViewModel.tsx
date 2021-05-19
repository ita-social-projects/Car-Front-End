import CarModel from "./CarModel";

type CarViewModel = null | {
    id: number;
    model: CarModel;
    color: number;
    plateNumber: string;
    ownerId: number;
    imageId: string | null;
};

export default CarViewModel;
