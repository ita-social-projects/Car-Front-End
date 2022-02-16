import AsyncStorage from "@react-native-community/async-storage";
import React, { useContext, useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import UserService from "../../../api-service/user-service/UserService";
import AuthContext from "../../components/auth/AuthContext";
import { useTheme } from "../../components/theme/ThemeProvider";
import TouchableNavigationCard from "../../components/touchable-navigation-card/TouchableNavigationCard";
import MyProfileStyle from "./MyProfileStyle";
import HeaderLogoutButton from "../../components/header-logout-button/HeaderLogoutButton";

const MyProfile = (props: { navigation: any }) => {

    const { setScheme, theme, colors } = useTheme();
    const isThemeDark = useTheme().isThemeDark;
    const { user, loadStorageUser } = useContext(AuthContext);

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

    return (
        <ScrollView>
            <View style={[MyProfileStyle.container, { backgroundColor: colors.white }]}>
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
    );
};

export default MyProfile;
