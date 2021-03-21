import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
    ImagePickerResponse,
    launchImageLibrary
} from "react-native-image-picker/src";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BrandService from "../../../../../../../api-service/brand-service/BrandService";
import CarService from "../../../../../../../api-service/car-service/CarService";
import ModelService from "../../../../../../../api-service/model-service/ModelService";
import CarBrand from "../../../../../../../models/car/CarBrand";
import CarViewModel from "../../../../../../../models/car/CarViewModel";
import CarColor from "../../../../../../../models/car/CarColor";
import CarModel from "../../../../../../../models/car/CarModel";
import CarDropDownPickerItem from "../../../../../../components/car-drop-down-picker/CarDropDownItem";
import CarDropDownPicker from "../../../../../../components/car-drop-down-picker/CarDropDownPicker";
import CarTextInput from "../../../../../../components/car-text-input/CarTextInput";
import EditCarsStyle from "./EditCarsStyle";
import DM from "../../../../../../components/styles/DM";

const EditCars = (navigation: any) => {
    const { carId } = navigation.route.params;

    const [car, setCar] = useState({} as CarViewModel);

    useEffect(() => {
        CarService.getById(carId).then((res) => {
            setCar(res.data);
        });
    }, []);

    const [brands, setBrands] = useState({} as CarBrand[]);
    const [models, setModels] = useState({} as CarModel[]);
    const [colors] = useState<Array<{ value: string; label: string }>>(
        Object.values(CarColor)
            .filter((value) => isNaN(Number(value)))
            .map((item, index) => ({
                value: index.toString(),
                label: item.toString()
            }))
    );

    const [selectedModel, setModel] = useState<CarDropDownPickerItem | null>(
        null
    );
    const [selectedColor, setColor] = useState<CarDropDownPickerItem | null>(
        null
    );

    const [plateNumber, setPlateNumber] = useState<string>("");
    const [imageData, setImageData] = useState<FormData>({} as FormData);
    const [photo, setPhoto] = useState({} as ImagePickerResponse);

    useEffect(() => {
        BrandService.getBrands().then((res) => {
            setBrands(res.data);
        });
    }, []);

    const uploadPhotoHandle = () => {
        launchImageLibrary({ mediaType: "photo" }, (response) => {
            if (!response.didCancel) {
                setPhoto(response);
                const selectedImageData = new FormData();

                selectedImageData.append("image", {
                    name: response.fileName,
                    type: response.type,
                    uri: response?.uri
                });
                setImageData(selectedImageData);
            }
        });
    };

    const selectBrandHandle = (brand: any) => {
        ModelService.getModelsByBrandId(Number(brand.value)).then((res) => {
            setModels(res.data);
        });
    };

    let brandItems: CarDropDownPickerItem[] | null = Object.entries(brands)
        .length
        ? brands.map((brand) => ({
            ...{ value: String(brand!.id), label: brand!.name }
        }))
        : null;

    let modelItems: CarDropDownPickerItem[] | null = Object.entries(models)
        .length
        ? models.map((model) => ({
            ...{ value: String(model!.id), label: model!.name }
        }))
        : null;

    console.log(selectedModel);
    console.log(selectedColor);
    console.log(plateNumber);
    console.log(imageData);

    return (
        <KeyboardAwareScrollView style={[EditCarsStyle.wrapper, { backgroundColor: DM("white") }]}>
            <View style={[EditCarsStyle.carAvatarContainer, { backgroundColor: DM("#C4C4C4") }]}>
                {car!.imageId && (
                    <Image
                        source={{ uri: car?.imageId }}
                        style={{ width: "100%", height: "100%" }}
                    />
                )}
                <TouchableOpacity
                    style={[EditCarsStyle.carButtonUpload,
                        {
                            backgroundColor: DM("#FFFFFF"),
                            borderColor: DM("#000000"),
                        }]}
                    onPress={() => uploadPhotoHandle()}
                >
                    <Text style={[EditCarsStyle.carButtonUploadText, { color: DM("black") }]}>
                        {Object.entries(photo).length
                            ? "Change photo"
                            : "Upload photo"}
                    </Text>
                    {car?.imageId && (
                        <Image
                            source={{ uri: car?.imageId }}
                            style={{ width: "100%", height: "100%" }}
                        />
                    )}
                </TouchableOpacity>
            </View>
            <View style={EditCarsStyle.inputsContainer}>
                <View style={EditCarsStyle.dropDownContainer}>
                    <CarDropDownPicker
                        style={EditCarsStyle.dropDownPicker}
                        placeHolder="Brand"
                        items={brandItems}
                        zIndex={3000}
                        required={true}
                        selectHandle={(item: CarDropDownPickerItem) =>
                            selectBrandHandle(item)
                        }
                    />
                    <CarDropDownPicker
                        style={EditCarsStyle.dropDownPicker}
                        placeHolder="Model"
                        items={modelItems}
                        zIndex={2000}
                        required={true}
                        disabled={!modelItems}
                        selectHandle={(item: CarDropDownPickerItem) =>
                            setModel(item)
                        }
                    />
                    <CarDropDownPicker
                        style={EditCarsStyle.dropDownPicker}
                        placeHolder="Color"
                        items={colors}
                        zIndex={1000}
                        required={true}
                        selectHandle={(item: CarDropDownPickerItem) =>
                            setColor(item)
                        }
                    />
                    <CarTextInput
                        rules={{
                            required: {
                                value: true,
                                message: "Plate number is required"
                            },
                            minLength: { value: 4, message: "Min length is 4" },
                            maxLength: {
                                value: 10,
                                message: "Max length is 10"
                            },
                            pattern: {
                                value: /^[A-Za-z0-9-]+$/,
                                message:
                                    "This field must contain 4-10 characters, including numbers, " +
                                    "letters, hyphens"
                            }
                        }}
                        onChangeText={(text: string) => {
                            setPlateNumber(text);
                        }}
                        placeHolder="Plate number"
                    />
                </View>
                <View style={EditCarsStyle.saveButtonContainer}>
                    <Text style={{ color: "red" }}>
                        *
                        <Text style={{ color: "#414045" }}>
                            {" "}
                            - mandatory information
                        </Text>
                    </Text>
                    <TouchableOpacity
                        style={[EditCarsStyle.carButtonSave, { backgroundColor: DM("#000000") }]}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <Text style={[EditCarsStyle.carButtonSaveText, { color: DM("white") }]}>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default EditCars;
