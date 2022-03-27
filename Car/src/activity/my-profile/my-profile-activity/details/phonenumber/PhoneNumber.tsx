import { useTheme } from "../../../../../components/theme/ThemeProvider";
import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import AvatarLogoTitle from "../../../../../components/avatar-logo-title/AvatarLogoTitle";
import MyProfileTabsStyle from "../../../my-profile-tabs/MyProfileTabsStyle";
import ChooseOption from "../../../../../components/choose-opton/ChooseOption";
import PhoneNumberStyle from "./PhoneNumberStyle";
import AuthContext from "../../../../../components/auth/AuthContext";
import UserService from "../../../../../../api-service/user-service/UserService";
import User from "../../../../../../models/user/User";
import UserPhone from "../../../../../../models/user/UserPhone";
import NavigationAddListener from "../../../../../types/NavigationAddListener";
import PhoneNumberInput from "../../../../../components/phonenumber-input-button/PhoneNumberInput";

const PhoneNumber = (props: NavigationAddListener) => {
    const { colors } = useTheme();
    const [user, setUser] = useState<User>(useContext(AuthContext).user);
    const { loadStorageUser } = useContext(AuthContext);

    const [isNumberVisible, setVisibility] = useState(user?.isNumberVisible);

    const [number, setNumber] = useState(user?.phoneNumber ?? "");

    const updateUserNumber = () => {
        const updatedUser: UserPhone = {
            id: user!.id,
            phoneNumber: number,
            isNumberVisible: isNumberVisible!,
        };

        UserService.updateUserPhone(updatedUser);
        UserService.getUser(user!.id)
            .then((res) => {
                setUser(res.data);
            })
            .then(() => loadStorageUser());
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
        return props.navigation.addListener("blur", updateUserNumber);
    }, [updateUserNumber]);

    return (
        <View style={{ paddingHorizontal:9 }}>
            <TouchableOpacity
                style={[MyProfileTabsStyle.profileInfo,
                    {
                        borderColor: colors.neutralLight,
                        backgroundColor: colors.white,
                        elevation: 7
                    }]}
            >
                <AvatarLogoTitle />
            </TouchableOpacity>
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