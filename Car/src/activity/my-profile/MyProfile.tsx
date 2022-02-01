import AsyncStorage from "@react-native-community/async-storage";
import React, { useContext, useEffect } from "react";
import { Image, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import UserService from "../../../api-service/user-service/UserService";
import AuthContext from "../../components/auth/AuthContext";
import { useTheme } from "../../components/theme/ThemeProvider";
import TouchableNavigationCard from "../../components/touchable-navigation-card/TouchableNavigationCard";
import MyProfileStyle from "./MyProfileStyle";

const MyProfile = (props: { navigation: any }) => {
    const { colors } = useTheme();
    const isThemeDark = useTheme().isThemeDark;
    const { user, loadStorageUser } = useContext(AuthContext);

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
        <View style={[MyProfileStyle.container, { backgroundColor: colors.white }]}>
            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="Details"
                cardName="Details"
                picture={
                    <Ionicons
                        name={"person-circle-outline"}
                        size={20}
                        color={colors.hover}
                    />
                }
            >
                <Text style={[MyProfileStyle.text, { color: colors.primary }]}>Details</Text>
            </TouchableNavigationCard>

            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="Preferences"
                cardName="Preferences"
                picture={
                    <Ionicons
                        name={"options-outline"}
                        size={20}
                        style={MyProfileStyle.optionIcon}
                        color={colors.hover}
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
                        style={{ width: 20, height: 20,
                            borderRadius:0,
                            resizeMode: "contain" }}
                        source = {
                            isThemeDark ?
                                require("../../../assets/images/icons/lightCar.png")
                                :require("../../../assets/images/icons/darkCar.png")
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
                    <Ionicons
                        name={"bookmark-outline"}
                        size={20}
                        color={colors.hover}
                    />
                }
            >
                <Text style={[MyProfileStyle.text, { color: colors.primary }]}>Address Book</Text>
            </TouchableNavigationCard>

            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="SettingsTabs"
                cardName="Settings"
                picture={
                    <Ionicons
                        name={"settings-outline"}
                        size={20}
                        color={colors.hover}
                    />
                }
            >
                <Text style={[MyProfileStyle.text, { color: colors.primary }]}>Settings</Text>
            </TouchableNavigationCard>
        </View>
    );
};

export default MyProfile;
