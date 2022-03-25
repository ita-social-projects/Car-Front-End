import React, { useContext, useEffect, useRef, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import PrivacyPolicyStyle from "./PrivacyPolicyStyle";
import { useTheme } from "../../components/theme/ThemeProvider";
import LinearGradient from "react-native-linear-gradient";
import TermsOfUsePage from "./TermsOfUsePage";
import PrivacyPolicyPage from "./PrivacyPolicyPage";
import AuthContext from "../../components/auth/AuthContext";
import UserService from "../../../api-service/user-service/UserService";
import AsyncStorage from "@react-native-community/async-storage";
import User from "../../../models/user/User";

const PrivacyPolicy = () => {
    const scrollRef = useRef(ScrollView.prototype);
    const { loadStorageUser } = useContext(AuthContext);
    const [, setUser] = useState<User>(useContext(AuthContext).user);
    const [clicked, setClicked] = useState(true);
    const MINSCROLLSCREEN = 0;
    const MAXSCROLLSCREEN = 3100;
    const { colors } = useTheme();
    const [unScrolled, setUnScrolled] = useState(true);
    const [yOffset, setYOffset] = useState(MINSCROLLSCREEN);

    const acceptPrivacyPolicy = async () =>{
        await UserService.acceptPrivacyPolicy().then((res) => {
            AsyncStorage.setItem("user", JSON.stringify(res.data));});
        await AsyncStorage.getItem("user").then((res) => {
            const newUser = JSON.parse(res!);

            setUser(newUser);
            loadStorageUser();
        });
    };

    useEffect(() => {
        if(yOffset > MAXSCROLLSCREEN) {
            setUnScrolled(false);
        }
    }, [yOffset]);

    return (
        clicked ?
            <View style={[PrivacyPolicyStyle.pageContainer, { backgroundColor: colors.white }]}>
                <LinearGradient style={PrivacyPolicyStyle.background}
                    colors={["transparent", colors.white]}
                    pointerEvents="none" />
                <ScrollView
                    ref = {scrollRef}
                    style={[PrivacyPolicyStyle.scroll]}
                    onScroll={event => {
                        setYOffset(event.nativeEvent.contentOffset.y);
                    }}
                    onScrollEndDrag={event => {
                        setYOffset(event.nativeEvent.contentOffset.y);
                    }}

                >
                    <PrivacyPolicyPage />
                </ScrollView>

                <View style={[PrivacyPolicyStyle.button]}>
                    <TouchableOpacity
                        style={[PrivacyPolicyStyle.button, unScrolled ?
                            { backgroundColor: colors.disableBack } :
                            { backgroundColor: colors.buttonBack }]}
                        disabled={unScrolled}
                        onPress={() => {
                            scrollRef.current?.scrollTo({ x: 0, y: 0, animated: false });
                            setClicked(false);
                            setYOffset(MINSCROLLSCREEN);
                            setUnScrolled(true);
                        }}
                    >
                        <Text style={[PrivacyPolicyStyle.buttonText, { color: colors.white }]}>Accept</Text>
                    </TouchableOpacity>
                </View>
            </View> :
            <View style={[PrivacyPolicyStyle.pageContainer, { backgroundColor: colors.white }]}>
                <LinearGradient style={PrivacyPolicyStyle.background}
                    colors={["transparent", colors.white]}
                    pointerEvents="none" />
                <ScrollView
                    ref = {scrollRef}
                    style={[PrivacyPolicyStyle.scroll]}
                    onScroll={event => {
                        setYOffset(event.nativeEvent.contentOffset.y);
                    }}
                    onScrollEndDrag={event => {
                        setYOffset(event.nativeEvent.contentOffset.y);
                    }}
                >
                    <TermsOfUsePage />
                </ScrollView>

                <View style={[PrivacyPolicyStyle.button]}>
                    <TouchableOpacity
                        style={[PrivacyPolicyStyle.button, unScrolled ?
                            { backgroundColor: colors.disableBack } :
                            { backgroundColor: colors.buttonBack }]}
                        disabled={unScrolled}
                        onPress={() => {
                            acceptPrivacyPolicy();
                        }}
                    >
                        <Text style={[PrivacyPolicyStyle.buttonText, { color: colors.white }]}>Accept</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
};

export default PrivacyPolicy;