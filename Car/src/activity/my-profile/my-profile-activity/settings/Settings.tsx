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
import {
    HALF_OPACITY,
    MAX_POPUP_POSITION,
    MIN_POPUP_HEIGHT,
    MIN_POPUP_POSITION,
    POPUP_HEIGHT_WITHOUT_USER_IMAGE,
    POPUP_HEIGHT_WITH_USER_IMAGE,
    ZERO_OPACITY
} from "../../../../constants/StylesConstants";
import {
    ANIMATION_DURATION,
    SLEEP_DURATION
} from "../../../../constants/AnimationConstants";
import { FIRST_ELEMENT_INDEX } from "../../../../constants/GeneralConstants";
import DM from "../../../../components/styles/DM";
import User from "../../../../../models/user/User";
import ConfirmModal from "../../../../components/confirm-modal/ConfirmModal";

const Settings = (props: {navigation: any}) => {

    const [user, setUser] = useState<User>(useContext(AuthContext).user);
    const [isOpen, setOpen] = useState(false);
    const [isVisible, setVisibility] = useState(false);
    const [isRefreshing, setRefreshing] = useState(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

    const opacity = useState(new Animated.Value(ZERO_OPACITY))[FIRST_ELEMENT_INDEX];

    const loadUser = () =>
        UserService.getUser(user!.id).then((res) => setUser(res.data));

    const { loadStorageUser } = useContext(AuthContext);

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
            isOpen ? MIN_POPUP_POSITION : MAX_POPUP_POSITION
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
                uri: photo?.uri,
            });
        }

        await UserService.updateUser(updatedUser);
        await UserService.getUser(user!.id).then((res) => {
            AsyncStorage.setItem("user", JSON.stringify(res.data));
        });

        await AsyncStorage.getItem("user").then((res) => {
            const newUser = JSON.parse(res!);

            setUser(newUser);
            loadStorageUser();
        });
    };

    const moreOptionsRef = useRef<BottomSheet>(null) as any;

    // Changing snapPoits to bigger values(adding photo case) causes in-library issue.
    // Next useEffect and if statement in renderBottomPopup added to fix next issue:
    // https://github.com/osdnk/react-native-reanimated-bottom-sheet/issues/230

    useEffect(() => {
        setBottomPopupShown(true);
    }, [user?.imageId]);

    const [isBottomPopupShown, setBottomPopupShown] = useState(true);

    const renderBottomPopup = () => {
        if (isBottomPopupShown) {
            return (
                <BottomPopup
                    snapPoints={[
                        user?.imageId != null ? POPUP_HEIGHT_WITH_USER_IMAGE
                            : POPUP_HEIGHT_WITHOUT_USER_IMAGE,
                        MIN_POPUP_HEIGHT
                    ]}
                    refForChild={moreOptionsRef}
                    renderContent={

                        <View style={{ backgroundColor: DM("#FFFFFF") }}>
                            {user?.imageId == null ? (

                                <TouchableOpacity
                                    style={SettingsStyle.moreOptionsButton}
                                    onPress={() => {
                                        pressHandle();
                                        (async () => sleep(SLEEP_DURATION))().then(() => uploadPhotoHandle());
                                        setBottomPopupShown(false);
                                    }}>
                                    <Text style={[SettingsStyle.changeAvatarText, { color: DM("black") }]}>
                                    Add photo
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
                                        Change photo
                                        </Text>
                                    </TouchableOpacity>

                                    <View style={[SettingsStyle.sepataror,
                                        { backgroundColor: DM(Platform.OS === "ios" ? "#888888" : "#C1C1C5") }
                                    ]} />

                                    <TouchableOpacity
                                        style={SettingsStyle.moreOptionsButton}
                                        onPress={() => {
                                            pressHandle();
                                            (async () => sleep(SLEEP_DURATION))()
                                                .then(() => setDeleteModalVisible(true));
                                        }}>
                                        <Text style={[SettingsStyle.deleteAvatarText, { color: DM("#EC6400") }]}>
                                        Delete photo
                                        </Text>
                                    </TouchableOpacity>
                                </>
                            )}
                        </View>
                    }
                    initialSnap={MIN_POPUP_POSITION}
                    renderHeader={
                        <View style={{ backgroundColor: DM("#FFFFFF") }}>
                            <Text style={[SettingsStyle.moreOptionsHeader, { color: DM("black") }]}>
                            Edit Profile
                            </Text>
                        </View>}
                    enabledInnerScrolling={false}
                    onCloseEnd={closeHandle}
                />);
        } else {
            return null;
        }
    };

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
                            onPress={pressHandle}>
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
            { renderBottomPopup() }
            <ConfirmModal
                visible={isDeleteModalVisible}
                title="ARE YOU SURE?"
                subtitle="Are you sure you want to delete your profile photo?"
                confirmText="Yes, delete it"
                cancelText="No, keep it"
                onConfirm={() => {
                    saveUser(null as unknown as ImagePickerResponse);
                    setDeleteModalVisible(false);
                }}
                disableModal={() => setDeleteModalVisible(false)}
            />
        </>
    );
};

export default Settings;
