import React, { useContext } from "react";
import { Text, View } from "react-native";
import "reflect-metadata";
import AvatarLogo from "../../../../components/avatar-logo/AvatarLogo";
import { AuthContext } from "../../../auth/AuthProvider";
import AvatarLogoTitleStyle from "./AvatarLogoTitleStyle";

function AvatarLogoTitle() {
    const { user } = useContext(AuthContext);

    return (
        <View style={AvatarLogoTitleStyle.container}>
            <View style={AvatarLogoTitleStyle.headerContainer}>
                <AvatarLogo user={user} size={56} />
                <View style={AvatarLogoTitleStyle.headerUserInformation}>
                    <Text style={AvatarLogoTitleStyle.headerUserName}>
                        {user?.name + " " + user?.surname}
                    </Text>
                    <Text style={AvatarLogoTitleStyle.headerUserAdditionalData}>
                        {user?.position}
                    </Text>
                    <Text style={AvatarLogoTitleStyle.headerUserAdditionalData}>
                        123 rides, 2 badges
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default AvatarLogoTitle;
