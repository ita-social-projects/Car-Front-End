import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import AvatarLogo from "../avatar-logo/AvatarLogo";
import AuthContext from "../auth/AuthContext";
import AvatarLogoTitleStyle from "./AvatarLogoTitleStyle";
import { SINGLE_ELEMENT_COLLECTION_LENGTH, USER_STATE_CHANGE_EVENT_NAME } from "../../constants/Constants";
import User from "../../../models/user/User";
import DM from "../styles/DM";
import { EventRegister } from "react-native-event-listeners";

const AvatarLogoTitle = () => {
    const [user, setUser] = useState<User>(useContext(AuthContext).user);

    useEffect(() => {
        const changeEvent = EventRegister.addEventListener(
            USER_STATE_CHANGE_EVENT_NAME,
            u => setUser(u)
        );

        return () => {
            EventRegister.removeEventListener(changeEvent.toString());
        };
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
