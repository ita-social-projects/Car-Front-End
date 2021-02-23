import React, { useContext, useEffect, useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {
    ImagePickerResponse,
    launchImageLibrary
} from "react-native-image-picker/src";
import UserService from "../../../../../api-service/user-service/UserService";
import Indicator from "../../../../components/activity-indicator/Indicator";
import AuthContext from "../../../auth/AuthContext";
import SettingsStyle from "./SettingsStyle";
import RNRestart from "react-native-restart";

const Settings = () => {
    const [photo, setPhoto] = useState({} as ImagePickerResponse);
    const [avatar, setAvatar] = useState(<View />);
    const [isPhotoChanged, setStatus] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [isSaved, setSaved] = useState(false);
    const [isPhotoExsists, photoExists] = useState(false);
    const [imageData, setImageData] = useState<FormData>({} as FormData);

    const { user } = useContext(AuthContext);

    const uploadPhotoHandle = () => {
        launchImageLibrary({ mediaType: "photo" }, (response) => {
            if (!response.didCancel) {
                setPhoto(response);
                setStatus(true);
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

    let byteOfImage = "";

    useEffect(() => {
        UserService.getAvatar(Number(user?.id))
            .then((result) => {
                byteOfImage = JSON.stringify(result.request._response);
                if (byteOfImage !== '""') {
                    setAvatar(
                        <Image
                            source={{
                                uri: "data:image/png;base64," + byteOfImage
                            }}
                            style={SettingsStyle.avatar}
                        />
                    );
                    photoExists(true);
                }
            })
            .then(() => setLoading(false));
    });

    const image = isPhotoChanged ? (
        <Image source={{ uri: photo.uri }} style={SettingsStyle.avatar} />
    ) : (
        avatar
    );

    let loader: any;

    if (isSaved) {
        loader = (
            <ActivityIndicator
                style={SettingsStyle.loadingIcon}
                size="large"
                color="black"
            />
        );
    } else {
        loader = null;
    }

    const uploadButtonText =
        !isPhotoExsists && !isPhotoChanged ? "Upload photo" : "Change photo";

    const saveChangesAsync = async () =>
        await UserService.setAvatar(user!.id, imageData);

    return (
        <View style={SettingsStyle.container}>
            {isLoading ? (
                <Indicator
                    color="#414045"
                    size="large"
                    text="Loading information..."
                />
            ) : (
                <>
                    <View style={SettingsStyle.avatarContainer}>
                        {image}
                        <View style={SettingsStyle.overlay} />
                        <View style={SettingsStyle.whitespace} />
                        <TouchableOpacity
                            style={SettingsStyle.uploadButton}
                            onPress={() => uploadPhotoHandle()}
                        >
                            <Text style={SettingsStyle.uploadButtonText}>
                                {uploadButtonText}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={SettingsStyle.bottomContainer}>
                        <View style={SettingsStyle.saveButtonContainer}>
                            {loader}
                            <TouchableOpacity
                                style={[
                                    SettingsStyle.saveButton,
                                    (!isPhotoChanged || isSaved) &&
                                        SettingsStyle.pressedButton
                                ]}
                                disabled={!isPhotoChanged || isSaved}
                                activeOpacity={1}
                                onPress={() => {
                                    setSaved(true);
                                    saveChangesAsync()
                                        .then(() =>
                                            Alert.alert(
                                                "Saved",
                                                "Please restart the App",
                                                [
                                                    {
                                                        text: "Restart",
                                                        onPress: () => {
                                                            RNRestart.Restart();
                                                        }
                                                    }
                                                ]
                                            )
                                        )
                                        .then((loader = null));
                                }}
                            >
                                <Text style={SettingsStyle.saveButtonText}>
                                    Save
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            )}
        </View>
    );
};

export default Settings;
