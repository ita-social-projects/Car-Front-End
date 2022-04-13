import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import AvatarLogo from "../avatar-logo/AvatarLogo";
import AuthContext from "../auth/AuthContext";
import AvatarLogoTitleStyle from "./AvatarLogoTitleStyle";
import { USER_STATE_CHANGE_EVENT_NAME } from "../../constants/ProfileConstants";
import User from "../../../models/user/User";
import { useTheme } from "../theme/ThemeProvider";
import { EventRegister } from "react-native-event-listeners";
import { trimTheStringIfTooLong } from "../../utils/GeneralHelperFunctions";
import { MAX_USER_FULL_NAME_LENGTH_IN_PROFILE } from "../../constants/JourneyConstants";
import { ScrollView } from "react-native-gesture-handler";
import { Shadow } from "react-native-shadow-2";
import UserStatisticService from "../../../api-service/user-service/UserStatisticService";
import UserStatistic from "../../../models/user/UserStatistic";

const AvatarLogoTitle = (props : { userToDisplay? : User}) => {
    const { colors } = useTheme();
    const contextUser = useContext(AuthContext).user;
    const shadowXPosition = 0;
    const shadowYPosition = 3;
    const [user, setUser] = useState<User>(props.userToDisplay || contextUser);
    const [currentAchieve, setCurrentAchieve] = useState<UserStatistic>(null);

    useEffect(() => {
        if (user !== null) {
            UserStatisticService.getUserStatisticById(user.id).then((result) => {
                setCurrentAchieve(result.data);
            });
        }

        const changeEvent = EventRegister.addEventListener(
            USER_STATE_CHANGE_EVENT_NAME,
            u => setUser(props.userToDisplay || u)
        );

        return () => {
            EventRegister.removeEventListener(changeEvent.toString());
        };
    }, []);

    return (
        <Shadow distance={8} startColor={colors.shadow} offset={[shadowXPosition, shadowYPosition]}>
            <View style={[AvatarLogoTitleStyle.mainContainer,
                {
                    borderColor: colors.neutralLight,
                    backgroundColor: colors.white
                }]}
            >
                <ScrollView>
                    <View style={AvatarLogoTitleStyle.headerContainer}>
                        <AvatarLogo user={user} size={56} marginTop={0}/>
                        <View style={AvatarLogoTitleStyle.headerUserInformation}>
                            <Text style={[AvatarLogoTitleStyle.headerUserName, { color: colors.primary }]}>
                                {trimTheStringIfTooLong(user?.name + " " +
                                    user?.surname, MAX_USER_FULL_NAME_LENGTH_IN_PROFILE)}
                            </Text>
                            <Text style={[AvatarLogoTitleStyle.headerUserPosition,
                                { color: colors.hover, fontWeight: "bold" }
                            ]}>
                                {user?.position}
                            </Text>
                            <Text style={[AvatarLogoTitleStyle.headerUserLocation,
                                { color: colors.secondaryDark }
                            ]}>
                                {user?.location}
                            </Text>
                            <Text style={[AvatarLogoTitleStyle.headerUserRides,
                                { color: colors.secondaryDark }
                            ]}>
                                {currentAchieve?.driverJourneysAmount + " rides as driver"}
                            </Text>
                            <Text style={[AvatarLogoTitleStyle.headerUserRides,
                                { color: colors.secondaryDark }
                            ]}>
                                {currentAchieve?.passangerJourneysAmount + " rides as passanger"}
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Shadow>
    );
};

export default AvatarLogoTitle;
