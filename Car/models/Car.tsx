import { Color } from "./Color";
import { Model } from "./Model";

export type Car = null | {
    id: number;
    model: Model;
    color: Color;
    plateNumber: string;
    ownerId: number;
    imageId: string | null;
};
