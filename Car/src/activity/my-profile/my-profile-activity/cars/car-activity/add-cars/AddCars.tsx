import React, { useContext, useEffect, useState } from "react";
import {
    ActivityIndicator,
    Image,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import {
    ImagePickerResponse,
    launchImageLibrary
} from "react-native-image-picker/src";
import BrandService from "../../../../../../../api-service/brand-service/BrandService";
import CarService from "../../../../../../../api-service/car-service/CarService";
import ModelService from "../../../../../../../api-service/model-service/ModelService";
import CarBrand from "../../../../../../../models/car/CarBrand";
import CarColor from "../../../../../../../models/car/CarColor";
import CarModel from "../../../../../../../models/car/CarModel";
import AuthContext from "../../../../../../components/auth/AuthContext";
import CarDropDownPickerItem from "../../../../../../components/car-drop-down-picker/CarDropDownItem";
import CarDropDownPicker from "../../../../../../components/car-drop-down-picker/CarDropDownPicker";
import CarTextInput from "../../../../../../components/car-text-input/CarTextInput";
import AddCarsStyle from "./AddCarsStyle";
import * as navigation from "../../../../../../components/navigation/Navigation";
import {
    MAX_PLATE_NUMBER_LENGTH,
    MIN_PLATE_NUMBER_LENGTH,
} from "../../../../../../constants/CarConstants";
import { FIRST_ELEMENT_INDEX } from "../../../../../../constants/GeneralConstants";
import DM from "../../../../../../components/styles/DM";

const AddCars = () => {
    const { user } = useContext(AuthContext);
    const [isSaving, setSaving] = useState(false);

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

    const [selectedBrand, setBrand] = useState<CarDropDownPickerItem | null>(
        null
    );
    const [selectedModel, setModel] = useState<CarDropDownPickerItem | null>(
        null
    );
    const [selectedColor, setColor] = useState<CarDropDownPickerItem | null>(
        null
    );

    const [plateNumber, setPlateNumber] = useState<string>("");
    const [isValidPlateNumber, setValidPlateNumber] = useState<boolean>(true);
    const [isValidCar, setValidCar] = useState<boolean>(false);
    const [photo, setPhoto] = useState<ImagePickerResponse>({} as ImagePickerResponse);

    let modelPickerController: any;
    let brandPickerController: any;
    let colorPickerController: any;

    useEffect(() => {
        BrandService.getBrands().then((res) => {
            setBrands(res.data);
        });
    }, []);

    useEffect(() => validateCar,
        [plateNumber, selectedBrand, selectedColor, selectedModel]);

    function validateCar () {
        setValidCar(Boolean(
            selectedBrand?.value &&
            selectedModel?.value &&
            selectedColor?.value &&
            plateNumber &&
            isValidPlateNumber
        ));
    }

    function validatePlateNumber () {
        setValidPlateNumber(
            Boolean(
                plateNumber &&
                plateNumber.length >= MIN_PLATE_NUMBER_LENGTH &&
                plateNumber.length <= MAX_PLATE_NUMBER_LENGTH &&
                plateNumber.match(/^[A-Za-zА-ЯҐЄІЇа-яґєії0-9- ]+$/)
            ));
    }

    const uploadPhotoHandle = () => {
        launchImageLibrary({ mediaType: "photo" }, (response) => {
            if (!response.didCancel && response.fileSize) {
                setPhoto(response);
            }
        });
    };

    const saveCarHandle = async () => {
        setSaving(true);
        let car = new FormData();

        car.append("ownerId", user?.id);
        car.append("modelId", Number(selectedModel?.value));
        car.append("color", Number(selectedColor?.value));
        car.append("plateNumber", plateNumber);
        if (photo !== null && photo !== undefined) {
            car.append("image", {
                name: photo.fileName,
                type: photo.type,
                uri: photo.uri
            });
        }

        await CarService.add(car)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        setSaving(false);
    };

    const selectBrandHandle = (brand: any) => {
        setBrand(brand);
        ModelService.getModelsByBrandId(Number(brand.value)).then((res) => {
            setModels(res.data);
            modelPickerController.selectItem(res.data[FIRST_ELEMENT_INDEX]?.id.toString());
            modelPickerController.open();
        });
    };

    let brandItems: CarDropDownPickerItem[] | null = Object.entries(brands)
        .length
        ? brands.map((brand) => ({
            ...{
                value: String(brand!.id),
                label: brand!.name
            }
        }))
        : null;

    let modelItems: CarDropDownPickerItem[] | null = Object.entries(models)
        .length
        ? models.map((model) => ({
            ...{
                value: String(model!.id),
                label: model!.name
            }
        }))
        : null;

    return (
        <View
            style={[AddCarsStyle.wrapper, { backgroundColor: DM("white") }]}
        >
            <View style={[AddCarsStyle.carAvatarContainer, { backgroundColor: DM("light-gray") }]}>
                {photo && (
                    <Image
                        source={{ uri: photo.uri }}
                        style={AddCarsStyle.carAvatar}
                    />
                )}
                <TouchableOpacity
                    style={[AddCarsStyle.carButtonUpload,
                        {
                            backgroundColor: DM("white"),
                            borderColor: DM("black")
                        }]}
                    onPress={() => uploadPhotoHandle()}
                >
                    <Text style={[AddCarsStyle.carButtonUploadText, { color: DM("black") }]}>
                        {Object.entries(photo).length
                            ? "Change photo"
                            : "Upload photo"}
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={AddCarsStyle.inputsContainer}>
                <View style={AddCarsStyle.dropDownContainer}>
                    <CarDropDownPicker
                        style={AddCarsStyle.dropDownPicker}
                        placeHolder="Brand"
                        items={brandItems}
                        zIndex={3000}
                        required={true}
                        selectHandle={(item: CarDropDownPickerItem) => {
                            selectBrandHandle(item);
                        }}
                        controller={(instance: any) =>
                            (brandPickerController = instance)
                        }
                        onOpen={() => {
                            colorPickerController.close();
                            modelPickerController.close();
                        }}
                    />
                    <CarDropDownPicker
                        style={AddCarsStyle.dropDownPicker}
                        placeHolder="Model"
                        items={modelItems}
                        zIndex={2000}
                        required={true}
                        disabled={!modelItems}
                        defaultValue={null}
                        selectHandle={(item: CarDropDownPickerItem) =>
                            setModel(item)
                        }
                        onOpen={() => {
                            colorPickerController.close();
                            brandPickerController.close();
                        }}
                        controller={(instance: any) =>
                            (modelPickerController = instance)
                        }
                    />
                    <CarDropDownPicker
                        style={AddCarsStyle.dropDownPicker}
                        placeHolder="Color"
                        items={colors}
                        zIndex={1000}
                        required={true}
                        selectHandle={(item: CarDropDownPickerItem) =>
                            setColor(item)
                        }
                        onOpen={() => {
                            brandPickerController.close();
                            modelPickerController.close();
                        }}
                        controller={(instance: any) =>
                            (colorPickerController = instance)
                        }
                    />
                    <CarTextInput
                        onChangeText={setPlateNumber}
                        placeHolder="Plate number"
                        onBlur={()=>
                            validatePlateNumber()
                        }
                    />
                    {
                        isValidPlateNumber ? null :
                            <Text style={{ color: DM("red") }}>
                                This field must contain 1-10 characters, including numbers, letters, hyphens, space
                            </Text>
                    }

                </View>
                <View style={AddCarsStyle.saveButtonContainer}>
                    <Text style={{ color: DM("red") }}>
                        *
                        <Text style={{ color: DM("gray") }}>
                            {" "}
                            - required field
                        </Text>
                    </Text>
                    <TouchableOpacity
                        disabled={
                            !isValidCar
                        }
                        style={
                            !isValidCar ?
                                [AddCarsStyle.carButtonSave, { backgroundColor: DM("gray") }]
                                : [AddCarsStyle.carButtonSave, { backgroundColor: DM("black") }]}
                        onPress={() => {
                            saveCarHandle().then(() => navigation.goBack());
                        }}
                    >
                        <Text style={[AddCarsStyle.carButtonSaveText, { color: DM("white") }]}>
                            Save
                        </Text>
                        {isSaving ? (
                            <ActivityIndicator
                                style={AddCarsStyle.spinner}
                                size={20}
                                color="white"
                            />
                        ) : (
                            <></>
                        )}
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default AddCars;
