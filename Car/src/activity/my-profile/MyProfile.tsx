import AsyncStorage from "@react-native-community/async-storage";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Animated, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import UserService from "../../../api-service/user-service/UserService";
import AuthContext from "../../components/auth/AuthContext";
import { useTheme } from "../../components/theme/ThemeProvider";
import TouchableNavigationCard from "../../components/touchable-navigation-card/TouchableNavigationCard";
import MyProfileStyle from "./MyProfileStyle";
import HeaderLogoutButton from "../../components/header-logout-button/HeaderLogoutButton";
import MyProfileTabsStyle from "./my-profile-tabs/MyProfileTabsStyle";
import AvatarLogoTitle from "../../components/avatar-logo-title/AvatarLogoTitle";
import BottomPopup from "../../components/bottom-popup/BottomPopup";
import { ImagePickerResponse, launchImageLibrary } from "react-native-image-picker/src";
import User from "../../../models/user/User";
import { HALF_OPACITY,
    MAX_POPUP_POSITION,
    MIN_POPUP_POSITION,
    POPUP_HEIGHT_WITHOUT_USER_IMAGE,
    POPUP_HEIGHT_WITH_USER_IMAGE,
    POPUP_POSITION_WHEN_CLOSED,
    ZERO_OPACITY
} from "../../constants/StylesConstants";
import { FIRST_ELEMENT_INDEX } from "../../constants/GeneralConstants";
import axios from "axios";
import { ANIMATION_DURATION } from "../../constants/AnimationConstants";
import { BottomSheet } from "react-native-elements";
import ConfirmModal from "../../components/confirm-modal/ConfirmModal";

const MyProfile = (props: { navigation: any }) => {
    const { setScheme, theme, colors } = useTheme();
    const isThemeDark = useTheme().isThemeDark;
    const { loadStorageUser } = useContext(AuthContext);
    const [user, setUser] = useState<User>(useContext(AuthContext).user);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const opacity = useState(new Animated.Value(ZERO_OPACITY))[FIRST_ELEMENT_INDEX];

    const moreOptionsRef = useRef<BottomSheet>(null) as any;
    const source = useRef(axios.CancelToken.source());
    const photoTmp = useRef(null as ImagePickerResponse | null);

    const activeButtonStyle = {
        backgroundColor: colors.primary,
        color: colors.white,
        borderColor: colors.primary
    };

    const inactiveButtonStyle = {
        backgroundColor: colors.white,
        color: colors.primary,
        borderColor: colors.primary
    };

    const setButtonStyle = (shouldBeHighlighted : boolean) =>{
        if(shouldBeHighlighted)
            return activeButtonStyle;

        return inactiveButtonStyle;
    };

    const [lightButtonStyle, setLightButtonStyle] = useState(setButtonStyle(theme === "light"));
    const [darkButtonStyle, setDarkButtonStyle] = useState(setButtonStyle(theme === "dark"));
    const [systemButtonStyle, setSystemButtonStyle] = useState(setButtonStyle(theme === "system"));

    useEffect(() => {
        setLightButtonStyle(setButtonStyle(theme === "light"));
        setDarkButtonStyle(setButtonStyle(theme === "dark"));
        setSystemButtonStyle(setButtonStyle(theme === "system"));
    }, [theme]);

    const changeAppScheme = (value) => {
        setScheme(value);
        AsyncStorage.setItem("theme", value);
    };

    useEffect(() => {
        if (props.navigation)
            return props.navigation.addListener("focus", () => {
                UserService.getUser(user!.id)
                    .then((res) => {
                        AsyncStorage.setItem("user", JSON.stringify(res.data));
                    })
                    .then(() => loadStorageUser());
            });
    }, [props.navigation]);

    const saveUser = async (photo: ImagePickerResponse) => {
        const updatedUser = new FormData();

        updatedUser.append("id", user?.id);

        if (photo !== null && photo !== undefined) {
            updatedUser.append("image", {
                name: photo.fileName,
                type: photo.type,
                uri: photo?.uri,
            });
            pressHandle();
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
        if(user?.imageId == null){
            pressHandle();
        }
    };

    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: HALF_OPACITY,
            duration: ANIMATION_DURATION,
            useNativeDriver: true
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(opacity, {
            toValue: ZERO_OPACITY,
            duration: ANIMATION_DURATION,
            useNativeDriver: true
        }).start();
    };

    const closeHandle = () => {
        fadeOut();
        setOpen(true);
    };

    const pressHandle = () => {
        if (isOpen) {
            fadeOut();
            setOpen(false);
        } else {
            fadeIn();
            setOpen(true);
        }

        moreOptionsRef?.current?.snapTo(
            isOpen ? MAX_POPUP_POSITION : MIN_POPUP_POSITION
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

    const renderBottomPopup = () => {

        return (
            <BottomPopup
                snapPoints={[
                    user?.imageId != null ? POPUP_HEIGHT_WITH_USER_IMAGE
                        : POPUP_HEIGHT_WITHOUT_USER_IMAGE,
                    POPUP_POSITION_WHEN_CLOSED
                ]}
                refForChild={moreOptionsRef}
                renderContent={
                    <View style={{ backgroundColor: colors.white,
                        height: user?.imageId == null ?
                            POPUP_HEIGHT_WITHOUT_USER_IMAGE : POPUP_HEIGHT_WITH_USER_IMAGE
                    }}>
                        <TouchableOpacity
                            style={MyProfileStyle.moreOptionsButton}
                            onPress={() => {
                                uploadPhotoHandle();
                            }}>
                            <Text style={[MyProfileStyle.changeAvatarText, { color: colors.primary }]}>
                                {user?.imageId == null ? "Add photo" : "Change photo"}
                            </Text>
                        </TouchableOpacity>
                        <View style={[MyProfileStyle.separator,
                            { backgroundColor: colors.secondaryDark }
                        ]} />
                        <TouchableOpacity
                            style={MyProfileStyle.moreOptionsButton}
                        >
                            <Text style={[MyProfileStyle.changeAvatarText, { color: colors.primary }]}>
                                My number
                            </Text>
                        </TouchableOpacity>
                        <View style={[MyProfileStyle.separator,
                            { backgroundColor: colors.secondaryDark }
                        ]} />
                        {user?.imageId != null ?
                            <>
                                <TouchableOpacity
                                    style={MyProfileStyle.moreOptionsButton}
                                    onPress={() => {
                                        pressHandle();
                                        setDeleteModalVisible(true);
                                    }}>
                                    <Text style={[MyProfileStyle.deleteAvatarText, { color: colors.accentOrange }]}>
                                        Delete photo
                                    </Text>
                                </TouchableOpacity>
                                <View style={[MyProfileStyle.separator,
                                    { backgroundColor: colors.secondaryDark }
                                ]} />
                            </> : <></>
                        }
                    </View>
                }
                initialSnap={MIN_POPUP_POSITION}
                renderHeader={
                    <View style={{ backgroundColor: colors.white }}>
                        <Text style={[MyProfileStyle.moreOptionsHeader, { color: colors.primary }]}>
                            Edit Profile
                        </Text>
                    </View>}
                enabledInnerScrolling={false}
                onCloseEnd={closeHandle}
                enabledGestureInteraction={false}
            />
        );
    };

    return (
        <View style={[MyProfileTabsStyle.container, { backgroundColor: colors.white }]}>
            <View style={[MyProfileTabsStyle.header, { borderColor: colors.neutralLight }]}>
                <Text style={[MyProfileTabsStyle.headerText, { color: colors.primary }]}>My Profile</Text>
            </View>
            <ScrollView>
                <View style={[MyProfileStyle.container, { backgroundColor: colors.white }]}>
                    <TouchableOpacity onPress={pressHandle}>
                        <AvatarLogoTitle />
                    </TouchableOpacity>
                    <View style={MyProfileStyle.switchSelector}>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                style={[
                                    MyProfileStyle.switchButton,
                                    MyProfileStyle.leftButtonBorder,
                                    lightButtonStyle]}
                                onPress={async () => {
                                    changeAppScheme("light");
                                }}
                            >
                                <Text
                                    style={[
                                        MyProfileStyle.buttonText,
                                        lightButtonStyle,
                                    ]}
                                >
                                    Light
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[
                                    MyProfileStyle.switchButton,
                                    MyProfileStyle.middleButtonBorder,
                                    darkButtonStyle,
                                ]}
                                onPress={() => {
                                    changeAppScheme("dark");
                                }}
                            >
                                <Text
                                    style={[
                                        MyProfileStyle.buttonText,
                                        darkButtonStyle,
                                    ]}
                                >
                                    Dark
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[
                                    MyProfileStyle.switchButton,
                                    MyProfileStyle.rightButtonBorder,
                                    systemButtonStyle,
                                ]}
                                onPress={() => {
                                    changeAppScheme("system");
                                }}
                            >
                                <Text
                                    style={[
                                        MyProfileStyle.buttonText,
                                        systemButtonStyle,
                                    ]}
                                >
                                    As system
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableNavigationCard
                        navigation={props.navigation}
                        navigationName="Badges"
                        cardName="Badges"
                        picture={
                            <Image
                                style={MyProfileStyle.image}
                                source={
                                    isThemeDark ?
                                        require("../../../assets/images/icons/my-profile/darkBadges.png")
                                        : require("../../../assets/images/icons/my-profile/lightBadges.png")
                                }
                            />
                        }
                    >
                        <Text style={[MyProfileStyle.text, { color: colors.primary }]}>Badges</Text>
                    </TouchableNavigationCard>

                    <TouchableNavigationCard
                        navigation={props.navigation}
                        navigationName="Preferences"
                        cardName="Preferences"
                        picture={
                            <Image
                                style={MyProfileStyle.image}
                                source={
                                    isThemeDark ?
                                        require("../../../assets/images/icons/my-profile/darkPreferences.png")
                                        : require("../../../assets/images/icons/my-profile/lightPreferences.png")
                                }
                            />
                        }
                    >
                        <Text style={[MyProfileStyle.text, { color: colors.primary }]}>Preferences</Text>
                    </TouchableNavigationCard>

                    <TouchableNavigationCard
                        navigation={props.navigation}
                        navigationName="CarTabs"
                        cardName="Your cars"
                        picture={
                            <Image
                                style={MyProfileStyle.image}
                                source={
                                    isThemeDark ?
                                        require("../../../assets/images/icons/my-profile/darkCars.png")
                                        : require("../../../assets/images/icons/my-profile/lightCars.png")
                                }
                            />
                        }
                    >
                        <Text style={[MyProfileStyle.text, { color: colors.primary }]}>My Cars</Text>
                    </TouchableNavigationCard>

                    <TouchableNavigationCard
                        navigation={props.navigation}
                        navigationName="AddressBookTabs"
                        cardName="Address book"
                        picture={
                            <Image
                                style={MyProfileStyle.image}
                                source={
                                    isThemeDark ?
                                        require("../../../assets/images/icons/my-profile/darkAddress.png")
                                        : require("../../../assets/images/icons/my-profile/lightAddress.png")
                                }
                            />
                        }
                    >
                        <Text style={[MyProfileStyle.text, { color: colors.primary }]}>Address Book</Text>
                    </TouchableNavigationCard>

                    <View style={MyProfileStyle.buttonLogout}>
                        <HeaderLogoutButton/>
                    </View>

                    <View style={MyProfileStyle.footerContainer}>
                        <TouchableOpacity>
                            <Text style={[MyProfileStyle.foterLeftRef, { color: colors.secondaryDark }]}>
                            Privacy Policy
                            </Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ color: colors.secondaryDark }}>•</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={[MyProfileStyle.footerRightRef, { color: colors.secondaryDark }]}>
                            Terms of Service
                            </Text>
                        </TouchableOpacity>
                    </View>

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
        </View>
    );
};

export default MyProfile;