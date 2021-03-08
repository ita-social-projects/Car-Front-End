import React, { useContext, useEffect, useRef, useState } from "react";
import { Animated, RefreshControl, ScrollView, Text, TouchableOpacity, View } from "react-native";
import SettingsStyle from "./SettingsStyle";
import TouchableNavigationCard from "../../../../components/touchable-navigation-card/TouchableNavigationCard";
import AvatarLogoTitle from "../../../../components/avatar-logo-title/AvatarLogoTitle";
import BottomPopup from "../../../../components/bottom-popup/BottomPopup";
import { launchImageLibrary } from "react-native-image-picker/src";
import UserService from "../../../../../api-service/user-service/UserService";
import AuthContext from "../../../../components/auth/AuthContext";
import AsyncStorage from "@react-native-community/async-storage";
import { BottomSheet } from "react-native-elements";

const Settings = (props: any) => {

    const [user, setUser] = useState(useContext(AuthContext).user);
    const [isOpen, setOpen] = useState(false);
    const [isVisible, setVisibility] = useState(false);
    const [isRefreshing, setRefreshing] = useState(false);

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

    const sleep = (milliseconds: number) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    };

    const fadeOut = () => Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
    }).start();

    const closeHandle = () => {
        setOpen(false);
        fadeOut();
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
                const updatedUser = new FormData();

                updatedUser.append("id", user?.id);
                updatedUser.append("name", user?.name);
                updatedUser.append("surname", user?.surname);
                updatedUser.append("position", user?.position);
                updatedUser.append("location", user?.location);
                updatedUser.append("image", response);

                UserService.updateUser(updatedUser).then(() =>
                    UserService.getUser(user!.id).then((res) =>
                        AsyncStorage.setItem("user", JSON.stringify(res.data))));
            }
        });
    };

    const deletePhotoHandle = () => {
        const updatedUser = new FormData();

        updatedUser.append("id", user?.id);
        updatedUser.append("name", user?.name);
        updatedUser.append("surname", user?.surname);
        updatedUser.append("position", user?.position);
        updatedUser.append("location", user?.location);

        UserService.updateUser(updatedUser).then(() =>
            UserService.getUser(user!.id).then((res) =>
                AsyncStorage.setItem("user", JSON.stringify(res.data))));
    };

    const moreOptionsContent = () => (
        <View style={SettingsStyle.moreOptions}>
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
                    deletePhotoHandle();
                    pressHandle();
                }}>
                <Text style={SettingsStyle.deleteAvatarText}>
                    Delete Avatar
                </Text>
            </TouchableOpacity>
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
                    <BottomPopup
                        snapPoints={[0, 188]}
                        refForChild={moreOptionsRef}
                        renderContent={moreOptionsContent}
                        initialSnap={0}
                        renderHeader={moreOptionsHeader}
                        enabledInnerScrolling={false}
                        onCloseEnd={closeHandle}
                    />
                </View>
            </ScrollView>

        </>
    );
};

export default Settings;
