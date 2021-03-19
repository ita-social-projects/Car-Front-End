import ImageService from "../../api-service/image-service/ImageService"

test("return correct string", () => expect(ImageService.getImageById("aBcDe")).toBe(`https://drive.google.com/uc?id=aBcDe&export=view`));