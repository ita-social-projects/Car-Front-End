import React, { useContext, useEffect, useRef, useState } from "react";
import { Animated, RefreshControl, ScrollView, Text, TouchableOpacity, View } from "react-native";
import SettingsStyle from "./SettingsStyle";
import TouchableNavigationCard from "../../../../components/touchable-navigation-card/TouchableNavigationCard";
import AvatarLogoTitle from "../../../../components/avatar-logo-title/AvatarLogoTitle";
import BottomPopup from "../../../../components/bottom-popup/BottomPopup";
import { ImagePickerResponse, launchImageLibrary } from "react-native-image-picker/src";
import UserService from "../../../../../api-service/user-service/UserService";
import AuthContext from "../../../../components/auth/AuthContext";
import AsyncStorage from "@react-native-community/async-storage";
import { BottomSheet } from "react-native-elements";
import RNRestart from "react-native-restart";

const Settings = (props: any) => {

    const [user, setUser] = useState<any>(useContext(AuthContext).user);
    const [isOpen, setOpen] = useState(false);
    const [isVisible, setVisibility] = useState(false);
    const [isRefreshing, setRefreshing] = useState(false);

    const { Popup } = require("popup-ui");

    const opacity = useState(new Animated.Value(0))[0];

    const loadUser = () =>
        UserService.getUser(user!.id).then((res) => setUser(res.data));

    useEffect(() => {
        loadUser();
    }, [0]);

    const onRefresh = () => {
        loadUser().then(() => setRefreshing(false));
    };

    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: 0.5,
            duration: 500,
            useNativeDriver: true
        }).start();
    };

    const sleep = (milliseconds: number) =>
        new Promise(resolve => setTimeout(resolve, milliseconds));

    const fadeOut = () => Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
    }).start();

    const closeHandle = () => {
        setOpen(false);
        fadeOut();
        (async () => sleep(700))().then(() => setVisibility(false));
    };

    const pressHandle = () => {
        setOpen(!isOpen);

        if (isOpen) {
            fadeOut();
            (async () => sleep(700))().then(() => setVisibility(false));
        } else {
            setVisibility(true);
            fadeIn();
        }

        moreOptionsRef?.current?.snapTo(
            isOpen ? 0 : 1
        );
    };

    const uploadPhotoHandle = () => {
        launchImageLibrary({ mediaType: "photo" }, (response) => {
            if (!response.didCancel) {
                saveUser(response);
            }
        });
    };

    const saveUser = async (photo: ImagePickerResponse) => {

        const updatedUser = new FormData();

        updatedUser.append("id", user?.id);

        if (photo !== null && photo !== undefined) {
            updatedUser.append("image", {
                name: photo.fileName,
                type: photo.type,
                uri: photo?.uri
            });
        }

        await UserService.updateUser(updatedUser).then((res) => {
            console.log(res.status + " " + res.data);

            UserService.getUser(user!.id).then((res) =>
                AsyncStorage.setItem("user", JSON.stringify(res.data)));
        });

        Popup.show({
            type: "Success",
            title: "Upload complete!",
            button: true,
            textBody: "Your photo has been successfully updated",
            buttonText: "Back to App",
            callback: () => {
                Popup.hide();
                RNRestart.Restart();
            }
        });
    };

    const moreOptionsContent = () => (
        <View style={SettingsStyle.moreOptions}>
            {user?.imageId == null ? (
                <TouchableOpacity
                    style={SettingsStyle.moreOptionsButton}
                    onPress={() => {
                        pressHandle();
                        (async () => sleep(700))().then(() => uploadPhotoHandle());
                    }}>
                    <Text style={SettingsStyle.changeAvatarText}>
                        Upload Avatar
                    </Text>
                </TouchableOpacity>
            ) : (
                <>
                    <TouchableOpacity
                        style={SettingsStyle.moreOptionsButton}
                        onPress={() => {
                            pressHandle();
                            (async () => sleep(700))().then(() => uploadPhotoHandle());
                        }}>
                        <Text style={SettingsStyle.changeAvatarText}>
                            Change Avatar
                        </Text>
                    </TouchableOpacity>
                    <View style={SettingsStyle.sepataror} />
                    <TouchableOpacity
                        style={SettingsStyle.moreOptionsButton}
                        onPress={() => {
                            saveUser(null as unknown as ImagePickerResponse);
                            pressHandle();
                        }}>
                        <Text style={SettingsStyle.deleteAvatarText}>
                            Delete Avatar
                        </Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );

    const moreOptionsHeader = () => (
        <View style={SettingsStyle.moreOptions}>
            <Text style={SettingsStyle.moreOptionsHeader}>
                Edit Profile
            </Text>
        </View>

    );

    const moreOptionsRef = useRef<BottomSheet>(null) as any;

    return (
        <>
            <ScrollView
                style={SettingsStyle.mainContainer}
                refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh}/>}>
                <View style={SettingsStyle.container}>
                    <View style={SettingsStyle.bottomContainer}>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={SettingsStyle.profileInfo}
                            onLongPress={pressHandle}>
                            <AvatarLogoTitle />
                        </TouchableOpacity>
                        <TouchableNavigationCard
                            navigation={props.navigation}
                            navigationName="AppSettings"
                            cardName="App Settings"
                            angle="0"
                        >
                            <Text style={SettingsStyle.cardText}>
                                App Settings
                            </Text>
                        </TouchableNavigationCard>
                        <TouchableNavigationCard
                            navigation={props.navigation}
                            navigationName="NotificationSettings"
                            cardName="Notifications Settings"
                            angle="0"
                        >
                            <Text style={SettingsStyle.cardText}>
                                Notifications Settings
                            </Text>
                        </TouchableNavigationCard>
                        <TouchableNavigationCard
                            navigation={props.navigation}
                            navigationName="ChatSettings"
                            cardName="Chats Settings"
                            angle="0"
                        >
                            <Text style={SettingsStyle.cardText}>
                                Chats Settings
                            </Text>
                        </TouchableNavigationCard>
                    </View>
                    <Animated.View style={isVisible && [SettingsStyle.layout, { opacity }]} />
                </View>
            </ScrollView>
            <BottomPopup
                snapPoints={[0, user?.imageId != null ? 188 : 143]}
                refForChild={moreOptionsRef}
                renderContent={moreOptionsContent}
                initialSnap={0}
                renderHeader={moreOptionsHeader}
                enabledInnerScrolling={false}
                onCloseEnd={closeHandle}
            />
        </>
    );
};

export default Settings;
