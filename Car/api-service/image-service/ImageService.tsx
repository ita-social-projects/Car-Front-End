const ImageService = {

    getImageById: (id: string) => `https://carstorageaccount.blob.core.windows.net/images/${id}`
};

export default ImageService;