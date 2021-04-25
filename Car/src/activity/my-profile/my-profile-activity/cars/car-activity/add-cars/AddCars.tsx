import React, { useContext, useEffect, useState } from "react";
import {
    ActivityIndicator,
    Image,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Alert
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
    FIRST_ELEMENT_INDEX,
    MAX_PLATE_NUMBER_LENGTH,
    MIN_PLATE_NUMBER_LENGTH,
    MAX_PHOTO_FILE_SIZE
} from "../../../../../../constants/Constants";
import DM from "../../../../../../components/styles/DM";

const AddCars = () => {
    const { user } = useContext(AuthContext);

    let modelPickerController: any;
    let brandPickerController: any;
    let colorPickerController: any;

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

    const [isValidPlateNumber, setValidPlateNumber] = useState(true);

    function validatePlateNumber () : boolean {
        if (
            !plateNumber ||
            plateNumber.length < MIN_PLATE_NUMBER_LENGTH ||
            plateNumber.length > MAX_PLATE_NUMBER_LENGTH ||
            !plateNumber.match(/^[A-ZА-Я0-9-]+$/)
        ) {
            setValidPlateNumber(false);

            return false;
        } else {
            setValidPlateNumber(true);

            return true;
        }
    }

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

    const [photo, setPhoto] = useState({} as ImagePickerResponse);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        BrandService.getBrands().then((res) => {
            setBrands(res.data);
        });
    }, []);

    const trySetPhoto = (photo: ImagePickerResponse) => {
        if (photo.fileSize! < MAX_PHOTO_FILE_SIZE) {
            setPhoto(photo);
        } else {
            Alert.alert("Error!", "File size should not exceed 7MB", [
                {
                    text: "Ok"
                }
            ]);
            setPhoto({});
        }
    };

    const uploadPhotoHandle = () => {
        launchImageLibrary({ mediaType: "photo" }, (response) => {
            if (!response.didCancel && response.fileSize) {
                trySetPhoto(response);
            }
        });
    };

    const saveCarHandle = async () => {
        setLoading(true);
        const formData = new FormData();

        formData.append("ownerId", user?.id);
        formData.append("modelId", Number(selectedModel?.value));
        formData.append("color", Number(selectedColor?.value));
        formData.append("plateNumber", plateNumber);
        if (photo !== null && photo !== undefined) {
            formData.append("image", {
                name: photo.fileName,
                type: photo.type,
                uri: photo?.uri
            });
        }
        await CarService.add(formData)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        setLoading(false);
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
            <View style={[AddCarsStyle.carAvatarContainer, { backgroundColor: DM("#C4C4C4") }]}>
                {photo && (
                    <Image
                        source={{ uri: photo.uri }}
                        style={AddCarsStyle.carAvatar}
                    />
                )}
                <TouchableOpacity
                    style={[AddCarsStyle.carButtonUpload,
                        {
                            backgroundColor: DM("#FFFFFF"),
                            borderColor: DM("#000000")
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
                        onEndEditing={()=>validatePlateNumber()}
                    />
                    {
                        isValidPlateNumber ? null :
                            <Text style={{ color: DM("red") }}>
                                This field must contain 4-10 characters, including numbers, letters, hyphens
                            </Text>
                    }

                </View>
                <View style={AddCarsStyle.saveButtonContainer}>
                    <Text style={{ color: DM("red") }}>
                        *
                        <Text style={{ color: DM("#414045") }}>
                            {" "}
                            - required field
                        </Text>
                    </Text>
                    <TouchableOpacity
                        disabled={
                            !selectedBrand?.value ||
                            !selectedModel?.value ||
                            !selectedColor?.value ||
                            !isValidPlateNumber
                        }
                        style={ !selectedBrand?.value ||
                            !selectedModel?.value ||
                            !selectedColor?.value ||
                            !isValidPlateNumber ?
                            [AddCarsStyle.carButtonSave, { backgroundColor: DM("#B8B8B8") }]
                            : [AddCarsStyle.carButtonSave, { backgroundColor: DM("#000000") }]}
                        onPress={() => {
                            saveCarHandle().then(() => navigation.goBack());
                        }}
                    >
                        <Text style={[AddCarsStyle.carButtonSaveText, { color: DM("white") }]}>
                            Save
                        </Text>
                        {loading ? (
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
