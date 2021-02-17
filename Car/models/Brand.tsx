import { Model } from "./Model";

export type Brand = null | {
    id: number;
    name: string;
    models: Model[];
}
