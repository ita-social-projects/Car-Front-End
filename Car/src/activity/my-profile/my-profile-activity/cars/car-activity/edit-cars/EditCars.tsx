import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker/src";
import BrandService from "../../../../../../../api-service/brand-service/BrandService";
import CarService from "../../../../../../../api-service/car-service/CarService";
import ModelService from "../../../../../../../api-service/model-service/ModelService";
import CarBrand from "../../../../../../../models/car/CarBrand";
import CarColor from "../../../../../../../models/car/CarColor";
import CarModel from "../../../../../../../models/car/CarModel";
import CarDropDownPickerItem from "../../../../../../components/car-drop-down-picker/CarDropDownItem";
import CarDropDownPicker from "../../../../../../components/car-drop-down-picker/CarDropDownPicker";
import CarTextInput from "../../../../../../components/car-text-input/CarTextInput";
import EditCarsStyle from "./EditCarsStyle";
import DM from "../../../../../../components/styles/DM";
import {
    MAX_PLATE_NUMBER_LENGTH,
    MIN_PLATE_NUMBER_LENGTH
} from "../../../../../../constants/CarConstants";
import Indicator from "../../../../../../components/activity-indicator/Indicator";
import UpdateCarViewModel from "../../../../../../../models/car/UpdateCarViewModel";
import { navigate } from "../../../../../../components/navigation/Navigation";
import ImageService from "../../../../../../../api-service/image-service/ImageService";
import CarPhoto from "../../../../../../../models/car/CarPhoto";

const EditCars = (navigation : any) => {
    const [isLoading, setLoading] = useState(true);
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
    const [isValidPlateNumber, setValidPlateNumber] = useState(true);
    const [photo, setPhoto] = useState<CarPhoto>({} as CarPhoto);

    let modelPickerController: any;
    let brandPickerController: any;
    let colorPickerController: any;

    useEffect(() => {
        BrandService.getBrands().then((response: any) => {
            setBrands(response.data);
        });
        let carId = Number(navigation.props.route.params.carId);

        CarService.getById(carId).then((response: any) => {
            const car = response.data;
            const carModel = car?.model;
            let carBrandItem : CarDropDownPickerItem = {
                label: carModel?.brand?.name ?? "",
                value: carModel?.brand?.id.toString() ?? ""
            };
            let carModelItem : CarDropDownPickerItem = {
                label: carModel?.name ?? "",
                value: carModel?.id.toString() ?? ""
            };
            const carColor = colors.find(obj => {
                return obj.value === car?.color.toString();
            });

            if (car?.imageId !== null &&
                car?.imageId.toString() !== undefined)
            {
                setPhoto({
                    name: "",
                    type: "",
                    uri: ImageService.getImageById(car?.imageId?.toString() ?? "")
                });
            }
            selectBrandHandle(carBrandItem);
            setColor(carColor!);
            setPlateNumber(car?.plateNumber ?? "");
            setModel(carModelItem);
        }).catch((e: any) => console.log(e));
    }, []);

    function validatePlateNumber () {
        setValidPlateNumber(
            Boolean(
                plateNumber &&
                plateNumber.length >= MIN_PLATE_NUMBER_LENGTH &&
                plateNumber.length <= MAX_PLATE_NUMBER_LENGTH &&
                plateNumber.match(/^[A-ZА-Я0-9-]+$/)
            ));
    }

    const uploadPhotoHandle = () => {
        launchImageLibrary({ mediaType: "photo" }, (response) => {
            if (!response.didCancel) {
                setPhoto({
                    name: response.fileName?.toString() ?? "",
                    type: response.type?.toString() ?? "",
                    uri: response.uri?.toString() ?? ""
                });
            }
        });
    };

    const saveCarHandle = async () => {
        setSaving(true);
        let photoToUpdate;

        (photo.uri !== "") ?
            photoToUpdate = photo : photoToUpdate = null;

        const car: UpdateCarViewModel = {
            id: Number(navigation.props.route.params.carId),
            modelId : Number(selectedModel?.value),
            color : Number(selectedColor?.value),
            plateNumber: plateNumber,
            photo : photoToUpdate
        };

        await CarService.update(car)
            .then((res: any) => console.log(res.data))
            .catch((err) => console.log(err));
        setSaving(false);
    };

    const selectBrandHandle = (brand: any) => {
        setBrand(brand);
        ModelService.getModelsByBrandId(Number(brand.value)).then((response: any) => {
            setModels(response.data);
            setLoading(false);
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

    if (isLoading) return (
        <View
            style={[EditCarsStyle.wrapper, { backgroundColor: DM("white") }]}
        >
            <Indicator
                size="large"
                color="#414045"
                text="Loading information..."
            />
        </View>
    );

    return (
        <View
            style={[EditCarsStyle.wrapper, { backgroundColor: DM("white") }]}
        >
            <View style={[EditCarsStyle.carAvatarContainer, { backgroundColor: DM("#C4C4C4") }]}>
                {photo && (
                    <Image
                        source={{ uri: photo.uri }}
                        style={EditCarsStyle.carAvatar}
                    />
                )}
                <TouchableOpacity
                    style={[EditCarsStyle.carButtonUpload,
                        {
                            backgroundColor: DM("#FFFFFF"),
                            borderColor: DM("#000000")
                        }]
                    }
                    onPress={() =>
                        uploadPhotoHandle()
                    }
                >
                    <Text style={[EditCarsStyle.carButtonUploadText, { color: DM("black") }]}>
                        {Object.entries(photo).length
                            ? "Change photo"
                            : "Upload photo"
                        }
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={EditCarsStyle.inputsContainer}>
                <View style={EditCarsStyle.dropDownContainer}>
                    <CarDropDownPicker
                        style={EditCarsStyle.dropDownPicker}
                        placeHolder="Brand"
                        items={brandItems}
                        zIndex={3000}
                        required={true}
                        defaultValue={selectedBrand!.value}
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
                        style={EditCarsStyle.dropDownPicker}
                        placeHolder="Model"
                        items={modelItems}
                        zIndex={2000}
                        required={true}
                        defaultValue={selectedModel ? selectedModel.value : null}
                        disabled={!modelItems}
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
                        style={EditCarsStyle.dropDownPicker}
                        placeHolder="Color"
                        items={colors}
                        zIndex={1000}
                        required={true}
                        defaultValue={selectedColor!.value}
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
                        defaultValue={plateNumber}
                        onChangeText={setPlateNumber}
                        placeHolder="Plate number"
                        onEndEditing={() =>
                            validatePlateNumber()
                        }
                    />
                    {isValidPlateNumber ? null :
                        <Text style={{ color: DM("red") }}>
                            This field must contain 4-10 characters, including numbers, letters, hyphens
                        </Text>
                    }
                </View>
                <View style={EditCarsStyle.saveButtonContainer}>
                    <Text style={{ color: DM("red") }}>
                        *
                        <Text style={{ color: DM("#414045") }}>
                            {" "}
                            - required field
                        </Text>
                    </Text>
                    <TouchableOpacity
                        style={
                            !selectedBrand?.value ||
                            !selectedModel?.value ||
                            !selectedColor?.value ||
                            !isValidPlateNumber ?
                                [EditCarsStyle.carButtonSave, { backgroundColor: DM("#808080") }]
                                : [EditCarsStyle.carButtonSave, { backgroundColor: DM("#000000") }]
                        }
                        disabled={
                            !selectedBrand?.value ||
                            !selectedModel?.value ||
                            !selectedColor?.value ||
                            !isValidPlateNumber
                        }
                        onPress={() => {
                            saveCarHandle().then(() => navigate("Cars"));
                        }}
                    >
                        <Text style={[EditCarsStyle.carButtonSaveText, { color: DM("white") }]}>
                            Save
                        </Text>
                        {isSaving ? (
                            <ActivityIndicator
                                style={EditCarsStyle.spinner}
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

export default EditCars;
