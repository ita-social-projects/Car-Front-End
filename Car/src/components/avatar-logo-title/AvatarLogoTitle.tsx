import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import UserService from "../../../api-service/user-service/UserService";
import AvatarLogo from "../avatar-logo/AvatarLogo";
import AuthContext from "../auth/AuthContext";
import AvatarLogoTitleStyle from "./AvatarLogoTitleStyle";
import { SINGLE_ELEMENT_COLLECTION_LENGTH } from "../../constants/Constants";
import DM from "../styles/DM";

const AvatarLogoTitle = () => {
    const [user, setUser] = useState(useContext(AuthContext).user);

    useEffect(() => {
        UserService.getUser(Number(user?.id)).then((res) => setUser(res.data));
    }, []);

    return (
        <View style={AvatarLogoTitleStyle.container}>
            <View style={AvatarLogoTitleStyle.headerContainer}>
                <AvatarLogo user={user} size={56} />
                <View style={AvatarLogoTitleStyle.headerUserInformation}>
                    <Text style={[AvatarLogoTitleStyle.headerUserName, { color: DM("black") }]}>
                        {user?.name + " " + user?.surname}
                    </Text>
                    <Text style={[AvatarLogoTitleStyle.headerUserAdditionalData,
                        { color: DM("black") }
                    ]}>
                        {user?.position}
                    </Text>
                    <Text style={[AvatarLogoTitleStyle.headerUserAdditionalData,
                        { color: DM("black") }
                    ]}>
                        {user?.journeyCount === SINGLE_ELEMENT_COLLECTION_LENGTH
                            ? "1 ride"
                            : user?.journeyCount + " rides"}
                        , 2 badges
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default AvatarLogoTitle;
