import React, { useContext, useEffect, useRef, useState } from "react";
import { ActivityIndicator, Animated, AppState, Platform, RefreshControl, ScrollView, Text, TouchableOpacity, View } from "react-native";
import SettingsStyle, { SwitchSelectorStyle } from "./SettingsStyle";
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
//import RNRestart from "react-native-restart";
import { FIRST_ELEMENT_INDEX } from "../../../../constants/GeneralConstants";
//import DM from "../../../../components/styles/DM";
import User from "../../../../../models/user/User";
import ConfirmModal from "../../../../components/confirm-modal/ConfirmModal";
import axios from "axios";
import { CreateJourneyStyle } from "../../../journey/journey-activity/create-journey/CreateJourneyStyle";
import { useTheme } from "../../../../components/theme/ThemeProvider";

const Settings = (props: { navigation: any }) => {
    const { setScheme, theme, DM } = useTheme();
    const [user, setUser] = useState<User>(useContext(AuthContext).user);
    const [isOpen, setOpen] = useState(false);
    const [isVisible, setVisibility] = useState(false);
    const [isRefreshing, setRefreshing] = useState(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [isSaving, setSaving] = useState(false);
    const [isAnimating, setAnimating] = useState(false);

    const opacity = useState(new Animated.Value(ZERO_OPACITY))[FIRST_ELEMENT_INDEX];

    const activeButtonStyle = {
        backgroundColor: DM("#000000"),
        color: DM("#FFFFFF"),
        borderColor: DM("#000000")
    };

    const inactiveButtonStyle = {
        backgroundColor: DM("#FFFFFF"),
        color: DM("#000000"),
        borderColor: DM("#000000")
    };

    const setButtonStyle = (shouldBeHighlighted : boolean) =>{
        if(shouldBeHighlighted)
            return activeButtonStyle;

        return inactiveButtonStyle;
    };

    const [lightButtonStyle, setLightButtonStyle] = useState(setButtonStyle(theme === "light"));
    const [darkButtonStyle, setDarkButtonStyle] = useState(setButtonStyle(theme === "dark"));
    const [systemButtonStyle, setSystemButtonStyle] = useState(setButtonStyle(theme === "system"));

    const changeAppScheme = (value) => {
        setScheme(value);
        AsyncStorage.setItem("theme", value);//.then(() => RNRestart.Restart());
    };

    const avatarLogoTitleOpacity = useState(new Animated.Value(ZERO_OPACITY))[FIRST_ELEMENT_INDEX];

    const loadUser = () =>
        UserService.getUser(user!.id).then((res) => setUser(res.data));

    const { loadStorageUser } = useContext(AuthContext);

    useEffect(() => {
        loadUser();
    }, []);

    const source = useRef(axios.CancelToken.source());
    const photoTmp = useRef(null as ImagePickerResponse | null);
    const isCanceled = useRef(false);
    const isStarted = useRef(false);

    useEffect(() => {
        const changeHandler = nextAppState => {
            if (nextAppState.match(/inactive|background/) && isStarted.current) {
                source.current.cancel("cancel");
                source.current = axios.CancelToken.source();
                isCanceled.current = true;
                isStarted.current = false;
            }
            else if (isCanceled.current && nextAppState === "active" && photoTmp.current) {
                saveUser(photoTmp.current);
                isCanceled.current = false;
            }
        };

        AppState.addEventListener("change", changeHandler);

        return () => {
            source.current.cancel("cancel");
            AppState.removeEventListener("change", changeHandler);
        };
    }, []);

    const onRefresh = () => {
        loadUser().then(() => setRefreshing(false));
    };

    const fadeIn = () => {
        setAnimating(true);
        Animated.timing(opacity, {
            toValue: HALF_OPACITY,
            duration: ANIMATION_DURATION,
            useNativeDriver: true
        }).start();
        sleep(SLEEP_DURATION).then(() => setAnimating(false));
    };

    const avatarLogoTitleFadeIn = () => {
        Animated.timing(avatarLogoTitleOpacity, {
            toValue: HALF_OPACITY,
            duration: ANIMATION_DURATION,
            useNativeDriver: true
        }).start();
    };

    const sleep = (milliseconds: number) =>
        new Promise(resolve => setTimeout(resolve, milliseconds));

    const fadeOut = () => {
        setAnimating(true);
        Animated.timing(opacity, {
            toValue: ZERO_OPACITY,
            duration: ANIMATION_DURATION,
            useNativeDriver: true
        }).start();
        sleep(SLEEP_DURATION).then(() => setAnimating(false));
    };

    const avatarLogoTitleFadeOut = () => {
        Animated.timing(avatarLogoTitleOpacity, {
            toValue: ZERO_OPACITY,
            duration: ANIMATION_DURATION,
            useNativeDriver: true
        }).start();
    };

    const closeHandle = () => {
        if (isAnimating)
            return;
        setOpen(false);
        fadeOut();
        (async () => sleep(SLEEP_DURATION))().then(() => setVisibility(false));
    };

    const pressHandle = () => {
        if (isAnimating)
            return;
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
                photoTmp.current = response;
                saveUser(response);
            }
        });
    };

    const saveUser = async (photo: ImagePickerResponse) => {
        isStarted.current = true;
        setSaving(true);
        avatarLogoTitleFadeIn();

        const updatedUser = new FormData();

        updatedUser.append("id", user?.id);

        if (photo !== null && photo !== undefined) {
            updatedUser.append("image", {
                name: photo.fileName,
                type: photo.type,
                uri: photo?.uri,
            });
        }

        await UserService.updateUserImage(updatedUser, { cancelToken: source.current.token }).then((res) => {
            AsyncStorage.setItem("user", JSON.stringify(res.data));
            photoTmp.current = null;
        });

        await AsyncStorage.getItem("user").then((res) => {
            const newUser = JSON.parse(res!);

            setUser(newUser);
            loadStorageUser();
        });

        setSaving(false);
        avatarLogoTitleFadeOut();
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
                refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}>
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
                            <Animated.View style={isSaving && [{ opacity: avatarLogoTitleOpacity }]}>
                                <AvatarLogoTitle />
                            </Animated.View>

                            {isSaving && (

                                <ActivityIndicator
                                    style={SettingsStyle.spinner}
                                    size={26}
                                    color={DM("#414045")}
                                />

                            )}
                        </TouchableOpacity>
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
                        <View style={SwitchSelectorStyle.container}>
                            <Text style={[CreateJourneyStyle.text, { color: DM("black") }]}>App theme</Text>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity
                                    style={[SwitchSelectorStyle.leftButton, lightButtonStyle]}
                                    onPress={() => {
                                        setLightButtonStyle(activeButtonStyle);
                                        setDarkButtonStyle(inactiveButtonStyle);
                                        setSystemButtonStyle(inactiveButtonStyle);
                                        changeAppScheme("light");
                                    }}
                                >
                                    <Text
                                        style={[
                                            SwitchSelectorStyle.buttonText,
                                            lightButtonStyle,
                                        ]}
                                    >
                                    Light
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[
                                        SwitchSelectorStyle.leftButton,
                                        darkButtonStyle,
                                    ]}
                                    onPress={() => {
                                        setLightButtonStyle(inactiveButtonStyle);
                                        setDarkButtonStyle(activeButtonStyle);
                                        setSystemButtonStyle(inactiveButtonStyle);
                                        changeAppScheme("dark");
                                    }}
                                >
                                    <Text
                                        style={[
                                            SwitchSelectorStyle.buttonText,
                                            darkButtonStyle,
                                        ]}
                                    >
                                    Dark
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        SwitchSelectorStyle.rightButton,
                                        systemButtonStyle,
                                    ]}
                                    onPress={() => {
                                        setLightButtonStyle(inactiveButtonStyle);
                                        setDarkButtonStyle(inactiveButtonStyle);
                                        setSystemButtonStyle(activeButtonStyle);
                                        changeAppScheme("system");
                                    }}
                                >
                                    <Text
                                        style={[
                                            SwitchSelectorStyle.buttonText,
                                            systemButtonStyle,
                                        ]}
                                    >
                                    As system
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Animated.View
                        style={isVisible && [SettingsStyle.layout, { opacity, backgroundColor: DM("#000000") }]} />
                </View>
            </ScrollView>
            {renderBottomPopup()}
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
