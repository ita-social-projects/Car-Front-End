import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, Image } from 'react-native';
import DropDownPicker from '../../../shared/DropDownPicker/DropDownPicker';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Color } from '../../../models/Color';
import CarTextInput from '../../../shared/DropDownPicker/CarTextInput/CarTextInput';

function AddCars(props: any) {
    const [brands, setBrands] = useState({} as Brand[]);
    const [models, setModels] = useState({} as Model[]);
    const [colors, setColors] = useState<Array<DropDownItem>>(Object.values(Color)
        .filter(value => isNaN(Number(value)))
        .map((item, index) => ({ id: index.toString(), title: item.toString() })));
    const [selectedBrand, setBrand] = useState({} as DropDownItem);
    const [selectedModel, setModel] = useState({} as DropDownItem);
    const [selectedColor, setColor] = useState<String>();
    const [photo, setPhoto] = useState({} as ImagePickerResponse);
    const [showTextInput, setShowTextInput] = useState(false);

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

    let brandItems: { id: string; title: string; }[] | null =
        Object.entries(brands).length ? brands.map((brand) =>
            ({ ...{ id: String(brand.id), title: brand.name } })) : null;

    let modelItems: { id: string; title: string; }[] | null =
        Object.entries(models).length ? models.map((model) =>
            ({ ...{ id: String(model.id), title: model.name } })) : null;

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
                    <DropDownPicker
                        zIndex={3000}
                        style={carStyle.dropDownPicker}
                        placeHolder="Brand"
                        items={brandItems ? brandItems : []}
                        onSelectedItem={setBrand}>
                    </DropDownPicker>
                    <DropDownPicker
                        zIndex={2000}
                        style={carStyle.dropDownPicker}
                        placeHolder="Model"
                        items={modelItems ?
                            (Object.entries(selectedBrand).length ?
                                models.filter(item => item.brandName === selectedBrand.title)
                                    .map(item => ({ ...{ id: String(item.id), title: item.name } }))
                                : modelItems) : []}
                        onSelectedItem={setModel}>
                    </DropDownPicker>
                    <DropDownPicker
                        zIndex={1000}
                        style={carStyle.dropDownPicker}
                        placeHolder="Color"
                        items={colors}
                        onSelectedItem={setColor}>
                    </DropDownPicker>
                    <CarTextInput placeHolder="Plate number" />
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