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

const Settings = (props: any) => {

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

    const moreOptionsContent = () => (
        <View style={SettingsStyle.moreOptions}>
            {user?.imageId == null ? (
                <TouchableOpacity
                    style={SettingsStyle.moreOptionsButton}
                    onPress={() => {
                        pressHandle();
                        (async () => sleep(SLEEP_DURATION))().then(() => uploadPhotoHandle());
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
                            (async () => sleep(SLEEP_DURATION))().then(() => uploadPhotoHandle());
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
                snapPoints={[
                    MIN_POPUP_HEIGHT,
                    user?.imageId != null ? POPUP_HEIGHT_WITH_USER_IMAGE : POPUP_HEIGHT_WITHOUT_USER_IMAGE]}
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
