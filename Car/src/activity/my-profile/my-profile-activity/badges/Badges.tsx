import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AvatarLogoTitle from "../../../../components/avatar-logo-title/AvatarLogoTitle";
import MyProfileTabsStyle from "../../my-profile-tabs/MyProfileTabsStyle";
import { useTheme } from "../../../../components/theme/ThemeProvider";
import BadgeStyle from "../../../../components/badge/BadgeStyle";
import BadgeSlider from "../../../../components/badge-slider/BadgeSlider";
import BadgeSliderStyle from "../../../../components/badge-slider/BadgeSliderStyle";
import allBadges from "../../../../components/badge/BadgeObjects";
import BadgeTypes from "../../../../components/badge/BadgeTypes";
import BadgeProps from "../../../../components/badge/BadgeProps";

const Badges = () => {

    const { colors } = useTheme();
    const [passengerBadges] = useState(Array<BadgeProps>());
    const [driverBadges] = useState(Array<BadgeProps>());
    const [distanceBadges] = useState(Array<BadgeProps>());

    useEffect(() => {
        allBadges.forEach(item => {
            item.type == BadgeTypes.passengerRides ? passengerBadges.push(item) :
                item.type == BadgeTypes.driverRides ? driverBadges.push(item) :
                    distanceBadges.push(item);
        });
    }, []);

    return (
        <View style = {{ paddingHorizontal: 9 }}>
            <TouchableOpacity
                style={[MyProfileTabsStyle.profileInfo,
                    {
                        borderColor: colors.neutralLight,
                        backgroundColor: colors.white,
                        elevation: 7,
                    }]}
            >
                <AvatarLogoTitle/>
            </TouchableOpacity>

            <View style = {BadgeStyle.container}>
                <Text style = {[BadgeStyle.text, { color: colors.primary }]}>Passenger</Text>
                <BadgeSlider style = {BadgeSliderStyle.slider} badges = {passengerBadges}></BadgeSlider>
                <Text style = {[BadgeStyle.text, { color: colors.primary }]}>Driver</Text>
                <BadgeSlider style = {BadgeSliderStyle.slider} badges = {driverBadges}></BadgeSlider>
                <BadgeSlider style = {BadgeSliderStyle.slider} badges = {distanceBadges}></BadgeSlider>
            </View>
        </View>
    );
};

export default Badges;
