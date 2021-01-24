import Brand from "./Brand";
import { Color } from "./Color";
import Model from "./Model";

export default interface Car {
    id: number,
    brand: Brand,
    model: Model,
    color: Color,
    plateNumber: string,
    userId: number,
    byteOfImage: string
}
