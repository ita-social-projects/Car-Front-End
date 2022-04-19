import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import AvatarLogoTitle from "../../../../../components/avatar-logo-title/AvatarLogoTitle";
import ChooseOption from "../../../../../components/choose-opton/ChooseOption";
import PhoneNumberStyle from "./PhoneNumberStyle";
import AuthContext from "../../../../../components/auth/AuthContext";
import UserService from "../../../../../../api-service/user-service/UserService";
import User from "../../../../../../models/user/User";
import UserPhone from "../../../../../../models/user/UserPhone";
import NavigationAddListener from "../../../../../types/NavigationAddListener";
import PhoneNumberInput from "../../../../../components/phonenumber-input-button/PhoneNumberInput";
import AsyncStorage from "@react-native-community/async-storage";

const PhoneNumber = (props: NavigationAddListener) => {
    const [user, setUser] = useState<User>(useContext(AuthContext).user);
    const { loadStorageUser } = useContext(AuthContext);

    const [isNumberVisible, setVisibility] = useState(user?.isNumberVisible);

    const [number, setNumber] = useState(user?.phoneNumber ?? "");

    const updateUserNumberAsync = async () => {
        const updatedUser: UserPhone = {
            id: user!.id,
            phoneNumber: number,
            isNumberVisible: isNumberVisible!,
        };

        await UserService.updateUserPhone(updatedUser).then((res) => {
            AsyncStorage.setItem("user", JSON.stringify(res.data));
        });
        await AsyncStorage.getItem("user").then((res) => {
            const updatedUser = JSON.parse(res!);

            setUser(updatedUser);
            loadStorageUser();
        });
    };

    useEffect(() => {
        if (props.navigation)
            return props.navigation.addListener("focus", () => {
                UserService.getUser(user!.id)
                    .then((res) => {
                        setUser(res.data);
                    })
                    .then(() => loadStorageUser());
            });
    }, [props.navigation]);

    useEffect(() => {
        return props.navigation.addListener("blur", updateUserNumberAsync);
    }, [updateUserNumberAsync]);

    return (
        <View style= {[PhoneNumberStyle.window]}>

            <AvatarLogoTitle />

            <View style={ PhoneNumberStyle.container }>
                <ChooseOption
                    text="Do you agree to show your phone number to other registered users to contact you?"
                    value={ isNumberVisible! }
                    onValueChanged={ (value) => {
                        setVisibility(value);
                    }}
                />
            </View>

            <View style={ PhoneNumberStyle.container }>
                <PhoneNumberInput
                    number={ number }
                    onChangeText={ (text) => setNumber(text) }
                    onClearPress={ () => setNumber("") }
                    isVisible={ isNumberVisible! }
                />
            </View>
        </View>
    );
};

export default PhoneNumber;