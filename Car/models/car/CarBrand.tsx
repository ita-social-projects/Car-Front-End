import CarModel from "./CarModel";

type CarBrand = null | {
    id: number;
    name: string;
    models: CarModel[];
};

export default CarBrand;
