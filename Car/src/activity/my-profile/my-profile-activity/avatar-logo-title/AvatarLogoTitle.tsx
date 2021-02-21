import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import "reflect-metadata";
import { container } from "tsyringe";
import UserService from "../../../../../api-service/user-service/UserService";
import AvatarLogo from "../../../../components/avatar-logo/AvatarLogo";
import AuthContext from "../../../auth/AuthContext";
import AvatarLogoTitleStyle from "./AvatarLogoTitleStyle";

function AvatarLogoTitle() {
    const { user } = useContext(AuthContext);
    const [journeysCount, setJourneysCount] = useState(user?.journeyCount);

    const userService = container.resolve(UserService);

    useEffect(() => {
        userService
            .getUser(Number(user?.id))
            .then((res) => setJourneysCount(res.data?.journeyCount));
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
                        {journeysCount === 1
                            ? "1 ride"
                            : journeysCount + " rides"}
                        , 2 badges
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default AvatarLogoTitle;
