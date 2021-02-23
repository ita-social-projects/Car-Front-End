import CarBrand from "./CarBrand";

type CarModel = null | {
    id: number;
    name: string;
    brand: CarBrand;
};

export default CarModel;
