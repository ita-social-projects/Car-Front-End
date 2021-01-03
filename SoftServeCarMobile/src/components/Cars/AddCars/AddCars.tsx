import React, { useEffect } from 'react';
import { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import DropDownPicker from '../../../shared/DropDownPicker/DropDownPicker';
import "reflect-metadata";
import { container } from 'tsyringe';
import BrandService from '../../../services/APIService/BrandService/BrandService';
import Model from '../../../models/Model';
import Brand from '../../../models/Brand';
import ModelService from '../../../services/APIService/ModelService/ModelService';
import { ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker/src';
import CarService from '../../../services/APIService/CarService/CarService';
import DropDownItem from '../../../shared/DropDownPicker/DropDownItem';
import carStyle from './AddCarsStyle';

function AddCars(props: any) {
    const [brands, setBrands] = useState({} as Brand[]);
    const [models, setModels] = useState({} as Model[]);
    const [selectedBrand, setBrand] = useState({} as DropDownItem);
    const [selectedModel, setModel] = useState({} as DropDownItem);
    const [photo, setPhoto] = useState({} as ImagePickerResponse);

    const brandService = container.resolve(BrandService);
    const modelSerivce = container.resolve(ModelService);
    const carService = container.resolve(CarService);

    useEffect(() => {
        brandService.getBrands()
            .then(res => { setBrands(res.data) })
            .catch(e => console.log(e));

        modelSerivce.getModels()
            .then(res => setModels(res.data))
            .catch(e => console.log(e));
    }, []);

    const uploadPhotoHandle = () => {
        launchImageLibrary({ mediaType: 'photo' }, response => {
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

    let brandItems: { id: string; title: string; }[] | null =
        Object.entries(brands).length ? brands.map((brand) =>
            ({ ...{ id: String(brand.id), title: brand.name } })) : null;

    let modelItems: { id: string; title: string; }[] | null =
        Object.entries(models).length ? models.map((model) =>
            ({ ...{ id: String(model.id), title: model.name } })) : null;

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}>
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
                    <DropDownPicker
                        style={carStyle.dropDownPicker}
                        placeHolder="Brand"
                        items={brandItems ? brandItems : []}
                        onSelectedItem={setBrand}>
                    </DropDownPicker>
                    <DropDownPicker
                        style={carStyle.dropDownPicker}
                        placeHolder="Model"
                        items={modelItems ?
                            (Object.entries(selectedBrand).length ?
                                models.filter(item => item.brandName === selectedBrand.title)
                                    .map(item => ({ ...{ id: String(item.id), title: item.name } }))
                                : modelItems) : []}
                        onSelectedItem={setModel}>
                    </DropDownPicker>
                </View>
                <View style={carStyle.saveButtonContainer}>
                    <Text style={{ color: 'red' }}>*<Text style={{ color: '#414045' }} > - mandatory information</Text></Text>
                    <TouchableOpacity style={carStyle.carButtonSave}>
                        <Text style={carStyle.carButtonSaveText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
export default AddCars;