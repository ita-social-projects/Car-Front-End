import CarBrand from "../../models/car/CarBrand";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const route = APIRoutes.getBrandUrl();

const BrandService = {
    getBrands: async () => APIService.get<CarBrand[]>(route),
};

export default BrandService;
