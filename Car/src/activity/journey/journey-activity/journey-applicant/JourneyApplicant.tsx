import React, { useEffect, useState } from "react";
import { Image, Linking, Text, View } from "react-native";
import UserService from "../../../../../api-service/user-service/UserService";
import User from "../../../../../models/user/User";
import JourneyApplicantStyle from "./JourneyApplicantStyle";
import Indicator from "../../../../components/activity-indicator/Indicator";
import { useTheme } from "../../../../components/theme/ThemeProvider";
import ConfirmModal from "../../../../components/confirm-modal/ConfirmModal";
import Clipboard from "@react-native-community/clipboard";
import AvatarLogoTitle from "../../../../components/avatar-logo-title/AvatarLogoTitle";
import { Shadow } from "react-native-shadow-2";
import UserStatisticService from "../../../../../api-service/user-service/UserStatisticService";
import UserStatistic from "../../../../../models/user/UserStatistic";
import allBadges from "../../../../components/badge/BadgeObjects";
import BadgeTypes from "../../../../components/badge/BadgeTypes";
import { SIX, TEN, THIRTEEN, ZERO } from "../../../../constants/GeneralConstants";

const JourneyApplicant = (props: {route: {params: { userId: number }}}) => {
    const shadowXPosition = 0;
    const shadowYPosition = 3;

    const { colors } = useTheme();
    const { userId } = props.route.params;
    const [user, setUser] = useState({} as User);
    const [isLoading, setLoading] = useState(true);
    const [isCallingButtonVisible, setCallingButtonVisible] = useState(false);

    const [currentAchieve, setCurrentAchieve] = useState<UserStatistic>(null);
    const [currentBadgeAsPassanger, setcurrentBadgeAsPassanger] = useState(allBadges[ZERO]);
    const [currentBadgeAsDriver, setcurrentBadgeAsDriver] = useState(allBadges[SIX]);
    const [currentBadgeAsTotalKm, setcurrentBadgeAsTotalKm] = useState(allBadges[THIRTEEN]);

    useEffect(() => {
        UserService.getUser(userId).then((res) =>
            (async () => setUser(res.data))().then(() => setLoading(false))
        );

        UserStatisticService.getUserStatisticById(userId).then((result) => {
            setCurrentAchieve(result.data);
        });

    }, []);

    useEffect(() => {
        for(let badge of allBadges)
        {
            if(badge.type === BadgeTypes.passengerRides)
            {
                if(currentAchieve?.passangerJourneysAmount! >= badge.points)
                {
                    setcurrentBadgeAsPassanger(badge);
                }
            }

            if(badge.type === BadgeTypes.driverRides)
            {
                if(currentAchieve?.driverJourneysAmount! >= badge.points)
                {
                    setcurrentBadgeAsDriver(badge);
                }
            }
            if(badge.type === BadgeTypes.driverDistance)
            {
                if(currentAchieve?.totalKm! >= badge.points)
                {
                    setcurrentBadgeAsTotalKm(badge);
                }
            }
        }

    }, [currentAchieve]);

    return (
        <View style={[JourneyApplicantStyle.mainContainer, { backgroundColor: colors.white }]}>
            {isLoading ? (
                <View style = {[JourneyApplicantStyle.indicator]}>
                    <Indicator
                        color="#414045"
                        size="large"
                        text="Loading information..."
                    />
                </View>
            ) : (
                <>
                    <AvatarLogoTitle userToDisplay={user}/>
                    {
                        currentAchieve?.passangerJourneysAmount! !== ZERO ||
                        currentAchieve?.driverJourneysAmount! !== ZERO ||
                        currentAchieve?.totalKm! >= TEN ?
                            <>
                                <View style = {[JourneyApplicantStyle.speceBetweenContainer]}></View>
                                <Shadow
                                    distance={8}
                                    startColor={colors.shadow}
                                    offset={[shadowXPosition, shadowYPosition]}
                                >
                                    <View style = {[JourneyApplicantStyle.containerBadge,
                                        {
                                            borderColor: colors.neutralLight,
                                            backgroundColor: colors.white
                                        }]}>
                                        {
                                            currentAchieve?.passangerJourneysAmount !== ZERO &&
                                                <Image source = {currentBadgeAsPassanger.pathUnlocked}/>
                                        }
                                        {
                                            currentAchieve?.driverJourneysAmount! !== ZERO &&
                                                <Image source = {currentBadgeAsDriver.pathUnlocked}/>
                                        }
                                        {
                                            currentAchieve?.totalKm! >= TEN &&
                                                <Image source = {currentBadgeAsTotalKm.pathUnlocked}/>
                                        }
                                    </View>
                                </Shadow>
                            </> : <>
                                <Text style = {[JourneyApplicantStyle.textNotification, { color: colors.primary }]}>
                                    {"After the first completed trip, \nyou’ll get the first badge."}
                                </Text>
                                <Image source = {require("../../../../../assets/images/badges/nobadges.png")} />
                            </>
                    }
                </>
            )}
            <ConfirmModal
                confirmText={"Call " + user?.name}
                disableModal={() => {
                    setCallingButtonVisible(false);
                    Clipboard.setString(user?.phoneNumber != null ? user?.phoneNumber.toString() : " ");}}
                onConfirm={() => {Linking.openURL(`tel:${user?.phoneNumber}`);}}
                title={user?.name + " " + user?.surname}
                visible={isCallingButtonVisible}
                cancelText={"Copy number"}
                confirmColor={colors.accentRed}
                hideCancelButton={false}
                subtitle={user?.phoneNumber != null ? user?.phoneNumber.toString() : undefined}/>
        </View>
    );
};

export default JourneyApplicant;
