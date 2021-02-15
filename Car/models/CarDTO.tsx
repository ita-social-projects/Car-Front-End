import { Color } from "./Color";

export default interface CarDTO {
    brandId: number;
    modelId: number;
    color: Color;
    plateNumber: string;
    userId: number;
}
