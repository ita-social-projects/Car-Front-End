import { Text, View } from "react-native";
import JourneyPageStyle from "../JourneyPageStyle";
import DM from "../../../../../components/styles/DM";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as navigation from "../../../../../components/navigation/Navigation";
import AvatarLogo from "../../../../../components/avatar-logo/AvatarLogo";
import { LinearTextGradient } from "react-native-text-gradient";
import { GRADIENT_END, GRADIENT_START } from "../../../../../constants/StylesConstants";
import { Divider } from "react-native-elements";
import React from "react";
import Journey from "../../../../../../models/journey/Journey";

const ParticipantsBlock = ({ journey } : {journey: Journey}) => {
    return (
        <>
            <Text style={[JourneyPageStyle.applicantsHeader, { color: DM("black") }]}>
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
                                colors={["#00A3CF", "#5552A0"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text style={[JourneyPageStyle.applicantNameText,
                                    { color: DM("#00A3CF") }
                                ]}>
                                    {item?.name} {item?.surname}
                                </Text>
                            </LinearTextGradient>
                            <View style={JourneyPageStyle.userSecondaryInfoBlock}>
                                <Text style={[JourneyPageStyle.userRoleText,
                                    { color: DM("#909095") }]}>
                                    {item?.position}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <Divider style={[JourneyPageStyle.separator,
                        { backgroundColor: DM("#C1C1C5") }]} />
                </View>
            ))}
        </>
    );
};

export default ParticipantsBlock;