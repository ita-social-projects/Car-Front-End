import React, { useEffect, useRef, useState } from "react";
import {
    ActivityIndicator,
    AppState,
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
import AddEditCarsStyle from "./AddEditCarsStyle";
import DM from "../../../../../../components/styles/DM";
import {
    MAX_PLATE_NUMBER_LENGTH,
    MIN_PLATE_NUMBER_LENGTH
} from "../../../../../../constants/CarConstants";
import Indicator from "../../../../../../components/activity-indicator/Indicator";
import { navigate } from "../../../../../../components/navigation/Navigation";
import ImageService from "../../../../../../../api-service/image-service/ImageService";
import CarPhoto from "../../../../../../../models/car/CarPhoto";
import axios from "axios";

const AddEditCars = (props: { type: "add" | "edit", carId?: number }) => {
    const [isLoading, setLoading] = useState(props.type === "edit");
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
    const [isValidCar, setValidCar] = useState<boolean>(true);
    const [photo, setPhoto] = useState({} as CarPhoto);

    const source = useRef(axios.CancelToken.source());
    const isCanceled = useRef(false);
    const isStarted = useRef(false);

    useEffect(() => {
        const changeHandler = nextAppState => {
            if (nextAppState.match(/inactive|background/) && isStarted.current) {
                source.current.cancel("cancel");
                source.current = axios.CancelToken.source();
                isCanceled.current = true;
                isStarted.current = false;
            }
            else if (isCanceled.current && nextAppState === "active") {
                saveCarHandle().then(() => navigate("Cars"));
                isCanceled.current = false;
            }
        };

        AppState.addEventListener("change", changeHandler);

        return () => {
            AppState.removeEventListener("change", changeHandler);
        };
    }, [plateNumber, selectedBrand, selectedColor, selectedModel, photo]);

    let modelPickerController: any;
    let brandPickerController: any;
    let colorPickerController: any;

    useEffect(() => {
        BrandService.getBrands().then((response) => {
            setBrands(response.data);
        });

        if (props.type === "edit") {
            CarService.getById(props.carId!).then((response) => {
                const car = response.data;
                const carModel = car?.model;
                let carBrandItem: CarDropDownPickerItem = {
                    label: carModel?.brand?.name ?? "",
                    value: carModel?.brand?.id.toString() ?? ""
                };
                let carModelItem: CarDropDownPickerItem = {
                    label: carModel?.name ?? "",
                    value: carModel?.id.toString() ?? ""
                };
                const carColor = colors.find(obj => {
                    return obj.value === car?.color.toString();
                });

                if (car?.imageId !== null &&
                    car?.imageId.toString() !== undefined) {
                    const image = ImageService.getImageById(car?.imageId?.toString());

                    setPhoto({
                        name: car?.imageId,
                        type: "image/jpeg",
                        uri: image
                    });
                }
                selectBrandHandle(carBrandItem);
                setColor(carColor!);
                setPlateNumber(car?.plateNumber ?? "");
                setModel(carModelItem);
            });
        }
    }, [props.type]);

    useEffect(() => validateCar(),
        [plateNumber, selectedBrand, selectedColor, selectedModel, isLoading]);

    const validateCar = () => {
        setValidCar(Boolean(
            selectedBrand?.value &&
            selectedModel?.value &&
            selectedColor?.value &&
            plateNumber &&
            isValidPlateNumber
        ));
    };

    const validatePlateNumber = () => {
        setValidPlateNumber(
            Boolean(
                plateNumber &&
                plateNumber.length >= MIN_PLATE_NUMBER_LENGTH &&
                plateNumber.length <= MAX_PLATE_NUMBER_LENGTH &&
                plateNumber.match(/^[A-Za-zА-ЯҐЄІЇа-яґєії0-9- ]+$/)
            ));
    };

    const uploadPhotoHandle = () => {
        launchImageLibrary({ mediaType: "photo" }, (response) => {
            if (!response.didCancel && response.fileSize) {
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
        isStarted.current = true;

        const car = new FormData();

        car.append("id", Number(props.carId));
        car.append("modelId", Number(selectedModel?.value));
        car.append("color", Number(selectedColor?.value));
        car.append("plateNumber", plateNumber);
        if (photo !== null && photo !== undefined) {
            car.append("image", {
                name: photo.name,
                type: photo.type,
                uri: photo.uri
            });
        }

        if (props.type === "add") {
            await CarService.add(car, { cancelToken: source.current.token })
                .catch(error => {
                    if (axios.isCancel(error))
                        throw error;
                    else
                        console.log(error);
                });
        }
        else {
            await CarService.update(car, { cancelToken: source.current.token })
                .catch(error => {
                    if (axios.isCancel(error))
                        throw error;
                    else
                        console.log(error);
                });
        }
        setSaving(false);
    };

    const selectBrandHandle = (brand: any) => {
        setBrand(brand);
        ModelService.getModelsByBrandId(Number(brand.value)).then((response) => {
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
            style={[AddEditCarsStyle.wrapper, { backgroundColor: DM("white") }]}
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
            style={[AddEditCarsStyle.wrapper, { backgroundColor: DM("white") }]}
        >
            <View style={[AddEditCarsStyle.carAvatarContainer, { backgroundColor: DM("#C4C4C4") }]}>
                {photo && (
                    <Image
                        source={{ uri: photo.uri }}
                        style={AddEditCarsStyle.carAvatar}
                    />
                )}
                <TouchableOpacity
                    style={[AddEditCarsStyle.carButtonUpload,
                        {
                            backgroundColor: DM("white"),
                            borderColor: DM("black")
                        }]
                    }
                    onPress={() =>
                        uploadPhotoHandle()
                    }
                >
                    <Text style={[AddEditCarsStyle.carButtonUploadText, { color: DM("black") }]}>
                        {Object.entries(photo).length
                            ? "Change photo"
                            : "Upload photo"
                        }
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={AddEditCarsStyle.inputsContainer}>
                <View style={AddEditCarsStyle.dropDownContainer}>
                    <CarDropDownPicker
                        style={AddEditCarsStyle.dropDownPicker}
                        placeHolder="Brand"
                        items={brandItems}
                        zIndex={3000}
                        required={true}
                        defaultValue={props.type === "edit" ? selectedBrand!.value : null}
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
                        style={AddEditCarsStyle.dropDownPicker}
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
                        style={AddEditCarsStyle.dropDownPicker}
                        placeHolder="Color"
                        items={colors}
                        zIndex={1000}
                        required={true}
                        defaultValue={props.type === "edit" ? selectedColor!.value : null}
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
                        onBlur={() =>
                            validatePlateNumber()
                        }
                    />
                    {!isValidPlateNumber &&
                        <Text style={{ color: DM("red") }}>
                            This field must contain 4-10 characters, including numbers, letters, hyphens, space
                        </Text>
                    }
                </View>
                <View style={AddEditCarsStyle.saveButtonContainer}>
                    <Text style={{ color: DM("red") }}>
                        *
                        <Text style={{ color: DM("gray") }}>
                            {" "}
                            - required field
                        </Text>
                    </Text>
                    <TouchableOpacity
                        style={
                            !isValidCar ?
                                [AddEditCarsStyle.carButtonSave, { backgroundColor: DM("gray") }]
                                : [AddEditCarsStyle.carButtonSave, { backgroundColor: DM("black") }]
                        }
                        disabled={
                            !isValidCar
                        }
                        onPress={() => {
                            saveCarHandle().then(() => navigate("Cars"));
                        }}
                    >
                        <Text style={[AddEditCarsStyle.carButtonSaveText, { color: DM("white") }]}>
                            Save
                        </Text>
                        {isSaving ? (
                            <ActivityIndicator
                                style={AddEditCarsStyle.spinner}
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

export default AddEditCars;
