import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import UserService from "../../../../../api-service/user-service/UserService";
import AvatarLogo from "../../../../components/avatar-logo/AvatarLogo";
import AuthContext from "../../../../components/auth/AuthContext";
import AvatarLogoTitleStyle from "./AvatarLogoTitleStyle";

function AvatarLogoTitle () {
    const [user, setUser] = useState(useContext(AuthContext).user);

    useEffect(() => {
        UserService.getUser(Number(user?.id)).then((res) => setUser(res.data));
    });

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
                        {user?.journeyCount === 1
                            ? "1 ride"
                            : user?.journeyCount + " rides"}
                        , 2 badges
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default AvatarLogoTitle;
