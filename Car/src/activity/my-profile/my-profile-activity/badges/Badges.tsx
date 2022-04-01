import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import AvatarLogoTitle from "../../../../components/avatar-logo-title/AvatarLogoTitle";
import { useTheme } from "../../../../components/theme/ThemeProvider";
import BadgeStyle from "../../../../components/badge/BadgeStyle";
import BadgeSlider from "../../../../components/badge-slider/BadgeSlider";
import BadgeSliderStyle from "../../../../components/badge-slider/BadgeSliderStyle";
import BadgeTypes from "../../../../components/badge/BadgeTypes";
import BadgeProps from "../../../../components/badge/BadgeProps";
import { ScrollView } from "react-native-gesture-handler";
import CheckAchieveContext from "../../../../components/check-achievements/CheckAchieveContext";

const Badges = () => {
    const { colors } = useTheme();
    const { badges } = useContext(CheckAchieveContext);
    const [passengerBadges] = useState(Array<BadgeProps>());
    const [driverBadges] = useState(Array<BadgeProps>());
    const [distanceBadges] = useState(Array<BadgeProps>());

    useEffect(() => {
        badges.forEach((item) => {
            if (item.type == BadgeTypes.passengerRides) passengerBadges.push(item);
            else if (item.type == BadgeTypes.driverRides) driverBadges.push(item);
            else distanceBadges.push(item);
        });
    }, []);

    return (
        <ScrollView style = {{ flexGrow: 1 }}>
            <View style = {[BadgeStyle.window]}>
                <AvatarLogoTitle/>
                <View style = {[BadgeStyle.caruselContainer]}>
                    <Text style = {[BadgeStyle.text, { color: colors.primary }]}>Passenger</Text>
                    <BadgeSlider badges = {passengerBadges}></BadgeSlider>
                    <Text style = {[BadgeStyle.text, { color: colors.primary }]}>Driver</Text>
                    <BadgeSlider badges = {driverBadges}></BadgeSlider>
                    <BadgeSlider badges = {distanceBadges}></BadgeSlider>
                </View>
            </View>
        </ScrollView>
    );
};

export default Badges;
