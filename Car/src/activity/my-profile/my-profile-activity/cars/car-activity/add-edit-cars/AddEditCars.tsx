import React, { useEffect, useRef, useState } from "react";
import {
    ActivityIndicator,
    AppState,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Platform
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
import { useTheme } from "../../../../../../components/theme/ThemeProvider";
import {
    MAX_PLATE_NUMBER_LENGTH,
    MIN_PLATE_NUMBER_LENGTH
} from "../../../../../../constants/CarConstants";
import Indicator from "../../../../../../components/activity-indicator/Indicator";
import { navigate } from "../../../../../../components/navigation/Navigation";
import ImageService from "../../../../../../../api-service/image-service/ImageService";
import CarPhoto from "../../../../../../../models/car/CarPhoto";
import axios from "axios";
import ConfirmModal from "../../../../../../components/confirm-modal/ConfirmModal";

const AddEditCars = (props: { type: "add" | "edit", carId?: number }) => {
    const { colors } = useTheme();
    const [isLoading, setLoading] = useState(props.type === "edit");
    const [isSaving, setSaving] = useState(false);
    const [errorModalVisible, setErrorModalVisible] = useState(false);

    const [brands, setBrands] = useState<CarBrand[]>([]);
    const [models, setModels] = useState<CarModel[]>([]);
    const [carColors] = useState<Array<{ value: string; label: string }>>(
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
        BrandService.getBrands().then((brandsResponse) => {
            let brandsList = brandsResponse.data;

            setBrands(brandsList);

            if (props.type === "edit") {
                CarService.getById(props.carId!).then((carResponse) => {
                    const car = carResponse.data;

                    let carBrandItem: CarDropDownPickerItem = {
                        label: car?.brand ?? "",
                        value: brandsList.find(brand => brand?.name == car?.brand)?.id.toString() ?? "0"
                    };

                    selectBrandHandle(carBrandItem);
                    setBrand(carBrandItem);
                    ModelService.getModelsByBrandId(Number(carBrandItem.value)).then((modelsResponse) => {
                        let modelsList = modelsResponse.data;

                        setModels(modelsList);
                        let carModelItem: CarDropDownPickerItem = {
                            label: car?.model ?? "",
                            value: modelsList.find(model => model?.name == car?.model)?.id.toString() ?? "0"
                        };
                        const carColor = carColors.find(obj => {
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
                        setColor(carColor!);
                        setPlateNumber(car?.plateNumber ?? "");
                        setModel(carModelItem);
                        setLoading(false);
                    });
                });
            }
        });
    }, [props.type]);

    useEffect(() => validateCar(),
        [selectedBrand, selectedColor, selectedModel, isLoading]);

    useEffect(() => validatePlateNumber(),
        [plateNumber]);

    const validateCar = () => {
        setValidCar(Boolean(
            selectedBrand &&
            selectedModel &&
            selectedColor
        ));
    };

    const validatePlateNumber = () => {
        let plateNumberTrimmed : string = plateNumber.trim();

        setValidPlateNumber(
            Boolean(
                !plateNumber ||
                (plateNumberTrimmed.length >= MIN_PLATE_NUMBER_LENGTH &&
                plateNumberTrimmed.length <= MAX_PLATE_NUMBER_LENGTH &&
                plateNumberTrimmed.match(/^[A-Za-zА-ЯҐЄІЇа-яґєії0-9- ]+$/))
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

    const errorHandler = error => {
        if (axios.isCancel(error))
            throw error;
        else
        {
            if(error.message!="Network Error")
            {
                setSaving(false);
                setErrorModalVisible(true);
            }
            else{
                navigate("Cars");
            }
        }
    };

    const saveCarHandle = async () => {
        setSaving(true);
        isStarted.current = true;

        const car = new FormData();

        car.append("id", Number(props.carId));
        car.append("brand", selectedBrand?.label);
        car.append("model", selectedModel?.label);
        car.append("color", Number(selectedColor?.value));
        car.append("plateNumber", plateNumber.trim());
        if (photo !== null && photo !== undefined) {
            car.append("image", {
                name: photo.name,
                type: photo.type,
                uri: photo.uri
            });
        }

        if (props.type === "add") {
            await CarService.add(car, { cancelToken: source.current.token });
        }
        else {
            await CarService.update(car, { cancelToken: source.current.token });
        }
        setSaving(false);
    };

    const selectBrandHandle = (brand: any) => {
        setBrand(brand);
        ModelService.getModelsByBrandId(Number(brand.value)).then((response) => {
            setModels(response.data);
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
            style={[AddEditCarsStyle.wrapper, { backgroundColor: colors.white }]}
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
            style={[AddEditCarsStyle.wrapper, { backgroundColor: colors.white }]}
        >
            <View style={[AddEditCarsStyle.carAvatarContainer, { backgroundColor: colors.secondaryLight }]}>
                {photo && (
                    <Image
                        source={{ uri: photo.uri }}
                        style={AddEditCarsStyle.carAvatar}
                    />
                )}
                <TouchableOpacity
                    style={[AddEditCarsStyle.carButtonUpload,
                        {
                            backgroundColor: colors.white,
                            borderColor: colors.primary
                        }]
                    }
                    onPress={() =>
                        uploadPhotoHandle()
                    }
                >
                    <Text style={[AddEditCarsStyle.carButtonUploadText, { color: colors.primary }]}>
                        {Object.entries(photo).length
                            ? "Change photo"
                            : "Upload photo"
                        }
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={AddEditCarsStyle.inputsContainer}>
                <View style= {Platform.OS !== "android" ? { zIndex: 3 } : {} }>
                    <CarDropDownPicker
                        style={AddEditCarsStyle.dropDownPicker}
                        addCustomItem={true}
                        placeHolder="Brand"
                        items={brandItems}
                        zIndex={3000}
                        required={true}
                        defaultItem={props.type === "edit" ? selectedBrand : null}
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
                </View>
                <View style= {Platform.OS !== "android" ? { zIndex: 2 } : {} }>
                    <CarDropDownPicker
                        style={AddEditCarsStyle.dropDownPicker}
                        addCustomItem={true}
                        placeHolder="Model"
                        items={modelItems}
                        zIndex={2000}
                        required={true}
                        defaultItem={selectedModel}
                        disabled={!selectedBrand}
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
                </View>
                <View style= {Platform.OS !== "android" ? { zIndex: 1 } : {} }>
                    <CarDropDownPicker
                        style={AddEditCarsStyle.dropDownPicker}
                        placeHolder="Color"
                        items={carColors}
                        zIndex={1000}
                        required={true}
                        defaultItem={props.type === "edit" ? selectedColor : null}
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
                </View>
                <CarTextInput
                    defaultValue={plateNumber}
                    onChangeText={setPlateNumber}
                    placeHolder="Plate number"
                    isValidField={isValidPlateNumber}
                />
                {!isValidPlateNumber &&
                    <Text style={{ color: colors.accentRed }}>
                        This field must contain 1-10 characters, including numbers, letters, hyphens, space
                    </Text>
                }
                <View style={AddEditCarsStyle.saveButtonContainer}>
                    <Text style={{ color: colors.accentRed }}>
                        *
                        <Text style={{ color: colors.secondaryDark }}>
                            {" "}
                            - required field
                        </Text>
                    </Text>
                    <TouchableOpacity
                        style={
                            (!isValidCar || !isValidPlateNumber) ?
                                [AddEditCarsStyle.carButtonSave, { backgroundColor: colors.secondaryDark }]
                                : [AddEditCarsStyle.carButtonSave, { backgroundColor: colors.hover }]
                        }
                        disabled={
                            !isValidCar || !isValidPlateNumber
                        }
                        onPress={() => {
                            saveCarHandle().then(() => navigate("Cars")).catch(errorHandler);
                        }}
                    >
                        <Text style={[AddEditCarsStyle.carButtonSaveText, { color: colors.white }]}>
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
                    <ConfirmModal
                        title = "Error"
                        subtitle = {props.type === "add" ? "Failed to add the car"
                            : "Failed to update the car"}
                        visible = {errorModalVisible}
                        confirmText = "Ok"
                        onConfirm = {() => setErrorModalVisible(false)}
                        disableModal = {() => setErrorModalVisible(false)}
                        hideCancelButton={true}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default AddEditCars;
