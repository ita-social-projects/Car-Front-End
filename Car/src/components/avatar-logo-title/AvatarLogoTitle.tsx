import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import AvatarLogo from "../avatar-logo/AvatarLogo";
import AuthContext from "../auth/AuthContext";
import AvatarLogoTitleStyle from "./AvatarLogoTitleStyle";
import { USER_STATE_CHANGE_EVENT_NAME } from "../../constants/ProfileConstants";
import { SINGLE_ELEMENT_COLLECTION_LENGTH } from "../../constants/GeneralConstants";
import User from "../../../models/user/User";
import DM from "../styles/DM";
import { EventRegister } from "react-native-event-listeners";
import { trimTheStringIfTooLong } from "../../utils/GeneralHelperFunctions";
import { MAX_USER_FULL_NAME_LENGTH_IN_PROFILE } from "../../constants/JourneyConstants";

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
                        {trimTheStringIfTooLong(user?.name + " " + user?.surname, MAX_USER_FULL_NAME_LENGTH_IN_PROFILE)}
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
