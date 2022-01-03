import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import AvatarLogo from "../avatar-logo/AvatarLogo";
import AuthContext from "../auth/AuthContext";
import AvatarLogoTitleStyle from "./AvatarLogoTitleStyle";
import { USER_STATE_CHANGE_EVENT_NAME } from "../../constants/ProfileConstants";
import { SINGLE_ELEMENT_COLLECTION_LENGTH } from "../../constants/GeneralConstants";
import User from "../../../models/user/User";
import { useTheme } from "../theme/ThemeProvider";
import { EventRegister } from "react-native-event-listeners";
import { trimTheStringIfTooLong } from "../../utils/GeneralHelperFunctions";
import { MAX_USER_FULL_NAME_LENGTH_IN_PROFILE } from "../../constants/JourneyConstants";

const AvatarLogoTitle = (props : { userToDisplay? : User }) => {
    const { colors } = useTheme();
    const contextUser = useContext(AuthContext).user;

    const [user, setUser] = useState<User>(props.userToDisplay || contextUser);

    useEffect(() => {
        const changeEvent = EventRegister.addEventListener(
            USER_STATE_CHANGE_EVENT_NAME,
            u => setUser(props.userToDisplay || u)
        );

        return () => {
            EventRegister.removeEventListener(changeEvent.toString());
        };
    }, []);

    return (
        <View style={AvatarLogoTitleStyle.container}>
            <View style={AvatarLogoTitleStyle.headerContainer}>
                <AvatarLogo user={user} size={56} marginTop={14} marginLeft={8}/>
                <View style={AvatarLogoTitleStyle.headerUserInformation}>
                    <Text style={[AvatarLogoTitleStyle.headerUserName, { color: colors.accentBlue }]}>
                        {trimTheStringIfTooLong(user?.name + " " + user?.surname, MAX_USER_FULL_NAME_LENGTH_IN_PROFILE)}
                    </Text>
                    <Text style={[AvatarLogoTitleStyle.headerUserAdditionalData,
                        { color: colors.secondaryDark, fontWeight: "bold" }
                    ]}>
                        {user?.position}
                    </Text>
                    <Text style={[AvatarLogoTitleStyle.headerUserAdditionalData,
                        { color: colors.secondaryDark }
                    ]}>
                        {user?.location}
                    </Text>
                    <Text style={[AvatarLogoTitleStyle.headerUserAdditionalData,
                        { color: colors.secondaryDark }
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
