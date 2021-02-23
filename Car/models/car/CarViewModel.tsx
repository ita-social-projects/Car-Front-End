import CarColor from "./CarColor";
import CarModel from "./CarModel";

type CarViewModel = null | {
    id: number;
    model: CarModel;
    color: CarColor;
    plateNumber: string;
    ownerId: number;
    imageId: string | null;
};

export default CarViewModel;
