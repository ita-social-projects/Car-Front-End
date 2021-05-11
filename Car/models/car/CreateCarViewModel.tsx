type CreateCarViewModel = null | {
    ownerId: number;
    modelId: number;
    color: number;
    plateNumber: string;
    photo: {
        name: string | undefined,
        type: string | undefined,
        uri: string | undefined
    } | null
};

export default CreateCarViewModel;
