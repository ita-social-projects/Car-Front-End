import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import "reflect-metadata";
import { container } from 'tsyringe';
import BrandService from '../../../services/APIService/BrandService/BrandService';
import Model from '../../../models/Model';
import Brand from '../../../models/Brand';
import ModelService from '../../../services/APIService/ModelService/ModelService';
import { ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker/src';
import CarService from '../../../services/APIService/CarService/CarService';
import carStyle from './AddCarsStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Color } from '../../../models/Color';
import CarTextInput from '../../../shared/CarTextInput/CarTextInput';
import Control from '../../../shared/Control';
import CarDropDownPicker from '../../../shared/CarDropDownPicker/CarDropDownPicker';

function AddCars(props: any) {
    const [brands, setBrands] = useState({} as Brand[]);
    const [models, setModels] = useState({} as Model[]);
    const [colors, setColors] = useState<Array<{ value: string, label: string }>>(Object.values(Color)
        .filter(value => isNaN(Number(value)))
        .map((item, index) => ({ value: index.toString(), label: item.toString() })));
    const [selectedBrand, setBrand] = useState();
    const [selectedModel, setModel] = useState();
    const [selectedColor, setColor] = useState<String>();
    const [photo, setPhoto] = useState({} as ImagePickerResponse);

    const [modelDropDown, setModelDropDowm] = useState<Element>();
    //const [controler, setControler] = useState
    let controller: any;

    const brandService = container.resolve(BrandService);
    const modelSerivce = container.resolve(ModelService);
    const carService = container.resolve(CarService);

    const [textInputControl, setTextInputControl] = useState<Control<string>>(
        {
            value: '',
            placeHolder: 'Plate number',
            isRequired: true,
            validation: function (text, expression) {
                return new RegExp(expression).test(text);
            }
        }
    );

    useEffect(() => {
        if (!Object.entries(brands).length) {
            brandService.getBrands()
                .then(res => { setBrands(res.data) })
                .catch(e => console.log(e));
        }
    }, [selectedBrand]);

    const uploadPhotoHandle = () => {
        launchImageLibrary({ mediaType: 'photo', }, response => {
            if (!response.didCancel) {
                setPhoto(response);
                const imageData = new FormData();
                imageData.append("image", {
                    name: response.fileName,
                    type: response.type,
                    uri: response?.uri
                });
                carService.uploadPhoto(imageData);
            }
        });
    }

    const selectBrandHandle = (brand: any) => {
        setBrand(brand);
        //setModel(null);

        modelSerivce.getModelsByBrandId(Number(brand.value))
            .then(res => { setModels(res.data); })
            .catch(e => console.log(e));
    }

    let brandItems: { id: string; title: string; }[] | null =
        Object.entries(brands).length ? brands.map((brand) =>
            ({ ...{ id: String(brand.id), title: brand.name } })) : null;

    let brandItems2: { label: any; value: any; }[] | null =
        Object.entries(brands).length ? brands.map((brand) =>
            ({ ...{ value: String(brand.id), label: brand.name } })) : null;

    let modelItems: { id: string; title: string; }[] | null =
        Object.entries(models).length ? models.map((model) =>
            ({ ...{ id: String(model.id), title: model.name } })) : null;

    let modelItems2: { label: string; value: string; }[] | null =
        Object.entries(models).length ? models.map((model) =>
            ({ ...{ value: String(model.id), label: model.name } })) : null;

    return (
        <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={carStyle.carAvatarContainer}>
                {photo && (<Image source={{ uri: photo.uri }} style={carStyle.carAvatar} />)}
                <TouchableOpacity style={carStyle.carButtonUpload}
                    onPress={() => uploadPhotoHandle()}>
                    <Text style={carStyle.carButtonUploadText}>
                        {Object.entries(photo).length ? "Change photo" : "Upload photo"}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={carStyle.inputsContainer}>
                <View style={carStyle.dropDownContainer}>
                    <CarDropDownPicker
                        style={carStyle.dropDownPicker}
                        placeHolder="Brand"
                        items={brandItems2}
                        zIndex={3000}
                        required={true}
                        selectHandle={(item) => selectBrandHandle(item)} />
                    <CarDropDownPicker
                        style={carStyle.dropDownPicker}
                        placeHolder="Model"
                        items={modelItems2}
                        zIndex={2000}
                        required={true}
                        disabled={modelItems ? false : true} />
                    <CarDropDownPicker
                        style={carStyle.dropDownPicker}
                        placeHolder="Color"
                        items={colors}
                        zIndex={1000}
                        required={true} />
                    <CarTextInput
                        control={textInputControl}
                        onChangeText={(text: string) => setTextInputControl(
                            { ...textInputControl, value: text }
                        )}
                    />
                </View>
                <View style={carStyle.saveButtonContainer}>
                    <Text style={{ color: 'red' }}>*
                        <Text style={{ color: '#414045' }} > - mandatory information</Text>
                    </Text>
                    <TouchableOpacity style={[carStyle.carButtonSave]}>
                        <Text style={carStyle.carButtonSaveText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView >
    );
}
export default AddCars;