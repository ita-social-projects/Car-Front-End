import JourneyPageStyle from "../../JourneyPageStyle";
import DM from "../../../../../../components/styles/DM";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as navigation from "../../../../../../components/navigation/Navigation";
import { Text, View } from "react-native";
import AvatarLogo from "../../../../../../components/avatar-logo/AvatarLogo";
import { MAX_USER_FULL_NAME_LENGTH } from "../../../../../../constants/JourneyConstants";
import { Divider } from "react-native-elements";
import React from "react";
import Journey from "../../../../../../../models/journey/Journey";
import { trimTheStringIfTooLong } from "../../../../../../utils/GeneralHelperFunctions";
import { getTimeToShow } from "../../../../../../utils/JourneyHelperFunctions";

const DriverBlock = ({ journey }: { journey: Journey }) => {
    const fullName = journey?.organizer?.name + " " + journey?.organizer?.surname;

    return (
        <View style={[JourneyPageStyle.contentView, { backgroundColor: DM("white") }]}>

            <TouchableOpacity
                style={JourneyPageStyle.userBlock}
                onPress={() =>
                    navigation.navigate("Applicant Page", {
                        userId: journey?.organizer?.id
                    })
                }
            >
                <View style={JourneyPageStyle.userImageBlock}>
                    <AvatarLogo user={journey?.organizer} size={38.5} />
                </View>
                <View style={JourneyPageStyle.userInfoBlock}>
                    <Text style={[JourneyPageStyle.userNameText, { color: DM("black") }]}>
                        {trimTheStringIfTooLong(fullName, MAX_USER_FULL_NAME_LENGTH)}'s ride
                    </Text>
                    <View style={JourneyPageStyle.userSecondaryInfoBlock}>
                        <Text style={[JourneyPageStyle.userRoleText, { color: DM("#909095") }]}>
                            {journey?.organizer?.position}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={JourneyPageStyle.journeyDetailBlock}>
                <Text style={[JourneyPageStyle.dateText, { color: DM("#02A2CF") }]}>
                    {getTimeToShow(journey)}
                </Text>
                <Text style={[JourneyPageStyle.feeText, { color: DM("black") }]}>
                    {journey?.isFree ? "Free" : "Paid"}
                </Text>
            </View>
            <View style={JourneyPageStyle.driverBlockWhiteSpace} />
            <Divider style={[JourneyPageStyle.separator, { backgroundColor: DM("#C1C1C5") }]} />
        </View>
    );
};

export default DriverBlock;