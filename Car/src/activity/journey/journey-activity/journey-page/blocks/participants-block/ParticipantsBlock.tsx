import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearTextGradient } from "react-native-text-gradient";
import { Divider } from "react-native-elements";
import React from "react";
import Journey from "../../../../../../../models/journey/Journey";
import AvatarLogo from "../../../../../../components/avatar-logo/AvatarLogo";
import { useTheme } from "../../../../../../components/theme/ThemeProvider";
import { GRADIENT_START, GRADIENT_END } from "../../../../../../constants/StylesConstants";
import JourneyPageStyle from "../../JourneyPageStyle";
import * as navigation from "../../../../../../components/navigation/Navigation";

const ParticipantsBlock = ({ journey } : {journey: Journey}) => {
    const { colors } = useTheme();
    const iTD = useTheme().isThemeDark;

    return (
        <>
            <Text style={[JourneyPageStyle.applicantsHeader, { color: colors.primary }]}>
                SoftServians {journey?.participants?.length}/
                {journey?.countOfSeats}
            </Text>
            {journey?.participants.map((item, index) => (
                <View key={index}>
                    <TouchableOpacity
                        style={JourneyPageStyle.applicant}
                        onPress={() =>
                            navigation.navigate("Applicant Page", {
                                userId: item?.id
                            })
                        }
                    >
                        <View style={JourneyPageStyle.userImageBlock}>
                            <AvatarLogo user={item} size={38.5} />
                        </View>
                        <View style={JourneyPageStyle.userInfoBlock}>
                            <LinearTextGradient
                                locations={[GRADIENT_START, GRADIENT_END]}
                                colors={[colors.navyBlueGradientFrom, colors.navyBlueGradientFrom]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text style={[JourneyPageStyle.applicantNameText,
                                    { color: colors.navyBlueGradientFrom }
                                ]}>
                                    {item?.name} {item?.surname}
                                </Text>
                            </LinearTextGradient>
                            <View style={JourneyPageStyle.userSecondaryInfoBlock}>
                                <Text style={[JourneyPageStyle.userRoleText,
                                    { color: colors.secondaryDark }]}>
                                    {item?.position}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <Divider style={[JourneyPageStyle.separator,
                        { backgroundColor: iTD ? colors.neutralLight:colors.neutralDark }]} />
                </View>
            ))}
        </>
    );
};

export default ParticipantsBlock;