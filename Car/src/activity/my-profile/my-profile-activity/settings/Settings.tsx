import React, { useContext, useEffect, useRef, useState } from "react";
import { Animated, Platform, RefreshControl, ScrollView, Text, TouchableOpacity, View } from "react-native";
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
import {
    ANIMATION_DURATION,
    FIRST_ELEMENT_INDEX,
    HALF_OPACITY,
    MAX_POPUP_POSITION,
    MIN_POPUP_HEIGHT,
    MIN_POPUP_POSITION,
    POPUP_HEIGHT_WITHOUT_USER_IMAGE,
    POPUP_HEIGHT_WITH_USER_IMAGE,
    SLEEP_DURATION, ZERO_OPACITY
} from "../../../../constants/Constants";
import DM from "../../../../components/styles/DM";

const Settings = (props: {navigation: any}) => {

    const [user, setUser] = useState<any>(useContext(AuthContext).user);
    const [isOpen, setOpen] = useState(false);
    const [isVisible, setVisibility] = useState(false);
    const [isRefreshing, setRefreshing] = useState(false);

    const { Popup } = require("popup-ui");

    const opacity = useState(new Animated.Value(ZERO_OPACITY))[FIRST_ELEMENT_INDEX];

    const loadUser = () =>
        UserService.getUser(user.id).then((res) => setUser(res.data));

    useEffect(() => {
        loadUser();
    }, []);

    const onRefresh = () => {
        loadUser().then(() => setRefreshing(false));
    };

    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: HALF_OPACITY,
            duration: ANIMATION_DURATION,
            useNativeDriver: true
        }).start();
    };

    const sleep = (milliseconds: number) =>
        new Promise(resolve => setTimeout(resolve, milliseconds));

    const fadeOut = () => Animated.timing(opacity, {
        toValue: ZERO_OPACITY,
        duration: ANIMATION_DURATION,
        useNativeDriver: true
    }).start();

    const closeHandle = () => {
        setOpen(false);
        fadeOut();
        (async () => sleep(SLEEP_DURATION))().then(() => setVisibility(false));
    };

    const pressHandle = () => {
        setOpen(!isOpen);

        if (isOpen) {
            fadeOut();
            (async () => sleep(SLEEP_DURATION))().then(() => setVisibility(false));
        } else {
            setVisibility(true);
            fadeIn();
        }

        moreOptionsRef?.current?.snapTo(
            isOpen ? MAX_POPUP_POSITION : MIN_POPUP_POSITION
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

        await UserService.updateUser(updatedUser).then((response) => {
            console.log(response.status + " " + response.data);

            UserService.getUser(user.id).then((res) =>
                AsyncStorage.setItem("user", JSON.stringify(res.data)));
        });

        if (photo === null || photo === undefined) {
            Popup.show({
                type: "Success",
                title: "Delete complete!",
                button: true,
                textBody: "Your photo has been successfully deleted",
                buttonText: "Back to App",
                callback: () => {
                    Popup.hide();
                    RNRestart.Restart();
                }
            });
        } else {
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
        }
    };

    const moreOptionsRef = useRef<BottomSheet>(null) as any;

    return (
        <>
            <ScrollView
                style={[SettingsStyle.mainContainer, { backgroundColor: DM("#FFFFFF") }]}
                refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh}/>}>
                <View style={SettingsStyle.container}>
                    <View style={SettingsStyle.bottomContainer}>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={[SettingsStyle.profileInfo,
                                {
                                    borderColor: DM("#F0F0F0"),
                                    backgroundColor: DM("#FFFFFF")
                                }]}
                            onLongPress={pressHandle}>
                            <AvatarLogoTitle />
                        </TouchableOpacity>
                        <TouchableNavigationCard
                            navigation={props.navigation}
                            navigationName="AppSettings"
                            cardName="App Settings"
                            angle="0"
                        >
                            <Text style={[SettingsStyle.cardText, { color: DM("#000000") }]}>
                                App Settings
                            </Text>
                        </TouchableNavigationCard>
                        <TouchableNavigationCard
                            navigation={props.navigation}
                            navigationName="NotificationSettings"
                            cardName="Notifications Settings"
                            angle="0"
                        >
                            <Text style={[SettingsStyle.cardText, { color: DM("#000000") }]}>
                                Notifications Settings
                            </Text>
                        </TouchableNavigationCard>
                        <TouchableNavigationCard
                            navigation={props.navigation}
                            navigationName="ChatSettings"
                            cardName="Chats Settings"
                            angle="0"
                        >
                            <Text style={[SettingsStyle.cardText, { color: DM("#000000") }]}>
                                Chats Settings
                            </Text>
                        </TouchableNavigationCard>
                    </View>
                    <Animated.View
                        style={isVisible && [SettingsStyle.layout, { opacity, backgroundColor: DM("#000000") }]} />
                </View>
            </ScrollView>
            <BottomPopup
                snapPoints={[
                    MIN_POPUP_HEIGHT,
                    user?.imageId != null ? POPUP_HEIGHT_WITH_USER_IMAGE : POPUP_HEIGHT_WITHOUT_USER_IMAGE]}
                refForChild={moreOptionsRef}
                enabledGestureInteraction={true}
                renderContent={

                    <View style={{ backgroundColor: DM("#FFFFFF") }}>
                        {user?.imageId == null ? (

                            <TouchableOpacity
                                style={SettingsStyle.moreOptionsButton}
                                onPress={() => {
                                    pressHandle();
                                    (async () => sleep(SLEEP_DURATION))().then(() => uploadPhotoHandle());
                                }}>
                                <Text style={[SettingsStyle.changeAvatarText, { color: DM("black") }]}>
                                Upload Avatar
                                </Text>
                            </TouchableOpacity>

                        ) : (

                            <>
                                <TouchableOpacity
                                    style={SettingsStyle.moreOptionsButton}
                                    onPress={() => {
                                        pressHandle();
                                        (async () => sleep(SLEEP_DURATION))().then(() => uploadPhotoHandle());
                                    }}>
                                    <Text style={[SettingsStyle.changeAvatarText, { color: DM("black") }]}>
                                        Change Avatar
                                    </Text>
                                </TouchableOpacity>

                                <View style={[SettingsStyle.sepataror,
                                    { backgroundColor: DM(Platform.OS === "ios" ? "#888888" : "#C1C1C5") }
                                ]} />

                                <TouchableOpacity
                                    style={SettingsStyle.moreOptionsButton}
                                    onPress={() => {
                                        saveUser(null as unknown as ImagePickerResponse);
                                        pressHandle();
                                    }}>
                                    <Text style={[SettingsStyle.deleteAvatarText, { color: DM("#EC6400") }]}>
                                        Delete Avatar
                                    </Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                }
                initialSnap={0}
                renderHeader={
                    <View style={{ backgroundColor: DM("#FFFFFF") }}>
                        <Text style={[SettingsStyle.moreOptionsHeader, { color: DM("black") }]}>
                            Edit Profile
                        </Text>
                    </View>}
                enabledInnerScrolling={false}
                onCloseEnd={closeHandle}
            />
        </>
    );
};

export default Settings;
