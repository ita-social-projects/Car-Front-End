import Model from "./Model";

type Brand = null | {
    id: number;
    name: string;
    models: Model[];
};

export default Brand;
