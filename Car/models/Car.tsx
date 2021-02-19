import Color from "./Color";
import Model from "./Model";

type Car = null | {
    id: number;
    model: Model;
    color: Color;
    plateNumber: string;
    ownerId: number;
    imageId: string | null;
};

export default Car;
