import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import AvatarLogo from "../avatar-logo/AvatarLogo";
import User from "../../../models/user/User";
import { useTheme } from "../theme/ThemeProvider";
import { trimTheStringIfTooLong } from "../../utils/GeneralHelperFunctions";
import { MAX_USER_FULL_NAME_LENGTH_IN_PROFILE } from "../../constants/JourneyConstants";
import AvatarLogoTitleStyle from "../avatar-logo-title/AvatarLogoTitleStyle";
import Stop from "../../../models/stop/Stop";
import StopLogoTitleStyle from "./StopLogoTitleStyle";
import AuthContext from "../auth/AuthContext";

const StopLogoTitle = (props: {userToDisplay: User, stopToDisplay: Stop}) => {
    const isThemeDark = useTheme().isThemeDark;
    const [user, setUser] = useState<User>(props.userToDisplay);
    const [stop, setStop] = useState<Stop>(props.stopToDisplay);
    const contextUser = useContext(AuthContext).user;

    useEffect(() => {
        setUser(props.userToDisplay || contextUser);
    }, []);

    useEffect(() => {
        setStop(props.stopToDisplay);
    });

    return (
        <View style={StopLogoTitleStyle.container}>
            <View style={AvatarLogoTitleStyle.headerContainer}>
                <View style = {{ bottom:25 }}>
                    <AvatarLogo user={user} size={56} marginTop={20} marginLeft={20}/>
                </View>
                <View style={AvatarLogoTitleStyle.headerUserInformation}>
                    <Text style={[AvatarLogoTitleStyle.headerUserName, { color: isThemeDark ? "#FFFFFF" : "#0B171B" }]}>
                        {trimTheStringIfTooLong(user?.name + " " + user?.surname + "'s stop"
                            ,MAX_USER_FULL_NAME_LENGTH_IN_PROFILE)}
                    </Text>
                    <Text style={[AvatarLogoTitleStyle.headerUserName, { color: "#00A3CF" }]}>
                        {(user?.position)}
                    </Text>
                    <View>
                        <Text style={[StopLogoTitleStyle.headerStopData, { color: "#909095" }]}>
                            {(stop?.address?.name)}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default StopLogoTitle;
