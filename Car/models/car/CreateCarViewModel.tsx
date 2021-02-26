import CarColor from "./CarColor";

type CreateCarViewModel = null | {
    ModelId: number;
    Color: CarColor;
    PlateNumber: string;
    OwnerId: number;
};

export default CreateCarViewModel;
