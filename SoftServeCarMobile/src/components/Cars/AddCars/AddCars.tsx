import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import "reflect-metadata";
import { container } from 'tsyringe';
import { ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker/src';
import addCarsStyle from './AddCarsStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../../../activity/auth/AuthProvider';
import { CarDropDownPickerItem } from '../../CarDropDownPicker/CarDropDownItem';
import Model from '../../../../models/Model';
import Brand from '../../../../models/Brand';
import { Color } from '../../../../models/Color';
import BrandService from '../../../../api-service/brand-service/BrandService';
import ModelService from '../../../../api-service/model-service/ModelService';
import CarService from '../../../../api-service/car-service/CarService';
import CarDTO from '../../../../models/CarDTO';
import CarDropDownPicker from '../../CarDropDownPicker/CarDropDownPicker';
import CarTextInput from '../../CarTextInput/CarTextInput';

function AddCars(props: any) {
    const { user } = useContext(AuthContext);

    const [brands, setBrands] = useState({} as Brand[]);
    const [models, setModels] = useState({} as Model[]);
    const [colors] = useState<Array<{ value: string, label: string }>>(Object.values(Color)
        .filter(value => isNaN(Number(value)))
        .map((item, index) => ({ value: index.toString(), label: item.toString() })));

    const [selectedBrand, setBrand] = useState<CarDropDownPickerItem | null>(null);
    const [selectedModel, setModel] = useState<CarDropDownPickerItem | null>(null);
    const [selectedColor, setColor] = useState<CarDropDownPickerItem | null>(null);

    const [plateNumber, setPlateNumber] = useState<string>('');

    const [photo, setPhoto] = useState({} as ImagePickerResponse);
    const [imageData, setImageData] = useState<FormData>({} as FormData);

    const [loading, setLoading] = useState(false);

    const brandService = container.resolve(BrandService);
    const modelSerivce = container.resolve(ModelService);
    const carService = container.resolve(CarService);

    useEffect(() => {
        brandService.getBrands()
            .then(res => { setBrands(res.data) })
            .catch(e => console.log(e));
    }, []);

    const uploadPhotoHandle = () => {
        launchImageLibrary({ mediaType: 'photo', }, response => {
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
    }

    const selectBrandHandle = (brand: any) => {
        setBrand(brand);
        modelSerivce.getModelsByBrandId(Number(brand.value))
            .then(res => { setModels(res.data); })
            .catch(e => console.log(e));
    }

    const saveCarHandle = async (car: CarDTO) => {
        setLoading(true);
        console.log(car);
        const newCar = await carService.add(car).then(res => res.data);
        await carService.uploadPhoto(newCar.id, imageData);
        setLoading(false);
    }

    let brandItems: CarDropDownPickerItem[] | null =
        Object.entries(brands).length ? brands.map((brand) =>
            ({ ...{ value: String(brand.id), label: brand.name } })) : null;

    let modelItems: CarDropDownPickerItem[] | null =
        Object.entries(models).length ? models.map((model) =>
            ({ ...{ value: String(model.id), label: model.name } })) : null;

    return (
        <KeyboardAwareScrollView style={addCarsStyle.wrapper}>
            <View style={addCarsStyle.carAvatarContainer}>
                {photo && (<Image source={{ uri: photo.uri }} style={addCarsStyle.carAvatar} />)}
                <TouchableOpacity style={addCarsStyle.carButtonUpload}
                    onPress={() => uploadPhotoHandle()}>
                    <Text style={addCarsStyle.carButtonUploadText}>
                        {Object.entries(photo).length ? "Change photo" : "Upload photo"}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={addCarsStyle.inputsContainer}>
                <View style={addCarsStyle.dropDownContainer}>
                    <CarDropDownPicker
                        style={addCarsStyle.dropDownPicker}
                        placeHolder="Brand"
                        items={brandItems}
                        zIndex={3000}
                        required={true}
                        selectHandle={(item: CarDropDownPickerItem) => selectBrandHandle(item)} />
                    <CarDropDownPicker
                        style={addCarsStyle.dropDownPicker}
                        placeHolder="Model"
                        items={modelItems}
                        zIndex={2000}
                        required={true}
                        disabled={modelItems ? false : true}
                        selectHandle={(item: CarDropDownPickerItem) => setModel(item)} />
                    <CarDropDownPicker
                        style={addCarsStyle.dropDownPicker}
                        placeHolder="Color"
                        items={colors}
                        zIndex={1000}
                        required={true}
                        selectHandle={(item: CarDropDownPickerItem) => setColor(item)} />
                    <CarTextInput
                        rules={{
                            required: { value: true, message: 'Plate number is required' },
                            minLength: { value: 4, message: 'Min length is 4' },
                            maxLength: { value: 10, message: 'Max length is 10' },
                            pattern: {
                                value: /^[A-Za-z0-9-]+$/,
                                message: 'This field must contain 4-10 characters, including numbers, ' +
                                    'letters, hyphens'
                            },
                        }}
                        onChangeText={(text: string, error: boolean) => {
                            setPlateNumber(text);
                        }}
                        placeHolder='Plate number'
                    />
                </View>
                <View style={addCarsStyle.saveButtonContainer}>
                    <Text style={{ color: 'red' }}>*
                        <Text style={{ color: '#414045' }} > - mandatory information</Text>
                    </Text>
                    <TouchableOpacity
                        style={[addCarsStyle.carButtonSave]}
                        onPress={() => saveCarHandle({
                            brandId: Number(selectedBrand?.value),
                            modelId: Number(selectedModel?.value),
                            color: Number(selectedColor?.value),
                            plateNumber: plateNumber,
                            userId: Number(user?.id)
                        })}>
                        <Text style={addCarsStyle.carButtonSaveText}>Save</Text>
                        {loading ?
                            <ActivityIndicator style={addCarsStyle.spinner} size={20} color="white" />
                            : <></>}
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView >
    );
}
export default AddCars;