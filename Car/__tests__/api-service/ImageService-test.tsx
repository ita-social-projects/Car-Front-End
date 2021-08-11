import ImageService from "../../api-service/image-service/ImageService";

test("return correct string", async () =>
    expect(ImageService.getImageById("aBcDe")).toBe("https://carstorageaccount.blob.core.windows.net/images/aBcDe"));